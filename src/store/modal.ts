import { atom } from 'recoil';

const MODAL = 'Modal';
export const MODAL_KEY = {
  SIGN_IN: 'signIn',
  SIGN_IN_ADMIN: 'signInAdmin',
  SIGN_UP: 'signUp',
  USER_INFORMATION: 'userInformation',
  EDIT_USER: 'editUser',
} as const;

export const ModalState = {
  [MODAL_KEY.SIGN_IN]: false,
  [MODAL_KEY.SIGN_IN_ADMIN]: false,
  [MODAL_KEY.SIGN_UP]: false,
  [MODAL_KEY.USER_INFORMATION]: false,
  [MODAL_KEY.EDIT_USER]: false,
};

export const modalState = atom<typeof ModalState>({
  key: MODAL,
  default: ModalState,
});
