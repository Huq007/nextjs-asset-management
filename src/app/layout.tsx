"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "./components/ui/sidebar";
import {
  IconBuilding,
  IconDevices,
  IconFileAnalytics,
  IconHome,
  IconLogout,
  IconReportAnalytics,
  IconSettings,
  IconUsers,
  IconWallet,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <IconHome className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Assets",
      href: "/assets",
      icon: (
        <IconDevices className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Employees",
      href: "/employees",
      icon: (
        <IconUsers className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Departments",
      href: "/departments",
      icon: (
        <IconBuilding className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Reports",
      href: "/reports",
      icon: (
        <IconReportAnalytics className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Analytics",
      href: "/analytics",
      icon: (
        <IconFileAnalytics className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Finance",
      href: "/finance",
      icon: (
        <IconWallet className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconLogout className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <div className="flex h-full w-full">
          <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
              <div className="flex flex-1 flex-col">
                {open ? <Logo /> : <LogoIcon />}
                <div className="mt-8 flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <Link key={idx} href={link.href}>
                      <SidebarLink link={link} />
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <SidebarLink
                  link={{
                    label: "Admin User",
                    href: "#",
                    icon: (
                      <img
                        src="https://assets.aceternity.com/manu.png"
                        className="h-7 w-7 shrink-0 rounded-full"
                        width={50}
                        height={50}
                        alt="Avatar"
                      />
                    ),
                  }}
                />
              </div>
            </SidebarBody>
          </Sidebar>
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        Asset Manager
      </motion.span>
    </a>
  );
};

const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};
