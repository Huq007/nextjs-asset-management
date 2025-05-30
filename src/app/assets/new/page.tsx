"use client";

import React from "react";
import { motion } from "motion/react";
import {
  IconDeviceLaptop,
  IconDeviceMobile,
  IconDeviceTablet,
  IconPrinter,
  IconArrowLeft,
  IconBuilding,
  IconUser,
  IconCalendar,
  IconTag,
  IconNotes,
  IconCurrencyDollar,
} from "@tabler/icons-react";
import Link from "next/link";

export default function NewAssetPage() {
  const assetTypes = [
    {
      name: "Laptop",
      icon: <IconDeviceLaptop className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Mobile Device",
      icon: <IconDeviceMobile className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Tablet",
      icon: <IconDeviceTablet className="h-6 w-6" />,
      color: "from-rose-500 to-pink-500",
    },
    {
      name: "Printer",
      icon: <IconPrinter className="h-6 w-6" />,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="relative flex h-screen w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-200 bg-white p-6 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/20" />
      </div>

      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/assets">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-lg bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
          >
            <IconArrowLeft className="h-4 w-4" />
            Back
          </motion.button>
        </Link>
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Add New Asset
        </h1>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column - Asset Type Selection */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Asset Type
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {assetTypes.map((type, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex flex-col items-center gap-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${type.color} text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                >
                  {type.icon}
                </div>
                <span className="text-sm font-medium text-neutral-900 dark:text-white">
                  {type.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Column - Asset Details Form */}
        <div className="col-span-2 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Asset Details
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Asset Name
              </label>
              <input
                type="text"
                placeholder="Enter asset name"
                className="rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Serial Number
              </label>
              <input
                type="text"
                placeholder="Enter serial number"
                className="rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Department
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <IconBuilding className="h-4 w-4 text-neutral-500" />
                </div>
                <select className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800">
                  <option value="">Select Department</option>
                  <option value="it">Information Technology</option>
                  <option value="hr">Human Resources</option>
                  <option value="finance">Finance</option>
                  <option value="operations">Operations</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Assigned To
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <IconUser className="h-4 w-4 text-neutral-500" />
                </div>
                <select className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800">
                  <option value="">Select Employee</option>
                  <option value="john">John Doe</option>
                  <option value="jane">Jane Smith</option>
                  <option value="mike">Mike Johnson</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Purchase Date
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <IconCalendar className="h-4 w-4 text-neutral-500" />
                </div>
                <input
                  type="date"
                  className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Purchase Price
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <IconCurrencyDollar className="h-4 w-4 text-neutral-500" />
                </div>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Asset Tag
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <IconTag className="h-4 w-4 text-neutral-500" />
                </div>
                <input
                  type="text"
                  placeholder="Enter asset tag"
                  className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Status
              </label>
              <select className="rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="maintenance">Under Maintenance</option>
                <option value="retired">Retired</option>
              </select>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Notes
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute left-3 top-3">
                  <IconNotes className="h-4 w-4 text-neutral-500" />
                </div>
                <textarea
                  placeholder="Enter any additional notes"
                  rows={4}
                  className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="mt-6 flex justify-end gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg border border-neutral-200 bg-white px-6 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg bg-gradient-to-r from-[#067957] to-[#0a9c6f] px-6 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:shadow-lg"
            >
              Add Asset
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
} 