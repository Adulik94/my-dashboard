import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper function to combine conditional logic and merge conflicts
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
