(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shaoshang"],{"27e2":function(e,l,a){"use strict";a.r(l);var r=function(){var e=this,l=e._self._c;return l("div",{staticClass:"home"},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-position":"top"}},[l("el-form-item",{attrs:{label:e.ruleForm.gettime.key}},[l("el-date-picker",{staticStyle:{width:"50%"},attrs:{type:"date",placeholder:"选择时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.gettime.value,callback:function(l){e.$set(e.ruleForm.gettime,"value",l)},expression:"ruleForm.gettime.value"}},[e._v(" >")])],1),l("el-form-item",{attrs:{label:e.ruleForm.age.key}},[l("el-input",{staticStyle:{width:"50%"},model:{value:e.ruleForm.age.value,callback:function(l){e.$set(e.ruleForm.age,"value",l)},expression:"ruleForm.age.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.txue.key}},[l("el-input",{staticStyle:{width:"50%"},model:{value:e.ruleForm.txue.value,callback:function(l){e.$set(e.ruleForm.txue,"value",l)},expression:"ruleForm.txue.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.resource.key}},[l("el-radio-group",{model:{value:e.ruleForm.resource.value,callback:function(l){e.$set(e.ruleForm.resource,"value",l)},expression:"ruleForm.resource.value"}},[l("el-radio",{attrs:{label:"电烧伤"}}),l("el-radio",{attrs:{label:"化学烧伤"}}),l("el-radio",{attrs:{label:"其他"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.dianliu.key}},[l("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入电流"},model:{value:e.ruleForm.dianliu.value1,callback:function(l){e.$set(e.ruleForm.dianliu,"value1",l)},expression:"ruleForm.dianliu.value1"}}),l("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入电压"},model:{value:e.ruleForm.dianliu.value2,callback:function(l){e.$set(e.ruleForm.dianliu,"value2",l)},expression:"ruleForm.dianliu.value2"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.mingcheng.key}},[l("el-input",{staticStyle:{width:"30%"},attrs:{placeholder:"请输入物品名称"},model:{value:e.ruleForm.mingcheng.value1,callback:function(l){e.$set(e.ruleForm.mingcheng,"value1",l)},expression:"ruleForm.mingcheng.value1"}}),l("el-input",{staticStyle:{width:"30%"},attrs:{placeholder:"请输入浓度"},model:{value:e.ruleForm.mingcheng.value2,callback:function(l){e.$set(e.ruleForm.mingcheng,"value2",l)},expression:"ruleForm.mingcheng.value2"}}),l("el-input",{staticStyle:{width:"30%"},attrs:{placeholder:"请输入主要理化性质"},model:{value:e.ruleForm.mingcheng.value3,callback:function(l){e.$set(e.ruleForm.mingcheng,"value3",l)},expression:"ruleForm.mingcheng.value3"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.cough.key}},[l("el-radio-group",{model:{value:e.ruleForm.cough.value,callback:function(l){e.$set(e.ruleForm.cough,"value",l)},expression:"ruleForm.cough.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.fangfa.key}},[l("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入"},model:{value:e.ruleForm.fangfa.value,callback:function(l){e.$set(e.ruleForm.fangfa,"value",l)},expression:"ruleForm.fangfa.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.more.key}},[l("el-radio-group",{model:{value:e.ruleForm.more.value,callback:function(l){e.$set(e.ruleForm.more,"value",l)},expression:"ruleForm.more.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tanxing.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.tanxing.value,callback:function(l){e.$set(e.ruleForm.tanxing,"value",l)},expression:"ruleForm.tanxing.value"}},[l("el-checkbox",{attrs:{label:"呕吐",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"口渴",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"烦躁",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"小便 ",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"血压  ",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"心率 ",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"呼吸 ",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"神志 ",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"tanxing"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.zhuanyun.key}},[l("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入"},model:{value:e.ruleForm.zhuanyun.value,callback:function(l){e.$set(e.ruleForm.zhuanyun,"value",l)},expression:"ruleForm.zhuanyun.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.gettimes.key}},[l("el-date-picker",{staticStyle:{width:"50%"},attrs:{type:"date",placeholder:"选择时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.gettimes.value,callback:function(l){e.$set(e.ruleForm.gettimes,"value",l)},expression:"ruleForm.gettimes.value"}},[e._v(" >")])],1),l("el-form-item",{attrs:{label:e.ruleForm.bloodcolor.key}},[l("el-radio-group",{model:{value:e.ruleForm.bloodcolor.value,callback:function(l){e.$set(e.ruleForm.bloodcolor,"value",l)},expression:"ruleForm.bloodcolor.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bansui.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.bansui.value,callback:function(l){e.$set(e.ruleForm.bansui,"value",l)},expression:"ruleForm.bansui.value"}},[l("el-checkbox",{attrs:{label:"合并外伤",name:"bansui"}}),l("el-checkbox",{attrs:{label:"中毒",name:"bansui"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"bansui"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.color.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.color.value,callback:function(l){e.$set(e.ruleForm.color,"value",l)},expression:"ruleForm.color.value"}},[l("el-checkbox",{attrs:{label:"结核",name:"color"}}),l("el-checkbox",{attrs:{label:"糖尿病",name:"color"}}),l("el-checkbox",{attrs:{label:"高血压",name:"color"}}),l("el-checkbox",{attrs:{label:"消化性溃疡病",name:"color"}}),l("el-checkbox",{attrs:{label:"药物过敏史（特别是磺胺类药物和青霉素过敏史）",name:"color"}}),l("el-checkbox",{attrs:{label:"手术史",name:"color"}}),l("el-checkbox",{attrs:{label:"心、脑、肺、肝、肾等全身脏器疾患",name:"color"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"color"}})],1)],1),l("el-form-item",{staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(l){return e.submitForm("ruleForm")}}},[e._v("打印")])],1)],1)],1)},t=[],o={data(){return{ruleForm:{gettime:{key:"一.烧伤发生时间",value:""},age:{key:"二.烧伤发生的原因",value:""},txue:{key:"三.受伤时衣着",value:""},resource:{key:"四.烧伤热源种类",value:""},fnagfa:"",dianliu:{key:"五.电烧伤的电流电压",value1:"",value2:""},mingcheng:{key:"六.化学烧伤的物品名称,浓度,主要理化性质",value1:"",value2:"",value3:""},cough:{key:"七.镇定药物有无应用",value:""},fangfa:{key:"八.创面急诊处理方法",value:""},more:{key:"九.抗菌药物及破伤风抗毒素有无应用",value:""},tanxing:{key:"十.入院前医疗及病情：伤后有无异常变化（可多选）",value:[]},zhuanyun:{key:"十一.转运情况：伤员运送工具",value:""},gettimes:{key:"十二.转运情况：伤员转运经过时间",value:""},bloodcolor:{key:"十三.转运情况：途中有无经过主要处理",value:""},bansui:{key:"十四.有无以下情况（可多选）",value:[]},color:{key:"十五.有无以下既往史（可多选）",value:[]}}}},methods:{submitForm(){console.log(this.ruleForm),window.android.printer(JSON.stringify(this.ruleForm))}}},u=o,n=a("0c7c"),m=Object(n["a"])(u,r,t,!1,null,null,null);l["default"]=m.exports}}]);
//# sourceMappingURL=shaoshang.088e6726.js.map