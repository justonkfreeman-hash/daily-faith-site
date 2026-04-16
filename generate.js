permissions:
  contents: write

const fs = require("fs");
const getVerse = require("./verse");
const buildDevotional = require("./devotional");
const buildPrayer = require("./prayer");

async function generate() {
  const verse = await getVerse();

  const content = {
    date: new Date().toISOString().split("T")[0],
    verse,
    devotional: buildDevotional(verse),
    prayer: buildPrayer(verse)
  };

  fs.writeFileSync("./today.json", JSON.stringify(content, null, 2));

  console.log("✅ Generated with real Bible API verse");
}

generate();
