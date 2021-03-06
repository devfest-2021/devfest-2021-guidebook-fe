import React, { FC, useEffect } from 'react';
import { LayoutContainer } from 'src/styles/layout';
import { Slider, Input, Lookup } from 'react-rainbow-components';
import { FilterRow, FormContainer, FormLabel, FullWidth } from './styled';
import inko from 'src/utils/inko';
import UserTable from './UserTable';
import { useRecoilState } from 'recoil';
import { adminState } from 'src/store/admin';
import { useAdminGroupList, useAdminUserList } from 'src/api/hooks/useAdmin';
import useDebounce from 'src/utils/hooks/debouncer';
import { modalState, MODAL_KEY } from 'src/store/modal';

const DefaultSchoolList = [{ label: '숭실대' }, { label: '서울대' }];

const Admin: FC = () => {
  const { data: userList } = useAdminUserList();
  const [modal, setModal] = useRecoilState(modalState);
  const [admin, setAdmin] = useRecoilState(adminState);
  const { attendanceCount, school, auth } = admin;
  const { data: SchoolList } = useAdminGroupList();
  const onSearchSchool = (value: string) => {
    const options = (SchoolList ?? DefaultSchoolList).filter((item) => {
      return inko
        .ko2en(item.label)
        .toLowerCase()
        .includes(inko.ko2en(value).toLowerCase());
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
    setAdmin({
      ...admin,
      school: { options: SchoolList ?? DefaultSchoolList, value },
    });
  };
  const debouncedSetSchool = useDebounce(setSchool, 200);

  useEffect(() => {
    console.log(auth);
    if (!auth?.email) {
      setModal({ ...modal, [MODAL_KEY.SIGN_IN_ADMIN]: true });
    }
  }, [auth.email]);

  if (!auth?.email) {
    return (
      <LayoutContainer>
        <h1>로그인이 필요합니다.</h1>
      </LayoutContainer>
    );
  }

  return (
    <LayoutContainer>
      <h1>출석필터</h1>
      <FilterRow>
        <FormContainer>
          <FormLabel>참석수</FormLabel>
          <Slider
            value={attendanceCount}
            min={0}
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
            disabled
          />
        </FormContainer>
        <FormContainer>
          <FormLabel>소속</FormLabel>
          <Lookup
            placeholder="구글대학교"
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
