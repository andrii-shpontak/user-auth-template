import { BehaviorSubject } from 'rxjs';
import type { IAuthState } from '../shared/types';

const authSubject = new BehaviorSubject<IAuthState>({ isAuthenticated: false });
console.log(authSubject);
export const authService = {
  login: () => authSubject.next({ isAuthenticated: true }),
  logout: () => authSubject.next({ isAuthenticated: false }),
  getAuthState: () => authSubject.asObservable(),
};
