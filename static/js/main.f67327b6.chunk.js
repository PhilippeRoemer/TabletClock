(this.webpackJsonptablet_clock=this.webpackJsonptablet_clock||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},42:function(e,c,t){"use strict";t.r(c);var r=t(0),n=t(2),s=t.n(n),i=t(13),a=t.n(i),d=(t(22),t(16)),j=(t(23),t(14)),h=t.n(j),l=t(4),o=function(e){var c=e.name,t=e.price,n=e.marketcap,s=e.image,i=e.priceChange_1h,a=e.priceChange_24h,d=e.priceChange_7d,j=e.ath,h=e.chart;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{src:s,className:"coin-img"})}),Object(r.jsx)("td",{children:Object(r.jsx)("h3",{children:c})}),Object(r.jsx)("td",{children:Object(r.jsxs)("p",{children:["$",t.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")]})}),Object(r.jsx)("td",{children:i<0&&i>-10?Object(r.jsxs)("p",{className:"red",children:[i.toFixed(2),"%"]}):i<-10?Object(r.jsxs)("p",{className:"redBold",children:[i.toFixed(2),"%"]}):i<10&&i>0?Object(r.jsxs)("p",{className:"green",children:[i.toFixed(2),"%"]}):i>10(Object(r.jsxs)("p",{className:"greenBold",children:[i.toFixed(2),"%"]}))}),Object(r.jsx)("td",{children:a<0&&a>-10?Object(r.jsxs)("p",{className:"red",children:[a.toFixed(2),"%"]}):a<-10?Object(r.jsxs)("p",{className:"redBold",children:[a.toFixed(2),"%"]}):a<10&&a>0?Object(r.jsxs)("p",{className:"green",children:[a.toFixed(2),"%"]}):Object(r.jsxs)("p",{className:"greenBold",children:[a.toFixed(2),"%"]})}),Object(r.jsx)("td",{children:d<0&&d>-10?Object(r.jsxs)("p",{className:"red",children:[d.toFixed(2),"%"]}):d<-10?Object(r.jsxs)("p",{className:"redBold",children:[d.toFixed(2),"%"]}):d<10&&d>0?Object(r.jsxs)("p",{className:"green",children:[d.toFixed(2),"%"]}):Object(r.jsxs)("p",{className:"greenBold",children:[d.toFixed(2),"%"]})}),Object(r.jsxs)("td",{children:["$",j.toLocaleString()]}),Object(r.jsxs)("td",{children:["$",n.toLocaleString()]}),Object(r.jsx)("td",{className:"sparklineGraph",children:Object(r.jsx)(l.Sparklines,{data:h,children:Object(r.jsx)(l.SparklinesLine,{color:"#66fcf1"})})})]})},x=t(15),p=t.n(x);var b=function(){var e=Object(n.useState)([]),c=Object(d.a)(e,2),t=c[0],s=c[1];return Object(n.useEffect)((function(){p.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20litecoin%2C%20iota%2C%20nano&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d%2C1h%2C24h").then((function(e){s(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[t]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"clock",children:Object(r.jsx)(h.a,{format:"hh-mm"})}),Object(r.jsxs)("table",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{}),Object(r.jsx)("th",{children:"Coin"}),Object(r.jsx)("th",{children:"Current Price"}),Object(r.jsx)("th",{children:"1h"}),Object(r.jsx)("th",{children:"24h"}),Object(r.jsx)("th",{children:"7d"}),Object(r.jsx)("th",{children:"ATH"}),Object(r.jsx)("th",{children:"Market Cap"}),Object(r.jsx)("th",{children:"7d Chart"})]}),t.map((function(e){return Object(r.jsx)(o,{name:e.name,price:e.current_price,marketcap:e.market_cap,image:e.image,priceChange_1h:e.price_change_percentage_1h_in_currency,priceChange_24h:e.price_change_percentage_24h,priceChange_7d:e.price_change_percentage_7d_in_currency,ath:e.ath,chart:e.sparkline_in_7d.price})}))]})]})};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.f67327b6.chunk.js.map