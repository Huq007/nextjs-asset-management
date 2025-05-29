"use client";
import React from "react";
import { IconArrowUpRight, IconClock, IconDeviceLaptop, IconDeviceMobile, IconDeviceTablet, IconPrinter } from "@tabler/icons-react";

export default function Page() {
  const recentActivities = [
    {
      id: 1,
      type: "asset_assigned",
      user: "John Doe",
      asset: "MacBook Pro 2023",
      department: "Engineering",
      time: "2 hours ago",
      icon: <IconDeviceLaptop className="h-5 w-5 text-blue-500" />,
    },
    {
      id: 2,
      type: "asset_returned",
      user: "Jane Smith",
      asset: "iPad Pro",
      department: "Design",
      time: "4 hours ago",
      icon: <IconDeviceTablet className="h-5 w-5 text-purple-500" />,
    },
    {
      id: 3,
      type: "asset_added",
      user: "Mike Johnson",
      asset: "HP LaserJet Printer",
      department: "Operations",
      time: "1 day ago",
      icon: <IconPrinter className="h-5 w-5 text-green-500" />,
    },
    {
      id: 4,
      type: "asset_assigned",
      user: "Sarah Wilson",
      asset: "iPhone 14 Pro",
      department: "Sales",
      time: "1 day ago",
      icon: <IconDeviceMobile className="h-5 w-5 text-red-500" />,
    },
    {
      id: 5,
      type: "asset_maintenance",
      user: "David Brown",
      asset: "Dell XPS 15",
      department: "IT",
      time: "2 days ago",
      icon: <IconDeviceLaptop className="h-5 w-5 text-yellow-500" />,
    },
  ];

  const assetDistribution = [
    {
      category: "Laptops",
      count: 450,
      percentage: 45,
      color: "bg-blue-500",
    },
    {
      category: "Mobile Devices",
      count: 300,
      percentage: 30,
      color: "bg-red-500",
    },
    {
      category: "Tablets",
      count: 150,
      percentage: 15,
      color: "bg-purple-500",
    },
    {
      category: "Printers",
      count: 100,
      percentage: 10,
      color: "bg-green-500",
    },
  ];

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
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Recent Activities
            </h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-4 rounded-lg border border-neutral-100 p-3 dark:border-neutral-700"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-700">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-neutral-900 dark:text-white">
                      {activity.user}
                    </p>
                    <span className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                      <IconClock className="mr-1 h-4 w-4" />
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {activity.type === "asset_assigned" && "Assigned"}
                    {activity.type === "asset_returned" && "Returned"}
                    {activity.type === "asset_added" && "Added"}
                    {activity.type === "asset_maintenance" && "Maintenance"} {activity.asset} to {activity.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Asset Distribution
            </h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              View Details
            </button>
          </div>
          <div className="space-y-6">
            {assetDistribution.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${item.color}`} />
                    <span className="font-medium text-neutral-900 dark:text-white">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {item.count} units
                    </span>
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-700">
                  <div
                    className={`h-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
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
