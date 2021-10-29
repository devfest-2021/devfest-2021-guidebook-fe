import React, { FC, useEffect } from 'react';
import { LayoutContainer } from 'src/styles/layout';
import { Slider, Input, Lookup } from 'react-rainbow-components';
import { FilterRow, FormContainer, FormLabel, FullWidth } from './styled';
import inko from 'src/utils/inko';
import UserTable, { User } from './UserTable';
import { useRecoilState } from 'recoil';
import { adminState } from 'src/store/admin';

const SchoolList = [{ label: '숭실대' }, { label: '서울대' }];
const userList: User[] = [
  {
    email: 'gomjellie@gmail.com',
    group: '숭실대',
    nickname: '곰젤리',
    github: 'gomjellie',
    instagram: 'gomjellie',
    avatarURL: 'https://avatars.githubusercontent.com/u/13645032?v=4',
    promise: 'string',
    attend_cnt: '2',
  },
  {
    email: 'HyeokE@gmail.com',
    group: '대진대학교',
    nickname: '준혁',
    github: 'HyeokE',
    instagram: 'HyeokE',
    avatarURL: 'https://avatars.githubusercontent.com/u/61281239?v=4',
    promise: 'string',
    attend_cnt: '5',
  },
];

const Admin: FC = () => {
  const [admin, setAdmin] = useRecoilState(adminState);
  const { attendanceCount, email, school } = admin;
  const onSearchSchool = (value: string) => {
    const options = SchoolList.filter((item) => {
      return inko.ko2en(item.label).includes(inko.ko2en(value));
    });
    setAdmin({ ...admin, school: { options, value } });
  };
  const onAttendanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin({ ...admin, attendanceCount: Number(event.target.value) });
  };
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin({ ...admin, email: event.target.value });
  };
  const setSchool = (value: string) => {
    setAdmin({ ...admin, school: { options: SchoolList, value } });
  };

  useEffect(() => {
    console.log(email, school.value);
  });

  return (
    <LayoutContainer>
      <h1>출석필터</h1>
      <FilterRow>
        <FormContainer>
          <FormLabel>출석일</FormLabel>
          <Slider
            value={attendanceCount}
            min={1}
            max={14}
            style={FullWidth}
            onChange={onAttendanceChange}
          />
        </FormContainer>
        <FormContainer>
          <FormLabel>이메일</FormLabel>
          <Input
            placeholder="example@gmail.com"
            style={FullWidth}
            onChange={onEmailChange}
          />
        </FormContainer>
        <FormContainer>
          <FormLabel>소속</FormLabel>
          <Lookup
            placeholder="숭실대"
            style={FullWidth}
            options={school.options}
            value={school.options.find((item) => item.label === school.value)}
            onChange={(value) =>
              // setSchool({ ...school, value: value?.label?.toString() ?? '' })
              setSchool(value?.label?.toString() ?? '')
            }
            onSearch={onSearchSchool}
            onClick={() => onSearchSchool('')}
          />
        </FormContainer>
      </FilterRow>
      <UserTable userList={userList} />
    </LayoutContainer>
  );
};

export default Admin;
