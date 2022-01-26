const ftoc = function(x) {
    let celsius = (x - 32)*(5/9);
    let rounded = Math.round(celsius * 10) / 10;
    return rounded;
};

const ctof = function(y) {
  let farenheit = y * (9/5) + 32;
  let rounded = Math.round(farenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
