"use client";
import React from "react";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-tl-2xl border border-neutral-200 bg-white p-4 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Assets", value: "1,234", change: "+12%" },
          { title: "Active Users", value: "456", change: "+8%" },
          { title: "Departments", value: "12", change: "+2" },
          { title: "Total Value", value: "$2.4M", change: "+15%" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
          >
            <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {stat.title}
            </h3>
            <div className="flex items-baseline justify-between">
              <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
                {stat.value}
              </p>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Recent Activities
          </h3>
          <div className="space-y-4">
            {[...Array(5)].map((_, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 rounded-lg border border-neutral-100 p-3 dark:border-neutral-700"
              >
                <div className="h-10 w-10 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
                  <div className="h-3 w-1/2 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Asset Distribution
          </h3>
          <div className="space-y-4">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-24 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
                  <div className="h-4 w-16 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
                </div>
                <div className="h-2 w-full animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
