(this.webpackJsonpcovid19_visualization_react=this.webpackJsonpcovid19_visualization_react||[]).push([[0],{127:function(t,e,a){t.exports=a(242)},132:function(t,e,a){},241:function(t,e,a){},242:function(t,e,a){"use strict";a.r(e);var n=a(2),u=a.n(n),i=a(15),l=a.n(i),o=(a(132),a(43)),r=a(27),d=a(105),c=a(31),m=a(58),s=a.n(m),g={headers:{"content-type":"application/octet-stream","x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"78f0398aa4msh86be5ac1359b0f1p1838a7jsnad282c6e4e48"}},y={headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor-v2.p.rapidapi.com","x-rapidapi-key":"78f0398aa4msh86be5ac1359b0f1p1838a7jsnad282c6e4e48"}},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/worldstat.php",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y;return{get:function(){return s.a.get(t,e)}}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://covid-193.p.rapidapi.com/statistics",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g;return{get:function(){return s.a.get(t,e)},fetch:function(){return s.a.get("https:/g2.antv.vision/en/examples/data/world.geo.json")}}},f="FETCH",v={totalFigure:[]},b="FECTHDVDATA",E="GET",C={geoData:[],allCountryData:[]},S=Object(r.c)({TotalStats:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return Object(c.a)({},t,{totalFigure:e.payload});default:return t}},CountryStats:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(c.a)({},t,{geoData:e.payload});case E:return Object(c.a)({},t,{allCountryData:e.payload});default:return t}}}),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,D=Object(r.e)(S,N(Object(r.a)(d.a))),M=a(12),T=a(124),I=a(5),G=a.n(I),F=function(t){var e=t.subtitle,a=t.title,n=t.className,i=Object(T.a)(t,["subtitle","title","className"]),l=G()(n,"text-center","text-md-center","mb-sm-0");return u.a.createElement(M.e,Object.assign({xs:"12",sm:"12",className:l},i),u.a.createElement("span",{className:"text-uppercase page-subtitle"},e),u.a.createElement("h3",{className:"page-title"},a))},A=a(54),R=a(116),B=a.n(R),x=!0,w=function(t){if(x){var e=new A.a({container:"container",autoFit:!0,height:500,padding:[0,20,40]});e.scale({x:{sync:!0},y:{sync:!0}}),e.coordinate("rect").reflect("y"),e.legend(!1),e.axis(!1),e.tooltip({showTitle:!1,shared:!0,showMarkers:!1,containerTpl:'<div class="g2-tooltip"><table class="g2-tooltip-list"></table></div>',itemTpl:'<tr data-index="{index}"><td style="padding:5px;background-color:#852323; color:#fff;">{name}</td><td style="padding:5px;background-color:#fff;color:#000;">{value}</td></tr>',domStyles:{"g2-tooltip":{borderRadius:"2px",backgroundColor:"#DDDDDD",padding:0,border:"1px solid #333"}}});var a=new B.a,n=a.createView("back").source(t.geoData,{type:"GeoJSON"}).transform({type:"geo.projection",projection:"geoMercator",as:["x","y","centroidX","centroidY"]}),i=e.createView();i.data(n.rows),i.tooltip(!1),i.polygon().position("x*y").style({fill:"#DDDDDD",stroke:"#b1b1b1",lineWidth:.5,fillOpacity:.85});var l=a.createView().source(t.countryData);l.transform({type:"map",callback:function(t){var e=n.geoProjectPosition([1*t.longitude,1*t.latitude],"geoMercator");return t.x=e[0],t.y=e[1],t.deaths=1*t.totalDeaths,t.magnitude=1*t.totalCases,t}});var o=e.createView();o.data(l.rows),o.point().position("x*y").size("magnitude",[2,30]).shape("circle").color("#FF2F29").tooltip("country*active*recovered*critical*total*totalCases").style({fillOpacity:.45}).state({active:{style:{lineWidth:1,stroke:"#FF2F29"}}}),o.interaction("element-active"),e.render(),x=!1}return u.a.createElement(u.a.Fragment,null)},O=function(t){return u.a.createElement(u.a.Fragment,null,u.a.createElement(M.b,{small:!0,className:"h-100"},u.a.createElement(M.d,{className:"border-bottom"},u.a.createElement("h6",{className:"m-0 text-center text-uppercase"},t.title)),u.a.createElement(M.c,{className:"pt-0"},t.geoData.type&&t.countryData.length>0&&u.a.createElement(w,{countryData:t.countryData,geoData:t.geoData}),u.a.createElement("div",{id:"container"}))))},k=function(t){return[{name:"AF",latitude:"33.93911",longitude:"67.709953",country:"Afghanistan"},{name:"AL",latitude:"41.153332",longitude:"20.168331",country:"Albania"},{name:"DZ",latitude:"28.033886",longitude:"1.659626",country:"Algeria"},{name:"AS",latitude:"-14.270972",longitude:"-170.132217",country:"American Samoa"},{name:"AD",latitude:"42.546245",longitude:"1.601554",country:"Andorra"},{name:"AO",latitude:"-11.202692",longitude:"17.873887",country:"Angola"},{name:"AI",latitude:"18.220554",longitude:"-63.068615",country:"Anguilla"},{name:"AQ",latitude:"-75.250973",longitude:"-0.071389",country:"Antarctica"},{name:"AG",latitude:"17.060816",longitude:"-61.796428",country:"Antigua and Barbuda"},{name:"AR",latitude:"-38.416097",longitude:"-63.616672",country:"Argentina"},{name:"AM",latitude:"40.069099",longitude:"45.038189",country:"Armenia"},{name:"AW",latitude:"12.52111",longitude:"-69.968338",country:"Aruba"},{name:"AU",latitude:"-25.274398",longitude:"133.775136",country:"Australia"},{name:"AT",latitude:"47.516231",longitude:"14.550072",country:"Austria"},{name:"AZ",latitude:"40.143105",longitude:"47.576927",country:"Azerbaijan"},{name:"BS",latitude:"25.03428",longitude:"-77.39628",country:"Bahamas"},{name:"BH",latitude:"25.930414",longitude:"50.637772",country:"Bahrain"},{name:"BD",latitude:"23.684994",longitude:"90.356331",country:"Bangladesh"},{name:"BB",latitude:"13.193887",longitude:"-59.543198",country:"Barbados"},{name:"BY",latitude:"53.709807",longitude:"27.953389",country:"Belarus"},{name:"BE",latitude:"50.503887",longitude:"4.469936",country:"Belgium"},{name:"BZ",latitude:"17.189877",longitude:"-88.49765",country:"Belize"},{name:"BJ",latitude:"9.30769",longitude:"2.315834",country:"Benin"},{name:"BM",latitude:"32.321384",longitude:"-64.75737",country:"Bermuda"},{name:"BT",latitude:"27.514162",longitude:"90.433601",country:"Bhutan"},{name:"BO",latitude:"-16.290154",longitude:"-63.588653",country:"Bolivia"},{name:"BA",latitude:"43.915886",longitude:"17.679076",country:"Bosnia and Herzegovina"},{name:"BW",latitude:"-22.328474",longitude:"24.684866",country:"Botswana"},{name:"BV",latitude:"-54.423199",longitude:"3.413194",country:"Bouvet Island"},{name:"BR",latitude:"-14.235004",longitude:"-51.92528",country:"Brazil"},{name:"IO",latitude:"-6.343194",longitude:"71.876519",country:"BritishIndianOceanTerritory"},{name:"BN",latitude:"4.535277",longitude:"114.727669",country:"Brunei"},{name:"BG",latitude:"42.733883",longitude:"25.48583",country:"Bulgaria"},{name:"BF",latitude:"12.238333",longitude:"-1.561593",country:"Burkina-Faso"},{name:"BI",latitude:"-3.373056",longitude:"29.918886",country:"Burundi"},{name:"KH",latitude:"12.565679",longitude:"104.990963",country:"Cambodia"},{name:"CM",latitude:"7.369722",longitude:"12.354722",country:"Cameroon"},{name:"CA",latitude:"56.130366",longitude:"-106.346771",country:"Canada"},{name:"CV",latitude:"16.002082",longitude:"-24.013197",country:"Cape-Verde"},{name:"KY",latitude:"19.513469",longitude:"-80.566956",country:"CaymanIslands"},{name:"CF",latitude:"6.611111",longitude:"20.939444",country:"CentralAfricanRepublic"},{name:"TD",latitude:"15.454166",longitude:"18.732207",country:"Chad"},{name:"CL",latitude:"-35.675147",longitude:"\t-71.542969",country:"Chile"},{name:"CN",latitude:"35.86166",longitude:"104.195397\t",country:"China"},{name:"CX",latitude:"-10.447525",longitude:"105.690449",country:"ChristmasIsland"},{name:"CC",latitude:"-12.164165",longitude:"96.870956",country:"Cocos [Keeling] Islands"},{name:"CO",latitude:"4.570868",longitude:"-74.297333\t",country:"Colombia"},{name:"KM",latitude:"-11.875001",longitude:"43.872219",country:"Comoros"},{name:"CG",latitude:"-0.228021",longitude:"15.827659",country:"Congo"},{name:"CK",latitude:"-21.236736",longitude:"-159.777671",country:"Cook-Islands"},{name:"CR",latitude:"9.748917",longitude:"-83.753428",country:"Costa-Rica"},{name:"CI",latitude:"7.539989",longitude:"-5.54708",country:"Ivory-Coast"},{name:"HR",latitude:"45.1",longitude:"15.2",country:"Croatia"},{name:"CU",latitude:"21.521757",longitude:"-77.781167",country:"Cuba"},{name:"CY",latitude:"35.126413",longitude:"33.429859",country:"Cyprus"},{name:"CZ",latitude:"49.817492",longitude:"15.472962",country:"Czech Republic"},{name:"DK",latitude:"56.26392",longitude:"9.501785",country:"Denmark"},{name:"DJ",latitude:"11.825138",longitude:"42.590275",country:"Djibouti"},{name:"DM",latitude:"15.414999",longitude:"-61.370976",country:"Dominica"},{name:"DO",latitude:"18.735693",longitude:"-70.162651",country:"Dominican Republic"},{name:"EC",latitude:"-1.831239",longitude:"-78.183406",country:"Ecuador"},{name:"EG",latitude:"26.820553",longitude:"30.802498",country:"Egypt"},{name:"SV",latitude:"13.794185",longitude:"-88.89653",country:"ElSalvador"},{name:"GQ",latitude:"1.650801",longitude:"10.267895",country:"Equatorial Guinea"},{name:"ER",latitude:"15.179384",longitude:"39.782334",country:"Eritrea"},{name:"EE",latitude:"58.595272",longitude:"25.013607",country:"Estonia"},{name:"ET",latitude:"9.145",longitude:"40.489673",country:"Ethiopia"},{name:"FK",latitude:"-51.796253",longitude:"-59.523613",country:"\tFalkland Islands [IslasMalvinas]"},{name:"FO",latitude:"61.892635",longitude:"-6.911806",country:"Faroe Islands"},{name:"FJ",latitude:"-16.578193",longitude:"179.414413",country:"Fiji"},{name:"FI",latitude:"61.92411",longitude:"25.748151",country:"Finland"},{name:"FR",latitude:"46.227638",longitude:"2.213749",country:"France"},{name:"GF",latitude:"3.933889",longitude:"-53.125782",country:"French Guiana"},{name:"PF",latitude:"-17.679742",longitude:"-149.406843",country:"French Polynesia"},{name:"TF",latitude:"-49.280366",longitude:"69.348557",country:"FrenchSouthernTerritories"},{name:"GA",latitude:"-0.803689",longitude:"11.609444",country:"Gabon"},{name:"GM",latitude:"13.443182",longitude:"-15.310139",country:"Gambia"},{name:"GZ",latitude:"31.354676",longitude:"34.308825",country:"GazaStrip"},{name:"GE",latitude:"42.315407",longitude:"43.356892",country:"Georgia"},{name:"DE",latitude:"51.165691",longitude:"10.451526",country:"Germany"},{name:"GH",latitude:"7.946527",longitude:"-1.023194",country:"Ghana"},{name:"GI",latitude:"36.137741",longitude:"-5.345374",country:"Gibraltar"},{name:"GR",latitude:"39.074208",longitude:"21.824312",country:"Greece"},{name:"GL",latitude:"71.706936",longitude:"-42.604303",country:"Greenland"},{name:"GD",latitude:"12.262776",longitude:"-61.604171",country:"Grenada"},{name:"GP",latitude:"16.995971",longitude:"-62.067641",country:"Guadeloupe"},{name:"GU",latitude:"13.444304",longitude:"144.793731",country:"Guam"},{name:"GT",latitude:"15.783471",longitude:"-90.230759",country:"Guatemala"},{name:"GG",latitude:"49.465691",longitude:"-2.585278",country:"Guernsey"},{name:"GN",latitude:"9.945587",longitude:"-9.696645",country:"Guinea"},{name:"GW",latitude:"11.803749",longitude:"-15.180413",country:"Guinea-Bissau"},{name:"GY",latitude:"4.860416",longitude:"-58.93018",country:"Guyana"},{name:"HT",latitude:"18.971187",longitude:"-72.285215",country:"Haiti"},{name:"HM",latitude:"-53.08181",longitude:"73.504158",country:"HeardIslandandMcDonaldIslands"},{name:"HN",latitude:"15.199999",longitude:"-86.241905",country:"Honduras"},{name:"HK",latitude:"22.396428",longitude:"114.109497",country:"HongKong"},{name:"HU",latitude:"47.162494",longitude:"19.503304",country:"Hungary"},{name:"IS",latitude:"64.963051",longitude:"-19.020835",country:"Iceland"},{name:"IN",latitude:"20.593684",longitude:"78.96288",country:"India"},{name:"ID",latitude:"-0.789275",longitude:"113.921327",country:"Indonesia"},{name:"IR",latitude:"32.427908",longitude:"53.688046",country:"Iran"},{name:"IQ",latitude:"33.223191",longitude:"43.679291",country:"Iraq"},{name:"IE",latitude:"53.41291",longitude:"-8.24389",country:"Ireland"},{name:"IM",latitude:"54.236107",longitude:"-4.548056",country:"Isle-of-Man"},{name:"IL",latitude:"31.046051",longitude:"34.851612",country:"Israel"},{name:"IT",latitude:"41.87194",longitude:"12.56738",country:"Italy"},{name:"JM",latitude:"18.109581",longitude:"-77.297508",country:"Jamaica"},{name:"JP",latitude:"36.204824",longitude:"138.252924",country:"Japan"},{name:"JE",latitude:"49.214439",longitude:"-2.13125",country:"Jersey"},{name:"JO",latitude:"30.585164",longitude:"36.238414",country:"Jordan"},{name:"KZ",latitude:"48.019573",longitude:"66.923684",country:"Kazakhstan"},{name:"KE",latitude:"-0.023559",longitude:"37.906193",country:"Kenya"},{name:"KI",latitude:"-3.370417",longitude:"-168.734039",country:"Kiribati"},{name:"KW",latitude:"29.31166",longitude:"47.481766",country:"Kuwait"},{name:"KG",latitude:"41.20438",longitude:"74.766098",country:"Kyrgyzstan"},{name:"LA",latitude:"19.85627",longitude:"102.495496",country:"Laos"},{name:"LV",latitude:"56.879635",longitude:"24.603189",country:"Latvia"},{name:"LB",latitude:"33.854721",longitude:"35.862285",country:"Lebanon"},{name:"LS",latitude:"-29.609988",longitude:"28.233608",country:"Lesotho"},{name:"LR",latitude:"6.428055",longitude:"-9.429499",country:"Liberia"},{name:"LY",latitude:"26.3351",longitude:"17.228331",country:"Libya"},{name:"LI",latitude:"47.166",longitude:"9.555373",country:"Liechtenstein"},{name:"LT",latitude:"55.169438",longitude:"23.881275",country:"Lithuania"},{name:"LU",latitude:"49.815273",longitude:"6.129583",country:"Luxembourg"},{name:"MO",latitude:"22.198745",longitude:"113.543873",country:"Macau"},{name:"MK",latitude:"41.608635",longitude:"21.745275",country:"Macedonia"},{name:"MG",latitude:"-18.766947",longitude:"46.869107",country:"Madagascar"},{name:"MW",latitude:"-13.254308",longitude:"34.301525",country:"Malawi"},{name:"MY",latitude:"4.210484",longitude:"101.975766\t",country:"Malaysia"},{name:"MV",latitude:"3.202778",longitude:"73.22068",country:"Maldives"},{name:"ML",latitude:"17.570692",longitude:"-3.996166\t",country:"Mali"},{name:"MT",latitude:"35.937496",longitude:"14.375416\t",country:"Malta"},{name:"MH",latitude:"7.131474",longitude:"171.184478\t",country:"MarshallIslands"},{name:"MQ",latitude:"14.641528",longitude:"-61.024174",country:"Martinique"},{name:"MR",latitude:"21.00789",longitude:"-10.940835\t",country:"Mauritania"},{name:"MU",latitude:"-20.348404",longitude:"57.552152",country:"Mauritius"},{name:"MX",latitude:"23.634501",longitude:"-102.552784",country:"Mexico"},{name:"FM",latitude:"7.425554",longitude:"150.550812",country:"Micronesia"},{name:"MD",latitude:"47.411631",longitude:"28.369885",country:"Moldova"},{name:"MC",latitude:"43.750298",longitude:"7.412841",country:"Monaco"},{name:"MN",latitude:"46.862496",longitude:"103.846656",country:"Mongolia"},{name:"ME",latitude:"42.708678",longitude:"19.37439",country:"Montenegro"},{name:"MS",latitude:"16.742498",longitude:"-62.187366",country:"Montserrat"},{name:"MA",latitude:"31.791702",longitude:"-7.09262",country:"Morocco"},{name:"MZ",latitude:"-18.665695",longitude:"35.529562",country:"Mozambique"},{name:"MM",latitude:"21.913965",longitude:"95.956223\t",country:"Myanmar"},{name:"NA",latitude:"-22.95764",longitude:"18.49041\t",country:"Namibia"},{name:"NR",latitude:"-0.522778",longitude:"166.931503",country:"Nauru"},{name:"NP",latitude:"28.394857",longitude:"84.124008",country:"Nepal"},{name:"NL",latitude:"52.132633",longitude:"5.291266",country:"Netherlands"},{name:"AN",latitude:"12.226079",longitude:"-69.060087",country:"Netherlands Antilles"},{name:"NC",latitude:"-20.904305",longitude:"165.618042",country:"New-Caledonia"},{name:"NZ",latitude:"-40.900557",longitude:"174.885971",country:"NewZealand"},{name:"NI",latitude:"12.865416",longitude:"-85.207229",country:"Nicaragua"},{name:"NE",latitude:"17.607789",longitude:"8.081666",country:"Niger"},{name:"NG",latitude:"9.081999",longitude:"8.675277",country:"Nigeria"},{name:"NU",latitude:"-19.054445",longitude:"-169.867233",country:"Niue"},{name:"NF",latitude:"-29.040835",longitude:"167.954712",country:"\tNorfolkIsland"},{name:"KP",latitude:"40.339852",longitude:"127.510093",country:"NorthKorea"},{name:"MP",latitude:"17.33083",longitude:"145.38469",country:"NorthernMarianaIslands"},{name:"NO",latitude:"60.472024",longitude:"8.468946",country:"Norway"},{name:"OM",latitude:"21.512583",longitude:"55.923255",country:"Oman"},{name:"PK",latitude:"30.375321",longitude:"69.345116",country:"Pakistan"},{name:"PS",latitude:"31.952162",longitude:"35.233154",country:"Palestinian Territories"},{name:"PA",latitude:"8.537981",longitude:"-80.782127",country:"Panama"},{name:"PG",latitude:"-6.314993",longitude:"143.95555",country:"Papua-New-Guinea"},{name:"PY",latitude:"-23.442503",longitude:"-58.443832",country:"Paraguay"},{name:"PE",latitude:"-9.189967",longitude:"-75.015152",country:"Peru"},{name:"PH",latitude:"12.879721",longitude:"121.774017",country:"Philippines"},{name:"PN",latitude:"-24.703615",longitude:"-127.439308",country:"Pitcairn Islands"},{name:"PL",latitude:"51.919438",longitude:"19.145136",country:"Poland"},{name:"PT",latitude:"39.399872",longitude:"-8.224454",country:"Portugal"},{name:"PR",latitude:"18.220833",longitude:"-66.590149",country:"Puerto-Rico"},{name:"QA",latitude:"25.354826",longitude:"51.183884",country:"Qatar"},{name:"RE",latitude:"-21.115141",longitude:"55.536384",country:"R\xe9union"},{name:"RO",latitude:"45.943161",longitude:"24.96676",country:"Romania"},{name:"RU",latitude:"61.52401",longitude:"105.318756",country:"Russia"},{name:"RW",latitude:"-1.940278",longitude:"29.873888",country:"Rwanda"},{name:"SH",latitude:"-24.143474",longitude:"-10.030696",country:"\tSaint-Helena"},{name:"KN",latitude:"17.357822",longitude:"-62.782998",country:"Saint-Kitts-and-Nevis"},{name:"LC",latitude:"13.909444",longitude:"-60.978893",country:"Saint-Lucia"},{name:"PM",latitude:"46.941936",longitude:"-56.27111",country:"Saint-Pierre-and-Miquelon"},{name:"SM",latitude:"43.94236",longitude:"12.457777",country:"San-Marino"},{name:"SA",latitude:"23.885942",longitude:"45.079162",country:"Saudi-Arabia"},{name:"SN",latitude:"14.497401",longitude:"-14.452362",country:"Senegal"},{name:"RS",latitude:"44.016521",longitude:"21.005859",country:"Serbia"},{name:"SC",latitude:"-4.679574",longitude:"55.491977",country:"Seychelles"},{name:"SL",latitude:"8.460555",longitude:"-11.779889",country:"Sierra-Leone"},{name:"SG",latitude:"1.352083",longitude:"103.819836",country:"Singapore"},{name:"SK",latitude:"48.669026",longitude:"19.699024",country:"Slovakia"},{name:"SI",latitude:"46.151241",longitude:"14.995463",country:"Slovenia"},{name:"SB",latitude:"-9.64571",longitude:"160.156194",country:"SolomonIslands"},{name:"SO",latitude:"5.152149",longitude:"46.199616\t",country:"Somalia"},{name:"GS",latitude:"-54.429579",longitude:"-36.587909",country:"\tSouth Georgia and the South Sandwich Islands"},{name:"KR",latitude:"35.907757",longitude:"127.766922",country:"S.-Korea"},{name:"ES",latitude:"40.463667",longitude:"-3.74922",country:"Spain"},{name:"LK",latitude:"7.873054",longitude:"80.771797",country:"SriLanka"},{name:"SD",latitude:"12.862807",longitude:"30.217636",country:"Sudan"},{name:"SR",latitude:"3.919305",longitude:"-56.027783",country:"Suriname"},{name:"SJ",latitude:"77.553604",longitude:"23.670272",country:"SvalbardandJanMayen"},{name:"SZ",latitude:"-26.522503",longitude:"31.465866",country:"Swaziland"},{name:"SE",latitude:"60.128161",longitude:"18.643501",country:"Sweden"},{name:"CH",latitude:"46.818188",longitude:"8.227512",country:"Switzerland"},{name:"SY",latitude:"34.802075",longitude:"38.996815",country:"Syria"},{name:"TJ",latitude:"38.861034",longitude:"71.276093",country:"Tajikistan"},{name:"TH",latitude:"15.870032",longitude:"100.992541",country:"Thailand"},{name:"TL",latitude:"-8.874217",longitude:"125.727539",country:"Timor-Leste"},{name:"TG",latitude:"8.619543",longitude:"0.824782",country:"Togo"},{name:"TK",latitude:"-8.967363",longitude:"-171.855881",country:"Tokelau"},{name:"TM",latitude:"38.969719",longitude:"59.556278",country:"Turkmenistan"},{name:"TC",latitude:"21.694025",longitude:"-71.797928",country:"Turks-and-CaicosIslands"},{name:"AE",latitude:"23.424076",longitude:"53.847818",country:"UAE"},{name:"GB",latitude:"55.378051",longitude:"-3.435973",country:"UK"},{name:"EH",latitude:"24.215527",longitude:"-12.885834",country:"Western-Sahara"},{name:"TN",latitude:"33.886917",longitude:"9.537499",country:"Tunisia"},{name:"TO",latitude:"-21.178986",longitude:"-175.198242",country:"Tonga"},{name:"TR",latitude:"38.963745",longitude:"35.243322",country:"Turkey"},{name:"TT",latitude:"10.691803",longitude:"-61.222503",country:"Trinidad-and-Tobago"},{name:"TV",latitude:"-7.109535",longitude:"177.64933",country:"Tuvalu"},{name:"TW",latitude:"23.69781",longitude:"120.960515",country:"Taiwan"},{name:"TZ",latitude:"-6.369028",longitude:"34.888822",country:"Tanzania"},{name:"UA",latitude:"48.379433",longitude:"31.16558",country:"Ukraine"},{name:"UG",latitude:"1.373333",longitude:"32.290275",country:"Uganda"},{name:"US",latitude:"37.09024",longitude:"-95.712891",country:"USA"},{name:"UY",latitude:"-32.522779",longitude:"-55.765835",country:"Uruguay"},{name:"UZ",latitude:"41.377491",longitude:"64.585262",country:"Uzbekistan"},{name:"VA",latitude:"41.902916",longitude:"\t12.453389",country:"Vatican-City"},{name:"VC",latitude:"12.984305",longitude:"-61.287228",country:"Saint Vincent and theGrenadines"},{name:"VE",latitude:"6.42375",longitude:"-66.58973",country:"Venezuela"},{name:"VG",latitude:"18.420695",longitude:"-64.639968",country:"BritishVirginIslands"},{name:"VI",latitude:"18.335765",longitude:"-64.896335",country:"U.S.-Virgin-Islands"},{name:"VN",latitude:"14.058324",longitude:"108.277199",country:"Vietnam"},{name:"VU",latitude:"-15.376706",longitude:"166.959158",country:"Vanuatu"},{name:"WF",latitude:"-13.768752",longitude:"-177.156097\t",country:"Wallis-and-Futuna"},{name:"WS",latitude:"-13.759029",longitude:"-172.104629\t",country:"Samoa"},{name:"XK",latitude:"42.602636",longitude:"20.902977",country:"Kosovo"},{name:"YE",latitude:"15.552727",longitude:"48.516388",country:"Yemen"},{name:"YT",latitude:"-12.8275",longitude:"45.166244",country:"Mayotte"},{name:"ZA",latitude:"-30.559482",longitude:"22.937506",country:"South-Africa"},{name:"ZM",latitude:"-13.133897",longitude:"27.849332",country:"Zambia"},{name:"ZW",latitude:"-19.015438",longitude:"29.154857",country:"Zimbabwe"}].filter((function(e){return t===e.country}))},P=a(122),K=function(t){if(t.chartData&&t.chartData.length>0){var e=new A.a({container:"containerPieChart",autoFit:!0,height:500});e.data(t.chartData),e.scale("percent",{formatter:function(t){return t=100*t+"%"}}),e.coordinate("theta",{radius:.75,innerRadius:.6}),e.tooltip({showTitle:!1,showMarkers:!1,itemTpl:'<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'}),e.annotation().text({position:["50%","50%"],content:"Total Confirmed Cases",style:{fontSize:14,fill:"#8c8c8c",textAlign:"center"},offsetY:-20}).text({position:["50%","50%"],content:t.innerChartTitle,style:{fontSize:20,fill:"#8c8c8c",textAlign:"center"},offsetX:-10,offsetY:20}),e.interval().adjust("stack").position("percent").color("item").tooltip("item*percent",(function(t,e){return{name:t,value:e=100*e+"%"}})),e.interaction("element-active"),e.render(!0)}return u.a.createElement(u.a.Fragment,null)},L=a(121),j={searchInput:[],chartData:[],chartInnerTitle:"",render:!1,renderKey:0,previousSearch:"",filterResult:[]},V=function(t){var e=Object(n.useState)(j),a=Object(P.a)(e,2),i=a[0],l=a[1];return u.a.createElement(M.b,{small:!0,className:"h-100"},u.a.createElement(M.d,{className:"border-bottom"},u.a.createElement("h6",{className:"m-0"},t.title)),u.a.createElement(M.c,{className:"py-0"},u.a.createElement(M.g,null,u.a.createElement(L.a,{id:"filtering-example",caseSensitive:!0,labelKey:function(t){return"".concat(t.country)},onChange:function(t){console.log(t),Array.isArray(t)&&t.length>0&&l({searchInput:t[0].country,chartData:[],filterResult:t})},options:t.countryCaseData,placeholder:"Enter Country Name..."})),u.a.createElement(M.g,null,u.a.createElement(M.a,{theme:"primary",onClick:function(){var t=[],e=!0;if(i.previousSearch!==i.searchInput){var a=(i.filterResult[0].active/i.filterResult[0].totalCases).toFixed(2),n=0==(i.filterResult[0].critical/i.filterResult[0].totalCases).toFixed(2)?.01:(i.filterResult[0].critical/i.filterResult[0].totalCases).toFixed(2),u=0==(i.filterResult[0].recovered/i.filterResult[0].totalCases).toFixed(2)?.01:(i.filterResult[0].recovered/i.filterResult[0].totalCases).toFixed(2),o=0==(i.filterResult[0].totalDeaths/i.filterResult[0].totalCases).toFixed(2)?.01:(i.filterResult[0].totalDeaths/i.filterResult[0].totalCases).toFixed(2);t.push({item:"Active",count:~~(100*a),percent:parseFloat(a)}),t.push({item:"Critical",count:~~(100*n),percent:parseFloat(n)}),t.push({item:"Recovered",count:~~(100*u),percent:parseFloat(u)}),t.push({item:"Deaths",count:~~(100*o),percent:parseFloat(o)}),e=!1,l({searchInput:i.searchInput,chartData:t,chartInnerTitle:i.filterResult[0].totalCases,render:!0,previousSearch:i.searchInput})}e&&i.previousSearch!==i.searchInput&&l(Object(c.a)({},i,{render:!0}))}},"Search")),u.a.createElement("div",{id:"containerPieChart",key:i.searchInput}),i.chartData&&i.chartData.length>0&&u.a.createElement(K,{innerChartTitle:i.chartInnerTitle,chartData:i.chartData}),i.chartData&&0===i.chartData.length&&i.render&&u.a.createElement("h5",{className:"m-0",style:{color:"#FF0000"}}," No Search Record Found ")))},H=a(119),_=a(120),U=a(123),z=a(125),J=a(42),Z=a.n(J),Y=function(t){Object(z.a)(a,t);var e=Object(U.a)(a);function a(){return Object(H.a)(this,a),e.apply(this,arguments)}return Object(_.a)(a,[{key:"render",value:function(){var t=this.props,e=t.variation,a=t.label,n=t.value,i=G()("stats-small",e&&"stats-small--".concat(e)),l=G()("1"===e?"p-0 d-flex":"px-0 pb-0"),o=G()("d-flex","1"===e?"flex-column m-auto":"px-3"),r=G()("stats-small__data","1"===e&&"text-center"),d=G()("stats-small__label","text-uppercase","1"!==e&&"mb-1"),c=G()("stats-small__value","count","1"===e?"my-3":"m-0"),m="1"===e?120:60;return u.a.createElement(M.b,{small:!0,className:i},u.a.createElement(M.c,{className:l},u.a.createElement("div",{className:o},u.a.createElement("div",{className:r},u.a.createElement("span",{className:d},a),u.a.createElement("h6",{className:c},n))),u.a.createElement("canvas",{height:m,ref:this.canvasRef,className:"stats-small-".concat(Z()())})))}}]),a}(u.a.Component),W=function(){var t=[],e=Object(o.b)();Object(n.useEffect)((function(){e((function(t){p().get().then((function(e){t({type:f,payload:e.data})})).catch((function(t){return console.log(t)}))})),e((function(t){h().get().then((function(e){t({type:E,payload:e.data})})).catch((function(t){return console.log(t)}))})),e((function(t){h().fetch().then((function(e){t({type:b,payload:e.data})})).catch((function(t){return console.log(t)}))}))}),[e]);var a=Object(o.c)((function(t){return{allCountryData:t.CountryStats.allCountryData,geoData:t.CountryStats.geoData,totalFigure:t.TotalStats.totalFigure}})),i=a.allCountryData,l=a.geoData,r=a.totalFigure;return i&&i.response&&i.response.map((function(e){var a=k(e.country);a.length>0&&t.push({latitude:a[0].latitude,longitude:a[0].longitude,country:e.country,recovered:e.cases.recovered,critical:e.cases.critical,totalDeaths:e.deaths.total,totalCases:e.cases.total,active:e.cases.active})})),u.a.createElement(u.a.Fragment,null,u.a.createElement(M.f,{fluid:!0,className:"main-content-container px-4 container-fluid"},u.a.createElement(M.h,{noGutters:!0,className:"page-header py-4"},u.a.createElement(F,{title:"Covid-19 Quick Stats as at (".concat(r.statistic_taken_at,")"),subtitle:"Dashboard",className:"text-sm-left mb-3"})),u.a.createElement(M.h,null,u.a.createElement(M.e,{className:"col-lg mb-4"},u.a.createElement(Y,{id:"small-stats-one",variation:"1",label:"Total Cases",value:r.total_cases})),u.a.createElement(M.e,{className:"col-lg mb-4"},u.a.createElement(Y,{id:"small-stats-two",variation:"1",label:"Total Deaths",value:r.total_deaths})),u.a.createElement(M.e,{className:"col-lg mb-4"},u.a.createElement(Y,{id:"small-stats-three",variation:"1",label:"Total Recovered",value:r.total_recovered})),u.a.createElement(M.e,{className:"col-lg mb-4"},u.a.createElement(Y,{id:"small-stats-four",variation:"1",label:"New Cases",value:r.new_cases})),u.a.createElement(M.e,{className:"col-lg mb-4"},u.a.createElement(Y,{id:"small-stats-four",variation:"1",label:"New Deaths",value:r.new_deaths}))),u.a.createElement(M.h,null,u.a.createElement(M.e,{lg:"8",md:"12",sm:"12",className:"mb-4"},u.a.createElement(O,{title:"Quick Stat by Country",countryData:t,geoData:l})),u.a.createElement(M.e,{lg:"4",md:"6",sm:"12",className:"mb-4"},u.a.createElement(V,{title:"Covid-19 Case Breakdown By Country",countryCaseData:t})))))};a(240),a(241);var Q=function(){return u.a.createElement("div",null,u.a.createElement(o.a,{store:D},u.a.createElement(W,null)))};l.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(Q,null)),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.1ad11843.chunk.js.map