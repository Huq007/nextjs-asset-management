"use client";
import React from "react";
import { IconPlus, IconSearch, IconUsers, IconBuilding } from "@tabler/icons-react";

export default function DepartmentsPage() {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-tl-2xl border border-neutral-200 bg-white p-4 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Departments</h1>
        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <IconPlus className="h-4 w-4" />
          Add Department
        </button>
      </div>

      <div className="relative flex-1">
        <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
        <input
          type="text"
          placeholder="Search departments..."
          className="w-full rounded-lg border border-neutral-200 bg-white py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Information Technology",
            employees: 45,
            assets: 120,
            manager: "Sarah Johnson",
          },
          {
            name: "Human Resources",
            employees: 15,
            assets: 30,
            manager: "Michael Brown",
          },
          {
            name: "Finance",
            employees: 25,
            assets: 50,
            manager: "Emily Davis",
          },
          {
            name: "Operations",
            employees: 35,
            assets: 80,
            manager: "David Wilson",
          },
          {
            name: "Marketing",
            employees: 20,
            assets: 40,
            manager: "Lisa Anderson",
          },
          {
            name: "Research & Development",
            employees: 30,
            assets: 60,
            manager: "Robert Taylor",
          },
        ].map((dept, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                <IconBuilding className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-white">{dept.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Manager: {dept.manager}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-neutral-200 pt-4 dark:border-neutral-700">
              <div className="flex items-center gap-2">
                <IconUsers className="h-4 w-4 text-neutral-500" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {dept.employees} Employees
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IconBuilding className="h-4 w-4 text-neutral-500" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {dept.assets} Assets
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 rounded-lg border border-neutral-200 px-3 py-1 text-sm hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800">
                View Details
              </button>
              <button className="flex-1 rounded-lg border border-neutral-200 px-3 py-1 text-sm hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 