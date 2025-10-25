// app/admin/page.tsx
"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, makeQueryClient } from "@/lib/queryClient";
import { Save, RefreshCw, Settings, Database, Eye, Lock, Shield, AlertTriangle } from "lucide-react";

// ✅ create client instance
const queryClient = makeQueryClient();

// Helper functions for sessionStorage data management (unchanged)
const getSessionData = (section: string) => {
  try {
    const data = sessionStorage.getItem(`admin_data_${section}`);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Error reading session data for ${section}:`, error);
    return null;
  }
};

const setSessionData = (section: string, data: any) => {
  try {
    sessionStorage.setItem(`admin_data_${section}`, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(`Error saving session data for ${section}:`, error);
    return false;
  }
};

const getSessionDataAsString = (section: string) => {
  try {
    const data = sessionStorage.getItem(`admin_data_${section}`);
    return data ? JSON.stringify(JSON.parse(data), null, 2) : "{}";
  } catch (error) {
    console.error(`Error formatting session data for ${section}:`, error);
    return "{}";
  }
};

const updateSessionDataFromString = (section: string, jsonString: string) => {
  try {
    const parsedData = JSON.parse(jsonString);
    setSessionData(section, parsedData);
    return true;
  } catch (error) {
    console.error(`Error updating session data for ${section}:`, error);
    return false;
  }
};

const Admin = () => {
  const { toast } = useToast();
  const [selectedSection, setSelectedSection] = useState("about");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lockoutTime, setLockoutTime] = useState(0);
  const [sessionExpiry, setSessionExpiry] = useState<Date | null>(null);

  // refs to prevent re-runs
  const dataProcessedRef = useRef(false);
  const initialSectionSetRef = useRef(false);

  // On mount: optionally try to verify existing cookie (optional endpoint)
 

  // Separate useEffect for session expiry timeout (unchanged)
  useEffect(() => {
    if (sessionExpiry) {
      const timeout = setTimeout(() => {
        handleLogout();
      }, sessionExpiry.getTime() - new Date().getTime());
      return () => clearTimeout(timeout);
    }
  }, [sessionExpiry]);

  // Lockout timer (unchanged)
  useEffect(() => {
    if (lockoutTime > 0) {
      const timer = setTimeout(() => {
        setLockoutTime(lockoutTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [lockoutTime]);

  // NEW: server-backed authentication (calls /api/admin-login)
  const handleAuth = useCallback(async () => {
    if (lockoutTime > 0) {
      toast({
        title: "Account Locked",
        description: `Too many failed attempts. Try again in ${lockoutTime} seconds.`,
        variant: "destructive",
      });
      return;
    }

    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
        credentials: "include", // important so server can set HTTP-only cookie
      });

      if (res.ok) {
        // server set HTTP-only cookie; set client session info for UX
        setIsAuthenticated(true);
        setLoginAttempts(0);

        const expiry = new Date(Date.now() + 2 * 60 * 60 * 1000); // match server cookie TTL
        setSessionExpiry(expiry);
        sessionStorage.setItem("admin_auth", "true");
        sessionStorage.setItem("admin_expiry", expiry.toISOString());

        toast({
          title: "Authentication Successful",
          description: "Welcome to the admin panel! Session expires in 2 hours.",
        });
      } else {
        const attempts = loginAttempts + 1;
        setLoginAttempts(attempts);

        if (attempts >= 3) {
          setLockoutTime(300);
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
    } catch (err) {
      console.error("Login request failed:", err);
      toast({
        title: "Network Error",
        description: "Unable to contact server. Try again.",
        variant: "destructive",
      });
    }
  }, [lockoutTime, password, loginAttempts, toast]);

  // NEW: logout — call server to clear cookie, then clear client session
  const handleLogout = useCallback(async () => {
    try {
      // Try to clear cookie on server; if endpoint absent, this will 404 and we still clear client state
      await fetch("/api/admin-logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (e) {
      console.warn("Logout request failed:", e);
    } finally {
      setIsAuthenticated(false);
      setSessionExpiry(null);
      dataProcessedRef.current = false;
      initialSectionSetRef.current = false;

      // Clear all admin session data
      Object.keys(sessionStorage).forEach((key) => {
        if (key.startsWith("admin_")) {
          sessionStorage.removeItem(key);
        }
      });

      toast({
        title: "Logged Out",
        description: "You have been logged out successfully.",
      });
    }
  }, [toast]);

  // API call with stable reference — your existing query already uses credentials through apiRequest
  const { data: allData, isLoading } = useQuery({
    queryKey: ["/api/department-data"],
    enabled: isAuthenticated,
    staleTime: 30000, // Cache for 30 seconds to prevent excessive refetching
    refetchOnWindowFocus: false, // Prevent refetch on window focus
  });

  // Memoize sections
  const sections = useMemo(() => {
    return allData && Array.isArray(allData) ? allData : [];
  }, [allData]);

  const sectionNames = useMemo(() => {
    return sections.map((section: any) => section.section);
  }, [sections]);

  // Process data and store in sessionStorage - same as before
  useEffect(() => {
    if (allData && Array.isArray(allData) && !dataProcessedRef.current) {
      allData.forEach((section: any) => {
        if (section.section && section.data) {
          setSessionData(section.section, section.data);
        }
      });

      dataProcessedRef.current = true;
    }
  }, [allData]);

  // Set initial section
  useEffect(() => {
    if (sectionNames.length > 0 && !initialSectionSetRef.current) {
      if (!sectionNames.includes(selectedSection)) {
        setSelectedSection(sectionNames[0]);
      }
      initialSectionSetRef.current = true;
    }
  }, [sectionNames, selectedSection]);

  // Reset refs when authentication changes
  useEffect(() => {
    if (!isAuthenticated) {
      dataProcessedRef.current = false;
      initialSectionSetRef.current = false;
    }
  }, [isAuthenticated]);

  // Mutation with stable reference — apiRequest uses credentials: "include", so cookie will be sent
  const updateMutation = useMutation({
    mutationFn: async ({ section, data }: { section: string; data: any }) => {
      // Use the apiRequest helper so it uses credentials: include
      return apiRequest("PUT", `/api/department-data/${section}`, { data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/department-data"] });
      dataProcessedRef.current = false; // Allow data reprocessing after update
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

  // The DataEditor component remains unchanged, just ensure it uses updateMutation correctly.
  const DataEditor = useCallback(
    ({ section, data }: { section: string; data: any }) => {
      const [editedData, setEditedData] = useState("{}");
      const [hasChanges, setHasChanges] = useState(false);
      const [originalData, setOriginalData] = useState("{}");
      const dataInitializedRef = useRef(false);

      useEffect(() => {
        if (data && !dataInitializedRef.current) {
          let dataToUse = data;
          const sessionData = getSessionData(section);
          if (sessionData) {
            dataToUse = sessionData;
          }

          const formattedData = JSON.stringify(dataToUse, null, 2);
          setEditedData(formattedData);

          const originalFormatted = JSON.stringify(data, null, 2);
          setOriginalData(originalFormatted);

          setHasChanges(formattedData !== originalFormatted);

          dataInitializedRef.current = true;
        }
      }, [section, data]);

      useEffect(() => {
        dataInitializedRef.current = false;
      }, [section]);

      const handleTextareaChange = useCallback(
        (value: string) => {
          setEditedData(value);
          try {
            JSON.parse(value);
            updateSessionDataFromString(section, value);
          } catch (error) {
            // invalid JSON, don't crash
          }
          setHasChanges(value !== originalData);
        },
        [section, originalData]
      );

      const handleSave = useCallback(() => {
        try {
          const parsedData = JSON.parse(editedData);
          setSessionData(section, parsedData);
          updateMutation.mutate({ section, data: parsedData });
        } catch (error) {
          toast({
            title: "Invalid JSON",
            description: "Please check your JSON syntax and try again.",
            variant: "destructive",
          });
        }
      }, [editedData, section, updateMutation, toast]);

      const handleReset = useCallback(() => {
        if (data) {
          const resetData = JSON.stringify(data, null, 2);
          setEditedData(resetData);
          setOriginalData(resetData);
          setSessionData(section, data);
          setHasChanges(false);
          toast({
            title: "Reset Complete",
            description: "Data has been reset to backend version.",
          });
        }
      }, [data, section, toast]);

      if (!data) {
        return (
          <div className="space-y-4">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-96 bg-gray-200 rounded"></div>
            </div>
          </div>
        );
      }

      return (
        <div className="space-y-4" data-testid={`editor-${section}`}>
          <div className="flex items-center justify-between">
            <h3
              className="text-xl font-semibold text-gray-900 capitalize"
              data-testid={`heading-${section}`}
            >
              {section} Data
            </h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={handleReset}
                disabled={!hasChanges}
                className="border-orange-300 text-orange-700 hover:bg-orange-50"
                data-testid={`button-reset-${section}`}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button
                onClick={handleSave}
                disabled={updateMutation.isPending || !hasChanges}
                className={`${
                  hasChanges ? "bg-red-600 hover:bg-red-700 shadow-lg" : "bg-green-600 hover:bg-green-700"
                } text-white`}
                data-testid={`button-save-${section}`}
              >
                <Save className="h-4 w-4 mr-2" />
                {updateMutation.isPending ? "Saving..." : hasChanges ? "Save Changes" : "Saved"}
              </Button>
            </div>
          </div>

          {hasChanges && (
            <div className="p-3 bg-amber-50 border border-amber-300 rounded-lg">
              <div className="flex items-center text-amber-800">
                <AlertTriangle className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Unsaved changes detected</span>
              </div>
            </div>
          )}

          <Textarea
            value={editedData}
            onChange={(e) => handleTextareaChange(e.target.value)}
            className="min-h-96 font-mono text-sm border-2 focus:border-red-400 focus:ring-red-100 resize-none"
            placeholder="Enter JSON data..."
            spellCheck={false}
            autoComplete="off"
            data-testid={`textarea-${section}`}
          />

          <div className="text-sm text-gray-500 bg-blue-50 p-3 rounded-lg border border-blue-200">
            <p>
              <strong>Note:</strong> Data is automatically saved to session storage as you type (if valid JSON).
            </p>
            <p>Click "Save Changes" to push updates to the backend server.</p>
            <p className="text-xs mt-1">
              <strong>Tip:</strong> Use Ctrl+A to select all, then paste properly formatted JSON.
            </p>
          </div>
        </div>
      );
    },
    [updateMutation, toast]
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50" data-testid="admin-login">
        <Card className="modern-card w-full max-w-md mx-4 p-8 shadow-2xl border-2 border-red-100">
          <div className="text-center mb-6">
            <div className="relative">
              <Shield className="h-16 w-16 text-red-600 mx-auto mb-4" />
              {lockoutTime > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  <Lock className="h-3 w-3" />
                </div>
              )}
            </div>
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2" data-testid="heading-admin-login">
              🔐 Admin Control Panel
            </h1>
            <p className="text-red-700 font-medium" data-testid="text-admin-login-subtitle">
              Restricted Access - Department Administration
            </p>
            {lockoutTime > 0 && (
              <div className="mt-4 p-3 bg-red-100 border-2 border-red-300 rounded-xl">
                <div className="flex items-center justify-center text-red-800">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  <span className="text-sm font-bold">
                    LOCKED: {Math.floor(lockoutTime / 60)}:{(lockoutTime % 60).toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                🔑 Admin Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter secure admin password"
                onKeyPress={(e) => e.key === "Enter" && handleAuth()}
                disabled={lockoutTime > 0}
                className="modern-input mt-1 border-2 border-red-200 focus:border-red-400"
                data-testid="input-admin-password"
              />
              {loginAttempts > 0 && lockoutTime === 0 && (
                <p className="text-sm text-red-600 mt-1 font-medium">
                  ⚠️ {loginAttempts} failed attempt{loginAttempts > 1 ? "s" : ""}. {3 - loginAttempts} remaining.
                </p>
              )}
            </div>

            <Button
              onClick={handleAuth}
              disabled={lockoutTime > 0}
              className="w-full bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl border-2 border-red-400"
              size="lg"
              data-testid="button-admin-login"
            >
              <Lock className="h-4 w-4 mr-2" />
              {lockoutTime > 0 ? "🚫 ACCOUNT LOCKED" : "🔓 SECURE ACCESS"}
            </Button>

            <div className="space-y-3 pt-4 border-t-2 border-orange-200">
              <div className="text-center text-sm text-gray-600">
                <p className="text-xs mt-1">Enter the admin password to access the panel.</p>
              </div>

              <div className="text-xs text-gray-500 text-center bg-gray-50 p-2 rounded">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="h-3 w-3" />
                  <span>⏱️ 2hr session • 🔒 3-attempt lockout • 💾 Secure storage</span>
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
      <div className="min-h-screen pt-32" data-testid="admin-loading">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="animate-spin h-12 w-12 border-4 border-red-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Loading Admin Data</h3>
            <p className="text-gray-600">Fetching department data sections...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-25 via-orange-25 to-yellow-25 pt-24" data-testid="page-admin">
      {/* Header */}
      <section className="py-12 bg-white shadow-lg border-b-4 border-red-500" data-testid="section-admin-header">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Database className="h-8 w-8 text-red-600" />
              <div>
                <h1 className="text-3xl font-heading font-bold text-gray-900" data-testid="heading-admin-title">
                  🛠️ Department Data Administration
                </h1>
                <p className="text-red-700 font-medium" data-testid="text-admin-subtitle">
                  ⚠️ Live Production Environment - Changes Apply Immediately
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => {
                  dataProcessedRef.current = false;
                  queryClient.invalidateQueries({ queryKey: ["/api/department-data"] });
                }}
                className="border-2 border-orange-400 text-orange-700 hover:bg-orange-50"
                data-testid="button-refresh-all"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                🔄 Refresh All
              </Button>

              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-2 border-red-400 text-red-700 hover:bg-red-50 font-bold"
                data-testid="button-logout"
              >
                <Lock className="h-4 w-4 mr-2" />
                🔐 Secure Logout
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
              <Card className="p-6 sticky top-24 border-2 border-orange-200 shadow-xl" data-testid="card-section-nav">
                <h3 className="text-lg font-semibold text-gray-900 mb-4" data-testid="heading-sections">
                  📂 Data Sections ({sectionNames.length})
                </h3>
                <div className="space-y-2">
                  {sectionNames.map((sectionName: string) => (
                    <Button
                      key={sectionName}
                      variant={selectedSection === sectionName ? "default" : "ghost"}
                      className={`w-full justify-start font-medium transition-all ${
                        selectedSection === sectionName
                          ? "bg-red-600 hover:bg-red-700 text-white border-2 border-red-400 shadow-lg"
                          : "text-gray-700 hover:bg-orange-50 border border-gray-200"
                      }`}
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
              <Card className="p-6 border-2 border-red-200 shadow-xl" data-testid="card-data-editor">
                {sections.length === 0 ? (
                  <div className="text-center py-12" data-testid="empty-sections">
                    <Database className="h-16 w-16 text-red-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-red-600 mb-2">⚠️ No Data Found</h3>
                    <p className="text-gray-500">No department data sections available.</p>
                  </div>
                ) : (
                  <>
                    {sections
                      .filter((section: any) => section.section === selectedSection)
                      .map((section: any) => (
                        <DataEditor
                          key={`${section.section}-${dataProcessedRef.current}`}
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

      {/* Usage Instructions */}
      <section className="py-12 bg-white border-t-4 border-orange-500" data-testid="section-instructions">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="p-8 border-2 border-yellow-300 shadow-xl" data-testid="card-instructions">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6" data-testid="heading-instructions">
              📋 Admin Panel Instructions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">✏️ How to Edit Data</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Select a section from the left navigation</li>
                  <li>• Edit the JSON data in the text area</li>
                  <li>• Data auto-saves to session storage as you type</li>
                  <li>• Click "Save Changes" to push updates to backend</li>
                  <li>• Use "Reset" to restore from backend</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">⚠️ Important Notes</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Session storage provides immediate feedback</li>
                  <li>• Changes persist during your session</li>
                  <li>• Always validate JSON before saving</li>
                  <li>• Use "Refresh All" to reload from backend</li>
                  <li>• Logout clears all session data</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg">
              <p className="text-red-800 font-medium">
                <strong>🚨 CRITICAL WARNING:</strong> This admin panel directly modifies live production data.
                All changes are immediately reflected on the public website. Exercise extreme caution.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Admin;
