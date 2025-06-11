import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { RouterModule,ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiDataService } from '../../../../core/services/api-data.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    NgStyle,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  
  form:FormGroup;
  imgUrl='../images/smartwamv2.jpg';
  constructor(private fb:FormBuilder,private apiservice:ApiDataService,private route:ActivatedRoute,private router: Router){
    this.form = fb.group({
      password:['']
    })
  }
  onsubmit(){

    const token = this.route.snapshot.paramMap.get('token');
    const password = this.form.value.password;
    const url = `reset-password/${token}`;
  if (token && password) {
    this.apiservice.sendData(url, { password }).subscribe({
      next: (respone) => {
        console.log(respone)
        alert('Password reset successful');
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        alert(err.error.message || 'Reset failed');
      }
    });
    }
  }
}
