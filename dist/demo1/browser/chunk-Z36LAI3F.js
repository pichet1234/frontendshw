import{a as x}from"./chunk-ZOI5QTSN.js";import"./chunk-3RAS5AEW.js";import{a as w,n as _}from"./chunk-5ZTN53S4.js";import"./chunk-VZNXAE5Z.js";import"./chunk-FHPH46MZ.js";import"./chunk-LVHII46P.js";import"./chunk-RD6NJ7NY.js";import{Ca as n,Da as i,Fb as f,Gb as c,Sb as l,Tb as t,Ub as m,Yb as g,dc as o,kb as p,pc as b,qc as e,ra as h,yc as k}from"./chunk-3TFDHLSU.js";import"./chunk-GAL4ENT6.js";var E={htmlCode:`<p class="mb-2">
  <button type="button" class="btn btn-outline-primary" (click)="isCollapsed = !isCollapsed"
          [attr.aria-expanded]="!isCollapsed" aria-controls="collapseExample">
    Toggle
  </button>
</p>
<div id="collapseExample" [ngbCollapse]="isCollapsed">
  <div class="card">
    <div class="card-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './collapse.component.html'
})
export class CollapseComponent {
  public isCollapsed = false;
}`},M={htmlCode:`<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
  <a class="navbar-brand" routerLink=".">Responsive navbar</a>
  
  <!-- Toggle the value of the property when the toggler button is clicked. -->
  <button class="navbar-toggler" type="button" (click)="isMenuCollapsed = !isMenuCollapsed">
    &#9776;
  </button>

  <!-- Add the ngbCollapse directive to the element below. -->
  <div [ngbCollapse]="isMenuCollapsed" class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <!-- Close the menu when a link is clicked. -->
        <a class="nav-link" routerLink="." (click)="isMenuCollapsed = true">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="." (click)="isMenuCollapsed = true">Examples</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="." (click)="isMenuCollapsed = true">About</a>
      </li>
    </ul>
  </div>
</nav>`,tsCode:`import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './collapse.component.html'
})
export class CollapseComponent {
  // Create a property to track whether the menu is open.
  // Start with the menu collapsed so that it does not
  // appear initially when the page loads on a small screen!
  public isMenuCollapsed = true;
}`},y=class C{isCollapsed=!1;isMenuCollapsed=!0;defaultCollapseCode;responsiveNavbarCode;constructor(){}ngOnInit(){this.defaultCollapseCode=E,this.responsiveNavbarCode=M}scrollTo(u){u.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(d){return new(d||C)};static \u0275cmp=h({type:C,selectors:[["app-collapse"]],standalone:!0,features:[k],decls:59,vars:5,consts:[["default",""],["responsiveNavbar",""],[1,"row"],[1,"col-xl-10","main-content","ps-xl-4","pe-xl-5"],[1,"page-title"],[1,"lead"],["href","https://ng-bootstrap.github.io/#/components/collapse/examples","target","_blank"],[1,"mb-3"],[1,"example"],[1,"mb-2"],["type","button","aria-controls","collapseExample",1,"btn","btn-outline-primary",3,"click"],["id","collapseExample",3,"ngbCollapse"],[1,"card"],[1,"card-body"],[3,"codeContent"],[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark","mb-3"],["routerLink",".",1,"navbar-brand"],["type","button",1,"navbar-toggler",3,"click"],[1,"collapse","navbar-collapse",3,"ngbCollapse"],[1,"navbar-nav"],[1,"nav-item","active"],["routerLink",".",1,"nav-link",3,"click"],[1,"nav-item"],[1,"col-xl-2","content-nav-wrapper"],[1,"nav","content-nav","d-flex","flex-column"],[1,"nav-link",3,"click"]],template:function(d,a){if(d&1){let s=g();l(0,"div",2)(1,"div",3)(2,"h1",4),e(3,"Collapse"),t(),l(4,"p",5),e(5,"Toggle the visibility of content across your project with a few classes and javascript. Read the "),l(6,"a",6),e(7,"Official Ng-Bootstrap Documentation"),t(),e(8," for a full list of instructions and other options."),t(),m(9,"hr"),l(10,"h4",null,0),e(12,"Basic Example"),t(),l(13,"p",7),e(14,"Click the buttons below to show and hide another element via class changes:"),t(),l(15,"div",8)(16,"p",9)(17,"button",10),o("click",function(){return n(s),i(a.isCollapsed=!a.isCollapsed)}),e(18," Toggle "),t()(),l(19,"div",11)(20,"div",12)(21,"div",13),e(22," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),t()()()(),m(23,"app-code-preview",14)(24,"hr"),l(25,"h4",null,1),e(27,"Responsive Navbar"),t(),l(28,"p",7),e(29,"A responsive navbar can be achieved with an "),l(30,"code"),e(31,"ngbCollapse"),t(),e(32," directive. Resize your browser window to see it in action!"),t(),l(33,"div",8)(34,"nav",15)(35,"a",16),e(36,"Responsive navbar"),t(),l(37,"button",17),o("click",function(){return n(s),i(a.isMenuCollapsed=!a.isMenuCollapsed)}),e(38," \u2630 "),t(),l(39,"div",18)(40,"ul",19)(41,"li",20)(42,"a",21),o("click",function(){return n(s),i(a.isMenuCollapsed=!0)}),e(43,"Features"),t()(),l(44,"li",22)(45,"a",21),o("click",function(){return n(s),i(a.isMenuCollapsed=!0)}),e(46,"Examples"),t()(),l(47,"li",22)(48,"a",21),o("click",function(){return n(s),i(a.isMenuCollapsed=!0)}),e(49,"About"),t()()()()()(),m(50,"app-code-preview",14),t(),l(51,"div",23)(52,"ul",24)(53,"li",22)(54,"a",25),o("click",function(){n(s);let v=b(11);return i(a.scrollTo(v))}),e(55,"Basic example"),t()(),l(56,"li",22)(57,"a",25),o("click",function(){n(s);let v=b(26);return i(a.scrollTo(v))}),e(58,"Responsive Navbar"),t()()()()()}d&2&&(p(17),f("aria-expanded",!a.isCollapsed),p(2),c("ngbCollapse",a.isCollapsed),p(4),c("codeContent",a.defaultCollapseCode),p(16),c("ngbCollapse",a.isMenuCollapsed),p(11),c("codeContent",a.responsiveNavbarCode))},dependencies:[x,_,w],encapsulation:2})};export{y as CollapseComponent};
