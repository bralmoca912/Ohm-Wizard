import{a as R}from"./chunk-S3BAL55N.js";import{Fa as s,Ja as a,Na as o,Oa as n,Pa as u,Qa as m,Ra as _,Va as l,Wa as f,X as k,Xa as d,ab as T,sa as c}from"./chunk-D4LKNTR5.js";function E(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function S(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function x(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function h(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function v(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function g(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function O(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function y(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function w(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function F(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function I(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function j(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function A(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function D(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function M(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function q(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function z(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function B(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function G(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function K(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function L(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function V(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function H(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function J(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function N(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function P(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function Q(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function U(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function W(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function X(t,r){t&1&&(o(0,"p",15),l(1,"O"),n())}function Y(t,r){if(t&1&&l(0),t&2){let p=_(2);d(" ",p.valresistencia/1e9," [GOhm]")}}function Z(t,r){if(t&1&&l(0),t&2){let p=_(2);d(" ",p.valresistencia/1e6," [MOhm]")}}function $(t,r){if(t&1&&l(0),t&2){let p=_(2);d(" ",p.valresistencia/1e3," [KOhm]")}}function ee(t,r){if(t&1&&l(0),t&2){let p=_(2);d(" ",p.valresistencia," [Ohm] ")}}function te(t,r){if(t&1&&(o(0,"p",28),s(1,Y,1,1)(2,Z,1,1)(3,$,1,1)(4,ee,1,1),n()),t&2){let p=_();c(),a(1,p.valresistencia>=1e9?1:p.valresistencia>=1e6?2:p.valresistencia>=1e3?3:4)}}function ne(t,r){t&1&&(o(0,"p",29),l(1," 0 Ohm"),n(),o(2,"p",29),l(3,"Selecciones los 3 colores"),n())}function oe(t,r){if(t&1&&(o(0,"p"),l(1,"Color 1: "),o(2,"span",30),l(3),n()()),t&2){let p=_();c(3),f(p.opColor1)}}function ie(t,r){if(t&1&&(o(0,"p"),l(1,"Color 2: "),o(2,"span",30),l(3),n()()),t&2){let p=_();c(3),f(p.opColor2)}}function le(t,r){if(t&1&&(o(0,"p"),l(1,"Color 3: "),o(2,"span",30),l(3),n()()),t&2){let p=_();c(3),d("x10^",p.opColor3,"")}}var ae=(()=>{let r=class r{constructor(){this.opColor1=10,this.opColor2=10,this.opColor3=10,this.valresistencia=0}color1(C){switch(C){case 0:this.opColor1=0;break;case 1:this.opColor1=1;break;case 2:this.opColor1=2;break;case 3:this.opColor1=3;break;case 4:this.opColor1=4;break;case 5:this.opColor1=5;break;case 6:this.opColor1=6;break;case 7:this.opColor1=7;break;case 8:this.opColor1=8;break;case 9:this.opColor1=9;break}}color2(C){switch(C){case 0:this.opColor2=0;break;case 1:this.opColor2=1;break;case 2:this.opColor2=2;break;case 3:this.opColor2=3;break;case 4:this.opColor2=4;break;case 5:this.opColor2=5;break;case 6:this.opColor2=6;break;case 7:this.opColor2=7;break;case 8:this.opColor2=8;break;case 9:this.opColor2=9;break}}color3(C){switch(C){case 0:this.opColor3=0;break;case 1:this.opColor3=1;break;case 2:this.opColor3=2;break;case 3:this.opColor3=3;break;case 4:this.opColor3=4;break;case 5:this.opColor3=5;break;case 6:this.opColor3=6;break;case 7:this.opColor3=7;break;case 8:this.opColor3=8;break;case 9:this.opColor3=9;break}}calcresistencia(){this.valresistencia=(this.opColor1*10+this.opColor2)*10**this.opColor3}};r.\u0275fac=function(b){return new(b||r)},r.\u0275cmp=k({type:r,selectors:[["app-color-res"]],standalone:!0,features:[T],decls:106,vars:34,consts:[["title","C\xF3digo de colores para resistencias el\xE9ctricas"],[1,"border-y-2","border-slate-600/70","p-2"],[1,"text-sm","text-justify","mb-3","hidden","md:block"],[1,"md:text-sm","sm:text-xs","text-justify"],[1,"border-x-2","border-slate-600/70","pt-1","mt-5"],[1,"md:text-xl","sm:text-sm","text-white","font-semibold","bg-indigo-600","px-2","py-1"],[1,"md:text-base","sm:text-xs","py-2","flex","justify-center","flex-wrap","lg:gap-20","gap-7","mt-2","px-1"],[1,"grid","justify-items-center"],[1,"font-serif","font-semibold","mb-2","text-center"],["src","https://cdn.energygo.es/embed/112632bd362b84e9b944a73a0c88b1660079672/Colores-resistencias-electricas.jpeg?imagick=1&size=750.png","alt","",1,"border-","border-cyan-500","img-w-h"],[1,"md:text-base","sm:text-xs"],[1,"border","border-slate-400","grid","grid-cols-3","w-48","mx-auto"],[1,"flex","flex-col","border-2","border-slate-400"],[1,"text-center","rounded","px-1"],[1,"border","text-white","py-3","bg-slate-950",3,"click"],[1,"font-bold","-my-3"],[1,"border","text-white","py-3","bg-amber-950",3,"click"],[1,"border","text-white","py-3","bg-red-700",3,"click"],[1,"border","text-white","py-3","bg-orange-600",3,"click"],[1,"border","text-white","py-3","bg-yellow-400",3,"click"],[1,"border","text-white","py-3","bg-green-500",3,"click"],[1,"border","text-white","py-3","bg-blue-600",3,"click"],[1,"border","text-white","py-3","bg-purple-700",3,"click"],[1,"border","text-white","py-3","bg-gray-500",3,"click"],[1,"border","text-black","py-3","bg-slate-50",3,"click"],[1,"border-2","border-cyan-600","my-auto","grid","justify-items-centera","place-items-center","p-2"],[1,"md:text-xl","sm:text-base","font-semibold","mb-2"],[1,"border","border-black","rounded-xl","px-1","mb-6","max-w-48"],[1,"text-cyan-600","text-xl","font-bold","text-center"],[1,"text-slate-500","text-center"],[1,"font-semibold"]],template:function(b,e){b&1&&(u(0,"app-title",0),o(1,"div",1)(2,"p",2)(3,"strong"),l(4,"Importancia de los c\xF3digos de colores en resistencias"),n(),u(5,"br"),l(6," Los colores en las resistencias dictan el valor en Ohm de las mismas. Conocer los c\xF3digos de colores de las resistencias es esencial en electr\xF3nica y electricidad. Estos c\xF3digos brindan detalles cruciales sobre la resistencia, facilitando el dise\xF1o y mantenimiento de circuitos. Al interpretar correctamente los colores presentes en una resistencia, los ingenieros y t\xE9cnicos pueden determinar con precisi\xF3n su resistencia el\xE9ctrica, lo que es vital para el dise\xF1o y mantenimiento de circuitos electr\xF3nicos. Adem\xE1s, comprender los c\xF3digos de colores permite identificar f\xE1cilmente las resistencias y evitar errores costosos durante la construcci\xF3n y reparaci\xF3n de circuitos. "),n(),o(7,"p",3)(8,"strong"),l(9,"Bienvenido"),n(),u(10,"br"),l(11," A nuestra herramienta en l\xEDnea para calcular el valor de las resistencias mediante sus c\xF3digos de colores. Con solo ingresar los colores de las bandas en la resistencia, nuestra calculadora proporcionar\xE1 instant\xE1neamente el valor de resistencia correspondiente. "),n()(),o(12,"div",4)(13,"div",5)(14,"p"),l(15,"Calculadora de Resistencias por c\xF3digo de color"),n()(),o(16,"div",6)(17,"div",7)(18,"h3",8),l(19,"1) Tabla de referencia de los c\xF3digos de colores"),n(),u(20,"img",9),n(),o(21,"div",10)(22,"h3",8),l(23,"2) Elija los colores de su resistencia"),n(),o(24,"div",11)(25,"div",12)(26,"h2",13),l(27,"Color 1"),n(),o(28,"button",14),m("click",function(){return e.color1(0)})("click",function(){return e.calcresistencia()}),s(29,E,2,0,"p",15),n(),o(30,"button",16),m("click",function(){return e.color1(1)})("click",function(){return e.calcresistencia()}),s(31,S,2,0,"p",15),n(),o(32,"button",17),m("click",function(){return e.color1(2)})("click",function(){return e.calcresistencia()}),s(33,x,2,0,"p",15),n(),o(34,"button",18),m("click",function(){return e.color1(3)})("click",function(){return e.calcresistencia()}),s(35,h,2,0,"p",15),n(),o(36,"button",19),m("click",function(){return e.color1(4)})("click",function(){return e.calcresistencia()}),s(37,v,2,0,"p",15),n(),o(38,"button",20),m("click",function(){return e.color1(5)})("click",function(){return e.calcresistencia()}),s(39,g,2,0,"p",15),n(),o(40,"button",21),m("click",function(){return e.color1(6)})("click",function(){return e.calcresistencia()}),s(41,O,2,0,"p",15),n(),o(42,"button",22),m("click",function(){return e.color1(7)})("click",function(){return e.calcresistencia()}),s(43,y,2,0,"p",15),n(),o(44,"button",23),m("click",function(){return e.color1(8)})("click",function(){return e.calcresistencia()}),s(45,w,2,0,"p",15),n(),o(46,"button",24),m("click",function(){return e.color1(9)})("click",function(){return e.calcresistencia()}),s(47,F,2,0,"p",15),n()(),o(48,"div",12)(49,"h2",13),l(50,"Color 2"),n(),o(51,"button",14),m("click",function(){return e.color2(0)})("click",function(){return e.calcresistencia()}),s(52,I,2,0,"p",15),n(),o(53,"button",16),m("click",function(){return e.color2(1)})("click",function(){return e.calcresistencia()}),s(54,j,2,0,"p",15),n(),o(55,"button",17),m("click",function(){return e.color2(2)})("click",function(){return e.calcresistencia()}),s(56,A,2,0,"p",15),n(),o(57,"button",18),m("click",function(){return e.color2(3)})("click",function(){return e.calcresistencia()}),s(58,D,2,0,"p",15),n(),o(59,"button",19),m("click",function(){return e.color2(4)})("click",function(){return e.calcresistencia()}),s(60,M,2,0,"p",15),n(),o(61,"button",20),m("click",function(){return e.color2(5)})("click",function(){return e.calcresistencia()}),s(62,q,2,0,"p",15),n(),o(63,"button",21),m("click",function(){return e.color2(6)})("click",function(){return e.calcresistencia()}),s(64,z,2,0,"p",15),n(),o(65,"button",22),m("click",function(){return e.color2(7)})("click",function(){return e.calcresistencia()}),s(66,B,2,0,"p",15),n(),o(67,"button",23),m("click",function(){return e.color2(8)})("click",function(){return e.calcresistencia()}),s(68,G,2,0,"p",15),n(),o(69,"button",24),m("click",function(){return e.color2(9)})("click",function(){return e.calcresistencia()}),s(70,K,2,0,"p",15),n()(),o(71,"div",12)(72,"h2",13),l(73,"Color 3"),n(),o(74,"button",14),m("click",function(){return e.color3(0)})("click",function(){return e.calcresistencia()}),s(75,L,2,0,"p",15),n(),o(76,"button",16),m("click",function(){return e.color3(1)})("click",function(){return e.calcresistencia()}),s(77,V,2,0,"p",15),n(),o(78,"button",17),m("click",function(){return e.color3(2)})("click",function(){return e.calcresistencia()}),s(79,H,2,0,"p",15),n(),o(80,"button",18),m("click",function(){return e.color3(3)})("click",function(){return e.calcresistencia()}),s(81,J,2,0,"p",15),n(),o(82,"button",19),m("click",function(){return e.color3(4)})("click",function(){return e.calcresistencia()}),s(83,N,2,0,"p",15),n(),o(84,"button",20),m("click",function(){return e.color3(5)})("click",function(){return e.calcresistencia()}),s(85,P,2,0,"p",15),n(),o(86,"button",21),m("click",function(){return e.color3(6)})("click",function(){return e.calcresistencia()}),s(87,Q,2,0,"p",15),n(),o(88,"button",22),m("click",function(){return e.color3(7)})("click",function(){return e.calcresistencia()}),s(89,U,2,0,"p",15),n(),o(90,"button",23),m("click",function(){return e.color3(8)})("click",function(){return e.calcresistencia()}),s(91,W,2,0,"p",15),n(),o(92,"button",24),m("click",function(){return e.color3(9)})("click",function(){return e.calcresistencia()}),s(93,X,2,0,"p",15),n()()()(),o(94,"div",10)(95,"h3",8),l(96,"3) Resultado Calculado"),n(),o(97,"div",25)(98,"h1",26),l(99,"Valor de la resistencia:"),n(),o(100,"div",27),s(101,te,5,1,"p",28)(102,ne,4,0),n(),s(103,oe,4,1,"p")(104,ie,4,1,"p")(105,le,4,1,"p"),n()()()()),b&2&&(c(29),a(29,e.opColor1==0?29:-1),c(2),a(31,e.opColor1==1?31:-1),c(2),a(33,e.opColor1==2?33:-1),c(2),a(35,e.opColor1==3?35:-1),c(2),a(37,e.opColor1==4?37:-1),c(2),a(39,e.opColor1==5?39:-1),c(2),a(41,e.opColor1==6?41:-1),c(2),a(43,e.opColor1==7?43:-1),c(2),a(45,e.opColor1==8?45:-1),c(2),a(47,e.opColor1==9?47:-1),c(5),a(52,e.opColor2==0?52:-1),c(2),a(54,e.opColor2==1?54:-1),c(2),a(56,e.opColor2==2?56:-1),c(2),a(58,e.opColor2==3?58:-1),c(2),a(60,e.opColor2==4?60:-1),c(2),a(62,e.opColor2==5?62:-1),c(2),a(64,e.opColor2==6?64:-1),c(2),a(66,e.opColor2==7?66:-1),c(2),a(68,e.opColor2==8?68:-1),c(2),a(70,e.opColor2==9?70:-1),c(5),a(75,e.opColor3==0?75:-1),c(2),a(77,e.opColor3==1?77:-1),c(2),a(79,e.opColor3==2?79:-1),c(2),a(81,e.opColor3==3?81:-1),c(2),a(83,e.opColor3==4?83:-1),c(2),a(85,e.opColor3==5?85:-1),c(2),a(87,e.opColor3==6?87:-1),c(2),a(89,e.opColor3==7?89:-1),c(2),a(91,e.opColor3==8?91:-1),c(2),a(93,e.opColor3==9?93:-1),c(8),a(101,e.opColor1!=10&&e.opColor2!=10&&e.opColor3!=10?101:102),c(2),a(103,e.opColor1!=10?103:-1),c(),a(104,e.opColor2!=10?104:-1),c(),a(105,e.opColor3!=10?105:-1))},dependencies:[R]});let t=r;return t})();export{ae as default};
