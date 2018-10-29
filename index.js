
function findMatching(drivers, string){
  return drivers.filter(drivers => drivers.toLowerCase() === string.toLowerCase())
}
// function findMatching(drivers, name) {
//   return drivers.filter(function (driverName) {
//     return driverName.toLowerCase() === name.toLowerCase()
//   })
// }
function fuzzyMatch(drivers, letters){
  let nameLength = letters.length
  return drivers.filter(driver => driver.slice(0, nameLength) === letters)
}
//   function fuzzyMatch(drivers, name) {
//   return drivers.filter(function (driverInitial) {
//     return driverInitial[0] === name[0]
//   })
// }

function matchName(drivers, name){
  return drivers.filter(driver => driver.name === name)
}
// function matchName(drivers, name) {
//   return drivers.filter(function (driverObject) {
//     return driverObject.name === name
//   })
// }
