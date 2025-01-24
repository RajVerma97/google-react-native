export type User = {
  id: string;
  email: string;
  familyName?: string;
  givenName?: string;
  name?: string;
  photo?: string;
  idToken?: string;
  serverAuthCode?: string;
  scopes?: string[];
};
