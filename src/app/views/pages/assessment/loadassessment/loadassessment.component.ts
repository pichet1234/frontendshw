import { Component } from '@angular/core';
import { RouterModule,ActivatedRoute, Router, RouterLink, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-loadassessment',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './loadassessment.component.html',
  styleUrl: './loadassessment.component.scss'
})
export class LoadassessmentComponent {
  pid:string | null = null
  constructor(private route: ActivatedRoute,){

  }
  ngOnInit(){
this.route.queryParamMap.subscribe((param: ParamMap) => {
      this.pid = param.get('pid');
      console.log(this.pid);
    });
  }
}
