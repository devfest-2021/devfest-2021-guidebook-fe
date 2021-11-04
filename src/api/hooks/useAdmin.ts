import useSWR from 'swr';
import Api from '../index';

async function getAdminUserList(_: string) {
  const res = await Api.getAdminUser();
  return res.data;
}

async function getAdminGroupList(_: string) {
  const res = await Api.getAdminUser();
  const kv = res.data.reduce((acc, cur) => {
    acc[cur.group] = 1;
    return acc;
  }, {} as { [key: string]: number });

  return Object.keys(kv).reduce((acc, cur) => {
    if (cur === '') return acc;
    acc.push({ label: cur });
    return acc;
  }, [] as { label: string }[]);
}

export function useAdminUserList() {
  const { data, error } = useSWR([`/admin-user`], getAdminUserList);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}

export function useAdminGroupList() {
  const { data, error } = useSWR([`/admin-group`], getAdminGroupList);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
