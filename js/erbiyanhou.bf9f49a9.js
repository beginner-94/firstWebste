(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["erbiyanhou"],{"6d4f":function(e,l,a){"use strict";a.r(l);var r=function(){var e=this,l=e._self._c;return l("div",{staticClass:"home"},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-position":"top"}},[l("el-form-item",{attrs:{label:e.ruleForm.resource.key}},[l("el-radio-group",{model:{value:e.ruleForm.resource.value,callback:function(l){e.$set(e.ruleForm.resource,"value",l)},expression:"ruleForm.resource.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.reason.key}},[l("el-radio-group",{model:{value:e.ruleForm.reason.value,callback:function(l){e.$set(e.ruleForm.reason,"value",l)},expression:"ruleForm.reason.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.cough.key}},[l("el-radio-group",{model:{value:e.ruleForm.cough.value,callback:function(l){e.$set(e.ruleForm.cough,"value",l)},expression:"ruleForm.cough.value"}},[l("el-radio",{attrs:{label:"持续性"}}),l("el-radio",{attrs:{label:"间歇性"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.more.key}},[l("el-radio-group",{model:{value:e.ruleForm.more.value,callback:function(l){e.$set(e.ruleForm.more,"value",l)},expression:"ruleForm.more.value"}},[l("el-radio",{attrs:{label:"轻：不引起烦躁"}}),l("el-radio",{attrs:{label:"中：引起烦躁"}}),l("el-radio",{attrs:{label:"重：影响入睡"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.smell.key}},[l("el-radio-group",{model:{value:e.ruleForm.smell.value,callback:function(l){e.$set(e.ruleForm.smell,"value",l)},expression:"ruleForm.smell.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.gettime.key}},[l("el-date-picker",{staticStyle:{width:"50%"},attrs:{type:"date",placeholder:"选择时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.gettime.value,callback:function(l){e.$set(e.ruleForm.gettime,"value",l)},expression:"ruleForm.gettime.value"}},[e._v(" >")])],1),l("el-form-item",{attrs:{label:e.ruleForm.bloodcolor.key}},[l("el-radio-group",{model:{value:e.ruleForm.bloodcolor.value,callback:function(l){e.$set(e.ruleForm.bloodcolor,"value",l)},expression:"ruleForm.bloodcolor.value"}},[l("el-radio",{attrs:{label:"突发性"}}),l("el-radio",{attrs:{label:"进行性"}}),l("el-radio",{attrs:{label:"波动性"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breath.key}},[l("el-radio-group",{model:{value:e.ruleForm.breath.value,callback:function(l){e.$set(e.ruleForm.breath,"value",l)},expression:"ruleForm.breath.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ketan.key}},[l("el-radio-group",{model:{value:e.ruleForm.ketan.value,callback:function(l){e.$set(e.ruleForm.ketan,"value",l)},expression:"ruleForm.ketan.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.blood.key}},[l("el-radio-group",{model:{value:e.ruleForm.blood.value,callback:function(l){e.$set(e.ruleForm.blood,"value",l)},expression:"ruleForm.blood.value"}},[l("el-radio",{attrs:{label:"频发"}}),l("el-radio",{attrs:{label:"偶发"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breathnum.key}},[l("el-radio-group",{model:{value:e.ruleForm.breathnum.value,callback:function(l){e.$set(e.ruleForm.breathnum,"value",l)},expression:"ruleForm.breathnum.value"}},[l("el-radio",{attrs:{label:"恶心"}}),l("el-radio",{attrs:{label:"呕吐"}}),l("el-radio",{attrs:{label:"耳内胀满感"}}),l("el-radio",{attrs:{label:"站立不稳"}}),l("el-radio",{attrs:{label:"步态异常及倾倒方向"}}),l("el-radio",{attrs:{label:"以上均无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpain.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpain.value,callback:function(l){e.$set(e.ruleForm.chestpain,"value",l)},expression:"ruleForm.chestpain.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breathtype.key}},[l("el-radio-group",{model:{value:e.ruleForm.breathtype.value,callback:function(l){e.$set(e.ruleForm.breathtype,"value",l)},expression:"ruleForm.breathtype.value"}},[l("el-radio",{attrs:{label:"持续性"}}),l("el-radio",{attrs:{label:"间歇性"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ganran.key}},[l("el-radio-group",{model:{value:e.ruleForm.ganran.value,callback:function(l){e.$set(e.ruleForm.ganran,"value",l)},expression:"ruleForm.ganran.value"}},[l("el-radio",{attrs:{label:"脓性"}}),l("el-radio",{attrs:{label:"血性"}}),l("el-radio",{attrs:{label:"黏液性"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.color.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.color.value,callback:function(l){e.$set(e.ruleForm.color,"value",l)},expression:"ruleForm.color.value"}},[l("el-checkbox",{attrs:{label:"外伤史",name:"color"}}),l("el-checkbox",{attrs:{label:"噪音暴露史",name:"color"}}),l("el-checkbox",{attrs:{label:"耳毒性药物使用史",name:"color"}}),l("el-checkbox",{attrs:{label:"病毒感染史 ",name:"color"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"color"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpainmore.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpainmore.value,callback:function(l){e.$set(e.ruleForm.chestpainmore,"value",l)},expression:"ruleForm.chestpainmore.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpainnum.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpainnum.value,callback:function(l){e.$set(e.ruleForm.chestpainnum,"value",l)},expression:"ruleForm.chestpainnum.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpaintype.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpaintype.value,callback:function(l){e.$set(e.ruleForm.chestpaintype,"value",l)},expression:"ruleForm.chestpaintype.value"}},[l("el-radio",{attrs:{label:"持续性"}}),l("el-radio",{attrs:{label:"交替性"}}),l("el-radio",{attrs:{label:"间歇性"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.types.key}},[l("el-radio-group",{model:{value:e.ruleForm.types.value,callback:function(l){e.$set(e.ruleForm.types,"value",l)},expression:"ruleForm.types.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.time.key}},[l("el-radio-group",{model:{value:e.ruleForm.time.value,callback:function(l){e.$set(e.ruleForm.time,"value",l)},expression:"ruleForm.time.value"}},[l("el-radio",{attrs:{label:"阻塞性"}}),l("el-radio",{attrs:{label:"开放性 "}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.times.key}},[l("el-radio-group",{model:{value:e.ruleForm.times.value,callback:function(l){e.$set(e.ruleForm.times,"value",l)},expression:"ruleForm.times.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.sleep.key}},[l("el-radio-group",{model:{value:e.ruleForm.sleep.value,callback:function(l){e.$set(e.ruleForm.sleep,"value",l)},expression:"ruleForm.sleep.value"}},[l("el-radio",{attrs:{label:"水样"}}),l("el-radio",{attrs:{label:"黏液性"}}),l("el-radio",{attrs:{label:"黏脓性"}}),l("el-radio",{attrs:{label:"脓性"}}),l("el-radio",{attrs:{label:"血性"}}),l("el-radio",{attrs:{label:"干痂"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tanxing.key}},[l("el-radio-group",{model:{value:e.ruleForm.tanxing.value,callback:function(l){e.$set(e.ruleForm.tanxing,"value",l)},expression:"ruleForm.tanxing.value"}},[l("el-radio",{attrs:{label:"少",name:"tanxing"}}),l("el-radio",{attrs:{label:"中",name:"tanxing"}}),l("el-radio",{attrs:{label:"多",name:"tanxing"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.dna.key}},[l("el-radio-group",{model:{value:e.ruleForm.dna.value,callback:function(l){e.$set(e.ruleForm.dna,"value",l)},expression:"ruleForm.dna.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.xiujue.key}},[l("el-radio-group",{model:{value:e.ruleForm.xiujue.value,callback:function(l){e.$set(e.ruleForm.xiujue,"value",l)},expression:"ruleForm.xiujue.value"}},[l("el-radio",{attrs:{label:"减退"}}),l("el-radio",{attrs:{label:"倒错"}}),l("el-radio",{attrs:{label:"丧失"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bixue.key}},[l("el-radio-group",{model:{value:e.ruleForm.bixue.value,callback:function(l){e.$set(e.ruleForm.bixue,"value",l)},expression:"ruleForm.bixue.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bichuxue.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.bichuxue.value,callback:function(l){e.$set(e.ruleForm.bichuxue,"value",l)},expression:"ruleForm.bichuxue.value"}},[l("el-checkbox",{attrs:{label:"单侧",name:"bichuxue"}}),l("el-checkbox",{attrs:{label:"双侧",name:"bichuxue"}}),l("el-checkbox",{attrs:{label:"间歇性",name:"bichuxue"}}),l("el-checkbox",{attrs:{label:"持续性",name:"bichuxue"}}),l("el-checkbox",{attrs:{label:"出血量多",name:"bichuxue"}}),l("el-checkbox",{attrs:{label:"出血量少",name:"bichuxue"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.dna1.key}},[l("el-radio-group",{model:{value:e.ruleForm.dna1.value,callback:function(l){e.$set(e.ruleForm.dna1,"value",l)},expression:"ruleForm.dna1.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.dna2.key}},[l("el-radio-group",{model:{value:e.ruleForm.dna2.value,callback:function(l){e.$set(e.ruleForm.dna2,"value",l)},expression:"ruleForm.dna2.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.dna3.key}},[l("el-radio-group",{model:{value:e.ruleForm.dna3.value,callback:function(l){e.$set(e.ruleForm.dna3,"value",l)},expression:"ruleForm.dna3.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.dna4.key}},[l("el-radio-group",{model:{value:e.ruleForm.dna4.value,callback:function(l){e.$set(e.ruleForm.dna4,"value",l)},expression:"ruleForm.dna4.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.dna5.key}},[l("el-radio-group",{model:{value:e.ruleForm.dna5.value,callback:function(l){e.$set(e.ruleForm.dna5,"value",l)},expression:"ruleForm.dna5.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.dna6.key}},[l("el-radio-group",{model:{value:e.ruleForm.dna6.value,callback:function(l){e.$set(e.ruleForm.dna6,"value",l)},expression:"ruleForm.dna6.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.dna7.key}},[l("el-radio-group",{model:{value:e.ruleForm.dna7.value,callback:function(l){e.$set(e.ruleForm.dna7,"value",l)},expression:"ruleForm.dna7.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.dna8.key}},[l("el-radio-group",{model:{value:e.ruleForm.dna8.value,callback:function(l){e.$set(e.ruleForm.dna8,"value",l)},expression:"ruleForm.dna8.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.dna9.key}},[l("el-radio-group",{model:{value:e.ruleForm.dna9.value,callback:function(l){e.$set(e.ruleForm.dna9,"value",l)},expression:"ruleForm.dna9.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.dna10.key}},[l("el-radio-group",{model:{value:e.ruleForm.dna10.value,callback:function(l){e.$set(e.ruleForm.dna10,"value",l)},expression:"ruleForm.dna10.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bichuxue1.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.bichuxue1.value,callback:function(l){e.$set(e.ruleForm.bichuxue1,"value",l)},expression:"ruleForm.bichuxue1.value"}},[l("el-checkbox",{attrs:{label:"声嘶",name:"bichuxue1"}}),l("el-checkbox",{attrs:{label:"失音",name:"bichuxue1"}}),l("el-checkbox",{attrs:{label:"语音含糊",name:"bichuxue1"}}),l("el-checkbox",{attrs:{label:"睡眠鼾声",name:"bichuxue1"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tunyan1.key}},[l("el-radio-group",{model:{value:e.ruleForm.tunyan1.value,callback:function(l){e.$set(e.ruleForm.tunyan1,"value",l)},expression:"ruleForm.tunyan1.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tunyan2.key}},[l("el-radio-group",{model:{value:e.ruleForm.tunyan2.value,callback:function(l){e.$set(e.ruleForm.tunyan2,"value",l)},expression:"ruleForm.tunyan2.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tunyan3.key}},[l("el-radio-group",{model:{value:e.ruleForm.tunyan3.value,callback:function(l){e.$set(e.ruleForm.tunyan3,"value",l)},expression:"ruleForm.tunyan3.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tunyan4.key}},[l("el-radio-group",{model:{value:e.ruleForm.tunyan4.value,callback:function(l){e.$set(e.ruleForm.tunyan4,"value",l)},expression:"ruleForm.tunyan4.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tunyan5.key}},[l("el-radio-group",{model:{value:e.ruleForm.tunyan5.value,callback:function(l){e.$set(e.ruleForm.tunyan5,"value",l)},expression:"ruleForm.tunyan5.value"}},[l("el-radio",{attrs:{label:"吸气性"}}),l("el-radio",{attrs:{label:"呼气性"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tunyan6.key}},[l("el-radio-group",{model:{value:e.ruleForm.tunyan6.value,callback:function(l){e.$set(e.ruleForm.tunyan6,"value",l)},expression:"ruleForm.tunyan6.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tunyan7.key}},[l("el-radio-group",{model:{value:e.ruleForm.tunyan7.value,callback:function(l){e.$set(e.ruleForm.tunyan7,"value",l)},expression:"ruleForm.tunyan7.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tunyan8.key}},[l("el-radio-group",{model:{value:e.ruleForm.tunyan8.value,callback:function(l){e.$set(e.ruleForm.tunyan8,"value",l)},expression:"ruleForm.tunyan8.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tunyan9.key}},[l("el-radio-group",{model:{value:e.ruleForm.tunyan9.value,callback:function(l){e.$set(e.ruleForm.tunyan9,"value",l)},expression:"ruleForm.tunyan9.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.tunyan10.key}},[l("el-radio-group",{model:{value:e.ruleForm.tunyan10.value,callback:function(l){e.$set(e.ruleForm.tunyan10,"value",l)},expression:"ruleForm.tunyan10.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bichuxue2.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.bichuxue2.value,callback:function(l){e.$set(e.ruleForm.bichuxue2,"value",l)},expression:"ruleForm.bichuxue2.value"}},[l("el-checkbox",{attrs:{label:"泡沫状",name:"bichuxue2"}}),l("el-checkbox",{attrs:{label:"黏脓性",name:"bichuxue2"}}),l("el-checkbox",{attrs:{label:"脓性",name:"bichuxue2"}}),l("el-checkbox",{attrs:{label:"量多",name:"bichuxue2"}}),l("el-checkbox",{attrs:{label:"量少",name:"bichuxue2"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ketan1.key}},[l("el-radio-group",{model:{value:e.ruleForm.ketan1.value,callback:function(l){e.$set(e.ruleForm.ketan1,"value",l)},expression:"ruleForm.ketan1.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ketan2.key}},[l("el-radio-group",{model:{value:e.ruleForm.ketan2.value,callback:function(l){e.$set(e.ruleForm.ketan2,"value",l)},expression:"ruleForm.ketan2.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ketan3.key}},[l("el-radio-group",{model:{value:e.ruleForm.ketan3.value,callback:function(l){e.$set(e.ruleForm.ketan3,"value",l)},expression:"ruleForm.ketan3.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ketan4.key}},[l("el-radio-group",{model:{value:e.ruleForm.ketan4.value,callback:function(l){e.$set(e.ruleForm.ketan4,"value",l)},expression:"ruleForm.ketan4.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"五"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ketan5.key}},[l("el-radio-group",{model:{value:e.ruleForm.ketan5.value,callback:function(l){e.$set(e.ruleForm.ketan5,"value",l)},expression:"ruleForm.ketan5.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}}),l("el-radio",{attrs:{label:"不详"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ketan6.key}},[l("el-radio-group",{model:{value:e.ruleForm.ketan6.value,callback:function(l){e.$set(e.ruleForm.ketan6,"value",l)},expression:"ruleForm.ketan6.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ketan7.key}},[l("el-radio-group",{model:{value:e.ruleForm.ketan7.value,callback:function(l){e.$set(e.ruleForm.ketan7,"value",l)},expression:"ruleForm.ketan7.value"}},[l("el-radio",{attrs:{label:"轻"}}),l("el-radio",{attrs:{label:"中"}}),l("el-radio",{attrs:{label:"重"}})],1)],1),l("el-form-item",{staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(l){return e.submitForm("ruleForm")}}},[e._v("打印")])],1)],1)],1)},o=[],u={data(){return{ruleForm:{resource:{key:"一.有无耳部疾病",value:""},reason:{key:"二.有无耳鸣",value:""},cough:{key:"三.耳鸣时间",value:""},more:{key:"四.耳鸣强度",value:""},smell:{key:"五.有无耳聋",value:""},gettime:{key:"六.听力下降发生时间",value:""},bloodcolor:{key:"七.耳聋性质",value:""},breath:{key:"八.耳聋程度（是否影响一般对话）",value:""},ketan:{key:"九.有无眩晕",value:""},blood:{key:"十.眩晕频率",value:""},breathnum:{key:"眩晕发作时伴随症状",value:""},chestpain:{key:"十二.有无耳漏（分泌物）",value:""},breathtype:{key:"十三.耳漏（分泌物）时间",value:""},ganran:{key:"十四.耳漏（分泌物） 性质",value:""},color:{key:"十五.耳部疾病的诱发病史（可多选）",value:[]},chestpainmore:{key:"十六.有无鼻部疾病",value:""},chestpainnum:{key:"十七.有无鼻阻塞",value:""},chestpaintype:{key:"十八.鼻阻塞时间",value:""},types:{key:"十九.有无鼻音",value:""},time:{key:"二十.鼻音的性质",value:""},times:{key:"二十一.有无分泌物",value:""},sleep:{key:"二十二.分泌物的性质",value:""},tanxing:{key:"二十三.分泌物的程度",value:""},dna:{key:"二十四.有无嗅觉问题",value:""},xiujue:{key:"二十五.嗅觉的变化",value:""},bixue:{key:"二十六.有无鼻出血",value:""},bichuxue:{key:"二十七.鼻出血的表现（可多选）",value:[]},dna1:{key:"二十八.有无头痛",value:""},dna2:{key:"二十九.有无合并鼻出血及鼻塞、流涕等",value:""},dna3:{key:"三十.有无鼻外伤、出血、肿胀和骨折",value:""},dna4:{key:"三十一.有无咽喉部疾病",value:""},dna5:{key:"三十二.有无咽喉痛",value:""},dna6:{key:"三十三.咽喉痛是否放射至耳及颈部",value:""},dna7:{key:"三十四.有无咽异感",value:""},dna8:{key:"三十五.咽异感的程度",value:""},dna9:{key:"三十六.是否影响吞咽",value:""},dna10:{key:"三十七.有无发声异常",value:""},bichuxue1:{key:"三十八.发声异常的表现（可多选）",value:[]},tunyan1:{key:"三十九.有无吞咽困难",value:""},tunyan2:{key:"四十.吞咽困难是否进行性加重",value:""},tunyan3:{key:"四十一.吞咽困难进食时有无呛咳、反流或疼痛",value:""},tunyan4:{key:"四十二.有无呼吸困难",value:""},tunyan5:{key:"四十三.呼吸困难是吸气性还是呼气性呼吸困难",value:""},tunyan6:{key:"四十四.呼吸困难是否进行性加重",value:""},tunyan7:{key:"四十五.有无气管、食管疾病",value:""},tunyan8:{key:"四十六.有无咳嗽",value:""},tunyan9:{key:"四十七.咳嗽有无伴吸气性喉鸣音、呼气性哮鸣音",value:""},tunyan10:{key:"四十八.有无咳痰",value:""},bichuxue2:{key:"四十九.痰液的性质（可多选）",value:[]},ketan1:{key:"五十.咳痰有无臭味，痰中有无带血",value:""},ketan2:{key:"五十一.有无呼吸困难",value:""},ketan3:{key:"五十二.呼吸困难，是否合并喉喘鸣",value:""},ketan4:{key:"五十三.有无胸痛",value:""},ketan5:{key:"五十四.有无异物吸入史或鲠卡史",value:""},ketan6:{key:"五十五.有无吞咽困难",value:""},ketan7:{key:"五十六.吞咽困难的程度",value:""}}}},methods:{submitForm(){console.log(this.ruleForm),window.android.printer(JSON.stringify(this.ruleForm))}}},t=u,m=a("0c7c"),n=Object(m["a"])(t,r,o,!1,null,null,null);l["default"]=n.exports}}]);
//# sourceMappingURL=erbiyanhou.bf9f49a9.js.map