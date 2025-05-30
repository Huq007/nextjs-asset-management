"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  IconArrowLeft,
  IconUser,
  IconMail,
  IconPhone,
  IconBuilding,
  IconBriefcase,
  IconCalendar,
  IconMapPin,
  IconId,
  IconNotes,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewEmployeePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    employeeId: "",
    department: "",
    position: "",
    joinDate: "",
    notes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would typically make an API call to save the employee
      console.log("Submitting employee data:", formData);
      
      // For now, we'll just show an alert and redirect
      alert("Employee added successfully!");
      router.push("/employees");
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Failed to add employee. Please try again.");
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-200 bg-white p-6 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/20" />
      </div>

      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/employees">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-lg bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
          >
            <IconArrowLeft className="h-4 w-4" />
            Back
          </motion.button>
        </Link>
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Add New Employee
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Personal Information */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Personal Information
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Full Name
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <IconUser className="h-4 w-4 text-neutral-500" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Email Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <IconMail className="h-4 w-4 text-neutral-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <IconPhone className="h-4 w-4 text-neutral-500" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute left-3 top-3">
                    <IconMapPin className="h-4 w-4 text-neutral-500" />
                  </div>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter address"
                    rows={3}
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Employment Information */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Employment Information
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Employee ID
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <IconId className="h-4 w-4 text-neutral-500" />
                  </div>
                  <input
                    type="text"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleInputChange}
                    placeholder="Enter employee ID"
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Department
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <IconBuilding className="h-4 w-4 text-neutral-500" />
                  </div>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
                  >
                    <option value="">Select Department</option>
                    <option value="it">Information Technology</option>
                    <option value="hr">Human Resources</option>
                    <option value="finance">Finance</option>
                    <option value="operations">Operations</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Position
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <IconBriefcase className="h-4 w-4 text-neutral-500" />
                  </div>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="Enter position"
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Join Date
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <IconCalendar className="h-4 w-4 text-neutral-500" />
                  </div>
                  <input
                    type="date"
                    name="joinDate"
                    value={formData.joinDate}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Additional Notes
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute left-3 top-3">
                    <IconNotes className="h-4 w-4 text-neutral-500" />
                  </div>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Enter any additional notes"
                    rows={3}
                    className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-[#067957] focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="mt-6 flex justify-end gap-4">
          <Link href="/employees">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg border border-neutral-200 bg-white px-6 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              Cancel
            </motion.button>
          </Link>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-lg bg-gradient-to-r from-[#067957] to-[#0a9c6f] px-6 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:shadow-lg"
          >
            Add Employee
          </motion.button>
        </div>
      </form>
    </div>
  );
} 