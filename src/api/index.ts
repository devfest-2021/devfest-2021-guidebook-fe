import axios from 'axios';
import { UserState } from 'src/store/user';
import { AdminState } from 'src/store/admin';
import {
  guidebookList,
  sessionList,
  adminUserList,
  guidebookListTest,
} from './mock';
import {
  AttendRequest,
  UserEditRequest,
  LikeRequest,
  SignInRequest,
  SignUpRequest,
} from './types';

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

  getGuestBooksWithPagination = (url: string) => {
    return axios.get<typeof guidebookListTest>(`${this.API}/${url}`);
  };

  checkUser = () => {
    return axios.get(`${this.API}/user`);
  };
  getCheckUser = (userid: number) => {
    return axios.get(`${this.API}/user?user_id=${userid}`);
  };

  getAdminUser = () => {
    return axios.get<typeof adminUserList>(`${this.API}/user-admin`);
  };

  signUp = (payload: SignUpRequest) => {
    return axios.post<typeof UserState>(`${this.API}/user/signup`, payload);
  };

  signIn = (payload: SignInRequest) => {
    return axios.post<typeof UserState>(`${this.API}/user/signin`, payload);
  };

  signInAdmin = (payload: SignInRequest) => {
    return axios.post<typeof AdminState.auth>(
      `${this.API}/user-admin/signin`,
      payload,
    );
  };

  attend = (payload: AttendRequest) => {
    return axios.post(`${this.API}/attendance/post`, payload);
  };

  editUser = (payload: UserEditRequest) => {
    return axios.put<typeof UserState>(`${this.API}/user`, payload);
  };

  like = (payload: LikeRequest) => {
    return axios.post(`${this.API}/user/like`, payload);
  };
}

export default new GuestBookApi();
