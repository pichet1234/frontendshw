import{a as E}from"./chunk-ZOI5QTSN.js";import"./chunk-3RAS5AEW.js";import{$ as O,aa as R}from"./chunk-5ZTN53S4.js";import"./chunk-VZNXAE5Z.js";import"./chunk-FHPH46MZ.js";import"./chunk-LVHII46P.js";import"./chunk-RD6NJ7NY.js";import{Bb as b,Ca as c,Da as l,Gb as C,Kc as k,Nb as y,Sb as t,Tb as n,Ub as d,Yb as _,dc as r,ec as g,kb as v,na as h,pc as p,qc as o,ra as S,rc as T,yc as w}from"./chunk-3TFDHLSU.js";import"./chunk-GAL4ENT6.js";function V(u,e){if(u&1){let f=_();t(0,"div",17)(1,"h4",18),o(2,"Profile update"),n(),t(3,"button",19),r("click",function(){let a=c(f).$implicit;return l(a.dismiss("Cross click"))}),n()(),t(4,"div",20)(5,"p"),o(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam eaque nam, sequi voluptatum accusantium commodi repellat dolores corporis eius omnis cupiditate facilis reprehenderit et eum laudantium maxime itaque! Odio?"),n(),t(7,"div",21)(8,"button",22),r("click",function(){let a=c(f).$implicit;return l(a.close("Save click"))}),o(9,"Save"),n()()()}}function B(u,e){if(u&1&&(d(0,"hr"),t(1,"p"),o(2),n()),u&2){let f=g();v(2),T(f.closeResult)}}function N(u,e){if(u&1){let f=_();t(0,"div",17)(1,"h4",23),o(2,"Offcanvas title"),n(),t(3,"button",19),r("click",function(){let a=c(f).$implicit;return l(a.dismiss("Cross click"))}),n()(),t(4,"div",20)(5,"p"),o(6,"One fine body\u2026"),n(),t(7,"div",21)(8,"button",22),r("click",function(){let a=c(f).$implicit;return l(a.close("Close click"))}),o(9,"Close"),n()()()}}var D={htmlCode:`<ng-template #content let-offcanvas>
	<div class="offcanvas-header">
		<h4 class="offcanvas-title" id="offcanvas-basic-title">Profile update</h4>
		<button type="button" class="btn-close" aria-label="Close" (click)="offcanvas.dismiss('Cross click')"></button>
	</div>
	<div class="offcanvas-body">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam eaque nam, sequi voluptatum accusantium commodi repellat dolores corporis eius omnis cupiditate facilis reprehenderit et eum laudantium maxime itaque! Odio?</p>
		<div class="text-end">
			<button type="button" class="btn btn-outline-secondary" (click)="offcanvas.close('Save click')">Save</button>
		</div>
	</div>
</ng-template>

<button class="btn btn-lg btn-outline-primary" (click)="open(content)">Launch demo offcanvas</button>

@if (closeResult) {
  <hr />
  <p>{{ closeResult }}</p>
}`,tsCode:`import { Component, inject, TemplateRef } from '@angular/core';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-offcanvas',
	standalone: true,
	imports: [],
	templateUrl: './offcanvas.component.html',
})
export class OffcanvasComponent {
	private offcanvasService = inject(NgbOffcanvas);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = "Closed with: " + result;
			},
			(reason) => {
				this.closeResult = "Dismissed " + this.getDismissReason(reason);
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case OffcanvasDismissReasons.ESC:
				return 'by pressing ESC';
			case OffcanvasDismissReasons.BACKDROP_CLICK:
				return 'by clicking on the backdrop';
			default:
				return "with: " + reason;
		}
	}
}`},P={htmlCode:`<ng-template #content2 let-offcanvas>
	<div class="offcanvas-header">
		<h4 class="offcanvas-title">Offcanvas title</h4>
		<button type="button" class="btn-close" aria-label="Close" (click)="offcanvas.dismiss('Cross click')"></button>
	</div>
	<div class="offcanvas-body">
		<p>One fine body&hellip;</p>
		<div class="text-end">
			<button type="button" class="btn btn-outline-secondary" (click)="offcanvas.close('Close click')">Close</button>
		</div>
	</div>
