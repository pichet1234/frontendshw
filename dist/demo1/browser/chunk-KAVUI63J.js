import{a as j}from"./chunk-ZOI5QTSN.js";import"./chunk-3RAS5AEW.js";import{k,l as T,m as I}from"./chunk-5ZTN53S4.js";import"./chunk-VZNXAE5Z.js";import"./chunk-FHPH46MZ.js";import"./chunk-LVHII46P.js";import"./chunk-RD6NJ7NY.js";import{Bb as d,Ca as u,Da as C,Gb as r,Nb as h,Ob as w,Qb as x,Rb as b,Sb as t,Tb as e,Ub as m,Yb as y,dc as _,ec as c,fb as g,kb as a,pc as f,qc as o,ra as E,yc as N}from"./chunk-3TFDHLSU.js";import"./chunk-GAL4ENT6.js";function M(i,l){if(i&1&&(t(0,"div",21),m(1,"img",22),e()),i&2){let n=c().$implicit;a(),r("src",n,g)}}function F(i,l){i&1&&d(0,M,2,1,"ng-template",20)}function R(i,l){if(i&1&&(t(0,"ngb-carousel",12),x(1,F,1,0,null,20,w),e()),i&2){let n=c();r("showNavigationArrows",!1)("showNavigationIndicators",!1),a(),b(n.images)}}function U(i,l){if(i&1&&(t(0,"div",21),m(1,"img",22),e()),i&2){let n=c().$implicit;a(),r("src",n,g)}}function V(i,l){i&1&&d(0,U,2,1,"ng-template",20)}function O(i,l){if(i&1&&(t(0,"ngb-carousel",12),x(1,V,1,0,null,20,w),e()),i&2){let n=c();r("showNavigationArrows",!0)("showNavigationIndicators",!1),a(),b(n.images)}}function z(i,l){if(i&1&&(t(0,"div",21),m(1,"img",22),e()),i&2){let n=c().$implicit;a(),r("src",n,g)}}function W(i,l){i&1&&d(0,z,2,1,"ng-template",20)}function B(i,l){if(i&1&&(t(0,"ngb-carousel",12),x(1,W,1,0,null,20,w),e()),i&2){let n=c();r("showNavigationArrows",!0)("showNavigationIndicators",!0),a(),b(n.images)}}function D(i,l){if(i&1&&(t(0,"div",21),m(1,"img",23),e(),t(2,"div",24)(3,"h5"),o(4,"First slide label"),e(),t(5,"p"),o(6,"Nulla vitae elit libero, a pharetra augue mollis interdum."),e()()),i&2){let n=c(2);a(),r("src",n.images[0],g)}}function P(i,l){if(i&1&&(t(0,"div",21),m(1,"img",25),e(),t(2,"div",24)(3,"h5"),o(4,"Second slide label"),e(),t(5,"p"),o(6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),e()()),i&2){let n=c(2);a(),r("src",n.images[1],g)}}function $(i,l){if(i&1&&(t(0,"div",21),m(1,"img",26),e(),t(2,"div",24)(3,"h5"),o(4,"Third slide label"),e(),t(5,"p"),o(6,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."),e()()),i&2){let n=c(2);a(),r("src",n.images[2],g)}}function q(i,l){i&1&&(t(0,"ngb-carousel",12),d(1,D,7,1,"ng-template",20)(2,P,7,1,"ng-template",20)(3,$,7,1,"ng-template",20),e()),i&2&&r("showNavigationArrows",!0)("showNavigationIndicators",!0)}function L(i,l){if(i&1&&(t(0,"div",21),m(1,"img",22),e()),i&2){let n=c().$implicit;a(),r("src",n,g)}}function H(i,l){i&1&&d(0,L,2,1,"ng-template",20)}function Y(i,l){if(i&1&&(t(0,"ngb-carousel",15),x(1,H,1,0,null,20,w),e()),i&2){let n=c();r("showNavigationArrows",!0)("showNavigationIndicators",!0),a(),b(n.images)}}var G={htmlCode:`@if (images) {
  <ngb-carousel [showNavigationArrows]="false" [showNavigationIndicators]="false">
    @for (image of images; track image) {
      <ng-template ngbSlide>
        <div class="picsum-img-wrapper">
          <img [src]="image" class="d-block w-100" alt="Random slide">
        </div>
      </ng-template>
    }
  </ngb-carousel>
}`,tsCode:`import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule]
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  images = ['images/others/placeholder.jpg', 'images/others/placeholder.jpg', 'images/others/placeholder.jpg'];
}`},J={htmlCode:`@if (images) {
  <ngb-carousel [showNavigationArrows]="true" [showNavigationIndicators]="false">
    @for (image of images; track image) {
      <ng-template ngbSlide>
        <div class="picsum-img-wrapper">
          <img [src]="image" class="d-block w-100" alt="Random slide">
        </div>
      </ng-template>
    }
  </ngb-carousel>
}`,tsCode:`import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule]
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  images = ['images/others/placeholder.jpg', 'images/others/placeholder.jpg', 'images/others/placeholder.jpg'];
}`},K={htmlCode:`@if (images) {
  <ngb-carousel [showNavigationArrows]="true" [showNavigationIndicators]="true">
    @for (image of images; track image) {
      <ng-template ngbSlide>
        <div class="picsum-img-wrapper">
          <img [src]="image" class="d-block w-100" alt="Random slide">
        </div>
      </ng-template>
    }
  </ngb-carousel>
}`,tsCode:`import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule]
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  images = ['images/others/placeholder.jpg', 'images/others/placeholder.jpg', 'images/others/placeholder.jpg'];
}`},Q={htmlCode:`@if (images) {
  <ngb-carousel [showNavigationArrows]="true" [showNavigationIndicators]="true">
    <ng-template ngbSlide>
      <div class="picsum-img-wrapper">
        <img [src]="images[0]" class="d-block w-100" alt="Random first slide">
      </div>
      <div class="carousel-caption">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="picsum-img-wrapper">
        <img [src]="images[1]" class="d-block w-100" alt="Random second slide">
      </div>
      <div class="carousel-caption">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <div class="picsum-img-wrapper">
        <img [src]="images[2]" class="d-block w-100" alt="Random third slide">
      </div>
      <div class="carousel-caption">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </ng-template>
  </ngb-carousel>
}`,tsCode:`import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule]
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  images = ['images/others/placeholder.jpg', 'images/others/placeholder.jpg', 'images/others/placeholder.jpg'];
}`},X={htmlCode:`@if (images) {
  <ngb-carousel class="carousel-fade" [showNavigationArrows]="true" [showNavigationIndicators]="true">
    @for (image of images; track image) {
      <ng-template ngbSlide>
        <div class="picsum-img-wrapper">
          <img [src]="image" class="d-block w-100" alt="Random slide">
        </div>
      </ng-template>
    }
  </ngb-carousel>
}`,tsCode:`import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule]
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  images = ['images/others/placeholder.jpg', 'images/others/placeholder.jpg', 'images/others/placeholder.jpg'];
}`},A=class i{images=["images/others/placeholder.jpg","images/others/placeholder.jpg","images/others/placeholder.jpg"];slidesOnlyCode;widthControlsCode;widthIndicatorsCode;widthCaptionsCode;crossfadeCarouselCode;constructor(){}ngOnInit(){this.slidesOnlyCode=G,this.widthControlsCode=J,this.widthIndicatorsCode=K,this.widthCaptionsCode=Q,this.crossfadeCarouselCode=X}scrollTo(l){l.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=E({type:i,selectors:[["app-carousel"]],standalone:!0,features:[N],decls:98,vars:10,consts:[["slidesOnly",""],["withControls",""],["withIndicators",""],["withCaptions",""],["crossfade",""],[1,"row"],[1,"col-xl-10","main-content","ps-xl-4","pe-xl-5"],[1,"page-title"],[1,"lead"],["href","https://ng-bootstrap.github.io/#/components/carousel/examples","target","_blank"],[1,"mb-3"],[1,"example"],[3,"showNavigationArrows","showNavigationIndicators"],[3,"codeContent"],["href","https://getbootstrap.com/docs/5.3/utilities/display/","target","_blank"],[1,"carousel-fade",3,"showNavigationArrows","showNavigationIndicators"],[1,"col-xl-2","content-nav-wrapper"],[1,"nav","content-nav","d-flex","flex-column"],[1,"nav-item"],[1,"nav-link",3,"click"],["ngbSlide",""],[1,"picsum-img-wrapper"],["alt","Random slide",1,"d-block","w-100",3,"src"],["alt","Random first slide",1,"d-block","w-100",3,"src"],[1,"carousel-caption"],["alt","Random second slide",1,"d-block","w-100",3,"src"],["alt","Random third slide",1,"d-block","w-100",3,"src"]],template:function(n,s){if(n&1){let v=y();t(0,"div",5)(1,"div",6)(2,"h1",7),o(3,"Carousel"),e(),t(4,"p",8),o(5,"A slideshow component for cycling through elements\u2014images or slides of text\u2014like a carousel. Read the "),t(6,"a",9),o(7,"Official Ng-Bootstrap Documentation"),e(),o(8," for a full list of instructions and other options."),e(),m(9,"hr"),t(10,"h4",null,0),o(12,"Slides only"),e(),t(13,"p",10),o(14,"Here\u2019s a carousel with slides only. Note the presence of the "),t(15,"code"),o(16,".d-block"),e(),o(17," and "),t(18,"code"),o(19,".w-100"),e(),o(20," on carousel images to prevent browser default image alignment."),e(),t(21,"div",11),d(22,R,3,2,"ngb-carousel",12),e(),m(23,"app-code-preview",13)(24,"hr"),t(25,"h4",null,1),o(27,"With controls"),e(),t(28,"p",10),o(29,"Adding in the previous and next controls:"),e(),t(30,"div",11),d(31,O,3,2,"ngb-carousel",12),e(),m(32,"app-code-preview",13)(33,"hr"),t(34,"h4",null,2),o(36,"With indicators"),e(),t(37,"p",10),o(38,"You can also add the indicators to the carousel, alongside the controls, too."),e(),t(39,"div",11),d(40,B,3,2,"ngb-carousel",12),e(),m(41,"app-code-preview",13)(42,"hr"),t(43,"h4",null,3),o(45,"With captions"),e(),t(46,"p",10),o(47,"Add captions to your slides easily with the "),t(48,"code"),o(49,".carousel-caption"),e(),o(50," element within any "),t(51,"code"),o(52,".carousel-item"),e(),o(53,". They can be easily hidden on smaller viewports, as shown below, with optional "),t(54,"a",14),o(55,"display utilities"),e(),o(56,". We hide them initially with "),t(57,"code"),o(58,".d-none"),e(),o(59," and bring them back on medium-sized devices with "),t(60,"code"),o(61,".d-md-block"),e(),o(62,"."),e(),t(63,"div",11),d(64,q,4,2,"ngb-carousel",12),e(),m(65,"app-code-preview",13)(66,"hr"),t(67,"h4",null,4),o(69,"Crossfade"),e(),t(70,"p",10),o(71,"Add "),t(72,"code"),o(73,".carousel-fade"),e(),o(74," class to your "),t(75,"code"),o(76,"ngb-carousel"),e(),o(77," to animate slides with a fade transition instead of a slide."),e(),t(78,"div",11),d(79,Y,3,2,"ngb-carousel",15),e(),m(80,"app-code-preview",13),e(),t(81,"div",16)(82,"ul",17)(83,"li",18)(84,"a",19),_("click",function(){u(v);let p=f(11);return C(s.scrollTo(p))}),o(85,"Slides only"),e()(),t(86,"li",18)(87,"a",19),_("click",function(){u(v);let p=f(26);return C(s.scrollTo(p))}),o(88,"With controls"),e()(),t(89,"li",18)(90,"a",19),_("click",function(){u(v);let p=f(35);return C(s.scrollTo(p))}),o(91,"With indicators"),e()(),t(92,"li",18)(93,"a",19),_("click",function(){u(v);let p=f(44);return C(s.scrollTo(p))}),o(94,"With captions"),e()(),t(95,"li",18)(96,"a",19),_("click",function(){u(v);let p=f(68);return C(s.scrollTo(p))}),o(97,"Crossfade"),e()()()()()}n&2&&(a(22),h(s.images?22:-1),a(),r("codeContent",s.slidesOnlyCode),a(8),h(s.images?31:-1),a(),r("codeContent",s.widthControlsCode),a(8),h(s.images?40:-1),a(),r("codeContent",s.widthIndicatorsCode),a(23),h(s.images?64:-1),a(),r("codeContent",s.widthCaptionsCode),a(14),h(s.images?79:-1),a(),r("codeContent",s.crossfadeCarouselCode))},dependencies:[j,I,T,k],encapsulation:2})};export{A as CarouselComponent};
