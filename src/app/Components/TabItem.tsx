"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
export interface TabItemProps {
  value: string;
  title: string;
  isSelected: boolean;
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="flex relative items-center px-4 h-8 text-white/40 text-base font-medium data-[state=active]:text-white hover:text-white transition-colors ease-in-out duration-150 cursor-pointer"
    >
      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-8 bg-white/10 rounded-lg"
          transition={{
            type: "spring",
            stiffness: 256,
            damping: 24,
            mass: 1,
          }}
        />
      )}
    </Tabs.Trigger>
  );
}
