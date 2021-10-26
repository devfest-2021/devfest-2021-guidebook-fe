import axios from 'axios';
import { UserState } from 'src/store/user';
import { guidebookList, sessionList } from './mock';
import { AttendRequest, SignInRequest, SignUpRequest } from './types';

export class GuestBookApi {
  private API: string;
  constructor() {
    this.API = 'https://devksanbal.site';
  }

  getSessions = (url: string) => {
    return axios.get<typeof sessionList>(`${this.API}/${url}`);
  };

  getGuestBooks = () => {
    return axios.get<typeof guidebookList>(`${this.API}/attendance`);
  };

  checkUser = () => {
    return axios.get(`${this.API}/user`);
  };

  signUp = (payload: SignUpRequest) => {
    return axios.post<typeof UserState>(`${this.API}/user/signup`, payload);
  };

  signIn = (payload: SignInRequest) => {
    return axios.post<typeof UserState>(`${this.API}/user/signin`, payload);
  };

  attend = (payload: AttendRequest) => {
    return axios.post(`${this.API}/attendance/post`, payload);
  };
}

export default new GuestBookApi();
