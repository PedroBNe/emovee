import { format } from 'date-fns';

export default function formatDate(date: string | Date) {
  const dateFor = format(new Date(date), 'dd/MM/yyyy');

  return dateFor;
}
