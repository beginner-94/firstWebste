(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zhengxingwai"],{f02d:function(e,l,r){"use strict";r.r(l);var a=function(){var e=this,l=e._self._c;return l("div",{staticClass:"home"},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-position":"top"}},[l("el-form-item",{attrs:{label:e.ruleForm.resource.key}},[l("el-radio-group",{model:{value:e.ruleForm.resource.value,callback:function(l){e.$set(e.ruleForm.resource,"value",l)},expression:"ruleForm.resource.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.reason.key}},[l("el-radio-group",{model:{value:e.ruleForm.reason.value,callback:function(l){e.$set(e.ruleForm.reason,"value",l)},expression:"ruleForm.reason.value"}},[l("el-radio",{attrs:{label:"先天畸形"}}),l("el-radio",{attrs:{label:"后天畸形"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.cough.key}},[l("el-radio-group",{model:{value:e.ruleForm.cough.value,callback:function(l){e.$set(e.ruleForm.cough,"value",l)},expression:"ruleForm.cough.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.more.key}},[l("el-radio-group",{model:{value:e.ruleForm.more.value,callback:function(l){e.$set(e.ruleForm.more,"value",l)},expression:"ruleForm.more.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.smell.key}},[l("el-radio-group",{model:{value:e.ruleForm.smell.value,callback:function(l){e.$set(e.ruleForm.smell,"value",l)},expression:"ruleForm.smell.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bloodcolor.key}},[l("el-radio-group",{model:{value:e.ruleForm.bloodcolor.value,callback:function(l){e.$set(e.ruleForm.bloodcolor,"value",l)},expression:"ruleForm.bloodcolor.value"}},[l("el-radio",{attrs:{label:"改善"}}),l("el-radio",{attrs:{label:"加重"}}),l("el-radio",{attrs:{label:"其他"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breath.key}},[l("el-radio-group",{model:{value:e.ruleForm.breath.value,callback:function(l){e.$set(e.ruleForm.breath,"value",l)},expression:"ruleForm.breath.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ketan.key}},[l("el-radio-group",{model:{value:e.ruleForm.ketan.value,callback:function(l){e.$set(e.ruleForm.ketan,"value",l)},expression:"ruleForm.ketan.value"}},[l("el-radio",{attrs:{label:"烧伤"}}),l("el-radio",{attrs:{label:"外伤"}}),l("el-radio",{attrs:{label:"手术"}}),l("el-radio",{attrs:{label:"感染"}}),l("el-radio",{attrs:{label:"其他"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.blood.key}},[l("el-radio-group",{model:{value:e.ruleForm.blood.value,callback:function(l){e.$set(e.ruleForm.blood,"value",l)},expression:"ruleForm.blood.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.types.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.types.value,callback:function(l){e.$set(e.ruleForm.types,"value",l)},expression:"ruleForm.types.value"}},[l("el-checkbox",{attrs:{label:"糖尿病",name:"types"}}),l("el-checkbox",{attrs:{label:"血管病变 ",name:"types"}}),l("el-checkbox",{attrs:{label:"免疫系统疾病 ",name:"types"}}),l("el-checkbox",{attrs:{label:"截瘫 ",name:"types"}}),l("el-checkbox",{attrs:{label:"以上均无 ",name:"types"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breathnum.key}},[l("el-radio-group",{model:{value:e.ruleForm.breathnum.value,callback:function(l){e.$set(e.ruleForm.breathnum,"value",l)},expression:"ruleForm.breathnum.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpain.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpain.value,callback:function(l){e.$set(e.ruleForm.chestpain,"value",l)},expression:"ruleForm.chestpain.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpainmore.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpainmore.value,callback:function(l){e.$set(e.ruleForm.chestpainmore,"value",l)},expression:"ruleForm.chestpainmore.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breathtype.key}},[l("el-radio-group",{model:{value:e.ruleForm.breathtype.value,callback:function(l){e.$set(e.ruleForm.breathtype,"value",l)},expression:"ruleForm.breathtype.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(l){return e.submitForm("ruleForm")}}},[e._v("打印")])],1)],1)],1)},o=[],t={data(){return{ruleForm:{resource:{key:"1.是否患有畸形",value:""},reason:{key:"2.畸形是先天畸形还是后天畸形",value:""},cough:{key:"3.先天畸形，随着年龄的增长，畸形有无进展",value:""},more:{key:"4.后天畸形，随着时间的进展畸形有无改善或加重",value:""},smell:{key:"5.有无体表组织缺损",value:""},bloodcolor:{key:"6.治疗后随着时间的进展，组织缺损有无改善或加重",value:""},breath:{key:"7.有无瘢痕",value:""},ketan:{key:"8.引起瘢痕的原因",value:""},blood:{key:"9.有无溃疡、压疮等慢性创面",value:""},types:{key:"10.有无以下疾病（可多选）",value:[]},breathnum:{key:"11.有无斑痣和肿瘤",value:""},chestpain:{key:"12.有无进行过手术",value:""},chestpainmore:{key:"13.家族中特别是父母、兄弟、姐妹有无相似畸形和其他畸形",value:""},breathtype:{key:"14.有无其他遗传性疾病",value:""}}}},methods:{submitForm(){console.log(this.ruleForm);let e={};for(const l in this.ruleForm)e[this.ruleForm[l].key]=this.ruleForm[l].value;window.android.printer(JSON.stringify(e))}}},u=t,s=r("0c7c"),m=Object(s["a"])(u,a,o,!1,null,null,null);l["default"]=m.exports}}]);
//# sourceMappingURL=zhengxingwai.aa144d85.js.map