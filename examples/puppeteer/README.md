# 🎪 BotBrowser + Puppeteer (Node.js)

This example shows how to use BotBrowser with Puppeteer in Node.js for undetectable browser automation.

## Prerequisites

- Node.js 16+
- BotBrowser executable and profile

## Setup

1. Set environment variables:
   ```bash
   export BOTBROWSER_EXEC_PATH="/path/to/botbrowser"
   export BOT_PROFILE_PATH="/path/to/profile.enc"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Run

```bash
node index.js
```

## Features

- **🌍 Auto-configured:** Timezone, locale, and languages are automatically set based on your IP/proxy
- **🔒 Stealth mode:** Removes automation detection automatically
- **🎭 Real profiles:** Uses authentic user fingerprints for maximum stealth

## Advanced Configuration (Optional)

BotBrowser works great with defaults, but you can override settings if needed:

```bash
# Common customization examples
chromium-browser \
  --bot-profile="./profile.enc" \
  --proxy-server="http://user:pass@proxy.example.com:8080" \
  --bot-config-browser-brand="edge" \
  --bot-config-webgl="disabled" \
  --bot-config-noise-canvas=true \
  --bot-title="My Session" \
  --headless
```

> 📖 **For all available options, see [⚙️ CLI Flags Reference](../../cli-flags.md)**