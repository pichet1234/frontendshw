import{a as h}from"./chunk-ZOI5QTSN.js";import"./chunk-3RAS5AEW.js";import{O as y,P as C}from"./chunk-5ZTN53S4.js";import"./chunk-VZNXAE5Z.js";import"./chunk-FHPH46MZ.js";import"./chunk-LVHII46P.js";import"./chunk-RD6NJ7NY.js";import{Ca as l,Da as m,Gb as u,Sb as o,Tb as e,Ub as i,Yb as f,dc as c,kb as s,pc as b,qc as t,ra as g,yc as P}from"./chunk-3TFDHLSU.js";import"./chunk-GAL4ENT6.js";var E={htmlCode:`<button type="button" class="btn btn-primary" popoverTitle="Popover title" ngbPopover="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>`,tsCode:`import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popovers',
  standalone: true,
  imports: [NgbPopoverModule],
  templateUrl: './popovers.component.html'
})
export class PopoversComponent {}`},V={htmlCode:`<button type="button" class="btn btn-primary mb-1 mb-md-0 me-1" placement="top" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>
<button type="button" class="btn btn-primary mb-1 mb-md-0 me-1" placement="end" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button>
<button type="button" class="btn btn-primary mb-1 mb-md-0 me-1" placement="bottom" ngbPopover="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>
<button type="button" class="btn btn-primary mb-1 mb-md-0 me-1" placement="start" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on left
</button>`,tsCode:`import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popovers',
  standalone: true,
  imports: [NgbPopoverModule],
  templateUrl: './popovers.component.html'
})
export class PopoversComponent {}`},x=class v{defaultPopoverCode;popoverDirecionsCode;constructor(){}ngOnInit(){this.defaultPopoverCode=E,this.popoverDirecionsCode=V}scrollTo(a){a.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(n){return new(n||v)};static \u0275cmp=g({type:v,selectors:[["app-popovers"]],standalone:!0,features:[P],decls:41,vars:2,consts:[["default",""],["directions",""],[1,"row"],[1,"col-xl-10","main-content","ps-xl-4","pe-xl-5"],[1,"page-title"],[1,"lead"],["href","https://ng-bootstrap.github.io/#/components/popover/examples","target","_blank"],[1,"example"],["type","button","popoverTitle","Popover title","ngbPopover","And here's some amazing content. It's very engaging. Right?",1,"btn","btn-primary"],[3,"codeContent"],[1,"mb-3"],["type","button","placement","top","ngbPopover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary","mb-1","mb-md-0","me-1"],["type","button","placement","end","ngbPopover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary","mb-1","mb-md-0","me-1"],["type","button","placement","bottom","ngbPopover",`Vivamus
      sagittis lacus vel augue laoreet rutrum faucibus.`,1,"btn","btn-primary","mb-1","mb-md-0","me-1"],["type","button","placement","start","ngbPopover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary","mb-1","mb-md-0","me-1"],[1,"col-xl-2","content-nav-wrapper"],[1,"nav","content-nav","d-flex","flex-column"],[1,"nav-item"],[1,"nav-link",3,"click"]],template:function(n,r){if(n&1){let d=f();o(0,"div",2)(1,"div",3)(2,"h1",4),t(3,"Popovers"),e(),o(4,"p",5),t(5,"Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site. Read the "),o(6,"a",6),t(7,"Official Ng-Bootstrap Documentation"),e(),t(8," for a full list of instructions and other options."),e(),i(9,"hr"),o(10,"h4",null,0),t(12,"Basic example"),e(),o(13,"div",7)(14,"button",8),t(15,"Click to toggle popover"),e()(),i(16,"app-code-preview",9)(17,"hr"),o(18,"h4",null,1),t(20,"Four directions"),e(),o(21,"p",10),t(22,"Four options are available: top, right, bottom, and left aligned."),e(),o(23,"div",7)(24,"button",11),t(25," Popover on top "),e(),o(26,"button",12),t(27," Popover on right "),e(),o(28,"button",13),t(29," Popover on bottom "),e(),o(30,"button",14),t(31," Popover on left "),e()(),i(32,"app-code-preview",9),e(),o(33,"div",15)(34,"ul",16)(35,"li",17)(36,"a",18),c("click",function(){l(d);let p=b(11);return m(r.scrollTo(p))}),t(37,"Basic example"),e()(),o(38,"li",17)(39,"a",18),c("click",function(){l(d);let p=b(19);return m(r.scrollTo(p))}),t(40,"Four directions"),e()()()()()}n&2&&(s(16),u("codeContent",r.defaultPopoverCode),s(16),u("codeContent",r.popoverDirecionsCode))},dependencies:[h,C,y],encapsulation:2})};export{x as PopoversComponent};
