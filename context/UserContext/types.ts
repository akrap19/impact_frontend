import { IUser } from "./models/User";

export type UserContextState = {
    user?: IUser;
    setUserWallet: (user: IUser) => void;
    getUserWallet: () => void;
    clearUserWallet: () => void;
    userAccount?: IUser;
    getUserAccount: () => void;
  };
  