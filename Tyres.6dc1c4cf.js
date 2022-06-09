// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Focm":[function(require,module,exports) {
var car = document.getElementById('car');
car.addEventListener('click', function () {
  document.location.href = 'car-suv-tyres.html';
}); // gsap.registerPlugin(ScrollTrigger);
// const sections = gsap.utils.toArray("section");
// const lastIndex = sections.length - 1;
// sections.forEach((section, i) => {
//   section._bg = section.querySelector(".bg");
//   section._h1 = section.querySelector("h1");
//   section._h3 = section.querySelector("h3");
//   section._h4 = section.querySelector("h4");
//   ScrollTrigger.create({ 
//     trigger: section,
//     start: ()=> i==0 ? "top top" : "top bottom", // The FIRST section will use a different start value than the rest
//     end: ()=> i==lastIndex ? "top top" : "bottom top", // The LAST section will use a different start value than the rest    
//     onRefresh: self => { // onRefresh (so it gets reset upon resize), create a timeline that moves the h1 + bg vertically      
//       section._tl = gsap.timeline({paused:true, defaults:{ease:'none', overwrite:'auto'}}) 
//       .fromTo(section._h1, {y:()=> i==0 ? 0 : (innerHeight/2)*1.25}, {y:()=> i==lastIndex ? 0 : (-innerHeight/2)*1.5}, 0)
//       .fromTo(section._h3, {x:()=> i==0 ? 0 : (innerHeight/2)*1.5}, {x:()=> i==lastIndex ? 0 : (-innerHeight/2)*1.5}, 0)
//       .fromTo(section._h4, {y:()=> i==0 ? 0 : (innerHeight/2)*2}, {y:()=> i==lastIndex ? 0 : (-innerHeight/2)*1.5}, 0)
//       .fromTo(section._bg, {y:()=> i==0 ? -innerHeight/2 : 0}, {y:()=> i==lastIndex ? -innerHeight/2 : -innerHeight}, 0)	  	  
//       .progress(self.progress); //use progress to position the timeline correctly      
//     },
//     onUpdate: self => { gsap.to(section._tl, {duration:0.75, progress:self.progress}); }
//   });
// });
},{}]},{},["Focm"], null)