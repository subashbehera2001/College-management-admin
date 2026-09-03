import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  phone?: string;
  department?: string;
}

const AUTH_STORAGE_KEY = '__COLLEGE_AUTH_USER__';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);

  private defaultUser: User = {
    id: 'USR001',
    name: 'Debasis Mohanty',
    email: 'admin@college.edu',
    role: 'Admin Head',
    avatar: 'assets/images/passport.png',
    phone: '+91 98765 43210',
    department: 'Administration',
  };

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;

  constructor() {
    const savedUser = localStorage.getItem(AUTH_STORAGE_KEY);
    let initialUser: User | null = null;
    if (savedUser) {
      try {
        initialUser = JSON.parse(savedUser);
      } catch {
        initialUser = null;
      }
    } else {
      initialUser = this.defaultUser;
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(this.defaultUser));
    }
    this.currentUserSubject = new BehaviorSubject<User | null>(initialUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  public login(email: string, password: string): boolean {
    if (
      (email === 'admin@college.edu' && password === 'admin123') ||
      (email.includes('@') && password.length >= 4)
    ) {
      const user: User = {
        ...this.defaultUser,
        email: email,
        name: email === 'admin@college.edu' ? 'Debasis Mohanty' : email.split('@')[0].toUpperCase(),
      };
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      this.currentUserSubject.next(user);
      return true;
    }
    return false;
  }

  public logout(): void {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/sign-in']);
  }

  public updateProfile(updated: Partial<User>): void {
    if (this.currentUserSubject.value) {
      const updatedUser = { ...this.currentUserSubject.value, ...updated };
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(updatedUser));
      this.currentUserSubject.next(updatedUser);
    }
  }
}
