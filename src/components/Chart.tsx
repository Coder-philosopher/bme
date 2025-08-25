"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  year: number;
  UG: number;
  PG: number;
  PhD: number;
}

interface ChartProps {
  data: ChartData[];
  title?: string;
}

const Chart = ({ data, title = "Placement Statistics" }: ChartProps) => {
  return (
    <div className="w-full" data-testid="chart-container">
      {title && (
        <h3
          className="text-2xl font-heading font-bold text-gray-900 mb-6"
          data-testid="chart-title"
        >
          {title}
        </h3>
      )}
      <div className="h-64" data-testid="chart-responsive-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="UG" fill="hsl(180, 100%, 25%)" name="UG Students" />
            <Bar dataKey="PG" fill="hsl(220, 100%, 33%)" name="PG Students" />
            <Bar dataKey="PhD" fill="hsl(42, 92%, 57%)" name="PhD Students" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
