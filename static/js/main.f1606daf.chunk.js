(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(39)},31:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),s=(n(31),n(15)),l=n(8),u=(n(32),n(7));var i=Object(u.b)(function(e){return{Scores:e.Scores,Players:e.Players}})(function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Home"),r.a.createElement(s.b,{to:"/scores"},"Scores"))});var p=Object(u.b)(function(e){return{Scores:e.Scores,Players:e.Players}})(function(e){var t=e.Scores;return r.a.createElement("div",null,"scores page",r.a.createElement("div",null,JSON.stringify(t)))}),d=n(11),f=n.n(d),m=n(16),y="START_LOAD_SCORES",h="SCORES_LOADED",v="START_LOAD_PLAYERS",E="PLAYERS_LOADED";var b=Object(u.b)(function(e,t){return{Scores:e.Scores,Players:e.Players}},function(e){return{LoadScores:function(){return e(function(){var e=Object(m.a)(f.a.mark(function e(t){var n,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:y}),e.next=3,fetch("https://api.sheety.co/63dbeee0-3aa4-4e79-ac39-545ac3ee7b86");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,t({type:h,scores:a});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},LoadPlayers:function(){return e(function(){var e=Object(m.a)(f.a.mark(function e(t){var n,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:v}),e.next=3,fetch("https://api.sheety.co/d50d6864-69d7-46b3-b39d-a4ea29480254");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,t({type:E,players:a});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}})(function(e){var t=e.LoadScores,n=(e.Scores,e.LoadPlayers),c=e.Players;return Object(a.useEffect)(function(){t(),n()},[]),console.log("url","/mema-football-2019"),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Mema Football Pool 2019"),r.a.createElement(s.a,{basename:"/mema-football-2019"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:i}),r.a.createElement(l.a,{exact:!0,path:"/players",render:function(){return r.a.createElement("div",null,"players")}}),r.a.createElement(l.a,{exact:!0,path:"/players/:name",render:function(){return r.a.createElement("div",null,"players2")}}),r.a.createElement(l.a,{exact:!0,path:"/scores",component:p}))),r.a.createElement("p",null,JSON.stringify(c)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(9),g=n(25);var w=Object(S.c)({Scores:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{scores:[],loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case h:return{scores:t.scores,loading:!1};default:return e}},Players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{players:[],loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loading:!0};case E:return{players:t.players,loading:!1};default:return e}}}),O={};o.a.render(r.a.createElement(u.a,{store:Object(S.d)(w,O,Object(S.a)(g.a))},r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.f1606daf.chunk.js.map