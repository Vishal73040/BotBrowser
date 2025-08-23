# ☕ BotBrowser + Playwright (Java)

This example shows how to use BotBrowser with Playwright in Java for undetectable browser automation.

## Prerequisites

- Java 11+
- Maven 3.6+
- BotBrowser executable and profile

## Setup

1. Set environment variables:
   ```bash
   export BOTBROWSER_EXEC_PATH="/path/to/botbrowser"
   export BOT_PROFILE_PATH="/path/to/profile.enc"
   ```

2. Install dependencies:
   ```bash
   mvn compile
   mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="install chromium"
   ```

## Run

```bash
mvn exec:java
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

> 📖 **For all available options, see [⚙️ CLI Flags Reference](../../../cli-flags.md)**