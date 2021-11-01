import useSWR from 'swr';
import Api from '../index';

async function checkUser(_: string) {
  const res = await Api.checkUser();
  return res.data;
}

export function useCheckUser() {
  const { data, error } = useSWR([`/user`], checkUser);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
