var moment = require('moment');

//var date = moment();
//date.add(1, 'year').substract(9, 'months');
//console.log(date.format('MMM Do, YYYY'));

// 10:25 am
// 6:01 am

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('LT'));
console.log(date.format('h:m a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
