!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.nothing=t():e.nothing=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,c=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw c}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,"init",(function(){return f})),r.d(t,"ejectDispatch",(function(){return a}));var f=function(e){for(var t={},r={},c=Object.keys(e),u=0;u<c.length;u++){var f=c[u],a=e[f];r[f]=a.state;for(var l=Object.keys(a.reducers),p=0;p<l.length;p++){var s=l[p];t["".concat(f,"/").concat(s)]=a.reducers[s]}}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,c=arguments.length>1?arguments[1]:void 0,u=t[c.type],f=i({},e);if(u){var a=c.type,l=c.payload,p=a.split("/"),s=o(p,1),y=s[0];return f[y]=u.apply(void 0,[e[y]].concat(n(l))),f}return console.log("未找到注册的Reducers"),f}},a=function(e,t){for(var r=Object.keys(t),n=0;n<r.length;n++){var o=r[n],c=t[o];e[o]=i({},t.effects);for(var u=Object.keys(c.effects),f=0;f<u.length;f++){var a=u[f];e[o][a]=c.effects[a].bind(e[o])}for(var l=Object.keys(c.reducers),p=function(t){var r=l[t],n="".concat(o,"/").concat(r);e[o][r]=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e({type:n,payload:r})}},s=0;s<l.length;s++)p(s)}return e},l=null,p={init:function(e){return f(l=e)},ejectDispatch:function(e){l?e?a(e,l):console.log("请传入redux/store的dispatch方法"):console.log("请先调用ReduxTool.init()注入models")}};t.default=p}])}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3RoaW5nL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ub3RoaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vdGhpbmcvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwid2luZG93IiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImluaXQiLCJtb2RlbHMiLCJmaW5hbFJlZHVjZXIiLCJkZWZhdWx0U3RhdGUiLCJuYW1lU3BhY2VzIiwia2V5cyIsImluZGV4IiwibGVuZ3RoIiwibmFtZVNwYWNlIiwibW9kZWwiLCJzdGF0ZSIsIm1vZGVsUmVkdWNlcktleXMiLCJyZWR1Y2VycyIsInJldWRjZXJLZXkiLCJhY3Rpb24iLCJyZWR1Y2VyIiwidHlwZSIsIm5ld1N0YXRlIiwicGF5bG9hZCIsInNwbGl0IiwibW9kZWxOYW1lIiwiY29uc29sZSIsImxvZyIsImVqZWN0RGlzcGF0Y2giLCJkaXNwYXRjaCIsImVmZmVjdHMiLCJtb2RlbEVmZmVjdEtleXMiLCJlZmZlY3RLZXkiLCJfbW9kZWxzIiwiUmVkdXhUb29sIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUEyQ0EsRUFBTUMsR0FDMUIsaUJBQVpDLFNBQTBDLGlCQUFYQyxPQUN4Q0EsT0FBT0QsUUFBVUQsSUFDUSxtQkFBWEcsUUFBeUJBLE9BQU9DLElBQzlDRCxPQUFPLEdBQUlILEdBQ2UsaUJBQVpDLFFBQ2RBLFFBQWlCLFFBQUlELElBRXJCRCxFQUFjLFFBQUlDLElBUnBCLENBU0dLLFFBQVEsV0FDWCxPLFlDVEUsSUFBSUMsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVVAsUUFHbkMsSUFBSUMsRUFBU0ksRUFBaUJFLEdBQVksQ0FDekNDLEVBQUdELEVBQ0hFLEdBQUcsRUFDSFQsUUFBUyxJQVVWLE9BTkFVLEVBQVFILEdBQVVJLEtBQUtWLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNNLEdBRy9ETCxFQUFPUSxHQUFJLEVBR0pSLEVBQU9ELFFBMERmLE9BckRBTSxFQUFvQk0sRUFBSUYsRUFHeEJKLEVBQW9CTyxFQUFJUixFQUd4QkMsRUFBb0JRLEVBQUksU0FBU2QsRUFBU2UsRUFBTUMsR0FDM0NWLEVBQW9CVyxFQUFFakIsRUFBU2UsSUFDbENHLE9BQU9DLGVBQWVuQixFQUFTZSxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVWLEVBQW9CZ0IsRUFBSSxTQUFTdEIsR0FDWCxvQkFBWHVCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZW5CLEVBQVN1QixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWVuQixFQUFTLGFBQWMsQ0FBRXlCLE9BQU8sS0FRdkRuQixFQUFvQm9CLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRbkIsRUFBb0JtQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQXhCLEVBQW9CZ0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9uQixFQUFvQlEsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnZCLEVBQW9CMkIsRUFBSSxTQUFTaEMsR0FDaEMsSUFBSWUsRUFBU2YsR0FBVUEsRUFBTzJCLFdBQzdCLFdBQXdCLE9BQU8zQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSyxFQUFvQlEsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlYsRUFBb0JXLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHN0IsRUFBb0JnQyxFQUFJLEdBSWpCaEMsRUFBb0JBLEVBQW9CaUMsRUFBSSxHLDJuRENsRjlDLElBQU1DLEVBQU8sU0FBQ0MsR0FJbkIsSUFIQSxJQUFNQyxFQUFlLEdBQ2ZDLEVBQWUsR0FDZkMsRUFBYTFCLE9BQU8yQixLQUFLSixHQUN0QkssRUFBUSxFQUFHQSxFQUFRRixFQUFXRyxPQUFRRCxJQUFTLENBQ3RELElBQU1FLEVBQVlKLEVBQVdFLEdBQ3ZCRyxFQUFRUixFQUFPTyxHQUVyQkwsRUFBYUssR0FBYUMsRUFBTUMsTUFHaEMsSUFEQSxJQUFNQyxFQUFtQmpDLE9BQU8yQixLQUFLSSxFQUFNRyxVQUNsQ04sRUFBUSxFQUFHQSxFQUFRSyxFQUFpQkosT0FBUUQsSUFBUyxDQUM1RCxJQUFNTyxFQUFhRixFQUFpQkwsR0FDcENKLEVBQWEsR0FBRCxPQUFJTSxFQUFKLFlBQWlCSyxJQUFnQkosRUFBTUcsU0FBU0MsSUFHaEUsT0FBTyxXQUErQixJQUE5QkgsRUFBOEIsdURBQXRCUCxFQUFhVyxFQUFTLHVDQUM5QkMsRUFBVWIsRUFBYVksRUFBT0UsTUFDOUJDLEVBQVcsRUFBSCxHQUFRUCxHQUN0QixHQUFJSyxFQUFTLEtBQ0hDLEVBQWtCRixFQUFsQkUsS0FBTUUsRUFBWUosRUFBWkksUUFESCxFQUVXRixFQUFLRyxNQUFNLEtBRnRCLFNBRUhDLEVBRkcsS0FJWCxPQURBSCxFQUFTRyxHQUFhTCxFQUFPLFdBQVAsR0FBUUwsRUFBTVUsSUFBZCxTQUE0QkYsS0FDM0NELEVBR1AsT0FEQUksUUFBUUMsSUFBSSxrQkFDTEwsSUFLQU0sRUFBZ0IsU0FBQ0MsRUFBU3ZCLEdBRXJDLElBREEsSUFBTUcsRUFBYTFCLE9BQU8yQixLQUFLSixHQUN0QkssRUFBUSxFQUFHQSxFQUFRRixFQUFXRyxPQUFRRCxJQUFTLENBQ3RELElBQU1FLEVBQVlKLEVBQVdFLEdBQ3ZCRyxFQUFRUixFQUFPTyxHQUdyQmdCLEVBQVNoQixHQUFULEtBQTJCUCxFQUFPd0IsU0FFbEMsSUFEQSxJQUFNQyxFQUFrQmhELE9BQU8yQixLQUFLSSxFQUFNZ0IsU0FDakNuQixFQUFRLEVBQUdBLEVBQVFvQixFQUFnQm5CLE9BQVFELElBQVMsQ0FDM0QsSUFBTXFCLEVBQVlELEVBQWdCcEIsR0FDbENrQixFQUFTaEIsR0FBV21CLEdBQWFsQixFQUFNZ0IsUUFBUUUsR0FBV25DLEtBQUtnQyxFQUFTaEIsSUFJMUUsSUFEQSxJQUFNRyxFQUFtQmpDLE9BQU8yQixLQUFLSSxFQUFNRyxVQVpXLFdBYTdDTixHQUNQLElBQU1PLEVBQWFGLEVBQWlCTCxHQUM5QlUsRUFBTyxHQUFILE9BQU1SLEVBQU4sWUFBbUJLLEdBQzdCVyxFQUFTaEIsR0FBV0ssR0FBYyxzQ0FBSUssRUFBSix5QkFBSUEsRUFBSix1QkFBY00sRUFBUyxDQUFDUixPQUFLRSxjQUh4RFosRUFBUSxFQUFHQSxFQUFRSyxFQUFpQkosT0FBUUQsSUFBUyxFQUFyREEsR0FNWCxPQUFPa0IsR0FHTEksRUFBVSxLQUVSQyxFQUFZLENBQ2hCN0IsS0FBTyxTQUFDQyxHQUVOLE9BQU9ELEVBRFA0QixFQUFVM0IsSUFHWnNCLGNBQWdCLFNBQUNDLEdBQ1hJLEVBSUFKLEVBSUpELEVBQWNDLEVBQVNJLEdBSHJCUCxRQUFRQyxJQUFJLDZCQUpaRCxRQUFRQyxJQUFJLGtDQVdITyIsImZpbGUiOiJub3RoaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibm90aGluZ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJub3RoaW5nXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY29uc3QgaW5pdCA9IChtb2RlbHMpPT57XG4gIGNvbnN0IGZpbmFsUmVkdWNlciA9IHt9O1xuICBjb25zdCBkZWZhdWx0U3RhdGUgPSB7fTtcbiAgY29uc3QgbmFtZVNwYWNlcyA9IE9iamVjdC5rZXlzKG1vZGVscyk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBuYW1lU3BhY2VzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IG5hbWVTcGFjZSA9IG5hbWVTcGFjZXNbaW5kZXhdO1xuICAgIGNvbnN0IG1vZGVsID0gbW9kZWxzW25hbWVTcGFjZV07XG4gICAgLy/lpITnkIZzdGF0ZVxuICAgIGRlZmF1bHRTdGF0ZVtuYW1lU3BhY2VdID0gbW9kZWwuc3RhdGU7XG4gICAgLy/lpITnkIZyZWR1Y2VyXG4gICAgY29uc3QgbW9kZWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKG1vZGVsLnJlZHVjZXJzKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbW9kZWxSZWR1Y2VyS2V5cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHJldWRjZXJLZXkgPSBtb2RlbFJlZHVjZXJLZXlzW2luZGV4XTtcbiAgICAgIGZpbmFsUmVkdWNlcltgJHtuYW1lU3BhY2V9LyR7cmV1ZGNlcktleX1gXSA9IG1vZGVsLnJlZHVjZXJzW3JldWRjZXJLZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKHN0YXRlID0gZGVmYXVsdFN0YXRlLGFjdGlvbik9PntcbiAgICBjb25zdCByZWR1Y2VyID0gZmluYWxSZWR1Y2VyW2FjdGlvbi50eXBlXTtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcbiAgICBpZiggcmVkdWNlciApe1xuICAgICAgY29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XG4gICAgICBjb25zdCBbIG1vZGVsTmFtZSBdID0gdHlwZS5zcGxpdChcIi9cIik7XG4gICAgICBuZXdTdGF0ZVttb2RlbE5hbWVdID0gcmVkdWNlcihzdGF0ZVttb2RlbE5hbWVdLC4uLnBheWxvYWQpO1xuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5sb2coXCLmnKrmib7liLDms6jlhoznmoRSZWR1Y2Vyc1wiKTtcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVqZWN0RGlzcGF0Y2ggPSAoZGlzcGF0Y2gsbW9kZWxzKT0+e1xuICBjb25zdCBuYW1lU3BhY2VzID0gT2JqZWN0LmtleXMobW9kZWxzKTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5hbWVTcGFjZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgbmFtZVNwYWNlID0gbmFtZVNwYWNlc1tpbmRleF07XG4gICAgY29uc3QgbW9kZWwgPSBtb2RlbHNbbmFtZVNwYWNlXTtcbiAgICAvL+aKiuaJgOacieaWueazleazqOWFpWRpc3BhdGNoXG4gICAgLy/kuLrmiYDmnIllZmZlY3Tnu5Hlrpp0aGlzXG4gICAgZGlzcGF0Y2hbbmFtZVNwYWNlXSA9IHsgLi4ubW9kZWxzLmVmZmVjdHMgfTtcbiAgICBjb25zdCBtb2RlbEVmZmVjdEtleXMgPSBPYmplY3Qua2V5cyhtb2RlbC5lZmZlY3RzKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbW9kZWxFZmZlY3RLZXlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgZWZmZWN0S2V5ID0gbW9kZWxFZmZlY3RLZXlzW2luZGV4XTtcbiAgICAgIGRpc3BhdGNoW25hbWVTcGFjZV1bZWZmZWN0S2V5XSA9IG1vZGVsLmVmZmVjdHNbZWZmZWN0S2V5XS5iaW5kKGRpc3BhdGNoW25hbWVTcGFjZV0pOyAgICAgIFxuICAgIH1cbiAgICAvL+abv+aNouaJgOaciXJlZHVjZXLmlrnms5VcbiAgICBjb25zdCBtb2RlbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMobW9kZWwucmVkdWNlcnMpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtb2RlbFJlZHVjZXJLZXlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgcmV1ZGNlcktleSA9IG1vZGVsUmVkdWNlcktleXNbaW5kZXhdO1xuICAgICAgY29uc3QgdHlwZSA9IGAke25hbWVTcGFjZX0vJHtyZXVkY2VyS2V5fWA7XG4gICAgICBkaXNwYXRjaFtuYW1lU3BhY2VdW3JldWRjZXJLZXldID0gKC4uLnBheWxvYWQpPT5kaXNwYXRjaCh7dHlwZSxwYXlsb2FkfSk7ICAgICAgXG4gICAgfVxuICB9XG4gIHJldHVybiBkaXNwYXRjaDtcbn1cblxubGV0IF9tb2RlbHMgPSBudWxsO1xuXG5jb25zdCBSZWR1eFRvb2wgPSB7XG4gIGluaXQgOiAobW9kZWxzKT0+e1xuICAgIF9tb2RlbHMgPSBtb2RlbHM7XG4gICAgcmV0dXJuIGluaXQoX21vZGVscyk7XG4gIH0sXG4gIGVqZWN0RGlzcGF0Y2ggOiAoZGlzcGF0Y2gpPT57XG4gICAgaWYoIV9tb2RlbHMpe1xuICAgICAgY29uc29sZS5sb2coXCLor7flhYjosIPnlKhSZWR1eFRvb2wuaW5pdCgp5rOo5YWlbW9kZWxzXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZighZGlzcGF0Y2gpe1xuICAgICAgY29uc29sZS5sb2coXCLor7fkvKDlhaVyZWR1eC9zdG9yZeeahGRpc3BhdGNo5pa55rOVXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlamVjdERpc3BhdGNoKGRpc3BhdGNoLF9tb2RlbHMpO1xuICB9XG59IFxuXG5leHBvcnQgZGVmYXVsdCBSZWR1eFRvb2w7Il0sInNvdXJjZVJvb3QiOiIifQ==