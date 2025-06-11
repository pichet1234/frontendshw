import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgStyle,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  imgUrl='../images/smartwamv2.jpg';
  returnUrl: any;
  form: FormGroup;
  constructor(private fb:FormBuilder, private auth: AuthService,private router: Router, private route: ActivatedRoute) {
    this.form = fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

    login() {
    this.auth.login({ username: this.form.value.username, password: this.form.value.password }).subscribe({
      next: (res: any) => {
        this.auth.saveToken(res.token);
        localStorage.setItem('token', res.token);

      // เก็บข้อมูลผู้ใช้
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/dashboard']);
      },
      error: err => alert(err.error.message),
    });
  }

  ngOnInit(): void {
    // Get the return URL from the route parameters, or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLoggedin(e: Event) {
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    if (localStorage.getItem('isLoggedin') === 'true') {
      this.router.navigate([this.returnUrl]);
    }
  }

}
