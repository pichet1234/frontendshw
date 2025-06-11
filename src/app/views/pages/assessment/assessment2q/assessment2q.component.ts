import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common'; //  ต้อง import มา
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RouterModule, Router, ActivatedRoute, RouterLink, Params, ParamMap } from '@angular/router';
import { ApiDataService } from '../../../../core/services/api-data.service';
const defaultAlert = {
  htmlCode:
    `<ngb-alert [dismissible]="false" [type]="'primary'">
  A simple primary alert—check it out!
</ngb-alert>

<ngb-alert [dismissible]="false" [type]="'secondary'">...</ngb-alert>
<ngb-alert [dismissible]="false" [type]="'success'">...</ngb-alert>
<ngb-alert [dismissible]="false" [type]="'danger'">...</ngb-alert>
<ngb-alert [dismissible]="false" [type]="'warning'">...</ngb-alert>
<ngb-alert [dismissible]="false" [type]="'info'">...</ngb-alert>
<ngb-alert [dismissible]="false" [type]="'light'">...</ngb-alert>
<ngb-alert [dismissible]="false" [type]="'dark'">...</ngb-alert>`,

}
@Component({
  selector: 'app-assessment2q',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbAlertModule,
    RouterModule,
  ],
  templateUrl: './assessment2q.component.html',
  styleUrl: './assessment2q.component.scss'
})

export class Assessment2qComponent {
  path: string = '2q'
  form: FormGroup;
  submitted = false;
  result: string = '';
  score: number = 0
  options = [
    { label: 'มี', value: 1 },
    { label: 'ไม่มี', value: 0 }
  ];
  constructor(private fb: FormBuilder, private router: Router, private apidataservice: ApiDataService, private actRoute: ActivatedRoute) {
    this.form = this.fb.group({
      pid: [''],
      userid: [''],
      q1: [null],
      q2: [null],
      score: [''],
      result: ['']
    });
    this.actRoute.queryParamMap.subscribe((param: ParamMap) => {
      const pidFromUrl = param.get('pid');
      if (pidFromUrl) {
        this.form.patchValue({ pid: pidFromUrl }); 
      }
    });
  }
  ngOnInit() {
  }
  onSubmit() {

    this.submitted = true;
    this.score = this.form.value.q1 + this.form.value.q2;
    this.form.value.userid = null
    this.form.value.score = this.score


    if (this.score > 0) {
      this.result = 'มีความเสี่ยงโรคซึมเศร้า ควรพบแพทย์เพื่อประเมินเพิ่มเติม';
      Swal.fire({
        title: 'ผลการประเมิน',
        text: this.result,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ไปทำแบบประเมิน 9Q',
        cancelButtonText: 'ปิด'
      }).then((result) => {
        if (result.isConfirmed) {
          // ลิงก์ไปยังหน้าประเมิน 9Q
          this.router.navigate(['/assessment/assessment9q'], { queryParams: { pid: this.form.get('pid')?.value } });
        }
      });
    } else {
      this.result = 'ไม่มีความเสี่ยงโรคซึมเศร้าในเบื้องต้น';
      Swal.fire({
        title: 'ผลการประเมิน',
        text: this.result,
        icon: 'success',
        confirmButtonText: 'ตกลง'
      });
    }
    this.form.value.result = this.result
    this.apidataservice.sendData(this.path, this.form.value).subscribe((response) => {
      if (response) {
        console.log(response.data);
      } else {
        console.log('error respone');
      }
    }, (err) => {
      console.log('error respone', err);
    })
  }
}
