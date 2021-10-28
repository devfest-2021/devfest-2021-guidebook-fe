import { atom } from 'recoil';

const ALERT = 'Alert';
export const ALERT_KEY = {
  SUCCESS_KEY: 'success',
  FAIL_KEY: 'fail',
} as const;

export const AlertState = {
  [ALERT_KEY.SUCCESS_KEY]: false,
  [ALERT_KEY.FAIL_KEY]: false,
};

export const alertState = atom<typeof AlertState>({
  key: ALERT,
  default: AlertState,
});
