// Create monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
var monitorsList = [];
// End of monitorsListArray array

function myMonitorsFunction(arr) {
  var newMonitorsList = [];
  // Only change code below this line
  for (i = 0; i < arr.length; i++) {
    newMonitorsList.push([arr[i], i + 1]);
  }

  return newMonitorsList;
  // Only change code above this line
}
console.log(myMonitorsFunction(monitorsListArray));

module.exports = myMonitorsFunction;
