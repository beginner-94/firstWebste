(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["jieru"],{a507:function(e,l,r){"use strict";r.r(l);var a=function(){var e=this,l=e._self._c;return l("div",{staticClass:"home"},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-position":"top"}},[l("el-form-item",{attrs:{label:e.ruleForm.resource.key}},[l("el-radio-group",{model:{value:e.ruleForm.resource.value,callback:function(l){e.$set(e.ruleForm.resource,"value",l)},expression:"ruleForm.resource.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.gettime.key}},[l("el-date-picker",{staticStyle:{width:"50%"},attrs:{type:"date",placeholder:"选择患病时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.gettime.value,callback:function(l){e.$set(e.ruleForm.gettime,"value",l)},expression:"ruleForm.gettime.value"}},[e._v(" >")])],1),l("el-form-item",{attrs:{label:e.ruleForm.reason.key}},[l("el-radio-group",{model:{value:e.ruleForm.reason.value,callback:function(l){e.$set(e.ruleForm.reason,"value",l)},expression:"ruleForm.reason.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.more.key}},[l("el-radio-group",{model:{value:e.ruleForm.more.value,callback:function(l){e.$set(e.ruleForm.more,"value",l)},expression:"ruleForm.more.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ganran.key}},[l("el-radio-group",{model:{value:e.ruleForm.ganran.value,callback:function(l){e.$set(e.ruleForm.ganran,"value",l)},expression:"ruleForm.ganran.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.jiehe.key}},[l("el-radio-group",{model:{value:e.ruleForm.jiehe.value,callback:function(l){e.$set(e.ruleForm.jiehe,"value",l)},expression:"ruleForm.jiehe.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.smoke.key}},[l("el-radio-group",{model:{value:e.ruleForm.smoke.value,callback:function(l){e.$set(e.ruleForm.smoke,"value",l)},expression:"ruleForm.smoke.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.cat.key}},[l("el-radio-group",{model:{value:e.ruleForm.cat.value,callback:function(l){e.$set(e.ruleForm.cat,"value",l)},expression:"ruleForm.cat.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.types.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.types.value,callback:function(l){e.$set(e.ruleForm.types,"value",l)},expression:"ruleForm.types.value"}},[l("el-checkbox",{attrs:{label:"高血压",name:"types"}}),l("el-checkbox",{attrs:{label:"高血脂",name:"types"}}),l("el-checkbox",{attrs:{label:"糖尿病",name:"types"}}),l("el-checkbox",{attrs:{label:"肢体疼痛",name:"types"}}),l("el-checkbox",{attrs:{label:"间歇性跛行",name:"types"}}),l("el-checkbox",{attrs:{label:"肢体肿胀",name:"types"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"types"}})],1)],1),l("el-form-item",{staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(l){return e.submitForm("ruleForm")}}},[e._v("打印")])],1)],1)],1)},o=[],t={data(){return{ruleForm:{resource:{key:"1.有无介入放射科病史",value:""},gettime:{key:"2.患病时间",value:""},reason:{key:"3.是否是肿瘤患者",value:""},more:{key:"4.有无接触化学物质、放射线",value:""},ganran:{key:"5.有无病毒感染",value:""},jiehe:{key:"6.有无内分泌、遗传等方面疾病",value:""},smoke:{key:"7.有无烟酒嗜好",value:""},cat:{key:"8.是否是血管病患者",value:""},types:{key:"9.有无以下病史（可多选）",value:[]}}}},methods:{submitForm(){console.log(this.ruleForm);let e={};for(const l in this.ruleForm)e[this.ruleForm[l].key]=this.ruleForm[l].value;window.android.printer(JSON.stringify(e))}}},u=t,s=r("0c7c"),m=Object(s["a"])(u,a,o,!1,null,null,null);l["default"]=m.exports}}]);
//# sourceMappingURL=jieru.2af42655.js.map