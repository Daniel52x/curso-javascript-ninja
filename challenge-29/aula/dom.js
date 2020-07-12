(function( win, doc ){
    'use strict';

    function DOM(param){
        this.element = this.getDOMElements(param);
    }
    
    DOM.prototype.getDOMElements = function getDOMElements(param){
        return document.querySelectorAll(param)
    }
    
    DOM.prototype.on = function on(event,callback){
      Array.prototype.forEach.call(this.element,function(element){
        element.addEventListener(event,callback,false)
      });
     
    };
    
    DOM.prototype.off = function off(event,callback){
      Array.prototype.forEach.call(this.element,function(element){
        element.removeEventListener(event,callback,false)
      });
    };
    
    DOM.prototype.get = function get(event,func){
      return this.element
    };

    //forEach, map, filter, reduce, reduceRight, every e some.

    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element, arguments);
    };

    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply(this.element, arguments);
    };

    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply(this.element, arguments);
    };

    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element, arguments);
    };

    DOM.prototype.every = function every(){
        return Array.prototype.every.apply(this.element, arguments);
    };

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply(this.element, arguments);
    };

    DOM.prototype.isArray = function isArray(param){
        return Object.prototype.toString.call(param) === '[object Array]';
    };

    DOM.prototype.isObject = function isObject(param){
        return Object.prototype.toString.call(param) === '[object Object]';
    };

    DOM.prototype.isNumber = function isNumber(param){
        return Object.prototype.toString.call(param) === '[object Number]';
    };

    DOM.prototype.isNull = function isNull(param){
        return Object.prototype.toString.call(param) === '[object Null]' || Object.prototype.toString.call(param) === '[object Undefined]';
    };

    DOM.prototype.isFunction = function isFunction(param){
        return Object.prototype.toString.call(param) === '[object Function]';
    };

    DOM.prototype.isString = function isString(param){
        return Object.prototype.toString.call(param) === '[object String]';
    };

    
})();