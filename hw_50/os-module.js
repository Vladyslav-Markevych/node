import os from "os";
import { writeFile, readFile } from "fs";

export function write() {
  const systemInfo = `
    Platform: ${os.platform()}
    Arch: ${os.arch()}
    Number of CPUs: ${os.cpus().length}
    Total Memory: ${(os.totalmem() / 1024 ** 3).toFixed(2)} GB
    Free Memory: ${(os.freemem() / 1024 ** 3).toFixed(2)} GB
    `;

  writeFile("result.txt", systemInfo, "utf8", (err) => {
    if (err) {
      console.error("Error:", err);
    } else {
      console.log("Saved");
    }
  });
}

export function read() {
  readFile("result.txt", "utf-8", (err, data) => {
    if (err) console.log(err);

    console.log(data);
  });
}
