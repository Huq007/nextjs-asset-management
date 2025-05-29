"use client";
import React from "react";
import { IconPlus, IconSearch, IconEye, IconEdit, IconUsers, IconDevices } from "@tabler/icons-react";
import { motion } from "motion/react";
import {
  IconCode,
  IconUsersGroup,
  IconCash,
  IconSettings,
  IconChartBar,
  IconMicroscope,
  IconDeviceLaptop,
  IconBriefcase
} from "@tabler/icons-react";

export default function DepartmentsPage() {
  const departments = [
    {
      name: "Information Technology",
      description: "Manages all IT infrastructure and software development",
      employees: 25,
      assets: 150,
      manager: "Sarah Wilson",
      icon: <IconCode />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      name: "Human Resources",
      description: "Handles recruitment, training, and employee relations",
      employees: 12,
      assets: 45,
      manager: "John Smith",
      icon: <IconUsersGroup />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Finance",
      description: "Manages company finances and accounting",
      employees: 15,
      assets: 60,
      manager: "Michael Brown",
      icon: <IconCash />,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      name: "Operations",
      description: "Oversees daily business operations",
      employees: 30,
      assets: 200,
      manager: "Emily Davis",
      icon: <IconSettings />,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      name: "Marketing",
      description: "Handles marketing strategies and campaigns",
      employees: 18,
      assets: 75,
      manager: "David Wilson",
      icon: <IconChartBar />,
      gradient: "from-rose-500 to-pink-500"
    },
    {
      name: "Research & Development",
      description: "Focuses on innovation and product development",
      employees: 20,
      assets: 120,
      manager: "Lisa Anderson",
      icon: <IconMicroscope />,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "IT Support",
      description: "Provides technical support and maintenance",
      employees: 15,
      assets: 90,
      manager: "Tom Harris",
      icon: <IconDeviceLaptop />,
      gradient: "from-violet-500 to-purple-500"
    },
    {
      name: "Business Development",
      description: "Drives business growth and partnerships",
      employees: 10,
      assets: 40,
      manager: "Rachel Green",
      icon: <IconBriefcase />,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-200 bg-white p-6 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Departments</h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#067957] to-[#0a9c6f] px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:shadow-lg"
        >
          <IconPlus className="h-4 w-4" />
          Add Department
        </motion.button>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IconSearch className="h-4 w-4 text-neutral-500" />
        </div>
        <input
          type="text"
          placeholder="Search departments..."
          className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {departments.map((dept, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="group relative flex flex-col gap-4 rounded-xl border border-neutral-200/50 bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#067957]/20 hover:shadow-md dark:border-neutral-700/50 dark:bg-neutral-800/50"
          >
            <div className="flex items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${dept.gradient} text-white shadow-sm`}>
                {React.cloneElement(dept.icon, { className: "h-6 w-6" })}
              </div>
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-white">{dept.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{dept.description}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <IconUsers className="h-4 w-4 text-neutral-500" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">{dept.employees} Employees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <IconDevices className="h-4 w-4 text-neutral-500" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">{dept.assets} Assets</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <IconEye className="h-4 w-4" />
                    View Details
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-indigo-600 to-blue-600 transition-transform duration-300 group-hover:translate-x-0" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#067957] to-[#0a9c6f] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <IconEdit className="h-4 w-4" />
                    Edit
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#0a9c6f] to-[#067957] transition-transform duration-300 group-hover:translate-x-0" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 