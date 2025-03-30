import clsx from "clsx";

export function getDynamicColor(lineColor: string, theme: string) {
  return clsx({
    [`bg-${lineColor}-600`]: theme === "light",
    [`bg-${lineColor}-900`]: theme === "dark",
  });
}