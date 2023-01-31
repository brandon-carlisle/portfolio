import { format, parseISO } from 'date-fns';

function formatDate(date) {
  return format(parseISO(date), 'LLL d, yyyy');
}
