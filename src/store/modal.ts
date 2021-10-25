import { atom } from 'recoil';

const MODAL = 'modal';
export const MODAL_KEY = {
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',
} as const;

export const ModalState = {
  [MODAL_KEY.SIGN_IN]: false,
  [MODAL_KEY.SIGN_UP]: false,
};

export const modalState = atom<typeof ModalState>({
  key: MODAL,
  default: ModalState,
});
