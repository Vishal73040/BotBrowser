<h1 align="center">🤖 BotBrowser</h1>

<h4 align="center">The Ultimate Solution for Undetectable Automated Browsing 🚀</h4>

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

## What is BotBrowser?

BotBrowser is a cross-platform stealth browser designed to defeat modern antibot systems. By directly modifying Chromium's C++ source code, BotBrowser eliminates the fingerprint leaks and automation traces left behind by [CDP](https://chromedevtools.github.io/devtools-protocol/)-based solutions, enabling true undetectable browsing and automation.

---

## 🚀 Why Choose BotBrowser

- 🎭 **Real User Fingerprints + Dynamic CLI Override** - Authentic profiles with [`20+ runtime flags`](cli-flags.md#⚙️-profile-configuration-override-flags)
- 🔄 **Latest Chromium Base** - Always synced to newest stable Chrome for zero fingerprint drift
- ⚡ **Zero-Config Intelligence** - Auto-detects timezone/locale/language from IP  
- 🛡️ **98%+ Success Rate** - Defeats Cloudflare, Kasada, Akamai, F5 Shape; powering 350,000+ daily registrations with exceptional stability under heavy loads
- 🤖 **Advanced Programmatic Control** - [Playwright/Puppeteer integration](examples/) with CDP leak blocking

### 📱 Perfect Cross-Platform Profile Emulation
🔥 **Revolutionary capability:** Use ANY profile (Windows, macOS, Android, Ubuntu) on ANY host system seamlessly!

Automatic touch simulation, device metrics, and authentic fingerprints - **undetectable even in headless mode**.

**Desktop → Android Test Results:**
- [▶️ CreepJS Test](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-creepjs-creepjs-Android) - Desktop perfectly emulating Android fingerprint
- [▶️ Iphey Test](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-iphey-iphey-Android) - Complete mobile device simulation  
- [▶️ Pixelscan Test](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-pixelscan-pixelscan-Android) - Undetectable cross-platform emulation

## 🛠️ Advanced Capabilities

### 🔧 Configuration & Control
- [x] **Live Environment Dashboard** - Real-time proxy IP, timezone, coordinates, WebGL status in every new tab  
- [x] **Enhanced UI Control** - Custom `--bot-title`, `--bot-cookies`, `--bot-bookmarks` with toolbar labels
- [x] **Automation-Friendly** - `disableDebugger` prevents JS breakpoints, `keyboard` source selection
- [x] **Enterprise Proxy Support** - Embedded credentials, SOCKS5/HTTP, authentication protocols

### 🎭 Stealth & Detection Evasion  
- [x] **Advanced Noise Injection** - Stabilized Canvas, WebGL, TextMetrics algorithms resist detection
- [x] **Headless & Incognito Bypass** - Undetectable in all browser modes with GPU simulation
- [x] **WebRTC Leak Protection** - Complete IPv4/IPv6 SDP spoofing, candidate manipulation
- [x] **Dynamic Blink Features** - Runtime OS-based feature loading (Windows/macOS/Android)
- [x] **Chrome Behavior Emulation** - Google `X-Browser-*` headers, Widevine CDM, Chrome-specific APIs

### 📱 Device & Platform Emulation
- [x] **Cross-Platform Font Rendering** - OS-specific UI fonts, system fonts, anti-aliasing  
- [x] **Hardware Fingerprint Control** - CPU architecture, screen metrics, device pixel ratios

### 📋 Complete Fingerprint Control

| Category | Capabilities |
|----------|-------------|
| **Browser** | Version, userAgentData, brands, full version override, debugger disabling |
| **OS Platform** | Windows/macOS/Android emulation, UI/system fonts, colors, Blink features |
| **Input Control** | Keyboard layouts (profile/real), touch simulation, mouse patterns |
| **Navigator APIs** | Languages, plugins, permissions, battery, MimeTypes, speech voices |
| **Graphics Engine** | Canvas/WebGL/WebGPU noise, GPU adapter spoofing, hardware acceleration |
| **Network Layer** | Proxy auth, WebRTC SDP manipulation, Google headers, connection spoofing |
| **Media Systems** | MediaDevices, AudioContext, speech synthesis, codec emulation |
| **Advanced APIs** | Emoji rendering, Unicode, matchMedia, client rects, geolocation |
| **Automation** | CDP leak blocking, [Playwright/Puppeteer integration](examples/)




---

## 🚀 Getting Started

### Download & Installation

#### 1. Download Installer
Get the BotBrowser installer for your OS from the [Releases](https://github.com/botswin/BotBrowser/releases) page.

#### 2. Windows Installation
1. Extract the downloaded `.7z` archive
2. Run `chrome.exe` from the extracted folder
3. If you encounter `STATUS_ACCESS_VIOLATION`, launch with [--no-sandbox](https://peter.sh/experiments/chromium-command-line-switches/#no-sandbox)

#### 3. macOS Installation
1. Open the downloaded `.dmg` file
2. Drag `Chromium.app` into your Applications folder or any desired location
3. If you see the error:
   ```
   "Chromium" is damaged and can't be opened
   ```
   Run:
   ```bash
   xattr -rd com.apple.quarantine /Applications/Chromium.app
   ```

#### 4. Ubuntu Installation
1. Install via `dpkg`:
   ```bash
   sudo dpkg -i botbrowser_<version>_amd64.deb
   ```
2. If dependencies are missing, run:
   ```bash
   sudo apt-get install -f
   ```

### 🚀 Quick Start

#### 1. Basic CLI Usage

Get started in 3 simple steps:

**Step 1:** Download a profile from the [profiles](profiles) directory.

**Step 2:** Launch BotBrowser with your profile:

**Windows (CMD):**
```cmd
chrome.exe --no-sandbox --bot-profile="C:\\path\\to\\chrome139_win11_x64.enc" --user-data-dir="%TEMP%\\botprofile_%RANDOM%"
```

**macOS:**
```bash
/Applications/Chromium.app/Contents/MacOS/Chromium \
  --no-sandbox \
  --user-data-dir="$(mktemp -d)" \
  --bot-profile="/path/to/chrome139_win11_x64.enc"
```

**Ubuntu:**
```bash
chromium-browser \
  --no-sandbox \
  --user-data-dir="$(mktemp -d)" \
  --bot-profile="/path/to/chrome139_win11_x64.enc"
```

**Step 3:** Browse normally - timezone, locale, and languages are automatically configured!

#### 2. [Playwright](examples/playwright) / [Puppeteer](examples/puppeteer) Automation

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
    `--bot-profile=${BOT_PROFILE_PATH}`,  // Absolute or relative path to the bot profile
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

> 📖 **For a complete list of BotBrowser-specific CLI flags**, see [⚙️ CLI Flags Reference](cli-flags.md)

#### 3. 🐳 Docker Deployment

For containerized deployment, see [docker/README.md](docker/) for complete setup guide.


---

## ⚙️ Configuration & Profiles

> 📢 BotBrowser combines authentic user profiles with flexible runtime configuration. Your stealth capabilities come from real user fingerprints, enhanced by dynamic CLI settings.

### Key Concepts
- **Profile Foundation:** Authentic user fingerprints ensure undetectable browsing behavior
- **CLI Flexibility:** Override profile settings at runtime without modifying encrypted files
- **Cross-Platform Compatibility:** 🔥 A *macOS profile* works on Ubuntu; a *Windows profile* works on macOS; an *Android profile* can be fully emulated on any OS
- **Auto-Configuration:** Timezone, locale, and languages automatically detected from IP/proxy

### Configuration Options
- **CLI Flags:** See the [⚙️ CLI flags reference](cli-flags.md) - *Recommended for most users*
- **Profile Settings:** See the [📚 profile-configs guide](profiles/profile-configs.md) - *Advanced configuration*

### Example: Runtime Flexibility
```bash
# Keep profile integrity, override only what you need
chrome.exe --bot-profile="authentic_user.enc" \
           --proxy-server="http://user:pass@proxy.com:8080" \
           --bot-title="Session-A"

# Same profile, different runtime settings
chrome.exe --bot-profile="authentic_user.enc" \
           --proxy-server="socks5://user:pass@proxy2.com:1080" \
           --bot-title="Session-B"
```

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

| Issue | Solution |
|-------|----------|
| **"Chromium" is damaged** (macOS) | Run `xattr -rd com.apple.quarantine /Applications/Chromium.app` |
| **STATUS_ACCESS_VIOLATION** (Windows) | Add `--no-sandbox` flag when launching |
| **Profile file permission errors** | Ensure `.enc` file has read permissions (`chmod 644`) |
| **BotBrowser won't start or crashes** | Check that your OS and Chromium version match the build; update BotBrowser to the latest release |



---

## 🎯 Proven Effectiveness

Use our detailed test scripts to explore real-world use cases and implementation examples: **[Tests](tests)**.

### ⚠️ Disclaimer

These test scripts are provided for **educational purposes** and to **demonstrate** the capabilities of BotBrowser. They are intended solely for **legal use cases** that comply with all applicable laws and regulations. **Any misuse**—such as violating website terms of service or engaging in unlawful activities—**is strictly prohibited.**



| Service & Scripts                                                  | Test Results                                                                                                                                                                                                                                                                       |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **[Cloudflare](tests/tests/antibots/cloudflare.spec.ts)**          | [▶️ BookDemo](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-cloudflare-bookdemo), [▶️ Turnstile](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-cloudflare-turnstile), [▶️ Challenge](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-cloudflare-challenge), [▶️ TaxSlayer](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-cloudflare-taxslayer), [▶️ Chegg](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-cloudflare-chegg) |
| **[Akamai](tests/tests/antibots/akamai.spec.ts)**                  | [▶️ PlayStation](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-akamai-playstation), [▶️ WizzAir](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-kasada-wizzair), [▶️ StubHub](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-akamai-stubhub), [▶️ AirCanada](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-akamai-aircanada)             |
| **[Kasada](tests/tests/antibots/kasada.spec.ts)**                  | [▶️ Kick](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-kasada-kick), [▶️ PlayStation](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-akamai-playstation), [▶️ Twitch](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-kasada-twitch), [▶️ WizzAir](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-kasada-wizzair) |
| **[F5 Shape](tests/tests/antibots/shape.spec.ts)**                 | [▶️ Southwest](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-shape-southwest), [▶️ Target](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-shape-target), [▶️ Temu](//botswin.github.io/BotBrowser/video_player/index.html?video=websites-temu-temu), [▶️ Nordstrom](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-shape-nordstrom)                                                                                      |
| **[reCAPTCHA](tests/tests/antibots/recaptcha.spec.ts)**            | [▶️ reCAPTCHA v3](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-recaptcha-v3), [▶️ reCAPTCHA v2](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-recaptcha-v2)                                                                                 |
| **[PerimeterX](tests/tests/antibots/perimeterx.spec.ts)**          | [▶️ TextNow](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-perimeterx-textnow), [▶️ Grubhub](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-perimeterx-grubhub), [▶️ Zillow](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-perimeterx-zillow)                                                                                    |
| **[Imperva (Incapsula)](tests/tests/antibots/incapsula.spec.ts)**  | [▶️ CopaAir](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-incapsula-copaair), [▶️ TAROM](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-incapsula-tarom)                                                                       |
| **[DataDome](tests/tests/antibots/datadome.spec.ts)**              | [▶️ ShutterStock](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-datadome-shutterstock), [▶️ SeatGeek](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-datadome-seatgeek), [▶️ Hermes](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-datadome-hermes), [▶️ SoundCloud](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-datadome-soundcloud), [▶️ Paypal](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-datadome-paypal)                                                                           |
| **[hCaptcha](tests/tests/antibots/hcaptcha.spec.ts)**              | [▶️ EpicGames](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-hcaptcha-epicgames), [▶️ Discord](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-hcaptcha-discord), [▶️ Steam](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-hcaptcha-steam), [▶️ RiotGames](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-hcaptcha-riotgames), [▶️ TITAN22](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-hcaptcha-titan22), [▶️ HABBO](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-hcaptcha-habbo)                                                                       |
| **[FunCaptcha](tests/tests/antibots/funcaptcha.spec.ts)**          | [▶️ Blizzard](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-funcaptcha-blizzard), [▶️ Roblox](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-funcaptcha-roblox), [▶️ Hotmail](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-funcaptcha-hotmail)                                                                       |
| **[Qrator](tests/tests/antibots/qrator.spec.ts)**                  | [▶️ MTS.ru](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-qrator-mts)                                                                        |
| **[TencentCaptcha](tests/tests/antibots/tencentcaptcha.spec.ts)**  | [▶️ One-Click CAPTCHA](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-tencentcaptcha-oneclick)                                                                       |
| **[Accertify](tests/tests/antibots/accertify.spec.ts)**            | [▶️ Grubhub](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-perimeterx-grubhub)                                                                       |
| **[Forter](tests/tests/antibots/forter.spec.ts)**                  | [▶️ Grubhub](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-perimeterx-grubhub)                                                                       |
| **[Adscore](tests/tests/antibots/adscore.spec.ts)**                | [▶️ Test Video](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-adscore-adscore)                                                                                          |
| **[MTCaptcha](tests/tests/antibots/mtcaptcha.spec.ts)**            | [▶️ Invisible Captcha](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-mtcaptcha-invisiblecaptcha)                                                                                          |
| **[FriendlyCaptcha](tests/tests/antibots/friendlycaptcha.spec.ts)**  | [▶️ Captcha Demo](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-friendlycaptcha-captchademo)                                                                                          |
| **[YandexCaptcha](tests/tests/antibots/yandexcaptcha.spec.ts)**  | [▶️ SmartCaptcha](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-yandexcaptcha-smartcaptcha)                                                                                          |
| **ThreatMetrix**                                                   | 🚧 Coming Soon                                                                                                                                                                                                                                                                            |
| **ProtectedMedia**                                                 | 🚧 Coming Soon                                                                                                                                                                                                                                                                            |
| **[Fake Vision](tests/tests/antibots/fvpro.spec.ts)**              | [▶️ FakeVision](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-fvpro-fvpro)                                                                                           |
| **[FingerprintJS](tests/tests/antibots/fingerprintjs.spec.ts)**    | [▶️ BotDetection](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-fingerprintjs-botdetection), [▶️ Fingerprint Pro](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-fingerprintjs-playground)                                                         |
| **[CreepJS](tests/tests/antibots/creepjs.spec.ts)**                | [▶️ Test Video](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-creepjs-creepjs), [▶️ Android Profile](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-creepjs-creepjs-Android)                                                                                            |
| **[BrowserScan](tests/tests/antibots/browserscan.spec.ts)**        | [▶️ Test Video](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-browserscan-browserscan)                                                                                     |
| **[Pixelscan](tests/tests/antibots/pixelscan.spec.ts)**            | [▶️ Test Video](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-pixelscan-pixelscan), [▶️ Android Profile](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-pixelscan-pixelscan-Android)                                                                                         |
| **[iphey](tests/tests/antibots/iphey.spec.ts)**                    | [▶️ Test Video](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-iphey-iphey), [▶️ Android Profile](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-iphey-iphey-Android)                                                                                               |
| **[device&browserinfo](tests/tests/antibots/deviceandbrowserinfo.spec.ts)**     | [▶️ Test Video](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-deviceandbrowserinfo-deviceandbrowserinfo)                                                                                               |
| **[FingerprintScan](tests/tests/antibots/fingerprintscan.spec.ts)**            | [▶️ Test Video](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-fingerprintscan-fingerprintscan)                                                                                       |
| **[brotector](tests/tests/antibots/brotector.spec.ts)**            | [▶️ Test Video](//botswin.github.io/BotBrowser/video_player/index.html?video=antibots-brotector-brotector)                                                                                       |



| Service & Scripts | Antibot Services | Test Results |
|------------------|-------------------|--------------|
| **[Nike](tests/tests/websites/nike.spec.ts)** | F5 Shape Security | ✅ Success  [▶️ Checkout Video](//botswin.github.io/BotBrowser/video_player/index.html?video=websites-nike-checkout)  |
| **[Instagram](tests/tests/websites/instagram.spec.ts)** | Generic Antibot | ✅ Success  [▶️ Signup Video](//botswin.github.io/BotBrowser/video_player/index.html?video=websites-instagram-signup)  |
| **[TikTok](tests/tests/websites/tiktok.spec.ts)** | TiktokVM | ✅ Success [▶️ Signup Video](//botswin.github.io/BotBrowser/video_player/index.html?video=websites-tiktok-signup) |
| **[Walmart](tests/tests/websites/walmart.spec.ts)** | PerimeterX | ✅ Success [▶️ Test Video](//botswin.github.io/BotBrowser/video_player/index.html?video=websites-walmart-walmart) |
| **[Temu](tests/tests/websites/temu.spec.ts)** | F5 Shape Security | ✅ Success [▶️ Test Video](//botswin.github.io/BotBrowser/video_player/index.html?video=websites-temu-temu) |
| **LinkedIn** | Generic Antibot | ✅ Success |
| **[TicketMaster](tests/tests/websites/ticketmaster.spec.ts)** | PerimeterX, FingerprintJS, reCAPTCHA | ✅ Success  [▶️ Checkout Video](//botswin.github.io/BotBrowser/video_player/index.html?video=websites-ticketmaster-checkout) |
| **Shein** | F5 Shape Security, FingerprintJS, Forter | ✅ Success |
| **Facebook** | FunCaptcha, reCAPTCHA    | ✅ Success |
| **Bet365** | Generic Antibot | ✅ Success |

...and many more


---


## 📚 Additional Resources

### Profile Generation

We do not provide the private key required to generate new profiles. If you need additional profiles, please contact us directly. We maintain over **300,000 real user browser fingerprints** to support your needs.

**Contact Information:**

| Contact Method | Link |
|----------------|------|
| 📧 Email | [botbrowser@bk.ru](mailto:botbrowser@bk.ru) |
| 📱 Telegram | [@botbrowser_support](https://t.me/botbrowser_support) |

### Building from Source

If you wish to compile your own version of Chromium with our modifications, follow the instructions provided [here](build).


---

## ⚠️ DISCLAIMER

**BotBrowser** is intended for **legitimate use cases** that comply with all applicable **laws and regulations**. **Misuse** of this tool to violate the **terms of service** of websites or engage in illegal activities **is strictly prohibited**.