</ng-template>

<button class="btn btn-lg btn-outline-primary mb-2 me-2" (click)="openEnd(content2)">Right position</button>
<button class="btn btn-lg btn-outline-primary mb-2 me-2" (click)="openTop(content2)">Top position</button>
<button class="btn btn-lg btn-outline-primary mb-2 me-2" (click)="openBottom(content2)">Bottom position</button>
<button class="btn btn-lg btn-outline-primary mb-2 me-2" (click)="openNoBackdrop(content2)">No backdrop</button>
<button class="btn btn-lg btn-outline-primary mb-2 me-2" (click)="openStaticBackdrop(content2)">Static backdrop</button>
<button class="btn btn-lg btn-outline-primary mb-2 me-2" (click)="openScroll(content2)">
	Scrolling of main content enabled
</button>
<button class="btn btn-lg btn-outline-primary mb-2 me-2" (click)="openNoKeyboard(content2)">
	Escape does not dismiss
</button>
<button class="btn btn-lg btn-outline-primary mb-2 me-2" (click)="openNoAnimation(content2)">No animation</button>
<button class="btn btn-lg btn-outline-primary mb-2 me-2" (click)="openCustomBackdropClass(content2)">
	Custom backdrop class
</button>
<button class="btn btn-lg btn-outline-primary mb-2 me-2" (click)="openCustomPanelClass(content2)">
	Custom panel class
</button>`,tsCode:`import { Component, inject, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-offcanvas',
	standalone: true,
	templateUrl: './offcanvas.component.html'
})
export class OffcanvasComponent {
	private offcanvasService = inject(NgbOffcanvas);

	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

