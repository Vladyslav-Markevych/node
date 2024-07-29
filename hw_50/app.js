import { systemInfo } from "./os-module.js";
import { writeFile, readFile } from "fs";

function write(item) {
  writeFile("result.txt", item, "utf8", (err) => {
    if (err) {
      console.error("Error:", err);
    } else {
      console.log("Saved");
    }
  });
}

function read() {
  readFile("result.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}

function startApp() {
  const dataInfo = systemInfo();
  write(dataInfo);
  read();
}

startApp();
