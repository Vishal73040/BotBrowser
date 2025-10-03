<h1 align="center">🤖 BotBrowser</h1>

<h4 align="center">Professional Cross-Platform Browser with Unified Fingerprint Technology 🚀</h4>
<p align="center">
  Identical fingerprints on any OS • Cross-platform compatibility • Works with 29+ detection systems
</p>

<p align="center">
  <a href="https://github.com/botswin/BotBrowser/releases">
    <img src="https://img.shields.io/github/v/release/botswin/BotBrowser?style=flat-square" alt="Latest Release">
  </a>
  <a href="https://github.com/botswin/BotBrowser/commits/main/">
    <img src="https://img.shields.io/github/commit-activity/m/botswin/BotBrowser?style=flat-square" alt="Commit Activity">
  </a>
  <a href="https://github.com/botswin/BotBrowser/issues">
    <img src="https://img.shields.io/github/issues/botswin/BotBrowser?style=flat-square" alt="Issues">
  </a>
  <a href="https://github.com/botswin/BotBrowser/fork">
    <img src="https://img.shields.io/github/forks/botswin/BotBrowser?style=flat-square" alt="GitHub Forks">
  </a>
  <a href="https://github.com/botswin/BotBrowser">
    <img src="https://img.shields.io/github/stars/botswin/BotBrowser" alt="GitHub Stars">
  </a>
</p>

<div align="center">
  <img width="600" alt="BotBrowser GUI - Your Command Center" src="https://github.com/user-attachments/assets/e9c0b656-83b0-4be5-986e-d4bc3c04b4b5">
</div>

---

> **Note:** BotBrowser is designed for authorized testing and research. Review our [Legal Disclaimer](DISCLAIMER.md) before use.

---   

## 📖 What is BotBrowser?

BotBrowser delivers identical browser fingerprints across all platforms. Run the same profile on Windows, macOS, or Linux - get exactly the same fingerprint every time.

Designed for automation testing, cross-platform compatibility validation, and maintaining consistent browser environments.

---

## 🏆 Why Choose BotBrowser

> **What makes BotBrowser different:** Cross-platform browser with unified fingerprint technology - identical fingerprints everywhere

| **Core Advantages** | **Technical Excellence** |
|---------------------|-------------------------|
| **High-fidelity Profile Simulation** - Synthetic/aggregated profiles for realistic, policy-compliant testing | **Latest Chromium Base** - Always synced to newest stable Chrome for zero fingerprint drift |
| **Zero-Config Intelligence** - Auto-detects timezone/locale/language from IP | **Advanced Programmatic Control** - [Playwright/Puppeteer integration](examples/) with CDP leak blocking |

### 📱 Cross-Platform Fingerprint Consistency
**Unified fingerprints:** Identical browser fingerprints across all platforms (Windows, macOS, Android) ensuring consistency regardless of host system.

Automatic touch simulation, device metrics, and unified fingerprint rendering across platforms.

**Desktop → Android Test Results:**
- [▶️ CreepJS Test](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-creepjs-creepjs-Android) - Desktop simulation of Android fingerprint
- [▶️ Iphey Test](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-iphey-iphey-Android) - Complete mobile device simulation
- [▶️ Pixelscan Test](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-pixelscan-pixelscan-Android) - Cross-platform compatibility demonstration

## 🛠️ Advanced Capabilities

> **Professional-grade browser technology** through sophisticated multi-layer fingerprint consistency and cross-platform compatibility systems

### Core Technology Arsenal

| **Category** | **Capabilities** |
|-------------|------------------|
| **Configuration & Control** | **22+ CLI flags** for browser brand, WebGL, timezone • **Session management** with custom titles/cookies • **Enhanced proxy system** with per-context support • **Performance optimization** via `--proxy-ip` |
| **Automation Technology** | **Multi-layer rendering consistency** (Canvas/WebGL/Audio) • **Complete CDP optimization** • **Native Chrome compatibility** with Google headers & Widevine |
| **Cross-Platform Compatibility** | **Built-in font engines** (Windows/macOS/Android + HarfBuzz) • **Consistent behavior** across OS platforms • **Hardware control** for CPU/screen/device behavior |
| **Deep System Integration** | **Precise FPS simulation** (120 FPS macOS on Ubuntu) • **Performance controls** (memory timing, IndexedDB latency) • **GPU micro-benchmarks** with vendor patterns |

### Fingerprint Consistency Matrix

| Category | Sample Capabilities |
|----------|---------------------|
| **Graphics** | Canvas/WebGL rendering, GPU micro-benchmarks, texture hash configuration |
| **Network** | WebRTC SDP configuration, proxy auth, connection management |
| **Platform** | Font fallback chains, cross-worker consistency, OS-specific features |
| **Performance** | FPS simulation, memory timing, animation frame optimization |

📖 **[Complete Advanced Features Documentation →](ADVANCED_FEATURES.md)**




---

## 🚀 Getting Started

### 30-Second Quick Test

**Want to try immediately?** Download + Launch + Test in under 30 seconds:

