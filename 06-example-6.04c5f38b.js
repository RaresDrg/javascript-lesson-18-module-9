const o=o=>new Promise((e=>{setTimeout((()=>{e(o)}),o)})),e=[o(2e3),o(5e3),o(500)];Promise.all(e).then((o=>{console.log(o),console.log("All promises")})),Promise.race(e).then((o=>{console.log(o),console.log("Race promises")}));
//# sourceMappingURL=06-example-6.04c5f38b.js.map
