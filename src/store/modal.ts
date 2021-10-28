import { atom } from 'recoil';

const MODAL = 'Modal';
export const MODAL_KEY = {
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',
  USER_INFORMATION: 'userInformation',
} as const;

export const ModalState = {
  [MODAL_KEY.SIGN_IN]: false,
  [MODAL_KEY.SIGN_UP]: false,
  [MODAL_KEY.USER_INFORMATION]: false,
};

export const modalState = atom<typeof ModalState>({
  key: MODAL,
  default: ModalState,
});
