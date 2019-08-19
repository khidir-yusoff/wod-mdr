/* Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.*/

var inputArray = [3,6,-2,-5,7,3];
var num = inputArray.length;
var value1, value2, total;
var high = 0, valuehigh1, valuehigh2;

for (i = 0; i < num; i+=2){
      value1 = inputArray[i];
      value2 = inputArray[i+1];
  
      total = value1 * value2;
      
      if (total > high)
        {
          high = total;
          valuehigh1 = value1;
          valuehigh2 = value2;
        }
}

document.write(high);
document.write("<br>")
document.write(valuehigh1 + " and " + valuehigh2);
