(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7ee9733d"],{"0046":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"my-card",class:t.$store.getters.isDark?"bg-grey-9":"bg-grey-2",attrs:{dark:t.$store.getters.isDark}},[a("div",{staticClass:"q-pa-md"},[a("q-carousel",{attrs:{animated:"",arrows:"",navigation:"",infinite:""},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("q-carousel-slide",{attrs:{name:1,"img-src":"statics/river/bg-gallery-1.jpg"}}),a("q-carousel-slide",{attrs:{name:2,"img-src":"statics/river/bg-gallery-2.jpg"}})],1)],1),a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("mainMenu.riverRoom")))]),a("div",{staticClass:"text-subtitle2",staticStyle:{"padding-bottom":"5%"}},[t._v(t._s(t.$t("cards.riverText"))+"\n        ")]),a("div",{staticClass:"column items-center text-center"},[a("q-splitter",{staticStyle:{width:"100%"},scopedSlots:t._u([{key:"before",fn:function(){return[a("q-tabs",{style:t.$store.getters.isDark?"color: white":"color: teal",attrs:{vertical:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"one",icon:"today",label:t.$t("cards.labelFeeSchedule")}}),a("q-tab",{attrs:{name:"alarms",icon:"monetization_on",label:t.$t("cards.labelFeeIncludes")}}),a("q-tab",{attrs:{name:"movies",icon:"people_alt",label:t.$t("cards.labelCapacity")}})],1)]},proxy:!0},{key:"after",fn:function(){return[a("q-tab-panels",{attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{style:t.$store.getters.isDark?"background: #666666":"background: white",attrs:{name:"one"}},[a("div",{staticClass:"column items-center text-center"},[a("div",{staticClass:"row justify-around",staticStyle:{"padding-bottom":"2%"}},[a("div",{staticClass:"text-h6 col-5",staticStyle:{"margin-left":"-19%"}},[t._v(t._s(t.$t("cards.weekDaySchedule")))]),a("div",{staticClass:"text-h6 col-5",staticStyle:{"margin-right":"-19%"}},[t._v(t._s(t.$t("cards.weekEndSchedule")))])])]),a("div",{staticClass:"row justify-around"},[a("div",{staticClass:"<column items-center text-center"},[a("div",{staticClass:"col-3",staticStyle:{"padding-bottom":"5%"}},[a("strong",[t._v(t._s(t.$t("cards.halfDayRental")))]),a("br"),t._v("\n          "+t._s(t.$t("cards.fourHours"))),a("br"),t._v("\n           $525"),a("br"),t._v("\n           "+t._s(t.$t("cards.additionalHour"))+": $50.00"),a("br")]),a("div",{staticClass:"col-3",staticStyle:{"padding-top":"5%"}},[a("strong",[t._v(t._s(t.$t("cards.fullDayRental")))]),a("br"),t._v("\n          ("+t._s(t.$t("cards.eightHours"))+")"),a("br"),t._v("\n           $750"),a("br"),t._v("\n           "+t._s(t.$t("cards.additionalHour"))+": $50.00"),a("br")])]),a("div",{staticClass:"<column items-center text-center"},[a("div",{staticClass:"col-3",staticStyle:{"padding-bottom":"5%"}},[a("strong",[t._v(t._s(t.$t("cards.halfDayRental")))]),a("br"),t._v("\n          ("+t._s(t.$t("cards.fourHours"))+")"),a("br"),t._v("\n           $175"),a("br"),t._v("\n           "+t._s(t.$t("cards.additionalHour"))+": $50.00"),a("br")]),a("div",{staticClass:"col-3",staticStyle:{"padding-top":"5%"}},[a("strong",[t._v(t._s(t.$t("cards.fullDayRental")))]),a("br"),t._v("\n          ("+t._s(t.$t("cards.eightHours"))+")"),a("br"),t._v("\n           $250"),a("br"),t._v("\n           "+t._s(t.$t("cards.additionalHour"))+": $50.00"),a("br")])])])]),a("q-tab-panel",{staticStyle:{height:"220px"},style:t.$store.getters.isDark?"background: #666666":"background: white",attrs:{name:"alarms"}},[a("div",{staticClass:"text-h4 q-mb-md"},[t._v(t._s(t.$t("cards.labelFeeIncludes")))]),t._v("\n          "+t._s(t.$t("cards.riverFeeIncludesOne"))),a("br"),t._v("\n          "+t._s(t.$t("cards.riverFeeIncludesTwo"))),a("br"),t._v("\n          "+t._s(t.$t("cards.riverFeeIncludesThree"))),a("br"),t._v("\n          "+t._s(t.$t("cards.riverFeeIncludesFour"))),a("br"),t._v("\n          "+t._s(t.$t("cards.riverFeeIncludesFive"))),a("br"),t._v("\n          "+t._s(t.$t("cards.riverFeeIncludesSix"))),a("br")]),a("q-tab-panel",{staticStyle:{height:"220px"},style:t.$store.getters.isDark?"background: #666666":"background: white",attrs:{name:"movies"}},[a("div",{staticClass:"text-h4 q-mb-md"},[t._v(t._s(t.$t("cards.labelCapacity")))]),t._v("\n          "+t._s(t.$t("cards.oakCapacityStanding"))+" "),a("strong",[t._v("500")]),a("br"),t._v("\n          "+t._s(t.$t("cards.oakCapacitySeated"))+" "),a("strong",[t._v("280")]),a("br")]),a("q-tab-panel",{staticStyle:{height:"220px"},style:t.$store.getters.isDark?"background: #666666":"background: white",attrs:{name:"package"}},[a("div",{staticClass:"text-h4 q-mb-md"},[t._v(t._s(t.$t("cards.labelEnhancedPackage")))]),t._v("\n          "+t._s(t.$t("cards.oakEnhancedPackageOne"))),a("br"),t._v("\n          "+t._s(t.$t("cards.oakEnhancedPackageTwo"))),a("br"),t._v("\n          "+t._s(t.$t("cards.oakEnhancedPackageThree"))+"\n      ")])],1)]},proxy:!0}]),model:{value:t.splitterModel,callback:function(e){t.splitterModel=e},expression:"splitterModel"}})],1)])],1)},r=[],n={data:function(){return{slide:1,tab:"one",splitterModel:20}}},i=n,c=(a("f845"),a("2877")),l=a("fe09"),o=Object(c["a"])(i,s,r,!1,null,null,null);e["a"]=o.exports;o.options.components=Object.assign({QCard:l["d"],QCarousel:l["g"],QCarouselSlide:l["i"],QCardSection:l["f"],QSplitter:l["z"],QTabs:l["D"],QTab:l["A"],QTabPanels:l["C"],QTabPanel:l["B"]},o.options.components||{})},"044e":function(t,e,a){"use strict";var s=a("b4b7"),r=a.n(s);r.a},"08e7":function(t,e,a){},"5ca4":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"my-mobile-card",class:t.$store.getters.isDark?"bg-grey-9":"bg-grey-2",attrs:{dark:t.$store.getters.isDark}},[a("div",{staticClass:"q-pa-md"},[a("q-carousel",{attrs:{animated:"",arrows:"",navigation:"",infinite:""},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("q-carousel-slide",{attrs:{name:1,"img-src":"statics/river/bg-gallery-1.jpg"}}),a("q-carousel-slide",{attrs:{name:2,"img-src":"statics/river/bg-gallery-2.jpg"}})],1)],1),a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("mainMenu.riverRoom")))])]),a("q-tabs",{style:t.$store.getters.isDark?"color: white":"color:teal",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{label:t.$t("cards.labelOverview"),name:"one"}}),a("q-tab",{attrs:{label:t.$t("cards.labelFeeSchedule"),name:"two"}}),a("q-tab",{attrs:{label:t.$t("cards.labelFeeIncludes"),name:"four"}}),a("q-tab",{attrs:{label:t.$t("cards.labelCapacity"),name:"five"}})],1),a("q-separator"),a("q-tab-panels",{style:t.$store.getters.isDark?"background: #666666":"background: white",attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"one"}},[t._v("\n          "+t._s(t.$t("cards.riverText"))+"\n        ")]),a("q-tab-panel",{attrs:{name:"two"}},[a("div",{staticClass:"row justify-around"},[a("div",{staticClass:"<column items-center text-center"},[a("div",{staticClass:"col-3",staticStyle:{"padding-bottom":"5%"}},[a("strong",[t._v(t._s(t.$t("cards.weekDaySchedule")))]),a("br"),a("br"),a("strong",[t._v(t._s(t.$t("cards.halfDayRental")))]),a("br"),t._v("\n              ("+t._s(t.$t("cards.fourHours"))+")"),a("br"),t._v("\n            $525"),a("br"),t._v("\n            "+t._s(t.$t("cards.additionalHour"))+": $50.00"),a("br")]),a("div",{staticClass:"col-3",staticStyle:{"padding-top":"5%"}},[a("strong",[t._v(t._s(t.$t("cards.fullDayRental")))]),a("br"),t._v("\n              ("+t._s(t.$t("cards.eightHours"))+")"),a("br"),t._v("\n            $750"),a("br"),t._v("\n            "+t._s(t.$t("cards.additionalHour"))+": $50.00"),a("br"),a("br")])]),a("div",{staticClass:"<column items-center text-center"},[a("div",{staticClass:"col-3",staticStyle:{"padding-bottom":"5%"}},[a("strong",[t._v(t._s(t.$t("cards.weekEndSchedule")))]),a("br"),a("br"),a("strong",[t._v(t._s(t.$t("cards.halfDayRental")))]),a("br"),t._v("\n              ("+t._s(t.$t("cards.fourHours"))+")"),a("br"),t._v("\n              $175"),a("br"),t._v("\n              "+t._s(t.$t("cards.additionalHour"))+": $50.00"),a("br")]),a("div",{staticClass:"col-3",staticStyle:{"padding-top":"5%"}},[a("strong",[t._v(t._s(t.$t("cards.fullDayRental")))]),a("br"),t._v("\n              ("+t._s(t.$t("cards.eightHours"))+")"),a("br"),t._v("\n              $250"),a("br"),t._v("\n              "+t._s(t.$t("cards.additionalHour"))+": $50.00"),a("br")])])])]),a("q-tab-panel",{attrs:{name:"four"}},[t._v("\n          "+t._s(t.$t("cards.riverFeeIncludesOne"))),a("br"),t._v("\n          "+t._s(t.$t("cards.riverFeeIncludesTwo"))),a("br"),t._v("\n          "+t._s(t.$t("cards.riverFeeIncludesThree"))),a("br"),t._v("\n          "+t._s(t.$t("cards.riverFeeIncludesFour"))),a("br"),t._v("\n          "+t._s(t.$t("cards.riverFeeIncludesFive"))),a("br"),t._v("\n          "+t._s(t.$t("cards.riverFeeIncludesSix"))),a("br")]),a("q-tab-panel",{attrs:{name:"five"}},[t._v("\n          "+t._s(t.$t("cards.riverCapacityStanding"))),a("strong",[t._v("500")]),a("br"),t._v("\n          "+t._s(t.$t("cards.riverCapacitySeated"))),a("strong",[t._v("280")]),a("br")]),a("q-tab-panel",{attrs:{name:"three"}},[t._v("\n          "+t._s(t.$t("cards.oakEnhancedPackageOne"))),a("br"),t._v("\n          "+t._s(t.$t("cards.oakEnhancedPackageTwo"))),a("br"),t._v("\n          "+t._s(t.$t("cards.oakEnhancedPackageThree"))+"\n        ")])],1)],1)},r=[],n=a("b06b"),i={data:function(){return{slide:1,tab:"one"}},methods:{oakRoomVr:function(){Object(n["a"])("https://www.statesborowebdesigns.com/#natural_resources_building,240.0,5.0,70.0,4.0")}}},c=i,l=(a("e49e"),a("2877")),o=a("fe09"),d=Object(l["a"])(c,s,r,!1,null,null,null);e["a"]=d.exports;d.options.components=Object.assign({QCard:o["d"],QCarousel:o["g"],QCarouselSlide:o["i"],QCardSection:o["f"],QCardActions:o["e"],QBtn:o["a"],QTabs:o["D"],QTab:o["A"],QSeparator:o["x"],QTabPanels:o["C"],QTabPanel:o["B"],QPage:o["t"]},d.options.components||{})},b4b7:function(t,e,a){},b59a:function(t,e,a){},d62f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("q-btn",{style:t.$store.getters.isDark?"color: white":"color: #1e1e1e",attrs:{to:"/",icon:"chevron_left",label:t.$t("mainMenu.back"),flat:""}}),a("h5",{staticStyle:{"font-weight":"bold"},style:t.$store.getters.isDark?"color: white":"color: #1e1e1e"},[t._v(t._s(t.$t("carousel.riverText"))+"\n      ")]),t.$q.platform.is.desktop?a("div",{staticClass:"column items-center"},[a("river-desktop-card")],1):t._e(),t.$q.platform.is.mobile?a("div",{staticClass:"column items-center"},[a("river-card")],1):t._e(),a("div",{staticClass:"text-center",staticStyle:{"padding-top":"5%"}},[a("div",{staticClass:"text-h5",style:t.$store.getters.isDark?"color: white":"color: black"},[t._v("venues.ogeecheetech.edu")]),a("div",{staticClass:"text-h5",style:t.$store.getters.isDark?"color: white":"color: black"},[t._v("912.871.8544 | venues@ogecheetech.edu")]),a("div",{staticClass:"text-h7 text-italic",style:t.$store.getters.isDark?"color: white":"color: black"},[t._v("Equal Opportunity Institution | A Unit of the Technical College System of Georgia")])])],1)},r=[],n=(a("b06b"),a("5ca4")),i=a("0046"),c={components:{RiverCard:n["a"],RiverDesktopCard:i["a"]},data:function(){return{slide:1,tab:"one",splitterModel:15}}},l=c,o=(a("044e"),a("2877")),d=a("fe09"),b=Object(o["a"])(l,s,r,!1,null,null,null);e["default"]=b.exports;b.options.components=Object.assign({QPage:d["t"],QBtn:d["a"]},b.options.components||{})},e49e:function(t,e,a){"use strict";var s=a("08e7"),r=a.n(s);r.a},f845:function(t,e,a){"use strict";var s=a("b59a"),r=a.n(s);r.a}}]);