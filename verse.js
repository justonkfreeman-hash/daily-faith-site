async function getVerse() {
  try {
    const res = await fetch("https://bible-api.com/?random=verse");

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    return `${data.reference} — ${data.text.trim()}`;
  } catch (err) {
    // fallback so your site NEVER breaks
    const fallback = [
      "Philippians 4:13 — I can do all things through Christ who strengthens me.",
      "Isaiah 41:10 — Fear not, for I am with you.",
      "Psalm 23:1 — The Lord is my shepherd; I shall not want.",
      "Proverbs 3:5 — Trust in the Lord with all your heart."
    ];

    return fallback[Math.floor(Math.random() * fallback.length)];
  }
}

module.exports = getVerse;
