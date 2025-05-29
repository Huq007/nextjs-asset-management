"use client";
import React from "react";
import { IconPlus, IconSearch } from "@tabler/icons-react";

export default function EmployeesPage() {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-tl-2xl border border-neutral-200 bg-white p-4 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Employees</h1>
        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <IconPlus className="h-4 w-4" />
          Add Employee
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full rounded-lg border border-neutral-200 bg-white py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
          />
        </div>
        <select className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800">
          <option value="">All Departments</option>
          <option value="it">IT</option>
          <option value="hr">HR</option>
          <option value="finance">Finance</option>
          <option value="operations">Operations</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div className="h-12 w-12 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
              <img
                src={`https://i.pravatar.cc/150?img=${idx + 1}`}
                alt="Employee"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-neutral-900 dark:text-white">John Doe</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Software Engineer</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">IT Department</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="rounded-lg border border-neutral-200 px-3 py-1 text-sm hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800">
                View
              </button>
              <button className="rounded-lg border border-neutral-200 px-3 py-1 text-sm hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          Showing 1 to 6 of 50 employees
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