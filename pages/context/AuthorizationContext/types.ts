import { IAuthorization } from "./models/Authorization";

export type AuthorizationContextState = {
  addSignUp: (signUp: IAuthorization) => void;
  };
  