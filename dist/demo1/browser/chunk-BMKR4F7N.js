import{a as P}from"./chunk-ZOI5QTSN.js";import"./chunk-3RAS5AEW.js";import{U as W,V as N}from"./chunk-5ZTN53S4.js";import"./chunk-VZNXAE5Z.js";import{B as V,g as x,l as E}from"./chunk-FHPH46MZ.js";import"./chunk-LVHII46P.js";import{v}from"./chunk-RD6NJ7NY.js";import{Ca as m,Da as p,Gb as l,Hc as _,Ic as M,Sb as n,Tb as t,Ub as d,Yb as b,dc as u,kb as r,pc as g,qc as o,ra as S,sc as k,uc as f,vc as C,wc as h,yc as y}from"./chunk-3TFDHLSU.js";import"./chunk-GAL4ENT6.js";var F={htmlCode:`<ngb-timepicker [(ngModel)]="time"></ngb-timepicker>
      
<p class="text-secondary mt-2">Selected time: {{time | json}}</p>`,tsCode:`import { Component } from '@angular/core';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-timepicker',
  standalone: true,
  imports: [NgbTimepickerModule, FormsModule, JsonPipe]
  templateUrl: './timepicker.component.html'
})
export class TimepickerComponent {
  time = {hour: 13, minute: 30};
}`},J={htmlCode:`<ngb-timepicker [(ngModel)]="time" [meridian]="true"></ngb-timepicker>
      
<p class="text-secondary mt-2">Selected time: {{time | json}}</p>`,tsCode:`import { Component } from '@angular/core';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-timepicker',
  standalone: true,
  imports: [NgbTimepickerModule, FormsModule, JsonPipe]
  templateUrl: './timepicker.component.html'
})
export class TimepickerComponent {
  time = {hour: 13, minute: 30};
}`},j={htmlCode:`<ngb-timepicker [(ngModel)]="time" [seconds]="true" [meridian]="true"></ngb-timepicker>
      
<p class="text-secondary mt-2">Selected time: {{time | json}}</p>`,tsCode:`import { Component } from '@angular/core';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-timepicker',
  standalone: true,
  imports: [NgbTimepickerModule, FormsModule, JsonPipe]
  templateUrl: './timepicker.component.html'
})
export class TimepickerComponent {
  time = {hour: 13, minute: 30, second: 20};
}`},B=class w{time={hour:13,minute:30};timeWithSeconds={hour:13,minute:30,second:20};defaultTimepickerCode;meridianCode;secondsCode;constructor(){}ngOnInit(){this.defaultTimepickerCode=F,this.meridianCode=J,this.secondsCode=j}scrollTo(T){T.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(c){return new(c||w)};static \u0275cmp=S({type:w,selectors:[["app-timepicker"]],standalone:!0,features:[y],decls:50,vars:18,consts:[["default",""],["meridian",""],["seconds",""],[1,"row"],[1,"col-xl-10","main-content","ps-xl-4","pe-xl-5"],[1,"page-title"],[1,"lead"],["href","https://ng-bootstrap.github.io/#/components/timepicker/examples","target","_blank"],[1,"example"],[3,"ngModelChange","ngModel"],[1,"text-secondary","mt-2"],[3,"codeContent"],[3,"ngModelChange","ngModel","meridian"],[3,"ngModelChange","ngModel","seconds","meridian"],[1,"col-xl-2","content-nav-wrapper"],[1,"nav","content-nav","d-flex","flex-column"],[1,"nav-item"],[1,"nav-link",3,"click"]],template:function(c,e){if(c&1){let a=b();n(0,"div",3)(1,"div",4)(2,"h1",5),o(3,"Timepicker"),t(),n(4,"p",6),o(5,"A directive that helps with wth picking hours, minutes and seconds.. Read the "),n(6,"a",7),o(7,"Official Ng-Bootstrap Documentation"),t(),o(8," for a full list of instructions and other options."),t(),d(9,"hr"),n(10,"h4",null,0),o(12,"Basic Example"),t(),n(13,"div",8)(14,"ngb-timepicker",9),h("ngModelChange",function(i){return m(a),C(e.time,i)||(e.time=i),p(i)}),t(),n(15,"p",10),o(16),_(17,"json"),t()(),d(18,"app-code-preview",11)(19,"hr"),n(20,"h4",null,1),o(22,"Meridian"),t(),n(23,"div",8)(24,"ngb-timepicker",12),h("ngModelChange",function(i){return m(a),C(e.time,i)||(e.time=i),p(i)}),t(),n(25,"p",10),o(26),_(27,"json"),t()(),d(28,"app-code-preview",11)(29,"hr"),n(30,"h4",null,2),o(32,"Seconds"),t(),n(33,"div",8)(34,"ngb-timepicker",13),h("ngModelChange",function(i){return m(a),C(e.timeWithSeconds,i)||(e.timeWithSeconds=i),p(i)}),t(),n(35,"p",10),o(36),_(37,"json"),t()(),d(38,"app-code-preview",11),t(),n(39,"div",14)(40,"ul",15)(41,"li",16)(42,"a",17),u("click",function(){m(a);let i=g(11);return p(e.scrollTo(i))}),o(43,"Basic example"),t()(),n(44,"li",16)(45,"a",17),u("click",function(){m(a);let i=g(21);return p(e.scrollTo(i))}),o(46,"Meridian"),t()(),n(47,"li",16)(48,"a",17),u("click",function(){m(a);let i=g(31);return p(e.scrollTo(i))}),o(49,"Seconds"),t()()()()()}c&2&&(r(14),f("ngModel",e.time),r(2),k("Selected time: ",M(17,12,e.time),""),r(2),l("codeContent",e.defaultTimepickerCode),r(6),f("ngModel",e.time),l("meridian",!0),r(2),k("Selected time: ",M(27,14,e.time),""),r(2),l("codeContent",e.meridianCode),r(6),f("ngModel",e.timeWithSeconds),l("seconds",!0)("meridian",!0),r(2),k("Selected time: ",M(37,16,e.timeWithSeconds),""),r(2),l("codeContent",e.secondsCode))},dependencies:[P,N,W,V,x,E,v],encapsulation:2})};export{B as TimepickerComponent};
