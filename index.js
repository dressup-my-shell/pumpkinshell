const chalk = require("chalk");

const pumpkinOrange = chalk.hex("#FF7518");
const ghostWhite = chalk.hex("#F8F8FF");
const witchPurple = chalk.hex("#800080");
const batBlack = chalk.hex("#1C1C1C");
const candlYellow = chalk.hex("#FFD700");

const spookyGlyphs = ["🎃", "👻", "🕸️", "🧛", "🌙"];

function randomGlyph() {
  return spookyGlyphs[Math.floor(Math.random() * spookyGlyphs.length)];
}

function generateCobweb(width) {
  let web = "";
  const chars = [".", "*", "~", "."];
  for (let i = 0; i < width; i++) {
    const c = chars[i % chars.length];
    web += (i % 2 === 0 ? witchPurple(c) : batBlack(c)) + " ";
  }
  return web;
}

function getPrompt(cwd) {
  const glyph = randomGlyph();
  const dir = pumpkinOrange(cwd || process.cwd());
  const arrow = witchPurple(">");
  return `${glyph} ${dir} ${arrow} `;
}

function getBanner() {
  const lines = [
    generateCobweb(25),
    "",
    pumpkinOrange.bold("    pumpkinshell v0.9.0"),
    witchPurple("    trick or terminal"),
    "",
    candlYellow("    " + spookyGlyphs.join("  ")),
    "",
    generateCobweb(25),
  ];
  return "\n" + lines.join("\n") + "\n";
}

function getPS1() {
  return `🎃 \\[\\033[38;5;208m\\]\\w \\[\\033[38;5;90m\\]>\\[\\033[0m\\] `;
}

function getSpookyGreeting() {
  const greetings = [
    "Something wicked this way compiles...",
    "Boo! Your terminal has been haunted.",
    "Welcome, mortal. Enter if you dare.",
    "The spirits of the shell awaken...",
    "Beware the bugs that lurk within...",
  ];
  return ghostWhite(greetings[Math.floor(Math.random() * greetings.length)]);
}

module.exports = { getPrompt, getBanner, getPS1, generateCobweb, getSpookyGreeting };

