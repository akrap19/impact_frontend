import { IUser } from "./models/User";

export type UserContextState = {
    user?: IUser;
    setUser: (user: IUser) => void;
    getUser: () => void;
    clearUser: () => void;
  };
  