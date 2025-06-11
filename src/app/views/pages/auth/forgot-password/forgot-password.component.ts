import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { RouterModule, ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiDataService } from '../../../../core/services/api-data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    NgStyle,
    ReactiveFormsModule,
    RouterLink,
    RouterModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  form: FormGroup;
  urldata = 'forgot-password';
  imgUrl = '../images/smartwamv2.jpg';
  constructor(private apidata: ApiDataService, private route: Router, private fb: FormBuilder) {
    this.form = fb.group({
      email: ['', Validators.required]
    })
  }
  onsubmit() {
    this.apidata.sendData(this.urldata, this.form.value).subscribe((respone: any) => {
      if (respone) {
        Swal.fire({
          title: 'Reset Password',
          html: `Click here to <a href="${respone.data.link}" target="_blank">reset your password</a>`,
          icon: 'info'
        });
      }
    });

  }
}
