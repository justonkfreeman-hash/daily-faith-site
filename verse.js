function getVerse() {
  const verses = [
    "Philippians 4:13 — I can do all things through Christ who strengthens me.",
    "Isaiah 41:10 — Fear not, for I am with you.",
    "Proverbs 3:5 — Trust in the Lord with all your heart.",
    "Psalm 23:1 — The Lord is my shepherd; I shall not want.",
    "Romans 8:28 — All things work together for good."
  ];

  return verses[Math.floor(Math.random() * verses.length)];
}

module.exports = getVerse;
