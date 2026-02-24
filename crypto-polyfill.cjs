const crypto = require("node:crypto");
if (!crypto.hash) {
  crypto.hash = function (algorithm, data, encoding) {
    const buf = typeof data === "string" ? Buffer.from(data, "utf8") : Buffer.from(data);
    const hex = crypto.createHash(algorithm.replace("-", "")).update(buf).digest("hex");
    return encoding === "hex" ? hex : hex;
  };
}
