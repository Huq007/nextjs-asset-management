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
import Link from "next/link";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  BarProps,
} from "recharts";

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: {
      category: string;
      count: number;
      percentage: number;
    };
  }>;
  label?: string;
}

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

  const monthlyData = [
    { name: "Jan", value: 45, color: "#3B82F6" },
    { name: "Feb", value: 38, color: "#10B981" },
    { name: "Mar", value: 52, color: "#F59E0B" },
    { name: "Apr", value: 41, color: "#8B5CF6" },
    { name: "May", value: 48, color: "#EC4899" },
    { name: "Jun", value: 55, color: "#14B8A6" },
    { name: "Jul", value: 62, color: "#EF4444" },
    { name: "Aug", value: 58, color: "#6366F1" },
    { name: "Sep", value: 51, color: "#F97316" },
    { name: "Oct", value: 47, color: "#06B6D4" },
    { name: "Nov", value: 43, color: "#A855F7" },
    { name: "Dec", value: 49, color: "#22C55E" }
  ];

  const CHART_COLORS = [
    "#3B82F6", // Blue
    "#10B981", // Green
    "#F59E0B", // Amber
    "#8B5CF6", // Purple
    "#EC4899", // Pink
    "#14B8A6", // Teal
    "#EF4444", // Red
    "#6366F1", // Indigo
    "#F97316", // Orange
    "#06B6D4", // Cyan
    "#A855F7", // Violet
    "#22C55E"  // Emerald
  ];

  const CustomBar = (props: BarProps) => {
    const { x, y, width, height, fill } = props;
    return (
      <g>
        <defs>
          <linearGradient id={`gradient-${fill}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fill} stopOpacity={0.8} />
            <stop offset="100%" stopColor={fill} stopOpacity={0.4} />
          </linearGradient>
        </defs>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={`url(#gradient-${fill})`}
          rx={4}
          ry={4}
        />
      </g>
    );
  };

  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
          <p className="font-medium text-neutral-900 dark:text-white">
            {label}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Assets: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomPieTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
          <p className="font-medium text-neutral-900 dark:text-white">
            {payload[0].name}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Count: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative flex h-screen w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-200 bg-white p-6 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/20" />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold text-neutral-900 dark:text-white"
          >
            Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-1 text-sm text-neutral-600 dark:text-neutral-400"
          >
            Welcome back! Here&apos;s what&apos;s happening with your assets.
          </motion.p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-[#067957] to-[#0a9c6f] px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:shadow-lg"
        >
          <span className="relative z-10 flex items-center gap-2">
            <IconPlus className="h-4 w-4" />
            Quick Add Asset
          </span>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a9c6f] to-[#067957] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#067957]/20 to-[#0a9c6f]/20 opacity-0 blur-xl transition-opacity duration-200 group-hover:opacity-100" />
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
            className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-blue-100/80 to-blue-50/50 p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:from-blue-900/40 dark:to-blue-800/30 dark:border-neutral-700"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-200/50 to-blue-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-800/50 dark:to-blue-900/50" />
            <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-400/10 blur-xl transition-all duration-300 group-hover:scale-150 dark:from-blue-500/20 dark:to-blue-400/20" />
            <div className="flex items-center justify-between">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
              >
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Asset Distribution Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-blue-100/80 to-blue-50/50 p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:from-blue-900/40 dark:to-blue-800/30 dark:border-neutral-700"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-200/50 to-blue-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-800/50 dark:to-blue-900/50" />
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Asset Distribution
          </h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={assetDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {assetDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={CHART_COLORS[index % CHART_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomPieTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Asset Distribution Cards */}
        <div className="grid grid-cols-2 gap-4">
          {assetDistribution.map((asset, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="group relative flex flex-col gap-2 overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-indigo-100/80 to-indigo-50/50 p-4 shadow-sm transition-all duration-300 hover:shadow-md dark:from-indigo-900/40 dark:to-indigo-800/30 dark:border-neutral-700"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-200/50 to-indigo-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-800/50 dark:to-indigo-900/50" />
              <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-gradient-to-br from-indigo-500/10 to-indigo-400/10 blur-xl transition-all duration-300 group-hover:scale-150 dark:from-indigo-500/20 dark:to-indigo-400/20" />
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${asset.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
              >
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

        {/* Monthly Asset Acquisitions Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-emerald-100/80 to-emerald-50/50 p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:from-emerald-900/40 dark:to-emerald-800/30 dark:border-neutral-700"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-200/50 to-emerald-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-emerald-800/50 dark:to-emerald-900/50" />
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Monthly Asset Acquisitions
          </h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="rgba(0,0,0,0.1)"
                  strokeWidth={0.5}
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="value"
                  name="Assets Acquired"
                  shape={CustomBar}
                  radius={[4, 4, 0, 0]}
                >
                  {monthlyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions and Recent Activities */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 pb-8">
        {/* Quick Actions */}
        <div className="flex h-[300px] flex-col gap-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Quick Actions
          </h2>
          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {quickActions.map((action, idx) => (
              <Link key={idx} href={action.href}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex cursor-pointer flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#067957]/20 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${action.color}`}>
                    {action.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 dark:text-white">
                      {action.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {action.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="flex h-[300px] flex-col gap-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Recent Activities
          </h2>
          <div className="flex flex-1 flex-col gap-4">
            {recentActivities.map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="group relative flex items-start gap-3 overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-indigo-100/80 to-indigo-50/50 p-2.5 shadow-sm transition-all duration-300 hover:shadow-md dark:from-indigo-900/40 dark:to-indigo-800/30 dark:border-neutral-700"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-200/50 to-indigo-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-800/50 dark:to-indigo-900/50" />
                <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-gradient-to-br from-indigo-500/10 to-indigo-400/10 blur-xl transition-all duration-300 group-hover:scale-150 dark:from-indigo-500/20 dark:to-indigo-400/20" />
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg dark:bg-neutral-700">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
                      {activity.title}
                    </h3>
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
    </div>
  );
}
