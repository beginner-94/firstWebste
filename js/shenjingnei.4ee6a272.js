(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shenjingnei"],{fe3c:function(e,l,r){"use strict";r.r(l);var a=function(){var e=this,l=e._self._c;return l("div",{staticClass:"home"},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-position":"top"}},[l("el-form-item",{attrs:{label:e.ruleForm.gettime.key}},[l("el-date-picker",{staticStyle:{width:"50%"},attrs:{type:"date",placeholder:"选择患病时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.gettime.value,callback:function(l){e.$set(e.ruleForm.gettime,"value",l)},expression:"ruleForm.gettime.value"}},[e._v(" >")])],1),l("el-form-item",{attrs:{label:e.ruleForm.resource.key}},[l("el-radio-group",{model:{value:e.ruleForm.resource.value,callback:function(l){e.$set(e.ruleForm.resource,"value",l)},expression:"ruleForm.resource.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.reason.key}},[l("el-radio-group",{model:{value:e.ruleForm.reason.value,callback:function(l){e.$set(e.ruleForm.reason,"value",l)},expression:"ruleForm.reason.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.cough.key}},[l("el-radio-group",{model:{value:e.ruleForm.cough.value,callback:function(l){e.$set(e.ruleForm.cough,"value",l)},expression:"ruleForm.cough.value"}},[l("el-radio",{attrs:{label:"进行性加重"}}),l("el-radio",{attrs:{label:"间断性加重"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.more.key}},[l("el-radio-group",{model:{value:e.ruleForm.more.value,callback:function(l){e.$set(e.ruleForm.more,"value",l)},expression:"ruleForm.more.value"}},[l("el-radio",{attrs:{label:"持续性"}}),l("el-radio",{attrs:{label:"发作性"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.smell.key}},[l("el-radio-group",{model:{value:e.ruleForm.smell.value,callback:function(l){e.$set(e.ruleForm.smell,"value",l)},expression:"ruleForm.smell.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bloodcolor.key}},[l("el-radio-group",{model:{value:e.ruleForm.bloodcolor.value,callback:function(l){e.$set(e.ruleForm.bloodcolor,"value",l)},expression:"ruleForm.bloodcolor.value"}},[l("el-radio",{attrs:{label:"持续性"}}),l("el-radio",{attrs:{label:"发作性"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breath.key}},[l("el-radio-group",{model:{value:e.ruleForm.breath.value,callback:function(l){e.$set(e.ruleForm.breath,"value",l)},expression:"ruleForm.breath.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.age.key}},[l("el-input",{staticStyle:{width:"50%"},model:{value:e.ruleForm.age.value,callback:function(l){e.$set(e.ruleForm.age,"value",l)},expression:"ruleForm.age.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.ketan.key}},[l("el-radio-group",{model:{value:e.ruleForm.ketan.value,callback:function(l){e.$set(e.ruleForm.ketan,"value",l)},expression:"ruleForm.ketan.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.blood.key}},[l("el-radio-group",{model:{value:e.ruleForm.blood.value,callback:function(l){e.$set(e.ruleForm.blood,"value",l)},expression:"ruleForm.blood.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breathnum.key}},[l("el-radio-group",{model:{value:e.ruleForm.breathnum.value,callback:function(l){e.$set(e.ruleForm.breathnum,"value",l)},expression:"ruleForm.breathnum.value"}},[l("el-radio",{attrs:{label:"局限性"}}),l("el-radio",{attrs:{label:"全身性"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpain.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpain.value,callback:function(l){e.$set(e.ruleForm.chestpain,"value",l)},expression:"ruleForm.chestpain.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breathtype.key}},[l("el-radio-group",{model:{value:e.ruleForm.breathtype.value,callback:function(l){e.$set(e.ruleForm.breathtype,"value",l)},expression:"ruleForm.breathtype.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ganran.key}},[l("el-radio-group",{model:{value:e.ruleForm.ganran.value,callback:function(l){e.$set(e.ruleForm.ganran,"value",l)},expression:"ruleForm.ganran.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpainmore.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpainmore.value,callback:function(l){e.$set(e.ruleForm.chestpainmore,"value",l)},expression:"ruleForm.chestpainmore.value"}},[l("el-radio",{attrs:{label:"急"}}),l("el-radio",{attrs:{label:"缓"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpainnum.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpainnum.value,callback:function(l){e.$set(e.ruleForm.chestpainnum,"value",l)},expression:"ruleForm.chestpainnum.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpaintype.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpaintype.value,callback:function(l){e.$set(e.ruleForm.chestpaintype,"value",l)},expression:"ruleForm.chestpaintype.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.types.key}},[l("el-radio-group",{model:{value:e.ruleForm.types.value,callback:function(l){e.$set(e.ruleForm.types,"value",l)},expression:"ruleForm.types.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.time1.key}},[l("el-radio-group",{model:{value:e.ruleForm.time1.value,callback:function(l){e.$set(e.ruleForm.time1,"value",l)},expression:"ruleForm.time1.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.times.key}},[l("el-radio-group",{model:{value:e.ruleForm.times.value,callback:function(l){e.$set(e.ruleForm.times,"value",l)},expression:"ruleForm.times.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.sleep.key}},[l("el-radio-group",{model:{value:e.ruleForm.sleep.value,callback:function(l){e.$set(e.ruleForm.sleep,"value",l)},expression:"ruleForm.sleep.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tanxing.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.tanxing.value,callback:function(l){e.$set(e.ruleForm.tanxing,"value",l)},expression:"ruleForm.tanxing.value"}},[l("el-checkbox",{attrs:{label:"睡眠增多",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"不易入睡",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"不眠",name:"tanxing"}}),l("el-checkbox",{attrs:{label:"易醒",name:"tanxing"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.hours.key}},[l("el-input",{staticStyle:{width:"50%"},model:{value:e.ruleForm.hours.value,callback:function(l){e.$set(e.ruleForm.hours,"value",l)},expression:"ruleForm.hours.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.color.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.color.value,callback:function(l){e.$set(e.ruleForm.color,"value",l)},expression:"ruleForm.color.value"}},[l("el-checkbox",{attrs:{label:"脑炎",name:"color"}}),l("el-checkbox",{attrs:{label:"脑膜炎",name:"color"}}),l("el-checkbox",{attrs:{label:"结核",name:"color"}}),l("el-checkbox",{attrs:{label:"外伤",name:"color"}}),l("el-checkbox",{attrs:{label:"中毒",name:"color"}}),l("el-checkbox",{attrs:{label:"风湿病",name:"color"}}),l("el-checkbox",{attrs:{label:"钩端螺旋体病",name:"color"}}),l("el-checkbox",{attrs:{label:"脑寄生虫病",name:"color"}}),l("el-checkbox",{attrs:{label:"癌肿",name:"color"}}),l("el-checkbox",{attrs:{label:"血液病",name:"color"}}),l("el-checkbox",{attrs:{label:"糖尿病",name:"color"}}),l("el-checkbox",{attrs:{label:"高血压病",name:"color"}}),l("el-checkbox",{attrs:{label:"冠心病",name:"color"}}),l("el-checkbox",{attrs:{label:"癫痫",name:"color"}}),l("el-checkbox",{attrs:{label:"偏头痛",name:"color"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"color"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.dna.key}},[l("el-radio-group",{model:{value:e.ruleForm.dna.value,callback:function(l){e.$set(e.ruleForm.dna,"value",l)},expression:"ruleForm.dna.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(l){return e.submitForm("ruleForm")}}},[e._v("打印")])],1)],1)],1)},o=[],t={data(){return{ruleForm:{gettime:{key:"一.患病时间",value:""},resource:{key:"二.症状有无缓解",value:""},reason:{key:"三.症状有无复发",value:""},cough:{key:"四.是否有头痛",value:""},more:{key:"五.头痛症状的性质",value:""},smell:{key:"六.是否有疼痛及感觉异常",value:""},bloodcolor:{key:"七.疼痛及感觉异常的性质",value:""},breath:{key:"八.是否有抽搐发作",value:""},age:{key:"九.抽搐发作的起病年龄",value:""},ketan:{key:"十.抽搐发作时有无先兆",value:""},blood:{key:"十一.抽搐发作时意识是否丧失",value:""},breathnum:{key:"十二.抽搐发作的范围",value:""},chestpain:{key:"十三.抽搐发作时有无伴发症状",value:""},breathtype:{key:"十四.抽搐发作的间歇期是否正常",value:""},ganran:{key:"十五.是否有瘫痪",value:""},chestpainmore:{key:"十六.瘫痪的起病急缓",value:""},chestpainnum:{key:"十七.瘫痪有无伴随症状",value:""},chestpaintype:{key:"十八.是否有括约肌障碍",value:""},types:{key:"十九.括约肌障碍排便是否费力",value:""},time1:{key:"二十.括约肌障碍有无尿潴留",value:""},times:{key:"二十一.括约肌障碍有无大小便失禁",value:""},sleep:{key:"二十二.有无睡眠障碍",value:""},tanxing:{key:"二十三.有无以下睡眠障碍（可多选）",value:[]},hours:{key:"二十四.睡眠障碍：每天共能睡眠多少小时",value:""},color:{key:"二十五.有无以下既往史（可多选）",value:[]},dna:{key:"二十六.有无家族遗传史",value:""}}}},methods:{submitForm(){console.log(this.ruleForm),window.android.printer(JSON.stringify(this.ruleForm))}}},u=t,m=r("0c7c"),s=Object(m["a"])(u,a,o,!1,null,null,null);l["default"]=s.exports}}]);
//# sourceMappingURL=shenjingnei.4ee6a272.js.map