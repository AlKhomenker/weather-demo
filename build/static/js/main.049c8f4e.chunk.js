(this.webpackJsonpherolo=this.webpackJsonpherolo||[]).push([[0],{19:function(e,t,a){e.exports={wrapper:"ItemDay_wrapper__AlvZP",description:"ItemDay_description__17W0I",btn:"ItemDay_btn__1EaRv",txt:"ItemDay_txt__3xGVc"}},25:function(e,t,a){e.exports={navBlock:"NavBar_navBlock__1b5Vj",container:"NavBar_container__3I_cO",NavLink:"NavBar_NavLink__2bpF3",images:"NavBar_images__3-HRK",btn:"NavBar_btn__3lVQr",btnSave:"NavBar_btnSave__303TV"}},36:function(e,t,a){e.exports={header:"ImageSection_header__19ZuZ",txt:"ImageSection_txt__2bcVC",quote:"ImageSection_quote__URfSc"}},37:function(e,t,a){e.exports={wrapper:"SearchLocation_wrapper__-_efv",btn:"SearchLocation_btn__v-71y",input:"SearchLocation_input__CXjz4"}},43:function(e,t,a){e.exports={weeksBlock:"CurrentLocation_weeksBlock__15ZfS",block:"CurrentLocation_block__2flCk"}},65:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),i=a.n(r),o=(a(65),a(8)),s=a(20),l=a.n(s),u=a(26),h=a(10),d=a(43),j=a.n(d),b=a(36),p=a.n(b),m=a(37),O=a.n(m),y=a(94),v=a(96),f=a(58),x=a(95),w=(a(41),a(9)),g=a(2),T="SET_THEME",k="SET_NEW_URL",_="SET_CURRENT_WEATHER",S="SET_WEATHER_ON5_DAYS",D="SET_NEW_LOCATION",N="SET_FAVORITE_LOCATION",I={location:{Version:1,Key:"215854",Type:"City",Rank:31,LocalizedName:"Tel Aviv",Country:{ID:"IL",LocalizedName:"Israel"},AdministrativeArea:{ID:"TA",LocalizedName:"Tel Aviv"}}};var F=a(93),L=a(1),C=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){r(e.show)}),[e.show]);var i=function(){return r(!1)};return Object(L.jsx)("div",{children:Object(L.jsxs)(F.a,{show:c,onHide:i,backdrop:"static",keyboard:!1,children:[Object(L.jsx)(F.a.Header,{children:Object(L.jsx)(F.a.Title,{children:e.title})}),Object(L.jsx)(F.a.Body,{children:e.message}),Object(L.jsx)(F.a.Footer,{children:Object(L.jsx)(x.a,{variant:"secondary",onClick:i,children:"Close"})})]})})},E=function(){Object(w.b)();var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),i=Object(h.a)(r,2),o=i[0],s=i[1],d=Object(n.useState)(!1),j=Object(h.a)(d,2),b=j[0];j[1];Object(n.useEffect)((function(){a.length>0&&/^[a-zA-Z\s-]+$/.test(a)?s(!0):s(!1)}),[a]);var p=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsxs)("div",{children:[Object(L.jsxs)(y.a,{className:O.a.wrapper,children:[Object(L.jsxs)(v.a,{className:"mb-",children:[Object(L.jsx)(f.a,{placeholder:"Find out the weather in your city:",value:a,className:O.a.input,onChange:function(e){var t=e.target.value;c(t)}}),Object(L.jsx)(x.a,{variant:"outline-light",className:O.a.btn,onClick:p,style:{cursor:"".concat(o?"pointer":"not-allowed")},disabled:o?null:"disabled",children:"search"})]}),Object(L.jsx)("span",{children:"names must be in English only, may contain spaces and hyphens"})]}),Object(L.jsx)(C,{show:b,title:"Input Error:",message:'Sorry, we cannot find this city: "'.concat(a,'" . Please check if you have written correctly.')})]})},P=a.p+"static/media/city.fba57f48.png",W=function(e){return Object(L.jsx)("div",{children:Object(L.jsx)("div",{className:p.a.header,style:{background:"url(".concat(P,")")},children:Object(L.jsxs)("div",{className:p.a.txt,children:[Object(L.jsx)("h1",{children:e.header}),Object(L.jsxs)("div",{className:p.a.quote,children:[Object(L.jsx)("p",{children:e.quote}),Object(L.jsx)("hr",{})]}),"favorite"!==e.header?Object(L.jsx)(E,{}):null]})})})},M=a(19),U=a.n(M),V=a(24),A=a(23),B=a(27),H={theme:window.localStorage.getItem("localTheme"),page:""},R=function(e){return{type:T,payload:e}},q=function(e){return{type:k,payload:e}};var z,K=function(e){var t=Object(w.b)(),a=Object(w.c)((function(e){return e.themeStates.page})),c=Object(n.useState)(!1),r=Object(h.a)(c,2),i=r[0],o=r[1],s=function(){var e=Object(u.a)(l.a.mark((function e(a,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(q(n));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),d=function(e){o(e)};return"/"===a?new Date(e.date).toLocaleDateString()===new Date(e.currentDate).toLocaleDateString()?Object(L.jsx)("div",{className:U.a.wrapper,style:{background:i?"".concat(e.background):"linear-gradient(to bottom right, #FFDBC6, #1F5CAE)"},onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},children:i?Object(L.jsxs)("div",{style:{color:"".concat(e.color)},children:[Object(L.jsxs)("div",{className:U.a.description,children:[Object(L.jsx)("h4",{children:e.dayOfWeek}),Object(L.jsxs)("h3",{children:[e.minTempC,"\u2103 - ",e.maxTempC,"\u2103"]})]}),Object(L.jsxs)("div",{className:U.a.description,children:[Object(L.jsxs)("p",{children:[Object(L.jsx)(V.a,{icon:A.c})," : ",e.day]}),Object(L.jsxs)("p",{children:[Object(L.jsx)(V.a,{icon:A.b})," : ",e.night]})]})]}):Object(L.jsxs)("div",{className:U.a.description,style:{color:"white"},children:[Object(L.jsxs)("h4",{children:[e.dayOfWeek,", ",new Date(e.currentDate).toLocaleDateString()," "]}),Object(L.jsx)("h3",{children:e.currentWeatherText})]})}):Object(L.jsx)("div",{className:U.a.wrapper,style:{background:i?"linear-gradient(to bottom right, #FFDBC6, #1F5CAE)":"".concat(e.background)},onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},children:i?Object(L.jsxs)("div",{className:U.a.description,style:{color:"white"},children:[Object(L.jsx)("h4",{children:e.dayOfWeek}),Object(L.jsxs)("h3",{children:[e.minTempF,"\u2109 - ",e.maxTempF,"\u2109"]})]}):Object(L.jsxs)("div",{style:{color:"".concat(e.color)},children:[Object(L.jsxs)("div",{className:U.a.description,children:[Object(L.jsx)("h4",{children:e.dayOfWeek}),Object(L.jsxs)("h3",{children:[e.minTempC,"\u2103 - ",e.maxTempC,"\u2103"]})]}),Object(L.jsxs)("div",{className:U.a.description,children:[Object(L.jsxs)("p",{children:[Object(L.jsx)(V.a,{icon:A.c})," : ",e.day]}),Object(L.jsxs)("p",{children:[Object(L.jsx)(V.a,{icon:A.b})," : ",e.night]})]})]})}):Object(L.jsx)("div",{className:U.a.wrapper,style:{backgroundColor:"".concat(e.background)},children:Object(L.jsxs)("div",{className:U.a.description,style:{color:"".concat(e.color)},children:[Object(L.jsx)("h3",{children:e.city}),Object(L.jsxs)("h4",{children:[e.tempC,"\u2103"]}),Object(L.jsx)("h4",{children:e.weatherText}),Object(L.jsx)(B.b,{to:"/",children:Object(L.jsx)(x.a,{variant:"outline-light",className:U.a.btn,onClick:function(){return s(e.city,"/")},children:"see more"})})]})})},Z=function(e){var t=Object(n.useState)({}),a=Object(h.a)(t,2),c=a[0],r=a[1],i=Object(w.c)((function(e){return e.themeStates.theme}));return Object(n.useEffect)((function(){r("light"===i?{background1:"#F5F5F5",background2:"white",color:"#272E38"}:{background1:"#272E38",background2:"#313842",color:"white"})}),[i]),z=e.data.map((function(t,a){return"favorite"===e.header?a%2===1?Object(L.jsx)(K,{index:a,city:t.city,tempC:t.tempC,tempF:t.tempF,weatherText:t.weatherText,background:c.background1,color:c.color},a):Object(L.jsx)(K,{index:a,city:t.city,tempC:t.tempC,tempF:t.tempF,weatherText:t.weatherText,background:c.background2,color:c.color},a):a%2===1?Object(L.jsx)(K,{index:a,dayOfWeek:t.dayOfWeek,date:t.date,minTempF:t.minTempF,maxTempF:t.maxTempF,minTempC:t.minTempC,maxTempC:t.maxTempC,day:t.day,night:t.night,currentDate:e.currentWeather.LocalObservationDateTime,currentWeatherText:e.currentWeather.WeatherText,background:c.background1,color:c.color},a):Object(L.jsx)(K,{index:a,dayOfWeek:t.dayOfWeek,date:t.date,minTempF:t.minTempF,maxTempF:t.maxTempF,minTempC:t.minTempC,maxTempC:t.maxTempC,day:t.day,night:t.night,currentDate:e.currentWeather.LocalObservationDateTime,currentWeatherText:e.currentWeather.WeatherText,background:c.background2,color:c.color},a)})),Object(L.jsxs)("div",{children:[Object(L.jsx)(W,{header:e.header,quote:e.quote}),e.data.length>0?Object(L.jsx)("div",{className:j.a.weeksBlock,children:z}):Object(L.jsx)("div",{className:j.a.block,style:{color:"".concat(c.color)},children:Object(L.jsx)("p",{children:"There are no saved locations in your list."})})]})},J={currentWeather:[{LocalObservationDateTime:"2021-07-23T13:31:00+03:00",EpochTime:1627036260,WeatherText:"Clouds and sun",WeatherIcon:4,HasPrecipitation:!1,PrecipitationType:null,IsDayTime:!0,Temperature:{Metric:{Value:30.6,Unit:"C",UnitType:17},Imperial:{Value:87,Unit:"F",UnitType:18}},MobileLink:"http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"}],weatherOn5Days:{Headline:{EffectiveDate:"2021-07-24T08:00:00+03:00",EffectiveEpochDate:1627102800,Severity:4,Text:"Pleasant this weekend",Category:"mild",EndDate:null,EndEpochDate:null,MobileLink:"http://www.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"},DailyForecasts:[{Date:"2021-07-23T07:00:00+03:00",EpochDate:1627012800,Temperature:{Minimum:{Value:75,Unit:"F",UnitType:18},Maximum:{Value:82,Unit:"F",UnitType:18}},Day:{Icon:3,IconPhrase:"Partly sunny",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Light"},Night:{Icon:36,IconPhrase:"Intermittent clouds",HasPrecipitation:!1},Sources:["AccuWeather"],MobileLink:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"},{Date:"2021-07-24T07:00:00+03:00",EpochDate:1627012800,Temperature:{Minimum:{Value:85,Unit:"F",UnitType:18},Maximum:{Value:97,Unit:"F",UnitType:18}},Day:{Icon:3,IconPhrase:"Partly sunny",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Light"},Night:{Icon:36,IconPhrase:"Intermittent clouds",HasPrecipitation:!1},Sources:["AccuWeather"],MobileLink:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"},{Date:"2021-07-25T07:00:00+03:00",EpochDate:1627012800,Temperature:{Minimum:{Value:55,Unit:"F",UnitType:18},Maximum:{Value:107,Unit:"F",UnitType:18}},Day:{Icon:3,IconPhrase:"Partly sunny",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Light"},Night:{Icon:36,IconPhrase:"Intermittent clouds",HasPrecipitation:!1},Sources:["AccuWeather"],MobileLink:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"},{Date:"2021-07-26T07:00:00+03:00",EpochDate:1627012800,Temperature:{Minimum:{Value:85,Unit:"F",UnitType:18},Maximum:{Value:87,Unit:"F",UnitType:18}},Day:{Icon:3,IconPhrase:"Partly sunny",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Light"},Night:{Icon:36,IconPhrase:"Intermittent clouds",HasPrecipitation:!1},Sources:["AccuWeather"],MobileLink:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"},{Date:"2021-07-27T07:00:00+03:00",EpochDate:1627012800,Temperature:{Minimum:{Value:85,Unit:"F",UnitType:18},Maximum:{Value:87,Unit:"F",UnitType:18}},Day:{Icon:3,IconPhrase:"Partly sunny",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Light"},Night:{Icon:36,IconPhrase:"Intermittent clouds",HasPrecipitation:!1},Sources:["AccuWeather"],MobileLink:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"}]}};var Y=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),i=Object(h.a)(r,2),o=i[0],s=i[1],d=Object(n.useState)(!1),j=Object(h.a)(d,2),b=j[0],p=(j[1],Object(w.b)(),Object(w.c)((function(e){return e.locationState.location}))),m=Object(w.c)((function(e){return e.weatherState.currentWeather})),O=Object(w.c)((function(e){return e.weatherState.weatherOn5Days}));Object(n.useEffect)((function(){var e=p.Key;y(e),f(e)}),[p]);var y=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){v(m)}),[m]);var v=function(e){Object.keys(e).length>0&&s(e[0])},f=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){x(O)}),[O]);var x=function(e){var t=[],a=[],n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];if(Object.keys(e).length>0){for(var r=function(c){var r=new Date(e.DailyForecasts[c].Date).toDateString().substring(0,3),i="";n.map((function(e,t){return e.includes(r)&&(i=e),i})),a[c]={dayOfWeek:i,date:e.DailyForecasts[c].Date,minTempF:e.DailyForecasts[c].Temperature.Minimum.Value,maxTempF:e.DailyForecasts[c].Temperature.Maximum.Value,minTempC:Math.round(5/9*(e.DailyForecasts[c].Temperature.Minimum.Value-32)),maxTempC:Math.round(5/9*(e.DailyForecasts[c].Temperature.Maximum.Value-32)),day:e.DailyForecasts[c].Day.IconPhrase,night:e.DailyForecasts[c].Night.IconPhrase},t.push(a[c])},i=0;i<e.DailyForecasts.length;i++)r(i);c(t)}};return Object(L.jsxs)("div",{children:[Object(L.jsx)(Z,{header:p.LocalizedName,quote:"Be the first to know the weather and be in trend!",data:a,currentWeather:o}),Object(L.jsx)(C,{show:b,title:"Something went wrong!",message:"Please reload the page or try again later."})]})},G=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(w.c)((function(e){return e.favoritesLocationsState.favoriteLocation})),i=Object(w.c)((function(e){return e.weatherState.currentWeather}));Object(n.useEffect)((function(){o(r)}),[r]);var o=function(e){var t=[],a={};if(Object.keys(e).length>0)for(var n=0;n<e.length;n++)a={tempC:i[0].Temperature.Metric.Value,tempF:i[0].Temperature.Imperial.Value,weatherText:i[0].WeatherText,city:e[n].LocalizedName},t.push(a);c(t)};return Object(L.jsx)("div",{children:Object(L.jsx)(Z,{header:"favorite",quote:"Traveling we get to know not only the world, but also ourselves",data:a})})},Q=a(25),X=a.n(Q),$=a.p+"static/media/logo.1087f8ae.png",ee={favoriteLocation:[]},te=function(e){return{type:N,payload:e}};var ae=window.localStorage,ne=function(){var e=Object(w.b)(),t=Object(w.c)((function(e){return e.themeStates.theme})),a=Object(w.c)((function(e){return e.themeStates.page})),c=Object(w.c)((function(e){return e.locationState.location})),r=Object(w.c)((function(e){return e.favoritesLocationsState.favoriteLocation})),i=Object(n.useState)(!1),o=Object(h.a)(i,2),s=o[0],l=o[1],u=Object(n.useState)(0),d=Object(h.a)(u,2),j=d[0],b=d[1],p=Object(n.useState)(!1),m=Object(h.a)(p,2),O=m[0],y=m[1];Object(n.useEffect)((function(){b(window.innerWidth),e(q(window.location.pathname))}),[e]);var v=function(t){e(q(t))};Object(n.useEffect)((function(){for(var e=0;e<r.length;e++)r[e].Key===c.Key?l(!0):l(!1)}),[c,r]);return Object(L.jsxs)("div",{className:X.a.navBlock,children:[Object(L.jsx)(C,{show:O,title:"Added successfully!",message:'You have added this city:" '.concat(c.LocalizedName,'" to your favorites')}),Object(L.jsxs)("div",{className:X.a.container,children:[Object(L.jsx)("div",{children:Object(L.jsx)("img",{src:$,alt:"logo",className:X.a.images})}),Object(L.jsxs)("div",{children:[Object(L.jsx)(B.b,{to:"/",exact:!0,activeStyle:{fontWeight:"bold",borderBottom:"3px solid white"},className:X.a.NavLink,onClick:function(){v("/")},children:"Home"}),Object(L.jsx)(B.b,{to:"/favorite",activeStyle:{fontWeight:"bold",borderBottom:"3px solid white"},className:X.a.NavLink,onClick:function(){v("/favorite")},children:"Favorite"})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)(x.a,{variant:"outline-light",className:X.a.btn,onClick:function(){"light"===t?(e(R("dark")),ae.setItem("localTheme","dark")):(e(R("light")),ae.setItem("localTheme","light"))},children:Object(L.jsx)(V.a,{icon:"light"===t?A.c:A.b})}),"/"===a?s?Object(L.jsxs)(x.a,{variant:"outline-light",className:X.a.btnSave,onClick:function(){for(var t=0;t<r.length;t++)if(r[t].Key===c.Key){var a=r.indexOf(c);r.splice(a,1),e(te(r)),l(!1)}},children:[j<=420?"":"added ",Object(L.jsx)(V.a,{icon:A.a})]}):Object(L.jsxs)(x.a,{variant:"outline-light",className:X.a.btn,onClick:function(){for(var t=[],a=0;a<r.length;a++)t.push(r[a]);t.includes(c)||(t.push(c),e(te(t)),l(!0),y(!0))},children:[j<=420?"":"add to ",Object(L.jsx)(V.a,{icon:A.a})]}):null]})]})]})};var ce=function(){var e=Object(w.c)((function(e){return e.themeStates.theme}));return Object(L.jsxs)("div",{className:"App",style:{backgroundColor:"".concat("light"===e?"#F5F5F5":"#272E38")},children:[Object(L.jsx)(ne,{className:"Navbar"}),Object(L.jsxs)(o.d,{children:[Object(L.jsx)(o.b,{path:"/",exact:!0,component:Y}),Object(L.jsx)(o.b,{path:"/favorite",component:G}),Object(L.jsx)(o.a,{exact:!0,from:"*",to:"/"})]})]})},re=a(28),ie=a(59),oe=a(60),se=Object(re.combineReducers)({themeStates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(g.a)(Object(g.a)({},e),{},{theme:t.payload});case k:return Object(g.a)(Object(g.a)({},e),{},{page:t.payload});default:return e}},weatherState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(g.a)(Object(g.a)({},e),{},{currentWeather:t.payload});case S:return Object(g.a)(Object(g.a)({},e),{},{weatherOn5Days:t.payload});default:return e}},locationState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(g.a)(Object(g.a)({},e),{},{location:t.payload});default:return e}},favoritesLocationsState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(g.a)(Object(g.a)({},e),{},{favoriteLocation:t.payload});default:return e}}}),le=Object(re.createStore)(se,Object(ie.composeWithDevTools)(Object(re.applyMiddleware)(oe.a)));i.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(B.a,{children:Object(L.jsx)(w.a,{store:le,children:Object(L.jsx)(ce,{})})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.049c8f4e.chunk.js.map