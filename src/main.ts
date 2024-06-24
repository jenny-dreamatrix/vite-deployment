import './style.css'
import * as lodash from "lodash"

console.log("test");

const names = ["Anna", "Ben", "Frank", "Suzy"]
const otherNames = ["Ben", "Joe", "Suzy", "Tom"]

// unionWith vereinigt zwei Arrays und nimmt nur die eindeutigen Werte (die doppelten fallen weg)
const uniqueNames = lodash.unionWith(names, otherNames)

console.log(uniqueNames);

const appDiv = document.getElementById("app")

if (appDiv) {
  appDiv.innerHTML = uniqueNames.join(", ")
}