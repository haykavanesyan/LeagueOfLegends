(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(A,e,g){},103:function(A,e,g){},221:function(A,e,g){"use strict";g.r(e);var B=g(0),t=g.n(B),w=g(37),n=g.n(w),E=(g(102),g(103),g(223)),C=g(222),o=g(8),D=g.n(o),a=Object(C.a)({form:"app"})((function(A){return t.a.createElement("form",{onSubmit:A.handleSubmit},t.a.createElement(E.a,{className:D.a.input,name:"search",component:"input"}),t.a.createElement("button",{className:D.a.button},"Search"))})),i=g(40),r=g(13),Q=g(91),M={result:[],chosen:[],adden:[]},s=function(){return{type:"DELETE_RESULT"}},c=g(12),I=g(92),Y=g.n(I),G=g(93),h=g.n(G),u=function(A){return t.a.createElement("div",null,A.result.map((function(e){return t.a.createElement("div",{className:D.a.result},t.a.createElement("div",null,t.a.createElement("img",{src:e.image})),t.a.createElement("div",{className:D.a.title},t.a.createElement("b",{className:D.a.b},e.title),t.a.createElement("p",{className:D.a.p},e.description)),t.a.createElement("div",null,A.adden.some((function(A){return A===e.id}))?t.a.createElement("img",{src:h.a}):t.a.createElement("a",{onClick:function(){A.chosenThunk(e)}},t.a.createElement("img",{src:Y.a})))," ")})))},F=g(94),l=g.n(F),d=function(A){return t.a.createElement("div",{className:D.a.div},A.chosen.map((function(e){return t.a.createElement("div",{className:D.a.chosen},t.a.createElement("div",null,t.a.createElement("img",{src:e.image})),t.a.createElement("div",null,t.a.createElement("b",{className:D.a.b},e.title),t.a.createElement("p",{className:D.a.p},e.description)),t.a.createElement("div",null,t.a.createElement("a",{onClick:function(){window.confirm("Are you sure?")&&A.removed(e,e.id)}},t.a.createElement("img",{src:l.a}))))})))},K=Object(c.b)((function(A){return{result:A.app.result,chosen:A.app.chosen,adden:A.app.adden}}),{searchThunk:function(A){return function(e){e({type:"DELETE_RESULT"}),function(A){return Q.get("https://api-search.win.gg/search?q=".concat(A,"&index=tournament"))}(A).then((function(A){A.data[0]&&A.data[0].documents.map((function(A){var g,B,t,w;e((g=A.id,B=A.images.square.filePath,t=A.title,w=A.description,{type:"ADD_RESULT",id:g,image:B,title:t,description:w}))}))}))}},chosenThunk:function(A){return function(e){e(function(A){return{type:"ADD_CHOSEN",item:A}}(A)),e({type:"DELETE_RESULT"})}},removed:function(A,e){return{type:"REMOVE",item:A,id:e}},deleteResult:s})((function(A){return t.a.createElement("div",null,t.a.createElement("div",{className:"App"},t.a.createElement(a,{onSubmit:function(e){A.searchThunk(e.search)}}),0==A.result.length?"":t.a.createElement("div",{className:"results"},A.result.length>0?t.a.createElement(u,A):t.a.createElement("div",null))),t.a.createElement("div",null,t.a.createElement(d,A)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=g(5),j=g(224),O=g(95),U=Object(m.c)({form:j.a,app:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DELETE_RESULT":return Object(r.a)(Object(r.a)({},A),{},{result:[]});case"ADD_RESULT":return Object(r.a)(Object(r.a)({},A),{},{result:[{id:e.id,image:"https://cdn-images.win.gg/"+e.image,title:e.title,description:e.description}].concat(Object(i.a)(A.result))});case"ADD_CHOSEN":return Object(r.a)(Object(r.a)({},A),{},{chosen:[].concat(Object(i.a)(A.chosen),[e.item]),adden:[e.item.id].concat(Object(i.a)(A.adden))});case"REMOVE":return Object(r.a)(Object(r.a)({},A),{},{chosen:A.chosen.filter((function(A){return A!==e.item})),adden:A.adden.filter((function(A){return A!==e.id}))})}return A}}),x=Object(m.d)(U,Object(m.a)(O.a)),R=x;window.store=x;var f=function(){n.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(c.a,{store:R},t.a.createElement(K,null))),document.getElementById("root"))};f(),R.subscribe(f),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()})).catch((function(A){console.error(A.message)}))},8:function(A,e,g){A.exports={titile:"result_titile__2L2L9",b:"result_b__2LE7g",p:"result_p__2zGbd",input:"result_input__sRZh6",button:"result_button__1KWLR",result:"result_result__3FYRA",chosen:"result_chosen__19JY_",div:"result_div__7u_aD"}},92:function(A,e){A.exports="data:image/png;base64,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"},93:function(A,e,g){A.exports=g.p+"static/media/deleted.0d4c04f9.png"},94:function(A,e,g){A.exports=g.p+"static/media/remove.729061e3.png"},97:function(A,e,g){A.exports=g(221)}},[[97,1,2]]]);
//# sourceMappingURL=main.f0f5d53f.chunk.js.map