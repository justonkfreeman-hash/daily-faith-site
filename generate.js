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

function buildDevotional(verseRef, verseText) {
  return `
${verseRef} — ${verseText}

Take a moment to slow down and really read this verse again.

What does this reveal about who God is? Scripture reminds us that God is not distant—He is present, active, and deeply involved in our lives. Even when circumstances feel uncertain, His Word gives us truth we can stand on.

Today, consider how this verse applies to your current situation. Where do you need to trust Him more? Where can you let go of control and allow Him to lead?

God is not just speaking through this verse—He is inviting you to walk with Him through it.

Carry this truth with you today.
`.trim();
}

function buildPrayer(verseRef) {
  return `
Lord, thank You for Your Word and the truth found in ${verseRef}.
Help me not just read it, but live it out today.

Teach me to trust You more, especially in the areas where I feel uncertain.
Guide my thoughts, my decisions, and my actions.

Let this truth stay with me throughout the day.

Amen.
`.trim();
}

async function generate() {
  const verseData = await getVerse();

  const content = {
    date: new Date().toISOString().split("T")[0],
    verse: `${verseData.reference} — ${verseData.text}`,
    devotional: buildDevotional(verseData.reference, verseData.text),
    prayer: buildPrayer(verseData.reference)
  };

  fs.writeFileSync("today.json", JSON.stringify(content, null, 2));

  console.log("✅ High-quality devotional generated");
}

generate();
