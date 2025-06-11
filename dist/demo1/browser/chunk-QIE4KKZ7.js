import{a as T}from"./chunk-ZOI5QTSN.js";import"./chunk-3RAS5AEW.js";import{a as S}from"./chunk-MO5UHXIZ.js";import{S as P,T as O}from"./chunk-5ZTN53S4.js";import"./chunk-VZNXAE5Z.js";import"./chunk-FHPH46MZ.js";import"./chunk-LVHII46P.js";import"./chunk-RD6NJ7NY.js";import{Bb as x,Ca as s,Da as m,Gb as f,Ib as w,Sb as e,Tb as n,Ub as p,Yb as M,dc as u,kb as o,pc as C,qc as i,ra as v,rc as _,uc as b,vc as h,wc as R,yc as y}from"./chunk-3TFDHLSU.js";import"./chunk-GAL4ENT6.js";function I(c,r){if(c&1&&(e(0,"span"),p(1,"i",15),n()),c&2){let l=r.fill,t=r.index;w("filled",l===100)("bad",t<3)}}var V={htmlCode:`<ngb-rating [(rate)]="currentRate"></ngb-rating>

<p class="text-secondary mt-2">Rate: <b>{{currentRate}}</b></p>`,tsCode:`import { Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [NgbRatingModule],
  templateUrl: './rating.component.html'
})
export class RatingComponent {
  currentRate = 8;
}`},N={htmlCode:`<ngb-rating [(rate)]="currentRate">
  <ng-template let-fill="fill" let-index="index">
    <span [class.filled]="fill === 100" [class.bad]="index < 3">
      <i data-feather="star" appFeatherIcon></i>
    </span>
  </ng-template>
</ngb-rating>

<p class="text-secondary mt-2">Rate: <b>{{currentRate}}</b></p>`,tsCode:`import { Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconDirective } from '../../../../core/feather-icon/feather-icon.directive';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [NgbRatingModule, FeatherIconDirective],
  templateUrl: './rating.component.html',
  styles: [\`
    svg, i {
      color: rgba(114, 124, 245, 0.3);
    }
    i {
      font-size: 1.5rem;
    }
    svg {
      width: 20px;
      height: 20px;
    }
    .filled svg, .filled i {
      color: #727cf5;
    }
    .bad svg, .bad i {
      color: rgba(255, 51, 102, 0.3);
    }
    .filled.bad svg, .filled.bad i {
      color: #ff3366;
    }
  \`]
})
export class RatingComponent {
  currentRate = 8;
}`},E=class c{currentRate=8;defaultRatingCode;customTemplateCode;constructor(){}ngOnInit(){this.defaultRatingCode=V,this.customTemplateCode=N}scrollTo(r){r.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(l){return new(l||c)};static \u0275cmp=v({type:c,selectors:[["app-rating"]],standalone:!0,features:[y],decls:40,vars:6,consts:[["default",""],["customTemplate",""],[1,"row"],[1,"col-xl-10","main-content","ps-xl-4","pe-xl-5"],[1,"page-title"],[1,"lead"],["href","https://ng-bootstrap.github.io/#/components/rating/examples","target","_blank"],[1,"example"],[3,"rateChange","rate"],[1,"text-secondary","mt-2"],[3,"codeContent"],[1,"col-xl-2","content-nav-wrapper"],[1,"nav","content-nav","d-flex","flex-column"],[1,"nav-item"],[1,"nav-link",3,"click"],["data-feather","star","appFeatherIcon",""]],template:function(l,t){if(l&1){let g=M();e(0,"div",2)(1,"div",3)(2,"h1",4),i(3,"Rating"),n(),e(4,"p",5),i(5,"A directive that helps visualising and interacting with a star rating bar. Read the "),e(6,"a",6),i(7,"Official Ng-Bootstrap Documentation"),n(),i(8," for a full list of instructions and other options."),n(),p(9,"hr"),e(10,"h4",null,0),i(12,"Basic Example"),n(),e(13,"div",7)(14,"ngb-rating",8),R("rateChange",function(a){return s(g),h(t.currentRate,a)||(t.currentRate=a),m(a)}),n(),e(15,"p",9),i(16,"Rate: "),e(17,"b"),i(18),n()()(),p(19,"app-code-preview",10)(20,"hr"),e(21,"h4",null,1),i(23,"Custom star template"),n(),e(24,"div",7)(25,"ngb-rating",8),R("rateChange",function(a){return s(g),h(t.currentRate,a)||(t.currentRate=a),m(a)}),x(26,I,2,4,"ng-template"),n(),e(27,"p",9),i(28,"Rate: "),e(29,"b"),i(30),n()()(),p(31,"app-code-preview",10),n(),e(32,"div",11)(33,"ul",12)(34,"li",13)(35,"a",14),u("click",function(){s(g);let a=C(11);return m(t.scrollTo(a))}),i(36,"Basic example"),n()(),e(37,"li",13)(38,"a",14),u("click",function(){s(g);let a=C(22);return m(t.scrollTo(a))}),i(39,"Custom star template"),n()()()()()}l&2&&(o(14),b("rate",t.currentRate),o(4),_(t.currentRate),o(),f("codeContent",t.defaultRatingCode),o(6),b("rate",t.currentRate),o(5),_(t.currentRate),o(),f("codeContent",t.customTemplateCode))},dependencies:[T,O,P,S],styles:["svg[_ngcontent-%COMP%], i[_ngcontent-%COMP%]{color:#727cf54d}i[_ngcontent-%COMP%]{font-size:1.5rem}svg[_ngcontent-%COMP%]{width:20px;height:20px}.filled[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .filled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#727cf5}.bad[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .bad[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ff33664d}.filled.bad[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .filled.bad[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#f36}"]})};export{E as RatingComponent};
