import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatFileSize(bytes: number): string {
  const KB = 1024;
  const MB = KB * 1024;

  // Si es menor a 1MB, mostrar en KB
  if (bytes < MB) {
    const kbs = Math.round((bytes / KB) * 10) / 10;
    return `${kbs} KB`;
  }

  // Si es mayor o igual a 1MB, mostrar en MB
  const mbs = Math.round((bytes / MB) * 10) / 10;
  return `${mbs} MB`;
}
