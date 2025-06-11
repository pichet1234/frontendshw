import{a as L}from"./chunk-ZOI5QTSN.js";import"./chunk-3RAS5AEW.js";import{o as V,p as W,q as O,r as U,s as $,t as A}from"./chunk-5ZTN53S4.js";import"./chunk-VZNXAE5Z.js";import{B as q,d as F,g as j,h as R,j as B,l as H,m as J}from"./chunk-FHPH46MZ.js";import"./chunk-LVHII46P.js";import{v as P}from"./chunk-RD6NJ7NY.js";import{Bb as C,Ca as s,Da as p,Gb as g,Hc as b,Ib as S,Ic as v,Kc as x,Sb as a,Tb as i,Ub as D,Yb as k,dc as m,ec as _,kb as c,na as y,pc as u,qc as r,ra as M,sc as f,tc as E,uc as N,vc as T,wc as w,yc as I}from"./chunk-3TFDHLSU.js";import"./chunk-GAL4ENT6.js";function z(h,o){if(h&1){let l=k();a(0,"span",40),m("mouseenter",function(){let t=s(l).$implicit,d=_();return p(d.hoveredDate=t)})("mouseleave",function(){s(l);let t=_();return p(t.hoveredDate=null)}),r(1),i()}if(h&2){let l=o.$implicit,e=o.focused,t=_();S("focused",e)("range",t.isRange(l))("faded",t.isHovered(l)||t.isInside(l)),c(),f(" ",l.day," ")}}function K(h,o){if(h&1){let l=k();a(0,"span",40),m("mouseenter",function(){let t=s(l).$implicit,d=_();return p(d.hoveredDate=t)})("mouseleave",function(){s(l);let t=_();return p(t.hoveredDate=null)}),r(1),i()}if(h&2){let l=o.$implicit,e=o.focused,t=_();S("focused",e)("range",t.isRange(l))("faded",t.isHovered(l)||t.isInside(l)),c(),f(" ",l.day," ")}}var Q={htmlCode:`<ngb-datepicker #dp [(ngModel)]="selectedDate" (navigate)="date = $event.next"></ngb-datepicker>
<hr>
<button class="btn btn-sm btn-primary me-1" (click)="selectToday()">Select Today</button>
<button class="btn btn-sm btn-primary me-1" (click)="dp.navigateTo()">To current month</button>
<button class="btn btn-sm btn-primary me-1" (click)="dp.navigateTo({year: 2013, month: 2})">To Feb 2013</button>
<hr>
<p>Month: {{ date.month }}.{{ date.year }}</p>
<p>Selected: {{ selectedDate | json }}</p>`,tsCode:`import { Component, inject } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule, JsonPipe],
  templateUrl: './datepicker.component.html'
})
export class DatepickerComponent {
  calendar = inject(NgbCalendar);

  selectedDate: NgbDateStruct;
  date: {year: number, month: number};

  constructor() {}

  selectToday() {
    this.selectedDate = this.calendar.getToday();
  }
}`},X={htmlCode:`<form class="d-flex">
  <div class="input-group">
    <input class="form-control" placeholder="yyyy-mm-dd"
        name="dp" [(ngModel)]="selectedDate" ngbDatepicker #d="ngbDatepicker">
    <button class="input-group-text" type="button" (click)="d.toggle()">
      <i class="feather icon-calendar icon-md text-secondary"></i>
    </button>
  </div>
</form>
<hr>
<p class="mt-3 text-secondary">Selected: {{ selectedDate | json }}</p>`,tsCode:`import { Component } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule, JsonPipe],
  templateUrl: './datepicker.component.html'
})
export class DatepickerComponent {

  selectedDate: NgbDateStruct;

}`},Y={htmlCode:`<ngb-datepicker class="range-selection" #dp (dateSelect)="onDateSelection($event)" [displayMonths]="2" [dayTemplate]="t" outsideDays="hidden">
</ngb-datepicker>

<ng-template #t let-date let-focused="focused">
  <span class="custom-day"
        [class.focused]="focused"
        [class.range]="isRange(date)"
        [class.faded]="isHovered(date) || isInside(date)"
        (mouseenter)="hoveredDate = date"
        (mouseleave)="hoveredDate = null">
    {{ date.day }}
  </span>
</ng-template>
<p class="mt-3 text-secondary">From: {{ fromDate | json }}</p>
<p class="text-secondary">To: {{ toDate | json }}</p>`,tsCode:`import { Component, inject } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule, JsonPipe],
  templateUrl: './datepicker.component.html'
})
export class DatepickerComponent {
  calendar = inject(NgbCalendar);

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null = this.calendar.getToday();
  toDate: NgbDate | null = this.calendar.getNext(this.calendar.getToday(), 'd', 10);

  constructor() {}

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }
}`},Z={htmlCode:`<form class="d-flex range-selection">
  <div class="form-group hidden">
    <div class="input-group">
      <input name="datepicker"
            class="form-control"
            ngbDatepicker
            #datepicker="ngbDatepicker"
            [autoClose]="'outside'"
            (dateSelect)="onDateSelection($event)"
            [displayMonths]="2"
            [dayTemplate]="t"
            outsideDays="hidden"
            [startDate]="fromDate!">
      <ng-template #t let-date let-focused="focused">
        <span class="custom-day"
              [class.focused]="focused"
              [class.range]="isRange(date)"
              [class.faded]="isHovered(date) || isInside(date)"
              (mouseenter)="hoveredDate = date"
              (mouseleave)="hoveredDate = null">
          {{ date.day }}
        </span>
      </ng-template>
    </div>
  </div>
  <div class="mb-3">
    <div class="input-group" (click)="datepicker.toggle()">
      <input #dpFromDate
            class="form-control" placeholder="yyyy-mm-dd"
            name="dpFromDate"
            [value]="formatter.format(fromDate)"
            (input)="fromDate = validateInput(fromDate, dpFromDate.value)">
      <button class="input-group-text" type="button">
        <i class="feather icon-calendar icon-md text-secondary"></i>
      </button>
    </div>
  </div>
  <div class="ms-2">
    <div class="input-group" (click)="datepicker.toggle()">
      <input #dpToDate
            class="form-control" placeholder="yyyy-mm-dd"
            name="dpToDate"
            [value]="formatter.format(toDate)"
            (input)="toDate = validateInput(toDate, dpToDate.value)">
      <button class="input-group-text" type="button">
        <i class="feather icon-calendar icon-md text-secondary"></i>
      </button>
    </div>
  </div>
</form>
<p class="mt-3 text-secondary">From: {{ fromDate | json }}</p>
<p class="text-secondary">To: {{ toDate | json }}</p>`,tsCode:`import { Component, inject } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule, JsonPipe],
  templateUrl: './datepicker.component.html'
})
export class DatepickerComponent {
  calendar = inject(NgbCalendar);
  formatter = inject(NgbDateParserFormatter);

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null = this.calendar.getToday();
  toDate: NgbDate | null = this.calendar.getNext(this.calendar.getToday(), 'd', 10);

  constructor() {}

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

}`},G=class h{selectedDate;date;calendar=y(W);formatter=y(U);hoveredDate=null;fromDate=this.calendar.getToday();toDate=this.calendar.getNext(this.calendar.getToday(),"d",10);defaultDatepickerCode;inPopupCode;rangeSelectionCode;rangeSelectionPopupCode;constructor(){}ngOnInit(){this.defaultDatepickerCode=Q,this.inPopupCode=X,this.rangeSelectionCode=Y,this.rangeSelectionPopupCode=Z}selectToday(){this.selectedDate=this.calendar.getToday()}scrollTo(o){o.scrollIntoView({behavior:"smooth"})}onDateSelection(o){!this.fromDate&&!this.toDate?this.fromDate=o:this.fromDate&&!this.toDate&&o&&o.after(this.fromDate)?this.toDate=o:(this.toDate=null,this.fromDate=o)}isHovered(o){return this.fromDate&&!this.toDate&&this.hoveredDate&&o.after(this.fromDate)&&o.before(this.hoveredDate)}isInside(o){return this.toDate&&o.after(this.fromDate)&&o.before(this.toDate)}isRange(o){return o.equals(this.fromDate)||this.toDate&&o.equals(this.toDate)||this.isInside(o)||this.isHovered(o)}validateInput(o,l){let e=this.formatter.parse(l);return e&&this.calendar.isValid(V.from(e))?V.from(e):o}static \u0275fac=function(l){return new(l||h)};static \u0275cmp=M({type:h,selectors:[["app-datepicker"]],standalone:!0,features:[I],decls:107,vars:34,consts:[["default",""],["dp",""],["inPopup",""],["d","ngbDatepicker"],["rangeSelection",""],["t",""],["rangeSelectionPopup",""],["datepicker","ngbDatepicker"],["dpFromDate",""],["dpToDate",""],[1,"row"],[1,"col-xl-10","main-content","ps-xl-4","pe-xl-5"],[1,"page-title"],[1,"lead"],["href","https://ng-bootstrap.github.io/#/components/datepicker/examples","target","_blank"],[1,"example"],[3,"ngModelChange","navigate","ngModel"],[1,"btn","btn-sm","btn-primary","mb-1","mb-md-0","me-1",3,"click"],[1,"text-secondary"],[3,"codeContent"],[1,"d-flex"],[1,"input-group"],["placeholder","yyyy-mm-dd","name","dp","ngbDatepicker","",1,"form-control",3,"ngModelChange","ngModel"],["type","button",1,"input-group-text",3,"click"],[1,"feather","icon-calendar","icon-md","text-secondary"],[1,"mt-3","text-secondary"],["outsideDays","hidden",1,"range-selection",3,"dateSelect","displayMonths","dayTemplate"],[1,"d-flex","range-selection"],[1,"form-group","hidden"],["name","datepicker","ngbDatepicker","","outsideDays","hidden",1,"form-control",3,"dateSelect","autoClose","displayMonths","dayTemplate","startDate"],[1,"mb-3"],[1,"input-group",3,"click"],["placeholder","yyyy-mm-dd","name","dpFromDate",1,"form-control",3,"input","value"],["type","button",1,"input-group-text"],[1,"ms-2"],["placeholder","yyyy-mm-dd","name","dpToDate",1,"form-control",3,"input","value"],[1,"col-xl-2","content-nav-wrapper"],[1,"nav","content-nav","d-flex","flex-column"],[1,"nav-item"],[1,"nav-link",3,"click"],[1,"custom-day",3,"mouseenter","mouseleave"]],template:function(l,e){if(l&1){let t=k();a(0,"div",10)(1,"div",11)(2,"h1",12),r(3,"Datepicker"),i(),a(4,"p",13),r(5,"Datepicker will help you with date selection. It can be used either inline with NgbDatepicker component or as a popup on any input element with NgbInputDatepicker directive. Read the "),a(6,"a",14),r(7,"Official Ng-Bootstrap Documentation"),i(),r(8," for a full list of instructions and other options."),i(),D(9,"hr"),a(10,"h4",null,0),r(12,"Basic Example"),i(),a(13,"div",15)(14,"ngb-datepicker",16,1),w("ngModelChange",function(n){return s(t),T(e.selectedDate,n)||(e.selectedDate=n),p(n)}),m("navigate",function(n){return s(t),p(e.date=n.next)}),i(),D(16,"hr"),a(17,"button",17),m("click",function(){return s(t),p(e.selectToday())}),r(18,"Select Today"),i(),a(19,"button",17),m("click",function(){s(t);let n=u(15);return p(n.navigateTo())}),r(20,"To current month"),i(),a(21,"button",17),m("click",function(){s(t);let n=u(15);return p(n.navigateTo({year:2013,month:2}))}),r(22,"To Feb 2013"),i(),D(23,"hr"),a(24,"p",18),r(25),i(),a(26,"p",18),r(27),b(28,"json"),i()(),D(29,"app-code-preview",19)(30,"hr"),a(31,"h4",null,2),r(33,"Datepicker in a popup"),i(),a(34,"div",15)(35,"form",20)(36,"div",21)(37,"input",22,3),w("ngModelChange",function(n){return s(t),T(e.selectedDate,n)||(e.selectedDate=n),p(n)}),i(),a(39,"button",23),m("click",function(){s(t);let n=u(38);return p(n.toggle())}),D(40,"i",24),i()()(),D(41,"hr"),a(42,"p",25),r(43),b(44,"json"),i()(),D(45,"app-code-preview",19)(46,"hr"),a(47,"h4",null,4),r(49,"Range selection"),i(),a(50,"div",15)(51,"ngb-datepicker",26,1),m("dateSelect",function(n){return s(t),p(e.onDateSelection(n))}),i(),C(53,z,2,7,"ng-template",null,5,x),a(55,"p",25),r(56),b(57,"json"),i(),a(58,"p",18),r(59),b(60,"json"),i()(),D(61,"app-code-preview",19)(62,"hr"),a(63,"h4",null,6),r(65,"Range selection in a popup"),i(),a(66,"div",15)(67,"form",27)(68,"div",28)(69,"div",21)(70,"input",29,7),m("dateSelect",function(n){return s(t),p(e.onDateSelection(n))}),i(),C(72,K,2,7,"ng-template",null,5,x),i()(),a(74,"div",30)(75,"div",31),m("click",function(){s(t);let n=u(71);return p(n.toggle())}),a(76,"input",32,8),m("input",function(){s(t);let n=u(77);return p(e.fromDate=e.validateInput(e.fromDate,n.value))}),i(),a(78,"button",33),D(79,"i",24),i()()(),a(80,"div",34)(81,"div",31),m("click",function(){s(t);let n=u(71);return p(n.toggle())}),a(82,"input",35,9),m("input",function(){s(t);let n=u(83);return p(e.toDate=e.validateInput(e.toDate,n.value))}),i(),a(84,"button",33),D(85,"i",24),i()()()(),a(86,"p",25),r(87),b(88,"json"),i(),a(89,"p",18),r(90),b(91,"json"),i()(),D(92,"app-code-preview",19),i(),a(93,"div",36)(94,"ul",37)(95,"li",38)(96,"a",39),m("click",function(){s(t);let n=u(11);return p(e.scrollTo(n))}),r(97,"Basic example"),i()(),a(98,"li",38)(99,"a",39),m("click",function(){s(t);let n=u(32);return p(e.scrollTo(n))}),r(100,"Datepicker in a popup"),i()(),a(101,"li",38)(102,"a",39),m("click",function(){s(t);let n=u(48);return p(e.scrollTo(n))}),r(103,"Range selection"),i()(),a(104,"li",38)(105,"a",39),m("click",function(){s(t);let n=u(64);return p(e.scrollTo(n))}),r(106,"Range selection in a popup"),i()()()()()}if(l&2){let t=u(54);c(14),N("ngModel",e.selectedDate),c(11),E("Month: ",e.date.month,"-",e.date.year,""),c(2),f("Selected: ",v(28,22,e.selectedDate),""),c(2),g("codeContent",e.defaultDatepickerCode),c(8),N("ngModel",e.selectedDate),c(6),f("Selected: ",v(44,24,e.selectedDate),""),c(2),g("codeContent",e.inPopupCode),c(6),g("displayMonths",2)("dayTemplate",t),c(5),f("From: ",v(57,26,e.fromDate),""),c(3),f("To: ",v(60,28,e.toDate),""),c(2),g("codeContent",e.rangeSelectionCode),c(9),g("autoClose","outside")("displayMonths",2)("dayTemplate",t)("startDate",e.fromDate),c(6),g("value",e.formatter.format(e.fromDate)),c(6),g("value",e.formatter.format(e.toDate)),c(5),f("From: ",v(88,30,e.fromDate),""),c(3),f("To: ",v(91,32,e.toDate),""),c(2),g("codeContent",e.rangeSelectionPopupCode)}},dependencies:[L,A,O,$,q,J,F,j,R,H,B,P],encapsulation:2})};export{G as DatepickerComponent};
