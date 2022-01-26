const removeFromArray = function(arr) {
  let args = Array.prototype.slice.call(arguments);
  args.shift();
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}
// Do not edit below this line
module.exports = removeFromArray;
