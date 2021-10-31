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
export interface UserEditRequest {
  email: string | null;
  group: string | null;
  nickname: string | null;
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

export interface LikeRequest {
  user_id: number;
}
