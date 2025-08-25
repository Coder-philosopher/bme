"use client"
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, makeQueryClient } from "@/lib/queryClient"; // ✅ updated import
import { Save, RefreshCw, Settings, Database, Eye, Lock, Shield, AlertTriangle } from "lucide-react";

// ✅ create client instance
const queryClient = makeQueryClient();

const Admin = () => {
  const { toast } = useToast();
  const [selectedSection, setSelectedSection] = useState("about");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lockoutTime, setLockoutTime] = useState(0);
  const [sessionExpiry, setSessionExpiry] = useState<Date | null>(null);

  // Session management and security
  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_auth');
    const savedExpiry = localStorage.getItem('admin_expiry');
    
    if (savedAuth === 'true' && savedExpiry) {
      const expiryDate = new Date(savedExpiry);
      if (new Date() < expiryDate) {
        setIsAuthenticated(true);
        setSessionExpiry(expiryDate);
      } else {
        localStorage.removeItem('admin_auth');
        localStorage.removeItem('admin_expiry');
      }
    }

    // Auto-logout after session expiry
    if (sessionExpiry) {
      const timeout = setTimeout(() => {
        handleLogout();
      }, sessionExpiry.getTime() - new Date().getTime());

      return () => clearTimeout(timeout);
    }
  }, [sessionExpiry]);

  // Lockout timer
  useEffect(() => {
    if (lockoutTime > 0) {
      const timer = setTimeout(() => {
        setLockoutTime(lockoutTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [lockoutTime]);

  const handleAuth = () => {
    if (lockoutTime > 0) {
      toast({
        title: "Account Locked",
        description: `Too many failed attempts. Try again in ${lockoutTime} seconds.`,
        variant: "destructive",
      });
      return;
    }

    if (password === "admin123" || password === "biomedadmin2024") {
      setIsAuthenticated(true);
      setLoginAttempts(0);
      
      // Set 2-hour session
      const expiry = new Date(Date.now() + 2 * 60 * 60 * 1000);
      setSessionExpiry(expiry);
      localStorage.setItem('admin_auth', 'true');
      localStorage.setItem('admin_expiry', expiry.toISOString());
      
      toast({
        title: "Authentication Successful",
        description: "Welcome to the admin panel! Session expires in 2 hours.",
      });
    } else {
      const attempts = loginAttempts + 1;
      setLoginAttempts(attempts);
      
      if (attempts >= 3) {
        setLockoutTime(300); // 5 minutes lockout
        toast({
          title: "Account Locked",
          description: "Too many failed attempts. Account locked for 5 minutes.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Authentication Failed",
          description: `Invalid password. ${3 - attempts} attempts remaining.`,
          variant: "destructive",
        });
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSessionExpiry(null);
    localStorage.removeItem('admin_auth');
    localStorage.removeItem('admin_expiry');
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
  };

  const { data: allData, isLoading } = useQuery({
    queryKey: ["/api/department-data"],
    enabled: isAuthenticated,
  });

  const updateMutation = useMutation({
    mutationFn: async ({ section, data }: { section: string; data: any }) => {
      return apiRequest("PUT", `/api/department-data/${section}`, { data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/department-data"] });
      toast({
        title: "Success",
        description: "Data updated successfully!",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update data. Please try again.",
        variant: "destructive",
      });
    },
  });

  const DataEditor = ({ section, data }: { section: string; data: any }) => {
    const [editedData, setEditedData] = useState(JSON.stringify(data, null, 2));

    const handleSave = () => {
      try {
        const parsedData = JSON.parse(editedData);
        updateMutation.mutate({ section, data: parsedData });
      } catch (error) {
        toast({
          title: "Invalid JSON",
          description: "Please check your JSON syntax and try again.",
          variant: "destructive",
        });
      }
    };

    return (
      <div className="space-y-4" data-testid={`editor-${section}`}>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900 capitalize" data-testid={`heading-${section}`}>
            {section} Data
          </h3>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={() => setEditedData(JSON.stringify(data, null, 2))}
              data-testid={`button-reset-${section}`}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button
              onClick={handleSave}
              disabled={updateMutation.isPending}
              className="bg-primary-teal hover:bg-teal-700"
              data-testid={`button-save-${section}`}
            >
              <Save className="h-4 w-4 mr-2" />
              {updateMutation.isPending ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
        
        <Textarea
          value={editedData}
          onChange={(e) => setEditedData(e.target.value)}
          className="min-h-96 font-mono text-sm"
          placeholder="Enter JSON data..."
          data-testid={`textarea-${section}`}
        />
        
        <div className="text-sm text-gray-500">
          <p><strong>Note:</strong> Please ensure valid JSON format before saving.</p>
          <p>Use proper quotes for strings and avoid trailing commas.</p>
        </div>
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen page-content flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100" data-testid="admin-login">
        <Card className="modern-card w-full max-w-md mx-4 p-8 shadow-xl">
          <div className="text-center mb-6">
            <div className="relative">
              <Shield className="h-16 w-16 text-primary-teal mx-auto mb-4" />
              {lockoutTime > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  <Lock className="h-3 w-3" />
                </div>
              )}
            </div>
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2" data-testid="heading-admin-login">
              Secure Admin Access
            </h1>
            <p className="text-gray-600" data-testid="text-admin-login-subtitle">
              Department Administration Portal
            </p>
            {lockoutTime > 0 && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center justify-center text-red-700">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    Account locked for {Math.floor(lockoutTime / 60)}:{(lockoutTime % 60).toString().padStart(2, '0')}
                  </span>
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Admin Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter secure admin password"
                onKeyPress={(e) => e.key === "Enter" && handleAuth()}
                disabled={lockoutTime > 0}
                className="modern-input mt-1"
                data-testid="input-admin-password"
              />
              {loginAttempts > 0 && lockoutTime === 0 && (
                <p className="text-sm text-orange-600 mt-1">
                  {loginAttempts} failed attempt{loginAttempts > 1 ? 's' : ''}. {3 - loginAttempts} remaining.
                </p>
              )}
            </div>
            
            <Button
              onClick={handleAuth}
              disabled={lockoutTime > 0}
              className="w-full bg-primary-teal hover:bg-teal-700 shadow-lg hover:shadow-xl"
              size="lg"
              data-testid="button-admin-login"
            >
              <Lock className="h-4 w-4 mr-2" />
              {lockoutTime > 0 ? "Account Locked" : "Secure Login"}
            </Button>
            
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="text-center text-sm text-gray-500">
                <p className="font-medium mb-2">Available Test Credentials:</p>
                <div className="space-y-1">
                  <p><span className="font-mono bg-gray-100 px-2 py-1 rounded">admin123</span> - Basic Access</p>
                  <p><span className="font-mono bg-gray-100 px-2 py-1 rounded">biomedadmin2024</span> - Full Access</p>
                </div>
              </div>
              
              <div className="text-xs text-gray-400 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="h-3 w-3" />
                  <span>Session expires in 2 hours • Lockout after 3 failed attempts</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20" data-testid="admin-loading">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-6"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const sections = allData || [];
  const sectionNames = sections.map((section: any) => section.section);

  return (
    <div className="min-h-screen pt-20 bg-gray-50" data-testid="page-admin">
      {/* Header */}
      <section className="py-12 bg-white shadow-sm" data-testid="section-admin-header">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Database className="h-8 w-8 text-primary-teal" />
              <div>
                <h1 className="text-3xl font-heading font-bold text-gray-900" data-testid="heading-admin-title">
                  Department Data Administration
                </h1>
                <p className="text-gray-600" data-testid="text-admin-subtitle">
                  Manage and update department information
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => queryClient.invalidateQueries({ queryKey: ["/api/department-data"] })}
                data-testid="button-refresh-all"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh All
              </Button>
              
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                data-testid="button-logout"
              >
                <Lock className="h-4 w-4 mr-2" />
                Secure Logout
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Panel */}
      <section className="py-12" data-testid="section-admin-panel">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Section Navigation */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24" data-testid="card-section-nav">
                <h3 className="text-lg font-semibold text-gray-900 mb-4" data-testid="heading-sections">
                  Data Sections
                </h3>
                <div className="space-y-2">
                  {sectionNames.map((sectionName: string) => (
                    <Button
                      key={sectionName}
                      variant={selectedSection === sectionName ? "default" : "ghost"}
                      className={`w-full justify-start ${selectedSection === sectionName ? "bg-primary-teal hover:bg-teal-700" : ""}`}
                      onClick={() => setSelectedSection(sectionName)}
                      data-testid={`button-section-${sectionName}`}
                    >
                      <Database className="h-4 w-4 mr-2" />
                      {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}
                    </Button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Data Editor */}
            <div className="lg:col-span-3">
              <Card className="p-6" data-testid="card-data-editor">
                {sections.length === 0 ? (
                  <div className="text-center py-12" data-testid="empty-sections">
                    <Database className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No Data Found</h3>
                    <p className="text-gray-500">No department data sections available.</p>
                  </div>
                ) : (
                  <>
                    {sections
                      .filter((section: any) => section.section === selectedSection)
                      .map((section: any) => (
                        <DataEditor
                          key={section.section}
                          section={section.section}
                          data={section.data}
                        />
                      ))}
                  </>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white" data-testid="section-quick-actions">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8" data-testid="heading-quick-actions">
            Quick Actions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-xl transition-all duration-300" data-testid="card-action-stats">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-teal p-3 rounded-full">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Update Stats</h3>
                  <p className="text-gray-600 text-sm">Modify department statistics</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all duration-300" data-testid="card-action-events">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-blue p-3 rounded-full">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Manage Events</h3>
                  <p className="text-gray-600 text-sm">Add or edit upcoming events</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all duration-300" data-testid="card-action-faculty">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-teal p-3 rounded-full">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Faculty Info</h3>
                  <p className="text-gray-600 text-sm">Update faculty information</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all duration-300" data-testid="card-action-gallery">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-blue p-3 rounded-full">
                  <RefreshCw className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Gallery</h3>
                  <p className="text-gray-600 text-sm">Manage image gallery</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="py-12 bg-gray-50" data-testid="section-instructions">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="p-8" data-testid="card-instructions">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6" data-testid="heading-instructions">
              Admin Panel Instructions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Edit Data</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Select a section from the left navigation</li>
                  <li>• Edit the JSON data in the text area</li>
                  <li>• Ensure proper JSON formatting</li>
                  <li>• Click &quot;Save&quot; to update the data</li>
                  <li>• Use &quot;Reset&quot; to revert changes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Notes</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Always backup data before making changes</li>
                  <li>• Test changes on a staging environment first</li>
                  <li>• Follow the existing data structure</li>
                  <li>• Use proper quotes for strings in JSON</li>
                  <li>• Refresh pages to see changes on frontend</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800">
                <strong>Warning:</strong> This is a production admin panel. Changes made here will 
                immediately affect the live website. Please exercise caution when editing data.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Admin;
