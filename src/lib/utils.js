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
  // Match "side dish" which will successfully cover both "side dish" and "side dishes"
  // Match "pastries" which covers "pastries and side dishes" etc.
  const EXCLUDED_CATEGORIES = ["side dish", "pastries"];
  
  const formattedCategory = categoryName.trim().toLowerCase();
  if (formattedCategory) {
    const isExcluded = EXCLUDED_CATEGORIES.some(ex => formattedCategory.includes(ex));
    if (!isExcluded) {
      return { step: 2, isLitreItem: true };
    }
  }
  
  return { step: 1, isLitreItem: false };
}
