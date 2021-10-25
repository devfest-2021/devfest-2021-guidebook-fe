import axios from 'axios';
import { sessionList } from './mock';

export class GuestBookApi {
  private API: string;
  constructor() {
    this.API = 'http://ec2-3-135-39-120.us-east-2.compute.amazonaws.com:3000';
  }

  getSessions = () => {
    return axios.get<typeof sessionList>(`${this.API}/session-list`);
  };
}

export default new GuestBookApi();
