import { ColorType } from "@/common/types/color.type";

export function getDynamicColor(
  lineColor: ColorType,
  theme: string
) {
  const colors = {
    blue: theme === "light" ? "bg-blue-600" : "bg-blue-900",
    red: theme === "light" ? "bg-red-600" : "bg-red-900",
    green: theme === "light" ? "bg-green-600" : "bg-green-900",
    yellow: theme === "light" ? "bg-yellow-600" : "bg-yellow-900",
    purple: theme === "light" ? "bg-purple-600" : "bg-purple-900",
    orange: theme === "light" ? "bg-orange-600" : "bg-orange-900",
    pink: theme === "light" ? "bg-pink-600" : "bg-pink-900",
    teal: theme === "light" ? "bg-teal-600" : "bg-teal-900",
  };

  return colors[lineColor] || "bg-gray-600"; 
}