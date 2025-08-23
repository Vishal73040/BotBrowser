# 🚀 BotBrowser CLI Flags Reference

This document provides a comprehensive reference for **BotBrowser-specific** command-line flags. These are custom flags added by BotBrowser beyond standard Chromium flags.

> 🌍 **Auto-Configuration:** BotBrowser automatically configures timezone, locale, and languages based on your IP/proxy. Most users don't need to override these settings manually.

## 📋 Table of Contents

- [🎯 Core BotBrowser Flags](#-core-botbrowser-flags)
- [🌐 Enhanced Proxy Configuration](#-enhanced-proxy-configuration)
- [🎨 BotBrowser Customization](#-botbrowser-customization)
- [⚙️ Profile Configuration Override Flags](#️-profile-configuration-override-flags)
- [📝 Usage Examples](#-usage-examples)

---

## 🎯 Core BotBrowser Flags

### `--bot-profile`
**The foundation of BotBrowser stealth capabilities**

Specifies the path to the BotBrowser profile file (.enc).

```bash
--bot-profile="/path/to/chrome139_win11_x64.enc"
--bot-profile="./profiles/chrome139_mac_arm64.enc"  # Relative path supported
```

**Notes:**
- Profile determines the browser fingerprint, OS emulation, and stealth capabilities
- Use profiles from [profiles directory](profiles/) or contact support for custom profiles
- This is what makes BotBrowser different from regular Chromium

---

## 🌐 Enhanced Proxy Configuration

### Enhanced `--proxy-server` with Embedded Credentials
**BotBrowser enhancement for simplified proxy authentication**

BotBrowser enhanced the standard `--proxy-server` flag to accept embedded credentials directly in the URL.

```bash
# HTTP/HTTPS proxy with credentials
--proxy-server="http://username:password@proxy.example.com:8080"
--proxy-server="https://username:password@proxy.example.com:8080"

# SOCKS5 proxy with credentials
--proxy-server="socks5://username:password@proxy.example.com:1080"
```

**Supported protocols:** HTTP, HTTPS, SOCKS5

### `--proxy-username` & `--proxy-password`
**Alternative method for proxy authentication**

For cases where you prefer separate credential parameters:

```bash
--proxy-server="proxy.example.com:8080"
--proxy-username="myuser"
--proxy-password="mypass"
```

---

## 🎨 BotBrowser Customization

### `--bot-title`
**Custom browser identification and session management**

Sets custom browser window title and taskbar/dock icon label.

```bash
--bot-title="MyBot Session 1"
--bot-title="Production Scraper"
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
**Pre-populate bookmarks for realistic browsing**

Accepts a JSON string containing bookmark data for startup.

```bash
--bot-bookmarks='[{"name":"Example","url":"https://example.com","folder":"Work"}]'
```

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
--bot-config-timezone=auto                    # Timezone: "auto" (IP-based), "real" (system), or timezone name
--bot-config-ua-full-version=139.0.6778.85    # User agent version: full version string matching Chromium major
--bot-config-webgl=profile                    # WebGL: profile (use profile), real (system), disabled (off)
--bot-config-webgpu=profile                   # WebGPU: profile (use profile), real (system), disabled (off)
--bot-config-webrtc=profile                   # WebRTC: profile (use profile), real (native), disabled (off)
--bot-config-window=profile                   # Window dimensions: profile (use profile), real (system window)
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
  --bot-profile="./profiles/chrome139_win11_x64.enc" \
  --bot-title="My Session"
```

### Multiple Instances with Session Management
```bash
# Instance 1 with cookies and bookmarks
chromium-browser \
  --bot-profile="./profiles/profile1.enc" \
  --bot-title="Account 1" \
  --bot-cookies='[{"name":"sessionid","value":"abc123","domain":".example.com"}]' \
  --bot-bookmarks='[{"name":"Work Site","url":"https://work.com"}]' \
  --user-data-dir="/tmp/bot1" &

# Instance 2 with different profile
chromium-browser \
  --bot-profile="./profiles/profile2.enc" \
  --bot-title="Account 2" \
  --user-data-dir="/tmp/bot2" &
```

### Automation with Proxy Authentication
```bash
# Using BotBrowser's enhanced proxy with embedded credentials
chromium-browser \
  --bot-profile="./profiles/chrome139_win11_x64.enc" \
  --proxy-server="http://myuser:mypass@proxy.example.com:8080" \
  --remote-debugging-port=9222
```

### Configuration Override Examples
```bash
# Only override when you need specific settings (timezone/locale auto-detected)
chromium-browser \
  --bot-profile="./profiles/chrome139_win11_x64.enc" \
  --bot-config-browser-brand="edge" \
  --bot-config-webgl="disabled" \
  --bot-config-noise-canvas=true \
  --bot-title="Custom Session"
```

### Dynamic Multi-Instance Setup
```bash
# Instance 1 - Chrome brand with profile window settings
chromium-browser \
  --bot-profile="./profiles/profile.enc" \
  --bot-config-browser-brand="chrome" \
  --bot-config-window="profile" \
  --user-data-dir="/tmp/instance1" &

# Instance 2 - Edge brand with real window settings  
chromium-browser \
  --bot-profile="./profiles/profile.enc" \
  --bot-config-browser-brand="edge" \
  --bot-config-window="real" \
  --user-data-dir="/tmp/instance2" &
```

### Complete Stealth Setup with Configuration Overrides
```bash
# All BotBrowser features combined with CLI configuration
chromium-browser \
  --no-sandbox \
  --headless \
  --bot-profile="./profiles/chrome139_win11_x64.enc" \
  --bot-title="Production Bot" \
  --bot-cookies='[{"name":"auth","value":"token123","domain":".site.com"}]' \
  --bot-bookmarks='[{"name":"Home","url":"https://example.com"}]' \
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

- [📚 Profile Configuration Guide](profiles/profile-configs.md) - Configure browser behavior via profiles
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

**Proxy Authentication:** Use separate `--proxy-username`/`--proxy-password` flags when you can't embed credentials in the proxy URL.

---

> 💡 **Need Help?** Check our [Issues](https://github.com/botswin/BotBrowser/issues) or contact support at [botbrowser@bk.ru](mailto:botbrowser@bk.ru)

> 📘 **Note:** This document covers BotBrowser-specific flags only. For standard Chromium flags (like `--headless`, `--no-sandbox`, `--user-data-dir`, etc.), refer to the [Chromium command line documentation](https://peter.sh/experiments/chromium-command-line-switches/).
