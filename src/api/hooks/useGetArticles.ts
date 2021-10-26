import useSWR from 'swr';
import Api from '../index';
import { sessionList } from '../mock';

async function getSessions(url: string) {
  const res = await Api.getSessions(url);
  return res.data;
}

export function useGetSessions({
  startAt,
  endAt,
}: {
  startAt?: number;
  endAt?: number;
}) {
  const query = `session-list?startAt=${startAt}&endAt=${endAt}`;
  const { data, error } = useSWR<typeof sessionList>([query], getSessions);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
