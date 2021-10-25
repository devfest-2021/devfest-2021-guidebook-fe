import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

const USER = 'user';
export const MODAL_KEY = {
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',
} as const;

export const UserState = {
  user_id: 0,
  email: '',
  group: '',
  nickname: '',
  github: '',
  instagram: '',
  avaterURL: '',
  promise: '',
};

export const userState = atom<typeof UserState>({
  key: USER,
  default: UserState,
  effects_UNSTABLE: [persistAtom],
});
