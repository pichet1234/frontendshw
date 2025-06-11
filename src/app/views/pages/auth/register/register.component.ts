import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgStyle,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form: FormGroup;
  img ='../images/smartwam.jpg';
  constructor(private fb: FormBuilder ,private auth: AuthService,private router: Router) {
    this.form = this.fb.group({
         username:['',Validators.required],
         password:['',Validators.required],
         fullname:['',Validators.required],
         position:[''],
         email:['',Validators.required],
         tel:['']
    })
  }
  register(){
    this.auth.register(this.form.value).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => alert(err.error.message),
    })
  }

  onRegister(e: Event) {
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    if (localStorage.getItem('isLoggedin') === 'true') {
      this.router.navigate(['/']);
    }
  }

}
