"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  IconDownload,
  IconFilter,
  IconCalendar,
  IconChartBar,
  IconChartPie,
  IconChartLine,
  IconDeviceLaptop,
  IconUsers,
  IconBuilding,
  IconCurrencyDollar,
} from "@tabler/icons-react";

// Sample data for charts
const sampleData = {
  "asset-inventory": {
    labels: ["Laptops", "Mobile Devices", "Tablets", "Printers", "Servers"],
    values: [120, 85, 45, 30, 15],
  },
  "employee-assignments": {
    labels: ["IT", "HR", "Finance", "Operations", "Marketing"],
    values: [45, 25, 35, 30, 20],
  },
  "department-distribution": {
    labels: ["IT", "HR", "Finance", "Operations", "Marketing"],
    values: [150, 80, 100, 90, 70],
  },
  "financial-summary": {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    values: [25000, 32000, 28000, 35000],
  },
};

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [selectedChartType, setSelectedChartType] = useState<string>("bar");
  const [dateRange, setDateRange] = useState({
    start: "",
    end: "",
  });

  useEffect(() => {
    console.log("Selected Report:", selectedReport);
    console.log("Selected Chart Type:", selectedChartType);
    if (selectedReport) {
      console.log(
        "Data:",
        sampleData[selectedReport as keyof typeof sampleData]
      );
    }
  }, [selectedReport, selectedChartType]);

  const reportTypes = [
    {
      id: "asset-inventory",
      name: "Asset Inventory",
      description: "Complete list of all assets with their current status",
      icon: <IconDeviceLaptop className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "employee-assignments",
      name: "Employee Assignments",
      description: "Overview of assets assigned to employees",
      icon: <IconUsers className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "department-distribution",
      name: "Department Distribution",
      description: "Asset distribution across departments",
      icon: <IconBuilding className="h-6 w-6" />,
      color: "from-rose-500 to-pink-500",
    },
    {
      id: "financial-summary",
      name: "Financial Summary",
      description: "Cost analysis and depreciation reports",
      icon: <IconCurrencyDollar className="h-6 w-6" />,
      color: "from-amber-500 to-orange-500",
    },
  ];

  const chartTypes = [
    {
      id: "bar",
      name: "Bar Chart",
      icon: <IconChartBar className="h-5 w-5" />,
    },
    {
      id: "pie",
      name: "Pie Chart",
      icon: <IconChartPie className="h-5 w-5" />,
    },
    {
      id: "line",
      name: "Line Chart",
      icon: <IconChartLine className="h-5 w-5" />,
    },
  ];

  const renderChart = () => {
    if (!selectedReport) {
      return (
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-neutral-100 p-4 dark:bg-neutral-700">
              <IconChartBar className="h-8 w-8 text-neutral-500" />
            </div>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
            Select a Report Type
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Choose a report type from above to view detailed analytics
          </p>
        </div>
      );
    }

    const data = sampleData[selectedReport as keyof typeof sampleData];

    if (!data || !data.values || !data.labels) {
      return (
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-neutral-100 p-4 dark:bg-neutral-700">
              <IconChartBar className="h-8 w-8 text-neutral-500" />
            </div>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
            No Data Available
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            There is no data available for this report type
          </p>
        </div>
      );
    }

    const maxValue = Math.max(...data.values);
    const colors = [
      "bg-indigo-500",
      "bg-emerald-500",
      "bg-rose-500",
      "bg-amber-500",
      "bg-blue-500",
    ];

    return (
      <div className="h-full w-full">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {reportTypes.find((r) => r.id === selectedReport)?.name}
          </h3>
          <div className="flex items-center gap-2">
            {data.labels.map((label, index) => (
              <div key={label} className="flex items-center gap-1.5">
                <div className={`h-3 w-3 rounded-full ${colors[index]}`} />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[400px] w-full">
          {selectedChartType === "bar" && (
            <div className="flex h-full items-end justify-between gap-4">
              {data.values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div
                    className={`w-full ${colors[index]} rounded-t-lg transition-all duration-300`}
                    style={{
                      height: `${(value / maxValue) * 100}%`,
                    }}
                  />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {selectedChartType === "pie" && (
            <div className="flex h-full items-center justify-center">
              <div className="relative h-64 w-64">
                {data.values.map((value, index) => {
                  const percentage =
                    (value / data.values.reduce((a, b) => a + b, 0)) * 100;
                  const rotation = data.values
                    .slice(0, index)
                    .reduce(
                      (a, b) =>
                        a + (b / data.values.reduce((c, d) => c + d, 0)) * 100,
                      0
                    );

                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 ${colors[index]}`}
                      style={{
                        clipPath: `polygon(50% 50%, 50% 0%, ${
                          50 +
                          Math.cos(
                            (rotation + percentage / 2) * (Math.PI / 180)
                          ) *
                            50
                        }% ${
                          50 +
                          Math.sin(
                            (rotation + percentage / 2) * (Math.PI / 180)
                          ) *
                            50
                        }%)`,
                        transform: `rotate(${rotation * 3.6}deg)`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {selectedChartType === "line" && (
            <div className="relative h-full w-full">
              <svg className="h-full w-full">
                <path
                  d={data.values
                    .map(
                      (value, index) =>
                        `${index === 0 ? "M" : "L"} ${
                          (index / (data.values.length - 1)) * 100
                        } ${100 - (value / maxValue) * 100}`
                    )
                    .join(" ")}
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#067957" />
                    <stop offset="100%" stopColor="#0a9c6f" />
                  </linearGradient>
                </defs>
              </svg>
              {data.values.map((value, index) => (
                <div
                  key={index}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${(index / (data.values.length - 1)) * 100}%`,
                    top: `${100 - (value / maxValue) * 100}%`,
                  }}
                >
                  <div className="h-3 w-3 rounded-full bg-[#067957]" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex h-screen w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-200 bg-white p-6 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/20" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Reports
        </h1>
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
          >
            <IconFilter className="h-4 w-4" />
            Filters
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#067957] to-[#0a9c6f] px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:shadow-lg"
          >
            <IconDownload className="h-4 w-4" />
            Export
          </motion.button>
        </div>
      </div>

      {/* Date Range Selector */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <IconCalendar className="h-4 w-4 text-neutral-500" />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Date Range:
          </span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) =>
              setDateRange({ ...dateRange, start: e.target.value })
            }
            className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
          />
          <span className="text-sm text-neutral-500">to</span>
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) =>
              setDateRange({ ...dateRange, end: e.target.value })
            }
            className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
          />
        </div>
      </div>

      {/* Report Types Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reportTypes.map((report) => (
          <motion.div
            key={report.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedReport(report.id)}
            className={`group cursor-pointer rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 ${
              selectedReport === report.id
                ? "border-[#067957] ring-2 ring-[#067957]/20"
                : ""
            }`}
          >
            <div
              className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${report.color} text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
            >
              {report.icon}
            </div>
            <h3 className="mb-1 text-lg font-semibold text-neutral-900 dark:text-white">
              {report.name}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {report.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Chart Type Selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Chart Type:
        </span>
        <div className="flex items-center gap-2">
          {chartTypes.map((chart) => (
            <motion.button
              key={chart.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedChartType(chart.id)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedChartType === chart.id
                  ? "border-[#067957] bg-[#067957] text-white"
                  : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              }`}
            >
              {chart.icon}
              {chart.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Report Preview */}
      <div className="flex-1 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
        {renderChart()}
      </div>
    </div>
  );
}