	openTop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'top' });
	}

	openBottom(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'bottom' });
	}

	openNoBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: false });
	}

	openStaticBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: 'static' });
	}

	openScroll(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { scroll: true });
	}

	openNoKeyboard(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { keyboard: false });
	}

	openNoAnimation(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { animation: false });
	}

	openCustomBackdropClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdropClass: 'bg-info' });
	}

	openCustomPanelClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { panelClass: 'bg-info' });
	}
}`},x=class u{offcanvasService=h(R);closeResult="";defaultOffcanvasCode;offcanvasOptionsCode;ngOnInit(){this.defaultOffcanvasCode=D,this.offcanvasOptionsCode=P}openBasicOffcanvas(e){this.offcanvasService.open(e,{ariaLabelledBy:"offcanvas-basic-title"}).result.then(f=>{this.closeResult=`Closed with: ${f}`},f=>{this.closeResult=`Dismissed ${this.getDismissReason(f)}`})}getDismissReason(e){switch(e){case O.ESC:return"by pressing ESC";case O.BACKDROP_CLICK:return"by clicking on the backdrop";default:return`with: ${e}`}}openEndOffcanvas(e){this.offcanvasService.open(e,{position:"end"})}openTopOffcanvas(e){this.offcanvasService.open(e,{position:"top"})}openBottomOffcanvas(e){this.offcanvasService.open(e,{position:"bottom"})}openNoBackdropOffcanvas(e){this.offcanvasService.open(e,{backdrop:!1})}openStaticBackdropOffcanvas(e){this.offcanvasService.open(e,{backdrop:"static"})}openScrollOffcanvas(e){this.offcanvasService.open(e,{scroll:!0})}openNoKeyboardOffcanvas(e){this.offcanvasService.open(e,{keyboard:!1})}openNoAnimationOffcanvas(e){this.offcanvasService.open(e,{animation:!1})}openCustomBackdropClassOffcanvas(e){this.offcanvasService.open(e,{backdropClass:"bg-info"})}openCustomPanelClassOffcanvas(e){this.offcanvasService.open(e,{panelClass:"bg-info"})}scrollTo(e){e.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(f){return new(f||u)};static \u0275cmp=S({type:u,selectors:[["app-offcanvas"]],standalone:!0,features:[w],decls:55,vars:3,consts:[["default",""],["content",""],["options",""],["content2",""],[1,"row"],[1,"col-xl-10","main-content","ps-xl-4","pe-xl-5"],[1,"page-title"],[1,"lead"],["href","https://ng-bootstrap.github.io/#/components/offcanvas/examples","target","_blank"],[1,"example"],[1,"btn","btn-outline-primary",3,"click"],[3,"codeContent"],[1,"btn","btn-lg","btn-outline-primary","mb-2","me-2",3,"click"],[1,"col-xl-2","content-nav-wrapper"],[1,"nav","content-nav","d-flex","flex-column"],[1,"nav-item"],[1,"nav-link",3,"click"],[1,"offcanvas-header"],["id","offcanvas-basic-title",1,"offcanvas-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"offcanvas-body"],[1,"text-end"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"offcanvas-title"]],template:function(f,s){if(f&1){let a=_();t(0,"div",4)(1,"div",5)(2,"h1",6),o(3,"Offcanvas"),n(),t(4,"p",7),o(5,"Build hidden sidebars into your project for navigation, shopping carts, and more. Read the "),t(6,"a",8),o(7,"Official Ng-Bootstrap Documentation"),n(),o(8," for a full list of instructions and other options."),n(),d(9,"hr"),t(10,"h4",null,0),o(12,"Basic example"),n(),t(13,"div",9),b(14,V,10,0,"ng-template",null,1,k),t(16,"button",10),r("click",function(){c(a);let i=p(15);return l(s.openBasicOffcanvas(i))}),o(17,"Launch demo offcanvas"),n(),b(18,B,3,1),n(),d(19,"app-code-preview",11)(20,"hr"),t(21,"h4",null,2),o(23,"Offcanvas options"),n(),t(24,"div",9),b(25,N,10,0,"ng-template",null,3,k),t(27,"button",12),r("click",function(){c(a);let i=p(26);return l(s.openEndOffcanvas(i))}),o(28,"Right position"),n(),t(29,"button",12),r("click",function(){c(a);let i=p(26);return l(s.openTopOffcanvas(i))}),o(30,"Top position"),n(),t(31,"button",12),r("click",function(){c(a);let i=p(26);return l(s.openBottomOffcanvas(i))}),o(32,"Bottom position"),n(),t(33,"button",12),r("click",function(){c(a);let i=p(26);return l(s.openNoBackdropOffcanvas(i))}),o(34,"No backdrop"),n(),t(35,"button",12),r("click",function(){c(a);let i=p(26);return l(s.openStaticBackdropOffcanvas(i))}),o(36,"Static backdrop"),n(),t(37,"button",12),r("click",function(){c(a);let i=p(26);return l(s.openScrollOffcanvas(i))}),o(38," Scrolling of main content enabled "),n(),t(39,"button",12),r("click",function(){c(a);let i=p(26);return l(s.openNoKeyboardOffcanvas(i))}),o(40," Escape does not dismiss "),n(),t(41,"button",12),r("click",function(){c(a);let i=p(26);return l(s.openNoAnimationOffcanvas(i))}),o(42,"No animation"),n(),t(43,"button",12),r("click",function(){c(a);let i=p(26);return l(s.openCustomBackdropClassOffcanvas(i))}),o(44," Custom backdrop class "),n(),t(45,"button",12),r("click",function(){c(a);let i=p(26);return l(s.openCustomPanelClassOffcanvas(i))}),o(46," Custom panel class "),n()(),d(47,"app-code-preview",11),n(),t(48,"div",13)(49,"ul",14)(50,"li",15)(51,"a",16),r("click",function(){c(a);let i=p(11);return l(s.scrollTo(i))}),o(52,"Basic example"),n(),t(53,"a",16),r("click",function(){c(a);let i=p(22);return l(s.scrollTo(i))}),o(54,"Offcanvas options"),n()()()()()}f&2&&(v(18),y(s.closeResult?18:-1),v(),C("codeContent",s.defaultOffcanvasCode),v(28),C("codeContent",s.offcanvasOptionsCode))},dependencies:[E],encapsulation:2})};export{x as OffcanvasComponent};
