# BotBrowser Profiles

In BotBrowser, everything starts with a profile. Your stealth, reliability, and success depend on it.

## What Are Profiles?

Profiles are encrypted files that define the complete environment a browser instance should emulate. They include:

- **Browser fingerprint** information (user agent, WebGL, screen size)
- **System-level settings** (proxy, timezone, language, window size)
- **Hardware emulation** (device memory, CPU architecture, screen properties)
- **Platform simulation** (Android behavior, OS-specific features)

By using a profile, BotBrowser launches sessions that mimic real human devices and browsing patterns across different operating systems, achieving maximum stealth against sophisticated antifraud and antibot detection systems.

**💡 Profile = Complete Virtual Browser Identity**

## 🤔 Understanding BotBrowser Profiles

**Important:** BotBrowser profiles work differently from typical browser fingerprinting tools.

### 💻 What BotBrowser Profiles Actually Are:
**Device Models** - Think of them as specific hardware configurations.

**Real-world analogy:**
- Profile = "MacBook Pro M4 Max" (the device type)
- You can simulate User A in USA using this "M4 Max" profile
- You can simulate User B in Europe using the same "M4 Max" profile  
- Same device hardware, but different users and environments

### 🔧 How Profiles Work:
- **Profile defines the device fingerprint** (hardware, browser capabilities)
- **Environment settings differentiate users** (proxy, timezone, language, cookies)
- **Each session can have unique characteristics** while maintaining device consistency

**Example:** Using a "MacBook Pro M3" profile:
- User A: US proxy + English + EST timezone
- User B: Germany proxy + German + CET timezone
- User C: Japan proxy + Japanese + JST timezone

All appear as different users on the same device type.

## ⚠️ Profile Types

### 🚨 Demo Profiles (Testing Only)

**Limitations:**
- Limited-time testing only
- No headless mode support
- No automation framework connection
- No extension loading
- **Production use results in immediate bans** (widely circulated and flagged)

### 🌟 Premium Profiles (Production Ready)

**Features:**
- **300,000+ authentic fingerprints** from real users
- Unique and never reused
- Private and secure
- Based on genuine device/browser data
- Production-safe for scalable automation

### 📬 Get Premium Profiles

| Contact Method | Link |
|----------------|------|
| 📧 Email | [botbrowser@bk.ru](mailto:botbrowser@bk.ru) |
| 📱 Telegram | [@botbrowser_support](https://t.me/botbrowser_support) |

*Fast delivery, confidentiality, and professional support guaranteed.*

---

## 📚 Using Profiles

### CLI Usage

```bash
chromium --bot-profile="/absolute/path/to/chrome139_win11_x64.enc"
```

**⚠️ Version Compatibility:**
- BotBrowser binary version must match profile version
- Example: BotBrowser v139 only supports v139 profiles
- Use absolute paths if relative paths fail to load

> 📖 **For all available CLI flags**, see [CLI Flags Reference](../cli-flags.md)

### Automation Framework Integration

**[Playwright](examples/playwright) / [Puppeteer](examples/puppeteer) Example:**

```javascript
const browser = await chromium.launch({
  headless: true,
  executablePath: BOTBROWSER_EXEC_PATH,
  args: [
    `--bot-profile=${BOT_PROFILE_PATH}`,
    '--proxy-server="socks5://usr:pwd@127.0.0.1:8989"',
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


---

## ⚙️ Profile Configuration

**2025 Update:** Full environment customization now supported directly inside profiles.

**Configurable Settings:**
- Proxy configuration
- Timezone and language
- Screen size and device pixel ratio
- System properties

👉 **See [`profile-configs.md`](https://github.com/botswin/BotBrowser/blob/main/profiles/profile-configs.md) for complete configuration options.**

*No more manual CDP configuration required!*

---

## ✨ Key Features

### 🛠️ Unique Capabilities

- [x] **Bypass Incognito mode checks**
- [x] **Avoid CDP leaks** — native CDP fingerprint protection
- [x] **Custom page history** — enhance fingerprint realism
- [x] **Keep pages active** even when they lose focus
- [x] **Set proxy (host, username, password) directly via profile**
- [x] **Set language and timezone** based on proxy or manually
- [x] **WebRTC leak protection**
- [x] **Canvas / WebGL noise injection**
- [x] **Audio fingerprinting noise** (enhanced to bypass FunCaptcha)
- [x] **Control scroll bar width**
- [x] **Bypass CDM (Content Decryption Module) detection**
- [x] **Customizable remote-debugging-address** (bind to 0.0.0.0 for Scraping APIs)
- [x] **Full window/screen size control via profile**
- [x] **Advanced matchMedia simulation** — bypass complex CSS feature detection
- [x] **Android fingerprint simulation** — real mobile device behavior emulation
- [x] **Precision GPU and WebGL parameter spoofing**

---

## 📊 Fingerprint Coverage

| Category | Covered Elements |
|----------|------------------|
| **Browser** | Version, userAgentData, userAgent |
| **Operating System** | Windows, macOS, Ubuntu, Android simulation |
| **Navigator** | Languages, plugins, permissions, battery, keyboard |
| **Graphics** | WebGL, WebGL2, GPUAdapter, GPUDevice |
| **Hardware** | Screen, CPU, system fonts, system colors |
| **Media** | MediaDevices, MimeTypes, AudioContext |
| **Advanced** | Emoji, Unicode, matchMedia control |

## 📌 Best Practices

✅ **Use Premium Profiles** for production traffic  
✅ **Configure realistic settings** (screen size, devicePixelRatio, proxy)  
✅ **Choose appropriate profiles** (Android for mobile operations)  
✅ **Keep profiles updated** with latest Chrome versions  
✅ **Test thoroughly** before production deployment
