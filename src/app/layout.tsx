"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./components/ui/sidebar";
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
import Link from "next/link";
import Image from "next/image";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
  fallback: ["system-ui", "arial"],
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
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
          <IconHome className="h-5 w-5 shrink-0 text-blue-500 dark:text-blue-400" />
        </div>
      ),
    },
    {
      label: "Assets",
      href: "/assets",
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
          <IconDevices className="h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-400" />
        </div>
      ),
    },
    {
      label: "Employees",
      href: "/employees",
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-50 dark:bg-purple-900/30">
          <IconUsers className="h-5 w-5 shrink-0 text-purple-500 dark:text-purple-400" />
        </div>
      ),
    },
    {
      label: "Departments",
      href: "/departments",
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-900/30">
          <IconBuilding className="h-5 w-5 shrink-0 text-amber-500 dark:text-amber-400" />
        </div>
      ),
    },
    {
      label: "Reports",
      href: "/reports",
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/30">
          <IconReportAnalytics className="h-5 w-5 shrink-0 text-rose-500 dark:text-rose-400" />
        </div>
      ),
    },
    {
      label: "Analytics",
      href: "/analytics",
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900/30">
          <IconFileAnalytics className="h-5 w-5 shrink-0 text-cyan-500 dark:text-cyan-400" />
        </div>
      ),
    },
    {
      label: "Finance",
      href: "/finance",
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
          <IconWallet className="h-5 w-5 shrink-0 text-indigo-500 dark:text-indigo-400" />
        </div>
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900/30">
          <IconSettings className="h-5 w-5 shrink-0 text-slate-500 dark:text-slate-400" />
        </div>
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
          <IconLogout className="h-5 w-5 shrink-0 text-red-500 dark:text-red-400" />
        </div>
      ),
    },
  ];

  return (
    <html lang="en" className={`h-full ${montserrat.variable}`}>
      <body className="font-montserrat antialiased h-full">
        <div className="flex h-full w-full">
          <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
              <div className="flex flex-1 flex-col">
                {open ? <Logo /> : <LogoIcon />}
                <div className="mt-8 flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <Link key={idx} href={link.href} className="block">
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
                      <Image
                        src="https://assets.aceternity.com/manu.png"
                        className="h-7 w-7 shrink-0 rounded-full"
                        width={28}
                        height={28}
                        alt="Avatar"
                      />
                    ),
                  }}
                />
              </div>
            </SidebarBody>
          </Sidebar>
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex flex-col items-center py-4"
    >
      <Image
        src="/logo.png"
        alt="Asset Manager Logo"
        width={64}
        height={64}
        className="h-16 w-16"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2 text-base font-bold uppercase tracking-wide text-primary"
      >
        Asset Management
      </motion.span>
    </a>
  );
};

const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center justify-center py-4"
    >
      <Image
        src="/logo.png"
        alt="Asset Manager Logo"
        width={40}
        height={40}
        className="h-10 w-10"
      />
    </a>
  );
};
