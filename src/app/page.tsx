"use client";
import React from "react";
import { IconArrowUpRight, IconClock, IconDeviceLaptop, IconDeviceMobile, IconDeviceTablet, IconPrinter } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Page() {
  const recentActivities = [
    {
      id: 1,
      type: "asset_assigned",
      user: "John Doe",
      asset: "MacBook Pro 2023",
      department: "Engineering",
      time: "2 hours ago",
      icon: <IconDeviceLaptop className="h-5 w-5 text-white" />,
      color: "bg-gradient-to-r from-indigo-500 to-purple-500",
    },
    {
      id: 2,
      type: "asset_returned",
      user: "Jane Smith",
      asset: "iPad Pro",
      department: "Design",
      time: "4 hours ago",
      icon: <IconDeviceTablet className="h-5 w-5 text-white" />,
      color: "bg-gradient-to-r from-emerald-500 to-teal-500",
    },
    {
      id: 3,
      type: "asset_added",
      user: "Mike Johnson",
      asset: "HP LaserJet Printer",
      department: "Operations",
      time: "1 day ago",
      icon: <IconPrinter className="h-5 w-5 text-white" />,
      color: "bg-gradient-to-r from-rose-500 to-pink-500",
    },
    {
      id: 4,
      type: "asset_assigned",
      user: "Sarah Wilson",
      asset: "iPhone 14 Pro",
      department: "Sales",
      time: "1 day ago",
      icon: <IconDeviceMobile className="h-5 w-5 text-white" />,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: 5,
      type: "asset_maintenance",
      user: "David Brown",
      asset: "Dell XPS 15",
      department: "IT",
      time: "2 days ago",
      icon: <IconDeviceLaptop className="h-5 w-5 text-white" />,
      color: "bg-gradient-to-r from-amber-500 to-orange-500",
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Assets", value: "1,234", change: "+12%", color: "from-indigo-500 to-purple-500" },
          { title: "Active Users", value: "456", change: "+8%", color: "from-emerald-500 to-teal-500" },
          { title: "Departments", value: "12", change: "+2", color: "from-rose-500 to-pink-500" },
          { title: "Total Value", value: "$2.4M", change: "+15%", color: "from-amber-500 to-orange-500" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-br p-6 shadow-lg transition-all duration-200 hover:shadow-xl"
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`,
            }}
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="relative z-10">
              <h3 className="text-sm font-medium text-white/90">
                {stat.title}
              </h3>
              <div className="mt-2 flex items-baseline justify-between">
                <p className="text-2xl font-semibold text-white">
                  {stat.value}
                </p>
                <span className="flex items-center text-sm font-medium text-white/90">
                  <IconArrowUpRight className="mr-1 h-4 w-4" />
                  {stat.change}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activities */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
          <h2 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Recent Activities
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <motion.div
                key={activity.id}
                whileHover={{ scale: 1.01 }}
                className="group flex items-start gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800"
              >
                <div className={`rounded-lg p-2.5 ${activity.color} shadow-md transition-transform duration-200 group-hover:scale-110`}>
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-neutral-900 dark:text-white">
                      {activity.user}
                    </p>
                    <span className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                      <IconClock className="mr-1 h-4 w-4" />
                      {activity.time}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                    {activity.asset}
                  </p>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                    {activity.department}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Asset Distribution */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
          <h2 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Asset Distribution
          </h2>
          <div className="space-y-4">
            {assetDistribution.map((asset, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`rounded-lg bg-gradient-to-r p-2 ${asset.color} shadow-md`}>
                      {asset.icon}
                    </div>
                    <span className="font-medium text-neutral-900 dark:text-white">
                      {asset.category}
                    </span>
                  </div>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {asset.count} ({asset.percentage}%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${asset.percentage}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${asset.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
