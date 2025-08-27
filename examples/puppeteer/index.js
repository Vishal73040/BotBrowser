import puppeteer from "puppeteer-core";

const BOTBROWSER_EXEC_PATH = process.env.BOTBROWSER_EXEC_PATH; // Absolute path to the BotBrowser executable
const BOT_PROFILE_PATH = process.env.BOT_PROFILE_PATH; // Absolute or relative path to the profile

const browser = await puppeteer.launch({
  browser: "chrome",
  executablePath: BOTBROWSER_EXEC_PATH,
  headless: false, // Set to true for production
  ignoreDefaultArgs: [
    "--no-startup-window",
    "--disable-crash-reporter",
    "--disable-crashpad-for-testing",
    "--disable-gpu-watchdog",
  ],
  args: [
    "--no-sandbox",
    "--disable-blink-features=AutomationControlled",
    "--disable-audio-output",
    `--bot-profile=${BOT_PROFILE_PATH}`,
    // ⚠️ PROXY CONFIGURATION:
    // Use --proxy-server flag instead of page.authenticate() or puppeteer proxy options
    // This ensures BotBrowser can retrieve geo information from proxy IP for accurate timezone/locale
    // '--proxy-server=http://user:pass@proxy.com:8080',
    // '--proxy-server=socks5://user:pass@proxy.com:1080',
  ],
});

const page = await browser.newPage();
await page.goto("https://abrahamjuliot.github.io/creepjs/");
