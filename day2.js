  var time = "12:12:12PM"
  var newTime, i, j;

  document.write(time," = ");
  if (time[8] == 'A' && time[9] == 'M'){
  newTime = time.slice(0,8);
  var i = parseInt(newTime.slice(0,2));
  var test = newTime.slice(2,8);
  if (i == 12)
    {
       i = i - 12;
      document.write(i,0,test);
    }
  else if (i < 12){
    document.write(newTime);
  }
    else{
      document.write("error");
    }
}
else if (time[8] == 'P' && time[9] == 'M'){
  newTime = time.slice(0,8);
  var test = newTime.slice(2,8);
  if (parseInt(newTime.slice(0,2)) == 12)
    {
      var i = parseInt(newTime.slice(0,2));
      document.write(i,test);
    }
  else if (parseInt(newTime.slice(0,2)) < 12){
    var i = parseInt(newTime.slice(0,2)) + 12;
    document.write(i,test);
  }
  else{
      document.write("error");
    }
}
else{
  document.write("error");
}
