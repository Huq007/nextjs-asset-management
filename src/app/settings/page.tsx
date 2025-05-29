"use client";
import React from "react";
import { IconBell, IconLock, IconMoon, IconPalette, IconUser, IconWorld } from "@tabler/icons-react";

type BaseSetting = {
  name: string;
  value: string;
  type: string;
};

type TextSetting = BaseSetting & {
  type: "text" | "email";
  disabled?: boolean;
};

type ToggleSetting = BaseSetting & {
  type: "toggle";
};

type ButtonSetting = BaseSetting & {
  type: "button";
  buttonText: string;
};

type SelectSetting = BaseSetting & {
  type: "select";
  options: string[];
};

type Setting = TextSetting | ToggleSetting | ButtonSetting | SelectSetting;

type SettingsSection = {
  title: string;
  icon: React.ReactNode;
  settings: Setting[];
};

export default function SettingsPage() {
  const settingsSections: SettingsSection[] = [
    {
      title: "Profile Settings",
      icon: <IconUser className="h-5 w-5 text-blue-500" />,
      settings: [
        {
          name: "Display Name",
          value: "Admin User",
          type: "text",
        },
        {
          name: "Email",
          value: "admin@company.com",
          type: "email",
        },
        {
          name: "Role",
          value: "Administrator",
          type: "text",
          disabled: true,
        },
      ],
    },
    {
      title: "Security",
      icon: <IconLock className="h-5 w-5 text-red-500" />,
      settings: [
        {
          name: "Two-Factor Authentication",
          value: "Enabled",
          type: "toggle",
        },
        {
          name: "Password",
          value: "••••••••",
          type: "button",
          buttonText: "Change Password",
        },
        {
          name: "Session Timeout",
          value: "30 minutes",
          type: "select",
          options: ["15 minutes", "30 minutes", "1 hour", "2 hours"],
        },
      ],
    },
    {
      title: "Notifications",
      icon: <IconBell className="h-5 w-5 text-yellow-500" />,
      settings: [
        {
          name: "Email Notifications",
          value: "Enabled",
          type: "toggle",
        },
        {
          name: "Asset Alerts",
          value: "Enabled",
          type: "toggle",
        },
        {
          name: "Maintenance Reminders",
          value: "Enabled",
          type: "toggle",
        },
      ],
    },
    {
      title: "Appearance",
      icon: <IconPalette className="h-5 w-5 text-purple-500" />,
      settings: [
        {
          name: "Theme",
          value: "System",
          type: "select",
          options: ["Light", "Dark", "System"],
        },
        {
          name: "Accent Color",
          value: "Blue",
          type: "select",
          options: ["Blue", "Green", "Purple", "Red"],
        },
      ],
    },
    {
      title: "Language & Region",
      icon: <IconWorld className="h-5 w-5 text-green-500" />,
      settings: [
        {
          name: "Language",
          value: "English",
          type: "select",
          options: ["English", "Spanish", "French", "German"],
        },
        {
          name: "Time Zone",
          value: "UTC-5",
          type: "select",
          options: ["UTC-8", "UTC-5", "UTC+0", "UTC+1", "UTC+8"],
        },
        {
          name: "Date Format",
          value: "MM/DD/YYYY",
          type: "select",
          options: ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"],
        },
      ],
    },
  ];

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-tl-2xl border border-neutral-200 bg-white p-4 md:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Settings
        </h1>
        <div className="flex gap-2">
          <button className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700">
            Cancel
          </button>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {settingsSections.map((section, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div className="mb-4 flex items-center gap-2">
              {section.icon}
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {section.title}
              </h3>
            </div>
            <div className="space-y-4">
              {section.settings.map((setting, settingIdx) => (
                <div
                  key={settingIdx}
                  className="flex items-center justify-between gap-4"
                >
                  <label
                    htmlFor={setting.name}
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {setting.name}
                  </label>
                  {setting.type === "toggle" ? (
                    <button
                      className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                        setting.value === "Enabled"
                          ? "bg-blue-600"
                          : "bg-neutral-200 dark:bg-neutral-700"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                          setting.value === "Enabled"
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  ) : setting.type === "select" ? (
                    <select
                      id={setting.name}
                      className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-900 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      defaultValue={setting.value}
                    >
                      {setting.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : setting.type === "button" ? (
                    <button className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700">
                      {setting.buttonText}
                    </button>
                  ) : (
                    <input
                      type={setting.type}
                      id={setting.name}
                      defaultValue={setting.value}
                      disabled={setting.disabled}
                      className="w-48 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-900 focus:border-blue-500 focus:outline-none disabled:bg-neutral-100 disabled:text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:disabled:bg-neutral-700 dark:disabled:text-neutral-400"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 