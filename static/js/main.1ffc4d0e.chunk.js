(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(42)},34:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),l=a.n(o),c=(a(34),a(8)),s=a(9),u=(a(35),a(15)),i=a(3),m=a(19);var d=function(e){var t=e.game,a=e.showBonusWinners,n=e.bonusWinnerText,o=e.changeSelectedGame,l=e.selected;return r.a.createElement("div",{className:(l?"selected ":"")+"game",onClick:function(){return o(t)}},r.a.createElement("div",{className:"title"},r.a.createElement("strong",null,"OU",t.home?" vs ":" @ ",t.team)),r.a.createElement("div",null,t.date),t.complete&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"OU ",t.ouWon?"won":"lost"),r.a.createElement("div",null,t.ouScore," to ",t.oppScore),a&&r.a.createElement("div",null,n,Object(m.a)(new Set([].concat(Object(m.a)(t.closestOu),Object(m.a)(t.closestOpp)))).join(" "))),r.a.createElement("button",{className:"smallButton button1",onClick:function(){return window.open("https://www.espn.com/college-football/game/_/gameId/"+t.espnGameId)}},"ESPN"))};var p=function(e){var t=e.player,a=e.playerClicked,n=e.guessedWinner,o=e.earnedBonusOU,l=e.earnedBonusOpp,c=e.selectedGameTeam,s="player",u=0;return n&&(s+=" guessedWinner",u++),o&&(s+=" earnedBonus",u++),l&&(s+=" earnedBonus",u++),r.a.createElement("div",{className:s,onClick:function(){return a(t)}},r.a.createElement("div",{className:"title"},r.a.createElement("strong",null,t.name)),r.a.createElement("div",null,"Total Points:",t.totalScore),c&&u?r.a.createElement("div",null,u," for OU vs ",c):null)},v=function(e){var t=e.players,a=e.games;return r.a.createElement("table",{align:"center"},r.a.createElement("thead",null,f(a)),r.a.createElement("tbody",null,y(t)))},f=function(e){return r.a.createElement("tr",null,r.a.createElement("th",null,"Player"),e.map(function(e){return r.a.createElement("th",{key:e.team},e.team)}))},y=function(e){return e.map(function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.houston),r.a.createElement("td",null,e.southDakota),r.a.createElement("td",null,e.ucla),r.a.createElement("td",null,e.texasTech),r.a.createElement("td",null,e.kansas),r.a.createElement("td",null,e.texas),r.a.createElement("td",null,e.westVirginia),r.a.createElement("td",null,e.kansasState),r.a.createElement("td",null,e.iowaState),r.a.createElement("td",null,e.baylor),r.a.createElement("td",null,e.tcu),r.a.createElement("td",null,e.osu))})};var E=Object(i.b)(function(e){return{Scores:e.Scores,Players:e.Players,Outcome:e.Outcome,Config:e.Config}})(function(e){var t=e.Outcome,a=e.Config;a.debug;var o=Object(n.useState)(a.showTable),l=Object(u.a)(o,2),c=l[0],s=l[1],i=Object(n.useState)(null),m=Object(u.a)(i,2),f=m[0],y=m[1],E=function(e){alert(JSON.stringify(e))};return r.a.createElement("div",{id:"HomeDiv"},r.a.createElement("h1",null,a.announcement),JSON.stringify(f),r.a.createElement("div",{id:"GamesDiv"},t.outcome.scores.map(function(e){return r.a.createElement(d,{selected:e===f,key:e.id,changeSelectedGame:y,bonusWinnerText:a.bonusWinnerText,showBonusWinners:a.showBonusWinners,game:e})})),r.a.createElement("div",{id:"PlayersDiv"},t.outcome.players.map(function(e){return r.a.createElement(p,{selectedGameTeam:f&&f.team,guessedWinner:f&&f.guessedWinner.includes(e.name),earnedBonusOpp:f&&f.closestOpp.includes(e.name),earnedBonusOU:f&&f.closestOu.includes(e.name),playerClicked:E,key:e.name,player:e})})),r.a.createElement("button",{className:"largeButton button2",onClick:function(){return s(!c)}},c?"Hide":"Show"," Scores Table"),c&&r.a.createElement("div",{id:"ScoresDiv"},r.a.createElement(v,{players:t.outcome.players,games:t.outcome.scores})))});var h=Object(i.b)(function(e){return{Scores:e.Scores,Players:e.Players}})(function(e){var t=e.Scores;return r.a.createElement("div",null,"scores page",r.a.createElement("div",null,JSON.stringify(t)))});var g=Object(i.b)(function(e){return{Scores:e.Scores,Players:e.Players}})(function(e){var t=e.Players;return t.loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,t.players.map(function(e){return r.a.createElement("div",null,r.a.createElement(c.b,{to:"/players/"+e.name},e.name))}))});var b=Object(i.b)(function(e){return{Scores:e.Scores,Players:e.Players}})(function(e){var t=e.Players,a=e.match;if(t.loading)return r.a.createElement("div",null,"Loading...");var n=a.params.name,o=t.players.filter(function(e){return e.name.toLowerCase()===n.toLowerCase()});return o.length?r.a.createElement("div",null,"Hello ",n,". Here are your scores: ",JSON.stringify(o),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/players"},"Back to all Players"))):r.a.createElement("div",null,"Could not find: ",n," ",r.a.createElement(c.b,{to:"/players"},"Back to all Players"))}),S=a(12),O=a.n(S),w=a(18),j="START_LOAD_SCORES",P="SCORES_LOADED",k="SCORES_ERROR",x="START_LOAD_PLAYERS",W="PLAYERS_LOADED";var C=Object(i.b)(void 0,function(e){return{LoadScores:function(){return e(function(){var e=Object(w.a)(O.a.mark(function e(t){var a,n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:j}),e.prev=1,e.next=4,fetch("https://api.sheety.co/63dbeee0-3aa4-4e79-ac39-545ac3ee7b86");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t({type:P,scores:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t((r=e.t0,{type:k,error:r}));case 14:case"end":return e.stop()}var r},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}())},LoadPlayers:function(){return e(function(){var e=Object(w.a)(O.a.mark(function e(t){var a,n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:x}),e.next=3,fetch("https://api.sheety.co/d50d6864-69d7-46b3-b39d-a4ea29480254");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,t({type:W,players:n});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}})(function(e){var t=e.LoadScores,a=e.LoadPlayers;return Object(n.useEffect)(function(){t(),a()},[t,a]),r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{basename:"/mema-football-2019"},r.a.createElement("header",{className:"App-header"},r.a.createElement(c.b,{className:"HeaderLink",to:"/"},"Mema Football Pool 2019")),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:E}),r.a.createElement(s.a,{exact:!0,path:"/players",component:g}),r.a.createElement(s.a,{exact:!0,path:"/players/:name",component:b}),r.a.createElement(s.a,{exact:!0,path:"/scores",component:h}),r.a.createElement(s.a,{render:function(){return r.a.createElement("div",null,"404",r.a.createElement("div",null,r.a.createElement(c.b,{to:"/"},"Go Home")))}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(10),B=a(28);var N=a(13);var T=function(e){if(e.loadingPlayers||e.loadingScores)return e;var t=e.players,a=e.scores,n=!0,r=!1,o=void 0;try{for(var l,c=t[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var s=l.value;s.gameScores={},s.totalScore=0}}catch(U){r=!0,o=U}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}var i=!0,m=!1,d=void 0;try{for(var p,v=a[Symbol.iterator]();!(i=(p=v.next()).done);i=!0){var f=p.value;f.guessedWinner=[],f.closestOu=[],f.closestOpp=[]}}catch(U){m=!0,d=U}finally{try{i||null==v.return||v.return()}finally{if(m)throw d}}var y=!0,E=!1,h=void 0;try{for(var g,b=a.filter(function(e){return e.complete})[Symbol.iterator]();!(y=(g=b.next()).done);y=!0){var S=g.value,O={ou:100,opp:100};S.ouWon=S.ouScore>S.oppScore;var w=!0,j=!1,P=void 0;try{for(var k,x=t[Symbol.iterator]();!(w=(k=x.next()).done);w=!0){var W=k.value;W.gameScores[S.id]=0;var C=W[S.id].split("-"),L=Object(u.a)(C,2),B=L[0],T=L[1];W.ouWon=parseInt(B)>parseInt(T),W.ou=Math.abs(S.ouScore-B),W.opp=Math.abs(S.oppScore-T),S.ouWon===W.ouWon&&(O.ou=Math.min(O.ou,W.ou),O.opp=Math.min(O.opp,W.opp))}}catch(U){j=!0,P=U}finally{try{w||null==x.return||x.return()}finally{if(j)throw P}}var D=!0,R=!1,A=void 0;try{for(var _,G=t[Symbol.iterator]();!(D=(_=G.next()).done);D=!0){var H=_.value,J=!1;H.ouWon===S.ouWon&&(J=!0,S.guessedWinner.push(H.name),H.gameScores[S.id]++),J&&H.ou===O.ou&&(S.closestOu.push(H.name),H.gameScores[S.id]++),J&&H.opp===O.opp&&(S.closestOpp.push(H.name),H.gameScores[S.id]++),H.totalScore+=H.gameScores[S.id]}}catch(U){R=!0,A=U}finally{try{D||null==G.return||G.return()}finally{if(R)throw A}}}}catch(U){E=!0,h=U}finally{try{y||null==b.return||b.return()}finally{if(E)throw h}}return Object(N.a)({},e,{outcome:{scores:a,players:t}})},D=Object(L.c)({Scores:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{scores:[],loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{loading:!0};case P:return{scores:t.scores,loading:!1};case k:return{loading:!1,error:t.error};default:return e}},Players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{players:[],loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0};case W:return{players:t.players,loading:!1};default:return e}},Outcome:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loadingPlayers:!1,outcome:{scores:[],players:[]},loadingScores:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(N.a)({},e,{loadingPlayers:!0});case j:return Object(N.a)({},e,{loadingScores:!0});case P:return e=Object(N.a)({},e,{scores:t.scores,loadingScores:!1}),T(e,t);case W:return e=Object(N.a)({},e,{players:t.players,loadingPlayers:!1}),T(e,t);default:return e}},Config:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}),R={};function A(e){return R.Config=e,Object(L.d)(D,R,Object(L.a)(B.a))}fetch("https://api.sheety.co/85d08bfc-d77b-42a5-9d36-50c7aef7dc35").then(function(e){return e.json()}).then(function(e){var t=new URLSearchParams(window.location.search);(e=e[t.has("debug")?1:0]).debug=t.has("debug"),console.log(e),l.a.render(r.a.createElement(i.a,{store:A(e)},r.a.createElement(C,null)),document.getElementById("root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.1ffc4d0e.chunk.js.map