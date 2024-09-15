import { BehaviorSubject, Observable } from 'rxjs';

import type { IAuthState } from '../../shared/types';
import { singleton } from 'tsyringe';

@singleton()
export class AuthService {
  private authState = new BehaviorSubject<IAuthState>({
    isAuthenticated: false,
    token: null,
  });

  getAuthState(): Observable<IAuthState> {
    return this.authState.asObservable();
  }

  login(token: string) {
    console.log('Logging in with token:', token);
    this.authState.next({ isAuthenticated: true, token });
  }

  logout() {
    console.log('Logging out');
    this.authState.next({ isAuthenticated: false, token: null });
  }
}
