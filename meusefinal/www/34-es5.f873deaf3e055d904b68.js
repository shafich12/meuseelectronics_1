(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{uz1i:function(n,t,o){"use strict";o.r(t),o.d(t,"startFocusVisible",(function(){return i}));var e=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],i=function(){var n=[],t=!0,o=document,i=function(t){n.forEach((function(n){return n.classList.remove("ion-focused")})),t.forEach((function(n){return n.classList.add("ion-focused")})),n=t},s=function(){t=!1,i([])};o.addEventListener("keydown",(function(n){(t=e.includes(n.key))||i([])})),o.addEventListener("focusin",(function(n){if(t&&n.composedPath){var o=n.composedPath().filter((function(n){return!!n.classList&&n.classList.contains("ion-focusable")}));i(o)}})),o.addEventListener("focusout",(function(){o.activeElement===o.body&&i([])})),o.addEventListener("touchstart",s),o.addEventListener("mousedown",s)}}}]);