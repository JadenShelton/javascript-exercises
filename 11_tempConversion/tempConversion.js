const convertToCelsius = function(temperature) {
   let newTemp = ((temperature - 32) * (5 / 9));
   if(Number.isInteger(newTemp)){
    return newTemp;
   } else {
    return Number(newTemp.toFixed(1));
   }
};

const convertToFahrenheit = function(temperature) {
  let newTemp = (temperature * (9 / 5) + 32);
  if(Number.isInteger(newTemp)){
    return newTemp;
  } else {
    return Number(newTemp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
