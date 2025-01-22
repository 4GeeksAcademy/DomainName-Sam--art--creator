/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".net", ".us", ".ie"];

  for (let a of pronoun) {
    for (let b of adj) {
      for (let c of noun) {
        for (let d of dom) {
          console.log(a + b + c + d);
        }
      }
    }
  }
};