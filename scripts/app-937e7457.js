/**
 * angular morris chart provides morris.js wrappers directives for angular
 * check out documentation in http://angular-morris-chart.stpa.co
 *
 * Copyright © 2014 Stewan Pacheco <talk@stpa.co>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
"use strict";!function(){angular.module("angular.morris-chart",[]).factory("morrisChartService",["$injector",function(t){var r={keyToAttr:function(t,r){return t+r.substring(0,1).toUpperCase()+r.substring(1)},populateScopeDefinition:function(t,e,a,n){return angular.forEach(a,function(a){t[r.keyToAttr(e,a)]=a===n?"@":"="}),t},populateOptions:function(t,e,a,n){return angular.forEach(e,function(e){var o=r.keyToAttr(a,e);n.hasOwnProperty(o)&&"undefined"!=typeof n[o]&&(t[e]=n[o])}),t},processFilterOptions:function(r,e){angular.forEach(r,function(r){if("string"==typeof e[r]&&t.has(e[r]+"Filter")){var a=t.get(e[r]+"Filter");e[r]=function(t){return a.call(this,t)}}})}};return r}])}(),function(){angular.module("angular.morris-chart").directive("lineChart",["morrisChartService",function(t){var r=["data","xkey","ykeys","labels","lineColors","lineWidth","pointSize","pointFillColors","pointStrokeColors","ymax","ymin","smooth","hideHover","hoverCallback","parseTime","units","postUnits","preUnits","dateFormat","xLabels","xLabelFormat","xLabelAngle","yLabelFormat","goals","goalStrokeWidth","goalLineColors","events","eventStrokeWidth","eventLineColors","continuousLine","axes","grid","gridTextColor","gridTextSize","gridTextFamily","gridTextWeight","fillOpacity","resize"];return{restrict:"A",scope:t.populateScopeDefinition({lineColors:"=",parseTime:"="},"line",r,"xkey"),link:function(e,a){e.$watch("lineData",function(){if(e.lineData)if("string"==typeof e.lineData&&(e.lineData=JSON.parse(e.lineData)),"string"==typeof e.lineYkeys&&(e.lineYkeys=JSON.parse(e.lineYkeys)),"string"==typeof e.lineYkeys&&(e.lineYkeys=JSON.parse(e.lineYkeys)),"string"==typeof e.lineLabels&&(e.lineLabels=JSON.parse(e.lineLabels)),"string"==typeof e.lineColors&&(e.lineColors=JSON.parse(e.lineColors)),"boolean"==typeof e.parseTime&&(e.parseTime=JSON.parse(e.parseTime)),e.lineInstance)e.lineInstance.options.xkey=e.lineXkey,e.lineInstance.options.ykeys=e.lineYkeys,e.lineInstance.options.labels=e.lineLabels,e.lineInstance.options.parseTime=e.parseTime,e.lineInstance.options.lineColors=e.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],e.lineInstance.setData(e.lineData);else{var n=t.populateOptions({element:a,lineColors:e.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],parseTime:e.parseTime},r,"line",e);t.processFilterOptions(["dateFormat","xLabelFormat","yLabelFormat"],n),e.lineInstance=new Morris.Line(n)}})}}}])}(),function(){angular.module("angular.morris-chart").directive("donutChart",["morrisChartService",function(t){var r=["data","colors","formatter","resize"];return{restrict:"A",scope:t.populateScopeDefinition({},"donut",r),link:function(e,a){e.$watch("donutData",function(){if(e.donutData)if("string"==typeof e.donutData&&(e.donutData=JSON.parse(e.donutData)),"string"==typeof e.donutColors&&(e.donutColors=JSON.parse(e.donutColors)),e.donutInstance)e.donutInstance.setData(e.donutData);else{var n=t.populateOptions({element:a,colors:["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]},r,"donut",e);t.processFilterOptions(["formatter"],n),e.donutInstance=new Morris.Donut(n)}})}}}])}(),function(){angular.module("angular.morris-chart").directive("barChart",["morrisChartService",function(t){var r=["data","xkey","ykeys","labels","barColors","stacked","hideHover","hoverCallback","axes","grid","gridTextColor","gridTextSize","gridTextFamily","gridTextWeight","resize"];return{restrict:"A",scope:t.populateScopeDefinition({barColors:"=",barX:"@",barY:"="},"bar",r),link:function(e,a){e.$watch("barData",function(){if(e.barData)if("string"==typeof e.barY&&(e.barY=JSON.parse(e.barY)),"string"==typeof e.barLabels&&(e.barLabels=JSON.parse(e.barLabels)),"string"==typeof e.barData&&(e.barData=JSON.parse(e.barData)),"string"==typeof e.barColors&&(e.barColors=JSON.parse(e.barColors)),"string"==typeof e.barStacked&&(e.barStacked=JSON.parse(e.barStacked)),"string"==typeof e.barResize&&(e.barResize=JSON.parse(e.barResize)),e.barInstance)e.barInstance.setData(e.barData);else{var n=t.populateOptions({element:a,barColors:e.barColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],stacked:!1,resize:!1,xkey:e.barX,ykeys:e.barY,xLabelMargin:2},r,"bar",e);e.barInstance=new Morris.Bar(n)}})}}}])}(),function(){angular.module("angular.morris-chart").directive("areaChart",["morrisChartService",function(t){var r=["data","xkey","ykeys","labels","lineColors","lineWidth","pointSize","pointFillColors","pointStrokeColors","ymax","ymin","smooth","hideHover","hoverCallback","parseTime","units","postUnits","preUnits","dateFormat","xLabels","xLabelFormat","xLabelAngle","yLabelFormat","goals","goalStrokeWidth","goalLineColors","events","eventStrokeWidth","eventLineColors","continuousLine","axes","grid","gridTextColor","gridTextSize","gridTextFamily","gridTextWeight","fillOpacity","resize","behaveLikeLine"];return{restrict:"A",scope:t.populateScopeDefinition({lineColors:"="},"area",r,"xkey"),link:function(e,a){e.$watch("areaData",function(){if(e.areaData)if("string"==typeof e.areaData&&(e.areaData=JSON.parse(e.areaData)),"string"==typeof e.areaYkeys&&(e.areaYkeys=JSON.parse(e.areaYkeys)),"string"==typeof e.areaLabels&&(e.areaLabels=JSON.parse(e.areaLabels)),"string"==typeof e.lineColors&&(e.lineColors=JSON.parse(e.lineColors)),e.areaInstance)e.areaInstance.setData(e.areaData);else{var n=t.populateOptions({element:a,lineColors:e.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]},r,"area",e);t.processFilterOptions(["dateFormat","xLabelFormat","yLabelFormat"],n),e.areaInstance=new Morris.Area(n)}})}}}])}(),/**
 * angular morris chart provides morris.js wrappers directives for angular
 * based in ngmorris from Connor James Leech
 * 
 * check out documentation in http://angular-morris-chart.stpa.co
 *
 * Copyright © 2014 Stewan Pacheco <talk@stpa.co>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
<!--[if lt IE 10]>

<![endif]-->
}]);