"use client";
import React from "react";
import { 
  IconPlus, 
  IconSearch, 
  IconUsers, 
  IconBuilding, 
  IconEye, 
  IconEdit,
  IconCode,
  IconUsersGroup,
  IconCash,
  IconSettings,
  IconChartBar,
  IconMicroscope,
  IconDeviceLaptop,
  IconBriefcase
} from "@tabler/icons-react";
import { motion } from "motion/react";

export default function DepartmentsPage() {
  const departments = [
    {
      name: "Information Technology",
      employees: 45,
      assets: 120,
      manager: "Sarah Johnson",
      icon: <IconCode className="h-6 w-6" />,
      gradient: "from-blue-500 to-indigo-500",
      description: "Manages all IT infrastructure and digital assets"
    },
    {
      name: "Human Resources",
      employees: 15,
      assets: 30,
      manager: "Michael Brown",
      icon: <IconUsersGroup className="h-6 w-6" />,
      gradient: "from-emerald-500 to-teal-500",
      description: "Handles employee relations and recruitment"
    },
    {
      name: "Finance",
      employees: 25,
      assets: 50,
      manager: "Emily Davis",
      icon: <IconCash className="h-6 w-6" />,
      gradient: "from-amber-500 to-orange-500",
      description: "Manages financial operations and budgeting"
    },
    {
      name: "Operations",
      employees: 35,
      assets: 80,
      manager: "David Wilson",
      icon: <IconSettings className="h-6 w-6" />,
      gradient: "from-purple-500 to-pink-500",
      description: "Oversees daily business operations"
    },
    {
      name: "Marketing",
      employees: 20,
      assets: 40,
      manager: "Lisa Anderson",
      icon: <IconChartBar className="h-6 w-6" />,
      gradient: "from-rose-500 to-pink-500",
      description: "Handles marketing and brand strategy"
    },
    {
      name: "Research & Development",
      employees: 30,
      assets: 60,
      manager: "Robert Taylor",
      icon: <IconMicroscope className="h-6 w-6" />,
      gradient: "from-cyan-500 to-blue-500",
      description: "Drives innovation and product development"
    },
    {
      name: "IT Support",
      employees: 18,
      assets: 45,
      manager: "John Smith",
      icon: <IconDeviceLaptop className="h-6 w-6" />,
      gradient: "from-violet-500 to-purple-500",
      description: "Provides technical support and maintenance"
    },
    {
      name: "Business Development",
      employees: 22,
      assets: 35,
      manager: "Emma Wilson",
      icon: <IconBriefcase className="h-6 w-6" />,
      gradient: "from-red-500 to-pink-500",
      description: "Focuses on business growth and partnerships"
    }
  ];

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-200 bg-white p-6 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex items-center justify-between">
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="group relative flex flex-col gap-4 rounded-xl border border-neutral-200/50 bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#067957]/20 hover:shadow-md dark:border-neutral-700/50 dark:bg-neutral-800/50"
          >
            <div className="flex items-center gap-4">
              <div className={`relative h-14 w-14 overflow-hidden rounded-xl bg-gradient-to-br ${dept.gradient} p-0.5`}>
                <div className="flex h-full w-full items-center justify-center rounded-xl backdrop-blur-sm dark:bg-neutral-800/90">
                  {dept.icon}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-white">{dept.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Manager: {dept.manager}
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {dept.description}
            </p>

            <div className="flex items-center justify-between border-t border-neutral-200/50 pt-4 dark:border-neutral-700/50">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-500/10 p-1.5 dark:bg-blue-500/20">
                  <IconUsers className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {dept.employees} Employees
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-[#067957]/10 p-1.5 dark:bg-[#067958]/20">
                  <IconBuilding className="h-4 w-4 text-[#067957]" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {dept.assets} Assets
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <IconEye className="h-4 w-4" />
                View Details
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#067957] to-[#0a9c6f] px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <IconEdit className="h-4 w-4" />
                Edit
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 