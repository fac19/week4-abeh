let counter = 0;
let controlObject = {}
function increment() {
 counter++
}
function getCount() {
 return counter
}
module.exports = {getCount, increment, controlObject };