
exports.min = function min (array) {
 
  if (Array.isArray(array) && array.length) {
    // array exists and is not empty
    var min = array[0];

  for (i=0; i<array.length; i++) {

    if (typeof(array[i])!=="number") return 0;

    if (array[i]<min) min = array[i];

  }
  return min;
  } else {
    return 0;
  }
  
  
}


exports.max = function max (array) {
  
  if (Array.isArray(array) && array.length) {
    let max = array[0];
  
  for (i=0; i<array.length; i++) {
    if (typeof(array[i])!=="number") return 0;

    if (array[i]>max) max = array[i];

  }
  return max;
  } else {
    return 0;
  }  
  
}

exports.avg = function avg (array) {
  
  if (Array.isArray(array) && array.length) {
    let l = (array.length);
  
  let summ = 0;
  
   

  for (i=0; i<array.length; i++) {
    if (typeof(array[i])!=="number") return 0;
    summ += array[i];
  }

  let avg = summ/l;

  return avg;
  } else {
    return 0;
  }
  
  
}
