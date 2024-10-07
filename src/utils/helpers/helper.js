import { CONSTANTS, LOCAL_STORAGE_SERVICE } from "../../utils";
import { store } from "../../store";

function capitalizeFirstLetter(string) {
  var val = "";
  if (isNotEmpty(string)) {
    val = string.charAt(0).toString().toUpperCase() + string.slice(1);
  }
  return val;
}

function capitalize(string) {
  var val = "";
  if (isNotEmpty(string)) {
    val = string.toString().toUpperCase();
  }
  return val;
}

function isEmpty(x) {
  return (
    typeof x === "undefined" ||
    x === null ||
    x === "null" ||
    x === "undefined" ||
    x === false ||
    x.length === 0 ||
    x === ""
  );
}

function isNotEmpty(x) {
  return !isEmpty(x);
}

function ucfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkLocalStorage(key, propVal) {
  let localStorageVal = LOCAL_STORAGE_SERVICE._getFromLocalStorage(key);
  return isNotEmpty(localStorageVal) ?  localStorageVal : propVal;
}

function wordCount(text) {
  return text.split(" ").length;
}

function getBodyDirection() {
  let bodyEl = document.querySelector("body");
  return bodyEl.getAttribute("dir");
}

function findInJson(object, value) {
  var record = object.filter(function (data) {
    return data.id === value;
  });
  return record[0];
}

function reverseObject(object) {
  let newObj = {};

  Object.keys(object)
    .sort()
    .reverse()
    .forEach((key) => {
      newObj[object[key]] = key;
    });

  return newObj;
}

const HELPER = {
  reverseObject,
  findInJson,
  getBodyDirection,
  wordCount,
  capitalizeFirstLetter,
  capitalize,
  checkLocalStorage,
  isNotEmpty,
  ucfirst,
};
export default HELPER;
