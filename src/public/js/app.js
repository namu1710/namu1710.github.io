!function r(n,t,l){function F(e,i){if(!t[e]){if(!n[e]){var s="function"==typeof require&&require;if(!i&&s)return s(e,!0);if(m)return m(e,!0);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}var c=t[e]={exports:{}};n[e][0].call(c.exports,function(i){return F(n[e][1][i]||i)},c,c.exports,r,n,t,l)}return t[e].exports}for(var m="function"==typeof require&&require,i=0;i<l.length;i++)F(l[i]);return F}({1:[function(i,e,s){"use strict";$(document).ready(function(){$(".slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,dots:!0}),$("#item-1").click(function(){$(this).children().css("color","#E0BE65"),$("#item-2").children().css("color","#FFFFFF"),$("#item-3").children().css("color","#FFFFFF"),$("#img-item-3").css("display","none"),$("#img-item-2").css("display","none"),$("#img-item-1").slideToggle()}),$("#item-2").click(function(){$(this).children().css("color","#E0BE65"),$("#item-1").children().css("color","#FFFFFF"),$("#item-3").children().css("color","#FFFFFF"),$("#img-item-1").css("display","none"),$("#img-item-3").css("display","none"),$("#img-item-2").slideToggle()}),$("#item-3").click(function(){$(this).children().css("color","#E0BE65"),$("#item-1").children().css("color","#FFFFFF"),$("#item-2").children().css("color","#FFFFFF"),$("#img-item-1").css("display","none"),$("#img-item-2").css("display","none"),$("#img-item-3").slideToggle()}),$(".burger-menu").click(function(){$(this).toggleClass("active-menu"),$(".mobile-list").slideToggle()})})},{}]},{},[1]);
//# sourceMappingURL=maps/app.js.map