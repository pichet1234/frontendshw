import{a as A}from"./chunk-ZOI5QTSN.js";import"./chunk-3RAS5AEW.js";import{u as R,w as I,x as N,y as W,z as L}from"./chunk-5ZTN53S4.js";import"./chunk-VZNXAE5Z.js";import{B as T,b as B,d as G,g as M,l as V,o as D}from"./chunk-FHPH46MZ.js";import"./chunk-LVHII46P.js";import{v as E}from"./chunk-RD6NJ7NY.js";import{Ca as r,Da as l,Gb as m,Hc as k,Ic as _,Sb as n,Tb as t,Ub as b,Yb as w,dc as d,kb as u,pc as s,qc as e,ra as v,rc as x,uc as c,vc as g,wc as h,yc as S}from"./chunk-3TFDHLSU.js";import"./chunk-GAL4ENT6.js";var z={htmlCode:`<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>`,tsCode:`import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group',
  standalone: true,
  templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent {}`},P={htmlCode:`<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" [(ngModel)]="modelCheckbox.left" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck1">Left (pre-checked)</label>

  <input type="checkbox" [(ngModel)]="modelCheckbox.middle" class="btn-check" id="btncheck2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck2">Middle</label>

  <input type="checkbox" [(ngModel)]="modelCheckbox.right" class="btn-check" id="btncheck3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck3">Right</label>
</div>`,tsCode:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [formsModule],
  templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent {
  modelCheckbox = {
    left: true,
    middle: false,
    right: false
  };
}`},U={htmlCode:`<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio"  class="btn-check" [(ngModel)]="modelRadio" [value]="1" name="btnradio" id="btnradio1" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio1">Left (pre-checked)</label>

  <input type="radio" class="btn-check" [(ngModel)]="modelRadio" [value]="'middle'" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">Middle</label>

  <input type="radio" class="btn-check" [(ngModel)]="modelRadio" [value]="false" name="btnradio" id="btnradio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio3">Right</label>
</div>`,tsCode:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [formsModule],
  templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent {
  modelRadio = 1;
}`},j={htmlCode:`<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
  </div>
  <div class="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-primary">5</button>
    <button type="button" class="btn btn-primary">6</button>
    <button type="button" class="btn btn-primary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-primary">8</button>
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group',
  standalone: true,
  templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent {}`},O={htmlCode:`<div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
     ..
  </div>
  <div class="input-group">
    <div class="input-group-prepend">
      <div class="input-group-text" id="btnGroupAddon">@</div>
    </div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon">
  </div>
</div>
<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
     ...
  </div>
  <div class="input-group">
    <div class="input-group-prepend">
      <div class="input-group-text" id="btnGroupAddon2">@</div>
    </div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2">
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group',
  standalone: true,
  templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent {}`},J={htmlCode:`<div class="btn-group btn-group-lg me-2" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
<div class="btn-group me-2" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>`,tsCode:`import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group',
  standalone: true,
  templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent {}`},q={htmlCode:`<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn btn-primary">1</button>
  <button type="button" class="btn btn-primary">2</button>

  <div class="btn-group" role="group" ngbDropdown>
    <button id="btnGroupDrop1" type="button" ngbDropdownToggle class="btn btn-primary">
      Dropdown
    </button>
    <div ngbDropdownMenu aria-labelledby="btnGroupDrop1">
      <a ngbDropdownItem href="" (click)="false">Dropdown link</a>
      <a ngbDropdownItem href="" (click)="false">Dropdown link</a>
    </div>
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent {}`},H={htmlCode:`<div class="btn-group-vertical">
  <button type="button" class="btn btn-secondary">Button</button>
  ...
  ...
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [NgbDropdownModule]
  templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent {}`},F=class C{modelCheckbox={left:!0,middle:!1,right:!1};modelRadio=1;defaultButtonGroupCode;checkboxGroupCode;radioGroupCode;buttonToolbarCode;mixedToolbarCode;buttonGroupSizingCode;buttonGroupNestingCode;verticalVariationCode;constructor(){}ngOnInit(){this.defaultButtonGroupCode=z,this.checkboxGroupCode=P,this.radioGroupCode=U,this.buttonToolbarCode=j,this.mixedToolbarCode=O,this.buttonGroupSizingCode=J,this.buttonGroupNestingCode=q,this.verticalVariationCode=H}scrollTo(y){y.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(f){return new(f||C)};static \u0275cmp=v({type:C,selectors:[["app-button-group"]],standalone:!0,features:[S],decls:270,vars:21,consts:[["default",""],["checkboxRadio",""],["toolbar",""],["sizing",""],["nesting",""],["vertical",""],[1,"row"],[1,"col-xl-10","main-content","ps-xl-4","pe-xl-5"],[1,"page-title"],[1,"lead"],["href","https://getbootstrap.com/docs/5.3/components/button-group/","target","_blank"],[1,"mb-3"],[1,"example"],["role","group","aria-label","Basic example",1,"btn-group"],["type","button",1,"btn","btn-primary"],[3,"codeContent"],["href","https://getbootstrap.com/docs/5.3/forms/checks-radios/","target","_blank"],["href","https://ng-bootstrap.github.io/#/components/buttons/examples","target","_blank"],["role","group","aria-label","Basic checkbox toggle button group",1,"btn-group"],["type","checkbox","id","btncheck1","autocomplete","off",1,"btn-check",3,"ngModelChange","ngModel"],["for","btncheck1",1,"btn","btn-outline-primary"],["type","checkbox","id","btncheck2","autocomplete","off",1,"btn-check",3,"ngModelChange","ngModel"],["for","btncheck2",1,"btn","btn-outline-primary"],["type","checkbox","id","btncheck3","autocomplete","off",1,"btn-check",3,"ngModelChange","ngModel"],["for","btncheck3",1,"btn","btn-outline-primary"],["role","group","aria-label","Basic radio toggle button group",1,"btn-group"],["type","radio","name","btnradio","id","btnradio1","autocomplete","off",1,"btn-check",3,"ngModelChange","ngModel","value"],["for","btnradio1",1,"btn","btn-outline-primary"],["type","radio","name","btnradio","id","btnradio2","autocomplete","off",1,"btn-check",3,"ngModelChange","ngModel","value"],["for","btnradio2",1,"btn","btn-outline-primary"],["type","radio","name","btnradio","id","btnradio3","autocomplete","off",1,"btn-check",3,"ngModelChange","ngModel","value"],["for","btnradio3",1,"btn","btn-outline-primary"],["role","toolbar","aria-label","Toolbar with button groups",1,"btn-toolbar"],["role","group","aria-label","First group",1,"btn-group","me-2","mb-1","mb-md-0"],["role","group","aria-label","Second group",1,"btn-group","me-2","mb-1","mb-md-0"],["role","group","aria-label","Third group",1,"btn-group","mb-1","mb-md-0"],["role","toolbar","aria-label","Toolbar with button groups",1,"btn-toolbar","mb-3"],[1,"input-group"],[1,"input-group-prepend"],["id","btnGroupAddon",1,"input-group-text"],["type","text","placeholder","Input group example","aria-label","Input group example","aria-describedby","btnGroupAddon",1,"form-control"],["role","toolbar","aria-label","Toolbar with button groups",1,"btn-toolbar","justify-content-between"],["role","group","aria-label","First group",1,"btn-group","mb-1","mb-md-0"],["id","btnGroupAddon2",1,"input-group-text"],["type","text","placeholder","Input group example","aria-label","Input group example","aria-describedby","btnGroupAddon2",1,"form-control"],["role","group","aria-label","Basic example",1,"btn-group","btn-group-lg","mb-1","mb-md-0","me-2"],["role","group","aria-label","Basic example",1,"btn-group","mb-1","mb-md-0","me-2"],["role","group","aria-label","Basic example",1,"btn-group","btn-group-sm","mb-1","mb-md-0"],["role","group","aria-label","Button group with nested dropdown",1,"btn-group"],["role","group","ngbDropdown","",1,"btn-group"],["id","btnGroupDrop1","type","button","ngbDropdownToggle","",1,"btn","btn-primary"],["ngbDropdownMenu","","aria-labelledby","btnGroupDrop1"],["ngbDropdownItem","","href","",3,"click"],["role","group","aria-label","Vertical button group",1,"btn-group-vertical","me-1"],["role","group","aria-label","Vertical button group",1,"btn-group-vertical"],["type","button",1,"btn","btn-secondary"],["id","btnGroupVerticalDrop1","type","button","ngbDropdownToggle","",1,"btn","btn-secondary"],["ngbDropdownMenu","","aria-labelledby","btnGroupVerticalDrop1"],["id","btnGroupVerticalDrop3","type","button","ngbDropdownToggle","",1,"btn","btn-secondary"],["ngbDropdownMenu","","aria-labelledby","btnGroupVerticalDrop3"],["id","btnGroupVerticalDrop4","type","button","ngbDropdownToggle","",1,"btn","btn-secondary"],["ngbDropdownMenu","","aria-labelledby","btnGroupVerticalDrop4"],[1,"col-xl-2","content-nav-wrapper"],[1,"nav","content-nav","d-flex","flex-column"],[1,"nav-item"],[1,"nav-link",3,"click"]],template:function(f,i){if(f&1){let a=w();n(0,"div",6)(1,"div",7)(2,"h1",8),e(3,"Button group"),t(),n(4,"p",9),e(5,"Group a series of buttons together on a single line or stack them in a vertical column. Read the "),n(6,"a",10),e(7,"Official Bootstrap Documentation"),t(),e(8," for a full list of instructions and other options."),t(),b(9,"hr"),n(10,"h4",null,0),e(12,"Basic example"),t(),n(13,"p",11),e(14,"Wrap a series of buttons with "),n(15,"code"),e(16,".btn"),t(),e(17," in "),n(18,"code"),e(19,".btn-group"),t(),e(20,"."),t(),n(21,"div",12)(22,"div",13)(23,"button",14),e(24,"Left"),t(),n(25,"button",14),e(26,"Middle"),t(),n(27,"button",14),e(28,"Right"),t()()(),b(29,"app-code-preview",15)(30,"hr"),n(31,"h4",null,1),e(33,"Checkbox and radio button groups."),t(),n(34,"p",11),e(35,"Combine button-like checkbox and radio "),n(36,"a",16),e(37,"toggle buttons"),t(),e(38," into a seamless looking button group. "),n(39,"a",17),e(40,"more examples"),t(),e(41,"."),t(),n(42,"div",12)(43,"div",18)(44,"input",19),h("ngModelChange",function(o){return r(a),g(i.modelCheckbox.left,o)||(i.modelCheckbox.left=o),l(o)}),t(),n(45,"label",20),e(46,"Left (pre-checked)"),t(),n(47,"input",21),h("ngModelChange",function(o){return r(a),g(i.modelCheckbox.middle,o)||(i.modelCheckbox.middle=o),l(o)}),t(),n(48,"label",22),e(49,"Middle"),t(),n(50,"input",23),h("ngModelChange",function(o){return r(a),g(i.modelCheckbox.right,o)||(i.modelCheckbox.right=o),l(o)}),t(),n(51,"label",24),e(52,"Right"),t()(),b(53,"hr"),n(54,"pre"),e(55),k(56,"json"),t()(),b(57,"app-code-preview",15)(58,"br"),n(59,"div",12)(60,"div",25)(61,"input",26),h("ngModelChange",function(o){return r(a),g(i.modelRadio,o)||(i.modelRadio=o),l(o)}),t(),n(62,"label",27),e(63,"Left (pre-checked)"),t(),n(64,"input",28),h("ngModelChange",function(o){return r(a),g(i.modelRadio,o)||(i.modelRadio=o),l(o)}),t(),n(65,"label",29),e(66,"Middle"),t(),n(67,"input",30),h("ngModelChange",function(o){return r(a),g(i.modelRadio,o)||(i.modelRadio=o),l(o)}),t(),n(68,"label",31),e(69,"Right"),t()(),b(70,"hr"),n(71,"pre"),e(72),t()(),b(73,"app-code-preview",15)(74,"hr"),n(75,"h4",null,2),e(77,"Button toolbar"),t(),n(78,"p",11),e(79,"Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more."),t(),n(80,"div",12)(81,"div",32)(82,"div",33)(83,"button",14),e(84,"1"),t(),n(85,"button",14),e(86,"2"),t(),n(87,"button",14),e(88,"3"),t(),n(89,"button",14),e(90,"4"),t()(),n(91,"div",34)(92,"button",14),e(93,"5"),t(),n(94,"button",14),e(95,"6"),t(),n(96,"button",14),e(97,"7"),t()(),n(98,"div",35)(99,"button",14),e(100,"8"),t()()()(),b(101,"app-code-preview",15),n(102,"p",11),e(103,"Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you\u2019ll likely need some utilities though to space things properly."),t(),n(104,"div",12)(105,"div",36)(106,"div",33)(107,"button",14),e(108,"1"),t(),n(109,"button",14),e(110,"2"),t(),n(111,"button",14),e(112,"3"),t(),n(113,"button",14),e(114,"4"),t()(),n(115,"div",37)(116,"div",38)(117,"div",39),e(118,"@"),t()(),b(119,"input",40),t()(),n(120,"div",41)(121,"div",42)(122,"button",14),e(123,"1"),t(),n(124,"button",14),e(125,"2"),t(),n(126,"button",14),e(127,"3"),t(),n(128,"button",14),e(129,"4"),t()(),n(130,"div",37)(131,"div",38)(132,"div",43),e(133,"@"),t()(),b(134,"input",44),t()()(),b(135,"app-code-preview",15)(136,"hr"),n(137,"h4",null,3),e(139,"Sizing"),t(),n(140,"p",11),e(141,"Instead of applying button sizing classes to every button in a group, just add "),n(142,"code"),e(143,".btn-group-*"),t(),e(144," to each "),n(145,"code"),e(146,".btn-group"),t(),e(147,", including each one when nesting multiple groups."),t(),n(148,"div",12)(149,"div",45)(150,"button",14),e(151,"Left"),t(),n(152,"button",14),e(153,"Middle"),t(),n(154,"button",14),e(155,"Right"),t()(),n(156,"div",46)(157,"button",14),e(158,"Left"),t(),n(159,"button",14),e(160,"Middle"),t(),n(161,"button",14),e(162,"Right"),t()(),n(163,"div",47)(164,"button",14),e(165,"Left"),t(),n(166,"button",14),e(167,"Middle"),t(),n(168,"button",14),e(169,"Right"),t()()(),b(170,"app-code-preview",15)(171,"hr"),n(172,"h4",null,4),e(174,"Nesting"),t(),n(175,"p",11),e(176,"Place a "),n(177,"code"),e(178,".btn-group"),t(),e(179," within another "),n(180,"code"),e(181,".btn-group"),t(),e(182," when you want dropdown menus mixed with a series of buttons."),t(),n(183,"div",12)(184,"div",48)(185,"button",14),e(186,"1"),t(),n(187,"button",14),e(188,"2"),t(),n(189,"div",49)(190,"button",50),e(191," Dropdown "),t(),n(192,"div",51)(193,"a",52),d("click",function(){return r(a),l(!1)}),e(194,"Dropdown link"),t(),n(195,"a",52),d("click",function(){return r(a),l(!1)}),e(196,"Dropdown link"),t()()()()(),b(197,"app-code-preview",15)(198,"hr"),n(199,"h4",null,5),e(201,"Vertical variation"),t(),n(202,"p",11),e(203,"Make a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here."),t(),n(204,"div",12)(205,"div",53)(206,"button",14),e(207,"Button"),t(),n(208,"button",14),e(209,"Button"),t(),n(210,"button",14),e(211,"Button"),t(),n(212,"button",14),e(213,"Button"),t(),n(214,"button",14),e(215,"Button"),t(),n(216,"button",14),e(217,"Button"),t()(),n(218,"div",54)(219,"button",55),e(220,"Button"),t(),n(221,"div",49)(222,"button",56),e(223," Dropdown "),t(),n(224,"div",57)(225,"a",52),d("click",function(){return r(a),l(!1)}),e(226,"Dropdown link"),t(),n(227,"a",52),d("click",function(){return r(a),l(!1)}),e(228,"Dropdown link"),t()()(),n(229,"button",55),e(230,"Button"),t(),n(231,"button",55),e(232,"Button"),t(),n(233,"div",49)(234,"button",58),e(235," Dropdown "),t(),n(236,"div",59)(237,"a",52),d("click",function(){return r(a),l(!1)}),e(238,"Dropdown link"),t(),n(239,"a",52),d("click",function(){return r(a),l(!1)}),e(240,"Dropdown link"),t()()(),n(241,"div",49)(242,"button",60),e(243," Dropdown "),t(),n(244,"div",61)(245,"a",52),d("click",function(){return r(a),l(!1)}),e(246,"Dropdown link"),t(),n(247,"a",52),d("click",function(){return r(a),l(!1)}),e(248,"Dropdown link"),t()()()()(),b(249,"app-code-preview",15),t(),n(250,"div",62)(251,"ul",63)(252,"li",64)(253,"a",65),d("click",function(){r(a);let o=s(11);return l(i.scrollTo(o))}),e(254,"Basic example"),t()(),n(255,"li",64)(256,"a",65),d("click",function(){r(a);let o=s(32);return l(i.scrollTo(o))}),e(257,"Checkbox and radio"),t()(),n(258,"li",64)(259,"a",65),d("click",function(){r(a);let o=s(76);return l(i.scrollTo(o))}),e(260,"Button toolbar"),t()(),n(261,"li",64)(262,"a",65),d("click",function(){r(a);let o=s(138);return l(i.scrollTo(o))}),e(263,"Sizing"),t()(),n(264,"li",64)(265,"a",65),d("click",function(){r(a);let o=s(173);return l(i.scrollTo(o))}),e(266,"Nesting"),t()(),n(267,"li",64)(268,"a",65),d("click",function(){r(a);let o=s(200);return l(i.scrollTo(o))}),e(269,"Vertical variations"),t()()()()()}f&2&&(u(29),m("codeContent",i.defaultButtonGroupCode),u(15),c("ngModel",i.modelCheckbox.left),u(3),c("ngModel",i.modelCheckbox.middle),u(3),c("ngModel",i.modelCheckbox.right),u(5),x(_(56,19,i.modelCheckbox)),u(2),m("codeContent",i.checkboxGroupCode),u(4),c("ngModel",i.modelRadio),m("value",1),u(3),c("ngModel",i.modelRadio),m("value","middle"),u(3),c("ngModel",i.modelRadio),m("value",!1),u(5),x(i.modelRadio),u(),m("codeContent",i.radioGroupCode),u(28),m("codeContent",i.buttonToolbarCode),u(34),m("codeContent",i.mixedToolbarCode),u(35),m("codeContent",i.buttonGroupSizingCode),u(27),m("codeContent",i.buttonGroupNestingCode),u(52),m("codeContent",i.verticalVariationCode))},dependencies:[A,T,G,B,D,M,V,L,W,N,I,R,E],encapsulation:2})};export{F as ButtonGroupComponent};
