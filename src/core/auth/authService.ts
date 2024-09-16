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

  login = async (credentials: string): Promise<void> => {
    // mock API
    return new Promise(resolve => {
      setTimeout(() => {
        const token = credentials;
        this.authState.next({ isAuthenticated: true, token });
        resolve();
      }, 1000);
    });
  };

  logout() {
    this.authState.next({ isAuthenticated: false, token: null });
  }
}
