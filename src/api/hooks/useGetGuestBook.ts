import useSWR from 'swr';
import Api from '../index';
import { guidebookList } from '../mock';

async function getGuestBooks() {
  const res = await Api.getGuestBooks();
  return res.data;
}

export function useGetGuestBook() {
  const { data, error } = useSWR<typeof guidebookList>(
    [`/attendance`],
    getGuestBooks,
  );
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
