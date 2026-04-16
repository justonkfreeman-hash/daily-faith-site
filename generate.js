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

Take a moment to slow down and reflect on this verse.

God’s Word is not just information—it is guidance for your life today. Think about what this verse is revealing about God’s character and your current situation.

Where do you need to trust Him more today? What are you holding onto that you can release to Him?

Walk through today remembering that God is already ahead of you.`;
}

function buildPrayer(ref) {
  return `Lord, thank You for speaking through ${ref}.
Help me not just read Your Word, but live it today.

Give me faith to trust You in every situation I face.
Guide my thoughts, decisions, and actions.

Amen.`;
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

  console.log("✅ today.json updated successfully");
}

generate();
