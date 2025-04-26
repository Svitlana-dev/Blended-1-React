import { formatDistanceToNow } from 'date-fns';

export default function FormatDateToNow(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
