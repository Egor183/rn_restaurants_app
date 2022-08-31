export type LoginParametersType = {
  email: string;
  password: string;
};

export type LoginResponseType = undefined | {message: string; userId: number};
