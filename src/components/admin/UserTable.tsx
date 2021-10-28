import React, { FC } from 'react';
import { Table, Column } from 'react-rainbow-components';

export type UserList = {
  email: string;
  group: string;
  nickname: string;
  github: string;
  instagram: string;
  avatarURL: string;
  promise: string;
  attend_cnt: string;
}[];

type UserTableProps = {
  userList: UserList;
};

const Avatar: FC<{ value: string }> = ({ value }) => (
  <img src={value} alt="avatar" style={{ width: '45px' }} />
);

const UserTable: FC<UserTableProps> = ({ userList }) => {
  return (
    <Table keyField="email" data={userList}>
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
      <Column header="이메일" field="email" />
      <Column header="깃허브" field="github" />
      <Column header="인스타그램" field="instagram" />
    </Table>
  );
};

export default UserTable;
