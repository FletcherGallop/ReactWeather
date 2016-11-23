var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('ForEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowfunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));

var person = {
  name: 'Andrew',
  greet: function () {
    names.forEach((name) => {
        console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();
