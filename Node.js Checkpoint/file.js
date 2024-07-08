const fs = require("fs");

fs.readFile("welcome.txt", function (err, data) {
  if (err) console.error(err);
  else console.log(data.toString());
});
