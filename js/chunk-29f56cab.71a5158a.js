(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29f56cab","chunk-2d21e91e"],{c5ff:function(e,n,t){"use strict";var a=t("e03b"),s=t.n(a);s.a},c855:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"background-panel"},[t("ul",{staticClass:"f f-fw-w"},e._l(e.schema.properties,function(n,a){return t("li",{key:a,class:{"w-percent-100":"slider"===n.format}},["slider"===n.format?t("div",{staticClass:"f f-ai-c"},[t("span",{staticClass:"mr-15"},[e._v(e._s(e.$i18n("designer.properties."+a)))]),t("Slider",{staticClass:"f-f-1",attrs:{value:e.data[a],min:0,max:1,step:.1},on:{change:function(n){return e.change(a,n)}}})],1):t(e.asyncLoadComponent(n.format),{tag:"component",attrs:{title:e.$i18n("designer.properties."+a),placeholder:e.$i18n("designer.properties."+a),schema:n,value:e.data[a]},on:{change:function(n){return e.change(a,n)}}})],1)}),0)])},s=[],c=t("d5b9"),i={name:"BackgroundPanel",mixins:[c["default"]]},r=i,o=(t("c5ff"),t("2877")),l=Object(o["a"])(r,a,s,!1,null,null,null);n["default"]=l.exports},d5b9:function(e,n,t){"use strict";t.r(n),n["default"]={props:{schema:Object,data:Object},inject:["asyncLoadComponent"],methods:{change:function(e,n){this.$emit("change",e,n)}}}},e03b:function(e,n,t){}}]);