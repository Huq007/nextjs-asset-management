"use client";
import React from "react";
import { IconCalendar, IconChartBar, IconChartLine, IconChartPie } from "@tabler/icons-react";

export default function AnalyticsPage() {
  const metrics = [
    {
      title: "Asset Utilization",
      value: "78%",
      change: "+5%",
      icon: <IconChartBar className="h-5 w-5 text-blue-500" />,
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

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-tl-2xl border border-neutral-200 bg-white p-4 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Analytics
        </h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700">
            <IconCalendar className="h-4 w-4" />
            Last 30 Days
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {metric.title}
              </h3>
              {metric.icon}
            </div>
            <div className="flex items-baseline justify-between">
              <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
                {metric.value}
              </p>
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
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Asset Utilization Trend
          </h3>
          <div className="h-64 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-700">
            {/* Placeholder for chart */}
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Department Distribution
          </h3>
          <div className="h-64 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-700">
            {/* Placeholder for chart */}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
        <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
          Asset Performance Metrics
        </h3>
        <div className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-700">
          {/* Placeholder for detailed metrics chart */}
        </div>
      </div>
    </div>
  );
} 