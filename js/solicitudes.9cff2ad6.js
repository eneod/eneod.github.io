(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["solicitudes"],{"31cc":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"solicitudes"},[a("v-card",{attrs:{color:"#193051"}},[a("v-card-title",[a("div",{staticStyle:{color:"white"}},[e._v("Solicitudes")]),a("v-spacer"),a("v-text-field",{attrs:{color:"white",clearable:"","background-color":"white",rounded:"","append-icon":"mdi-magnify",label:"Busqueda","single-line":"","hide-details":""},model:{value:e.$store.state.solicitudes.search,callback:function(t){e.$set(e.$store.state.solicitudes,"search",t)},expression:"$store.state.solicitudes.search"}})],1),a("v-data-table",{attrs:{dense:"","items-per-page":e.itemsPerPage,height:"190","item-key":"rfc","single-select":"",headers:e.$store.state.solicitudes.headers,items:e.$store.state.solicitudes.solicitudes,search:e.$store.state.solicitudes.search,"v-model":e.$store.state.solicitudes.solicitudes.selectedSolicitud,"footer-props":{showFirstLastPage:!0,"items-per-page-text":"Solicitudes por página"}},scopedSlots:e._u([{key:"item",fn:function(t){var o=t.item,s=t.isSelected,l=t.select;return[a("tr",{class:s?"green":"",on:{click:function(t){return e.toggle(o,s,l,t)}}},[a("td",[e._v(e._s(o.fecha))]),a("td",[e._v(e._s(o.tipoMovimiento))]),a("td",[e._v(e._s(o.noEmpleado))]),a("td",[e._v(e._s(o.rfc))]),a("td",[e._v(e._s(o.folioDGP))]),a("td",[e._v(e._s(o.estatus))]),a("td",{},[e._v(e._s(o.nombre))]),a("td",{},[e._v(e._s(o.paterno))]),a("td",{},[e._v(e._s(o.materno))])])]}}])})],1),a("div",{staticStyle:{height:"10px"}}),a("v-card",[a("v-tabs",{attrs:{grow:"",f:"","background-color":"#193051",centered:"",dark:"","icons-and-text":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tabs-slider"),a("v-tab",{attrs:{href:"#tab-1"}},[e._v("\n        Seguimiento\n        "),a("v-icon",[e._v("mdi-source-branch")])],1),a("v-tab",{attrs:{href:"#tab-2"}},[e._v("\n        Personales\n        "),a("v-icon",[e._v("mdi-account-edit")])],1),a("v-tab",{attrs:{href:"#tab-3"}},[e._v("\n        Expediente digital\n        "),a("v-icon",[e._v("mdi-certificate-outline")])],1)],1),a("v-tabs-items",{staticClass:"full-height-tab",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab-item",{key:"1",attrs:{value:"tab-1"}},[a("v-card",{attrs:{flat:""}},[a("seguimiento")],1)],1),a("v-tab-item",{key:"2",attrs:{value:"tab-2"}},[a("v-card",{attrs:{flat:""}},[a("personales")],1)],1),a("v-tab-item",{key:"3",attrs:{value:"tab-3"}},[a("v-card",{attrs:{flat:""}},[a("expediente")],1)],1)],1)],1),a("v-overlay",{attrs:{value:e.overlay}},[a("v-card",{staticClass:"mx-auto",attrs:{color:"#FBFBFB",dark:"","max-width":"490"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card-text",{staticClass:"headline font-weight-bold",staticStyle:{"text-align":"center",color:"black"}},[e._v("\n                Autenticando ...\n              ")])],1),a("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[a("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"64"}})],1)],1)],1)],1),a("v-snackbar",{attrs:{color:e.colorSnack},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n            "+e._s(e.msgSanck)+"\n            "),a("v-btn",{attrs:{text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n                Cerrar\n            ")])],1)],1)},s=[],l=(a("6b54"),a("685a")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"mx-auto mt-2",attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[a("v-text-field",{attrs:{label:"No. Empleado",dense:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.noEmpleado,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"noEmpleado",t)},expression:"$store.state.resultadoSeleccionado.noEmpleado"}})],1),a("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[a("v-text-field",{attrs:{label:"RFC",dense:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.rfc,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"rfc",t)},expression:"$store.state.resultadoSeleccionado.rfc"}})],1),a("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[a("v-text-field",{attrs:{label:"CURP",dense:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.curp,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"curp",t)},expression:"$store.state.resultadoSeleccionado.curp"}})],1),a("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[a("v-text-field",{staticClass:"text-red",attrs:{label:"Folio DGP",dense:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.folioDGP,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"folioDGP",t)},expression:"$store.state.resultadoSeleccionado.folioDGP"}})],1)],1),a("v-row",{staticClass:"mx-auto mt-0",staticStyle:{"margin-top":"-15px!important"},attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[a("v-text-field",{attrs:{label:"Nombre completo",dense:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.nombreCompleto,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"nombreCompleto",t)},expression:"$store.state.resultadoSeleccionado.nombreCompleto"}})],1)],1),a("v-row",{staticClass:"mx-auto mt-0",staticStyle:{"margin-top":"-15px!important"},attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[a("v-text-field",{attrs:{label:"Nacionalidad",dense:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.nacionalidad,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"nacionalidad",t)},expression:"$store.state.resultadoSeleccionado.nacionalidad"}})],1),a("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[a("v-text-field",{attrs:{label:"Estado civil",dense:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.edoCivil,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"edoCivil",t)},expression:"$store.state.resultadoSeleccionado.edoCivil"}})],1),a("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[a("v-text-field",{attrs:{label:"Sexo",dense:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.genero,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"genero",t)},expression:"$store.state.resultadoSeleccionado.genero"}})],1)],1),a("v-row",{staticClass:"mx-auto mt-0",staticStyle:{"margin-top":"-15px!important"},attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[a("v-text-field",{attrs:{label:"Domicilio",dense:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.domicilio,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"domicilio",t)},expression:"$store.state.resultadoSeleccionado.domicilio"}})],1)],1),a("v-row",{staticClass:"mx-auto mt-0",staticStyle:{"margin-top":"-20px!important"},attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[a("v-text-field",{attrs:{label:"Tel Particular",dense:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.telCasa,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"telCasa",t)},expression:"$store.state.resultadoSeleccionado.telCasa"}})],1),a("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[a("v-text-field",{attrs:{label:"Tel celular",dense:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.telCelular,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"telCelular",t)},expression:"$store.state.resultadoSeleccionado.telCelular"}})],1),a("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[a("v-text-field",{attrs:{label:"Email",dense:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.email,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"email",t)},expression:"$store.state.resultadoSeleccionado.email"}})],1)],1),a("v-row",{staticClass:"mx-auto mt-0",staticStyle:{"margin-top":"-15px!important"},attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[a("v-text-field",{attrs:{label:"Tipo mvto",dense:"",filled:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.tipoMovimiento,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"tipoMovimiento",t)},expression:"$store.state.resultadoSeleccionado.tipoMovimiento"}})],1),a("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[a("v-text-field",{attrs:{label:"Tipo contrato",dense:"",filled:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.tipoContratacion,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"tipoContratacion",t)},expression:"$store.state.resultadoSeleccionado.tipoContratacion"}})],1),a("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[a("v-text-field",{attrs:{label:"Fecha inicio",dense:"",filled:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.fechaInicio,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"fechaInicio",t)},expression:"$store.state.resultadoSeleccionado.fechaInicio"}})],1),a("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[a("v-text-field",{attrs:{label:"Fecha termino",dense:"",filled:"",outlined:"",clearable:"",required:"",maxlength:"50"},model:{value:e.$store.state.resultadoSeleccionado.fechaTermino,callback:function(t){e.$set(e.$store.state.resultadoSeleccionado,"fechaTermino",t)},expression:"$store.state.resultadoSeleccionado.fechaTermino"}})],1)],1)],1)},c=[],i={name:"Personales",data:function(){return{}}},n=i,d=(a("971d"),a("2877")),u=a("6544"),m=a.n(u),v=a("62ad"),b=a("a523"),f=a("0fd9"),p=a("8654"),x=Object(d["a"])(n,r,c,!1,null,"62651a9e",null),S=x.exports;m()(x,{VCol:v["a"],VContainer:b["a"],VRow:f["a"],VTextField:p["a"]});var $=a("a8a6"),g={name:"solicitudes",components:{Personales:S,Seguimiento:$["a"],Expediente:l["a"]},data:function(){return{selected:[{rfc:""}],tab:"",itemsPerPage:5,overlay:!1,loading:!1,snackbar:!1,colorSnack:"",msgSanck:"",text:""}},computed:{console:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return console})),window:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return window}))},mounted:function(){this.$store.state.solicitudes.search=""},methods:{toggle:function(e,t,a,o){a(!t),console.log("clicking row"),this.$store.state.solicitudes.selectedSolicitud=e,console.log(this.$store.state.solicitudes.selectedSolicitud)}}},h=g,k=(a("d974"),a("8336")),C=a("b0af"),_=a("99d9"),w=a("8fea"),y=a("132d"),V=a("a797"),q=a("490a"),T=a("2db4"),P=a("2fa4"),E=a("71a3"),F=a("c671"),D=a("fe57"),I=a("aac8"),B=a("9a96"),G=Object(d["a"])(h,o,s,!1,null,"8a9859ea",null);t["default"]=G.exports;m()(G,{VBtn:k["a"],VCard:C["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:v["a"],VDataTable:w["a"],VIcon:y["a"],VOverlay:V["a"],VProgressCircular:q["a"],VRow:f["a"],VSnackbar:T["a"],VSpacer:P["a"],VTab:E["a"],VTabItem:F["a"],VTabs:D["a"],VTabsItems:I["a"],VTabsSlider:B["a"],VTextField:p["a"]})},"5d6e":function(e,t,a){},"971d":function(e,t,a){"use strict";a("5d6e")},b71a:function(e,t,a){},d974:function(e,t,a){"use strict";a("b71a")}}]);
//# sourceMappingURL=solicitudes.9cff2ad6.js.map