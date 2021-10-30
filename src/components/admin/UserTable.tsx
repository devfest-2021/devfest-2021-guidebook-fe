import React, { FC, useCallback, useState } from 'react';
import { Table, Column } from 'react-rainbow-components';

export type User = {
  email: string;
  group: string;
  nickname: string;
  github: string;
  instagram: string;
  avatarURL: string;
  promise: string;
  attend_cnt: string;
};

type UserTableProps = {
  userList: User[];
};

const Avatar: FC<{ value: string }> = ({ value }) => (
  <img src={value} alt="avatar" style={{ width: '45px' }} />
);

const UserTable: FC<UserTableProps> = ({ userList }) => {
  const [users, setUsers] = useState(userList);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [sortBy, setSortBy] = useState<keyof User>('attend_cnt');

  const handleOnSort = useCallback(
    (
      event: React.MouseEvent<HTMLElement, MouseEvent>,
      field: string,
      nextSortDirection: string,
    ) => {
      const data = [...userList];
      const nextSortDirectionNumber = nextSortDirection === 'asc' ? 1 : -1;

      data.sort((a, b) => {
        switch (field) {
          case 'attend_cnt':
            return (
              (parseInt(a.attend_cnt, 10) - parseInt(b.attend_cnt, 10)) *
              nextSortDirectionNumber
            );
          case 'nickname':
            return (
              a.nickname.localeCompare(b.nickname) * nextSortDirectionNumber
            );
          case 'group':
            return a.group.localeCompare(b.group) * nextSortDirectionNumber;
          case 'email':
            return a.email.localeCompare(b.email) * nextSortDirectionNumber;

          case 'github':
            return a.github.localeCompare(b.github) * nextSortDirectionNumber;
          default:
            return nextSortDirectionNumber;
        }
      });
      setSortBy(field as keyof User);
      setUsers(data);
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    },
    [userList, sortDirection],
  );

  return (
    <Table
      keyField="email"
      data={users}
      onSort={handleOnSort}
      sortDirection={sortDirection}
      sortedBy={sortBy}
      style={{ height: 'auto' }}
    >
      <Column header="참석수" field="attend_cnt" width={120} sortable />
      <Column
        header="아바타"
        field="avatarURL"
        component={Avatar as FC}
        width={80}
        cellAlignment="left"
      />
      <Column header="닉네임" field="nickname" sortable />
      <Column header="그룹" field="group" sortable />
      <Column header="이메일" field="email" sortable />
      <Column header="깃허브" field="github" sortable />
      <Column header="인스타그램" field="instagram" />
    </Table>
  );
};

export default UserTable;
