import{a as A}from"./chunk-ZOI5QTSN.js";import"./chunk-3RAS5AEW.js";import{u as S,v as x,w as E,x as y,y as f,z as C}from"./chunk-5ZTN53S4.js";import"./chunk-VZNXAE5Z.js";import"./chunk-FHPH46MZ.js";import"./chunk-LVHII46P.js";import"./chunk-RD6NJ7NY.js";import{Ca as d,Da as l,Gb as m,Sb as n,Tb as t,Ub as o,Yb as h,dc as a,kb as p,pc as b,qc as e,ra as D,yc as v}from"./chunk-3TFDHLSU.js";import"./chunk-GAL4ENT6.js";var M={htmlCode:`<div ngbDropdown>
  <button class="btn btn-secondary" id="dropdownBasic1" ngbDropdownToggle>Dropdown button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
    <button ngbDropdownItem>Action - 1</button>
    <button ngbDropdownItem>Another Action</button>
    <button ngbDropdownItem>Something else is here</button>
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`},_={htmlCode:`<div class="d-inline-block" ngbDropdown>
  <button class="btn btn-primary" id="dropdownButtonPrimary" ngbDropdownToggle>Primary</button>
  <div ngbDropdownMenu aria-labelledby="dropdownButtonPrimary">
    <button ngbDropdownItem>Action - 1</button>
    <button ngbDropdownItem>Another Action</button>
    <button ngbDropdownItem>Something else is here</button>
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`},I={htmlCode:`<div class="btn-group" ngbDropdown role="group">
  <button type="button" class="btn btn-primary">Primary</button>
  <button class="btn btn-primary dropdown-toggle-split" ngbDropdownToggle></button>
  <div ngbDropdownMenu>
    <button ngbDropdownItem>Action - 1</button>
    <button ngbDropdownItem>Another Action</button>
    <button ngbDropdownItem>Something else is here</button>
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`},B={htmlCode:`<!-- Large button groups (default and split) -->
<div class="btn-group" ngbDropdown>
  <button class="btn btn-secondary btn-lg" id="dropdownButtonLg" ngbDropdownToggle>Large button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownButtonLg">
    ...
  </div>
</div>

<div class="btn-group" ngbDropdown role="group">
  <button type="button" class="btn btn-secondary btn-lg">Large split button</button>
  <button class="btn btn-secondary dropdown-toggle-split" ngbDropdownToggle></button>
  <div ngbDropdownMenu>
    ...
  </div>
</div>

<!-- Small button groups (default and split) -->
<div class="btn-group" ngbDropdown>
  <button class="btn btn-secondary btn-sm" id="dropdownButtonLg" ngbDropdownToggle>Small button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownButtonLg">
    ...
  </div>
</div>

<div class="btn-group" ngbDropdown role="group">
  <button type="button" class="btn btn-secondary btn-sm">Small split button</button>
  <button class="btn btn-secondary dropdown-toggle-split" ngbDropdownToggle></button>
  <div ngbDropdownMenu>
    ...
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`},k={htmlCode:`<div ngbDropdown placement="top-end" class="btn-group">
  <button class="btn btn-secondary" id="dropupMenu" ngbDropdownToggle>Dropup</button>
  <div ngbDropdownMenu aria-labelledby="dropupMenu">
    ...
  </div>
</div>

<div class="btn-group" ngbDropdown placement="top-end" role="group">
  <button type="button" class="btn btn-secondary">Split dropup</button>
  <button class="btn btn-secondary dropdown-toggle-split" ngbDropdownToggle></button>
  <div ngbDropdownMenu>
    ...
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`},N={htmlCode:`<div ngbDropdown placement="end-top" class="btn-group">
  <button class="btn btn-secondary" id="droprightMenu" ngbDropdownToggle>Dropright</button>
  <div ngbDropdownMenu aria-labelledby="droprightMenu">
    ...
  </div>
</div>

<div class="btn-group" ngbDropdown placement="end-top" role="group">
  <button type="button" class="btn btn-secondary">Split dropright</button>
  <button class="btn btn-secondary dropdown-toggle-split" ngbDropdownToggle></button>
  <div ngbDropdownMenu>
    ...
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`},V={htmlCode:`<div ngbDropdown placement="start-top" class="btn-group">
  <button class="btn btn-secondary" id="dropleftMenu" ngbDropdownToggle>Dropleft</button>
  <div ngbDropdownMenu aria-labelledby="dropleftMenu">
    ...
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-secondary">Split dropleft</button>
  <div class="btn-group dropleft" ngbDropdown placement="start-top" role="group">
    <button class="btn btn-secondary dropdown-toggle-split" ngbDropdownToggle></button>
    <div ngbDropdownMenu>
      ...
    </div>
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`},F={htmlCode:`<div ngbDropdown>
  <button class="btn btn-secondary" id="dropdownMenuActiveItem" ngbDropdownToggle>Dropdown button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownMenuActiveItem">
    <button ngbDropdownItem>Action - 1</button>
    <button ngbDropdownItem class="active">Another Action</button>
    <button ngbDropdownItem>Something else is here</button>
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`},P={htmlCode:`<div ngbDropdown>
  <button class="btn btn-secondary" id="dropdownMenuActiveItem" ngbDropdownToggle>Dropdown button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownMenuActiveItem">
    <button ngbDropdownItem>Action - 1</button>
    <button ngbDropdownItem class="disabled">Another Action</button>
    <button ngbDropdownItem>Something else is here</button>
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`},U={htmlCode:`<div ngbDropdown>
  <button class="btn btn-secondary" id="dropdownHeaderExample" ngbDropdownToggle>Dropdown button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownHeaderExample">
    <h6 class="dropdown-header">Dropdown header</h6>
    <button ngbDropdownItem>Action - 1</button>
    <button ngbDropdownItem class="disabled">Another Action</button>
    <button ngbDropdownItem>Something else is here</button>
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`},L={htmlCode:`<div ngbDropdown>
  <button class="btn btn-secondary" id="dropdownDividerExample" ngbDropdownToggle>Dropdown button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownDividerExample">
    <button ngbDropdownItem>Action - 1</button>
    <button ngbDropdownItem class="disabled">Another Action</button>
    <button ngbDropdownItem>Something else is here</button>
    <div class="dropdown-divider"></div>
    <button ngbDropdownItem>Separated item</button>
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`},z={htmlCode:`<div ngbDropdown>
  <button class="btn btn-secondary" id="dropdownTextExample" ngbDropdownToggle>Dropdown button</button>
  <div ngbDropdownMenu class="p-4" aria-labelledby="dropdownTextExample">
    <p>Some example text that's free-flowing within the dropdown menu.</p>
    <p class="mb-0">And this is more example text.</p>
  </div>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`},H={htmlCode:`<div ngbDropdown>
  <button class="btn btn-secondary" id="dropdownFormExample" ngbDropdownToggle>Dropdown button</button>
  <form ngbDropdownMenu class="p-4" aria-labelledby="dropdownFormExample">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
</div>`,tsCode:`import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`},T=class w{defaultDropdownCode;dropdownButtonVariationsCode;splitButtonCode;buttonSizingCode;dropUpCode;dropRightCode;dropLeftCode;menuItemActiveCode;menuItemDisabledCode;dropdownHeaderCode;dropdownDividerCode;dropdownTextCode;dropdownFormCode;constructor(){}ngOnInit(){this.defaultDropdownCode=M,this.dropdownButtonVariationsCode=_,this.splitButtonCode=I,this.buttonSizingCode=B,this.dropUpCode=k,this.dropRightCode=N,this.dropLeftCode=V,this.menuItemActiveCode=F,this.menuItemDisabledCode=P,this.dropdownHeaderCode=U,this.dropdownDividerCode=L,this.dropdownTextCode=z,this.dropdownFormCode=H}scrollTo(c){c.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(g){return new(g||w)};static \u0275cmp=D({type:w,selectors:[["app-dropdowns"]],standalone:!0,features:[v],decls:489,vars:13,consts:[["default",""],["variations",""],["split",""],["sizing",""],["dropup",""],["dropright",""],["dropleft",""],["activeItem",""],["disabledItem",""],["dropdownHeader",""],["dropdownDividers",""],["dropdownText",""],["dropdownForm",""],[1,"row"],[1,"col-xl-10","main-content","ps-xl-4","pe-xl-5"],[1,"page-title"],[1,"lead"],["href","https://ng-bootstrap.github.io/#/components/dropdown/examples","target","_blank"],[1,"example"],["ngbDropdown",""],["id","dropdownBasic1","ngbDropdownToggle","",1,"btn","btn-secondary"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["ngbDropdownItem",""],[3,"codeContent"],[1,"mb-3"],["ngbDropdown","",1,"d-inline-block","mb-1","mb-md-0"],["id","dropdownButtonPrimary","ngbDropdownToggle","",1,"btn","btn-primary","me-1"],["ngbDropdownMenu","","aria-labelledby","dropdownButtonPrimary"],["id","dropdownButtonSecondary","ngbDropdownToggle","",1,"btn","btn-secondary","me-1"],["ngbDropdownMenu","","aria-labelledby","dropdownButtonSecondary"],["id","dropdownButtonSuccess","ngbDropdownToggle","",1,"btn","btn-success","me-1"],["ngbDropdownMenu","","aria-labelledby","dropdownButtonSuccess"],["id","dropdownButtonInfo","ngbDropdownToggle","",1,"btn","btn-info","me-1"],["ngbDropdownMenu","","aria-labelledby","dropdownButtonInfo"],["id","dropdownButtonWarning","ngbDropdownToggle","",1,"btn","btn-warning","me-1"],["ngbDropdownMenu","","aria-labelledby","dropdownButtonWarning"],["id","dropdownButtonDanger","ngbDropdownToggle","",1,"btn","btn-danger","me-1"],["ngbDropdownMenu","","aria-labelledby","dropdownButtonDanger"],["ngbDropdown","","role","group",1,"btn-group","mb-1","mb-md-0"],["type","button",1,"btn","btn-primary"],["ngbDropdownToggle","",1,"btn","btn-primary","dropdown-toggle-split","me-1"],["ngbDropdownMenu",""],["type","button",1,"btn","btn-secondary"],["ngbDropdownToggle","",1,"btn","btn-secondary","dropdown-toggle-split","me-1"],["type","button",1,"btn","btn-success"],["ngbDropdownToggle","",1,"btn","btn-success","dropdown-toggle-split","me-1"],["type","button",1,"btn","btn-info"],["ngbDropdownToggle","",1,"btn","btn-info","dropdown-toggle-split","me-1"],["type","button",1,"btn","btn-warning"],["ngbDropdownToggle","",1,"btn","btn-warning","dropdown-toggle-split","me-1"],["type","button",1,"btn","btn-danger"],["ngbDropdownToggle","",1,"btn","btn-danger","dropdown-toggle-split","me-1"],[1,"btn-toolbar"],["ngbDropdown","",1,"btn-group","mb-1","mb-md-0","me-1"],["id","dropdownButtonLg","ngbDropdownToggle","",1,"btn","btn-secondary","btn-lg"],["ngbDropdownMenu","","aria-labelledby","dropdownButtonLg"],["type","button",1,"btn","btn-secondary","btn-lg"],["ngbDropdownToggle","",1,"btn","btn-secondary","dropdown-toggle-split"],["id","dropdownButtonLg","ngbDropdownToggle","",1,"btn","btn-secondary","btn-sm"],["type","button",1,"btn","btn-secondary","btn-sm"],["ngbDropdown","","placement","top-end",1,"btn-group","mb-1","mb-md-0","me-1"],["id","dropupMenu","ngbDropdownToggle","",1,"btn","btn-secondary"],["ngbDropdownMenu","","aria-labelledby","dropupMenu"],["ngbDropdown","","placement","top-end","role","group",1,"btn-group","mb-1","mb-md-0"],["ngbDropdown","","placement","end-top",1,"btn-group","mb-1","mb-md-0","me-1"],["id","droprightMenu","ngbDropdownToggle","",1,"btn","btn-secondary"],["ngbDropdownMenu","","aria-labelledby","droprightMenu"],["ngbDropdown","","placement","end-top","role","group",1,"btn-group","mb-1","mb-md-0"],["ngbDropdown","","placement","start-top",1,"btn-group","mb-1","mb-md-0","me-1"],["id","dropleftMenu","ngbDropdownToggle","",1,"btn","btn-secondary"],["ngbDropdownMenu","","aria-labelledby","dropleftMenu"],["ngbDropdown","","placement","start-top","role","group",1,"btn-group","mb-1","mb-md-0"],["id","dropdownMenuActiveItem","ngbDropdownToggle","",1,"btn","btn-secondary"],["ngbDropdownMenu","","aria-labelledby","dropdownMenuActiveItem"],["ngbDropdownItem","",1,"active"],["id","dropdownMenuDisabledItem","ngbDropdownToggle","",1,"btn","btn-secondary"],["ngbDropdownMenu","","aria-labelledby","dropdownMenuDisabledItem"],["ngbDropdownItem","",1,"disabled"],["id","dropdownHeaderExample","ngbDropdownToggle","",1,"btn","btn-secondary"],["ngbDropdownMenu","","aria-labelledby","dropdownHeaderExample"],[1,"dropdown-header"],["id","dropdownDividerExample","ngbDropdownToggle","",1,"btn","btn-secondary"],["ngbDropdownMenu","","aria-labelledby","dropdownDividerExample"],[1,"dropdown-divider"],["id","dropdownTextExample","ngbDropdownToggle","",1,"btn","btn-secondary"],["ngbDropdownMenu","","aria-labelledby","dropdownTextExample",1,"p-4"],[1,"mb-0"],["id","dropdownFormExample","ngbDropdownToggle","",1,"btn","btn-secondary"],["ngbDropdownMenu","","aria-labelledby","dropdownFormExample",1,"p-4"],["for","exampleDropdownFormEmail2",1,"form-label"],["type","email","id","exampleDropdownFormEmail2","placeholder","email@example.com",1,"form-control"],["for","exampleDropdownFormPassword2",1,"form-label"],["type","password","id","exampleDropdownFormPassword2","placeholder","Password",1,"form-control"],["type","submit",1,"btn","btn-primary"],[1,"col-xl-2","content-nav-wrapper"],[1,"nav","content-nav","d-flex","flex-column"],[1,"nav-item"],[1,"nav-link",3,"click"]],template:function(g,i){if(g&1){let s=h();n(0,"div",13)(1,"div",14)(2,"h1",15),e(3,"Dropdowns"),t(),n(4,"p",16),e(5,"Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin. Read the "),n(6,"a",17),e(7,"Official Ng-Bootstrap Documentation"),t(),e(8," for a full list of instructions and other options."),t(),o(9,"hr"),n(10,"h4",null,0),e(12,"Basic Example"),t(),n(13,"div",18)(14,"div",19)(15,"button",20),e(16,"Dropdown button"),t(),n(17,"div",21)(18,"button",22),e(19,"Action - 1"),t(),n(20,"button",22),e(21,"Another Action"),t(),n(22,"button",22),e(23,"Something else is here"),t()()()(),o(24,"app-code-preview",23)(25,"hr"),n(26,"h4",null,1),e(28,"Dropdown button variations"),t(),n(29,"p",24),e(30,"Add class "),n(31,"code"),e(32,".btn-*"),t(),e(33," for solid colored buttons."),t(),n(34,"div",18)(35,"div",25)(36,"button",26),e(37,"Primary"),t(),n(38,"div",27)(39,"button",22),e(40,"Action - 1"),t(),n(41,"button",22),e(42,"Another Action"),t(),n(43,"button",22),e(44,"Something else is here"),t()()(),n(45,"div",25)(46,"button",28),e(47,"Secondary"),t(),n(48,"div",29)(49,"button",22),e(50,"Action - 1"),t(),n(51,"button",22),e(52,"Another Action"),t(),n(53,"button",22),e(54,"Something else is here"),t()()(),n(55,"div",25)(56,"button",30),e(57,"Success"),t(),n(58,"div",31)(59,"button",22),e(60,"Action - 1"),t(),n(61,"button",22),e(62,"Another Action"),t(),n(63,"button",22),e(64,"Something else is here"),t()()(),n(65,"div",25)(66,"button",32),e(67,"Info"),t(),n(68,"div",33)(69,"button",22),e(70,"Action - 1"),t(),n(71,"button",22),e(72,"Another Action"),t(),n(73,"button",22),e(74,"Something else is here"),t()()(),n(75,"div",25)(76,"button",34),e(77,"Warning"),t(),n(78,"div",35)(79,"button",22),e(80,"Action - 1"),t(),n(81,"button",22),e(82,"Another Action"),t(),n(83,"button",22),e(84,"Something else is here"),t()()(),n(85,"div",25)(86,"button",36),e(87,"Danger"),t(),n(88,"div",37)(89,"button",22),e(90,"Action - 1"),t(),n(91,"button",22),e(92,"Another Action"),t(),n(93,"button",22),e(94,"Something else is here"),t()()()(),o(95,"app-code-preview",23)(96,"hr"),n(97,"h4",null,2),e(99,"Split button"),t(),n(100,"p",24),e(101,"Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of "),n(102,"code"),e(103,".dropdown-toggle-split"),t(),e(104," for proper spacing around the dropdown caret."),t(),n(105,"div",18)(106,"div",38)(107,"button",39),e(108,"Primary"),t(),o(109,"button",40),n(110,"div",41)(111,"button",22),e(112,"Action - 1"),t(),n(113,"button",22),e(114,"Another Action"),t(),n(115,"button",22),e(116,"Something else is here"),t()()(),n(117,"div",38)(118,"button",42),e(119,"Secondary"),t(),o(120,"button",43),n(121,"div",41)(122,"button",22),e(123,"Action - 1"),t(),n(124,"button",22),e(125,"Another Action"),t(),n(126,"button",22),e(127,"Something else is here"),t()()(),n(128,"div",38)(129,"button",44),e(130,"Success"),t(),o(131,"button",45),n(132,"div",41)(133,"button",22),e(134,"Action - 1"),t(),n(135,"button",22),e(136,"Another Action"),t(),n(137,"button",22),e(138,"Something else is here"),t()()(),n(139,"div",38)(140,"button",46),e(141,"Info"),t(),o(142,"button",47),n(143,"div",41)(144,"button",22),e(145,"Action - 1"),t(),n(146,"button",22),e(147,"Another Action"),t(),n(148,"button",22),e(149,"Something else is here"),t()()(),n(150,"div",38)(151,"button",48),e(152,"Warning"),t(),o(153,"button",49),n(154,"div",41)(155,"button",22),e(156,"Action - 1"),t(),n(157,"button",22),e(158,"Another Action"),t(),n(159,"button",22),e(160,"Something else is here"),t()()(),n(161,"div",38)(162,"button",50),e(163,"Danger"),t(),o(164,"button",51),n(165,"div",41)(166,"button",22),e(167,"Action - 1"),t(),n(168,"button",22),e(169,"Another Action"),t(),n(170,"button",22),e(171,"Something else is here"),t()()()(),o(172,"app-code-preview",23)(173,"hr"),n(174,"h4",null,3),e(176,"Sizing"),t(),n(177,"p",24),e(178,"Button dropdowns work with buttons of all sizes, including default and split dropdown buttons."),t(),n(179,"div",18)(180,"div",52)(181,"div",53)(182,"button",54),e(183,"Large button"),t(),n(184,"div",55)(185,"button",22),e(186,"Action - 1"),t(),n(187,"button",22),e(188,"Another Action"),t(),n(189,"button",22),e(190,"Something else is here"),t()()(),n(191,"div",38)(192,"button",56),e(193,"Large split button"),t(),o(194,"button",57),n(195,"div",41)(196,"button",22),e(197,"Action - 1"),t(),n(198,"button",22),e(199,"Another Action"),t(),n(200,"button",22),e(201,"Something else is here"),t()()()(),n(202,"div",52)(203,"div",53)(204,"button",58),e(205,"Small button"),t(),n(206,"div",55)(207,"button",22),e(208,"Action - 1"),t(),n(209,"button",22),e(210,"Another Action"),t(),n(211,"button",22),e(212,"Something else is here"),t()()(),n(213,"div",38)(214,"button",59),e(215,"Small split button"),t(),o(216,"button",57),n(217,"div",41)(218,"button",22),e(219,"Action - 1"),t(),n(220,"button",22),e(221,"Another Action"),t(),n(222,"button",22),e(223,"Something else is here"),t()()()()(),o(224,"app-code-preview",23)(225,"hr"),n(226,"h4",null,4),e(228,"Dropup"),t(),n(229,"p",24),e(230,"Trigger dropdown menus above elements by adding "),n(231,"code"),e(232,'placement="top-end"'),t(),e(233," to the parent element."),t(),n(234,"div",18)(235,"div",60)(236,"button",61),e(237,"Dropup"),t(),n(238,"div",62)(239,"button",22),e(240,"Action - 1"),t(),n(241,"button",22),e(242,"Another Action"),t(),n(243,"button",22),e(244,"Something else is here"),t()()(),n(245,"div",63)(246,"button",42),e(247,"Split dropup"),t(),o(248,"button",57),n(249,"div",41)(250,"button",22),e(251,"Action - 1"),t(),n(252,"button",22),e(253,"Another Action"),t(),n(254,"button",22),e(255,"Something else is here"),t()()()(),o(256,"app-code-preview",23)(257,"hr"),n(258,"h4",null,5),e(260,"Dropright"),t(),n(261,"p",24),e(262,"Trigger dropdown menus at the right of the elements by adding "),n(263,"code"),e(264,'placement="end-top"'),t(),e(265," to the parent element."),t(),n(266,"div",18)(267,"div",64)(268,"button",65),e(269,"Dropright"),t(),n(270,"div",66)(271,"button",22),e(272,"Action - 1"),t(),n(273,"button",22),e(274,"Another Action"),t(),n(275,"button",22),e(276,"Something else is here"),t()()(),n(277,"div",67)(278,"button",42),e(279,"Split dropright"),t(),o(280,"button",57),n(281,"div",41)(282,"button",22),e(283,"Action - 1"),t(),n(284,"button",22),e(285,"Another Action"),t(),n(286,"button",22),e(287,"Something else is here"),t()()()(),o(288,"app-code-preview",23)(289,"hr"),n(290,"h4",null,6),e(292,"Dropleft"),t(),n(293,"p",24),e(294,"Trigger dropdown menus at the right of the elements by adding "),n(295,"code"),e(296,'placement="start-top"'),t(),e(297," to the parent element."),t(),n(298,"div",18)(299,"div",68)(300,"button",69),e(301,"Dropleft"),t(),n(302,"div",70)(303,"button",22),e(304,"Action - 1"),t(),n(305,"button",22),e(306,"Another Action"),t(),n(307,"button",22),e(308,"Something else is here"),t()()(),n(309,"div",71)(310,"button",42),e(311,"Split dropleft"),t(),o(312,"button",57),n(313,"div",41)(314,"button",22),e(315,"Action - 1"),t(),n(316,"button",22),e(317,"Another Action"),t(),n(318,"button",22),e(319,"Something else is here"),t()()()(),o(320,"app-code-preview",23)(321,"hr"),n(322,"h4",null,7),e(324,"Active menu item"),t(),n(325,"p",24),e(326,"Add "),n(327,"code"),e(328,".active"),t(),e(329," to items in the dropdown to "),n(330,"strong"),e(331,"style them as active"),t(),e(332,"."),t(),n(333,"div",18)(334,"div",19)(335,"button",72),e(336,"Dropdown button"),t(),n(337,"div",73)(338,"button",22),e(339,"Action - 1"),t(),n(340,"button",74),e(341,"Another Action"),t(),n(342,"button",22),e(343,"Something else is here"),t()()()(),o(344,"app-code-preview",23)(345,"hr"),n(346,"h4",null,8),e(348,"Disabled menu item"),t(),n(349,"p",24),e(350,"Add "),n(351,"code"),e(352,".disabled"),t(),e(353," to items in the dropdown to "),n(354,"strong"),e(355,"style them as disabled"),t(),e(356,"."),t(),n(357,"div",18)(358,"div",19)(359,"button",75),e(360,"Dropdown button"),t(),n(361,"div",76)(362,"button",22),e(363,"Action - 1"),t(),n(364,"button",77),e(365,"Another Action"),t(),n(366,"button",22),e(367,"Something else is here"),t()()()(),o(368,"app-code-preview",23)(369,"hr"),n(370,"h4",null,9),e(372,"Dropdown header"),t(),n(373,"p",24),e(374,"Add a header to label sections of actions in any dropdown menu."),t(),n(375,"div",18)(376,"div",19)(377,"button",78),e(378,"Dropdown button"),t(),n(379,"div",79)(380,"h6",80),e(381,"Dropdown header"),t(),n(382,"button",22),e(383,"Action - 1"),t(),n(384,"button",77),e(385,"Another Action"),t(),n(386,"button",22),e(387,"Something else is here"),t()()()(),o(388,"app-code-preview",23)(389,"hr"),n(390,"h4",null,10),e(392,"Dropdown dividers"),t(),n(393,"p",24),e(394,"Add a header to label sections of actions in any dropdown menu."),t(),n(395,"div",18)(396,"div",19)(397,"button",81),e(398,"Dropdown button"),t(),n(399,"div",82)(400,"button",22),e(401,"Action - 1"),t(),n(402,"button",77),e(403,"Another Action"),t(),n(404,"button",22),e(405,"Something else is here"),t(),o(406,"div",83),n(407,"button",22),e(408,"Separated item"),t()()()(),o(409,"app-code-preview",23)(410,"hr"),n(411,"h4",null,11),e(413,"Text in dropdown"),t(),n(414,"p",24),e(415,"Place any freeform text within a dropdown menu with text and use spacing utilities. Note that you\u2019ll likely need additional sizing styles to constrain the menu width."),t(),n(416,"div",18)(417,"div",19)(418,"button",84),e(419,"Dropdown button"),t(),n(420,"div",85)(421,"p"),e(422,"Some example text that's free-flowing within the dropdown menu."),t(),n(423,"p",86),e(424,"And this is more example text."),t()()()(),o(425,"app-code-preview",23)(426,"hr"),n(427,"h4",null,12),e(429,"Forms in dropdown"),t(),n(430,"p",24),e(431,"Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or padding utilities to give it the negative space you require."),t(),n(432,"div",18)(433,"div",19)(434,"button",87),e(435,"Dropdown button"),t(),n(436,"form",88)(437,"div",24)(438,"label",89),e(439,"Email address"),t(),o(440,"input",90),t(),n(441,"div",24)(442,"label",91),e(443,"Password"),t(),o(444,"input",92),t(),n(445,"button",93),e(446,"Sign in"),t()()()(),o(447,"app-code-preview",23),t(),n(448,"div",94)(449,"ul",95)(450,"li",96)(451,"a",97),a("click",function(){d(s);let r=b(11);return l(i.scrollTo(r))}),e(452,"Basic example"),t()(),n(453,"li",96)(454,"a",97),a("click",function(){d(s);let r=b(27);return l(i.scrollTo(r))}),e(455,"Dropdown variations"),t()(),n(456,"li",96)(457,"a",97),a("click",function(){d(s);let r=b(98);return l(i.scrollTo(r))}),e(458,"Split button"),t()(),n(459,"li",96)(460,"a",97),a("click",function(){d(s);let r=b(175);return l(i.scrollTo(r))}),e(461,"Sizing"),t()(),n(462,"li",96)(463,"a",97),a("click",function(){d(s);let r=b(227);return l(i.scrollTo(r))}),e(464,"Dropup"),t()(),n(465,"li",96)(466,"a",97),a("click",function(){d(s);let r=b(259);return l(i.scrollTo(r))}),e(467,"Dropright"),t()(),n(468,"li",96)(469,"a",97),a("click",function(){d(s);let r=b(291);return l(i.scrollTo(r))}),e(470,"Dropleft"),t()(),n(471,"li",96)(472,"a",97),a("click",function(){d(s);let r=b(323);return l(i.scrollTo(r))}),e(473,"Active menu item"),t()(),n(474,"li",96)(475,"a",97),a("click",function(){d(s);let r=b(347);return l(i.scrollTo(r))}),e(476,"Disabled menu item"),t()(),n(477,"li",96)(478,"a",97),a("click",function(){d(s);let r=b(371);return l(i.scrollTo(r))}),e(479,"Dropdown header"),t()(),n(480,"li",96)(481,"a",97),a("click",function(){d(s);let r=b(391);return l(i.scrollTo(r))}),e(482,"Dropdown dividers"),t()(),n(483,"li",96)(484,"a",97),a("click",function(){d(s);let r=b(412);return l(i.scrollTo(r))}),e(485,"Text in dropdown"),t()(),n(486,"li",96)(487,"a",97),a("click",function(){d(s);let r=b(428);return l(i.scrollTo(r))}),e(488,"Form in dropdown"),t()()()()()}g&2&&(p(24),m("codeContent",i.defaultDropdownCode),p(71),m("codeContent",i.dropdownButtonVariationsCode),p(77),m("codeContent",i.splitButtonCode),p(52),m("codeContent",i.buttonSizingCode),p(32),m("codeContent",i.dropUpCode),p(32),m("codeContent",i.dropRightCode),p(32),m("codeContent",i.dropLeftCode),p(24),m("codeContent",i.menuItemActiveCode),p(24),m("codeContent",i.menuItemDisabledCode),p(20),m("codeContent",i.dropdownHeaderCode),p(21),m("codeContent",i.dropdownDividerCode),p(16),m("codeContent",i.dropdownTextCode),p(22),m("codeContent",i.dropdownFormCode))},dependencies:[A,C,f,y,E,S,x],encapsulation:2})};export{T as DropdownsComponent};
