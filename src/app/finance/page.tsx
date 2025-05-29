"use client";
import React from "react";
import { IconArrowDownRight, IconArrowUpRight, IconCalendar, IconCash, IconCreditCard, IconReceipt } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function FinancePage() {
  const financialMetrics = [
    {
      title: "Total Assets Value",
      value: "$2.4M",
      change: "+12%",
      icon: <IconCash className="h-5 w-5 text-white" />,
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500",
    },
    {
      title: "Monthly Expenses",
      value: "$45,230",
      change: "-2%",
      icon: <IconCreditCard className="h-5 w-5 text-white" />,
      gradient: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-500",
    },
    {
      title: "Pending Payments",
      value: "$12,450",
      change: "+5%",
      icon: <IconReceipt className="h-5 w-5 text-white" />,
      gradient: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500",
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      type: "expense",
      description: "Asset Maintenance",
      amount: "$2,450",
      date: "2024-03-15",
      status: "Completed",
    },
    {
      id: 2,
      type: "income",
      description: "Asset Sale",
      amount: "$5,000",
      date: "2024-03-14",
      status: "Completed",
    },
    {
      id: 3,
      type: "expense",
      description: "New Equipment Purchase",
      amount: "$12,000",
      date: "2024-03-13",
      status: "Pending",
    },
    {
      id: 4,
      type: "expense",
      description: "Software License Renewal",
      amount: "$3,500",
      date: "2024-03-12",
      status: "Completed",
    },
  ];

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-200 bg-white p-6 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Finance
        </h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all duration-200 hover:border-[#067957] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
        >
          <IconCalendar className="h-4 w-4" />
          This Month
        </motion.button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {financialMetrics.map((metric, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-neutral-800"
          >
            {/* Background gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-br opacity-5"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${
                  metric.gradient.split(" ")[1]
                }, ${metric.gradient.split(" ")[3]})`,
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className={`rounded-lg p-2 ${metric.bgColor} shadow-sm`}>
                  {metric.icon}
                </div>
                <span
                  className={`flex items-center text-sm font-medium ${
                    metric.change.startsWith("+")
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-rose-600 dark:text-rose-400"
                  }`}
                >
                  {metric.change}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  {metric.title}
                </h3>
                <p className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">
                  {metric.value}
                </p>
              </div>

              {/* Hover effect line */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-300 group-hover:w-full"
                style={{
                  backgroundImage: `linear-gradient(to right, ${
                    metric.gradient.split(" ")[1]
                  }, ${metric.gradient.split(" ")[3]})`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg dark:border-neutral-700 dark:bg-neutral-800"
        >
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Recent Transactions
          </h3>
          <div className="space-y-4">
            {recentTransactions.map((transaction, idx) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="flex items-center justify-between rounded-lg border border-neutral-100 p-4 transition-all duration-200 hover:border-[#067957] hover:shadow-md dark:border-neutral-700 dark:hover:border-[#067957]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      transaction.type === "income"
                        ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400"
                        : "bg-rose-100 text-rose-600 dark:bg-rose-900 dark:text-rose-400"
                    }`}
                  >
                    {transaction.type === "income" ? (
                      <IconArrowUpRight className="h-5 w-5" />
                    ) : (
                      <IconArrowDownRight className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {transaction.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-medium ${
                      transaction.type === "income"
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-rose-600 dark:text-rose-400"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}
                    {transaction.amount}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {transaction.status}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg dark:border-neutral-700 dark:bg-neutral-800"
        >
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Budget Overview
          </h3>
          <div className="space-y-6">
            {[
              { category: "Equipment", spent: 45000, budget: 60000, color: "from-blue-500 to-indigo-500" },
              { category: "Maintenance", spent: 15000, budget: 20000, color: "from-emerald-500 to-teal-500" },
              { category: "Software", spent: 8000, budget: 10000, color: "from-amber-500 to-orange-500" },
              { category: "Training", spent: 5000, budget: 8000, color: "from-purple-500 to-pink-500" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-neutral-900 dark:text-white">
                    {item.category}
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    ${item.spent.toLocaleString()} / ${item.budget.toLocaleString()}
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-700">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((item.spent / item.budget) * 100, 100)}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 