(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gu"],{"5ac6":function(e,l,a){"use strict";a.r(l);var r=function(){var e=this,l=e._self._c;return l("div",{staticClass:"home"},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-position":"top"}},[l("el-form-item",{attrs:{label:e.ruleForm.gettime.key}},[l("el-date-picker",{staticStyle:{width:"50%"},attrs:{type:"date",placeholder:"选择患病时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.gettime.value,callback:function(l){e.$set(e.ruleForm.gettime,"value",l)},expression:"ruleForm.gettime.value"}},[e._v(" >")])],1),l("el-form-item",{attrs:{label:e.ruleForm.resource.key}},[l("el-radio-group",{model:{value:e.ruleForm.resource.value,callback:function(l){e.$set(e.ruleForm.resource,"value",l)},expression:"ruleForm.resource.value"}},[l("el-radio",{attrs:{label:"急"}}),l("el-radio",{attrs:{label:"缓"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.reason.key}},[l("el-radio-group",{model:{value:e.ruleForm.reason.value,callback:function(l){e.$set(e.ruleForm.reason,"value",l)},expression:"ruleForm.reason.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.age.key}},[l("el-input",{staticStyle:{width:"50%"},model:{value:e.ruleForm.age.value,callback:function(l){e.$set(e.ruleForm.age,"value",l)},expression:"ruleForm.age.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.cough.key}},[l("el-radio-group",{model:{value:e.ruleForm.cough.value,callback:function(l){e.$set(e.ruleForm.cough,"value",l)},expression:"ruleForm.cough.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.more.key}},[l("el-radio-group",{model:{value:e.ruleForm.more.value,callback:function(l){e.$set(e.ruleForm.more,"value",l)},expression:"ruleForm.more.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.smell.key}},[l("el-radio-group",{model:{value:e.ruleForm.smell.value,callback:function(l){e.$set(e.ruleForm.smell,"value",l)},expression:"ruleForm.smell.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bloodcolor.key}},[l("el-radio-group",{model:{value:e.ruleForm.bloodcolor.value,callback:function(l){e.$set(e.ruleForm.bloodcolor,"value",l)},expression:"ruleForm.bloodcolor.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.names.key}},[l("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"疾病名称"},model:{value:e.ruleForm.names.value[0],callback:function(l){e.$set(e.ruleForm.names.value,0,l)},expression:"ruleForm.names.value[0]"}}),l("el-date-picker",{staticStyle:{width:"50%"},attrs:{type:"date",placeholder:"选择患病时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.names.value[1],callback:function(l){e.$set(e.ruleForm.names.value,1,l)},expression:"ruleForm.names.value[1]"}},[e._v(" >")])],1),l("el-form-item",{attrs:{label:e.ruleForm.breath.key}},[l("el-radio-group",{model:{value:e.ruleForm.breath.value,callback:function(l){e.$set(e.ruleForm.breath,"value",l)},expression:"ruleForm.breath.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.shoushu.key}},[l("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"手术名称"},model:{value:e.ruleForm.shoushu.value[0],callback:function(l){e.$set(e.ruleForm.shoushu.value,0,l)},expression:"ruleForm.shoushu.value[0]"}}),l("el-date-picker",{staticStyle:{width:"50%"},attrs:{type:"date",placeholder:"选择手术时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.shoushu.value[1],callback:function(l){e.$set(e.ruleForm.shoushu.value,1,l)},expression:"ruleForm.shoushu.value[1]"}},[e._v(" >")])],1),l("el-form-item",{attrs:{label:e.ruleForm.types.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.types.value,callback:function(l){e.$set(e.ruleForm.types,"value",l)},expression:"ruleForm.types.value"}},[l("el-checkbox",{attrs:{label:"疼痛",name:"types"}}),l("el-checkbox",{attrs:{label:"跛行",name:"types"}}),l("el-checkbox",{attrs:{label:"畸形",name:"types"}}),l("el-checkbox",{attrs:{label:"肿块",name:"types"}}),l("el-checkbox",{attrs:{label:"关节僵硬",name:"types"}}),l("el-checkbox",{attrs:{label:"无力",name:"types"}}),l("el-checkbox",{attrs:{label:"功能障碍 ",name:"types"}}),l("el-checkbox",{attrs:{label:"以上均无 ",name:"types"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breathtype.key}},[l("el-radio-group",{model:{value:e.ruleForm.breathtype.value,callback:function(l){e.$set(e.ruleForm.breathtype,"value",l)},expression:"ruleForm.breathtype.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tengtong.key}},[l("el-input",{staticStyle:{width:"50%"},model:{value:e.ruleForm.tengtong.value,callback:function(l){e.$set(e.ruleForm.tengtong,"value",l)},expression:"ruleForm.tengtong.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.times.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.times.value,callback:function(l){e.$set(e.ruleForm.times,"value",l)},expression:"ruleForm.times.value"}},[l("el-checkbox",{attrs:{label:"局部痛",name:"times"}}),l("el-checkbox",{attrs:{label:"放射痛",name:"times"}}),l("el-checkbox",{attrs:{label:"游走性疼痛",name:"times"}}),l("el-checkbox",{attrs:{label:"胀痛",name:"times"}}),l("el-checkbox",{attrs:{label:"酸痛",name:"times"}}),l("el-checkbox",{attrs:{label:"跳痛",name:"times"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"times"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpainnum.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpainnum.value,callback:function(l){e.$set(e.ruleForm.chestpainnum,"value",l)},expression:"ruleForm.chestpainnum.value"}},[l("el-radio",{attrs:{label:"持续性"}}),l("el-radio",{attrs:{label:"间歇性发作 "}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpainnums.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpainnums.value,callback:function(l){e.$set(e.ruleForm.chestpainnums,"value",l)},expression:"ruleForm.chestpainnums.value"}},[l("el-radio",{attrs:{label:"轻"}}),l("el-radio",{attrs:{label:"重"}}),l("el-radio",{attrs:{label:"较前减轻"}}),l("el-radio",{attrs:{label:"较前加重"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bansui.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.bansui.value,callback:function(l){e.$set(e.ruleForm.bansui,"value",l)},expression:"ruleForm.bansui.value"}},[l("el-checkbox",{attrs:{label:"晨起重",name:"bansui"}}),l("el-checkbox",{attrs:{label:"活动后好转",name:"bansui"}}),l("el-checkbox",{attrs:{label:"夜间或白天重",name:"bansui"}}),l("el-checkbox",{attrs:{label:"咳嗽及打喷嚏加重",name:"bansui"}}),l("el-checkbox",{attrs:{label:"时重时轻",name:"bansui"}}),l("el-checkbox",{attrs:{label:"可完全缓解",name:"bansui"}}),l("el-checkbox",{attrs:{label:"呈进行性加重",name:"bansui"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"bansui"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bansuis.key}},[l("el-radio-group",{model:{value:e.ruleForm.bansuis.value,callback:function(l){e.$set(e.ruleForm.bansuis,"value",l)},expression:"ruleForm.bansuis.value"}},[l("el-radio",{attrs:{label:"发热"}}),l("el-radio",{attrs:{label:"肿胀"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tanxing.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.tanxing.value,callback:function(l){e.$set(e.ruleForm.tanxing,"value",l)},expression:"ruleForm.tanxing.value"}},[l("el-checkbox",{attrs:{label:"骨结核 ",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"血液病",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"高血压病",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"脑梗",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"心脏放过支架",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"长期服用强抗凝药物",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"免疫系统疾病",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"长期服用激素类药物 ",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"tanxing"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.color.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.color.value,callback:function(l){e.$set(e.ruleForm.color,"value",l)},expression:"ruleForm.color.value"}},[l("el-checkbox",{attrs:{label:"氟骨症",name:"color"}}),l("el-checkbox",{attrs:{label:"月骨无菌性坏死",name:"color"}}),l("el-checkbox",{attrs:{label:"毒物接触情况",name:"color"}}),l("el-checkbox",{attrs:{label:"长期大量饮酒导致股骨头坏死",name:"color"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"color"}})],1)],1),l("el-form-item",{staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(l){return e.submitForm("ruleForm")}}},[e._v("打印")])],1)],1)],1)},t=[],o={data(){return{ruleForm:{gettime:{key:"1.患病时间",value:""},resource:{key:"2.患病缓急",value:""},reason:{key:"3.是否高处坠落",value:""},age:{key:"4.高空坠落高度多少米",value:""},cough:{key:"5.是否发生交通事故",value:""},more:{key:"6.是否有感染症状",value:""},smell:{key:"7.是否有发热情况",value:""},bloodcolor:{key:"8.是否有慢性病",value:""},names:{key:"9.患何种慢性病，疾病名称",value:["",""]},breath:{key:"10.是否有手术史",value:""},shoushu:{key:"11.手术名称以及时间",value:["",""]},types:{key:"12.是否有以下症状（可多选）",value:[]},breathtype:{key:"13.是否疼痛",value:""},tengtong:{key:"14.疼痛部位",value:""},times:{key:"15.疼痛性质(可多选)",value:[]},chestpainnum:{key:"16.疼痛时间",value:""},chestpainnums:{key:"17.疼痛程度",value:""},bansui:{key:"18.疼痛的特点及相关因素（可多选）",value:[]},bansuis:{key:"19.疼痛伴随症状",value:""},tanxing:{key:"20.是否有以下疾病史（可多选）",value:[]},color:{key:"21.是否有以下情况（可多选）",value:[]}}}},methods:{submitForm(){console.log(this.ruleForm);let e={};for(const l in this.ruleForm)e[this.ruleForm[l].key]=this.ruleForm[l].value;window.android.printer(JSON.stringify(e))}}},u=o,s=a("0c7c"),m=Object(s["a"])(u,r,t,!1,null,null,null);l["default"]=m.exports}}]);
//# sourceMappingURL=gu.1b8cb189.js.map