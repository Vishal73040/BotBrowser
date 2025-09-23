# 🚀 BotBrowser CLI Flags Reference

**For Academic and Authorized Testing Environments**

This document provides **BotBrowser's CLI configuration system** for authorized testing and academic environments. These flags extend standard Chromium capabilities, providing **comprehensive control** over browser fingerprints without modifying profile files.

⚠️ **Usage Policy:** These configuration options are designed for academic study, security analysis, and authorized testing environments only. Use in compliance with institutional policies and applicable laws.

> 🌍 **Smart Auto-Configuration:** BotBrowser automatically detects timezone, locale, and languages from your IP/proxy. Override only when needed for specific use cases.

> ⚡ **Dynamic Configuration:** 20+ [`--bot-config-*` flags](#⚙️-profile-configuration-override-flags) provide runtime fingerprint configuration - suitable for authorized testing environments, CI/CD, and multi-instance setups.

## 📋 Table of Contents

- [🎯 Core BotBrowser Flags](#-core-botbrowser-flags)
- [🌐 Enhanced Proxy Configuration](#-enhanced-proxy-configuration)
- [🎨 BotBrowser Customization](#-botbrowser-customization)
- [⚙️ Profile Configuration Override Flags](#️-profile-configuration-override-flags)
- [📝 Usage Examples](#-usage-examples)

---

## 🎯 Core BotBrowser Flags

### `--bot-profile`
**The foundation of BotBrowser compatibility features**

Specifies the path to the BotBrowser profile file (.enc).

```bash
--bot-profile="/path/to/chrome139_win11_x64.enc"
```

**Notes:**
- Profile determines the browser fingerprint, OS emulation, and compatibility features
- Use profiles from [profiles directory](profiles/) or contact support for custom profiles
- This is what makes BotBrowser different from regular Chromium

---

## 🌐 Enhanced Proxy Configuration

### Enhanced `--proxy-server` with Embedded Credentials
**BotBrowser enhancement for simplified proxy authentication**

BotBrowser enhanced the standard `--proxy-server` flag to accept embedded credentials directly in the URL.

⚠️ **These options are for authorized network testing environments only. They must not be used for unauthorized data collection.**

```bash
# HTTP/HTTPS proxy with credentials
--proxy-server="http://username:password@proxy.example.com:8080"
--proxy-server="https://username:password@proxy.example.com:8080"

# SOCKS5 proxy with credentials
--proxy-server="socks5://username:password@proxy.example.com:1080"
```

**Supported protocols:** HTTP, HTTPS, SOCKS5

### `--proxy-ip`
**Specify proxy's public IP to optimize performance**

Provide the proxy's public IP address to skip per-page IP lookups, improving page load performance.

```bash
--proxy-ip="203.0.113.1"
```

**Benefits:**
- Eliminates IP detection overhead on each page load
- Faster browsing when using proxies
- Combine with `--bot-config-timezone` for consistent region emulation


⚠️ **Important:**
- **Browser-level proxy:** Use `--proxy-server` flag for consistent geo-detection across all contexts
- **Per-context proxy:** You can set different proxies via `createBrowserContext({ proxy: {...} })` - BotBrowser supports both approaches and automatically retrieves geo information for timezone/locale configuration in both cases
- **Avoid:** Framework-specific options like `page.authenticate()` which bypass BotBrowser's geo-detection system

---

## 🎨 BotBrowser Customization

### `--bot-title`
**Custom browser identification and session management**

Sets custom browser window title and taskbar/dock icon label.

```bash
--bot-title="MyBot Session 1"
--bot-title="Research Session"
```

**Features:**
- Appears in window title bar
- Shows on taskbar/dock icon
- Displays as label next to toolbar Refresh button
- Useful for managing multiple browser instances

### `--bot-cookies`
**Session restoration and cookie management**

Accepts a JSON string containing cookie data for startup.

```bash
--bot-cookies='[{"name":"session","value":"abc123","domain":".example.com"}]'
```

### `--bot-bookmarks`
**Pre-populate bookmarks for test session consistency**

Accepts a JSON string containing bookmark data for startup.

```bash
--bot-bookmarks='[{"title":"Example","type":"url","url":"https://example.com"},{"title":"Folder","type":"folder","children":[{"title":"Example","type":"url","url":"https://example.com"}]}]'
```

### `--bot-script`
**Framework-less automation with privileged JavaScript context**

Execute a JavaScript file right after BotBrowser starts in a privileged, non-extension context where `chrome.debugger` is available.

```bash
--bot-script="/path/to/automation.js"
```

**Key Features:**
- **No framework dependencies** - Pure Chrome DevTools Protocol access
- **Earlier intervention** - Execute before page navigation
- **Privileged context** - Full `chrome.debugger` API access
- **Reduced detection surface** - No Playwright/Puppeteer artifacts

📖 **Documentation:** Chrome `chrome.debugger` API - <https://developer.chrome.com/docs/extensions/reference/api/debugger/>

📖 **Examples:** [Bot Script Automation](examples/bot-script)

---

## ⚙️ Profile Configuration Override Flags

**High-priority configuration overrides - these CLI flags override any profile settings**

BotBrowser now supports command-line flags that override profile configuration values with the highest priority. These flags start with `--bot-config-` and directly map to profile `configs` properties.

> 💡 **Recommended Approach:** Use these CLI flags instead of modifying profile files. They provide the highest priority and don't require editing profile JSON files.

### Available Configuration Override Flags

The following `--bot-config-*` flags correspond directly to profile `configs` properties:

```bash
--bot-config-browser-brand=chrome             # Browser brand: chrome, chromium, edge, brave
--bot-config-color-scheme=light               # Color scheme: light, dark
--bot-config-disable-debugger=true            # Disable JavaScript debugger: true, false
--bot-config-disable-device-scale-factor=true # Disable device scale factor: true, false
--bot-config-fonts=profile                    # Font settings: profile (use profile fonts), real (system fonts)
--bot-config-inject-random-history=true       # Inject random history: true, false
--bot-config-keyboard=profile                 # Keyboard settings: profile (emulated), real (system keyboard)
--bot-config-languages=auto                   # Languages: "lang1,lang2" (comma-separated) or "auto" (IP-based)
--bot-config-locale=auto                      # Browser locale: e.g. en-US, fr-FR, de-DE, or "auto" (derived from IP/language)
--bot-config-location=40.7128,-74.0060        # Location: "lat,lon" (coordinates) or "auto" (IP-based)
--bot-config-media-devices=profile            # Media devices: profile (fake devices), real (system devices)
--bot-config-noise-audio-context=true         # Audio context noise: true, false
--bot-config-noise-canvas=true                # Canvas fingerprint noise: true, false
--bot-config-noise-client-rects=false         # Client rects noise: true, false
--bot-config-noise-text-rects=true            # Text rects noise: true, false
--bot-config-noise-webgl-image=true           # WebGL image noise: true, false
--bot-config-screen=profile                   # Screen properties: profile (use profile), real (system screen)
--bot-config-speech-voices=profile            # Speech voices: profile (synthetic), real (system voices)
--bot-config-timezone=auto                    # Timezone: auto (IP-based), real (system), or timezone name
--bot-config-ua-full-version=140.0.7339.81    # User agent version: full version string matching Chromium major
--bot-config-webgl=profile                    # WebGL: profile (use profile), real (system), disabled (off)
--bot-config-webgpu=profile                   # WebGPU: profile (use profile), real (system), disabled (off)
--bot-config-webrtc=profile                   # WebRTC: profile (use profile), real (native), disabled (off)
--bot-config-window=profile                   # Window dimensions: profile (use profile), real (system window)
--bot-config-media-types=profile              # Media types: profile, real, expand (allow expanding via local decoders)
--bot-config-mobile-force-touch=false         # Mobile touch: force touch events on/off for mobile device simulation
```

### Key Benefits of CLI Configuration Flags

**✅ Highest Priority:** These flags override any profile settings

**✅ No Profile Editing:** Avoid modifying complex profile JSON files

**✅ Dynamic Configuration:** Perfect for automated deployments and scripts

**✅ Session Isolation:** Different configurations per browser instance without profile conflicts

### Configuration Priority Order

1. **🥇 CLI `--bot-config-*` flags** (Highest priority)
2. **🥈 Profile `configs` settings** (Medium priority)
3. **🥉 Profile default values** (Lowest priority)

---

## 📝 Usage Examples

### Basic BotBrowser Setup
```bash
# Essential BotBrowser flags only
chromium-browser \
  --bot-profile="/absolute/path/to/chrome139_win11_x64.enc" \
  --bot-title="My Session"
```

### Multiple Instances with Session Management
```bash
# Instance 1 with cookies and bookmarks
chromium-browser \
  --bot-profile="/absolute/path/to/profile1.enc" \
  --bot-title="Account 1" \
  --bot-cookies='[{"name":"sessionid","value":"abc123","domain":".example.com"}]' \
  --bot-bookmarks='[{"title":"Work Site","url":"https://work.com","type":"url"}]' \
  --user-data-dir="/tmp/bot1" &

# Instance 2 with different profile
chromium-browser \
  --bot-profile="/absolute/path/to/profile2.enc" \
  --bot-title="Account 2" \
  --user-data-dir="/tmp/bot2" &
```

### Automation with Proxy Authentication
```bash
# Using BotBrowser's enhanced proxy with embedded credentials
chromium-browser \
  --bot-profile="/absolute/path/to/chrome139_win11_x64.enc" \
  --proxy-server="http://myuser:mypass@proxy.example.com:8080" \
  --remote-debugging-port=9222
```

### Configuration Override Examples
```bash
# Only override when you need specific settings (timezone/locale auto-detected)
chromium-browser \
  --bot-profile="/absolute/path/to/chrome139_win11_x64.enc" \
  --bot-config-browser-brand="edge" \
  --bot-config-webgl="disabled" \
  --bot-config-noise-canvas=true \
  --bot-title="Custom Session"
```

### Dynamic Multi-Instance Setup
```bash
# Instance 1 - Chrome brand with profile window settings
chromium-browser \
  --bot-profile="/absolute/path/to/profile.enc" \
  --bot-config-browser-brand="chrome" \
  --bot-config-window="profile" \
  --user-data-dir="/tmp/instance1" &

# Instance 2 - Edge brand with real window settings
chromium-browser \
  --bot-profile="/absolute/path/to/profile.enc" \
  --bot-config-browser-brand="edge" \
  --bot-config-window="real" \
  --user-data-dir="/tmp/instance2" &
```

### Comprehensive Testing Configuration Example
```bash
# All BotBrowser features combined with CLI configuration
chromium-browser \
  --no-sandbox \
  --headless \
  --bot-profile="/absolute/path/to/chrome139_win11_x64.enc" \
  --bot-title="Production Bot" \
  --bot-cookies='[{"name":"auth","value":"token123","domain":".site.com"}]' \
  --proxy-server="http://user:pass@proxy.example.com:8080" \
  --bot-config-browser-brand="chrome" \
  --bot-config-timezone="auto" \
  --bot-config-webgl="profile" \
  --bot-config-noise-canvas=true \
  --bot-config-noise-webgl-image=true \
  --user-data-dir="$(mktemp -d)" \
  --remote-debugging-port=9222
```

---

## 🔗 Related Documentation

- [📚 Profile Configuration Guide](profiles/PROFILE_CONFIGS.md) - Configure browser behavior via profiles
- [📖 Main README](README.md) - General usage and standard Chromium flags
- [🎭 Examples](examples/) - Playwright and Puppeteer integration examples
- [🐳 Docker Deployment](docker/README.md) - Container deployment guides

---

## 💡 Tips & Best Practices

### BotBrowser-Specific Considerations

**Configuration Priority:** CLI `--bot-config-*` flags have the highest priority and override profile `configs` settings.

**Session Management:** Use `--bot-title` to easily identify different browser instances in your system.

**Cookie Persistence:** `--bot-cookies` is perfect for maintaining session state across restarts.

**Realistic Browsing:** `--bot-bookmarks` adds authenticity to your browser fingerprint.

**Proxy Authentication:** Embed credentials directly in the proxy URL for authentication.

---

> 💡 **Need Help?** Check our [Issues](https://github.com/botswin/BotBrowser/issues) or contact support at [botbrowser@bk.ru](mailto:botbrowser@bk.ru)

> 📘 **Note:** This document covers BotBrowser-specific flags only. For standard Chromium flags (like `--headless`, `--no-sandbox`, `--user-data-dir`, etc.), refer to the [Chromium command line documentation](https://peter.sh/experiments/chromium-command-line-switches/).
