(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["xiongwai"],{"74e0":function(e,l,a){"use strict";a.r(l);var r=function(){var e=this,l=e._self._c;return l("div",{staticClass:"home"},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-position":"top"}},[l("el-form-item",{attrs:{label:e.ruleForm.resource.key}},[l("el-radio-group",{model:{value:e.ruleForm.resource.value,callback:function(l){e.$set(e.ruleForm.resource,"value",l)},expression:"ruleForm.resource.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.gettime.key}},[l("el-date-picker",{staticStyle:{width:"50%"},attrs:{type:"date",placeholder:"选择患病时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.gettime.value,callback:function(l){e.$set(e.ruleForm.gettime,"value",l)},expression:"ruleForm.gettime.value"}},[e._v(" >")])],1),l("el-form-item",{attrs:{label:e.ruleForm.reason.key}},[l("el-radio-group",{model:{value:e.ruleForm.reason.value,callback:function(l){e.$set(e.ruleForm.reason,"value",l)},expression:"ruleForm.reason.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.cough.key}},[l("el-radio-group",{model:{value:e.ruleForm.cough.value,callback:function(l){e.$set(e.ruleForm.cough,"value",l)},expression:"ruleForm.cough.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.typrs.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.typrs.value,callback:function(l){e.$set(e.ruleForm.typrs,"value",l)},expression:"ruleForm.typrs.value"}},[l("el-checkbox",{attrs:{label:"胸背痛",name:"typrs"}}),l("el-checkbox",{attrs:{label:"呃逆",name:"typrs"}}),l("el-checkbox",{attrs:{label:"呕吐",name:"typrs"}}),l("el-checkbox",{attrs:{label:"上腹不适",name:"typrs"}}),l("el-checkbox",{attrs:{label:"呕血",name:"typrs"}}),l("el-checkbox",{attrs:{label:"黑便",name:"typrs"}}),l("el-checkbox",{attrs:{label:"消瘦 ",name:"typrs"}}),l("el-checkbox",{attrs:{label:"发热 ",name:"typrs"}}),l("el-checkbox",{attrs:{label:"咳嗽 ",name:"typrs"}}),l("el-checkbox",{attrs:{label:"声嘶 ",name:"typrs"}}),l("el-checkbox",{attrs:{label:"饮水呛咳 ",name:"typrs"}}),l("el-checkbox",{attrs:{label:"体重下降 ",name:"typrs"}}),l("el-checkbox",{attrs:{label:"以上均无 ",name:"typrs"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.more.key}},[l("el-radio-group",{model:{value:e.ruleForm.more.value,callback:function(l){e.$set(e.ruleForm.more,"value",l)},expression:"ruleForm.more.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.smell.key}},[l("el-radio-group",{model:{value:e.ruleForm.smell.value,callback:function(l){e.$set(e.ruleForm.smell,"value",l)},expression:"ruleForm.smell.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bloodcolor.key}},[l("el-radio-group",{model:{value:e.ruleForm.bloodcolor.value,callback:function(l){e.$set(e.ruleForm.bloodcolor,"value",l)},expression:"ruleForm.bloodcolor.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breath.key}},[l("el-radio-group",{model:{value:e.ruleForm.breath.value,callback:function(l){e.$set(e.ruleForm.breath,"value",l)},expression:"ruleForm.breath.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breathtype.key}},[l("el-radio-group",{model:{value:e.ruleForm.breathtype.value,callback:function(l){e.$set(e.ruleForm.breathtype,"value",l)},expression:"ruleForm.breathtype.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bansui.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.bansui.value,callback:function(l){e.$set(e.ruleForm.bansui,"value",l)},expression:"ruleForm.bansui.value"}},[l("el-checkbox",{attrs:{label:"胸痛",name:"bansui"}}),l("el-checkbox",{attrs:{label:"胸闷",name:"bansui"}}),l("el-checkbox",{attrs:{label:"气短",name:"bansui"}}),l("el-checkbox",{attrs:{label:"呼吸困难",name:"bansui"}}),l("el-checkbox",{attrs:{label:"喘鸣",name:"bansui"}}),l("el-checkbox",{attrs:{label:"发热",name:"bansui"}}),l("el-checkbox",{attrs:{label:"乏力",name:"bansui"}}),l("el-checkbox",{attrs:{label:"体重下降",name:"bansui"}}),l("el-checkbox",{attrs:{label:"声嘶",name:"bansui"}}),l("el-checkbox",{attrs:{label:"呛咳",name:"bansui"}}),l("el-checkbox",{attrs:{label:"吞咽困难",name:"bansui"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"bansui"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpainnum.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpainnum.value,callback:function(l){e.$set(e.ruleForm.chestpainnum,"value",l)},expression:"ruleForm.chestpainnum.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无 "}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.times.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.times.value,callback:function(l){e.$set(e.ruleForm.times,"value",l)},expression:"ruleForm.times.value"}},[l("el-checkbox",{attrs:{label:"心悸",name:"times"}}),l("el-checkbox",{attrs:{label:"气喘",name:"times"}}),l("el-checkbox",{attrs:{label:"头晕",name:"times"}}),l("el-checkbox",{attrs:{label:"黑矇",name:"times"}}),l("el-checkbox",{attrs:{label:"昏厥",name:"times"}}),l("el-checkbox",{attrs:{label:"抽搐",name:"times"}}),l("el-checkbox",{attrs:{label:"偏瘫",name:"times"}}),l("el-checkbox",{attrs:{label:"发绀",name:"times"}}),l("el-checkbox",{attrs:{label:"下肢水肿",name:"times"}}),l("el-checkbox",{attrs:{label:"夜间不能平卧",name:"times"}}),l("el-checkbox",{attrs:{label:"发病后心功能减退及心律不齐",name:"times"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"times"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpainnums.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpainnums.key,callback:function(l){e.$set(e.ruleForm.chestpainnums,"key",l)},expression:"ruleForm.chestpainnums.key"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.gettimes.key}},[l("el-date-picker",{staticStyle:{width:"50%"},attrs:{type:"date",placeholder:"选择时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.gettimes.value,callback:function(l){e.$set(e.ruleForm.gettimes,"value",l)},expression:"ruleForm.gettimes.value"}},[e._v(" >")])],1),l("el-form-item",{attrs:{label:e.ruleForm.tanxing.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.tanxing.value,callback:function(l){e.$set(e.ruleForm.tanxing,"value",l)},expression:"ruleForm.tanxing.value"}},[l("el-checkbox",{attrs:{label:"呼吸困难 ",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"咯血",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"意识障碍",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"tanxing"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.color.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.color.value,callback:function(l){e.$set(e.ruleForm.color,"value",l)},expression:"ruleForm.color.value"}},[l("el-checkbox",{attrs:{label:"肿瘤病史",name:"color"}}),l("el-checkbox",{attrs:{label:"呼吸道感染",name:"color"}}),l("el-checkbox",{attrs:{label:"结核病史",name:"color"}}),l("el-checkbox",{attrs:{label:"胸部、腹部的其他慢性疾病  ",name:"color"}}),l("el-checkbox",{attrs:{label:"风湿活动史  ",name:"color"}}),l("el-checkbox",{attrs:{label:"心衰  ",name:"color"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"color"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.jiazu.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.jiazu.value,callback:function(l){e.$set(e.ruleForm.jiazu,"value",l)},expression:"ruleForm.jiazu.value"}},[l("el-checkbox",{attrs:{label:"肿瘤",name:"jiazu"}}),l("el-checkbox",{attrs:{label:"结核",name:"jiazu"}}),l("el-checkbox",{attrs:{label:"性病",name:"jiazu"}}),l("el-checkbox",{attrs:{label:"先天性畸形",name:"jiazu"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"jiazu"}})],1)],1),l("el-form-item",{staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(l){return e.submitForm("ruleForm")}}},[e._v("打印")])],1)],1)],1)},t=[],o={data(){return{ruleForm:{resource:{key:"一.有无食管、贲门疾病",value:""},gettime:{key:"二.食道、贲门患病时间",value:""},reason:{key:"三.食道、贲门是否存在进食或吞咽困难",value:""},cough:{key:"四.食道、贲门进食下咽情况，有无进行性加重",value:""},typrs:{key:"五.食道、贲门有无下述症状（可多选）",value:[]},more:{key:"六.食道、贲门是否作过放疗或其他治疗",value:""},smell:{key:"七.有无肺部、胸膜及纵膈疾病",value:""},bloodcolor:{key:"八.肺部、胸膜及纵膈疾病是否引起咳嗽",value:""},breath:{key:"九.肺部、胸膜及纵膈疾病是否引起咳痰",value:""},breathtype:{key:"十.肺部、胸膜及纵膈疾病是否引起咯血",value:""},bansui:{key:"十一.肺部、胸膜及纵膈疾病是否有有以下症状（可多选）",value:[]},chestpainnum:{key:"十二.有无心脏及大血管疾病",value:""},times:{key:"十三.心脏及大血管疾病是否有以下症状(可多选)",value:[]},chestpainnums:{key:"十四.是否有胸部外伤",value:""},gettimes:{key:"十五.胸部外伤损伤时间",value:""},tanxing:{key:"十六.胸部外伤是否有以下症状（可多选）",value:[]},color:{key:"十七.是否有以下疾病史（可多选）",value:[]},jiazu:{key:"十八.是否有以下家族史（可多选）",value:[]}}}},methods:{submitForm(){console.log(this.ruleForm),window.android.printer(JSON.stringify(this.ruleForm))}}},u=o,s=a("0c7c"),m=Object(s["a"])(u,r,t,!1,null,null,null);l["default"]=m.exports}}]);
//# sourceMappingURL=xiongwai.d67ea399.js.map