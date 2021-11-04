import React, { FC, useCallback, useEffect, useState } from 'react';
import { Table, Column } from 'react-rainbow-components';
import { useRecoilValue } from 'recoil';
import { useAdminUserList } from 'src/api/hooks/useAdmin';
import { adminState } from 'src/store/admin';

export type AdminUser = {
  user_id: number;
  email: string;
  group: string;
  nickname: string;
  count: number;
};

const UserTable: FC = () => {
  const { data: userList } = useAdminUserList();
  const { attendanceCount, school } = useRecoilValue(adminState);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [sortBy, setSortBy] = useState<keyof AdminUser>('count');
  const [users, setUsers] = useState<AdminUser[]>(userList ?? []);
  const reduceSorter = (
    key: keyof AdminUser,
    sortDirection: 'asc' | 'desc',
  ) => {
    return (a: AdminUser, b: AdminUser) => {
      const nextSortDirectionNumber = sortDirection === 'asc' ? 1 : -1;
      switch (key) {
        case 'count':
          return (a.count - b.count) * nextSortDirectionNumber;
        case 'nickname':
          return a.nickname.localeCompare(b.nickname) * nextSortDirectionNumber;
        case 'group':
          return a.group.localeCompare(b.group) * nextSortDirectionNumber;
        case 'email':
          return a.email.localeCompare(b.email) * nextSortDirectionNumber;
        default:
          return nextSortDirectionNumber;
      }
    };
  };

  useEffect(() => {
    if (!userList) return;
    const sorter = reduceSorter(sortBy, sortDirection);
    const filteredUsers = userList
      .filter((user) => {
        if (school.value !== '') {
          if (user.group.includes(school.value)) {
            return true;
          }
          return false;
        }
        return true;
      })
      .filter((user) => {
        if (attendanceCount <= user.count) {
          return true;
        }
        return false;
      })
      .sort(sorter);
    setUsers(filteredUsers);
  }, [userList, school.value, attendanceCount, sortBy, sortDirection]);

  const handleOnSort = useCallback(
    (
      event: React.MouseEvent<HTMLElement, MouseEvent>,
      field: string,
      nextSortDirection: string,
    ) => {
      if (!users) return;
      const data = [...users];

      const sorter = reduceSorter(field as keyof AdminUser, sortDirection);
      data.sort(sorter);
      setSortBy(field as keyof AdminUser);
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      setUsers(data);
    },
    [users, sortDirection],
  );

  return (
    <Table
      keyField="this_makes_bug"
      data={users}
      onSort={handleOnSort}
      sortDirection={sortDirection}
      sortedBy={sortBy}
      style={{ height: 'auto' }}
      isLoading={users.length === 0}
    >
      <Column header="참석수" field="count" width={120} sortable />
      <Column header="user_id" field="user_id" />
      <Column header="닉네임" field="nickname" sortable />
      <Column header="그룹" field="group" sortable />
      <Column header="이메일" field="email" />
    </Table>
  );
};

export default UserTable;
