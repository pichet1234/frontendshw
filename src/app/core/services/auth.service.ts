import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'https://backend-project-m79o.onrender.com/';
  constructor(private http: HttpClient) { }
  
    register(data: any) {
    return this.http.post(`${this.api}/registeruser`, data);
  }

  login(data: any) {
    return this.http.post(`${this.api}/login`, data);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
