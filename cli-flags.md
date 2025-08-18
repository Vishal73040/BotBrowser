# 🚀 BotBrowser CLI Flags Reference

This document provides a comprehensive reference for **BotBrowser-specific** command-line flags. These are custom flags added by BotBrowser beyond standard Chromium flags.

## 📋 Table of Contents

- [🎯 Core BotBrowser Flags](#-core-botbrowser-flags)
- [🌐 Enhanced Proxy Configuration](#-enhanced-proxy-configuration)
- [🎨 BotBrowser Customization](#-botbrowser-customization)
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

### Complete Stealth Setup
```bash
# All BotBrowser features combined
chromium-browser \
  --no-sandbox \
  --headless \
  --bot-profile="./profiles/chrome139_win11_x64.enc" \
  --bot-title="Production Bot" \
  --bot-cookies='[{"name":"auth","value":"token123","domain":".site.com"}]' \
  --bot-bookmarks='[{"name":"Home","url":"https://example.com"}]' \
  --proxy-server="http://user:pass@proxy.example.com:8080" \
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

**Profile Priority:** Profile `configs` settings override equivalent CLI flags where applicable.

**Session Management:** Use `--bot-title` to easily identify different browser instances in your system.

**Cookie Persistence:** `--bot-cookies` is perfect for maintaining session state across restarts.

**Realistic Browsing:** `--bot-bookmarks` adds authenticity to your browser fingerprint.

**Proxy Authentication:** Use separate `--proxy-username`/`--proxy-password` flags when you can't embed credentials in the proxy URL.

---

> 💡 **Need Help?** Check our [Issues](https://github.com/botswin/BotBrowser/issues) or contact support at [botbrowser@bk.ru](mailto:botbrowser@bk.ru)

> 📘 **Note:** This document covers BotBrowser-specific flags only. For standard Chromium flags (like `--headless`, `--no-sandbox`, `--user-data-dir`, etc.), refer to the [Chromium command line documentation](https://peter.sh/experiments/chromium-command-line-switches/).