import Signin from 'containers/Signin/Signin';
import Signout from 'containers/Signout/Signout';
import Signup from 'containers/Signup/Signup';
import NoteAdd from 'containers/Note/Add';

import IRoute from 'interfaces/general/route';

export const defaultRoutes: IRoute[] = [
  {
    path: '/signin',
    component: Signin,
    name: 'Sign in'
  },
  {
    path: '/signup',
    component: Signup,
    name: 'Sign up'
  }
];

export const authenticatedRoutes: IRoute[] = [
  {
    path: '/notes/add',
    component: NoteAdd,
    name: 'Add note',
    hidden: true
  },
  {
    path: '/signout',
    component: Signout,
    name: 'Sign out'
  }
];
