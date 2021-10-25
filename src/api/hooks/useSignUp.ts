import useSWR from 'swr';
import Api from '../index';

async function signUp(_: string) {
  const res = await Api.checkUser();
  return res.data;
}

export function useSignUp() {
  const { data, error } = useSWR([`/user/signup`], signUp);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