1. **[Download BotBrowser](https://github.com/botswin/BotBrowser/releases)** + **[Get Demo Profile](profiles/)**
2. **Run command:** `./chrome.exe --no-sandbox --bot-profile="path/to/profile.enc"`
3. **Visit test site:** [CreepJS](https://abrahamjuliot.github.io/creepjs/) to see fingerprint consistency in action!

> **Works instantly** - No configuration needed, timezone/locale auto-detected from your IP

### Complete Setup (3 Steps)

**Step 1:** Download from [Releases](https://github.com/botswin/BotBrowser/releases) and a profile from [profiles](profiles) directory.

**Step 2:** Launch BotBrowser with your profile (⚠️ use absolute path):

**Windows (CMD):**
```cmd
chrome.exe --no-sandbox --bot-profile="C:\\absolute\\path\\to\\chrome139_win11_x64.enc" --user-data-dir="%TEMP%\\botprofile_%RANDOM%"
```

**macOS:**
```bash
/Applications/Chromium.app/Contents/MacOS/Chromium \
  --no-sandbox \
  --user-data-dir="$(mktemp -d)" \
  --bot-profile="/absolute/path/to/chrome139_win11_x64.enc"
```

**Ubuntu:**
```bash
chromium-browser \
  --no-sandbox \
  --user-data-dir="$(mktemp -d)" \
  --bot-profile="/absolute/path/to/chrome139_win11_x64.enc"
```

**Step 3:** Browse normally - timezone, locale, and languages are automatically configured!

📖 **[Complete Installation Guide →](INSTALLATION.md)** - Detailed setup, Docker deployment, troubleshooting

### [Playwright](examples/playwright) / [Puppeteer](examples/puppeteer) Automation

**Available Examples:**
- **Node.js:** [Playwright](examples/playwright/nodejs) | [Puppeteer](examples/puppeteer)
- **Python:** [Playwright](examples/playwright/python)
- **.NET:** [Playwright](examples/playwright/dotnet)
- **Java:** [Playwright](examples/playwright/java)

```javascript
const browser = await chromium.launch({
  headless: true,
  executablePath: BOTBROWSER_EXEC_PATH,   // Absolute path to the BotBrowser executable
  args: [
    `--bot-profile=${BOT_PROFILE_PATH}`,  // Absolute path to the bot profile
    '--proxy-server="socks5://usr:pwd@127.0.0.1:8989"',  // or: "http://usr:pwd@127.0.0.1:8989"
  ],
});

const page = await browser.newPage();

// Remove Playwright's bindings to avoid detection.
await page.addInitScript(() => {
  delete window.__playwright__binding__;
  delete window.__pwInitScripts;
});
await page.goto("https://abrahamjuliot.github.io/creepjs/");
```

**Important Notes:**
- Use `--user-data-dir` with a unique temporary folder to avoid conflicts with running Chromium instances
- Use `--proxy-server` to connect to proxy servers, supported protocols: HTTP, HTTPS, SOCKS5
- **Flexible Proxy Configuration:** Use `--proxy-server` for browser-level proxies, or set per-context proxies via `createBrowserContext()` - both support automatic geo-detection
- ⚠️ **Proxy Configuration:** Avoid framework-specific options like `page.authenticate()` or `proxy` parameter in `launch()`. Use either `--proxy-server` flag or `createBrowserContext({ proxy: {...} })` to ensure BotBrowser can retrieve geo information for accurate timezone/locale auto-configuration

> 📖 **For a complete list of BotBrowser-specific CLI flags**, see [⚙️ CLI Flags Reference](CLI_FLAGS.md)

### Framework-less Automation with `--bot-script`

**Native BotBrowser automation** using privileged JavaScript context with `chrome.debugger` API access:

```bash
chrome.exe --no-sandbox --bot-profile="/absolute/path/to/profile.enc" --bot-script="automation.js"
```

**Key advantages:**
- **No framework dependencies** - Pure Chrome DevTools Protocol
- **Earlier intervention** - Execute before page navigation
- **Privileged context** - Full `chrome.debugger` API access
- **Reduced detection surface** - No Playwright/Puppeteer artifacts

📖 **Examples:** [Bot Script Automation](examples/bot-script)

### 🐳 Docker Deployment

For containerized deployment, see [docker/README.md](docker/) for complete setup guide.


---

## ⚙️ Configuration & Profiles

> 📢 BotBrowser combines synthetic/aggregated profiles with flexible configuration for authorized research. Profile consistency and CLI settings enable comparative analysis.

### Key Concepts
- **Profile Foundation:** Synthetic/aggregated profiles provide realistic fingerprint data for authorized testing
- **CLI Flexibility:** Override profile settings at runtime without modifying encrypted files
- **Cross-Platform Compatibility:** A *macOS profile* works on Ubuntu; a *Windows profile* works on macOS; an *Android profile* can be fully emulated on any OS
- **Auto-Configuration:** Timezone, locale, and languages automatically detected from IP/proxy

### Configuration Options
- **CLI Flags:** See the [⚙️ CLI flags reference](CLI_FLAGS.md) - *Recommended for most users*
- **Profile Settings:** See the [📚 profile-configs guide](profiles/PROFILE_CONFIGS.md) - *Advanced configuration*


> ⚠️ Note: This project must only be used in environments you own or where you have explicit authorization. Use against third-party services without permission is strictly prohibited.

---

## 🖥️ BotBrowserConsole (GUI Tool)

For users who prefer a graphical interface, [BotBrowserConsole](console) provides a user-friendly way to manage BotBrowser:

**Features:**
- ✅ Select profiles and start browsing without command line
- ✅ Launch multiple browser instances easily
- ✅ Manage different environments and accounts
- ✅ User-friendly interface

---

## 🎯 Research Validation

### Academic Research Overview

Our compatibility research examines browser fingerprinting techniques across different client configurations to improve web compatibility and understand fingerprint consistency.

### Test Results

> ⚠️ **Research Purpose Only:** These results demonstrate fingerprint consistency for academic analysis exclusively. Not intended for bypassing security systems or unauthorized access to production services. All tests conducted in controlled environments with proper authorization.

**Anti-Bot Systems:**
| Service | Technology | Results |
|---------|------------|---------|
| **Cloudflare** | Turnstile, Bot Management | [▶️ Turnstile Demo](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-cloudflare-turnstile) |
| **DataDome** | ML-based detection | [▶️ PayPal Test](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-datadome-paypal) |
| **PerimeterX** | Behavioral analysis | [▶️ Zillow Demo](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-perimeterx-zillow) |

**Fingerprinting Systems:**
| Service | Focus | Results |
|---------|-------|---------|
| **CreepJS** | Comprehensive fingerprinting | [▶️ Desktop Test](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-creepjs-creepjs) \| [▶️ Android Profile](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-creepjs-creepjs-Android) |
| **FingerprintJS Pro** | Commercial fingerprinting | [▶️ Bot Detection](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-fingerprintjs-botdetection) |
| **Pixelscan** | Detection suite | [▶️ Comprehensive Scan](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-pixelscan-pixelscan) |

### Cross-Platform Validation
- **Windows Profile on macOS:** ✅ Fingerprint consistency maintained
- **Android Emulation on Desktop:** ✅ Complete mobile API simulation
- **Headless vs GUI Mode:** ✅ Identical fingerprint stability

📖 **[Complete Validation Results & Research Data →](VALIDATION.md)** - 25+ anti-bot systems, 15+ fingerprinting tools, statistical analysis

---

## 📚 Resources & Support

### Documentation

| Document | Description | Content Preview |
|----------|-------------|-----------------|
| **[Installation Guide](INSTALLATION.md)** | Platform-specific setup | Windows/macOS/Ubuntu guides, Docker deployment, troubleshooting |
| **[Advanced Features](ADVANCED_FEATURES.md)** | Technical capabilities | 22+ CLI flags, noise injection, GPU micro-benchmarks |
| **[Validation Results](VALIDATION.md)** | Research data | 25+ anti-bot systems, 50,000+ test sessions, statistical analysis |
| **[CLI Flags Reference](CLI_FLAGS.md)** | Command-line options | `--bot-config-*` flags, proxy auth, session management |
| **[Profile Configuration](profiles/PROFILE_CONFIGS.md)** | Profile customization | Fingerprint control, cross-platform compatibility |
| **[Examples](examples/)** | Code samples | Playwright, Puppeteer, bot-script automation |

### Quick Access

**Framework Integration:**
- [Playwright Examples](examples/playwright/) - TypeScript/Python integration
- [Puppeteer Examples](examples/puppeteer/) - JavaScript automation
- [Bot-Script Examples](examples/bot-script/) - Framework-less `chrome.debugger` API

**Profile Management:**
- Demo profiles available in [profiles/](profiles/) directory
- Premium profiles: Contact [botbrowser@bk.ru](mailto:botbrowser@bk.ru)

### Support Channels

| Contact Method | Best For | Link |
|----------------|----------|------|
| 📧 Email | Technical questions, source code access | [botbrowser@bk.ru](mailto:botbrowser@bk.ru) |
| 📱 Telegram | Community support, quick questions | [@botbrowser_support](https://t.me/botbrowser_support) |

### Building from Source

For advanced users who want to build BotBrowser from source:

1. **Requirements:** Linux build environment, Chromium build tools
2. **Source Access:** Available to qualified researchers and institutions

Contact [botbrowser@bk.ru](mailto:botbrowser@bk.ru) for source code access and compilation instructions.

### Debugging & FAQs

| Issue | Platform | Solution |
|-------|----------|----------|
| **STATUS_ACCESS_VIOLATION** | Windows | Add `--no-sandbox` flag when launching |
| **"Chromium" is damaged** | macOS | Run `xattr -rd com.apple.quarantine /Applications/Chromium.app` |
| **Missing dependencies** | Ubuntu | Run `sudo apt-get install -f` |
| **Profile file permission errors** | All | Ensure `.enc` file has read permissions (`chmod 644`) |
| **BotBrowser won't start or crashes** | All | Check that your OS and Chromium version match the build; update BotBrowser to the latest release |

---

---

**📋 [Legal Disclaimer & Terms of Use](https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md)**
