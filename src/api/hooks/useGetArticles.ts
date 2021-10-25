import useSWR from 'swr';
import Api from '../index';
import { sessionList } from '../mock';

async function getSessions(_: string) {
  const res = await Api.getSessions();
  return res.data;
}

export function useGetSessions() {
  const { data, error } = useSWR<typeof sessionList>(
    [`/session-list`],
    getSessions,
  );
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
