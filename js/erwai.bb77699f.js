(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["erwai"],{f6d7:function(e,l,a){"use strict";a.r(l);var r=function(){var e=this,l=e._self._c;return l("div",{staticClass:"home"},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-position":"top"}},[l("el-form-item",{attrs:{label:e.ruleForm.resource.key}},[l("el-radio-group",{model:{value:e.ruleForm.resource.value,callback:function(l){e.$set(e.ruleForm.resource,"value",l)},expression:"ruleForm.resource.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.cishu.key}},[l("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:""},model:{value:e.ruleForm.cishu.value,callback:function(l){e.$set(e.ruleForm.cishu,"value",l)},expression:"ruleForm.cishu.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.dabian.key}},[l("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:""},model:{value:e.ruleForm.dabian.value,callback:function(l){e.$set(e.ruleForm.dabian,"value",l)},expression:"ruleForm.dabian.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpain.key}},[l("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:""},model:{value:e.ruleForm.chestpain.value,callback:function(l){e.$set(e.ruleForm.chestpain,"value",l)},expression:"ruleForm.chestpain.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.shoufa.key}},[l("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:""},model:{value:e.ruleForm.shoufa.value,callback:function(l){e.$set(e.ruleForm.shoufa,"value",l)},expression:"ruleForm.shoufa.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.reason.key}},[l("el-radio-group",{model:{value:e.ruleForm.reason.value,callback:function(l){e.$set(e.ruleForm.reason,"value",l)},expression:"ruleForm.reason.value"}},[l("el-radio",{attrs:{label:"是 "}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.cough.key}},[l("el-radio-group",{model:{value:e.ruleForm.cough.value,callback:function(l){e.$set(e.ruleForm.cough,"value",l)},expression:"ruleForm.cough.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.taifen.key}},[l("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:""},model:{value:e.ruleForm.taifen.value,callback:function(l){e.$set(e.ruleForm.taifen,"value",l)},expression:"ruleForm.taifen.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.kashi.key}},[l("el-date-picker",{attrs:{type:"daterange","range-separator":"-","start-placeholder":"胎粪开始排出的时间","end-placeholder":"大便转黄的时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.kashi.value,callback:function(l){e.$set(e.ruleForm.kashi,"value",l)},expression:"ruleForm.kashi.value"}},[e._v(" > ")])],1),l("el-form-item",{attrs:{label:e.ruleForm.smell.key}},[l("el-radio-group",{model:{value:e.ruleForm.smell.value,callback:function(l){e.$set(e.ruleForm.smell,"value",l)},expression:"ruleForm.smell.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.bloodcolor.key}},[l("el-radio-group",{model:{value:e.ruleForm.bloodcolor.value,callback:function(l){e.$set(e.ruleForm.bloodcolor,"value",l)},expression:"ruleForm.bloodcolor.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.gettime.key}},[l("el-date-picker",{staticStyle:{width:"50%"},attrs:{type:"date",placeholder:"选择时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.gettime.value,callback:function(l){e.$set(e.ruleForm.gettime,"value",l)},expression:"ruleForm.gettime.value"}},[e._v(" >")])],1),l("el-form-item",{attrs:{label:e.ruleForm.pinlv.key}},[l("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:""},model:{value:e.ruleForm.pinlv.value,callback:function(l){e.$set(e.ruleForm.pinlv,"value",l)},expression:"ruleForm.pinlv.value"}})],1),l("el-form-item",{attrs:{label:e.ruleForm.breath.key}},[l("el-radio-group",{model:{value:e.ruleForm.breath.value,callback:function(l){e.$set(e.ruleForm.breath,"value",l)},expression:"ruleForm.breath.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.blood.key}},[l("el-radio-group",{model:{value:e.ruleForm.blood.value,callback:function(l){e.$set(e.ruleForm.blood,"value",l)},expression:"ruleForm.blood.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breathnum.key}},[l("el-radio-group",{model:{value:e.ruleForm.breathnum.value,callback:function(l){e.$set(e.ruleForm.breathnum,"value",l)},expression:"ruleForm.breathnum.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否 "}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.breathtype.key}},[l("el-radio-group",{model:{value:e.ruleForm.breathtype.value,callback:function(l){e.$set(e.ruleForm.breathtype,"value",l)},expression:"ruleForm.breathtype.value"}},[l("el-radio",{attrs:{label:"小儿少尿指尿量小于1mml/(kg·h) "}}),l("el-radio",{attrs:{label:"无尿指尿量小于50ml／24小时"}}),l("el-radio",{attrs:{label:"以上均无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpainmore.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpainmore.value,callback:function(l){e.$set(e.ruleForm.chestpainmore,"value",l)},expression:"ruleForm.chestpainmore.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpainnum.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpainnum.value,callback:function(l){e.$set(e.ruleForm.chestpainnum,"value",l)},expression:"ruleForm.chestpainnum.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ganran.key}},[l("el-radio-group",{model:{value:e.ruleForm.ganran.value,callback:function(l){e.$set(e.ruleForm.ganran,"value",l)},expression:"ruleForm.ganran.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.gettimes.key}},[l("el-date-picker",{staticStyle:{width:"50%"},attrs:{type:"date",placeholder:"选择时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.gettimes.value,callback:function(l){e.$set(e.ruleForm.gettimes,"value",l)},expression:"ruleForm.gettimes.value"}},[e._v(" >")])],1),l("el-form-item",{attrs:{label:e.ruleForm.huxi.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.huxi.value,callback:function(l){e.$set(e.ruleForm.huxi,"value",l)},expression:"ruleForm.huxi.value"}},[l("el-checkbox",{attrs:{label:"气急",name:"huxi"}}),l("el-checkbox",{attrs:{label:"心悸",name:"huxi"}}),l("el-checkbox",{attrs:{label:"呼吸困难",name:"huxi"}}),l("el-checkbox",{attrs:{label:"吸气性喘鸣",name:"huxi"}}),l("el-checkbox",{attrs:{label:"喜静不好动",name:"huxi"}}),l("el-checkbox",{attrs:{label:"发绀及反复呼吸道感染",name:"huxi"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"huxi"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ketan.key}},[l("el-radio-group",{model:{value:e.ruleForm.ketan.value,callback:function(l){e.$set(e.ruleForm.ketan,"value",l)},expression:"ruleForm.ketan.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.chestpaintype.key}},[l("el-radio-group",{model:{value:e.ruleForm.chestpaintype.value,callback:function(l){e.$set(e.ruleForm.chestpaintype,"value",l)},expression:"ruleForm.chestpaintype.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.times.key}},[l("el-radio-group",{model:{value:e.ruleForm.times.value,callback:function(l){e.$set(e.ruleForm.times,"value",l)},expression:"ruleForm.times.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.youwu.key}},[l("el-radio-group",{model:{value:e.ruleForm.youwu.value,callback:function(l){e.$set(e.ruleForm.youwu,"value",l)},expression:"ruleForm.youwu.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.types.key}},[l("el-radio-group",{model:{value:e.ruleForm.types.value,callback:function(l){e.$set(e.ruleForm.types,"value",l)},expression:"ruleForm.types.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.xitong.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.xitong.value,callback:function(l){e.$set(e.ruleForm.xitong,"value",l)},expression:"ruleForm.xitong.value"}},[l("el-checkbox",{attrs:{label:"鸭步",name:"xitong"}}),l("el-checkbox",{attrs:{label:"剪刀步",name:"xitong"}}),l("el-checkbox",{attrs:{label:"短肢性跛行",name:"xitong"}}),l("el-checkbox",{attrs:{label:"肌力减低性跛行如扶膝",name:"xitong"}}),l("el-checkbox",{attrs:{label:"扶臀跛行",name:"xitong"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"xitong"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.time.key}},[l("el-radio-group",{model:{value:e.ruleForm.time.value,callback:function(l){e.$set(e.ruleForm.time,"value",l)},expression:"ruleForm.time.value"}},[l("el-radio",{attrs:{label:"是"}}),l("el-radio",{attrs:{label:"否"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.ershen.key}},[l("el-radio-group",{model:{value:e.ruleForm.ershen.value,callback:function(l){e.$set(e.ruleForm.ershen,"value",l)},expression:"ruleForm.ershen.value"}},[l("el-radio",{attrs:{label:"有"}}),l("el-radio",{attrs:{label:"无"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.shenzang.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.shenzang.value,callback:function(l){e.$set(e.ruleForm.shenzang,"value",l)},expression:"ruleForm.shenzang.value"}},[l("el-checkbox",{attrs:{label:"智力障碍",name:"shenzang"}}),l("el-checkbox",{attrs:{label:"大小便失禁",name:"shenzang"}}),l("el-checkbox",{attrs:{label:"肢体瘫痪",name:"shenzang"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"shenzang"}})],1)],1),l("el-form-item",{attrs:{label:e.ruleForm.youdu.key}},[l("el-checkbox-group",{model:{value:e.ruleForm.youdu.value,callback:function(l){e.$set(e.ruleForm.youdu,"value",l)},expression:"ruleForm.youdu.value"}},[l("el-checkbox",{attrs:{label:"结核",name:"youdu"}}),l("el-checkbox",{attrs:{label:"佝偻病史  ",name:"youdu"}}),l("el-checkbox",{attrs:{label:"手术史  ",name:"youdu"}}),l("el-checkbox",{attrs:{label:"家族史  ",name:"youdu"}}),l("el-checkbox",{attrs:{label:"以上均无",name:"youdu"}})],1)],1),l("el-form-item",{staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(l){return e.submitForm("ruleForm")}}},[e._v("打印")])],1)],1)],1)},t=[],o={data(){return{ruleForm:{resource:{key:"1.是否属先天性畸形",value:""},cishu:{key:"2.出生时（或最初发现的时间）畸形的表现",value:""},dabian:{key:"3.出生时（或最初发现的时间）畸形发展至就诊时的变化",value:""},chestpain:{key:"4.如果是先天性畸形，曾作过何种特殊检查",value:""},shoufa:{key:"5.如果是先天性畸形，曾作过何种治疗",value:""},reason:{key:"6.消化道是否畸形",value:""},cough:{key:"7.消化道畸形是否有胎粪排出",value:""},taifen:{key:"8.胎粪的颜色",value:""},kashi:{key:"9.胎粪开始排出的时间,大便转黄的时间",value:""},smell:{key:"10.消化道畸形是否有大便从正常肛门以外部位排出",value:""},bloodcolor:{key:"11.消化道畸形是否有呕吐",value:""},gettime:{key:"12.呕吐出现的时间",value:""},pinlv:{key:"13.呕吐出现的频率",value:""},breath:{key:"14.泌尿生殖系统是否畸形",value:""},blood:{key:"15.排尿是否费力",value:""},breathnum:{key:"16.是否有反复泌尿系统感染",value:""},breathtype:{key:"17.尿量状况（新生儿生后1～2天内排尿很少或不排尿属生理性，即使36小时内不排尿亦不能称为无尿）",value:""},chestpainmore:{key:"18.腹部包块排尿前后有无变化",value:""},chestpainnum:{key:"19.心胸是否畸形",value:""},ganran:{key:"20.胸骨是否凹凸",value:""},gettimes:{key:"21.心胸畸形出现的时间",value:""},huxi:{key:"22.心胸畸形是否伴随以下症状（可多选）",value:[]},ketan:{key:"23.心胸畸形是否有第一次吸吮后即呕吐",value:""},chestpaintype:{key:"24.心胸畸形是否同时伴有呼吸困难",value:""},times:{key:"25.运动系统是否畸形",value:""},youwu:{key:"26.四肢脊柱是否有畸形",value:""},types:{key:"27.运动系统畸形有无功能障碍",value:""},xitong:{key:"28.运动系统畸形有无特殊跛行步态(可多选)",value:""},time:{key:"29.神经系统是否畸形",value:""},ershen:{key:"30.头颅有无畸形",value:""},shenzang:{key:"31.神经系统畸形是否伴有以下症状(可多选)",value:""},youdu:{key:"32.有无以下既往史(可多选)",value:""}}}},methods:{submitForm(){console.log(this.ruleForm);let e={};for(const l in this.ruleForm)e[this.ruleForm[l].key]=this.ruleForm[l].value;window.android.printer(JSON.stringify(e))}}},u=o,m=a("0c7c"),s=Object(m["a"])(u,r,t,!1,null,null,null);l["default"]=s.exports}}]);
//# sourceMappingURL=erwai.bb77699f.js.map