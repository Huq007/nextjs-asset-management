"use client";
import React, { useState } from "react";
import { 
  IconPlus, 
  IconSearch, 
  IconFilter,
  IconEdit,
  IconTrash,
  IconEye,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconDeviceTablet,
  IconPrinter,
  IconDotsVertical,
  IconCar,
  IconTable,
  IconServer,
  IconChevronLeft,
  IconChevronRight
} from "@tabler/icons-react";
import { motion } from "motion/react";

export default function AssetsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const assets = [
    {
      id: "AST-1001",
      name: "MacBook Pro 16\"",
      category: "Hardware",
      status: "Active",
      assignedTo: "John Doe",
      purchaseDate: "2024-03-15",
      icon: <IconDeviceLaptop className="h-4 w-4" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      id: "AST-1002",
      name: "iPhone 15 Pro",
      category: "Hardware",
      status: "In Use",
      assignedTo: "Sarah Wilson",
      purchaseDate: "2024-03-10",
      icon: <IconDeviceMobile className="h-4 w-4" />,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: "AST-1003",
      name: "Company Vehicle",
      category: "Vehicles",
      status: "Maintenance",
      assignedTo: "Mike Johnson",
      purchaseDate: "2024-02-28",
      icon: <IconCar className="h-4 w-4" />,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      id: "AST-1004",
      name: "Office Furniture Set",
      category: "Furniture",
      status: "Available",
      assignedTo: "Not Assigned",
      purchaseDate: "2024-03-01",
      icon: <IconTable className="h-4 w-4" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "AST-1005",
      name: "Server Rack",
      category: "Hardware",
      status: "Active",
      assignedTo: "IT Department",
      purchaseDate: "2024-03-05",
      icon: <IconServer className="h-4 w-4" />,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: "AST-1006",
      name: "iPad Pro 12.9\"",
      category: "Hardware",
      status: "In Use",
      assignedTo: "Emily Davis",
      purchaseDate: "2024-03-12",
      icon: <IconDeviceTablet className="h-4 w-4" />,
      gradient: "from-violet-500 to-purple-500"
    },
    {
      id: "AST-1007",
      name: "HP LaserJet Pro",
      category: "Hardware",
      status: "Active",
      assignedTo: "Office Admin",
      purchaseDate: "2024-03-08",
      icon: <IconPrinter className="h-4 w-4" />,
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: "AST-1008",
      name: "Dell XPS 15",
      category: "Hardware",
      status: "In Use",
      assignedTo: "Alex Turner",
      purchaseDate: "2024-03-14",
      icon: <IconDeviceLaptop className="h-4 w-4" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      id: "AST-1009",
      name: "Delivery Van",
      category: "Vehicles",
      status: "Active",
      assignedTo: "Logistics Team",
      purchaseDate: "2024-03-07",
      icon: <IconCar className="h-4 w-4" />,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      id: "AST-1010",
      name: "Conference Table",
      category: "Furniture",
      status: "Available",
      assignedTo: "Not Assigned",
      purchaseDate: "2024-03-09",
      icon: <IconTable className="h-4 w-4" />,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const totalPages = Math.ceil(assets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAssets = assets.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Previous button
    buttons.push(
      <motion.button
        key="prev"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all duration-200 hover:border-[#067957] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <IconChevronLeft className="h-4 w-4" />
        Previous
      </motion.button>
    );

    // First page
    if (startPage > 1) {
      buttons.push(
        <motion.button
          key={1}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handlePageChange(1)}
          className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all duration-200 hover:border-[#067957] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
        >
          1
        </motion.button>
      );
      if (startPage > 2) {
        buttons.push(
          <span key="start-ellipsis" className="px-2 text-neutral-500">
            ...
          </span>
        );
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <motion.button
          key={i}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handlePageChange(i)}
          className={`rounded-lg border px-3 py-2 text-sm font-medium shadow-sm transition-all duration-200 ${
            i === currentPage
              ? "border-[#067957] bg-[#067957] text-white"
              : "border-neutral-200 bg-white text-neutral-700 hover:border-[#067957] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
          }`}
        >
          {i}
        </motion.button>
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="end-ellipsis" className="px-2 text-neutral-500">
            ...
          </span>
        );
      }
      buttons.push(
        <motion.button
          key={totalPages}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handlePageChange(totalPages)}
          className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all duration-200 hover:border-[#067957] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
        >
          {totalPages}
        </motion.button>
      );
    }

    // Next button
    buttons.push(
      <motion.button
        key="next"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all duration-200 hover:border-[#067957] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Next
        <IconChevronRight className="h-4 w-4" />
      </motion.button>
    );

    return buttons;
  };

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-200 bg-white p-6 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Assets</h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 rounded-lg bg-[#067957] px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-[#067957]/90"
        >
          <IconPlus className="h-4 w-4" />
          Add Asset
        </motion.button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            placeholder="Search assets..."
            className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 shadow-sm transition-all duration-200 hover:border-[#067957] hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
        >
          <IconFilter className="h-4 w-4" />
          Filters
        </motion.button>
        <select className="rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800">
          <option value="">All Categories</option>
          <option value="hardware">Hardware</option>
          <option value="software">Software</option>
          <option value="furniture">Furniture</option>
          <option value="vehicles">Vehicles</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800/50">
                <th className="px-6 py-4 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Asset ID</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Category</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Assigned To</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Purchase Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
              {currentAssets.map((asset, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="group hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                >
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900 dark:text-white">{asset.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${asset.gradient} text-white shadow-sm`}>
                        {asset.icon}
                      </div>
                      <span className="text-sm text-neutral-900 dark:text-white">{asset.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-900 dark:text-white">{asset.category}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      asset.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      asset.status === 'In Use' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      asset.status === 'Maintenance' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' :
                      'bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200'
                    }`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-900 dark:text-white">{asset.assignedTo}</td>
                  <td className="px-6 py-4 text-sm text-neutral-900 dark:text-white">{asset.purchaseDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-lg bg-emerald-50 p-1.5 text-emerald-600 transition-colors hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50"
                      >
                        <IconEye className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-lg bg-[#067957]/10 p-1.5 text-[#067957] transition-colors hover:bg-[#067957]/20 dark:bg-[#067957]/20 dark:text-[#067957] dark:hover:bg-[#067957]/30"
                      >
                        <IconEdit className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-lg bg-rose-50 p-1.5 text-rose-600 transition-colors hover:bg-rose-100 dark:bg-rose-900/30 dark:text-rose-400 dark:hover:bg-rose-900/50"
                      >
                        <IconTrash className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-lg bg-purple-50 p-1.5 text-purple-600 transition-colors hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 dark:hover:bg-purple-900/50"
                      >
                        <IconDotsVertical className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          Showing {startIndex + 1} to {endIndex} of {assets.length} entries
        </div>
        <div className="flex items-center gap-2">
          {renderPaginationButtons()}
        </div>
      </div>
    </div>
  );
} 