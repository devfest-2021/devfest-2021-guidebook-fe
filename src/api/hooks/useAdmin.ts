import useSWR from 'swr';
import Api from '../index';

async function getAdminUserList(_: string) {
  const res = await Api.getAdminUser();
  return res.data;
}

export function useAdminUserList() {
  const { data, error } = useSWR([`/admin-user`], getAdminUserList);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
