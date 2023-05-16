import { format, parseISO } from 'date-fns';

export function parseDate(date: string) {
  return format(parseISO(date), 'LLL d, yyyy');
}

export function generatePageTitle(title: string) {
  return title
    .replaceAll('-', ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
