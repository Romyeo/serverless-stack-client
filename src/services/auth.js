import { Auth } from 'aws-amplify';

export const signIn = async (email, password) => {
  return await Auth.signIn(email, password);
};

export const check = async () => {
  return await Auth.currentSession();
};

export const signOut = async () => {
  return await Auth.signOut();
};
