(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(39)},31:function(e,t,a){},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),l=(a(31),a(5)),s=a(9),u=(a(32),a(3));var i=Object(u.b)(function(e){return{Scores:e.Scores,Players:e.Players}})(function(e){return e.Scores,r.a.createElement("div",null,r.a.createElement("h2",null,"Home"),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/scores"},"Scores")),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/players"},"Players")))});var m=Object(u.b)(function(e){return{Scores:e.Scores,Players:e.Players}})(function(e){var t=e.Scores;return r.a.createElement("div",null,"scores page",r.a.createElement("div",null,JSON.stringify(t)))});var d=Object(u.b)(function(e){return{Scores:e.Scores,Players:e.Players}})(function(e){var t=e.Players;return t.loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,t.players.map(function(e){return r.a.createElement("div",null,r.a.createElement(l.b,{to:"/players/"+e.name},e.name))}))});var p=Object(u.b)(function(e){return{Scores:e.Scores,Players:e.Players}})(function(e){var t=e.Players,a=e.match;if(t.loading)return r.a.createElement("div",null,"Loading...");var n=a.params.name,c=t.players.filter(function(e){return e.name.toLowerCase()===n.toLowerCase()});return c.length?r.a.createElement("div",null,"Hello ",n,". Here are your scores: ",JSON.stringify(c),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/players"},"Back to all Players"))):r.a.createElement("div",null,"Could not find: ",n," ",r.a.createElement(l.b,{to:"/players"},"Back to all Players"))}),f=a(12),y=a.n(f),v=a(16),E="START_LOAD_SCORES",b="SCORES_LOADED",h="START_LOAD_PLAYERS",S="PLAYERS_LOADED";var g=Object(u.b)(function(e,t){return{Scores:e.Scores,Players:e.Players}},function(e){return{LoadScores:function(){return e(function(){var e=Object(v.a)(y.a.mark(function e(t){var a,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:E}),e.next=3,fetch("https://api.sheety.co/63dbeee0-3aa4-4e79-ac39-545ac3ee7b86");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,t({type:b,scores:n});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},LoadPlayers:function(){return e(function(){var e=Object(v.a)(y.a.mark(function e(t){var a,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:h}),e.next=3,fetch("https://api.sheety.co/d50d6864-69d7-46b3-b39d-a4ea29480254");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,t({type:S,players:n});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}})(function(e){var t=e.LoadScores,a=e.LoadPlayers;return Object(n.useEffect)(function(){t(),a()},[t,a]),r.a.createElement("div",{className:"App"},r.a.createElement(l.a,{basename:"/mema-football-2019"},r.a.createElement("header",{className:"App-header"},r.a.createElement(l.b,{className:"HeaderLink",to:"/"},"Mema Football Pool 2019")),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:i}),r.a.createElement(s.a,{exact:!0,path:"/players",component:d}),r.a.createElement(s.a,{exact:!0,path:"/players/:name",component:p}),r.a.createElement(s.a,{exact:!0,path:"/scores",component:m}),r.a.createElement(s.a,{render:function(){return r.a.createElement("div",null,"404",r.a.createElement("div",null,r.a.createElement(l.b,{to:"/"},"Go Home")))}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(10),w=a(25);var O=Object(P.c)({Scores:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{scores:[],loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{loading:!0};case b:return{scores:t.scores,loading:!1};default:return e}},Players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{players:[],loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{loading:!0};case S:return{players:t.players,loading:!1};default:return e}}}),L={};o.a.render(r.a.createElement(u.a,{store:Object(P.d)(O,L,Object(P.a)(w.a))},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.8351ccaf.chunk.js.map