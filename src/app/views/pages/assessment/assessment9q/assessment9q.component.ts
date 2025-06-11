import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; //  ต้อง import มา
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, ActivatedRoute, Params, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiDataService } from '../../../../core/services/api-data.service';

@Component({
  selector: 'app-assessment9q',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgbAlertModule, RouterModule],
  templateUrl: './assessment9q.component.html',
  styleUrl: './assessment9q.component.scss'
})
export class Assessment9qComponent {
  form!: FormGroup;
  submitted = false;
  score: number = 0;
  result = '';
  path: string = '9q'
  options = [
    { label: 'ไม่มีเลย', value: 0 },
    { label: 'เล็กน้อย', value: 1 },
    { label: 'ค่อนข้างมาก', value: 2 },
    { label: 'มากที่สุด', value: 3 }
  ];
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private apiservice: ApiDataService) {
  }
  ngOnInit(): void { 
        this.form = this.fb.group({
      pid: [''],
      userid: [null],
      q1: [null, Validators.required],
      q2: [null, Validators.required],
      q3: [null, Validators.required],
      q4: [null, Validators.required],
      q5: [null, Validators.required],
      q6: [null, Validators.required],
      q7: [null, Validators.required],
      q8: [null, Validators.required],
      q9: [null, Validators.required],
      score: [''],
      risklevel: ['']
    });
    this.route.queryParamMap.subscribe((param: ParamMap) => {
      const pidFromUrl = param.get('pid');
      if (pidFromUrl) {
        this.form.patchValue({ pid: pidFromUrl });
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      Swal.fire('กรุณาตอบทุกคำถาม', '', 'error');
      return;
    }
    const answerKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9'];
    this.score = answerKeys.reduce((sum, key) => sum + Number(this.form.value[key] || 0), 0);

    if (this.score >= 19) {
      this.result = 'มีอาการซึมเศร้ารุนแรง ควรพบจิตแพทย์';
    } else if (this.score >= 13) {
      this.result = 'มีอาการซึมเศร้าปานกลาง ควรพบแพทย์';
    } else if (this.score >= 7) {
      this.result = 'มีอาการซึมเศร้าเล็กน้อย';
    } else {
      this.result = 'ไม่มีอาการซึมเศร้า';
    }

    Swal.fire({
      title: '<span style="font-size: 1.8rem; font-weight: bold;">ผลการประเมิน 9Q</span>',
      html: `<div style="font-size: 1.2rem;">
           คะแนนรวมของคุณ: <strong>${this.score}</strong><br>${this.result}
         </div>`,
      icon: 'info',
      confirmButtonText: 'ตกลง'
    });

    this.form.patchValue({
      score: this.score,
      risklevel: this.result
    });
        // ส่งข้อมูล
    this.apiservice.sendData(this.path, this.form.value).subscribe(
      (response) => {
        if (response) {
          console.log(response.data);
        } else {
          console.log('error response');
        }
      },
      (err) => {
        console.log('error response', err);
      }
    );
  }


  getQuestionText(q: number): string {
    const questions: Record<number, string> = {
      1: 'เบื่อ ทำอะไร ๆ ก็ไม่เพลิดเพลิน',
      2: 'รู้สึกไม่สบายใจ ซึมเศร้า หรือสิ้นหวัง',
      3: 'หลับยาก หรือหลับๆ ตื่นๆ หรือหลับมากไป',
      4: 'รู้สึกเหนื่อยง่าย หรือไม่ค่อยมีแรง',
      5: 'เบื่ออาหาร หรือกินมากเกินไป',
      6: 'รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลว หรือทำให้ตนเองหรือครอบครัวผิดหวัง',
      7: 'มีปัญหาในการมีสมาธิ เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความตั้งใจ',
      8: 'พูดช้า ทำอะไรช้าลงจนคนอื่นสังเกตได้ หรือกระสับกระส่าย ไม่สามารถอยู่นิ่งได้เหมือนปกติ',
      9: 'คิดทำร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดี',
    };
    return questions[q] || '';
  }
}
