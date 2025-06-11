import{a as N}from"./chunk-ZOI5QTSN.js";import"./chunk-3RAS5AEW.js";import{J as v,K as W,L as V,M as L,N as T}from"./chunk-5ZTN53S4.js";import"./chunk-VZNXAE5Z.js";import"./chunk-FHPH46MZ.js";import"./chunk-LVHII46P.js";import"./chunk-RD6NJ7NY.js";import{Bb as w,Ca as g,Da as p,Gb as o,Sb as i,Tb as t,Ub as u,Yb as h,dc as _,ec as z,kb as r,pc as S,qc as a,ra as f,rc as k,sc as y,uc as m,vc as d,wc as c,yc as E}from"./chunk-3TFDHLSU.js";import"./chunk-GAL4ENT6.js";function A(C,P){C&1&&a(0,"Prev")}function B(C,P){C&1&&a(0,"Next")}function M(C,P){if(C&1&&a(0),C&2){let b=P.$implicit,n=z();k(n.getPageSymbol(b))}}var R={htmlCode:`<p class="mb-2">Default pagination:</p>
<ngb-pagination [collectionSize]="70" [(page)]="currentPage" aria-label="Default pagination"></ngb-pagination>

<p class="mb-2">No direction links:</p>
<ngb-pagination [collectionSize]="70" [(page)]="currentPage" [directionLinks]="false"></ngb-pagination>

<p class="mb-2">With boundary links:</p>
<ngb-pagination [collectionSize]="70" [(page)]="currentPage" [boundaryLinks]="true"></ngb-pagination>

<hr>

<p>Current page: {{currentPage}}</p>`,tsCode:`import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgbPaginationModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;
}`},D={htmlCode:`<p class="mb-2">Restricted size, no rotation:</p>
<ngb-pagination [collectionSize]="120" [(page)]="currentPage" [maxSize]="5" [boundaryLinks]="true"></ngb-pagination>

<p class="mb-2">Restricted size with rotation:</p>
<ngb-pagination [collectionSize]="120" [(page)]="currentPage" [maxSize]="5" [rotate]="true" [boundaryLinks]="true"></ngb-pagination>

<p class="mb-2">Restricted size with rotation and no ellipses:</p>
<ngb-pagination [collectionSize]="120" [(page)]="currentPage" [maxSize]="5" [rotate]="true" [ellipses]="false" [boundaryLinks]="true"></ngb-pagination>

<hr>

<p>Current page: {{currentPage}}</p>`,tsCode:`import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgbPaginationModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;
}`},I={htmlCode:`<ngb-pagination [collectionSize]="70" [(page)]="currentPage" aria-label="Custom pagination">
  <ng-template ngbPaginationPrevious>Prev</ng-template>
  <ng-template ngbPaginationNext>Next</ng-template>
  <ng-template ngbPaginationNumber let-p>{{ getPageSymbol(p) }}</ng-template>
</ngb-pagination>
<hr>

<p>Current page: {{currentPage}}</p>`,tsCode:`import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgbPaginationModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }
}`},U={htmlCode:`<ngb-pagination [collectionSize]="50" [(page)]="currentPage" size="lg"></ngb-pagination>
<ngb-pagination [collectionSize]="50" [(page)]="currentPage"></ngb-pagination>
<ngb-pagination [collectionSize]="50" [(page)]="currentPage" size="sm"></ngb-pagination>`,tsCode:`import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgbPaginationModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;
}`},j={htmlCode:`<ngb-pagination class="d-flex justify-content-start" [collectionSize]="70" [(page)]="currentPage"></ngb-pagination>
<ngb-pagination class="d-flex justify-content-center" [collectionSize]="70" [(page)]="currentPage"></ngb-pagination>
<ngb-pagination class="d-flex justify-content-end" [collectionSize]="70" [(page)]="currentPage"></ngb-pagination>`,tsCode:`import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgbPaginationModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;
}`},F={htmlCode:'<ngb-pagination class="pagination-separated" [collectionSize]="70" [(page)]="currentPage"></ngb-pagination>',tsCode:`import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgbPaginationModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;
}`},G={htmlCode:'<ngb-pagination class="pagination-rounded" [collectionSize]="70" [(page)]="currentPage"></ngb-pagination>',tsCode:`import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgbPaginationModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;
}`},x=class C{defaultPaginationCurrentPage=1;advancedPaginationCurrentPage=2;customLinksPaginationCurrentPage=3;paginationSizeCurrentPage=4;paginationAlignmentCurrentPage=2;paginationSeparatedCurrentPage=3;paginationRoundedCurrentPage=4;defaultPaginationCode;advancedPaginationCode;customLinksPaginationCode;paginationSizeCode;paginationAlignmentCode;paginationSeparatedCode;paginationRoundedCode;constructor(){}ngOnInit(){this.defaultPaginationCode=R,this.advancedPaginationCode=D,this.customLinksPaginationCode=I,this.paginationSizeCode=U,this.paginationAlignmentCode=j,this.paginationSeparatedCode=F,this.paginationRoundedCode=G}getPageSymbol(P){return["A","B","C","D","E","F","G"][P-1]}scrollTo(P){P.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(b){return new(b||C)};static \u0275cmp=f({type:C,selectors:[["app-pagination"]],standalone:!0,features:[E],decls:127,vars:51,consts:[["default",""],["advanced",""],["customLinks",""],["sizing",""],["alignment",""],["seperated",""],["rounded",""],[1,"row"],[1,"col-xl-10","main-content","ps-xl-4","pe-xl-5"],[1,"page-title"],[1,"lead"],["href","https://ng-bootstrap.github.io/#/components/pagination/examples","target","_blank"],[1,"mb-3"],[1,"example"],[1,"mb-2"],["aria-label","Default pagination",3,"pageChange","collectionSize","page"],[3,"pageChange","collectionSize","page","directionLinks"],[3,"pageChange","collectionSize","page","boundaryLinks"],[3,"codeContent"],[3,"pageChange","collectionSize","page","maxSize","boundaryLinks"],[3,"pageChange","collectionSize","page","maxSize","rotate","boundaryLinks"],[3,"pageChange","collectionSize","page","maxSize","rotate","ellipses","boundaryLinks"],["aria-label","Custom pagination",3,"pageChange","collectionSize","page"],["ngbPaginationPrevious",""],["ngbPaginationNext",""],["ngbPaginationNumber",""],["size","lg",3,"pageChange","collectionSize","page"],[3,"pageChange","collectionSize","page"],["size","sm",3,"pageChange","collectionSize","page"],[1,"d-flex","justify-content-start",3,"pageChange","collectionSize","page"],[1,"d-flex","justify-content-center",3,"pageChange","collectionSize","page"],[1,"d-flex","justify-content-end",3,"pageChange","collectionSize","page"],[1,"pagination-separated",3,"pageChange","collectionSize","page"],[1,"pagination-rounded",3,"pageChange","collectionSize","page"],[1,"col-xl-2","content-nav-wrapper"],[1,"nav","content-nav","d-flex","flex-column"],[1,"nav-item"],[1,"nav-link",3,"click"]],template:function(b,n){if(b&1){let l=h();i(0,"div",7)(1,"div",8)(2,"h1",9),a(3,"Pagination"),t(),i(4,"p",10),a(5,"To indicate a series of related content exists across multiple pages. Read the "),i(6,"a",11),a(7,"Official Ng-Bootstrap Documentation"),t(),a(8," for a full list of instructions and other options."),t(),u(9,"hr"),i(10,"h4",null,0),a(12,"Basic example"),t(),i(13,"p",12),a(14,"Pagination is built with list HTML elements so screen readers can announce the number of available links."),t(),i(15,"div",13)(16,"p",14),a(17,"Default pagination:"),t(),i(18,"ngb-pagination",15),c("pageChange",function(e){return g(l),d(n.defaultPaginationCurrentPage,e)||(n.defaultPaginationCurrentPage=e),p(e)}),t(),i(19,"p",14),a(20,"No direction links:"),t(),i(21,"ngb-pagination",16),c("pageChange",function(e){return g(l),d(n.defaultPaginationCurrentPage,e)||(n.defaultPaginationCurrentPage=e),p(e)}),t(),i(22,"p",14),a(23,"With boundary links:"),t(),i(24,"ngb-pagination",17),c("pageChange",function(e){return g(l),d(n.defaultPaginationCurrentPage,e)||(n.defaultPaginationCurrentPage=e),p(e)}),t(),u(25,"hr"),i(26,"p"),a(27),t()(),u(28,"app-code-preview",18)(29,"hr"),i(30,"h4",null,1),a(32,"Advanced example"),t(),i(33,"div",13)(34,"p",14),a(35,"Restricted size, no rotation:"),t(),i(36,"ngb-pagination",19),c("pageChange",function(e){return g(l),d(n.advancedPaginationCurrentPage,e)||(n.advancedPaginationCurrentPage=e),p(e)}),t(),i(37,"p",14),a(38,"Restricted size with rotation:"),t(),i(39,"ngb-pagination",20),c("pageChange",function(e){return g(l),d(n.advancedPaginationCurrentPage,e)||(n.advancedPaginationCurrentPage=e),p(e)}),t(),i(40,"p",14),a(41,"Restricted size with rotation and no ellipses:"),t(),i(42,"ngb-pagination",21),c("pageChange",function(e){return g(l),d(n.advancedPaginationCurrentPage,e)||(n.advancedPaginationCurrentPage=e),p(e)}),t(),u(43,"hr"),i(44,"p"),a(45),t()(),u(46,"app-code-preview",18)(47,"hr"),i(48,"h4",null,2),a(50,"Custom links"),t(),i(51,"div",13)(52,"ngb-pagination",22),c("pageChange",function(e){return g(l),d(n.customLinksPaginationCurrentPage,e)||(n.customLinksPaginationCurrentPage=e),p(e)}),w(53,A,1,0,"ng-template",23)(54,B,1,0,"ng-template",24)(55,M,1,1,"ng-template",25),t(),u(56,"hr"),i(57,"p"),a(58),t()(),u(59,"app-code-preview",18)(60,"hr"),i(61,"h4",null,3),a(63,"Sizing"),t(),i(64,"div",13)(65,"ngb-pagination",26),c("pageChange",function(e){return g(l),d(n.paginationSizeCurrentPage,e)||(n.paginationSizeCurrentPage=e),p(e)}),t(),i(66,"ngb-pagination",27),c("pageChange",function(e){return g(l),d(n.paginationSizeCurrentPage,e)||(n.paginationSizeCurrentPage=e),p(e)}),t(),i(67,"ngb-pagination",28),c("pageChange",function(e){return g(l),d(n.paginationSizeCurrentPage,e)||(n.paginationSizeCurrentPage=e),p(e)}),t()(),u(68,"app-code-preview",18)(69,"hr"),i(70,"h4",null,4),a(72,"Alignment"),t(),i(73,"p",12),a(74,"Change the alignment of pagination components with flexbox utilities."),t(),i(75,"div",13)(76,"ngb-pagination",29),c("pageChange",function(e){return g(l),d(n.paginationAlignmentCurrentPage,e)||(n.paginationAlignmentCurrentPage=e),p(e)}),t(),i(77,"ngb-pagination",30),c("pageChange",function(e){return g(l),d(n.paginationAlignmentCurrentPage,e)||(n.paginationAlignmentCurrentPage=e),p(e)}),t(),i(78,"ngb-pagination",31),c("pageChange",function(e){return g(l),d(n.paginationAlignmentCurrentPage,e)||(n.paginationAlignmentCurrentPage=e),p(e)}),t()(),u(79,"app-code-preview",18)(80,"hr"),i(81,"h4",null,5),a(83,"Sperated"),t(),i(84,"p",12),a(85,"Add calss "),i(86,"code"),a(87,".pagination-separated"),t(),a(88,"."),t(),i(89,"div",13)(90,"ngb-pagination",32),c("pageChange",function(e){return g(l),d(n.paginationSeparatedCurrentPage,e)||(n.paginationSeparatedCurrentPage=e),p(e)}),t()(),u(91,"app-code-preview",18)(92,"hr"),i(93,"h4",null,6),a(95,"Rounded"),t(),i(96,"p",12),a(97,"Add calss "),i(98,"code"),a(99,".pagination-rounded"),t(),a(100,"."),t(),i(101,"div",13)(102,"ngb-pagination",33),c("pageChange",function(e){return g(l),d(n.paginationRoundedCurrentPage,e)||(n.paginationRoundedCurrentPage=e),p(e)}),t()(),u(103,"app-code-preview",18),t(),i(104,"div",34)(105,"ul",35)(106,"li",36)(107,"a",37),_("click",function(){g(l);let e=S(11);return p(n.scrollTo(e))}),a(108,"Basic example"),t()(),i(109,"li",36)(110,"a",37),_("click",function(){g(l);let e=S(31);return p(n.scrollTo(e))}),a(111,"Advanced example"),t()(),i(112,"li",36)(113,"a",37),_("click",function(){g(l);let e=S(49);return p(n.scrollTo(e))}),a(114,"Custom links"),t()(),i(115,"li",36)(116,"a",37),_("click",function(){g(l);let e=S(62);return p(n.scrollTo(e))}),a(117,"Sizing"),t()(),i(118,"li",36)(119,"a",37),_("click",function(){g(l);let e=S(71);return p(n.scrollTo(e))}),a(120,"Alignment"),t()(),i(121,"li",36)(122,"a",37),_("click",function(){g(l);let e=S(82);return p(n.scrollTo(e))}),a(123,"Seperated"),t()(),i(124,"li",36)(125,"a",37),_("click",function(){g(l);let e=S(94);return p(n.scrollTo(e))}),a(126,"Rounded"),t()()()()()}b&2&&(r(18),o("collectionSize",70),m("page",n.defaultPaginationCurrentPage),r(3),o("collectionSize",70),m("page",n.defaultPaginationCurrentPage),o("directionLinks",!1),r(3),o("collectionSize",70),m("page",n.defaultPaginationCurrentPage),o("boundaryLinks",!0),r(3),y("Current page: ",n.defaultPaginationCurrentPage,""),r(),o("codeContent",n.defaultPaginationCode),r(8),o("collectionSize",120),m("page",n.advancedPaginationCurrentPage),o("maxSize",5)("boundaryLinks",!0),r(3),o("collectionSize",120),m("page",n.advancedPaginationCurrentPage),o("maxSize",5)("rotate",!0)("boundaryLinks",!0),r(3),o("collectionSize",120),m("page",n.advancedPaginationCurrentPage),o("maxSize",5)("rotate",!0)("ellipses",!1)("boundaryLinks",!0),r(3),y("Current page: ",n.advancedPaginationCurrentPage,""),r(),o("codeContent",n.advancedPaginationCode),r(6),o("collectionSize",70),m("page",n.customLinksPaginationCurrentPage),r(6),y("Current page: ",n.customLinksPaginationCurrentPage,""),r(),o("codeContent",n.customLinksPaginationCode),r(6),o("collectionSize",50),m("page",n.paginationSizeCurrentPage),r(),o("collectionSize",50),m("page",n.paginationSizeCurrentPage),r(),o("collectionSize",50),m("page",n.paginationSizeCurrentPage),r(),o("codeContent",n.paginationSizeCode),r(8),o("collectionSize",70),m("page",n.paginationAlignmentCurrentPage),r(),o("collectionSize",70),m("page",n.paginationAlignmentCurrentPage),r(),o("collectionSize",70),m("page",n.paginationAlignmentCurrentPage),r(),o("codeContent",n.paginationAlignmentCode),r(11),o("collectionSize",70),m("page",n.paginationSeparatedCurrentPage),r(),o("codeContent",n.paginationSeparatedCode),r(11),o("collectionSize",70),m("page",n.paginationRoundedCurrentPage),r(),o("codeContent",n.paginationRoundedCode))},dependencies:[N,T,L,v,W,V],encapsulation:2})};export{x as PaginationComponent};
