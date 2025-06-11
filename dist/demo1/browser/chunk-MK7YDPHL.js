import{a as x}from"./chunk-ZOI5QTSN.js";import"./chunk-3RAS5AEW.js";import"./chunk-5ZTN53S4.js";import"./chunk-VZNXAE5Z.js";import"./chunk-FHPH46MZ.js";import"./chunk-LVHII46P.js";import"./chunk-RD6NJ7NY.js";import{Ca as c,Da as m,Gb as l,Sb as r,Tb as t,Ub as a,Yb as C,dc as d,kb as o,pc as s,qc as e,ra as h,yc as v}from"./chunk-3TFDHLSU.js";import"./chunk-GAL4ENT6.js";var y={htmlCode:`<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a routerLink=".">Home</a></li>
    <li class="breadcrumb-item"><a routerLink=".">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>`,tsCode:`import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent {}`},E={htmlCode:`<nav aria-label="breadcrumb">
  <ol class="breadcrumb breadcrumb-line">
    <li class="breadcrumb-item"><a routerLink=".">Home</a></li>
    <li class="breadcrumb-item"><a routerLink=".">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>`,tsCode:`import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent {}`},w={htmlCode:`<nav aria-label="breadcrumb">
  <ol class="breadcrumb breadcrumb-dot">
    <li class="breadcrumb-item"><a routerLink=".">Home</a></li>
    <li class="breadcrumb-item"><a routerLink=".">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>`,tsCode:`import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent {}`},_={scssCode:'$breadcrumb-divider: quote(">");'},B={scssCode:"$breadcrumb-divider: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+);"},L={scssCode:"$breadcrumb-divider: none;"},f=class g{defaultBreadcrumbCode;lineSeperatorCode;dotSeperatorCode;changingSeperatorCode;changingSeperatorSvgCode;changingSeperatorNoneCode;constructor(){}ngOnInit(){this.defaultBreadcrumbCode=y,this.lineSeperatorCode=E,this.dotSeperatorCode=w,this.changingSeperatorCode=_,this.changingSeperatorSvgCode=B,this.changingSeperatorNoneCode=L}scrollTo(b){b.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(p){return new(p||g)};static \u0275cmp=h({type:g,selectors:[["app-breadcrumbs"]],standalone:!0,features:[v],decls:107,vars:6,consts:[["default",""],["line",""],["dot",""],["changingSeperator",""],[1,"row"],[1,"col-xl-10","main-content","ps-xl-4","pe-xl-5"],[1,"page-title"],[1,"lead"],["href","https://getbootstrap.com/docs/5.3/components/breadcrumb/","target","_blank"],[1,"example"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],[3,"codeContent"],[1,"breadcrumb","breadcrumb-line"],[1,"breadcrumb","breadcrumb-dot"],[1,"mb-3"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS/::before"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS/content"],["href","https://sass-lang.com/documentation/Sass/Script/Functions.html#quote-instance_method"],[1,"col-xl-2","content-nav-wrapper"],[1,"nav","content-nav","d-flex","flex-column"],[1,"nav-item"],[1,"nav-link",3,"click"]],template:function(p,n){if(p&1){let u=C();r(0,"div",4)(1,"div",5)(2,"h1",6),e(3,"Breadcrumbs"),t(),r(4,"p",7),e(5,"Indicate the current page\u2019s location within a navigational hierarchy that automatically adds seperators via CSS. Read the "),r(6,"a",8),e(7,"Official Bootstrap Documentation"),t(),e(8," for a full list of instructions and other options."),t(),a(9,"hr"),r(10,"h4",null,0),e(12,"Basic example"),t(),r(13,"div",9)(14,"nav",10)(15,"ol",11)(16,"li",12)(17,"a",13),e(18,"Home"),t()(),r(19,"li",12)(20,"a",13),e(21,"Library"),t()(),r(22,"li",14),e(23,"Data"),t()()()(),a(24,"app-code-preview",15)(25,"hr"),r(26,"h4",null,1),e(28,"Line seperator"),t(),r(29,"div",9)(30,"nav",10)(31,"ol",16)(32,"li",12)(33,"a",13),e(34,"Home"),t()(),r(35,"li",12)(36,"a",13),e(37,"Library"),t()(),r(38,"li",14),e(39,"Data"),t()()()(),a(40,"app-code-preview",15)(41,"hr"),r(42,"h4",null,2),e(44,"Dot seperator"),t(),r(45,"div",9)(46,"nav",10)(47,"ol",17)(48,"li",12)(49,"a",13),e(50,"Home"),t()(),r(51,"li",12)(52,"a",13),e(53,"Library"),t()(),r(54,"li",14),e(55,"Data"),t()()()(),a(56,"app-code-preview",15)(57,"hr"),r(58,"h4",null,3),e(60,"Changing the seperator"),t(),r(61,"p",18),e(62,"Seperators are automatically added in CSS through "),r(63,"a",19)(64,"code"),e(65,"::before"),t()(),e(66," and "),r(67,"a",20)(68,"code"),e(69,"content"),t()(),e(70,". They can be changed by changing "),r(71,"code"),e(72,"$breadcrumb-divider"),t(),e(73,". The "),r(74,"a",21),e(75,"quote"),t(),e(76," function is needed to generate the quotes around a string, so if you want "),r(77,"code"),e(78,">"),t(),e(79," as seperator, you can use this:"),t(),a(80,"app-code-preview",15),r(81,"p",18),e(82,"It\u2019s also possible to use a base64 embedded SVG icon:"),t(),a(83,"app-code-preview",15),r(84,"p",18),e(85,"The seperator can be removed by setting "),r(86,"code"),e(87,"$breadcrumb-divider"),t(),e(88," to "),r(89,"code"),e(90,"none"),t(),e(91,":"),t(),a(92,"app-code-preview",15),t(),r(93,"div",22)(94,"ul",23)(95,"li",24)(96,"a",25),d("click",function(){c(u);let i=s(11);return m(n.scrollTo(i))}),e(97,"Basic example"),t()(),r(98,"li",24)(99,"a",25),d("click",function(){c(u);let i=s(27);return m(n.scrollTo(i))}),e(100,"Line seperator"),t()(),r(101,"li",24)(102,"a",25),d("click",function(){c(u);let i=s(43);return m(n.scrollTo(i))}),e(103,"Dot seperator"),t()(),r(104,"li",24)(105,"a",25),d("click",function(){c(u);let i=s(59);return m(n.scrollTo(i))}),e(106,"Changing seperator"),t()()()()()}p&2&&(o(24),l("codeContent",n.defaultBreadcrumbCode),o(16),l("codeContent",n.lineSeperatorCode),o(16),l("codeContent",n.dotSeperatorCode),o(24),l("codeContent",n.changingSeperatorCode),o(3),l("codeContent",n.changingSeperatorSvgCode),o(9),l("codeContent",n.changingSeperatorNoneCode))},dependencies:[x],encapsulation:2})};export{f as BreadcrumbsComponent};
