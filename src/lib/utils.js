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
export function getStepDetails(item) {
  const categoryName = item?.category?.name || item?.categoryName || "";
  const EXCLUDED_CATEGORIES = ["Side Dishes", "Pastries", "Small Chops"];
  
  if (categoryName && !EXCLUDED_CATEGORIES.includes(categoryName)) {
    return { step: 2, isLitreItem: true };
  }
  
  return { step: 1, isLitreItem: false };
}
