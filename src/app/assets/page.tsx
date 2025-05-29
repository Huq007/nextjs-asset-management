"use client";
import React from "react";
import { IconPlus, IconSearch } from "@tabler/icons-react";

export default function AssetsPage() {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-tl-2xl border border-neutral-200 bg-white p-4 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Assets</h1>
        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <IconPlus className="h-4 w-4" />
          Add Asset
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            placeholder="Search assets..."
            className="w-full rounded-lg border border-neutral-200 bg-white py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
          />
        </div>
        <select className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800">
          <option value="">All Categories</option>
          <option value="hardware">Hardware</option>
          <option value="software">Software</option>
          <option value="furniture">Furniture</option>
          <option value="vehicles">Vehicles</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
        <table className="w-full">
          <thead className="bg-neutral-50 dark:bg-neutral-800">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Asset ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Category</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Assigned To</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Purchase Date</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
            {[...Array(5)].map((_, idx) => (
              <tr key={idx} className="hover:bg-neutral-50 dark:hover:bg-neutral-800">
                <td className="px-4 py-3 text-sm text-neutral-900 dark:text-white">AST-{1000 + idx}</td>
                <td className="px-4 py-3 text-sm text-neutral-900 dark:text-white">MacBook Pro 16"</td>
                <td className="px-4 py-3 text-sm text-neutral-900 dark:text-white">Hardware</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                    Active
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-neutral-900 dark:text-white">John Doe</td>
                <td className="px-4 py-3 text-sm text-neutral-900 dark:text-white">2024-03-15</td>
                <td className="px-4 py-3 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          Showing 1 to 5 of 100 entries
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-neutral-200 px-3 py-1 text-sm hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800">
            Previous
          </button>
          <button className="rounded-lg border border-neutral-200 px-3 py-1 text-sm hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800">
            Next
          </button>
        </div>
      </div>
    </div>
  );
} 