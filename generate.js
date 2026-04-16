const fs = require("fs");

function getRandomVerse() {
  const verses = [
    "Philippians 4:13 — I can do all things through Christ who strengthens me.",
    "Isaiah 41:10 — Fear not, for I am with you.",
    "Proverbs 3:5 — Trust in the Lord with all your heart.",
    "Psalm 23:1 — The Lord is my shepherd; I shall not want."
  ];

  return verses[Math.floor(Math.random() * verses.length)];
}

function buildDevotional(verse) {
  return `Today's verse is: ${verse}

Take a moment to reflect on what this means in your life today.

God is reminding you that you are not alone, and His strength is enough for every situation you face.

Walk in faith today, not fear.`;
}

function buildPrayer() {
  return `Lord, thank You for Your Word today.
Help me trust You more and walk in Your truth.

Guide my steps and strengthen my faith.

Amen.`;
}

function generate() {
  const verse = getRandomVerse();

  const content = {
    date: new Date().toISOString().split("T")[0],
    verse,
    devotional: buildDevotional(verse),
    prayer: buildPrayer()
  };

  fs.writeFileSync("today.json", JSON.stringify(content, null, 2));

  console.log("✅ today.json updated");
}

generate();
