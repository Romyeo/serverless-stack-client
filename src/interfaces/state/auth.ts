export default interface IAuthState {
  activated: boolean;
  activating: boolean;
  checkingAuth: boolean;
  signedIn: boolean;
  signedUp: boolean;
  signingIn: boolean;
  signingOut: boolean;
  signingUp: boolean;
  error: {
    activated: string;
    checkedAuth: string;
    signedIn: string;
    signedOut: string;
    signedUp: string;
  };
}
