const fs = require("fs");

const content = {
  date: new Date().toISOString(),
  verse: "TEST VERSE " + Math.random(),
  devotional: "TEST DEVOTIONAL",
  prayer: "TEST PRAYER"
};

fs.writeFileSync("today.json", JSON.stringify(content, null, 2));

console.log("✅ TEST WRITE COMPLETE");
