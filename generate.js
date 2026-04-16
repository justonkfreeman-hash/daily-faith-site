const fs = require("fs");

const getVerse = require("./verse");
const buildDevotional = require("./devotional");
const buildPrayer = require("./prayer");

function generate() {
  const verse = getVerse();

  const content = {
    date: new Date().toISOString().split("T")[0],
    verse,
    devotional: buildDevotional(verse),
    prayer: buildPrayer(verse)
  };

  fs.writeFileSync("today.json", JSON.stringify(content, null, 2));

  console.log("✅ Generated daily content");
}

generate();
