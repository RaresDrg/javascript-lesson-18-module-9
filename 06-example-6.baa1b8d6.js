!function(){var o=function(o){return new Promise((function(n){setTimeout((function(){n(o)}),o)}))},n=[o(2e3),o(5e3),o(500)];Promise.all(n).then((function(o){console.log(o),console.log("All promises")})),Promise.race(n).then((function(o){console.log(o),console.log("Race promises")}))}();
//# sourceMappingURL=06-example-6.baa1b8d6.js.map
