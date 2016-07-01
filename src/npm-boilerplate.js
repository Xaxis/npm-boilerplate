/**
 * A basic module definition.
 */
var npmBoilerplate = (function(mod) {

  mod.method1 = function(a, b) {
    return a * b;
  };

  return {
    method1: mod.method1
  };

}(npmBoilerplate || {}));

// Below is required once to support AMD & CommonJS
if (typeof define === 'function' && define.amd) {
  define('npm-boilerplate', npmBoilerplate);
} else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
  module.exports = npmBoilerplate;
}
