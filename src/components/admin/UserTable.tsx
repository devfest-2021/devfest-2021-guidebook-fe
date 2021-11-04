import React, { FC, useCallback, useState } from 'react';
import { Table, Column } from 'react-rainbow-components';
import { useAdminUserList } from 'src/api/hooks/useAdmin';

export type AdminUser = {
  user_id: number;
  email: string;
  group: string;
  nickname: string;
  count: number;
};

const Avatar: FC<{ value: string }> = ({ value }) => (
  <img src={value} alt="avatar" style={{ width: '45px' }} />
);

const UserTable: FC = () => {
  const { data: userList, loading } = useAdminUserList();
  const [users, setUsers] = useState<AdminUser[]>(userList ?? []);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [sortBy, setSortBy] = useState<keyof AdminUser>('count');

  const handleOnSort = useCallback(
    (
      event: React.MouseEvent<HTMLElement, MouseEvent>,
      field: string,
      nextSortDirection: string,
    ) => {
      if (!userList) return;
      const data = [...userList];
      const nextSortDirectionNumber = nextSortDirection === 'asc' ? 1 : -1;

      data.sort((a, b) => {
        switch (field as keyof AdminUser) {
          case 'count':
            return (a.count - b.count) * nextSortDirectionNumber;
          case 'nickname':
            return (
              a.nickname.localeCompare(b.nickname) * nextSortDirectionNumber
            );
          case 'group':
            return a.group.localeCompare(b.group) * nextSortDirectionNumber;
          case 'email':
            return a.email.localeCompare(b.email) * nextSortDirectionNumber;
          default:
            return nextSortDirectionNumber;
        }
      });
      setSortBy(field as keyof AdminUser);
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      setUsers(data);
    },
    [userList, sortDirection],
  );

  return (
    <Table
      keyField="user_id"
      data={users}
      onSort={handleOnSort}
      sortDirection={sortDirection}
      sortedBy={sortBy}
      style={{ height: 'auto' }}
      isLoading={loading}
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
