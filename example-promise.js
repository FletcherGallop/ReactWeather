// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City Not Found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('Error', err);
//   } else {
//     console.log('Success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject){
//     resolve(79);
//     reject('City Not Found');
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp){
//   console.log('Promise Success', temp);
// }, function (err) {
//   console.log('Promise Error', err);
// })

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b ==='number'){
      resolve(a+b);
    } else {
      reject("A and B need to be numbers");
    }
  });
}

addPromise(2, 3).then(function (sum) {
  console.log('Success', sum);
}, function (err) {
  console.log('Error', err);
});

addPromise('andrew', 9).then(function (sum) {
  console.log("Shouldn't show");
}, function(err) {
  console.log("This should show", err);
});
