(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["xinxue"],{affe:function(e,l,a){"use strict";a.r(l);var r=function(){var e=this,l=e._self._c;return l("div",{staticClass:"home"},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-position":"top"}},[l("el-form-item",{attrs:{label:e.ruleForm.resource.key}},[l("el-radio-group",{model:{value:e.ruleForm.resource.value,callback:function(l){e.$set(e.ruleForm.resource,"value",l)},expression:"ruleForm.resource.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.gettime.key}},[l("el-date-picker",{staticStyle:{width:"50%"},attrs:{type:"date",placeholder:"选择胸痛开始的时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.gettime.value,callback:function(l){e.$set(e.ruleForm.gettime,"value",l)},expression:"ruleForm.gettime.value"}},[e._v(" >")])],1),l("el-form-item",{attrs:{label:e.ruleForm.tanxing.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.tanxing.value,callback:function(l){e.$set(e.ruleForm.tanxing,"value",l)},expression:"ruleForm.tanxing.value"}},[l("el-checkbox",{attrs:{label:"运动",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"寒冷",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"情绪",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"饱餐",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"其他",name:"tanxing"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.relax.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.relax.value,callback:function(l){e.$set(e.ruleForm.relax,"value",l)},expression:"ruleForm.relax.value"}},[l("el-checkbox",{attrs:{label:"硝酸甘油",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"休息",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"其他",name:"tanxing"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.reason.key}},[l("el-radio-group",{model:{value:e.ruleForm.reason.value,callback:function(l){e.$set(e.ruleForm.reason,"value",l)},expression:"ruleForm.reason.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.xinji.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.xinji.value,callback:function(l){e.$set(e.ruleForm.xinji,"value",l)},expression:"ruleForm.xinji.value"}},[l("el-checkbox",{attrs:{label:"体位",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"体力活动",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"情绪激动",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"药物",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"其他",name:"tanxing"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.cough.key}},[l("el-radio-group",{model:{value:e.ruleForm.cough.value,callback:function(l){e.$set(e.ruleForm.cough,"value",l)},expression:"ruleForm.cough.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.more.key}},[l("el-radio-group",{model:{value:e.ruleForm.more.value,callback:function(l){e.$set(e.ruleForm.more,"value",l)},expression:"ruleForm.more.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.smell.key}},[l("el-radio-group",{model:{value:e.ruleForm.smell.value,callback:function(l){e.$set(e.ruleForm.smell,"value",l)},expression:"ruleForm.smell.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bloodcolor.key}},[l("el-radio-group",{model:{value:e.ruleForm.bloodcolor.value,callback:function(l){e.$set(e.ruleForm.bloodcolor,"value",l)},expression:"ruleForm.bloodcolor.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.age.key}},[l("el-input",{staticStyle:{width:"50%"},model:{value:e.ruleForm.age.value,callback:function(l){e.$set(e.ruleForm.age,"value",l)},expression:"ruleForm.age.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.breath.key}},[l("el-radio-group",{model:{value:e.ruleForm.breath.value,callback:function(l){e.$set(e.ruleForm.breath,"value",l)},expression:"ruleForm.breath.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ketan.key}},[l("el-radio-group",{model:{value:e.ruleForm.ketan.value,callback:function(l){e.$set(e.ruleForm.ketan,"value",l)},expression:"ruleForm.ketan.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.blood.key}},[l("el-radio-group",{model:{value:e.ruleForm.blood.value,callback:function(l){e.$set(e.ruleForm.blood,"value",l)},expression:"ruleForm.blood.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breathnum.key}},[l("el-radio-group",{model:{value:e.ruleForm.breathnum.value,callback:function(l){e.$set(e.ruleForm.breathnum,"value",l)},expression:"ruleForm.breathnum.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.jinqi.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.jinqi.value,callback:function(l){e.$set(e.ruleForm.jinqi,"value",l)},expression:"ruleForm.jinqi.value"}},[l("el-checkbox",{attrs:{label:"洋地黄",name:"jinqi"}}),l("el-checkbox",{attrs:{label:"抗心律失常药",name:"jinqi"}}),l("el-checkbox",{attrs:{label:"利尿剂",name:"jinqi"}}),l("el-checkbox",{attrs:{label:"其他",name:"jinqi"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"jinqi"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.color.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.color.value,callback:function(l){e.$set(e.ruleForm.color,"value",l)},expression:"ruleForm.color.value"}},[l("el-checkbox",{attrs:{label:"风湿热",name:"color"}}),l("el-checkbox",{attrs:{label:"高血压",name:"color"}}),l("el-checkbox",{attrs:{label:"甲亢",name:"color"}}),l("el-checkbox",{attrs:{label:"糖尿病",name:"color"}}),l("el-checkbox",{attrs:{label:"肾脏病变",name:"color"}}),l("el-checkbox",{attrs:{label:"晕厥",name:"color"}}),l("el-checkbox",{attrs:{label:"心动过速",name:"color"}}),l("el-checkbox",{attrs:{label:"高脂血症",name:"color"}}),l("el-checkbox",{attrs:{label:"其他",name:"color"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"color"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.jiazu.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.jiazu.value,callback:function(l){e.$set(e.ruleForm.jiazu,"value",l)},expression:"ruleForm.jiazu.value"}},[l("el-checkbox",{attrs:{label:"高血压",name:"jiazu"}}),l("el-checkbox",{attrs:{label:"糖尿病",name:"jiazu"}}),l("el-checkbox",{attrs:{label:"高脂血症",name:"jiazu"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"jiazu"}})],1)],1),l("el-form-item",{staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(l){return e.submitForm("ruleForm")}}},[e._v("打印")])],1)],1)],1)},o=[],t={data(){return{ruleForm:{resource:{key:"1.有无胸痛",value:""},gettime:{key:"2.胸痛开始的时间",value:""},tanxing:{key:"3.胸痛的诱因（可多选）",value:[]},relax:{key:"4.胸痛的缓解方式（可多选）",value:[]},reason:{key:"5.有无心悸",value:""},xinji:{key:"6.心悸的诱因（可多选）",value:[]},cough:{key:"7.有无呼吸困难",value:""},more:{key:"8.有无端坐呼吸或劳力性呼吸困难",value:""},smell:{key:"9.是否伴有咳嗽、咯血、粉红色泡沫样痰",value:""},bloodcolor:{key:"10.有无水肿",value:""},age:{key:"11.水肿开始出现的部位",value:""},breath:{key:"12.水肿是否伴有尿量、尿色和夜尿量的改变",value:""},ketan:{key:"14.水肿是否有腹胀、肝区疼痛",value:""},blood:{key:"14.有无黑矇、晕厥",value:""},breathnum:{key:"15.黑矇、晕厥是否伴抽搐、外伤、尿便失禁",value:""},jinqi:{key:"17.近期用药情况（可多选）",value:[]},color:{key:"17.是否有以下疾病史（可多选）",value:[]},jiazu:{key:"18.是否有以下家族史（可多选）",value:[]}}}},methods:{submitForm(){console.log(this.ruleForm);let e={};for(const l in this.ruleForm)e[this.ruleForm[l].key]=this.ruleForm[l].value;window.android.printer(JSON.stringify(e))}}},u=t,m=a("0c7c"),c=Object(m["a"])(u,r,o,!1,null,null,null);l["default"]=c.exports}}]);
//# sourceMappingURL=xinxue.9ce82884.js.map