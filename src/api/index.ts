import axios from 'axios';
import { SessionType } from './types';

export class GuestBookApi {
  private API: string;
  constructor() {
    this.API = 'https://....';
  }

  getSessions = () => {
    return axios.get<SessionType>(``);
  };
}

export default new GuestBookApi();
