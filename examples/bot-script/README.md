# BotBrowser Script Automation Examples

**Framework-less automation using BotBrowser's native `--bot-script` feature**

⚠️ **Research Use Only:** These automation examples are for academic research and authorized testing environments only. Not intended for bypassing security systems or unauthorized access to production services.

## What is `--bot-script`?

BotBrowser's `--bot-script` allows you to execute JavaScript code in a **privileged, non-extension context** where the `chrome.debugger` API is available. This provides:

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

Since your script runs in a privileged context, you have access to:

- **`chrome.debugger`** - Full Chrome DevTools Protocol access
- **`chrome.runtime`** - Runtime APIs
- Standard browser APIs (console, setTimeout, etc.)

## Best Practices

1. **Error Handling** - Always check `chrome.runtime.lastError`
2. **Target Management** - Track active targets to avoid duplicates
3. **Resource Cleanup** - Detach from debugger when done
4. **Timing Control** - Use appropriate delays for actions

## Documentation

📖 **Chrome Debugger API:** https://developer.chrome.com/docs/extensions/reference/api/debugger/

📖 **Chrome DevTools Protocol:** https://chromedevtools.github.io/devtools-protocol/

## Academic Use Disclaimer

⚠️ **These examples are for academic research and authorized testing environments only.** Any use outside of authorized research is strictly prohibited.