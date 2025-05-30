"use client";
import React from "react";
import { IconChartBar, IconChartLine, IconChartPie } from "@tabler/icons-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
  BarProps,
  TooltipProps
} from "recharts";

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: {
      name: string;
      value: number;
    };
  }>;
  label?: string;
}

export default function AnalyticsPage() {
  const metrics = [
    {
      title: "Asset Utilization",
      value: "78%",
      change: "+5%",
      icon: <IconChartBar className="h-5 w-5 text-[#067957]" />,
    },
    {
      title: "Maintenance Cost",
      value: "$45,230",
      change: "-2%",
      icon: <IconChartLine className="h-5 w-5 text-green-500" />,
    },
    {
      title: "Asset Health",
      value: "92%",
      change: "+3%",
      icon: <IconChartPie className="h-5 w-5 text-purple-500" />,
    },
  ];

  // Sample data for asset utilization trend
  const utilizationData = [
    { month: "Jan", utilization: 65 },
    { month: "Feb", utilization: 68 },
    { month: "Mar", utilization: 72 },
    { month: "Apr", utilization: 75 },
    { month: "May", utilization: 78 },
    { month: "Jun", utilization: 82 },
  ];

  // Sample data for department distribution
  const departmentData = [
    { name: "IT", value: 35 },
    { name: "HR", value: 15 },
    { name: "Finance", value: 20 },
    { name: "Operations", value: 30 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Sample data for asset performance metrics
  const performanceData = [
    { category: "Laptops", active: 85, maintenance: 10, inactive: 5 },
    { category: "Mobile", active: 90, maintenance: 5, inactive: 5 },
    { category: "Tablets", active: 75, maintenance: 15, inactive: 10 },
    { category: "Printers", active: 80, maintenance: 12, inactive: 8 },
  ];

  const CHART_COLORS = {
    active: "#067957",
    maintenance: "#F59E0B",
    inactive: "#EF4444"
  };

  const CustomBar = (props: BarProps) => {
    const { x, y, width, height, fill } = props;
    return (
      <g>
        <defs>
          <linearGradient id={`gradient-${fill}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fill} stopOpacity={0.8} />
            <stop offset="100%" stopColor={fill} stopOpacity={0.4} />
          </linearGradient>
        </defs>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={`url(#gradient-${fill})`}
          rx={4}
          ry={4}
        />
      </g>
    );
  };

  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
          <p className="font-medium text-neutral-900 dark:text-white">
            {label}
          </p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm text-neutral-600 dark:text-neutral-400">
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-200 bg-white p-6 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Analytics</h1>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-700">
                {metric.icon}
              </div>
              <span
                className={`text-sm font-medium ${
                  metric.change.startsWith("+")
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {metric.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {metric.title}
              </h3>
              <p className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">
                {metric.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Asset Utilization Trend
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={utilizationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "none",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="utilization"
                  stroke="#067957"
                  strokeWidth={2}
                  dot={{ fill: "#067957", strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: "#067957" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Department Distribution
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "none",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
        <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
          Asset Performance Metrics
        </h3>
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={performanceData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="rgba(0,0,0,0.1)"
                strokeWidth={0.5}
              />
              <XAxis
                dataKey="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="active"
                name="Active"
                fill={CHART_COLORS.active}
                shape={CustomBar}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="maintenance"
                name="Maintenance"
                fill={CHART_COLORS.maintenance}
                shape={CustomBar}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="inactive"
                name="Inactive"
                fill={CHART_COLORS.inactive}
                shape={CustomBar}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 