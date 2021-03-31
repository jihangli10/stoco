const findMaxMinDate = (...arg) => {
  var numDates = arg.map(item => {
    return (new Date(item)).getTime();
  });
  var indexMax = numDates.indexOf(Math.max(...numDates));
  var indexMin = numDates.indexOf(Math.min(...numDates));
  return [arg[indexMax], arg[indexMin]];
}

console.log(findMaxMinDate("2012-01-30", "2006-05-01", "2021-04-18"))