"use client";
import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconX, IconMenu2 } from "@tabler/icons-react";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-full px-4 py-4 hidden md:flex md:flex-col w-[300px] shrink-0",
          "dark:bg-[#067958]/30",
          className
        )}
        animate={{
          width: animate ? (open ? "240px" : "80px") : "300px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-14 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-[#067958]/20 dark:bg-[#067958]/30 backdrop-blur-md w-full border-b border-[#067958]/10 dark:border-[#067958]/20",
          className
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg bg-[#067958]/10 hover:bg-[#067958]/20 dark:bg-[#067958]/20 dark:hover:bg-[#067958]/30 transition-all duration-200"
          >
            <IconMenu2 className="h-6 w-6 text-black dark:text-white" />
          </motion.button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-[#067958]/20 dark:bg-[#067958]/30 backdrop-blur-md p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div className="absolute right-10 top-10 z-50">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpen(!open)}
                  className="p-2 rounded-lg bg-[#067958]/10 hover:bg-[#067958]/20 dark:bg-[#067958]/20 dark:hover:bg-[#067958]/30 transition-all duration-200"
                >
                  <IconX className="h-6 w-6 text-black dark:text-white" />
                </motion.button>
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
}) => {
  const { open, animate } = useSidebar();
  return (
    <motion.div
      className="group relative"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div
        role="button"
        tabIndex={0}
        className={cn(
          "relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
          "text-black dark:text-white",
          "hover:bg-white dark:hover:bg-neutral-800",
          "backdrop-blur-sm",
          "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-[#067958]/0 before:to-[#067958]/0",
          "before:transition-all before:duration-300",
          "hover:before:from-[#067958]/5 hover:before:to-[#067958]/10",
          "after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:h-0 after:w-1 after:rounded-r-full after:bg-[#067958] after:transition-all after:duration-300",
          "hover:after:h-8",
          "cursor-pointer",
          className
        )}
        {...props}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-black dark:text-white"
        >
          {link.icon}
        </motion.div>
        <motion.span
          animate={{
            display: animate
              ? open
                ? "inline-block"
                : "none"
              : "inline-block",
            opacity: animate ? (open ? 1 : 0) : 1,
          }}
          className="truncate"
        >
          {link.label}
        </motion.span>
      </div>
    </motion.div>
  );
};
