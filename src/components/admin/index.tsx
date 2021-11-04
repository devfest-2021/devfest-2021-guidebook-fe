import React, { FC } from 'react';
import { LayoutContainer } from 'src/styles/layout';
import { Slider, Input, Lookup } from 'react-rainbow-components';
import { FilterRow, FormContainer, FormLabel, FullWidth } from './styled';
import inko from 'src/utils/inko';
import UserTable from './UserTable';
import { useRecoilState } from 'recoil';
import { adminState } from 'src/store/admin';
import { useAdminUserList } from 'src/api/hooks/useAdmin';
import useDebounce from 'src/utils/hooks/debouncer';

const SchoolList = [{ label: '숭실대' }, { label: '서울대' }];

const Admin: FC = () => {
  const { data: userList } = useAdminUserList();
  const [admin, setAdmin] = useRecoilState(adminState);
  const { attendanceCount, school } = admin;
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
  const debouncedSetSchool = useDebounce(setSchool, 200);

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
            onSearch={onSearchSchool}
            onChange={(value) =>
              debouncedSetSchool(value?.label?.toString() ?? '')
            }
            onFocus={(value) =>
              debouncedSetSchool(value?.label?.toString() ?? '')
            }
          />
        </FormContainer>
      </FilterRow>
      {userList && <UserTable />}
    </LayoutContainer>
  );
};

export default Admin;
