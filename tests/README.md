
# 🚀 BotBrowser Tests

Showcase how BotBrowser powers real-world automation tests with [Playwright](https://playwright.dev/docs/writing-tests).

## 🌐 Network Setup

All tests in this repository run under **Sticky Rotating Residential IPs** to mimic genuine user behavior. If you're experiencing blocks with data-center proxies, switch to **Sticky Rotating Residential IPs**.

---

## ⚠️ Disclaimer

These test scripts are provided for **educational purposes** and to **demonstrate** BotBrowser capabilities. They are intended solely for **legal use cases** that comply with all applicable laws and regulations.

**Any misuse**—such as violating website terms of service or engaging in unlawful activities—**is strictly prohibited.**

---

## 🔧 Getting Started

### Step 1: Environment Setup

Create a `.env` file in the project root with your BotBrowser configuration:

```bash
BOTBROWSER_EXEC_PATH=/absolute/path/to/botbrowser
BOT_PROFILE_PATH=/absolute/path/to/bot-profile.enc
```

**Example configuration:**
```bash
BOTBROWSER_EXEC_PATH=/usr/local/bin/chromium
BOT_PROFILE_PATH=/home/user/bot_profiles/chrome139_win11_x64.enc
```

**Required paths:**
- `BOTBROWSER_EXEC_PATH` → BotBrowser executable
- `BOT_PROFILE_PATH` → BotBrowser profile (.enc file)

### Step 2: Install & Run

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Generate detailed HTML report (optional)
npx playwright show-report
```

---

## 📝 Test Information

**Test Purpose:** These are proof-of-concept scripts demonstrating BotBrowser's capabilities.

**Responsibility:** Users must comply with relevant laws and target sites' terms of service.

### Troubleshooting

| Issue | Solution |
|-------|----------|
| 🛑 Blocked by data-center proxies | 🔄 Switch to Sticky-Session Rotating Residential IPs |
| ❌ Tests failing | ✅ Verify `.env` file paths and profile compatibility |
| 🐛 Browser crashes | 🔧 Check BotBrowser executable permissions |

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/docs/writing-tests)
- [BotBrowser Profile Configs](https://github.com/botswin/BotBrowser/blob/main/profiles/profile-configs.md)
- [Test Results & Reports](./test-results/)

## 🙏 Dependencies

This project uses the following open-source libraries:

| Package | Purpose |
|---------|---------|
| [dotenv](https://www.npmjs.com/package/dotenv) | Environment variable management |
| [ghost-cursor](https://www.npmjs.com/package/ghost-cursor) | Human-like cursor movements |
| [ghost-cursor-playwright](https://www.npmjs.com/package/ghost-cursor-playwright) | Playwright integration for realistic interactions |
