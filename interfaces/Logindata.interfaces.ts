export interface ValidLogin {
  username: string;
  password: string;
}

export interface InvalidLogin {
  username: string;
  password: string;
  expectedMessage: string;
}

export interface LoginData {
  url : string;
validLogin: ValidLogin;
invalidLogin: InvalidLogin;

}