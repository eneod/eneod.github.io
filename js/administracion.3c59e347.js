(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["administracion"],{2677:function(e,t,a){"use strict";var r=a("8654");t["a"]=r["a"]},"529d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"administracion"},[a("v-card",{staticClass:"mx-auto my-0",attrs:{loading:e.loading,dense:""}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-file-input",{staticClass:"v-btn v-size--default white",staticStyle:{"font-weight":"bolder","font-size":"larger",cursor:"pointer!important","margin-top":"20px","margin-left":"-10px","text-align":"left"},attrs:{rules:e.fileRules,"show-size":"",counter:"",accept:".csv .xls .xlsx",placeholder:"Subir archivo de situación vigente..."},on:{change:e.submitFileSV},model:{value:e.fileExcelSV,callback:function(t){e.fileExcelSV=t},expression:"fileExcelSV"}})],1)],1),a("v-divider",{staticClass:"mx-2"}),a("v-card-text",[a("v-chip-group",{attrs:{"active-class":"primary white--text",column:""},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}},[a("v-chip",{attrs:{outlined:"",color:e.svColor}},[e._v(e._s(e.$store.state.database.dbSV.archivo))]),a("v-chip",{attrs:{outlined:"",color:e.svColor}},[e._v(e._s(e.$store.state.database.dbSV.archivoSize))]),a("v-chip",{attrs:{outlined:"",color:e.svColor}},[e._v(" "+e._s(e.$store.state.database.dbSV.archivoTipo))]),a("v-chip",{attrs:{outlined:"",color:e.svColor}},[e._v(e._s(e.$store.state.database.dbSV.archivoUltimaFecha))]),a("v-chip",[e._v("Registros: "+e._s(e.$store.state.database.dbSV.archivoRegistros))])],1)],1)],2),a("div",{staticStyle:{height:"10px"}}),a("v-card",{staticClass:"mx-auto my-0",attrs:{loading:e.loading,dense:""}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-file-input",{staticClass:"v-btn v-size--default white",staticStyle:{"font-weight":"bolder","font-size":"larger",cursor:"pointer!important","margin-top":"20px","margin-left":"-10px","text-align":"left"},attrs:{rules:e.fileRules,"show-size":"",counter:"",accept:".csv .xls .xlsx",placeholder:"Subir archivo de alfabetico..."},on:{change:e.submitFileALF},model:{value:e.fileExcelALF,callback:function(t){e.fileExcelALF=t},expression:"fileExcelALF"}})],1)],1),a("v-divider",{staticClass:"mx-2"}),a("v-card-text",[a("v-chip-group",{attrs:{"active-class":"primary white--text",column:""},model:{value:e.selectionALF,callback:function(t){e.selectionALF=t},expression:"selectionALF"}},[a("v-chip",{attrs:{outlined:"",color:e.alfColor}},[e._v(e._s(e.$store.state.database.dbALF.archivo))]),a("v-chip",{attrs:{outlined:"",color:e.alfColor}},[e._v(e._s(e.$store.state.database.dbALF.archivoSize))]),a("v-chip",{attrs:{outlined:"",color:e.alfColor}},[e._v(e._s(e.$store.state.database.dbALF.archivoTipo))]),a("v-chip",{attrs:{outlined:"",color:e.alfColor}},[e._v(e._s(e.$store.state.database.dbALF.archivoUltimaFecha))]),a("v-chip",[e._v("Registros: "+e._s(e.$store.state.database.dbALF.archivoRegistros))])],1)],1)],2),a("div",{staticStyle:{height:"10px"}}),a("v-card",{staticClass:"mx-auto my-0",attrs:{loading:e.loading,dense:""}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-file-input",{staticClass:"v-btn v-size--default white",staticStyle:{"font-weight":"bolder","font-size":"larger",cursor:"pointer!important","margin-top":"20px","margin-left":"-10px","text-align":"left"},attrs:{rules:e.fileRules,"show-size":"",counter:"",accept:".csv .xls .xlsx",placeholder:"Subir archivo de profesores..."},on:{change:e.submitFilePROF},model:{value:e.fileExcelPROF,callback:function(t){e.fileExcelPROF=t},expression:"fileExcelPROF"}})],1)],1),a("v-divider",{staticClass:"mx-2"}),a("v-card-text",[a("v-chip-group",{attrs:{"active-class":"primary white--text",column:""},model:{value:e.selectionPROF,callback:function(t){e.selectionPROF=t},expression:"selectionPROF"}},[a("v-chip",{attrs:{outlined:"",color:e.profColor}},[e._v(e._s(e.$store.state.database.dbPROF.archivo))]),a("v-chip",{attrs:{outlined:"",color:e.profColor}},[e._v(e._s(e.$store.state.database.dbPROF.archivoSize))]),a("v-chip",{attrs:{outlined:"",color:e.profColor}},[e._v(e._s(e.$store.state.database.dbPROF.archivoTipo))]),a("v-chip",{attrs:{outlined:"",color:e.profColor}},[e._v(e._s(e.$store.state.database.dbPROF.archivoUltimaFecha))]),a("v-chip",[e._v("Registros: "+e._s(e.$store.state.database.dbPROF.archivoRegistros))])],1)],1)],2),a("div",{staticStyle:{height:"10px"}}),a("v-card",{staticClass:"mx-auto my-0",attrs:{loading:e.loading,dense:""}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-file-input",{staticClass:"v-btn v-size--default white",staticStyle:{"font-weight":"bolder","font-size":"larger",cursor:"pointer!important","margin-top":"20px","margin-left":"-10px","text-align":"left"},attrs:{rules:e.fileRules,"show-size":"",counter:"",accept:".csv .xls .xlsx",placeholder:"Subir archivo de asignaturas..."},on:{change:e.submitFileASIG},model:{value:e.fileExcelASIG,callback:function(t){e.fileExcelASIG=t},expression:"fileExcelASIG"}})],1)],1),a("v-divider",{staticClass:"mx-2"}),a("v-card-text",[a("v-chip-group",{attrs:{"active-class":"primary white--text",column:""},model:{value:e.selectionASIG,callback:function(t){e.selectionASIG=t},expression:"selectionASIG"}},[a("v-chip",{attrs:{outlined:"",color:e.asigColor}},[e._v(e._s(e.$store.state.database.dbASIG.archivo))]),a("v-chip",{attrs:{outlined:"",color:e.asigColor}},[e._v(e._s(e.$store.state.database.dbASIG.archivoSize))]),a("v-chip",{attrs:{outlined:"",color:e.asigColor}},[e._v(" "+e._s(e.$store.state.database.dbASIG.archivoTipo))]),a("v-chip",{attrs:{outlined:"",color:e.asigColor}},[e._v(e._s(e.$store.state.database.dbASIG.archivoUltimaFecha))]),a("v-chip",[e._v("Registros: "+e._s(e.$store.state.database.dbASIG.archivoRegistros))])],1)],1),a("v-divider",{staticClass:"mt-0 mx-4"}),"green"==e.profColor&&"green"==e.svColor&&"green"==e.alfColor?a("v-card-text",{staticStyle:{"background-color":"#193051"}},[a("div",{staticStyle:{width:'"100%"',"text-align":"right"}},[a("v-chip",{staticClass:"mr-2",attrs:{color:"green"},on:{click:e.procesar}},[a("v-icon",{attrs:{left:""}},[e._v("mdi-cog")]),e._v(" Procesar")],1),a("v-chip",{staticClass:"mr-2",attrs:{color:"#DFA924"},on:{click:e.cancel}},[a("v-icon",{attrs:{left:""}},[e._v("mdi-backspace")]),e._v(" Cancelar ")],1)],1)]):e._e()],2),a("v-overlay",{attrs:{value:e.overlay}},[a("v-card",{staticClass:"mx-auto",attrs:{color:"#FBFBFB",dark:"","max-width":"490"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card-text",{staticClass:"headline font-weight-bold",staticStyle:{"text-align":"center",color:"black"}},[e._v("\n              Cargando registros ...\n            ")])],1),a("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[a("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"64"}})],1)],1)],1)],1),a("v-snackbar",{attrs:{color:e.colorSnack},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n          "+e._s(e.msgSanck)+"\n          "),a("v-btn",{attrs:{text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n              Cerrar\n          ")])],1)],1)},i=[],o=(a("ac6a"),a("7f7f"),a("28a5"),{name:"administracion",components:{},data:function(){return{svColor:"gray",alfColor:"gray",profColor:"gray",asigColor:"gray",overlay:!1,loading:!1,selection:4,selectionALF:4,selectionPROF:4,selectionASIG:4,fixedHeader:!0,dense:!0,hayErroresFile:"",snackbar:!1,colorSnack:"",msgSanck:"",fileRules:[function(e){return!e||e.size<2e7||"Archivo < 20 MB!"}],fileExcelSV:[],fileExcelALF:[],fileExcelPROF:[],fileExcelASIG:[],errorFileBase64:"",arraySV:[],arrayASIG:[]}},methods:{submitFileSV:function(){var e=this;if(console.log("SV Database..."),this.overlay=!0,this.$store.state.database.dbSV.archivo="Nombre",this.$store.state.database.dbSV.archivoSize="Tamaño",this.$store.state.database.dbSV.archivoTipo="Tipo",this.$store.state.database.dbSV.archivoUltimaFecha="Última fecha modificación",this.$store.state.database.dbSV.data={},this.$store.state.database.dbSV.archivoRegistros=0,this.errorFileBase64="",this.hayErroresFile=!1,void 0==this.fileExcelSV||""==this.fileExcelSV)return console.log("No File Chosen"),this.snackbar=!0,this.msgSanck="No ha elegido un archivo",this.colorSnack="red",void(this.overlay=!1);var t=this.fileExcelSV.name.split("."),a=t[t.length-1];console.log(a),this.$store.state.database.dbSV.archivo=this.fileExcelSV.name,this.$store.state.database.dbSV.archivoSize=this.fileExcelSV.size/100,this.$store.state.database.dbSV.archivoTipo=this.fileExcelSV.type,this.$store.state.database.dbSV.archivoUltimaFecha=this.fileExcelSV.lastModifiedDate;var r=new FileReader;r.readAsBinaryString(this.fileExcelSV),r.onload=function(){e.excel64=r.result;var t=XLSX.read(e.excel64,{type:"binary"}),a=t.SheetNames[0];e.$store.state.database.dbSV.data=XLSX.utils.sheet_to_row_object_array(t.Sheets[a]),e.$store.state.database.dbSV.archivoRegistros=e.$store.state.database.dbSV.data.length,e.$store.state.database.dbSV.data.forEach(l);var i="",o="",s="";function l(e,t,a){e.id=t,a[t]=null,e.hasOwnProperty("__EMPTY_1")&&e.hasOwnProperty("__EMPTY_4")&&e.hasOwnProperty("__EMPTY_7")&&e.hasOwnProperty("__EMPTY_13")&&e.hasOwnProperty("__EMPTY_17")&&e.hasOwnProperty("__EMPTY_18")&&e.hasOwnProperty("__EMPTY_23")&&e.hasOwnProperty("__EMPTY_25")&&e.hasOwnProperty("__EMPTY_26")&&e.hasOwnProperty("__EMPTY_28")&&e.hasOwnProperty("__EMPTY_33")&&e.hasOwnProperty("__EMPTY_36")?(e.id=t,e["noEmpleado"]=i,e["rfc"]=o,e["nombreCompleto"]=s,e["numPlaza"]=e["__EMPTY_1"].trim(),delete e["__EMPTY_1"],e["categoria"]=e["__EMPTY_4"].trim(),delete e["__EMPTY_4"],e["descCategoria"]=e["__EMPTY_7"].trim(),delete e["__EMPTY_7"],e["codProgramatico"]=e["__EMPTY_13"].trim(),delete e["__EMPTY_13"],e["fechaIni"]=e["__EMPTY_17"].trim(),delete e["__EMPTY_17"],e["fechaTer"]=e["__EMPTY_18"].trim(),delete e["__EMPTY_18"],e["teo"]=e["__EMPTY_23"].trim(),delete e["__EMPTY_23"],e["pra"]=e["__EMPTY_25"].trim(),delete e["__EMPTY_25"],e["totHoras"]=e["__EMPTY_26"].trim(),delete e["__EMPTY_26"],e["sueldo"]=e["__EMPTY_28"].trim(),delete e["__EMPTY_28"],e["uniPag"]=e["__EMPTY_33"].trim(),delete e["__EMPTY_33"],e["areaAsignatura"]=e["__EMPTY_36"].trim(),delete e["__EMPTY_36"],a[t]=e):e.hasOwnProperty("__EMPTY_4")&&e.hasOwnProperty("__EMPTY_7")&&e.hasOwnProperty("__EMPTY_13")&&e.hasOwnProperty("__EMPTY_17")&&e.hasOwnProperty("__EMPTY_18")&&e.hasOwnProperty("__EMPTY_23")&&e.hasOwnProperty("__EMPTY_25")&&e.hasOwnProperty("__EMPTY_26")&&e.hasOwnProperty("__EMPTY_28")&&e.hasOwnProperty("__EMPTY_33")&&e.hasOwnProperty("__EMPTY_36")?(e.id=t,e["__EMPTY_1"]="",e["noEmpleado"]=i,e["rfc"]=o,e["nombreCompleto"]=s,e["numPlaza"]=e["__EMPTY_1"].trim(),delete e["__EMPTY_1"],e["categoria"]=e["__EMPTY_4"].trim(),delete e["__EMPTY_4"],e["descCategoria"]=e["__EMPTY_7"].trim(),delete e["__EMPTY_7"],e["codProgramatico"]=e["__EMPTY_13"].trim(),delete e["__EMPTY_13"],e["fechaIni"]=e["__EMPTY_17"].trim(),delete e["__EMPTY_17"],e["fechaTer"]=e["__EMPTY_18"].trim(),delete e["__EMPTY_18"],e["teo"]=e["__EMPTY_23"].trim(),delete e["__EMPTY_23"],e["pra"]=e["__EMPTY_25"].trim(),delete e["__EMPTY_25"],e["totHoras"]=e["__EMPTY_26"].trim(),delete e["__EMPTY_26"],e["sueldo"]=e["__EMPTY_28"].trim(),delete e["__EMPTY_28"],e["uniPag"]=e["__EMPTY_33"].trim(),delete e["__EMPTY_33"],e["areaAsignatura"]=e["__EMPTY_36"].trim(),delete e["__EMPTY_36"],a[t]=e):e.hasOwnProperty("__EMPTY_4")&&e.hasOwnProperty("__EMPTY_7")&&e.hasOwnProperty("__EMPTY_13")&&e.hasOwnProperty("__EMPTY_17")&&e.hasOwnProperty("__EMPTY_23")&&e.hasOwnProperty("__EMPTY_25")&&e.hasOwnProperty("__EMPTY_26")&&e.hasOwnProperty("__EMPTY_28")&&e.hasOwnProperty("__EMPTY_33")&&e.hasOwnProperty("__EMPTY_36")?(e.id=t,e["__EMPTY_1"]="",e["__EMPTY_18"]="",e["noEmpleado"]=i,e["rfc"]=o,e["nombreCompleto"]=s,e["numPlaza"]=e["__EMPTY_1"].trim(),delete e["__EMPTY_1"],e["categoria"]=e["__EMPTY_4"].trim(),delete e["__EMPTY_4"],e["descCategoria"]=e["__EMPTY_7"].trim(),delete e["__EMPTY_7"],e["codProgramatico"]=e["__EMPTY_13"].trim(),delete e["__EMPTY_13"],e["fechaIni"]=e["__EMPTY_17"].trim(),delete e["__EMPTY_17"],e["fechaTer"]=e["__EMPTY_18"].trim(),delete e["__EMPTY_18"],e["teo"]=e["__EMPTY_23"].trim(),delete e["__EMPTY_23"],e["pra"]=e["__EMPTY_25"].trim(),delete e["__EMPTY_25"],e["totHoras"]=e["__EMPTY_26"].trim(),delete e["__EMPTY_26"],e["sueldo"]=e["__EMPTY_28"].trim(),delete e["__EMPTY_28"],e["uniPag"]=e["__EMPTY_33"].trim(),delete e["__EMPTY_33"],e["areaAsignatura"]=e["__EMPTY_36"].trim(),delete e["__EMPTY_36"],a[t]=e):e.hasOwnProperty("__EMPTY_1")&&e.hasOwnProperty("__EMPTY_4")&&e.hasOwnProperty("__EMPTY_9")&&("No. Emp"==e.__EMPTY_1?(e.id=t,a[t]=null):(e.id=t,i=e["__EMPTY_1"].trim(),o=e["__EMPTY_4"].trim(),s=e["__EMPTY_9"].trim(),a[t]=null))}function n(e,t,a){return null!=e}e.$store.state.database.dbSV.data=e.$store.state.database.dbSV.data.filter(n),e.$store.state.database.dbSV.archivoRegistros=e.$store.state.database.dbSV.data.length,e.svColor="green",console.log(e.$store.state.database),console.log("==========="),e.colorSnack="green",e.snackbar=!0,e.msgSanck="Base de datos Situación vigente cargada",e.overlay=!1}},submitFileALF:function(){var e=this;if(console.log("ALF Database..."),this.overlay=!0,this.$store.state.database.dbALF.archivo="Nombre",this.$store.state.database.dbALF.archivoSize="Tamaño",this.$store.state.database.dbALF.archivoTipo="Tipo",this.$store.state.database.dbALF.archivoUltimaFecha="Última fecha modificación",this.$store.state.database.dbALF.data={},this.$store.state.database.dbALF.archivoRegistros=0,this.errorFileBase64="",this.hayErroresFile=!1,void 0==this.fileExcelALF||""==this.fileExcelALF)return console.log("No File Chosen"),this.snackbar=!0,this.msgSanck="No ha elegido un archivo",this.colorSnack="red",void(this.overlay=!1);var t=this.fileExcelALF.name.split("."),a=t[t.length-1];console.log(a),this.$store.state.database.dbALF.archivo=this.fileExcelALF.name,this.$store.state.database.dbALF.archivoSize=this.fileExcelALF.size/100,this.$store.state.database.dbALF.archivoTipo=this.fileExcelALF.type,this.$store.state.database.dbALF.archivoUltimaFecha=this.fileExcelALF.lastModifiedDate;var r=new FileReader;r.readAsBinaryString(this.fileExcelALF),r.onload=function(){e.excel64=r.result;var t=XLSX.read(e.excel64,{type:"binary"}),a=t.SheetNames[0];function i(e,t,a){e.id=t,a[t]=e,e.hasOwnProperty(" aniosadmin")?e["aniosadmin"]=e[" aniosadmin"]:e["aniosadmin"]="",e.hasOwnProperty(" aniosdoc")?e["aniosdoc"]=e[" aniosdoc"]:e["aniosdoc"]="",e.hasOwnProperty(" curp")?e["curp"]=e[" curp"]:e["curp"]="",e.hasOwnProperty(" genero")?e["genero"]=e[" genero"]:e["genero"]="",e.hasOwnProperty(" horasdoc")?e["horasdoc"]=e[" horasdoc"]:e["horasdoc"]="",e.hasOwnProperty(" nombre")?e["nombreCompleto"]=e[" nombre"]:e["nombreCompleto"]="",e.hasOwnProperty(" plaza")?e["numPlaza"]=e[" plaza"]:e["numPlaza"]="",e.hasOwnProperty(" porcenadmin")?e["porcenadmin"]=e[" porcenadmin"]:e["porcenadmin"]="",e.hasOwnProperty(" porcendoc")?e["porcendoc"]=e[" porcendoc"]:e["porcendoc"]="",e.hasOwnProperty(" rfc")?e["rfc"]=e[" rfc"]:e["rfc"]="",e.hasOwnProperty(" tipoemp")?e["tipoemp"]=e[" tipoemp"]:e["tipoemp"]="",e.hasOwnProperty("clave categoria")?e["categoria"]=e["clave categoria"]:e["categoria"]="",e.hasOwnProperty("codigo programatico")?e["codProgramatico"]=e["codigo programatico"]:e["codProgramatico"]="",e.hasOwnProperty("nombre categoria")?e["descCategoria"]=e["nombre categoria"]:e["descCategoria"]="",e.hasOwnProperty("numero empleado")?e["noEmpleado"]=e["numero empleado"]:e["noEmpleado"]="",e.hasOwnProperty("quincena")?e["quincena"]=e["quincena"]:e["quincena"]="",delete e[" aniosadmin"],delete e[" aniosdoc"],delete e[" curp"],delete e[" genero"],delete e[" horasdoc"],delete e[" nombre"],delete e[" plaza"],delete e[" porcenadmin"],delete e[" porcendoc"],delete e[" rfc"],delete e[" tipoemp"],delete e["clave categoria"],delete e["codigo programatico"],delete e["nombre categoria"],delete e["numero empleado"]}e.$store.state.database.dbALF.data=XLSX.utils.sheet_to_row_object_array(t.Sheets[a]),e.$store.state.database.dbALF.archivoRegistros=e.$store.state.database.dbALF.data.length,e.$store.state.database.dbALF.data.forEach(i),e.alfColor="green",console.log(e.$store.state.database),e.colorSnack="green",e.snackbar=!0,e.msgSanck="Base de datos Alfabetico cargada",e.overlay=!1}},submitFilePROF:function(){var e=this;if(console.log("PROF Database..."),this.overlay=!0,this.$store.state.database.dbPROF.archivo="Nombre",this.$store.state.database.dbPROF.archivoSize="Tamaño",this.$store.state.database.dbPROF.archivoTipo="Tipo",this.$store.state.database.dbPROF.archivoUltimaFecha="Última fecha modificación",this.$store.state.database.dbPROF.data={},this.$store.state.database.dbPROF.archivoRegistros=0,this.errorFileBase64="",this.hayErroresFile=!1,void 0==this.fileExcelPROF||""==this.fileExcelPROF)return console.log("No File Chosen"),this.snackbar=!0,this.msgSanck="No ha elegido un archivo",this.colorSnack="red",void(this.overlay=!1);var t=this.fileExcelPROF.name.split("."),a=t[t.length-1];console.log(a),this.$store.state.database.dbPROF.archivo=this.fileExcelPROF.name,this.$store.state.database.dbPROF.archivoSize=this.fileExcelPROF.size/100,this.$store.state.database.dbPROF.archivoTipo=this.fileExcelPROF.type,this.$store.state.database.dbPROF.archivoUltimaFecha=this.fileExcelPROF.lastModifiedDate;var r=new FileReader;r.readAsBinaryString(this.fileExcelPROF),r.onload=function(){e.excel64=r.result;var t=XLSX.read(e.excel64,{type:"binary"}),a=t.SheetNames[0];function i(e,t,a){e.id=t,a[t]=e,e.hasOwnProperty("ANTIGÜEDAD LABORAL EN LA ENEO (AÑOS Y MESES)")?e["antiguedad"]=e["ANTIGÜEDAD LABORAL EN LA ENEO (AÑOS Y MESES)"]:e["antiguedad"]="",e.hasOwnProperty("CURP (MAYÚSCULAS)")?e["curp"]=e["CURP (MAYÚSCULAS)"]:e["curp"]="",e.hasOwnProperty("DIRECCIÓN DE CORREO ELECTRÓNICO")?e["email"]=e["DIRECCIÓN DE CORREO ELECTRÓNICO"]:e["email"]="",e.hasOwnProperty("DOMICILIO (CALLE Y NÚMERO EXTERIOR E INTERIOR, COLONIA, ALCALDÍA O MUNICIPIO, ESTADO, CÓDIGO POSTAL)")?e["domicilio"]=e["DOMICILIO (CALLE Y NÚMERO EXTERIOR E INTERIOR, COLONIA, ALCALDÍA O MUNICIPIO, ESTADO, CÓDIGO POSTAL)"]:e["domicilio"]="",e.hasOwnProperty("EDAD (AÑOS Y MESES)")?e["edad"]=e["EDAD (AÑOS Y MESES)"]:e["edad"]="",e.hasOwnProperty("ESTADO CIVIL ")?e["edoCivil"]=e["ESTADO CIVIL "]:e["edoCivil"]="",e.hasOwnProperty("FECHA EN QUE INGRESÓ A LABORAR A LA ENEO ")?e["fechaIngreso"]=e["FECHA EN QUE INGRESÓ A LABORAR A LA ENEO "]:e["fechaIngreso"]="",e.hasOwnProperty("GÉNERO")?e["genero"]=e["GÉNERO"]:e["genero"]="",e.hasOwnProperty("NACIONALIDAD")?e["nacionalidad"]=e["NACIONALIDAD"]:e["nacionalidad"]="",e.hasOwnProperty("NOMBRAMIENTO EN LA ENEO")?e["nombramientoEneo"]=e["NOMBRAMIENTO EN LA ENEO"]:e["nombramientoEneo"]="",e.hasOwnProperty("NOMBRE COMPLETO (NOMBRE(S), APELLIDO PATERNO Y APELLIDO MATERNO)")?e["nombreCompleto"]=e["NOMBRE COMPLETO (NOMBRE(S), APELLIDO PATERNO Y APELLIDO MATERNO)"]:e["nombreCompleto"]="",e.hasOwnProperty("NÚMERO DE EMPLEADO UNAM")?e["noEmpleado"]=e["NÚMERO DE EMPLEADO UNAM"]:e["noEmpleado"]="",e.hasOwnProperty("RFC (MAYÚSCULAS Y CON HOMOCLAVE)")?e["rfc"]=e["RFC (MAYÚSCULAS Y CON HOMOCLAVE)"]:e["rfc"]="",e.hasOwnProperty("TELÉFONO CELULAR (A 10 DÍGITOS)")?e["telCelular"]=e["TELÉFONO CELULAR (A 10 DÍGITOS)"]:e["telCelular"]="",e.hasOwnProperty("TELÉFONO DE CASA (A 10 DÍGITOS)")?e["telCasa"]=e["TELÉFONO DE CASA (A 10 DÍGITOS)"]:e["telCasa"]="",e.hasOwnProperty("TELÉFONO DE TRABAJO (CONMUTADOR Y EXTENSIÓN)")?e["telTrabajo"]=e["TELÉFONO DE TRABAJO (CONMUTADOR Y EXTENSIÓN)"]:e["telTrabajo"]="",e.hasOwnProperty("TIPO DE CONTRATACIÓN EN LA ENEO")?e["tipoContratacion"]=e["TIPO DE CONTRATACIÓN EN LA ENEO"]:e["tipoContratacion"]="",delete e["ANTIGÜEDAD LABORAL EN LA ENEO (AÑOS Y MESES)"],delete e["CURP (MAYÚSCULAS)"],delete e["DIRECCIÓN DE CORREO ELECTRÓNICO"],delete e["DOMICILIO (CALLE Y NÚMERO EXTERIOR E INTERIOR, COLONIA, ALCALDÍA O MUNICIPIO, ESTADO, CÓDIGO POSTAL)"],delete e["EDAD (AÑOS Y MESES)"],delete e["ESTADO CIVIL "],delete e["FECHA EN QUE INGRESÓ A LABORAR A LA ENEO "],delete e["GÉNERO"],delete e["NACIONALIDAD"],delete e["NOMBRAMIENTO EN LA ENEO"],delete e["NOMBRE COMPLETO (NOMBRE(S), APELLIDO PATERNO Y APELLIDO MATERNO)"],delete e["NÚMERO DE EMPLEADO UNAM"],delete e["RFC (MAYÚSCULAS Y CON HOMOCLAVE)"],delete e["TELÉFONO CELULAR (A 10 DÍGITOS)"],delete e["TELÉFONO DE CASA (A 10 DÍGITOS)"],delete e["TELÉFONO DE TRABAJO (CONMUTADOR Y EXTENSIÓN)"],delete e["TIPO DE CONTRATACIÓN EN LA ENEO"]}e.$store.state.database.dbPROF.data=XLSX.utils.sheet_to_row_object_array(t.Sheets[a]),e.$store.state.database.dbPROF.archivoRegistros=e.$store.state.database.dbPROF.data.length,e.$store.state.database.dbPROF.data.forEach(i),e.profColor="green",console.log(e.$store.state.database),e.colorSnack="green",e.snackbar=!0,e.msgSanck="Base de datos Profesores cargada",e.overlay=!1}},submitFileASIG:function(){var e=this;if(console.log("ASIG Database..."),this.overlay=!0,this.$store.state.database.dbASIG.archivo="Nombre",this.$store.state.database.dbASIG.archivoSize="Tamaño",this.$store.state.database.dbASIG.archivoTipo="Tipo",this.$store.state.database.dbASIG.archivoUltimaFecha="Última fecha modificación",this.$store.state.database.dbASIG.data={},this.$store.state.database.dbASIG.archivoRegistros=0,this.errorFileBase64="",this.hayErroresFile=!1,void 0==this.fileExcelASIG||""==this.fileExcelASIG)return console.log("No File Chosen"),this.snackbar=!0,this.msgSanck="No ha elegido un archivo",this.colorSnack="red",void(this.overlay=!1);var t=this.fileExcelASIG.name.split("."),a=t[t.length-1];console.log(a),this.$store.state.database.dbASIG.archivo=this.fileExcelASIG.name,this.$store.state.database.dbASIG.archivoSize=this.fileExcelASIG.size/100,this.$store.state.database.dbASIG.archivoTipo=this.fileExcelASIG.type,this.$store.state.database.dbASIG.archivoUltimaFecha=this.fileExcelASIG.lastModifiedDate;var r=new FileReader;r.readAsBinaryString(this.fileExcelASIG),r.onload=function(){e.excel64=r.result;var t=XLSX.read(e.excel64,{type:"binary"}),a=t.SheetNames[0];function i(e,t,a){e.id=t,a[t]=null,e.hasOwnProperty("SIP - RPCTSGPP")&&e.hasOwnProperty("__EMPTY_1")&&e.hasOwnProperty("__EMPTY_5")&&e.hasOwnProperty("__EMPTY_6")&&e.hasOwnProperty("__EMPTY_7")&&e.hasOwnProperty("__EMPTY_9")&&e.hasOwnProperty("__EMPTY_12")&&e.hasOwnProperty("__EMPTY_14")&&e.hasOwnProperty("__EMPTY_21")?(e.id=t,"Descripción larga"==e.__EMPTY_1?(e.id=t,a[t]=null):(e["clave"]=e["SIP - RPCTSGPP"].trim(),delete e["SIP - RPCTSGPP"],e["asignatura"]=e["__EMPTY_1"].trim(),delete e["__EMPTY_1"],e["curric"]=e["__EMPTY_5"].trim(),delete e["__EMPTY_5"],e["creditos"]=e["__EMPTY_6"].trim(),delete e["__EMPTY_6"],e["horasTeoricas"]=e["__EMPTY_7"].trim(),delete e["__EMPTY_7"],e["horasPracticas"]=e["__EMPTY_9"].trim(),delete e["__EMPTY_9"],e["horasTotales"]=e["__EMPTY_12"].trim(),delete e["__EMPTY_12"],e["tipoAsignatura"]=e["__EMPTY_14"].trim(),delete e["__EMPTY_14"],e["vigente"]=e["__EMPTY_21"].trim(),delete e["__EMPTY_21"],e["funcionAsignada"]="",a[t]=e)):(e.__EMPTY_1,e.id=t,a[t]=null)}function o(e,t,a){return null!=e}e.$store.state.database.dbASIG.data=XLSX.utils.sheet_to_row_object_array(t.Sheets[a]),e.$store.state.database.dbASIG.archivoRegistros=e.$store.state.database.dbASIG.data.length,e.$store.state.database.dbASIG.data.forEach(i),e.$store.state.database.dbASIG.data=e.$store.state.database.dbASIG.data.filter(o),e.$store.state.database.dbASIG.archivoRegistros=e.$store.state.database.dbASIG.data.length,e.asigColor="green",console.log(e.$store.state.database),console.log("==========="),e.colorSnack="green",e.snackbar=!0,e.msgSanck="Base de datos Asignaturas cargada",e.overlay=!1}},submitFile:function(){var e=this;if(this.overlay=!0,this.archivo="Nombre",this.archivoSize="Tamaño",this.archivoTipo="Tipo",this.archivoUltimaFecha="Última fecha modificación",this.$store.state.dbCargada="",this.errorFileBase64="",this.hayErroresFile=!1,void 0==this.fileExcel||""==this.fileExcel)return console.log("No File Chosen"),this.snackbar=!0,this.msgSanck="No ha elegido un archivo",this.colorSnack="red",void(this.overlay=!1);var t=this.fileExcel.name.split("."),a=t[t.length-1];console.log(a),this.$store.state.archivo=this.fileExcel.name,this.$store.state.archivoSize=this.fileExcel.size/100,this.$store.state.archivoTipo=this.fileExcel.type,this.$store.state.archivoUltimaFecha=this.fileExcel.lastModifiedDate;var r=new FileReader;r.readAsBinaryString(this.fileExcel),r.onload=function(){e.excel64=r.result;var t=XLSX.read(e.excel64,{type:"binary"}),a=t.SheetNames[0];function i(e,t,a){e.ID=t,a[t]=e}e.$store.state.database=XLSX.utils.sheet_to_row_object_array(t.Sheets[a]),e.$store.state.archivoRegistros=e.$store.state.database.length,e.$store.state.database.forEach(i),e.$store.state.dbCargada="green",console.log(e.$store.state.database),e.colorSnack="green",e.snackbar=!0,e.msgSanck="Base de datos cargada",e.overlay=!1}},cancel:function(){this.svColor="gray",this.alfColor="gray",this.profColor="gray",this.$store.state.database={dbSV:{archivo:"Nombre",archivoSize:"Tamaño",archivoTipo:"Tipo",archivoUltimaFecha:"Última fecha modificación",archivoRegistros:0,data:{}},dbALF:{archivo:"Nombre",archivoSize:"Tamaño",archivoTipo:"Tipo",archivoUltimaFecha:"Última fecha modificación",archivoRegistros:0,data:{}},dbPROF:{archivo:"Nombre",archivoSize:"Tamaño",archivoTipo:"Tipo",archivoUltimaFecha:"Última fecha modificación",archivoRegistros:0,data:{}}},this.fileExcelSV=[],this.fileExcelALF=[],this.fileExcelPROF=[],this.fileExcelASIG=[]},procesar:function(){console.log("procesando...")}}}),s=o,l=a("2877"),n=a("6544"),c=a.n(n),d=a("8336"),h=a("b0af"),_=a("99d9"),p=a("cc20"),u=(a("8e6e"),a("456d"),a("bd86")),E=(a("8f5a"),a("7efd")),v=a("a9ad"),b=a("58df");function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){Object(u["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m=Object(b["a"])(E["a"],v["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return O(O({},E["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(e){e&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,O({},E["a"].options.methods.genData.call(this)))}}}),f=a("62ad"),g=a("ce7e6"),S=a("75fc"),T=a("7618"),A=(a("6762"),a("2fdb"),a("c5f6"),a("5803"),a("2677")),y=a("80d2"),M=a("d9bd"),C=a("d9f7");function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(a),!0).forEach((function(t){Object(u["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R=A["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(e){return"boolean"===typeof e||[1e3,1024].includes(e)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(e){return Object(y["J"])(e).every((function(e){return null!=e&&"object"===Object(T["a"])(e)}))}}},computed:{classes:function(){return x(x({},A["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);var t=this.internalArrayValue.reduce((function(e,t){var a=t.size,r=void 0===a?0:a;return e+r}),0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(y["y"])(t,1024===this.base))},internalArrayValue:function(){return Object(y["J"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var e=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(t){var a=t.name,r=void 0===a?"":a,i=t.size,o=void 0===i?0:i,s=e.truncateText(r);return e.showSize?"".concat(s," (").concat(Object(y["y"])(o,1024===e.base),")"):s})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(e){!0===e&&Object(M["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(e){var t=this.multiple?e:e?[e]:[];Object(y["l"])(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var e=this;return this.isDirty?this.text.map((function(t,a){return e.$createElement(p["a"],{props:{small:e.smallChips},on:{"click:close":function(){var t=e.internalValue;t.splice(a,1),e.internalValue=t}}},[t])})):[]},genControl:function(){var e=A["a"].options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(C["d"])(e.data.style,{display:"none"})),e},genInput:function(){var e=A["a"].options.methods.genInput.call(this);return e.data.attrs.multiple=this.multiple,delete e.data.domProps.value,delete e.data.on.input,e.data.on.change=this.onInput,[this.genSelections(),e]},genPrependSlot:function(){var e=this;if(!this.prependIcon)return null;var t=this.genIcon("prepend",(function(){e.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText:function(){var e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections:function(){var e=this,t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(a,r){e.$scopedSlots.selection&&t.push(e.$scopedSlots.selection({text:e.text[r],file:a,index:r}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot:function(){var e=this,t=A["a"].options.methods.genTextFieldSlot.call(this);return t.data.on=x(x({},t.data.on||{}),{},{click:function(){return e.$refs.input.click()}}),t},onInput:function(e){var t=Object(S["a"])(e.target.files||[]);this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown:function(e){this.$emit("keydown",e)},truncateText:function(e){if(e.length<Number(this.truncateLength))return e;var t=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(e.slice(0,t),"…").concat(e.slice(e.length-t))}}}),F=a("132d"),I=a("a797"),L=a("490a"),w=a("8e36"),N=a("0fd9"),$=a("2db4"),D=Object(l["a"])(s,r,i,!1,null,null,null);t["default"]=D.exports;c()(D,{VBtn:d["a"],VCard:h["a"],VCardText:_["b"],VChip:p["a"],VChipGroup:m,VCol:f["a"],VDivider:g["a"],VFileInput:R,VIcon:F["a"],VOverlay:I["a"],VProgressCircular:L["a"],VProgressLinear:w["a"],VRow:N["a"],VSnackbar:$["a"]})},5803:function(e,t,a){},"8f5a":function(e,t,a){}}]);
//# sourceMappingURL=administracion.3c59e347.js.map