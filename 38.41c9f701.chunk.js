(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"Bo+7":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=a("rwOc"))&&n.__esModule?n:{default:n};var r={ordinalNumber:function(e,t){var a=Number(e),n=a%100;return n<10&&n%10==1?a+"֊ին":a+"֊րդ"},era:(0,i.default)({values:{narrow:["Ք","Մ"],abbreviated:["ՔԱ","ՄԹ"],wide:["Քրիստոսից առաջ","Մեր թվարկության"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Ք1","Ք2","Ք3","Ք4"],wide:["1֊ին քառորդ","2֊րդ քառորդ","3֊րդ քառորդ","4֊րդ քառորդ"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["Հ","Փ","Մ","Ա","Մ","Հ","Հ","Օ","Ս","Հ","Ն","Դ"],abbreviated:["հուն","փետ","մար","ապր","մայ","հուն","հուլ","օգս","սեպ","հոկ","նոյ","դեկ"],wide:["հունվար","փետրվար","մարտ","ապրիլ","մայիս","հունիս","հուլիս","օգոստոս","սեպտեմբեր","հոկտեմբեր","նոյեմբեր","դեկտեմբեր"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["Կ","Ե","Ե","Չ","Հ","Ո","Շ"],short:["կր","եր","եք","չք","հգ","ուր","շբ"],abbreviated:["կիր","երկ","երք","չոր","հնգ","ուրբ","շաբ"],wide:["կիրակի","երկուշաբթի","երեքշաբթի","չորեքշաբթի","հինգշաբթի","ուրբաթ","շաբաթ"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"կեսգշ",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"},abbreviated:{am:"AM",pm:"PM",midnight:"կեսգիշեր",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"},wide:{am:"a.m.",pm:"p.m.",midnight:"կեսգիշեր",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"կեսգշ",noon:"կեսօր",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"},abbreviated:{am:"AM",pm:"PM",midnight:"կեսգիշերին",noon:"կեսօրին",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"},wide:{am:"a.m.",pm:"p.m.",midnight:"կեսգիշերին",noon:"կեսօրին",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},HyFC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}},e.exports=t.default},UnkA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var i;a=a||{},i="string"==typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t);if(a.addSuffix)return a.comparison>0?i+" հետո":i+" առաջ";return i};var n={lessThanXSeconds:{one:"ավելի քիչ քան 1 վայրկյան",other:"ավելի քիչ քան {{count}} վայրկյան"},xSeconds:{one:"1 վայրկյան",other:"{{count}} վայրկյան"},halfAMinute:"կես րոպե",lessThanXMinutes:{one:"ավելի քիչ քան 1 րոպե",other:"ավելի քիչ քան {{count}} րոպե"},xMinutes:{one:"1 րոպե",other:"{{count}} րոպե"},aboutXHours:{one:"մոտ 1 ժամ",other:"մոտ {{count}} ժամ"},xHours:{one:"1 ժամ",other:"{{count}} ժամ"},xDays:{one:"1 օր",other:"{{count}} օր"},aboutXMonths:{one:"մոտ 1 ամիս",other:"մոտ {{count}} ամիս"},xMonths:{one:"1 ամիս",other:"{{count}} ամիս"},aboutXYears:{one:"մոտ 1 տարի",other:"մոտ {{count}} տարի"},xYears:{one:"1 տարի",other:"{{count}} տարի"},overXYears:{one:"ավելի քան 1 տարի",other:"ավելի քան {{count}} տարի"},almostXYears:{one:"համարյա 1 տարի",other:"համարյա {{count}} տարի"}};e.exports=t.default},dAMG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,i){return n[e]};var n={lastWeek:"'նախորդ' eeee p'֊ին'",yesterday:"'երեկ' p'֊ին'",today:"'այսօր' p'֊ին'",tomorrow:"'վաղը' p'֊ին'",nextWeek:"'հաջորդ' eeee p'֊ին'",other:"P"};e.exports=t.default},"l/cH":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=a("HyFC"))&&n.__esModule?n:{default:n};var r={date:(0,i.default)({formats:{full:"d MMMM, y, EEEE",long:"d MMMM, y",medium:"d MMM, y",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'ժ․'{{time}}",long:"{{date}} 'ժ․'{{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},loZk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n=String(t),i=a||{},r=n.match(e.matchPattern);if(!r)return null;var o=r[0],u=n.match(e.parsePattern);if(!u)return null;var d=e.valueCallback?e.valueCallback(u[0]):u[0];return{value:d=i.valueCallback?i.valueCallback(d):d,rest:n.slice(o.length)}}},e.exports=t.default},netp:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a("UnkA")),i=d(a("l/cH")),r=d(a("dAMG")),o=d(a("Bo+7")),u=d(a("vYLf"));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"hy",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:o.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=l,e.exports=t.default},rwOc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):r;n=e.formattingValues[o]||e.formattingValues[r]}else{var u=e.defaultWidth,d=i.width?String(i.width):e.defaultWidth;n=e.values[d]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},sCib:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n=String(t),i=a||{},r=i.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],u=n.match(o);if(!u)return null;var d,l=u[0],f=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(f)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(f,(function(e){return e.test(n)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(f,(function(e){return e.test(n)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=i.valueCallback?i.valueCallback(d):d,rest:n.slice(l.length)}}},e.exports=t.default},vYLf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("loZk")),i=r(a("sCib"));function r(e){return e&&e.__esModule?e:{default:e}}var o={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)((-|֊)?(ին|րդ))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(Ք|Մ)/i,abbreviated:/^(Ք\.?\s?Ա\.?|Մ\.?\s?Թ\.?\s?Ա\.?|Մ\.?\s?Թ\.?|Ք\.?\s?Հ\.?)/i,wide:/^(քրիստոսից առաջ|մեր թվարկությունից առաջ|մեր թվարկության|քրիստոսից հետո)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(ք|մ)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ք[1234]/i,wide:/^[1234]((-|֊)?(ին|րդ)) քառորդ/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[հփմաօսնդ]/i,abbreviated:/^(հուն|փետ|մար|ապր|մայ|հուն|հուլ|օգս|սեպ|հոկ|նոյ|դեկ)/i,wide:/^(հունվար|փետրվար|մարտ|ապրիլ|մայիս|հունիս|հուլիս|օգոստոս|սեպտեմբեր|հոկտեմբեր|նոյեմբեր|դեկտեմբեր)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^հ/i,/^փ/i,/^մ/i,/^ա/i,/^մ/i,/^հ/i,/^հ/i,/^օ/i,/^ս/i,/^հ/i,/^ն/i,/^դ/i],any:[/^հու/i,/^փ/i,/^մար/i,/^ա/i,/^մայ/i,/^հուն/i,/^հուլ/i,/^օ/i,/^ս/i,/^հոկ/i,/^ն/i,/^դ/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[եչհոշկ]/i,short:/^(կր|եր|եք|չք|հգ|ուր|շբ)/i,abbreviated:/^(կիր|երկ|երք|չոր|հնգ|ուրբ|շաբ)/i,wide:/^(կիրակի|երկուշաբթի|երեքշաբթի|չորեքշաբթի|հինգշաբթի|ուրբաթ|շաբաթ)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^կ/i,/^ե/i,/^ե/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i],short:[/^կ/i,/^եր/i,/^եք/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i],abbreviated:[/^կ/i,/^երկ/i,/^երք/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i],wide:[/^կ/i,/^երկ/i,/^երե/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^([ap]|կեսգշ|կեսօր|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i,any:/^([ap]\.?\s?m\.?|կեսգիշեր(ին)?|կեսօր(ին)?|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/կեսգիշեր/i,noon:/կեսօր/i,morning:/առավոտ/i,afternoon:/ցերեկ/i,evening:/երեկո/i,night:/գիշեր/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default}}]);
//# sourceMappingURL=38.41c9f701.chunk.js.map