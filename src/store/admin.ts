import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { LookupValue } from 'react-rainbow-components/components/types';
const { persistAtom } = recoilPersist();

const ADMIN = 'admin';

export const AdminState = {
  attendanceCount: 0,
  email: '',
  school: {
    options: [] as LookupValue[],
    value: '',
  },
};

export const adminState = atom<typeof AdminState>({
  key: ADMIN,
  default: AdminState,
  effects_UNSTABLE: [persistAtom],
});
