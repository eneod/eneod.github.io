(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["administracion"],{2677:function(e,t,a){"use strict";var i=a("8654");t["a"]=i["a"]},"529d":function(e,t,a){"use strict";a.r(t);var i=a("8336"),s=a("b0af"),o=a("99d9"),r=a("cc20"),l=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),n=(a("8f5a"),a("7efd")),c=a("a9ad"),h=a("58df");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=Object(h["a"])(n["a"],c["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return u(u({},n["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(e){e&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,u({},n["a"].options.methods.genData.call(this)))}}}),v=a("62ad"),b=a("ce7e6"),p=a("75fc"),g=(a("7f7f"),a("7618")),m=(a("6762"),a("2fdb"),a("c5f6"),a("5803"),a("2677")),S=a("80d2"),x=a("d9bd"),y=a("d9f7");function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=m["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(e){return"boolean"===typeof e||[1e3,1024].includes(e)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(e){return Object(S["J"])(e).every((function(e){return null!=e&&"object"===Object(g["a"])(e)}))}}},computed:{classes:function(){return $($({},m["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);var t=this.internalArrayValue.reduce((function(e,t){var a=t.size,i=void 0===a?0:a;return e+i}),0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(S["y"])(t,1024===this.base))},internalArrayValue:function(){return Object(S["J"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var e=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(t){var a=t.name,i=void 0===a?"":a,s=t.size,o=void 0===s?0:s,r=e.truncateText(i);return e.showSize?"".concat(r," (").concat(Object(S["y"])(o,1024===e.base),")"):r})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(e){!0===e&&Object(x["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(e){var t=this.multiple?e:e?[e]:[];Object(S["l"])(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var e=this;return this.isDirty?this.text.map((function(t,a){return e.$createElement(r["a"],{props:{small:e.smallChips},on:{"click:close":function(){var t=e.internalValue;t.splice(a,1),e.internalValue=t}}},[t])})):[]},genControl:function(){var e=m["a"].options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(y["d"])(e.data.style,{display:"none"})),e},genInput:function(){var e=m["a"].options.methods.genInput.call(this);return e.data.attrs.multiple=this.multiple,delete e.data.domProps.value,delete e.data.on.input,e.data.on.change=this.onInput,[this.genSelections(),e]},genPrependSlot:function(){var e=this;if(!this.prependIcon)return null;var t=this.genIcon("prepend",(function(){e.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText:function(){var e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections:function(){var e=this,t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(a,i){e.$scopedSlots.selection&&t.push(e.$scopedSlots.selection({text:e.text[i],file:a,index:i}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot:function(){var e=this,t=m["a"].options.methods.genTextFieldSlot.call(this);return t.data.on=$($({},t.data.on||{}),{},{click:function(){return e.$refs.input.click()}}),t},onInput:function(e){var t=Object(p["a"])(e.target.files||[]);this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown:function(e){this.$emit("keydown",e)},truncateText:function(e){if(e.length<Number(this.truncateLength))return e;var t=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(e.slice(0,t),"…").concat(e.slice(e.length-t))}}}),O=a("132d"),C=a("a797"),E=a("490a"),k=a("8e36"),R=a("0fd9"),_=a("2db4"),P=function(){var e=this,t=e._self._c;return t("div",{staticClass:"administracion"},[t(s["a"],{staticClass:"mx-auto my-0",attrs:{loading:e.loading,dense:""}},[t("template",{slot:"progress"},[t(k["a"],{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t(o["c"],[t(R["a"],{staticClass:"mx-0",attrs:{align:"center"}},[t(A,{staticClass:"v-btn v-size--default white",staticStyle:{"font-weight":"bolder","font-size":"larger",cursor:"pointer!important","margin-top":"20px","margin-left":"-10px","text-align":"left"},attrs:{rules:e.fileRules,"show-size":"",counter:"",accept:".csv, .xls, .xlsx, .xls",placeholder:"Subir archivo de situación vigente..."},on:{change:e.submitFileSV},model:{value:e.fileExcelSV,callback:function(t){e.fileExcelSV=t},expression:"fileExcelSV"}})],1)],1),t(b["a"],{staticClass:"mx-2"}),t(o["c"],[t(f,{attrs:{"active-class":"primary white--text",column:""},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}},[t(r["a"],{attrs:{outlined:"",color:e.svColor}},[e._v(e._s(e.$store.state.database.dbSV.archivo))]),t(r["a"],{attrs:{outlined:"",color:e.svColor}},[e._v(e._s(e.$store.state.database.dbSV.archivoSize))]),t(r["a"],{attrs:{outlined:"",color:e.svColor}},[e._v(" "+e._s(e.$store.state.database.dbSV.archivoTipo))]),t(r["a"],{attrs:{outlined:"",color:e.svColor}},[e._v(e._s(e.$store.state.database.dbSV.archivoUltimaFecha))]),t(r["a"],[e._v("Registros: "+e._s(e.$store.state.database.dbSV.archivoRegistros))])],1)],1)],2),t("div",{staticStyle:{height:"10px"}}),t(s["a"],{staticClass:"mx-auto my-0",attrs:{loading:e.loading,dense:""}},[t("template",{slot:"progress"},[t(k["a"],{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t(o["c"],[t(R["a"],{staticClass:"mx-0",attrs:{align:"center"}},[t(A,{staticClass:"v-btn v-size--default white",staticStyle:{"font-weight":"bolder","font-size":"larger",cursor:"pointer!important","margin-top":"20px","margin-left":"-10px","text-align":"left"},attrs:{rules:e.fileRules,"show-size":"",counter:"",accept:".csv, .xls, .xlsx, .xls",placeholder:"Subir archivo de alfabetico..."},on:{change:e.submitFileALF},model:{value:e.fileExcelALF,callback:function(t){e.fileExcelALF=t},expression:"fileExcelALF"}})],1)],1),t(b["a"],{staticClass:"mx-2"}),t(o["c"],[t(f,{attrs:{"active-class":"primary white--text",column:""},model:{value:e.selectionALF,callback:function(t){e.selectionALF=t},expression:"selectionALF"}},[t(r["a"],{attrs:{outlined:"",color:e.alfColor}},[e._v(e._s(e.$store.state.database.dbALF.archivo))]),t(r["a"],{attrs:{outlined:"",color:e.alfColor}},[e._v(e._s(e.$store.state.database.dbALF.archivoSize))]),t(r["a"],{attrs:{outlined:"",color:e.alfColor}},[e._v(e._s(e.$store.state.database.dbALF.archivoTipo))]),t(r["a"],{attrs:{outlined:"",color:e.alfColor}},[e._v(e._s(e.$store.state.database.dbALF.archivoUltimaFecha))]),t(r["a"],[e._v("Registros: "+e._s(e.$store.state.database.dbALF.archivoRegistros))])],1)],1)],2),t("div",{staticStyle:{height:"10px"}}),t(s["a"],{staticClass:"mx-auto my-0",attrs:{loading:e.loading,dense:""}},[t("template",{slot:"progress"},[t(k["a"],{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t(o["c"],[t(R["a"],{staticClass:"mx-0",attrs:{align:"center"}},[t(A,{staticClass:"v-btn v-size--default white",staticStyle:{"font-weight":"bolder","font-size":"larger",cursor:"pointer!important","margin-top":"20px","margin-left":"-10px","text-align":"left"},attrs:{rules:e.fileRules,"show-size":"",counter:"",accept:".csv, .xls, .xlsx, .xls",placeholder:"Subir archivo de profesores..."},on:{change:e.submitFilePROF},model:{value:e.fileExcelPROF,callback:function(t){e.fileExcelPROF=t},expression:"fileExcelPROF"}})],1)],1),t(b["a"],{staticClass:"mx-2"}),t(o["c"],[t(f,{attrs:{"active-class":"primary white--text",column:""},model:{value:e.selectionPROF,callback:function(t){e.selectionPROF=t},expression:"selectionPROF"}},[t(r["a"],{attrs:{outlined:"",color:e.profColor}},[e._v(e._s(e.$store.state.database.dbPROF.archivo))]),t(r["a"],{attrs:{outlined:"",color:e.profColor}},[e._v(e._s(e.$store.state.database.dbPROF.archivoSize))]),t(r["a"],{attrs:{outlined:"",color:e.profColor}},[e._v(e._s(e.$store.state.database.dbPROF.archivoTipo))]),t(r["a"],{attrs:{outlined:"",color:e.profColor}},[e._v(e._s(e.$store.state.database.dbPROF.archivoUltimaFecha))]),t(r["a"],[e._v("Registros: "+e._s(e.$store.state.database.dbPROF.archivoRegistros))])],1)],1)],2),t("div",{staticStyle:{height:"10px"}}),t(s["a"],{staticClass:"mx-auto my-0",attrs:{loading:e.loading,dense:""}},[t("template",{slot:"progress"},[t(k["a"],{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t(o["c"],[t(R["a"],{staticClass:"mx-0",attrs:{align:"center"}},[t(A,{staticClass:"v-btn v-size--default white",staticStyle:{"font-weight":"bolder","font-size":"larger",cursor:"pointer!important","margin-top":"20px","margin-left":"-10px","text-align":"left"},attrs:{rules:e.fileRules,"show-size":"",counter:"",accept:".csv, .xls, .xlsx, .xls",placeholder:"Subir archivo de asignaturas..."},on:{change:e.submitFileASIG},model:{value:e.fileExcelASIG,callback:function(t){e.fileExcelASIG=t},expression:"fileExcelASIG"}})],1)],1),t(b["a"],{staticClass:"mx-2"}),t(o["c"],[t(f,{attrs:{"active-class":"primary white--text",column:""},model:{value:e.selectionASIG,callback:function(t){e.selectionASIG=t},expression:"selectionASIG"}},[t(r["a"],{attrs:{outlined:"",color:e.asigColor}},[e._v(e._s(e.$store.state.database.dbASIG.archivo))]),t(r["a"],{attrs:{outlined:"",color:e.asigColor}},[e._v(e._s(e.$store.state.database.dbASIG.archivoSize))]),t(r["a"],{attrs:{outlined:"",color:e.asigColor}},[e._v(" "+e._s(e.$store.state.database.dbASIG.archivoTipo))]),t(r["a"],{attrs:{outlined:"",color:e.asigColor}},[e._v(e._s(e.$store.state.database.dbASIG.archivoUltimaFecha))]),t(r["a"],[e._v("Registros: "+e._s(e.$store.state.database.dbASIG.archivoRegistros))])],1)],1),t(b["a"],{staticClass:"mt-0 mx-4"}),"green"==e.profColor&&"green"==e.svColor&&"green"==e.alfColor?t(o["c"],{staticStyle:{"background-color":"#193051"}},[t("div",{staticStyle:{width:'"100%"',"text-align":"right"}},[t(r["a"],{staticClass:"mr-2",attrs:{color:"green"},on:{click:e.procesar}},[t(O["a"],{attrs:{left:""}},[e._v("mdi-cog")]),e._v(" Procesar")],1),t(r["a"],{staticClass:"mr-2",attrs:{color:"#DFA924"},on:{click:e.cancel}},[t(O["a"],{attrs:{left:""}},[e._v("mdi-backspace")]),e._v(" Cancelar ")],1)],1)]):e._e()],2),t(C["a"],{attrs:{value:e.overlay}},[t(s["a"],{staticClass:"mx-auto",attrs:{color:"#FBFBFB",dark:"","max-width":"490"}},[t(R["a"],[t(v["a"],{attrs:{cols:"12"}},[t(o["c"],{staticClass:"headline font-weight-bold",staticStyle:{"text-align":"center",color:"black"}},[e._v("\n              Cargando registros ...\n            ")])],1),t(v["a"],{staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[t(E["a"],{attrs:{color:"primary",indeterminate:"",size:"64"}})],1)],1)],1)],1),t(_["a"],{attrs:{color:e.colorSnack},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n          "+e._s(e.msgSanck)+"\n          "),t(i["a"],{attrs:{text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n              Cerrar\n          ")])],1)],1)},z=[],w=(a("28a5"),{name:"administracion",components:{},data:function(){return{svColor:"gray",alfColor:"gray",profColor:"gray",asigColor:"gray",overlay:!1,loading:!1,selection:4,selectionALF:4,selectionPROF:4,selectionASIG:4,fixedHeader:!0,dense:!0,hayErroresFile:"",snackbar:!1,colorSnack:"",msgSanck:"",fileRules:[function(e){return!e||e.size<2e7||"Archivo < 20 MB!"}],fileExcelSV:[],fileExcelALF:[],fileExcelPROF:[],fileExcelASIG:[],errorFileBase64:"",arraySV:[],arrayASIG:[]}},methods:{submitFileSV:function(){var e=this;if(console.log("SV Database..."),this.overlay=!0,this.$store.state.database.dbSV.archivo="Nombre",this.$store.state.database.dbSV.archivoSize="Tamaño",this.$store.state.database.dbSV.archivoTipo="Tipo",this.$store.state.database.dbSV.archivoUltimaFecha="Última fecha modificación",this.$store.state.database.dbSV.archivoRegistros=0,this.errorFileBase64="",this.hayErroresFile=!1,void 0==this.fileExcelSV||""==this.fileExcelSV)return console.log("No File Chosen"),this.snackbar=!0,this.msgSanck="No ha elegido un archivo",this.colorSnack="red",void(this.overlay=!1);var t=this.fileExcelSV.name.split("."),a=t[t.length-1];console.log(a),this.$store.state.database.dbSV.archivo=this.fileExcelSV.name,this.$store.state.database.dbSV.archivoSize=this.fileExcelSV.size/100,this.$store.state.database.dbSV.archivoTipo=this.fileExcelSV.type,this.$store.state.database.dbSV.archivoUltimaFecha=this.fileExcelSV.lastModifiedDate;var i=new FileReader;i.readAsBinaryString(this.fileExcelSV),i.onload=function(){e.excel64=i.result;var t=XLSX.read(e.excel64,{type:"binary"});t.SheetNames[0];e.svColor="green",console.log(e.$store.state.database),console.log("==========="),e.colorSnack="green",e.snackbar=!0,e.msgSanck="Base de datos Situación vigente cargada",e.overlay=!1}},submitFileALF:function(){var e=this;if(console.log("ALF Database..."),this.overlay=!0,this.$store.state.database.dbALF.archivo="Nombre",this.$store.state.database.dbALF.archivoSize="Tamaño",this.$store.state.database.dbALF.archivoTipo="Tipo",this.$store.state.database.dbALF.archivoUltimaFecha="Última fecha modificación",this.$store.state.database.dbALF.archivoRegistros=0,this.errorFileBase64="",this.hayErroresFile=!1,void 0==this.fileExcelALF||""==this.fileExcelALF)return console.log("No File Chosen"),this.snackbar=!0,this.msgSanck="No ha elegido un archivo",this.colorSnack="red",void(this.overlay=!1);var t=this.fileExcelALF.name.split("."),a=t[t.length-1];console.log(a),this.$store.state.database.dbALF.archivo=this.fileExcelALF.name,this.$store.state.database.dbALF.archivoSize=this.fileExcelALF.size/100,this.$store.state.database.dbALF.archivoTipo=this.fileExcelALF.type,this.$store.state.database.dbALF.archivoUltimaFecha=this.fileExcelALF.lastModifiedDate;var i=new FileReader;i.readAsBinaryString(this.fileExcelALF),i.onload=function(){e.excel64=i.result;var t=XLSX.read(e.excel64,{type:"binary"});t.SheetNames[0];e.alfColor="green",console.log(e.$store.state.database),e.colorSnack="green",e.snackbar=!0,e.msgSanck="Base de datos Alfabetico cargada",e.overlay=!1}},submitFilePROF:function(){var e=this;if(console.log("PROF Database..."),this.overlay=!0,this.$store.state.database.dbPROF.archivo="Nombre",this.$store.state.database.dbPROF.archivoSize="Tamaño",this.$store.state.database.dbPROF.archivoTipo="Tipo",this.$store.state.database.dbPROF.archivoUltimaFecha="Última fecha modificación",this.$store.state.database.dbPROF.archivoRegistros=0,this.errorFileBase64="",this.hayErroresFile=!1,void 0==this.fileExcelPROF||""==this.fileExcelPROF)return console.log("No File Chosen"),this.snackbar=!0,this.msgSanck="No ha elegido un archivo",this.colorSnack="red",void(this.overlay=!1);var t=this.fileExcelPROF.name.split("."),a=t[t.length-1];console.log(a),this.$store.state.database.dbPROF.archivo=this.fileExcelPROF.name,this.$store.state.database.dbPROF.archivoSize=this.fileExcelPROF.size/100,this.$store.state.database.dbPROF.archivoTipo=this.fileExcelPROF.type,this.$store.state.database.dbPROF.archivoUltimaFecha=this.fileExcelPROF.lastModifiedDate;var i=new FileReader;i.readAsBinaryString(this.fileExcelPROF),i.onload=function(){e.excel64=i.result;var t=XLSX.read(e.excel64,{type:"binary"});t.SheetNames[0];e.profColor="green",console.log(e.$store.state.database),e.colorSnack="green",e.snackbar=!0,e.msgSanck="Base de datos Profesores cargada",e.overlay=!1}},submitFileASIG:function(){var e=this;if(console.log("ASIG Database..."),this.overlay=!0,this.$store.state.database.dbASIG.archivo="Nombre",this.$store.state.database.dbASIG.archivoSize="Tamaño",this.$store.state.database.dbASIG.archivoTipo="Tipo",this.$store.state.database.dbASIG.archivoUltimaFecha="Última fecha modificación",this.$store.state.database.dbASIG.archivoRegistros=0,this.errorFileBase64="",this.hayErroresFile=!1,void 0==this.fileExcelASIG||""==this.fileExcelASIG)return console.log("No File Chosen"),this.snackbar=!0,this.msgSanck="No ha elegido un archivo",this.colorSnack="red",void(this.overlay=!1);var t=this.fileExcelASIG.name.split("."),a=t[t.length-1];console.log(a),this.$store.state.database.dbASIG.archivo=this.fileExcelASIG.name,this.$store.state.database.dbASIG.archivoSize=this.fileExcelASIG.size/100,this.$store.state.database.dbASIG.archivoTipo=this.fileExcelASIG.type,this.$store.state.database.dbASIG.archivoUltimaFecha=this.fileExcelASIG.lastModifiedDate;var i=new FileReader;i.readAsBinaryString(this.fileExcelASIG),i.onload=function(){e.excel64=i.result;var t=XLSX.read(e.excel64,{type:"binary"});t.SheetNames[0];e.$store.state.database.dbASIG.archivoRegistros=e.$store.state.database.dbASIG.data.length,e.asigColor="green",console.log(e.$store.state.database),console.log("==========="),e.colorSnack="green",e.snackbar=!0,e.msgSanck="Base de datos Asignaturas cargada",e.overlay=!1}},submitFile:function(){var e=this;if(this.overlay=!0,this.archivo="Nombre",this.archivoSize="Tamaño",this.archivoTipo="Tipo",this.archivoUltimaFecha="Última fecha modificación",this.$store.state.dbCargada="",this.errorFileBase64="",this.hayErroresFile=!1,void 0==this.fileExcel||""==this.fileExcel)return console.log("No File Chosen"),this.snackbar=!0,this.msgSanck="No ha elegido un archivo",this.colorSnack="red",void(this.overlay=!1);var t=this.fileExcel.name.split("."),a=t[t.length-1];console.log(a),this.$store.state.archivo=this.fileExcel.name,this.$store.state.archivoSize=this.fileExcel.size/100,this.$store.state.archivoTipo=this.fileExcel.type,this.$store.state.archivoUltimaFecha=this.fileExcel.lastModifiedDate;var i=new FileReader;i.readAsBinaryString(this.fileExcel),i.onload=function(){e.excel64=i.result;var t=XLSX.read(e.excel64,{type:"binary"}),a=t.SheetNames[0];function s(e,t,a){e.ID=t,a[t]=e}e.$store.state.database=XLSX.utils.sheet_to_row_object_array(t.Sheets[a]),e.$store.state.archivoRegistros=e.$store.state.database.length,e.$store.state.database.forEach(s),e.$store.state.dbCargada="green",console.log(e.$store.state.database),e.colorSnack="green",e.snackbar=!0,e.msgSanck="Base de datos cargada",e.overlay=!1}},cancel:function(){this.svColor="gray",this.alfColor="gray",this.profColor="gray",this.$store.state.database={dbSV:{archivo:"Nombre",archivoSize:"Tamaño",archivoTipo:"Tipo",archivoUltimaFecha:"Última fecha modificación",archivoRegistros:0},dbALF:{archivo:"Nombre",archivoSize:"Tamaño",archivoTipo:"Tipo",archivoUltimaFecha:"Última fecha modificación",archivoRegistros:0},dbPROF:{archivo:"Nombre",archivoSize:"Tamaño",archivoTipo:"Tipo",archivoUltimaFecha:"Última fecha modificación",archivoRegistros:0}},this.fileExcelSV=[],this.fileExcelALF=[],this.fileExcelPROF=[],this.fileExcelASIG=[]},procesar:function(){console.log("procesando...")}}}),V=w,I=a("2877"),L=Object(I["a"])(V,P,z,!1,null,null,null);t["default"]=L.exports},5803:function(e,t,a){},"8f5a":function(e,t,a){}}]);
//# sourceMappingURL=administracion.c374912b.js.map