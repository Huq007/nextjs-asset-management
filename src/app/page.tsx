"use client";
import React from "react";
import {
  IconDeviceLaptop,
  IconDeviceMobile,
  IconDeviceTablet,
  IconPrinter,
  IconUsers,
  IconBuilding,
  IconArrowUp,
  IconArrowDown,
  IconPlus,
  IconUserPlus,
  IconCalendar,
  IconFileAnalytics,
  IconDevices,
  IconTool,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Page() {
  const stats = [
    {
      title: "Total Assets",
      value: "1,234",
      change: "+12.5%",
      trend: "up",
      icon: <IconDevices className="h-6 w-6 text-emerald-500" />,
      color: "bg-emerald-50 dark:bg-emerald-900/30",
    },
    {
      title: "Active Employees",
      value: "456",
      change: "+5.2%",
      trend: "up",
      icon: <IconUsers className="h-6 w-6 text-blue-500" />,
      color: "bg-blue-50 dark:bg-blue-900/30",
    },
    {
      title: "Departments",
      value: "12",
      change: "+2",
      trend: "up",
      icon: <IconBuilding className="h-6 w-6 text-amber-500" />,
      color: "bg-amber-50 dark:bg-amber-900/30",
    },
    {
      title: "Maintenance Due",
      value: "23",
      change: "-8.3%",
      trend: "down",
      icon: <IconTool className="h-6 w-6 text-rose-500" />,
      color: "bg-rose-50 dark:bg-rose-900/30",
    },
  ];

  const quickActions = [
    {
      title: "Add New Asset",
      description: "Register a new asset in the system",
      icon: <IconPlus className="h-6 w-6 text-emerald-500" />,
      color: "bg-emerald-50 dark:bg-emerald-900/30",
      href: "/assets/new",
    },
    {
      title: "Assign Asset",
      description: "Assign assets to employees",
      icon: <IconUserPlus className="h-6 w-6 text-blue-500" />,
      color: "bg-blue-50 dark:bg-blue-900/30",
      href: "/assets/assign",
    },
    {
      title: "Schedule Maintenance",
      description: "Set up maintenance schedules",
      icon: <IconCalendar className="h-6 w-6 text-amber-500" />,
      color: "bg-amber-50 dark:bg-amber-900/30",
      href: "/maintenance/schedule",
    },
    {
      title: "Generate Report",
      description: "Create asset management reports",
      icon: <IconFileAnalytics className="h-6 w-6 text-purple-500" />,
      color: "bg-purple-50 dark:bg-purple-900/30",
      href: "/reports/new",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "asset_assigned",
      title: "Asset Assigned",
      description: "MacBook Pro assigned to John Doe",
      time: "2 hours ago",
      icon: <IconDevices className="h-5 w-5 text-emerald-500" />,
    },
    {
      id: 2,
      type: "maintenance",
      title: "Maintenance Completed",
      description: "Server maintenance completed",
      time: "4 hours ago",
      icon: <IconTool className="h-5 w-5 text-blue-500" />,
    },
    {
      id: 3,
      type: "new_asset",
      title: "New Asset Added",
      description: "10 new laptops added to inventory",
      time: "1 day ago",
      icon: <IconPlus className="h-5 w-5 text-amber-500" />,
    },
    {
      id: 4,
      type: "employee",
      title: "New Employee",
      description: "Sarah Wilson joined IT department",
      time: "2 days ago",
      icon: <IconUserPlus className="h-5 w-5 text-purple-500" />,
    },
  ];

  const assetDistribution = [
    {
      category: "Laptops",
      count: 450,
      percentage: 45,
      color: "from-indigo-500 to-purple-500",
      icon: <IconDeviceLaptop className="h-6 w-6 text-white" />,
    },
    {
      category: "Mobile Devices",
      count: 300,
      percentage: 30,
      color: "from-emerald-500 to-teal-500",
      icon: <IconDeviceMobile className="h-6 w-6 text-white" />,
    },
    {
      category: "Tablets",
      count: 150,
      percentage: 15,
      color: "from-rose-500 to-pink-500",
      icon: <IconDeviceTablet className="h-6 w-6 text-white" />,
    },
    {
      category: "Printers",
      count: 100,
      percentage: 10,
      color: "from-amber-500 to-orange-500",
      icon: <IconPrinter className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-200 bg-white p-6 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Dashboard</h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 rounded-lg bg-[#067957] px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-[#067957]/90"
        >
          <IconPlus className="h-4 w-4" />
          Quick Add Asset
        </motion.button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-gradient-to-br from-blue-100/80 to-blue-50/50 p-6 shadow-sm dark:from-blue-900/40 dark:to-blue-800/30 dark:border-neutral-700"
          >
            <div className="flex items-center justify-between">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.color}`}>
                {stat.icon}
              </div>
              <span
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up" ? "text-emerald-500" : "text-rose-500"
                }`}
              >
                {stat.change}
                {stat.trend === "up" ? (
                  <IconArrowUp className="h-4 w-4" />
                ) : (
                  <IconArrowDown className="h-4 w-4" />
                )}
              </span>
            </div>
            <div>
              <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {stat.title}
              </h3>
              <p className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions and Recent Activities */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 pb-8">
        {/* Quick Actions */}
        <div className="flex h-[300px] flex-col gap-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Quick Actions</h2>
          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {quickActions.map((action, idx) => (
              <motion.a
                key={idx}
                href={action.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="group flex flex-col gap-2 rounded-xl border border-neutral-200 bg-gradient-to-br from-teal-100/80 to-teal-50/50 p-4 shadow-sm transition-all duration-200 hover:border-[#067957] hover:shadow-md dark:from-teal-900/40 dark:to-teal-800/30 dark:border-neutral-700"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.color}`}>
                  {action.icon}
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-white">{action.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {action.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="flex h-[300px] flex-col gap-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Recent Activities</h2>
          <div className="flex flex-1 flex-col gap-4">
            {recentActivities.map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-gradient-to-br from-emerald-100/80 to-emerald-50/50 p-3 shadow-sm dark:from-emerald-900/40 dark:to-emerald-800/30 dark:border-neutral-700"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-50 dark:bg-neutral-700">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-neutral-900 dark:text-white">{activity.title}</h3>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {activity.time}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-400">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Asset Distribution */}
      <div className="mt-12 flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Asset Distribution</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {assetDistribution.map((asset, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="group flex flex-col gap-2 rounded-xl border border-neutral-200 bg-gradient-to-br from-indigo-100/80 to-indigo-50/50 p-4 shadow-sm transition-all duration-200 hover:border-[#067957] hover:shadow-md dark:from-indigo-900/40 dark:to-indigo-800/30 dark:border-neutral-700"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${asset.color}`}>
                {asset.icon}
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  {asset.category}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    {asset.count}
                  </p>
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {asset.percentage}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
