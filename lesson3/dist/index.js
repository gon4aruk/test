import "core-js/modules/es.array.flat.js";
import "core-js/modules/es.promise.finally.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.object.to-string.js";
var data = [1, 2, [3, 4, [5, 6]]];
var result = data.flat(2);
console.log(result);
Promise.resolve().finally();