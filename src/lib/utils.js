import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatItemName(name) {
  if (!name) return "";
  // Remove bracketed liter info like "(2L)" or "(4L)"
  // Also remove simple liter info like " 2L" or " 4L" at the end
  return name
    .replace(/\s*\([^)]*L[^)]*\)/gi, "")
    .replace(/\s*\d+L\b/gi, "")
    .trim();
}
