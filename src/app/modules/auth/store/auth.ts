export interface USER_STATE {
  username: string;
  email: string;
  password: string;
  bio?: string;
  image?: string;
  token?: string;
}

export const USER_INITIAL_STATE: USER_STATE = {
  username: '',
  email: '',
  password: '',
  bio: '',
  image: '',
  token: '',
};
