"use client";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
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

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
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
        <IconHome className="h-5 w-5 shrink-0 text-primary-light dark:text-primary-light" />
      ),
    },
    {
      label: "Assets",
      href: "/assets",
      icon: (
        <IconDevices className="h-5 w-5 shrink-0 text-primary-light dark:text-primary-light" />
      ),
    },
    {
      label: "Employees",
      href: "/employees",
      icon: (
        <IconUsers className="h-5 w-5 shrink-0 text-primary-light dark:text-primary-light" />
      ),
    },
    {
      label: "Departments",
      href: "/departments",
      icon: (
        <IconBuilding className="h-5 w-5 shrink-0 text-primary-light dark:text-primary-light" />
      ),
    },
    {
      label: "Reports",
      href: "/reports",
      icon: (
        <IconReportAnalytics className="h-5 w-5 shrink-0 text-primary-light dark:text-primary-light" />
      ),
    },
    {
      label: "Analytics",
      href: "/analytics",
      icon: (
        <IconFileAnalytics className="h-5 w-5 shrink-0 text-primary-light dark:text-primary-light" />
      ),
    },
    {
      label: "Finance",
      href: "/finance",
      icon: (
        <IconWallet className="h-5 w-5 shrink-0 text-primary-light dark:text-primary-light" />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-primary-light dark:text-primary-light" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconLogout className="h-5 w-5 shrink-0 text-primary-light dark:text-primary-light" />
      ),
    },
  ];

  return (
    <html lang="en" className="h-full">
      <body className={`${roboto.variable} font-sans antialiased h-full`}>
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
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-primary"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-primary" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-primary"
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
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-primary"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-primary" />
    </a>
  );
};
