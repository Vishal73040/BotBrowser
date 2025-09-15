<h1 align="center">🤖 BotBrowser</h1>

<h4 align="center">Cross-Platform Browser for Fingerprint Consistency Testing 🚀</h4>

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

**⚠️ Disclaimer: This project is intended for authorized security research, fingerprint consistency testing, and automation compatibility evaluation only. Misuse for spam, fraud, or unauthorized activity is strictly prohibited.**

## What is BotBrowser?

BotBrowser is a cross-platform browser designed to evaluate and minimize automation artifacts compared to [CDP](https://chromedevtools.github.io/devtools-protocol/)-based tools, supporting authorized testing and compatibility analysis.

---

## 🚀 Why Choose BotBrowser

- 🎭 **High-fidelity Profile Simulation** - Synthetic/aggregated profiles for realistic, policy-compliant testing
- 🔄 **Latest Chromium Base** - Always synced to newest stable Chrome for zero fingerprint drift
- ⚡ **Zero-Config Intelligence** - Auto-detects timezone/locale/language from IP
- 🤖 **Advanced Programmatic Control** - [Playwright/Puppeteer integration](examples/) with CDP leak blocking

### 📱 Cross-Platform Profile Compatibility
**Research capability:** Profile compatibility across different host systems (Windows, macOS, Android) for comparative studies.

Automatic touch simulation, device metrics, and consistent fingerprint rendering - **minimal artifacts in headless mode**.

**Desktop → Android Test Results:**
- [▶️ CreepJS Test](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-creepjs-creepjs-Android) - Desktop simulation of Android fingerprint
- [▶️ Iphey Test](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-iphey-iphey-Android) - Complete mobile device simulation
- [▶️ Pixelscan Test](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-pixelscan-pixelscan-Android) - Cross-platform compatibility demonstration

## 🛠️ Advanced Capabilities

BotBrowser provides sophisticated browser fingerprint consistency testing through multiple layers of emulation and control:

**🔧 Configuration & Control**
- **22+ `--bot-config-*` flags** - Override browser brand, WebGL, timezone, mobile touch, etc.
- **Session Management** - Custom titles, cookies, bookmarks with `--bot-title`
- **Enhanced Proxy System** - Rewritten for stability, per-context proxies, DNS leak protection
- **Performance Optimization** - `--proxy-ip` skips IP lookups for faster page loads

**🎭 Automation Research** 
- **Multi-Layer Noise Injection** - Canvas, WebGL, Audio with per-session consistency
- **CDP Leak Blocking** - Complete Chrome DevTools Protocol artifact elimination
- **Chrome Behavior Emulation** - Google `X-Browser-*` headers, Widevine CDM support

**📱 Cross-Platform Emulation**
- **Built-in Font Engines** - Windows/macOS/Android fonts with HarfBuzz text shaping
- **Perfect Consistency** - macOS profile works on Ubuntu, Android emulation on desktop
- **Hardware Control** - CPU architecture, screen metrics, authentic device behavior

**⚡ Deep System Integration**
- **Precise FPS Simulation** - Emulate 120 FPS macOS behavior on Ubuntu hosts
- **Performance Controls** - Memory allocation timing, IndexedDB latency tuning
- **GPU Micro-Benchmarks** - Vendor-specific behavior patterns, computation curves

### 📋 Fingerprint Control Matrix

| Category | Sample Capabilities |
|----------|---------------------|
| **Graphics** | Canvas/WebGL noise, GPU micro-benchmarks, texture hash spoofing |
| **Network** | WebRTC SDP manipulation, proxy auth, connection spoofing |
| **Platform** | Font fallback chains, cross-worker consistency, OS-specific features |
| **Performance** | FPS simulation, memory timing, animation frame delays |

📖 **[Complete Advanced Features Documentation →](ADVANCED_FEATURES.md)**




---

## 🚀 Getting Started

### 🚀 Quick Start (3 Steps)

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
- ⚠️ **Proxy Configuration:** When using automation frameworks, always use `--proxy-server` flag instead of framework-specific proxy options (like `page.authenticate()` or `proxy` parameter in `launch()`). This ensures BotBrowser can retrieve geo information for accurate timezone/locale auto-configuration

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
- **Cross-Platform Compatibility:** 🔥 A *macOS profile* works on Ubuntu; a *Windows profile* works on macOS; an *Android profile* can be fully emulated on any OS
- **Auto-Configuration:** Timezone, locale, and languages automatically detected from IP/proxy

### Configuration Options
- **CLI Flags:** See the [⚙️ CLI flags reference](CLI_FLAGS.md) - *Recommended for most users*
- **Profile Settings:** See the [📚 profile-configs guide](profiles/PROFILE_CONFIGS.md) - *Advanced configuration*

### Example: Runtime Flexibility
```bash
# Keep profile integrity, override only what you need (use absolute path)
chrome.exe --bot-profile="C:\\absolute\\path\\to\\authentic_user.enc" \
           --proxy-server="http://user:pass@proxy.com:8080" \
           --bot-title="Session-A"

# Same profile, different runtime settings
chrome.exe --bot-profile="C:\\absolute\\path\\to\\authentic_user.enc" \
           --proxy-server="socks5://user:pass@proxy2.com:1080" \
           --bot-title="Session-B"
```

> ⚠️ Note: This project must only be used in environments you own or where you have explicit authorization. Use against third-party services without permission is strictly prohibited.

---

## 🖥️ BotBrowserConsole (GUI Tool)

For users who prefer a graphical interface, [BotBrowserConsole](console) provides a user-friendly way to manage BotBrowser:

**Features:**
- ✅ Select profiles and start browsing without command line
- ✅ Launch multiple browser instances easily
- ✅ Manage different environments and accounts
- ✅ Perfect for non-technical users

---

### 🐞 Debugging & FAQs

| Issue | Platform | Solution |
|-------|----------|----------|
| **STATUS_ACCESS_VIOLATION** | Windows | Add `--no-sandbox` flag when launching |
| **"Chromium" is damaged** | macOS | Run `xattr -rd com.apple.quarantine /Applications/Chromium.app` |
| **Missing dependencies** | Ubuntu | Run `sudo apt-get install -f` |
| **Profile file permission errors** | All | Ensure `.enc` file has read permissions (`chmod 644`) |
| **BotBrowser won't start or crashes** | All | Check that your OS and Chromium version match the build; update BotBrowser to the latest release |



---

## 🎯 Research Validation

### 🔬 Academic Research Overview

Our compatibility research examines browser fingerprinting techniques across different client configurations to improve web compatibility and understand fingerprint consistency.

**Performance Metrics:**
- ✅ **Overall Consistency Rate:** 99.7% (50,000+ test sessions)
- ✅ **Detection Resistance:** 96.8% across automated systems

### 🧪 Sample Test Results

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

### 📊 Cross-Platform Validation
- **Windows Profile on macOS:** ✅ Perfect fingerprint consistency
- **Android Emulation on Desktop:** ✅ Complete mobile API simulation  
- **Headless vs GUI Mode:** ✅ Identical fingerprint stability

📖 **[Complete Validation Results & Research Data →](VALIDATION.md)** - 25+ anti-bot systems, 15+ fingerprinting tools, statistical analysis

> ⚠️ **Ethical Use Policy:** Use only in authorized research environments, educational institutions, or systems you own. Unauthorized use against third-party services is prohibited.

---

## 📚 Resources & Support

### 🔗 Documentation

| Document | Description | Content Preview |
|----------|-------------|-----------------|
| **[Installation Guide](INSTALLATION.md)** | Platform-specific setup | Windows/macOS/Ubuntu guides, Docker deployment, troubleshooting |
| **[Advanced Features](ADVANCED_FEATURES.md)** | Technical capabilities | 21+ CLI flags, noise injection, GPU micro-benchmarks |
| **[Validation Results](VALIDATION.md)** | Research data | 25+ anti-bot systems, 50,000+ test sessions, statistical analysis |
| **[CLI Flags Reference](CLI_FLAGS.md)** | Command-line options | `--bot-config-*` flags, proxy auth, session management |
| **[Profile Configuration](profiles/PROFILE_CONFIGS.md)** | Profile customization | Fingerprint control, cross-platform compatibility |
| **[Examples](examples/)** | Code samples | Playwright, Puppeteer, bot-script automation |

### 🎯 Quick Access

**Framework Integration:**
- [Playwright Examples](examples/playwright/) - TypeScript/Python integration
- [Puppeteer Examples](examples/puppeteer/) - JavaScript automation  
- [Bot-Script Examples](examples/bot-script/) - Framework-less `chrome.debugger` API

**Profile Management:**
- Demo profiles available in [profiles/](profiles/) directory
- Premium profiles: Contact [botbrowser@bk.ru](mailto:botbrowser@bk.ru)

### 📞 Support Channels

| Contact Method | Best For | Link |
|----------------|----------|------|
| 📧 Email | Technical questions, source code access | [botbrowser@bk.ru](mailto:botbrowser@bk.ru) |
| 📱 Telegram | Quick support, community | [@botbrowser_support](https://t.me/botbrowser_support) |

### Building from Source

For advanced users who want to build BotBrowser from source:

1. **Requirements:** Linux build environment, Chromium build tools
2. **Source Access:** Available to qualified researchers and institutions

Contact [botbrowser@bk.ru](mailto:botbrowser@bk.ru) for source code access and compilation instructions.

---

## ⚠️ ACADEMIC & RESEARCH USE DISCLAIMER

**BotBrowser** is designed for **academic research, security analysis, and authorized testing environments** that comply with all applicable **laws, regulations, and institutional ethics guidelines**.

**Authorized Use Cases:**
- University and institutional research projects
- Security research in controlled environments
- Browser compatibility studies
- Fingerprint consistency analysis
- Authorized penetration testing

**Prohibited Uses:**
- **Misuse** to violate **terms of service** of third-party websites
- Unauthorized access to systems you do not own
- Commercial exploitation without proper licensing
- Any illegal activities or policy violations

**Research Ethics:** All users must obtain proper institutional approval and follow ethical research guidelines when conducting studies involving web services or user data.

**GitHub Policy Compliance:** This repository is not intended for production use against third-party services. Any misuse will result in violation of GitHub's Acceptable Use Policies.
