import os from "os";

function convertByteToGB(byte) {
  return (byte / 1024 ** 3).toFixed(2);
}

export const systemInfo = () => {
  return `
Platform: ${os.platform()}
Arch: ${os.arch()}
Number of CPUs: ${os.cpus().length}
Total Memory: ${convertByteToGB(os.totalmem())} GB
Free Memory: ${convertByteToGB(os.freemem())} GB
`;
};
