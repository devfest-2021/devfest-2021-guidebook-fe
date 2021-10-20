import useSWR from 'swr';
import Api from '../index';
import { SessionType } from '../types';

async function getSessions(_: string) {
  const res = await Api.getSessions();
  return res.data;
}

export function useGetSessions() {
  const { data, error } = useSWR<SessionType>([`articles`], getSessions);
  return {
    data: data,
    error,
    loading: !error && !data,
  };
}
