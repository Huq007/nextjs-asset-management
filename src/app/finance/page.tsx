"use client";
import React from "react";
import { IconArrowDownRight, IconArrowUpRight, IconCalendar, IconCash, IconCreditCard, IconReceipt } from "@tabler/icons-react";

export default function FinancePage() {
  const financialMetrics = [
    {
      title: "Total Assets Value",
      value: "$2.4M",
      change: "+12%",
      icon: <IconCash className="h-5 w-5 text-green-500" />,
    },
    {
      title: "Monthly Expenses",
      value: "$45,230",
      change: "-2%",
      icon: <IconCreditCard className="h-5 w-5 text-red-500" />,
    },
    {
      title: "Pending Payments",
      value: "$12,450",
      change: "+5%",
      icon: <IconReceipt className="h-5 w-5 text-yellow-500" />,
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
    <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-tl-2xl border border-neutral-200 bg-white p-4 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Finance
        </h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700">
            <IconCalendar className="h-4 w-4" />
            This Month
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {financialMetrics.map((metric, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {metric.title}
              </h3>
              {metric.icon}
            </div>
            <div className="flex items-baseline justify-between">
              <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
                {metric.value}
              </p>
              <span
                className={`text-sm font-medium ${
                  metric.change.startsWith("+")
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Recent Transactions
          </h3>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between rounded-lg border border-neutral-100 p-3 dark:border-neutral-700"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      transaction.type === "income"
                        ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                        : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400"
                    }`}
                  >
                    {transaction.type === "income" ? (
                      <IconArrowUpRight className="h-4 w-4" />
                    ) : (
                      <IconArrowDownRight className="h-4 w-4" />
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
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}
                    {transaction.amount}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Budget Overview
          </h3>
          <div className="space-y-4">
            {[
              { category: "Equipment", spent: 45000, budget: 60000 },
              { category: "Maintenance", spent: 15000, budget: 20000 },
              { category: "Software", spent: 8000, budget: 10000 },
              { category: "Training", spent: 5000, budget: 8000 },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-neutral-900 dark:text-white">
                    {item.category}
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    ${item.spent.toLocaleString()} / ${item.budget.toLocaleString()}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-700">
                  <div
                    className={`h-full ${
                      item.spent / item.budget > 0.8
                        ? "bg-red-500"
                        : item.spent / item.budget > 0.6
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                    style={{
                      width: `${Math.min((item.spent / item.budget) * 100, 100)}%`,
                    }}
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