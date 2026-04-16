const fs = require("fs");

async function getVerse() {
  try {
    const res = await fetch("https://bible-api.com/?random=verse");
    const data = await res.json();

    return {
      reference: data.reference,
      text: data.text.trim()
    };
  } catch (err) {
    return {
      reference: "Psalm 23:1",
      text: "The Lord is my shepherd; I shall not want."
    };
  }
}

function buildDevotional(ref, text) {
  return `${ref} — ${text}

Take a moment to reflect on this verse. God’s Word speaks into your life today, not just in the past.

Where can you apply this truth right now? Trust that God is present and working, even in small moments.

Carry this with you today.`;
}

function buildPrayer(ref) {
  return `Lord, thank You for Your Word in ${ref}. Help me live it out today and trust You more. Amen.`;
}

async function generate() {
  const verse = await getVerse();

  const content = {
    date: new Date().toISOString().split("T")[0],
    verse: `${verse.reference} — ${verse.text}`,
    devotional: buildDevotional(verse.reference, verse.text),
    prayer: buildPrayer(verse.reference)
  };

  fs.writeFileSync("today.json", JSON.stringify(content, null, 2));
  console.log("✅ Updated today.json");
}

generate();
