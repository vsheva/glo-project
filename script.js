"use strict";

const word1 = function (str) {
  if (str !== "String") {
    console.log("Это не строка");
    return;
  }
  str = str.trim();
  if (str.length > 30) {
    return str.slice(0, 30) + "...";
  } else {
    return str;
  }
};
