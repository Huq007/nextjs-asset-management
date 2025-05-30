"use client";
import React, { useState } from "react";
import {
  IconPlus,
  IconSearch,
  IconEye,
  IconEdit,
  IconTrash,
  IconChevronLeft,
  IconChevronRight,
  IconFilter,
  IconX,
  IconHistory,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  status: string;
  joinDate: string;
  avatar: string;
}

interface EmployeeDetailsSlideOverProps {
  employee: Employee | null;
  isOpen: boolean;
  onClose: () => void;
}

const EmployeeDetailsSlideOver: React.FC<EmployeeDetailsSlideOverProps> = ({
  employee,
  isOpen,
  onClose,
}) => {
  if (!employee) return null;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl bg-white shadow-xl dark:bg-neutral-900"
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 dark:border-neutral-700">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-[#067957] to-[#0a9c6f] p-0.5">
              <div className="h-full w-full overflow-hidden rounded-full bg-white dark:bg-neutral-800">
                <Image
                  src={employee.avatar}
                  alt={employee.name}
                  className="h-full w-full object-cover"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              {employee.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white"
          >
            <IconX className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <h3 className="mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Basic Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Employee ID
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">
                    {employee.id}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Position
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">
                    {employee.position}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Department
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">
                    {employee.department}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Join Date
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">
                    {employee.joinDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Contact Information
              </h3>
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Email
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">
                  {employee.email}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 rounded-lg bg-[#067957] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#067957]/90"
              >
                <span className="flex items-center justify-center gap-1.5">
                  <IconEdit className="h-4 w-4" />
                  Edit Employee
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all duration-200 hover:border-[#067957] hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-[#067957]"
              >
                <span className="flex items-center justify-center gap-1.5">
                  <IconHistory className="h-4 w-4" />
                  View History
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function EmployeesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const itemsPerPage = 10;

  const employees = [
    {
      id: "EMP-1001",
      name: "John Doe",
      position: "Software Engineer",
      department: "IT",
      email: "john.doe@company.com",
      status: "Active",
      joinDate: "2024-01-15",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: "EMP-1002",
      name: "Sarah Wilson",
      position: "HR Manager",
      department: "Human Resources",
      email: "sarah.wilson@company.com",
      status: "Active",
      joinDate: "2024-02-01",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: "EMP-1003",
      name: "Michael Brown",
      position: "Financial Analyst",
      department: "Finance",
      email: "michael.brown@company.com",
      status: "Active",
      joinDate: "2024-02-15",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: "EMP-1004",
      name: "Emily Davis",
      position: "Operations Manager",
      department: "Operations",
      email: "emily.davis@company.com",
      status: "Active",
      joinDate: "2024-03-01",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: "EMP-1005",
      name: "David Wilson",
      position: "Marketing Specialist",
      department: "Marketing",
      email: "david.wilson@company.com",
      status: "Active",
      joinDate: "2024-03-15",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: "EMP-1006",
      name: "Lisa Anderson",
      position: "Research Scientist",
      department: "R&D",
      email: "lisa.anderson@company.com",
      status: "Active",
      joinDate: "2024-01-20",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
      id: "EMP-1007",
      name: "Tom Harris",
      position: "IT Support Specialist",
      department: "IT Support",
      email: "tom.harris@company.com",
      status: "Active",
      joinDate: "2024-02-10",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
      id: "EMP-1008",
      name: "Rachel Green",
      position: "Business Development Manager",
      department: "Business Development",
      email: "rachel.green@company.com",
      status: "Active",
      joinDate: "2024-02-25",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
      id: "EMP-1009",
      name: "James Wilson",
      position: "Senior Developer",
      department: "IT",
      email: "james.wilson@company.com",
      status: "Active",
      joinDate: "2024-03-05",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: "EMP-1010",
      name: "Emma Thompson",
      position: "HR Specialist",
      department: "Human Resources",
      email: "emma.thompson@company.com",
      status: "Active",
      joinDate: "2024-03-10",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    {
      id: "EMP-1011",
      name: "Daniel Lee",
      position: "Financial Controller",
      department: "Finance",
      email: "daniel.lee@company.com",
      status: "Active",
      joinDate: "2024-01-25",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: "EMP-1012",
      name: "Sophie Martin",
      position: "Operations Analyst",
      department: "Operations",
      email: "sophie.martin@company.com",
      status: "Active",
      joinDate: "2024-02-05",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: "EMP-1013",
      name: "Alex Johnson",
      position: "Marketing Manager",
      department: "Marketing",
      email: "alex.johnson@company.com",
      status: "Active",
      joinDate: "2024-02-20",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: "EMP-1014",
      name: "Olivia White",
      position: "Research Associate",
      department: "R&D",
      email: "olivia.white@company.com",
      status: "Active",
      joinDate: "2024-03-08",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    {
      id: "EMP-1015",
      name: "Ryan Clark",
      position: "IT Support Lead",
      department: "IT Support",
      email: "ryan.clark@company.com",
      status: "Active",
      joinDate: "2024-01-30",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: "EMP-1016",
      name: "Mia Rodriguez",
      position: "Business Analyst",
      department: "Business Development",
      email: "mia.rodriguez@company.com",
      status: "Active",
      joinDate: "2024-02-15",
      avatar: "https://i.pravatar.cc/150?img=16",
    },
    {
      id: "EMP-1017",
      name: "Ethan Taylor",
      position: "Frontend Developer",
      department: "IT",
      email: "ethan.taylor@company.com",
      status: "Active",
      joinDate: "2024-03-12",
      avatar: "https://i.pravatar.cc/150?img=17",
    },
    {
      id: "EMP-1018",
      name: "Ava Martinez",
      position: "HR Coordinator",
      department: "Human Resources",
      email: "ava.martinez@company.com",
      status: "Active",
      joinDate: "2024-01-28",
      avatar: "https://i.pravatar.cc/150?img=18",
    },
    {
      id: "EMP-1019",
      name: "Noah Garcia",
      position: "Financial Analyst",
      department: "Finance",
      email: "noah.garcia@company.com",
      status: "Active",
      joinDate: "2024-02-28",
      avatar: "https://i.pravatar.cc/150?img=19",
    },
    {
      id: "EMP-1020",
      name: "Isabella Kim",
      position: "Operations Coordinator",
      department: "Operations",
      email: "isabella.kim@company.com",
      status: "Active",
      joinDate: "2024-03-18",
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    {
      id: "EMP-1021",
      name: "Lucas Brown",
      position: "Marketing Coordinator",
      department: "Marketing",
      email: "lucas.brown@company.com",
      status: "Active",
      joinDate: "2024-01-22",
      avatar: "https://i.pravatar.cc/150?img=21",
    },
    {
      id: "EMP-1022",
      name: "Charlotte Davis",
      position: "Research Assistant",
      department: "R&D",
      email: "charlotte.davis@company.com",
      status: "Active",
      joinDate: "2024-02-18",
      avatar: "https://i.pravatar.cc/150?img=22",
    },
    {
      id: "EMP-1023",
      name: "Mason Wilson",
      position: "IT Support Technician",
      department: "IT Support",
      email: "mason.wilson@company.com",
      status: "Active",
      joinDate: "2024-03-22",
      avatar: "https://i.pravatar.cc/150?img=23",
    },
    {
      id: "EMP-1024",
      name: "Amelia Thompson",
      position: "Business Development Associate",
      department: "Business Development",
      email: "amelia.thompson@company.com",
      status: "Active",
      joinDate: "2024-01-18",
      avatar: "https://i.pravatar.cc/150?img=24",
    },
    {
      id: "EMP-1025",
      name: "Henry Anderson",
      position: "Backend Developer",
      department: "IT",
      email: "henry.anderson@company.com",
      status: "Active",
      joinDate: "2024-02-22",
      avatar: "https://i.pravatar.cc/150?img=25",
    }
  ];

  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEmployees = employees.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleViewDetails = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsDetailsOpen(true);
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
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
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
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
        <IconChevronRight className="h-4 w-4" />
      </motion.button>
    );

    return buttons;
  };

  return (
    <div className="relative flex h-screen w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-200 bg-white p-6 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Employees
        </h1>
        <Link href="/employees/new">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#067957] to-[#0a9c6f] px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:shadow-lg"
          >
            <IconPlus className="h-4 w-4" />
            Add Employee
          </motion.button>
        </Link>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            placeholder="Search employees..."
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
          <option value="">All Departments</option>
          <option value="it">IT</option>
          <option value="hr">HR</option>
          <option value="finance">Finance</option>
          <option value="operations">Operations</option>
        </select>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div className="flex-1 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
          <div className="h-full overflow-y-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="sticky top-0 z-10 bg-neutral-50 dark:bg-neutral-800/50">
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="px-6 py-3.5 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      Employee ID
                    </th>
                    <th className="px-6 py-3.5 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      Name
                    </th>
                    <th className="px-6 py-3.5 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      Position
                    </th>
                    <th className="px-6 py-3.5 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      Department
                    </th>
                    <th className="px-6 py-3.5 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      Status
                    </th>
                    <th className="px-6 py-3.5 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      Join Date
                    </th>
                    <th className="px-6 py-3.5 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                  {currentEmployees.map((employee, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="group cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                      onClick={() => handleViewDetails(employee)}
                    >
                      <td className="px-6 py-3 text-sm font-medium text-neutral-900 dark:text-white">
                        {employee.id}
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-3">
                          <div className="relative h-7 w-7 overflow-hidden rounded-full bg-gradient-to-br from-[#067957] to-[#0a9c6f] p-0.5">
                            <div className="h-full w-full overflow-hidden rounded-full bg-white dark:bg-neutral-800">
                              <Image
                                src={employee.avatar}
                                alt={employee.name}
                                className="h-full w-full object-cover"
                                width={28}
                                height={28}
                              />
                            </div>
                          </div>
                          <span className="text-sm text-neutral-900 dark:text-white">
                            {employee.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm text-neutral-900 dark:text-white">
                        {employee.position}
                      </td>
                      <td className="px-6 py-3 text-sm text-neutral-900 dark:text-white">
                        {employee.department}
                      </td>
                      <td className="px-6 py-3">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                            employee.status === "Active"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200"
                          }`}
                        >
                          {employee.status}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-sm text-neutral-900 dark:text-white">
                        {employee.joinDate}
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleViewDetails(employee)}
                            className="rounded-lg bg-purple-50 p-1.5 text-purple-600 transition-colors hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 dark:hover:bg-purple-900/50"
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
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Showing {startIndex + 1} to {endIndex} of {employees.length} entries
          </div>
          <div className="flex items-center gap-2">
            {renderPaginationButtons()}
          </div>
        </div>
      </div>

      {/* Add EmployeeDetailsSlideOver */}
      <EmployeeDetailsSlideOver
        employee={selectedEmployee}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      />
    </div>
  );
} 