# BotBrowser Script Automation Examples

Framework‑less automation using BotBrowser’s native `--bot-script` feature.

⚠️ Research use only: These examples are for academic research and authorized testing. They are not intended to bypass security systems or access production services without permission.

## What Is `--bot-script`?

`--bot-script` executes JavaScript in a privileged, non‑extension context where the `chrome.debugger` API is available. This provides:

- **No framework dependencies** - Pure Chrome DevTools Protocol access
- **Earlier intervention** - Execute before page navigation
- **Privileged context** - Full `chrome.debugger` API access
- **Reduced detection surface** - No Playwright/Puppeteer artifacts

## Usage

```bash
./chrome.exe --no-sandbox --bot-profile="/absolute/path/to/profile.enc" --bot-script="your-script.js"
```

## Examples

### Cloudflare Turnstile Automation
**File:** `cloudflare-turnstile.js`

Demonstrates automated handling of Cloudflare Turnstile challenges using:
- `chrome.debugger.getTargets()` - Find challenge frames
- `chrome.debugger.attach()` - Attach to targets
- `chrome.debugger.sendCommand()` - Send CDP commands
- Mobile device detection and touch event emulation
- Direct coordinate clicking

**Usage:**
```bash
./chrome.exe --no-sandbox --bot-profile="/absolute/path/to/chrome139_android.enc" --bot-script="cloudflare-turnstile.js"
```

## Key APIs Available

Because scripts run in a privileged context, you have access to:

- **`chrome.debugger`** - Full Chrome DevTools Protocol access
- **`chrome.runtime`** - Runtime APIs
- Standard browser APIs (console, setTimeout, etc.)

## Best Practices

1. Error handling — always check `chrome.runtime.lastError`
2. Target management — track active targets to avoid duplicates
3. Resource cleanup — detach from the debugger when done
4. Timing control — use appropriate delays between actions

## Documentation

📖 **Chrome Debugger API:** https://developer.chrome.com/docs/extensions/reference/api/debugger/

📖 **Chrome DevTools Protocol:** https://chromedevtools.github.io/devtools-protocol/

---

**📋 [Legal Disclaimer & Terms of Use](https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md)**
