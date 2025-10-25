"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  Users,
  Award,
  Briefcase,
  Building2,
  Calendar,
} from "lucide-react";

// Hardcoded placement data
const placementData = {
  placement_data: [
    { batch: "2024-2025", eligible: 30, offer_received: 6 },
    { batch: "2023-2024", eligible: 52, offer_received: 9 },
    { batch: "2022-2023", eligible: 58, offer_received: 28 },
    { batch: "2021-2022", eligible: 37, offer_received: 21 },
    { batch: "2020-2021", eligible: 28, offer_received: 9 },
  ],
  details: {
    institution: "National Institute of Technology Raipur",
    department: "Bio-Medical Engineering (B.Tech)",
    placement_overview: {
      batch_wise_summary: [
        {
          batch: "2024-2025",
          academic_year: "2024-25",
          eligible_students: 30,
          total_offers_received: 6,
          placement_percentage: 20.0,
          highest_ctc_lpa: 16.2,
          lowest_ctc_lpa: 5.5,
          average_ctc_lpa: 8.76,
          total_recruiters: 135,
        },
        {
          batch: "2023-2024",
          academic_year: "2023-24",
          eligible_students: 52,
          total_offers_received: 9,
          placement_percentage: 17.31,
          highest_ctc_lpa: "NA",
          lowest_ctc_lpa: "NA",
          average_ctc_lpa: "NA",
          total_recruiters: 127,
        },
        {
          batch: "2022-2023",
          academic_year: "2022-23",
          eligible_students: 58,
          total_offers_received: 28,
          placement_percentage: 48.28,
          highest_ctc_lpa: 12.0,
          lowest_ctc_lpa: 6.0,
          average_ctc_lpa: 8.38,
          total_recruiters: 11,
        },
        {
          batch: "2021-2022",
          academic_year: "2021-22",
          eligible_students: 37,
          total_offers_received: 21,
          placement_percentage: 56.76,
          highest_ctc_lpa: "NA",
          lowest_ctc_lpa: "NA",
          average_ctc_lpa: "NA",
          total_recruiters: 19,
        },
        {
          batch: "2020-2021",
          academic_year: "2020-21",
          eligible_students: 28,
          total_offers_received: 9,
          placement_percentage: 32.14,
          highest_ctc_lpa: 10.0,
          lowest_ctc_lpa: 3.6,
          average_ctc_lpa: 6.8,
          total_recruiters: 8,
        },
      ],
      five_year_trends: {
        total_eligible_students: 205,
        total_offers_received: 73,
        overall_placement_percentage: 35.61,
      },
    },
    detailed_placement_data: {
      "2024-2025": {
        placements: [
          { company_name: "Analitica Global", students_placed: 1, ctc_lpa: 7.0 },
          { company_name: "GE Healthcare", students_placed: 2, ctc_lpa: 16.2 },
          { company_name: "PharmaAce", students_placed: 1, ctc_lpa: 8.6 },
          { company_name: "Sri Chaitanya", students_placed: 1, ctc_lpa: 5.5 },
          { company_name: "Wipro", students_placed: 2, ctc_lpa: 6.5 },
        ],
      },
      "2023-2024": {
        placements: [
          { company_name: "Zscaler", students_placed: 1 },
          { company_name: "PharmaACE", students_placed: 2 },
          { company_name: "Amazon", students_placed: 1 },
          { company_name: "Impact Analytics", students_placed: 1 },
          { company_name: "PRADAN", students_placed: 1 },
          { company_name: "Sri Chaitanya Education", students_placed: 1 },
          { company_name: "ZS Associates", students_placed: 1 },
          { company_name: "PhonePe", students_placed: 1 },
        ],
      },
      "2022-2023": {
        placements: [
          { company_name: "TCS Digital", students_placed: 2, ctc_lpa: 9.0 },
          { company_name: "EXL", students_placed: 4, ctc_lpa: 6.5 },
          { company_name: "Quantiphi", students_placed: 3, ctc_lpa: 8.5 },
          { company_name: "PharmaACE", students_placed: 2, ctc_lpa: 7.5 },
          { company_name: "Tredence", students_placed: 2, ctc_lpa: 10.0 },
          { company_name: "NexTurn", students_placed: 3, ctc_lpa: 6.0 },
          { company_name: "Zycus", students_placed: 1, ctc_lpa: 8.25 },
          { company_name: "Aakash Byju's", students_placed: 3, ctc_lpa: 9.0 },
          { company_name: "Sprinklr", students_placed: 1, ctc_lpa: 12.0 },
          { company_name: "PRADAN", students_placed: 1, ctc_lpa: 8.16 },
          { company_name: "TCS INI", students_placed: 1, ctc_lpa: 9.0 },
        ],
      },
    },
    company_frequency_analysis: {
      recurring_recruiters: [
        {
          company_name: "PharmaACE",
          appearances: 5,
          years: ["2020-21", "2021-22", "2022-23", "2023-24", "2024-25"],
          total_students_placed: 7,
        },
        {
          company_name: "GE Healthcare",
          appearances: 2,
          years: ["2021-22", "2024-25"],
          total_students_placed: 4,
        },
        {
          company_name: "ZS Associates",
          appearances: 2,
          years: ["2021-22", "2023-24"],
          total_students_placed: 3,
        },
        {
          company_name: "Tredence Analytics",
          appearances: 3,
          years: ["2020-21", "2021-22", "2022-23"],
          total_students_placed: 5,
        },
        {
          company_name: "EXL Service",
          appearances: 2,
          years: ["2021-22", "2022-23"],
          total_students_placed: 5,
        },
        {
          company_name: "PRADAN",
          appearances: 3,
          years: ["2021-22", "2022-23", "2023-24"],
          total_students_placed: 4,
        },
        {
          company_name: "TCS",
          appearances: 3,
          years: ["2020-21", "2022-23", "2022-23"],
          total_students_placed: 4,
        },
        {
          company_name: "Wipro",
          appearances: 2,
          years: ["2020-21", "2024-25"],
          total_students_placed: 3,
        },
      ],
    },
  },
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const Placement = () => {
  const [selectedYear, setSelectedYear] = useState("2024-2025");

  const summary = placementData.details.placement_overview.batch_wise_summary;
  const trendData = placementData.details.placement_overview.five_year_trends;
  const companies = placementData.details.company_frequency_analysis.recurring_recruiters;

  // Chart data transformations
  const placementTrendData = summary.map((s) => ({
    year: s.batch.split("-")[0],
    eligible: s.eligible_students,
    placed: s.total_offers_received,
    percentage: s.placement_percentage,
  }));

  const ctcData = summary
    .filter((s) => s.average_ctc_lpa !== "NA")
    .map((s) => ({
      year: s.batch.split("-")[0],
      highest: s.highest_ctc_lpa,
      average: s.average_ctc_lpa,
      lowest: s.lowest_ctc_lpa,
    }));

  const currentYearData = summary.find((s) => s.batch === selectedYear);
  const currentYearCompanies =
    placementData.details.detailed_placement_data[selectedYear]?.placements || [];

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="pb-10 bg-gradient-to-r from-teal-50 via-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Training & Placement
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-2">
            {placementData.details.department}
          </p>
          <p className="text-base text-gray-600">
            {placementData.details.institution}
          </p>
        </div>
      </section>

    
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Placement Trends & Analytics
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Placement Trend Chart */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                5-Year Placement Trends
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={placementTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="eligible"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    name="Eligible"
                  />
                  <Line
                    type="monotone"
                    dataKey="placed"
                    stroke="#10B981"
                    strokeWidth={2}
                    name="Placed"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Placement Percentage Bar Chart */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Placement Percentage by Year
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={placementTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="percentage" fill="#8B5CF6" name="Placement %" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* CTC Trends */}
            {ctcData.length > 0 && (
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  CTC Trends (LPA)
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={ctcData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="highest" fill="#F59E0B" name="Highest" />
                    <Bar dataKey="average" fill="#14B8A6" name="Average" />
                    <Bar dataKey="lowest" fill="#6366F1" name="Lowest" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            )}

            {/* Top Recruiters */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Top Recurring Recruiters
              </h3>
              <div className="space-y-3">
                {companies.slice(0, 6).map((company, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">
                        {company.company_name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {company.appearances} years • {company.total_students_placed}{" "}
                        students
                      </p>
                    </div>
                    <Briefcase className="w-6 h-6 text-teal-600" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Year Selector */}
      <section className="py-8 bg-white border-y">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-sm font-semibold text-gray-700">Select Batch:</span>
            {summary.map((s) => (
              <Button
                key={s.batch}
                onClick={() => setSelectedYear(s.batch)}
                variant={selectedYear === s.batch ? "default" : "outline"}
                className={
                  selectedYear === s.batch
                    ? "bg-teal-600 hover:bg-teal-700 text-white"
                    : "border-gray-300"
                }
              >
                {s.batch}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Year Details */}
      {currentYearData && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Batch {selectedYear} Placement Summary
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Eligible Students</p>
                  <p className="text-2xl font-bold text-blue-700">
                    {currentYearData.eligible_students}
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Students Placed</p>
                  <p className="text-2xl font-bold text-green-700">
                    {currentYearData.total_offers_received}
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Placement Rate</p>
                  <p className="text-2xl font-bold text-purple-700">
                    {currentYearData.placement_percentage.toFixed(1)}%
                  </p>
                </div>
              </div>

              {currentYearData.average_ctc_lpa !== "NA" && (
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Highest CTC</p>
                    <p className="text-xl font-bold text-orange-700">
                      ₹{currentYearData.highest_ctc_lpa} LPA
                    </p>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Average CTC</p>
                    <p className="text-xl font-bold text-teal-700">
                      ₹{currentYearData.average_ctc_lpa} LPA
                    </p>
                  </div>
                  <div className="p-4 bg-cyan-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Lowest CTC</p>
                    <p className="text-xl font-bold text-cyan-700">
                      ₹{currentYearData.lowest_ctc_lpa} LPA
                    </p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </section>
      )}

      {/* Charts Section */}
      

      {/* Companies for Selected Year */}
      {currentYearCompanies.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Recruiters for Batch {selectedYear}
              </h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company Name</TableHead>
                      <TableHead className="text-center">Students Placed</TableHead>
                      <TableHead className="text-center">CTC (LPA)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentYearCompanies.map((company: any, idx: number) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">
                          {company.company_name}
                        </TableCell>
                        <TableCell className="text-center">
                          {company.students_placed}
                        </TableCell>
                        <TableCell className="text-center">
                          {company.ctc_lpa ? `₹${company.ctc_lpa}` : "NA"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Complete Batch-wise Table */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Complete Placement Statistics
          </h2>
          <Card className="p-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Batch</TableHead>
                  <TableHead className="text-center">Eligible</TableHead>
                  <TableHead className="text-center">Placed</TableHead>
                  <TableHead className="text-center">Placement %</TableHead>
                  <TableHead className="text-center">Avg CTC</TableHead>
                  <TableHead className="text-center">Highest CTC</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {summary.map((stat, idx) => (
                  <TableRow key={idx} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{stat.batch}</TableCell>
                    <TableCell className="text-center">
                      {stat.eligible_students}
                    </TableCell>
                    <TableCell className="text-center">
                      {stat.total_offers_received}
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                        {stat.placement_percentage.toFixed(1)}%
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      {stat.average_ctc_lpa !== "NA"
                        ? `₹${stat.average_ctc_lpa}`
                        : "NA"}
                    </TableCell>
                    <TableCell className="text-center">
                      {stat.highest_ctc_lpa !== "NA"
                        ? `₹${stat.highest_ctc_lpa}`
                        : "NA"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Placement;
