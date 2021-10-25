export interface SignInRequest {
  email: string;
}

export interface SignUpRequest {
  email: string;
  group: string;
  nickname: string;
  github: string | null;
  instagram: string | null;
  promise: string | null;
}

export interface UserResponse {
  email: string;
  group: string;
  nickname: string;
  github: string | null;
  instagram: string | null;
  promise: string | null;
}

export interface AttendRequest {
  userId: number;
  sessionId: number;
}
