import { BehaviorSubject, Observable } from 'rxjs';

import type { IAuthState } from '../../shared/types';
import { singleton } from 'tsyringe';

@singleton()
export class AuthService {
  private authState = new BehaviorSubject<IAuthState>({
    isAuthenticated: false,
    token: null,
  });
  private loadingState = new BehaviorSubject<boolean>(false);

  getAuthState(): Observable<IAuthState> {
    return this.authState.asObservable();
  }

  getLoadingState(): Observable<boolean> {
    return this.loadingState.asObservable();
  }

  login = async (credentials: string): Promise<void> => {
    // mock API
    this.loadingState.next(true);
    return new Promise(resolve => {
      setTimeout(() => {
        const token = credentials;
        this.authState.next({ isAuthenticated: true, token });
        this.loadingState.next(false);
        resolve();
      }, 1000);
    });
  };

  logout() {
    this.authState.next({ isAuthenticated: false, token: null });
  }
}
