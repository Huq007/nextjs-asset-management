"use client";
import React from "react";
import { IconDownload, IconFilter, IconSearch } from "@tabler/icons-react";

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      title: "Asset Utilization Report",
      description: "Detailed analysis of asset usage across departments",
      type: "PDF",
      size: "2.4 MB",
      lastUpdated: "2 hours ago",
    },
    {
      id: 2,
      title: "Maintenance Schedule",
      description: "Upcoming and past maintenance activities",
      type: "Excel",
      size: "1.8 MB",
      lastUpdated: "1 day ago",
    },
    {
      id: 3,
      title: "Asset Depreciation",
      description: "Quarterly depreciation analysis",
      type: "PDF",
      size: "3.2 MB",
      lastUpdated: "3 days ago",
    },
    {
      id: 4,
      title: "Department Allocation",
      description: "Asset distribution by department",
      type: "Excel",
      size: "1.5 MB",
      lastUpdated: "1 week ago",
    },
  ];

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-tl-2xl border border-neutral-200 bg-white p-4 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Reports
        </h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700">
            <IconFilter className="h-4 w-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700">
            <IconDownload className="h-4 w-4" />
            Export All
          </button>
        </div>
      </div>

      <div className="relative">
        <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          placeholder="Search reports..."
          className="w-full rounded-lg border border-neutral-200 bg-white py-2 pl-10 pr-4 text-sm text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <div
            key={report.id}
            className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-white">
                  {report.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {report.description}
                </p>
              </div>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                {report.type}
              </span>
            </div>
            <div className="mt-auto flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
              <span>{report.size}</span>
              <span>{report.lastUpdated}</span>
            </div>
            <button className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              <IconDownload className="h-4 w-4" />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 