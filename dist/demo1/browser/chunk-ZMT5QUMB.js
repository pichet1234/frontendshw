import{a as y}from"./chunk-ZOI5QTSN.js";import"./chunk-3RAS5AEW.js";import{W as g,X as x}from"./chunk-5ZTN53S4.js";import"./chunk-VZNXAE5Z.js";import"./chunk-FHPH46MZ.js";import"./chunk-LVHII46P.js";import"./chunk-RD6NJ7NY.js";import{Ca as r,Da as s,Gb as c,Sb as e,Tb as t,Ub as l,Yb as u,dc as d,kb as b,pc as T,qc as o,ra as m,yc as f}from"./chunk-3TFDHLSU.js";import"./chunk-GAL4ENT6.js";var E={htmlCode:`<button type="button" class="btn btn-primary me-1" placement="top" ngbTooltip="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-primary me-1" placement="end" ngbTooltip="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-primary me-1" placement="bottom" ngbTooltip="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-primary me-1" placement="start" ngbTooltip="Tooltip on left">
  Tooltip on left
</button>`,tsCode:`import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [NgbTooltipModule]
  templateUrl: './tooltips.component.html'
})
export class TooltipsComponent {}`},v=class p{defaultTooltipsCode;constructor(){}ngOnInit(){this.defaultTooltipsCode=E}scrollTo(i){i.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(n){return new(n||p)};static \u0275cmp=m({type:p,selectors:[["app-tooltips"]],standalone:!0,features:[f],decls:30,vars:1,consts:[["default",""],[1,"row"],[1,"col-xl-10","main-content","ps-xl-4","pe-xl-5"],[1,"page-title"],[1,"lead"],["href","https://ng-bootstrap.github.io/#/components/tooltip/examples","target","_blank"],[1,"mb-3"],[1,"example"],["type","button","placement","top","ngbTooltip","Tooltip on top",1,"btn","btn-primary","me-1"],["type","button","placement","end","ngbTooltip","Tooltip on right",1,"btn","btn-primary","me-1"],["type","button","placement","bottom","ngbTooltip","Tooltip on bottom",1,"btn","btn-primary","me-1"],["type","button","placement","start","ngbTooltip","Tooltip on left",1,"btn","btn-primary","me-1"],[3,"codeContent"],[1,"col-xl-2","content-nav-wrapper"],[1,"nav","content-nav","d-flex","flex-column"],[1,"nav-item"],[1,"nav-link",3,"click"]],template:function(n,a){if(n&1){let C=u();e(0,"div",1)(1,"div",2)(2,"h1",3),o(3,"Tooltips"),t(),e(4,"p",4),o(5,"Read the "),e(6,"a",5),o(7,"Official Ng-Bootstrap Documentation"),t(),o(8," for a full list of instructions and other options."),t(),l(9,"hr"),e(10,"h4",null,0),o(12,"Example"),t(),e(13,"p",6),o(14,"Hover over the links below to see tooltips."),t(),e(15,"div",7)(16,"button",8),o(17," Tooltip on top "),t(),e(18,"button",9),o(19," Tooltip on right "),t(),e(20,"button",10),o(21," Tooltip on bottom "),t(),e(22,"button",11),o(23," Tooltip on left "),t()(),l(24,"app-code-preview",12),t(),e(25,"div",13)(26,"ul",14)(27,"li",15)(28,"a",16),d("click",function(){r(C);let h=T(11);return s(a.scrollTo(h))}),o(29,"Example"),t()()()()()}n&2&&(b(24),c("codeContent",a.defaultTooltipsCode))},dependencies:[y,x,g],encapsulation:2})};export{v as TooltipsComponent};
