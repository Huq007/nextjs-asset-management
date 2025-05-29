"use client";
import React from "react";
import { IconPlus, IconSearch, IconEye, IconEdit, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function EmployeesPage() {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-200 bg-white p-6 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Employees</h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#067957] to-[#0a9c6f] px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:shadow-lg"
        >
          <IconPlus className="h-4 w-4" />
          Add Employee
        </motion.button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
          />
        </div>
        <select className="rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800">
          <option value="">All Departments</option>
          <option value="it">IT</option>
          <option value="hr">HR</option>
          <option value="finance">Finance</option>
          <option value="operations">Operations</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="group relative flex items-center gap-4 rounded-xl border border-neutral-200/50 bg-white/50 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#067957]/20 hover:shadow-md dark:border-neutral-700/50 dark:bg-neutral-800/50"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-[#067957] to-[#0a9c6f] p-0.5">
              <div className="h-full w-full overflow-hidden rounded-full bg-white dark:bg-neutral-800">
                <img
                  src={`https://i.pravatar.cc/150?img=${idx + 1}`}
                  alt="Employee"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-neutral-900 dark:text-white">John Doe</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Software Engineer</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">IT Department</p>
            </div>
            <div className="flex flex-col gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <IconEye className="h-4 w-4" />
                View
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#067957] to-[#0a9c6f] px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <IconEdit className="h-4 w-4" />
                Edit
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          Showing 1 to 6 of 50 employees
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all duration-200 hover:border-[#067957] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
          >
            <IconChevronLeft className="h-4 w-4" />
            Previous
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all duration-200 hover:border-[#067957] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
          >
            Next
            <IconChevronRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
} 