(function(t){function e(e){for(var i,o,s=e[0],c=e[1],l=e[2],d=0,u=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);m&&m(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var s=a[o];0!==n[s]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},o={app:0},n={app:0},r=[];function s(t){return c.p+"js/"+({"administracion~nuevasolicitud~solicitudes":"administracion~nuevasolicitud~solicitudes",administracion:"administracion","nuevasolicitud~solicitudes":"nuevasolicitud~solicitudes",nuevasolicitud:"nuevasolicitud",solicitudes:"solicitudes"}[t]||t)+"."+{"administracion~nuevasolicitud~solicitudes":"e1c2b805",administracion:"3c59e347","nuevasolicitud~solicitudes":"fc2744f6",nuevasolicitud:"c8aa51e9",solicitudes:"9cff2ad6"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"administracion~nuevasolicitud~solicitudes":1,administracion:1,"nuevasolicitud~solicitudes":1,nuevasolicitud:1,solicitudes:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var i="css/"+({"administracion~nuevasolicitud~solicitudes":"administracion~nuevasolicitud~solicitudes",administracion:"administracion","nuevasolicitud~solicitudes":"nuevasolicitud~solicitudes",nuevasolicitud:"nuevasolicitud",solicitudes:"solicitudes"}[t]||t)+"."+{"administracion~nuevasolicitud~solicitudes":"eb1539b4",administracion:"b8771642","nuevasolicitud~solicitudes":"2e2ca5da",nuevasolicitud:"7bf72def",solicitudes:"ab7cf8f0"}[t]+".css",n=c.p+i,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===n))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===i||d===n)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var i=e&&e.target&&e.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete o[t],m.parentNode.removeChild(m),a(r)},m.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[t]=0})));var i=n[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,a){i=n[t]=[e,a]}));e.push(i[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(m);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,a[1](u)}n[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var m=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2ae6":function(t,e,a){t.exports=a.p+"img/logounam.68ee3901.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"inspirex"}},[1==t.$store.state.autenticado?[i("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",{staticClass:"px-4 py-1",staticStyle:{"background-color":"#193051"}},[i("v-list-item-avatar",[i("v-img",{staticStyle:{height:"58px"},attrs:{src:"https://as1.ftcdn.net/v2/jpg/02/01/33/54/1000_F_201335438_CNpY0iWaXXAV95Gj8BPB0tEJlMcxWeaZ.jpg"}})],1),i("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(t.$store.state.sesion.rol))])],1),i("v-divider"),i("v-list",{attrs:{dense:""}},[i("v-list-item",{on:{click:function(e){return t.$router.push({name:"home"})}}},[i("v-list-item-icon",[i("v-icon",{attrs:{color:""}},[t._v("mdi-home-city")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Inicio")])],1)],1),i("v-list-item",{on:{click:function(e){return t.$router.push({name:"nuevasolicitud",params:{dialogparam:!0}})}}},[i("v-list-item-icon",[i("v-icon",{attrs:{color:""}},[t._v("mdi-file-document")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Nueva solicitud")])],1)],1),i("v-list-item",{on:{click:function(e){return t.redirije("/administracion")}}},[i("v-list-item-icon",[i("v-icon",{attrs:{color:t.$store.state.dbCargada}},[t._v("mdi-database-edit")])],1),i("v-list-item-content",[i("v-list-item-title",{style:{color:t.$store.state.dbCargada}},[t._v("Administración")])],1)],1)],1)],1),i("v-app-bar",{staticStyle:{border_top:"15px","background-color":"#193051"},attrs:{app:"",dark:""}},[i("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("div",{staticClass:"d-flex align-center ml-8",staticStyle:{"margin-left":"'30px!important'"}},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Unam",contain:"","min-width":"50%",src:a("2ae6"),transition:"scale-transition",width:"40px"}})],1),i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"TotalPlay",contain:"","min-width":"50%",src:"https://web.eneo.unam.mx/wp-content/uploads/2021/08/logo-eneo-bco.png",transition:"scale-transition",width:"55px"}})],1),i("v-spacer"),i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({staticClass:"ma-2",attrs:{"x-large":"",elevation:"0",color:"#193051"}},a),[i("v-avatar",{staticClass:"mx-1",attrs:{size:""}},[i("v-icon",{staticStyle:{"font-size":"40px",color:"#dfa924"},attrs:{dark:""}},[t._v("mdi-account-circle")])],1),i("span",{staticClass:"hidden-sm-and-down",staticStyle:{color:"#dfa924"}},[t._v(t._s(t.$store.state.sesion.usuario))])],1)]}}],null,!1,2776822947)},[i("v-list",[i("v-list-item",[i("v-btn",{attrs:{text:""},on:{click:t.cerrarSession}},[t._v("Cerrar sesión")])],1),i("v-list-item",[i("v-btn",{attrs:{text:""}},[t._v("Versión 1.0.0")])],1)],1)],1)],1),i("v-main",{staticStyle:{width:"100%","background-image":"url('./assets/eneo-back12.png')","background-position":"left","background-repeat":"no-repeat","background-size":"cover"}},[i("v-container",{attrs:{fluid:""}},[i("router-view")],1)],1),i("v-footer",{attrs:{color:"#DFA924",app:""}},[i("span",{staticClass:"white--text",staticStyle:{"text-align":"right",width:"100%"}},[t._v("© "+t._s((new Date).getFullYear()))])])]:[i("login")]],2)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{staticStyle:{"background-image":"url('../assets/eneo-back12.png')","background-position":"left","background-repeat":"no-repeat","background-size":"cover"}},[i("v-app-bar",{staticStyle:{"background-color":"#193051",height:"85px"},attrs:{app:""}},[i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink ml-8 mr-8 mt-6",attrs:{alt:"Unam",contain:"","min-width":"50%",src:a("2ae6"),transition:"scale-transition",width:"40px"}})],1),i("v-spacer"),i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2 mt-4",attrs:{alt:"Eneo",contain:"","min-width":"50%",src:"https://web.eneo.unam.mx/wp-content/uploads/2021/08/logo-eneo-bco.png",transition:"scale-transition",width:"75px"}})],1),i("v-spacer"),i("div",{staticStyle:{"font-size":"15px","font-weight":"bolder",color:"white",width:"100%","text-align":"right","margin-top":"20px !important"}},[t._v("\n      CONTRATACIONES Y TIPOS DE MOVIMIENTOS DEL PERSONAL ACADÉMICO\n    ")])],1),i("v-app-bar",{staticStyle:{"background-color":"#dfa924","margin-top":"80px",height:"25px","text-align":"right"},attrs:{app:""}},[i("div",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","margin-top":"-36px","text-align":"right",width:"100%"}},[t._v("\n      Versión 1.0 2022\n    ")])]),i("v-main",[i("section",{attrs:{id:"hero"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-theme-provider",[i("v-container",{attrs:{"fill-height":""}},[i("v-row",{staticClass:"black--text mx-auto",attrs:{align:"left",justify:"center"}},[i("v-card",{staticClass:"elevation-14",staticStyle:{"margin-top":"70px"},attrs:{width:"320"}},[i("v-card-title",{staticStyle:{"background-color":"#193051","border-color":"#b7730f",color:"white"}},[i("span",{staticClass:"headline",staticStyle:{"text-align":"center",width:"100%"}},[t._v("Ingrese sus credenciales")])]),i("v-card-text",[i("v-container",[i("v-card",{staticClass:"elevation-0"},[i("v-form",{ref:"form",staticStyle:{"font-weight":"bolder"},attrs:{"lazy-validation":""},model:{value:t.formLoginValido,callback:function(e){t.formLoginValido=e},expression:"formLoginValido"}},[i("v-row",{staticClass:"mx-auto",staticStyle:{"margin-top":"15px"},attrs:{dense:""}},[i("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[i("v-text-field",{staticStyle:{"font-size":"12px"},attrs:{rules:t.campoRequerido,label:"Usuario",solo:"",maxlength:"100",required:""},model:{value:t.$store.state.sesion.usuario,callback:function(e){t.$set(t.$store.state.sesion,"usuario",e)},expression:"$store.state.sesion.usuario"}})],1)],1),i("v-row",{staticClass:"mx-auto",staticStyle:{"margin-top":"-15px"},attrs:{dense:""}},[i("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[i("v-text-field",{staticStyle:{"font-size":"12px"},attrs:{rules:t.campoRequerido,type:"password",solo:"",label:"Contraseña",maxlength:"100",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginLdap.apply(null,arguments)}},model:{value:t.$store.state.sesion.contrasenia,callback:function(e){t.$set(t.$store.state.sesion,"contrasenia",e)},expression:"$store.state.sesion.contrasenia"}})],1)],1)],1)],1),i("v-divider")],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticStyle:{"margin-right":"22px"},attrs:{small:"",dark:"",color:"#193051"},on:{click:t.loginLdap}},[t._v("Entrar")])],1)],1)],1)],1)],1)],1)],1)]),i("v-snackbar",{attrs:{color:t.colorSnack},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.msgSanck)+"\n    "),i("v-btn",{attrs:{text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" Cerrar ")])],1),i("v-overlay",{attrs:{value:t.overlay}},[i("v-card",{staticClass:"mx-auto",attrs:{color:"#FBFBFB",dark:"","max-width":"490"}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-card-text",{staticClass:"headline font-weight-bold",staticStyle:{"text-align":"center",color:"black"}},[t._v("\n            Autenticando ...\n          ")])],1),i("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[i("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"64"}})],1)],1)],1)],1)],1)},s=[],c=(a("96cf"),a("3b8d")),l=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}}),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display font-weight-bold mb-3"},[t._v("\n        CONTRATACIONES Y TIPOS DE MOVIMIENTOS DEL PERSONAL ACADÉMICO\n      ")])])],1)],1)},u=[],m={name:"Home",data:function(){return{}}},p=m,v=a("2877"),f=a("6544"),h=a.n(f),g=a("62ad"),b=a("a523"),C=a("0fd9"),A=Object(v["a"])(p,d,u,!1,null,null,null),O=A.exports;h()(A,{VCol:g["a"],VContainer:b["a"],VRow:C["a"]}),i["a"].use(l["a"]);var S=new l["a"]({routes:[{path:"/",name:"home",component:O},{path:"/administracion",name:"administracion",component:function(){return Promise.all([a.e("administracion~nuevasolicitud~solicitudes"),a.e("administracion")]).then(a.bind(null,"529d"))}},{path:"/nuevasolicitud",name:"nuevasolicitud",component:function(){return Promise.all([a.e("administracion~nuevasolicitud~solicitudes"),a.e("nuevasolicitud~solicitudes"),a.e("nuevasolicitud")]).then(a.bind(null,"ed1b"))},props:!0},{path:"/solicitudes",name:"solicitudes",component:function(){return Promise.all([a.e("administracion~nuevasolicitud~solicitudes"),a.e("nuevasolicitud~solicitudes"),a.e("solicitudes")]).then(a.bind(null,"31cc"))}}]}),I={name:"Login",components:{},data:function(){return{formLoginValido:"",campoRequerido:[function(t){return!!t||"El campo es requerido"}],snackbar:!1,colorSnack:"red",msgSanck:"Verifique los campos en rojo",mensaje:!1,overlay:""}},methods:{redirije:function(t){console.log(t),S.push(t)},loginLdap:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.overlay=!0,this.$refs.form.validate()){t.next=10;break}return this.snackbar=!0,this.colorSnack="red",this.msgSanck="Todos los campos son requeridos",this.mensaje=!1,this.overlay=!1,t.abrupt("return");case 10:try{"ulises01"==this.$store.state.sesion.usuario&&"12345678"==this.$store.state.sesion.contrasenia?(this.$store.state.autenticado=!0,$router.push({name:"home"})):(this.overlay=!1,this.snackbar=!0,this.msgSanck="Error : Credenciales inválidas",this.colorSnack="red",this.$store.state.autenticado=!1,this.mensaje=!1)}catch(e){this.overlay=!1,this.snackbar=!0,this.msgSanck="Error : Credenciales inválidas",this.colorSnack="red",this.mensaje=!1}case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},T=I,E=a("7496"),x=a("40dc"),y=a("8336"),w=a("b0af"),k=a("99d9"),N=a("ce7e6"),R=a("4bd4"),P=a("adda"),V=a("f6c4"),L=a("a797"),M=a("490a"),D=a("2db4"),_=a("2fa4"),U=a("8654"),j=a("480e"),G=Object(v["a"])(T,r,s,!1,null,null,null),B=G.exports;h()(G,{VApp:E["a"],VAppBar:x["a"],VBtn:y["a"],VCard:w["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VCol:g["a"],VContainer:b["a"],VDivider:N["a"],VForm:R["a"],VImg:P["a"],VMain:V["a"],VOverlay:L["a"],VProgressCircular:M["a"],VRow:C["a"],VSnackbar:D["a"],VSpacer:_["a"],VTextField:U["a"],VThemeProvider:j["a"]});var $={components:{login:B},name:"App",data:function(){return{drawer:!0,items:[{title:"Inicio",icon:"mdi-home-city",url:"/"},{title:"Base de datos",icon:"mdi-database-edit",url:"/basedatos"},{title:"Teoricos y promedios",icon:"mdi-file-document",url:"/teoricos"}],mini:!1}},methods:{redirije:function(t){console.log(t),S.push(t)},cerrarSession:function(){this.$store.state.autenticado=!1,this.$store.state.usuario="",this.$store.state.contrasenia=""}}},F=$,X=a("5bc1"),H=a("8212"),q=a("553a"),z=a("132d"),Z=a("8860"),Y=a("da13"),J=a("8270"),K=a("5d23"),Q=a("34c3"),W=a("e449"),tt=a("f774"),et=Object(v["a"])(F,o,n,!1,null,null,null),at=et.exports;h()(et,{VApp:E["a"],VAppBar:x["a"],VAppBarNavIcon:X["a"],VAvatar:H["a"],VBtn:y["a"],VContainer:b["a"],VDivider:N["a"],VFooter:q["a"],VIcon:z["a"],VImg:P["a"],VList:Z["a"],VListItem:Y["a"],VListItemAvatar:J["a"],VListItemContent:K["a"],VListItemIcon:Q["a"],VListItemTitle:K["b"],VMain:V["a"],VMenu:W["a"],VNavigationDrawer:tt["a"],VSpacer:_["a"]});var it,ot=a("bd86"),nt=a("2f62");i["a"].use(nt["a"]);var rt={noEmpleado:"",nombreCompleto:"",rfc:"",curp:"",email:"",folioDGP:"",tipoContratacion:"",domicilio:"",nacionalidad:"",fechaIngreso:"",fechaTer:"",telCasa:"",telCelular:"",telTrabajo:"",antiguedad:"",edad:"",edoCivil:"",genero:"",nombramientoEneo:"",categoria:"",descCategoria:"",codProgramatico:"",areaAsignatura:"",sueldo:"",totHoras:"",tipoMovimiento:"",fechaInicio:"",fechaTermino:""},st="",ct=new nt["a"].Store({state:(it={dbCargada:"",autenticado:!1,database:[],archivo:"Nombre",archivoSize:"Tamaño",archivoTipo:"Tipo",archivoUltimaFecha:"Última fecha modificación",archivoRegistros:0},Object(ot["a"])(it,"database",{dbSV:{archivo:"Nombre",archivoSize:"Tamaño",archivoTipo:"Tipo",archivoUltimaFecha:"Última fecha modificación",archivoRegistros:0,data:{}},dbALF:{archivo:"Nombre",archivoSize:"Tamaño",archivoTipo:"Tipo",archivoUltimaFecha:"Última fecha modificación",archivoRegistros:0,data:{}},dbPROF:{archivo:"Nombre",archivoSize:"Tamaño",archivoTipo:"Tipo",archivoUltimaFecha:"Última fecha modificación",archivoRegistros:0,data:{}},dbASIG:{archivo:"Nombre",archivoSize:"Tamaño",archivoTipo:"Tipo",archivoUltimaFecha:"Última fecha modificación",archivoRegistros:0,data:{}}}),Object(ot["a"])(it,"sesion",{usuario:"ulises01",contrasenia:"12345678",rol:"Area adquiriente",rolId:"01"}),Object(ot["a"])(it,"solicitudes",{search:"",solicitudes:[{fecha:"02/03/2022",tipoMovimiento:"ALTA X PRORROGA",noEmpleado:"150980",rfc:"ROHU830121PH7",folioDGP:"DGP00032",estatus:"LIBERADO",curp:"ROHU830121PH73wwqw",paterno:"ROCHA",materno:"HUERTA",nombre:"ULISES",nacionalidad:"MEXICANA",edoCivil:"SOLTERO",sexo:"H",calle:"BENITO JUAREZ",colonia:"PUEBLO QUIETO",poblacion:"TLALPÁN",entidad:"CDMX",telParticular:"552378699",telCelular:"55327699",email:"ulisesh@gmail.com",tipoContrato:"DEFINITIVO",fechaInicio:"01/03/2022",fechaTermino:"31/12/2022",step:5},{fecha:"03/03/2022",tipoMovimiento:"ALTA X OTRO NOMBRAMIENTO",noEmpleado:"150981",rfc:"NUVE770121TY6",folioDGP:"DGP00034",estatus:"AUTORIZADO",curp:"NUVE770121TY68766",paterno:"NUNEZ",materno:"VELAZQUEZ",nombre:"ELSA",nacionalidad:"MEXICANA",edoCivil:"CASADO",sexo:"M",calle:"CALZ ACOXPA",colonia:"HUIPULCO",poblacion:"TLALPAN",entidad:"CDMX",telParticular:"552332299",telCelular:"55008699",email:"elsar@gmail.com",tipoContrato:"CONTRATO",fechaInicio:"01/03/2022",fechaTermino:"31/12/2022",step:3},{fecha:"04/03/2022",tipoMovimiento:"ALTA X NUEVO NOMBRAMIENTO",noEmpleado:"150982",rfc:"YUJI890121RE3",folioDGP:"DGP00078",estatus:"EN DGP",curp:"YUJI890121RE311132",paterno:"YUPEZ",materno:"JIMENEZ",nombre:"ISRAEL",nacionalidad:"MEXICANA",edoCivil:"CASADO",sexo:"H",calle:"4 42",colonia:"ESPARTACO",poblacion:"COYOACAN",entidad:"CDMX",telParticular:"552008699",telCelular:"55324570",email:"israely@gmail.com",tipoContrato:"DEFINITIVO",fechaInicio:"01/03/2022",fechaTermino:"31/12/2022",step:4},{fecha:"05/03/2022",tipoMovimiento:"ALTA X OTRO NOMBRAMIENTO",noEmpleado:"150983",rfc:"GUKO651223LO7",folioDGP:"DGP00012",estatus:"SOLICITADO",curp:"GUKO651223LO788866",paterno:"GUTIERRES",materno:"KRISMO",nombre:"OSCAR",nacionalidad:"MEXICANA",edoCivil:"DIVORCIADO",sexo:"H",calle:"SANTA ANA",colonia:"CULHUACAN",poblacion:"COYOACAN",entidad:"CDMX",telParticular:"552218699",telCelular:"55356799",email:"oscarg@gmail.com",tipoContrato:"CONTRATO",fechaInicio:"01/03/2022",fechaTermino:"31/12/2022",step:1},{fecha:"02/03/2022",tipoMovimiento:"ALTA X NUEVO NOMBRAMIENTO",noEmpleado:"150984",rfc:"RUBI881111OK6",folioDGP:"DGP00067",estatus:"CAPTURA SIP",curp:"RUBI881111OK65334",paterno:"RUANDEZ",materno:"BENITEZ",nombre:"IRMA",nacionalidad:"MEXICANA",edoCivil:"SOLTERO",sexo:"M",calle:"MIGUEL HIDALGO",colonia:"CULHUACAN",poblacion:"COYOACAN",entidad:"CDMX",telParticular:"552312349",telCelular:"55355559",email:"irmar@gmail.com",tipoContrato:"DEFINITIVO",fechaInicio:"01/03/2022",fechaTermino:"31/12/2022",step:2},{fecha:"03/03/2022",tipoMovimiento:"ALTA X PRORROGA",noEmpleado:"150985",rfc:"JONI880303IKO5",folioDGP:"DGP00090",estatus:"SOLICITADO",curp:"JONI880303IKO5434e",paterno:"JOSAR",materno:"NUNEZ",nombre:"ISRAEL",nacionalidad:"MEXICANA",edoCivil:"casado",sexo:"H",calle:"LIRIO",colonia:"TLAZINTLA",poblacion:"IZTACALCO",entidad:"CDMX",telParticular:"556678699",telCelular:"55328899",email:"israelj@gmail.com",tipoContrato:"INTERINO",fechaInicio:"01/03/2022",fechaTermino:"31/12/2022",step:1}],selectedSolicitud:{fecha:"",tipoMovimiento:"",noEmpleado:"",rfc:"",folioDGP:"",estatus:"",curp:"",paterno:"",materno:"",nombre:"",nacionalidad:"",edoCivil:"",sexo:"",calle:"",colonia:"",poblacion:"",entidad:"",telParticular:"",telCelular:"",email:"",tipoContrato:"",fechaInicio:"",fechaTermino:"",step:1},etapas:["Solicitado","Captura SIP","Autorizado (firmas)","En DGP","Liberado"]}),Object(ot["a"])(it,"profesores",[{}]),Object(ot["a"])(it,"resultadoSearch",""),Object(ot["a"])(it,"resultadosBusqueda",[{}]),Object(ot["a"])(it,"resultadoHeaders",[{text:"No emp.",value:"noEmpleado"},{text:"Nombre",value:"nombreCompleto"},{text:"RFC",value:"rfc"},{text:"CURP",value:"curp"},{text:"Email",value:"email"},{text:"Contrato",value:"tipoContratacion"}]),Object(ot["a"])(it,"resultadoSeleccionado",{noEmpleado:"",nombreCompleto:"",rfc:"",curp:"",email:"",folioDGP:"",tipoContratacion:"",domicilio:"",nacionalidad:"",fechaIngreso:"",fechaTer:"",telCasa:"",telCelular:"",telTrabajo:"",antiguedad:"",edad:"",edoCivil:"",genero:"",nombramientoEneo:"",categoria:"",descCategoria:"",codProgramatico:"",areaAsignatura:"",sueldo:"",totHoras:"",tipoMovimiento:"",fechaInicio:"",fechaTermino:""}),it),mutations:{resetState:function(t){Object.assign(t.resultadoSeleccionado,rt)},resetBusqueda:function(t){t.resultadoSearch=st},updateResultSelect:function(t,e){t.resultadoSeleccionado.fechaInicio=e.fechaInicio,t.resultadoSeleccionado.fechaTermino=e.fechaFin,t.resultadoSeleccionado.tipoMovimiento=e.tipoMovimiento,t.resultadoSeleccionado.tipoContratacion=e.tipoContra}},actions:{resetResultadoSeleccionadoState:function(t){var e=t.commit;e("resetState")},resetResultadoBusquedaState:function(t){var e=t.commit;e("resetBusqueda")},updateRslSelect:function(t,e){var a=t.commit;a("updateResultSelect",e)}},getters:{getClavesMaterias:function(t){return t.database.dbASIG.data.map((function(t){return t.clave}))},getNombreMaterias:function(t){return t.database.dbASIG.data.map((function(t){return t.asignatura}))},getNombreMat:function(t){return function(e){var a=t.database.dbASIG.data.filter((function(t){return t.clave===e}));return a[0].asignatura}},getClaveMat:function(t){return function(e){var a=t.database.dbASIG.data.filter((function(t){return t.asignatura===e}));return a[0].clave}}}}),lt=a("f309");i["a"].use(lt["a"]);var dt=new lt["a"]({});i["a"].config.productionTip=!1,window.Event=new i["a"]({router:S,store:ct,vuetify:dt,render:function(t){return t(at)}}).$mount("#app")}});
//# sourceMappingURL=app.d4ba0536.js.map