export interface REGISTER_STATE {
  username: string;
  email: string;
  password: string;
  bio?: string;
  image?: string;
  token?: string;
}

export const REGISTER_INITIAL_STATE: REGISTER_STATE = {
  username: '',
  email: '',
  password: '',
  bio: '',
  image: '',
  token: '',
};
