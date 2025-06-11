import{a as me}from"./chunk-ZOI5QTSN.js";import"./chunk-3RAS5AEW.js";import{M as re,N as le,Y as se,_ as pe}from"./chunk-5ZTN53S4.js";import"./chunk-VZNXAE5Z.js";import{B as ne,C as oe,d as G,g as Y,h as q,j as J,k as K,l as X,m as Z,p as ee,s as te,t as ie,u as ae}from"./chunk-FHPH46MZ.js";import"./chunk-LVHII46P.js";import{t as j,w as x}from"./chunk-RD6NJ7NY.js";import{Ca as u,Da as g,Gb as m,Hc as b,Ib as O,Ic as _,Ka as D,Qb as S,Rb as y,Sb as e,Tb as t,Ub as d,Yb as B,Z as R,dc as f,ec as $,fb as C,kb as o,kc as A,lb as M,lc as H,mc as L,pc as v,qc as i,ra as U,rc as h,s as k,sc as T,ta as z,uc as P,vc as N,wc as I,xc as W,yc as Q}from"./chunk-3TFDHLSU.js";import{a as V}from"./chunk-GAL4ENT6.js";var w=(l,r)=>r.name;function ue(l,r){if(l&1&&(e(0,"tr")(1,"th",29),i(2),t(),e(3,"td"),d(4,"img",30),i(5),t(),e(6,"td"),i(7),b(8,"number"),t(),e(9,"td"),i(10),b(11,"number"),t()()),l&2){let a=r.$implicit,n=r.$index;o(2),h(n+1),o(2),m("src","https://upload.wikimedia.org/wikipedia/commons/"+a.flag,C)("alt","The flag of "+a.name),o(),T(" ",a.name," "),o(2),h(_(8,6,a.area)),o(3),h(_(11,8,a.population))}}function ge(l,r){if(l&1&&(e(0,"tr")(1,"th",29),i(2),t(),e(3,"td"),d(4,"img",30),i(5),t(),e(6,"td"),i(7),b(8,"number"),t(),e(9,"td"),i(10),b(11,"number"),t()()),l&2){let a=r.$implicit;o(2),h(a.id),o(2),m("src","https://upload.wikimedia.org/wikipedia/commons/"+a.flag,C)("alt","The flag of "+a.name),o(),T(" ",a.name," "),o(2),h(_(8,6,a.area)),o(3),h(_(11,8,a.population))}}function fe(l,r){if(l&1&&(e(0,"tr")(1,"th",29),i(2),t(),e(3,"td"),d(4,"img",30)(5,"ngb-highlight",31),t(),e(6,"td"),d(7,"ngb-highlight",31),b(8,"number"),t(),e(9,"td"),d(10,"ngb-highlight",31),b(11,"number"),t()()),l&2){let a=r.$implicit,n=r.$index,s=$();o(2),h(n+1),o(2),m("src","https://upload.wikimedia.org/wikipedia/commons/"+a.flag,C)("alt","The flag of "+a.name),o(),m("result",a.name)("term",s.filter.value),o(2),m("result",_(8,9,a.area))("term",s.filter.value),o(3),m("result",_(11,11,a.population))("term",s.filter.value)}}function he(l,r){l&1&&(e(0,"tr")(1,"td",32),i(2,"No countries found"),t()())}function be(l,r){if(l&1&&(e(0,"tr")(1,"th",29),i(2),t(),e(3,"td"),d(4,"img",30),i(5),t(),e(6,"td"),i(7),b(8,"number"),t(),e(9,"td"),i(10),b(11,"number"),t()()),l&2){let a=r.$implicit;o(2),h(a.id),o(2),m("src","https://upload.wikimedia.org/wikipedia/commons/"+a.flag,C)("alt","The flag of "+a.name),o(),T(" ",a.name," "),o(2),h(_(8,6,a.area)),o(3),h(_(11,8,a.population))}}var _e={htmlCode:`<table class="table table-striped">
	<thead>
		<tr>
			<th scope="col">#</th>
			<th scope="col">Country</th>
			<th scope="col">Area</th>
			<th scope="col">Population</th>
		</tr>
	</thead>
	<tbody>
		@for (country of countries; track country.name; let i = $index) {
			<tr>
				<th scope="row">{{ i + 1 }}</th>
				<td>
					<img
						[src]="'https://upload.wikimedia.org/wikipedia/commons/' + country.flag"
						[alt]="'The flag of ' + country.name"
						class="me-2"
						style="width: 20px"
					/>
					{{ country.name }}
				</td>
				<td>{{ country.area | number }}</td>
				<td>{{ country.population | number }}</td>
			</tr>
		}
	</tbody>
</table>`,tsCode:`import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

interface Country {
	name: string;
	flag: string;
	area: number;
	population: number;
}

const COUNTRIES: Country[] = [
	{
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [DecimalPipe],
	templateUrl: './table.component.html',
})
export class TableComponent {
	countries = COUNTRIES;
}`},Ce={htmlCode:`<table class="table table-striped">
	<thead>
		<tr>
			<th scope="col">#</th>
			<th scope="col" sortable="name" (sort)="onSort($event)">Country</th>
			<th scope="col" sortable="area" (sort)="onSort($event)">Area</th>
			<th scope="col" sortable="population" (sort)="onSort($event)">Population</th>
		</tr>
	</thead>
	<tbody>
		@for (country of countries; track country.name) {
			<tr>
				<th scope="row">{{ country.id }}</th>
				<td>
					<img
						[src]="'https://upload.wikimedia.org/wikipedia/commons/' + country.flag"
						[alt]="'The flag of ' + country.name"
						class="me-2"
						style="width: 20px"
					/>
					{{ country.name }}
				</td>
				<td>{{ country.area | number }}</td>
				<td>{{ country.population | number }}</td>
			</tr>
		}
	</tbody>
</table>`,tsCode:`import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { DecimalPipe } from '@angular/common';

interface Country {
	id: number;
	name: string;
	flag: string;
	area: number;
	population: number;
}

const COUNTRIES: Country[] = [
	{
		id: 1,
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		id: 2,
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		id: 3,
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		id: 4,
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];

export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

export interface SortEvent {
	column: SortColumn;
	direction: SortDirection;
}

@Directive({
	selector: 'th[sortable]',
	standalone: true,
	host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()',
	},
})
export class NgbdSortableHeader {
	@Input() sortable: SortColumn = '';
	@Input() direction: SortDirection = '';
	@Output() sort = new EventEmitter<SortEvent>();

	rotate() {
		this.direction = rotate[this.direction];
		this.sort.emit({ column: this.sortable, direction: this.direction });
	}
}

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [DecimalPipe, NgbdSortableHeader],
	templateUrl: './table.component.html',
})
export class TableComponent {
	countries = COUNTRIES;

	@ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		for (const header of this.headers) {
			if (header.sortable !== column) {
				header.direction = '';
			}
		}

		// sorting countries
		if (direction === '' || column === '') {
			this.countries = COUNTRIES;
		} else {
			this.countries = [...COUNTRIES].sort((a, b) => {
				const res = compare(a[column], b[column]);
				return direction === 'asc' ? res : -res;
			});
		}
	}
}`},Se={htmlCode:`<form>
	<div class="mb-3 row">
		<label for="table-filtering-search" class="col-xs-3 col-sm-auto col-form-label">Full text search:</label>
		<div class="col-xs-3 col-sm-auto">
			<input id="table-filtering-search" class="form-control" type="text" [formControl]="filter" />
		</div>
	</div>
</form>

<table class="table table-striped">
	<thead>
		<tr>
			<th scope="col">#</th>
			<th scope="col">Country</th>
			<th scope="col">Area</th>
			<th scope="col">Population</th>
		</tr>
	</thead>
	<tbody>
		@for (country of countries$ | async; track country.name; let i = $index) {
			<tr>
				<th scope="row">{{ i + 1 }}</th>
				<td>
					<img
						[src]="'https://upload.wikimedia.org/wikipedia/commons/' + country.flag"
						[alt]="'The flag of ' + country.name"
						class="me-2"
						style="width: 20px"
					/>
					<ngb-highlight [result]="country.name" [term]="filter.value" />
				</td>
				<td><ngb-highlight [result]="country.area | number" [term]="filter.value" /></td>
				<td><ngb-highlight [result]="country.population | number" [term]="filter.value" /></td>
			</tr>
		} @empty {
			<tr>
				<td colspan="4" style="text-align: center">No countries found</td>
			</tr>
		}
	</tbody>
</table>`,tsCode:`import { Component, PipeTransform } from '@angular/core';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { map, Observable, startWith } from 'rxjs';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';

interface Country {
	name: string;
	flag: string;
	area: number;
	population: number;
}

const COUNTRIES: Country[] = [
	{
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];

function search(text: string, pipe: PipeTransform): Country[] {
	return COUNTRIES.filter((country) => {
		const term = text.toLowerCase();
		return (
			country.name.toLowerCase().includes(term) ||
			pipe.transform(country.area).includes(term) ||
			pipe.transform(country.population).includes(term)
		);
	});
}

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [DecimalPipe, AsyncPipe, ReactiveFormsModule, NgbHighlight],
	templateUrl: './table.component.html',
	providers: [DecimalPipe]
})
export class TableComponent {
	countries$: Observable<Country[]>;
	filter = new FormControl('', { nonNullable: true });

	constructor(pipe: DecimalPipe) {
		this.countries$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text, pipe)),
		);
	}
}`},ye={htmlCode:`<table class="table table-striped">
	<thead>
		<tr>
			<th scope="col">#</th>
			<th scope="col">Country</th>
			<th scope="col">Area</th>
			<th scope="col">Population</th>
		</tr>
	</thead>
	<tbody>
		@for (country of countries; track country.name) {
			<tr>
				<th scope="row">{{ country.id }}</th>
				<td>
					<img
						[src]="'https://upload.wikimedia.org/wikipedia/commons/' + country.flag"
						[alt]="'The flag of ' + country.name"
						class="me-2"
						style="width: 20px"
					/>
					{{ country.name }}
				</td>
				<td>{{ country.area | number }}</td>
				<td>{{ country.population | number }}</td>
			</tr>
		}
	</tbody>
</table>

<div class="d-flex justify-content-between p-2">
	<ngb-pagination
		[collectionSize]="collectionSize"
		[(page)]="page"
		[pageSize]="pageSize"
		(pageChange)="refreshCountries()"
	>
	</ngb-pagination>

	<select class="form-select" style="width: auto" [(ngModel)]="pageSize" (ngModelChange)="refreshCountries()">
		<option [ngValue]="2">2 items per page</option>
		<option [ngValue]="4">4 items per page</option>
		<option [ngValue]="6">6 items per page</option>
	</select>
</div>`,tsCode:`import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

interface Country {
	id?: number;
	name: string;
	flag: string;
	area: number;
	population: number;
}

const COUNTRIES: Country[] = [
	{
		id: 1,
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		id: 2,
		name: 'France',
		flag: 'c/c3/Flag_of_France.svg',
		area: 640679,
		population: 64979548,
	},
	{
		id: 3,
		name: 'Germany',
		flag: 'b/ba/Flag_of_Germany.svg',
		area: 357114,
		population: 82114224,
	},
	{
		id: 4,
		name: 'Portugal',
		flag: '5/5c/Flag_of_Portugal.svg',
		area: 92090,
		population: 10329506,
	},
	{
		id: 5,
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		id: 6,
		name: 'Vietnam',
		flag: '2/21/Flag_of_Vietnam.svg',
		area: 331212,
		population: 95540800,
	},
	{
		id: 7,
		name: 'Brazil',
		flag: '0/05/Flag_of_Brazil.svg',
		area: 8515767,
		population: 209288278,
	},
	{
		id: 8,
		name: 'Mexico',
		flag: 'f/fc/Flag_of_Mexico.svg',
		area: 1964375,
		population: 129163276,
	},
	{
		id: 9,
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		id: 10,
		name: 'India',
		flag: '4/41/Flag_of_India.svg',
		area: 3287263,
		population: 1324171354,
	},
	{
		id: 11,
		name: 'Indonesia',
		flag: '9/9f/Flag_of_Indonesia.svg',
		area: 1910931,
		population: 263991379,
	},
	{
		id: 12,
		name: 'Tuvalu',
		flag: '3/38/Flag_of_Tuvalu.svg',
		area: 26,
		population: 11097,
	},
	{
		id: 13,
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [DecimalPipe, FormsModule, NgbTypeaheadModule, NgbPaginationModule],
	templateUrl: './table.component.html',
})
export class TableComponent {
	page = 1;
	pageSize = 4;
	collectionSize = COUNTRIES.length;
	countries: Country[];

  constructor() {
		this.refreshCountries();
	}

	refreshCountries() {
		this.countries = COUNTRIES.map((country, i) => ({ id: i + 1, ...country })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}`},E=[{id:1,name:"Russia",flag:"f/f3/Flag_of_Russia.svg",area:17075200,population:146989754},{id:2,name:"Canada",flag:"c/cf/Flag_of_Canada.svg",area:9976140,population:36624199},{id:3,name:"United States",flag:"a/a4/Flag_of_the_United_States.svg",area:9629091,population:324459463},{id:4,name:"China",flag:"f/fa/Flag_of_the_People%27s_Republic_of_China.svg",area:9596960,population:1409517397}],ve={asc:"desc",desc:"","":"asc"},xe=(l,r)=>l<r?-1:l>r?1:0,F=class l{sortable="";direction="";sort=new D;rotate(){this.direction=ve[this.direction],this.sort.emit({column:this.sortable,direction:this.direction})}static \u0275fac=function(a){return new(a||l)};static \u0275dir=z({type:l,selectors:[["th","sortable",""]],hostVars:4,hostBindings:function(a,n){a&1&&f("click",function(){return n.rotate()}),a&2&&O("asc",n.direction==="asc")("desc",n.direction==="desc")},inputs:{sortable:"sortable",direction:"direction"},outputs:{sort:"sort"},standalone:!0})};function Te(l,r){return E.filter(a=>{let n=l.toLowerCase();return a.name.toLowerCase().includes(n)||r.transform(a.area).includes(n)||r.transform(a.population).includes(n)})}var ce=[{id:1,name:"Russia",flag:"f/f3/Flag_of_Russia.svg",area:17075200,population:146989754},{id:2,name:"France",flag:"c/c3/Flag_of_France.svg",area:640679,population:64979548},{id:3,name:"Germany",flag:"b/ba/Flag_of_Germany.svg",area:357114,population:82114224},{id:4,name:"Portugal",flag:"5/5c/Flag_of_Portugal.svg",area:92090,population:10329506},{id:5,name:"Canada",flag:"c/cf/Flag_of_Canada.svg",area:9976140,population:36624199},{id:6,name:"Vietnam",flag:"2/21/Flag_of_Vietnam.svg",area:331212,population:95540800},{id:7,name:"Brazil",flag:"0/05/Flag_of_Brazil.svg",area:8515767,population:209288278},{id:8,name:"Mexico",flag:"f/fc/Flag_of_Mexico.svg",area:1964375,population:129163276},{id:9,name:"United States",flag:"a/a4/Flag_of_the_United_States.svg",area:9629091,population:324459463},{id:10,name:"India",flag:"4/41/Flag_of_India.svg",area:3287263,population:1324171354},{id:11,name:"Indonesia",flag:"9/9f/Flag_of_Indonesia.svg",area:1910931,population:263991379},{id:12,name:"Tuvalu",flag:"3/38/Flag_of_Tuvalu.svg",area:26,population:11097},{id:13,name:"China",flag:"f/fa/Flag_of_the_People%27s_Republic_of_China.svg",area:9596960,population:1409517397}],de=class l{countries=E;countries$;filter=new K("",{nonNullable:!0});page=1;pageSize=4;collectionSize=ce.length;countries_pagination;headers;defaultTableCode;sortableTableCode;searchFilteringTableCode;paginationTableCode;constructor(r){this.countries$=this.filter.valueChanges.pipe(R(""),k(a=>Te(a,r))),this.refreshCountries()}ngOnInit(){this.defaultTableCode=_e,this.sortableTableCode=Ce,this.searchFilteringTableCode=Se,this.paginationTableCode=ye}onSort({column:r,direction:a}){for(let n of this.headers)n.sortable!==r&&(n.direction="");a===""||r===""?this.countries=E:this.countries=[...E].sort((n,s)=>{let c=xe(n[r],s[r]);return a==="asc"?c:-c})}refreshCountries(){this.countries_pagination=ce.map((r,a)=>V({_id:a+1},r)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize)}scrollTo(r){r.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(a){return new(a||l)(M(x))};static \u0275cmp=U({type:l,selectors:[["app-table"]],viewQuery:function(a,n){if(a&1&&A(F,5),a&2){let s;H(s=L())&&(n.headers=s)}},standalone:!0,features:[W([x]),Q],decls:136,vars:15,consts:[["default",""],["sortable",""],["searchFiltering",""],["pagination",""],[1,"row"],[1,"col-xl-10","main-content","ps-xl-4","pe-xl-5"],[1,"page-title"],[1,"lead"],["href","https://ng-bootstrap.github.io/#/components/table/examples","target","_blank"],[1,"mb-3"],[1,"example"],[1,"table","table-striped"],["scope","col"],[3,"codeContent"],["scope","col","sortable","name",3,"sort"],["scope","col","sortable","area",3,"sort"],["scope","col","sortable","population",3,"sort"],[1,"mb-3","row"],["for","table-filtering-search",1,"col-xs-3","col-sm-auto","col-form-label"],[1,"col-xs-3","col-sm-auto"],["id","table-filtering-search","type","text",1,"form-control",3,"formControl"],[1,"d-flex","justify-content-between","flex-wrap","p-2"],[3,"pageChange","collectionSize","page","pageSize"],[1,"form-select","mb-0","mb-sm-3",2,"width","auto",3,"ngModelChange","ngModel"],[3,"ngValue"],[1,"col-xl-2","content-nav-wrapper"],[1,"nav","content-nav","d-flex","flex-column"],[1,"nav-item"],[1,"nav-link",3,"click"],["scope","row"],[1,"me-2","w-20px",3,"src","alt"],[3,"result","term"],["colspan","4",2,"text-align","center"]],template:function(a,n){if(a&1){let s=B();e(0,"div",4)(1,"div",5)(2,"h1",6),i(3,"Table"),t(),e(4,"p",7),i(5,"Here are some simple examples of common table features. Read the "),e(6,"a",8),i(7,"Official Ng-Bootstrap Documentation"),t(),i(8," for a full list of instructions and other options."),t(),d(9,"hr"),e(10,"h4",null,0),i(12,"Basic Example"),t(),e(13,"p",9),i(14,"Table is just a mapping of objects to table rows with "),e(15,"code"),i(16,"@for"),t()(),e(17,"div",10)(18,"table",11)(19,"thead")(20,"tr")(21,"th",12),i(22,"#"),t(),e(23,"th",12),i(24,"Country"),t(),e(25,"th",12),i(26,"Area"),t(),e(27,"th",12),i(28,"Population"),t()()(),e(29,"tbody"),S(30,ue,12,10,"tr",null,w),t()()(),d(32,"app-code-preview",13)(33,"hr"),e(34,"h4",null,1),i(36,"Sortable table"),t(),e(37,"p",9),i(38,"You can introduce custom directives for table headers to sort columns"),t(),e(39,"div",10)(40,"table",11)(41,"thead")(42,"tr")(43,"th",12),i(44,"#"),t(),e(45,"th",14),f("sort",function(p){return u(s),g(n.onSort(p))}),i(46,"Country"),t(),e(47,"th",15),f("sort",function(p){return u(s),g(n.onSort(p))}),i(48,"Area"),t(),e(49,"th",16),f("sort",function(p){return u(s),g(n.onSort(p))}),i(50,"Population"),t()()(),e(51,"tbody"),S(52,ge,12,10,"tr",null,w),t()()(),d(54,"app-code-preview",13)(55,"hr"),e(56,"h4",null,2),i(58,"Search and filtering"),t(),e(59,"p",9),i(60,"You can do filter table data, in this case with observables and "),e(61,"code"),i(62,"NgbHighlight"),t(),i(63," component used in Typeahead"),t(),e(64,"div",10)(65,"form")(66,"div",17)(67,"label",18),i(68,"Full text search:"),t(),e(69,"div",19),d(70,"input",20),t()()(),e(71,"table",11)(72,"thead")(73,"tr")(74,"th",12),i(75,"#"),t(),e(76,"th",12),i(77,"Country"),t(),e(78,"th",12),i(79,"Area"),t(),e(80,"th",12),i(81,"Population"),t()()(),e(82,"tbody"),S(83,fe,12,13,"tr",null,w,!1,he,3,0,"tr"),b(86,"async"),t()()(),d(87,"app-code-preview",13)(88,"hr"),e(89,"h4",null,3),i(91,"Pagination"),t(),e(92,"p",9),i(93,"You can bind "),e(94,"code"),i(95,"NgbPagination"),t(),i(96," component with slicing the data list"),t(),e(97,"div",10)(98,"table",11)(99,"thead")(100,"tr")(101,"th",12),i(102,"#"),t(),e(103,"th",12),i(104,"Country"),t(),e(105,"th",12),i(106,"Area"),t(),e(107,"th",12),i(108,"Population"),t()()(),e(109,"tbody"),S(110,be,12,10,"tr",null,w),t()(),e(112,"div",21)(113,"ngb-pagination",22),I("pageChange",function(p){return u(s),N(n.page,p)||(n.page=p),g(p)}),f("pageChange",function(){return u(s),g(n.refreshCountries())}),t(),e(114,"select",23),I("ngModelChange",function(p){return u(s),N(n.pageSize,p)||(n.pageSize=p),g(p)}),f("ngModelChange",function(){return u(s),g(n.refreshCountries())}),e(115,"option",24),i(116,"2 items per page"),t(),e(117,"option",24),i(118,"4 items per page"),t(),e(119,"option",24),i(120,"6 items per page"),t()()()(),d(121,"app-code-preview",13),t(),e(122,"div",25)(123,"ul",26)(124,"li",27)(125,"a",28),f("click",function(){u(s);let p=v(11);return g(n.scrollTo(p))}),i(126,"Basic example"),t()(),e(127,"li",27)(128,"a",28),f("click",function(){u(s);let p=v(35);return g(n.scrollTo(p))}),i(129,"Sortable table"),t()(),e(130,"li",27)(131,"a",28),f("click",function(){u(s);let p=v(57);return g(n.scrollTo(p))}),i(132,"Search and filtering"),t()(),e(133,"li",27)(134,"a",28),f("click",function(){u(s);let p=v(90);return g(n.scrollTo(p))}),i(135,"Pagination"),t()()()()()}a&2&&(o(30),y(n.countries),o(2),m("codeContent",n.defaultTableCode),o(20),y(n.countries),o(2),m("codeContent",n.sortableTableCode),o(16),m("formControl",n.filter),o(13),y(_(86,13,n.countries$)),o(4),m("codeContent",n.searchFilteringTableCode),o(23),y(n.countries_pagination),o(3),m("collectionSize",n.collectionSize),P("page",n.page),m("pageSize",n.pageSize),o(),P("ngModel",n.pageSize),o(),m("ngValue",2),o(2),m("ngValue",4),o(2),m("ngValue",6),o(2),m("codeContent",n.paginationTableCode))},dependencies:[me,x,F,j,oe,Z,ie,ae,G,te,Y,q,ee,se,ne,X,J,pe,le,re],encapsulation:2})};export{F as NgbdSortableHeader,de as TableComponent};
