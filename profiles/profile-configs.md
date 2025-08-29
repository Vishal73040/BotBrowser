# 📚 BotBrowser Profile Configuration Guide

**For Academic and Authorized Testing Environments**

This guide provides **BotBrowser's fingerprint customization system** for controlled testing and academic environments. Learn to configure synthetic profiles and dynamic CLI overrides for authorized compatibility testing.

⚠️ **Usage Policy:** This configuration system is designed for academic study, security analysis, and authorized testing environments only. Use in compliance with institutional policies and applicable laws.

> 💡 **CLI-First Configuration:** Use [`--bot-config-*` flags](../cli-flags.md#⚙️-profile-configuration-override-flags) for runtime fingerprint configuration without modifying encrypted profiles. Highest priority configuration system suitable for authorized testing environments.

> 🌍 **Smart Auto-Configuration:** BotBrowser automatically configures timezone, locale, and languages based on proxy IP. Override only for specific testing scenarios.

> 🔒 **Data Privacy:** All profile data uses synthetic/aggregated configurations for academic compliance. BotBrowser does not collect or distribute personal or user-identifying data. All fingerprints are synthetic/aggregated for academic compliance. Dynamic CLI overrides preserve profile integrity while enabling flexible customization.

## 📋 Table of Contents

- [⚙️ Configuration Priority System](#️-configuration-priority-system)
- [⚠️ Important: Profile Data Integrity](#️-important-profile-data-integrity)
- [🔧 How to Apply Configuration](#-how-to-apply-configuration)
- [🛠️ Configurable Fields](#️-configurable-fields)
- [✨ Example Profile `configs` Block](#-example-profile-configs-block)
- [📌 Important Notes](#-important-notes)
- [🔥 Best Practices](#-best-practices)

---

## ⚙️ Configuration Priority System

BotBrowser uses a three-tier priority system for configuration:

### Priority Order (Highest to Lowest)

1. **🥇 CLI `--bot-config-*` flags** - Highest priority, overrides everything
2. **🥈 Profile `configs` settings** - Medium priority, overrides profile defaults
3. **🥉 Profile default values** - Lowest priority, built-in profile data

### 💡 Why CLI Flags Are Recommended

- **✅ Highest Priority:** Always takes precedence over profile settings
- **✅ No Profile Editing:** Avoid modifying complex encrypted profile files
- **✅ Dynamic Configuration:** Perfect for automation and different environments
- **✅ Session Isolation:** Different settings per browser instance without conflicts

**Example:**
```bash
# Use CLI flags to override profile settings dynamically (timezone/locale auto-detected)
chromium-browser \
  --bot-profile="./profiles/profile.enc" \
  --bot-config-browser-brand="edge"
```

> 📖 **Complete CLI flags reference:** [CLI Flags Reference](../cli-flags.md#⚙️-profile-configuration-override-flags)

---

## ⚠️ Important: Profile Data Integrity

**Profile data uses synthetic/aggregated configurations; unless you are certain about the impact of a change, do not override any fingerprint property - keeping the defaults ensures the most consistent behavior for academic testing.**

## 🔧 How to Apply Configuration

All configurations are embedded in the `configs` field inside your profile JSON structure.

### 📁 File-Based Configuration Only

> 💡 **Important:** BotBrowser only accepts profile input as a file. Shell command piping (e.g., `--bot-profile=<(echo '{"x": 1}')`) is **not supported** due to CLI argument length and file descriptor limitations.

**✅ Best Practice:**

1. Build your profile JSON dynamically in your code
2. Write it to a temporary file (e.g., `/tmp/myprofile.json`)
3. Pass the path to `--bot-profile`
4. Delete the file afterward if needed


---

## 🛠️ Configurable Fields

### General Settings

| Field                           | Description                                                                               | Default     |
| ------------------------------- | ----------------------------------------------------------------------------------------- | ----------- |
| `languages`                     | HTTP `Accept-Language` header values and `navigator.languages`. `"auto"` = IP-based       | `"auto"`    |
| `locale`                        | Browser locale (e.g., `"en-US"`, `"fr-FR"`, `"de-DE"`). `"auto"` = derived from proxy IP and language settings | `"auto"`    |
| `uaFullVersion`                 | Overrides the full browser version returned by `navigator.userAgentData.fullVersion`; must match the Chromium major version (e.g. for major version 138, the full version must start with “138.”). | `""`        |
| `colorScheme`                   | Preferred color scheme: `'light'` or `'dark'`.                                            | `"light"`   |
| `disableDeviceScaleFactorOnGUI` | If `true`, ignore device scale factor for GUI elements (disable DPI-based UI scaling).    | `false`     |
| `timezone`                      | `"auto"` = IP-based; `"real"` = system timezone; any other string = custom timezone name. | `"auto"`    |
| `location`                      | `"auto"` = IP-based; `"real"` = system (GPS); object = custom coordinates (`lat`, `lon`). | `"auto"`    |
| `browserBrand`                  | override for `navigator.userAgentData.brands` and related UA fields. Supports "chromium", "chrome", "edge", "brave". | `"chrome"`    |
| `injectRandomHistory`           | Optionally injects synthetic navigation history for academic experiments in browser state testing. | `false`    |
| `disableDebugger`               | Prevents unintended interruptions from JavaScript debugger statements during automated academic workflows. | `true`     |
| `keyboard`                      | Choose keyboard fingerprint source: `"profile"` (emulated from profile) or `"real"` (use system keyboard). | `"profile"` |

### Proxy Settings

| Field            | Description                               | Default |
| ---------------- | ----------------------------------------- | ------- |
| `proxy.server`   | Proxy server address (`scheme://username:password@hostname:port`).   | `""`    |
| `proxy.username` | Proxy username for basic auth (optional). | `""`    |
| `proxy.password` | Proxy password for basic auth (optional). | `""`    |

> 💡 **Better Approach:** Use CLI flags for proxy configuration:
> ```bash
> # Embedded credentials (recommended)
> --proxy-server="http://username:password@proxy.example.com:8080"
>
> # Separate credentials
> --proxy-server="proxy.example.com:8080"
> --proxy-username="username"
> --proxy-password="password"
> ```
>
> 📖 **For complete CLI flags documentation**, see [⚙️ CLI Flags Reference](../cli-flags.md)

⚠️ **Important:** When using automation frameworks (Puppeteer/Playwright), always use CLI flags like `--proxy-server` instead of framework-specific proxy options (like `page.authenticate()` or `proxy` parameter in `launch()`). This ensures BotBrowser can retrieve geo information from proxy IP for accurate timezone/locale auto-configuration.

⚠️ **Proxy configurations are intended for authorized networks only. They must not be used for unauthorized data collection or abuse.**

### Window & Screen Settings

| Field    | Description                                                                                              | Default     |
| -------- | -------------------------------------------------------------------------------------------------------- | ----------- |
| `window` | `"profile"` = use profile’s dimensions;`"real"` = use system window size;object = custom dims.           | `"profile"` |
| `screen` | `"profile"` = use profile’s screen metrics;`"real"` = use system screen metrics;object = custom metrics. | `"profile"` |

### Engine & Device Simulation

| Field          | Description                                                                              | Default     |
| -------------- | ---------------------------------------------------------------------------------------- | ----------- |
| `webrtc`       | `"profile"` = profile’s WebRTC config;`"real"` = native WebRTC;`"disabled"` = no WebRTC. | `"profile"` |
| `fonts`        | `"profile"` = profile’s embedded font list;`"real"` = system-installed fonts.            | `"profile"` |
| `webgl`        | `"profile"` = profile’s WebGL parameters;`"real"` = system WebGL;`"disabled"` = off.     | `"profile"` |
| `webgpu`       | Same semantics as `webgl`.                                                               | `"profile"` |
| `mediaDevices` | `"profile"` = fake camera/mic devices;`"real"` = actual system devices.                  | `"profile"` |
| `speechVoices` | `"profile"` = profile’s TTS voices;`"real"` = system voices.                             | `"profile"` |

### Noise Toggles

| Field               | Description                             | Default |
| ------------------- | --------------------------------------- | ------- |
| `noiseCanvas`       | Introduce controlled variance to Canvas for academic fingerprint resilience testing. | `true`  |
| `noiseWebglImage`   | Introduce controlled variance to WebGL for academic fingerprint resilience testing.   | `true`  |
| `noiseAudioContext` | Introduce controlled variance to AudioContext for academic fingerprint resilience testing.  | `true`  |
| `noiseClientRects`  | Introduce controlled variance to client rects for academic fingerprint resilience testing.  | `false` |
| `noiseTextRects`    | Introduce controlled variance to TextRects for academic fingerprint resilience testing.     | `true`  |

---

## ✨ Example Profile `configs` Block

```json5
{
  "configs": {
    // Browser locale (auto = derived from proxy IP and language settings)
    "locale": "auto",

    // Accept-Language header values (auto = IP-based detection)
    "languages": "auto",

    // Color scheme: 'light' or 'dark'
    "colorScheme": "light",

    // Proxy settings: hostname:port, with optional basic auth
    "proxy": {
      "server": "1.2.3.4:8080",
      "username": "",
      "password": ""
    },

    // Disable GUI scaling based on device scale factor (ignore DevicePixelRatio for UI scaling)
    "disableDeviceScaleFactorOnGUI": false,

    // timezone: 'auto' = based on IP; 'real' = system timezone; any other string = custom
    "timezone": "auto",

    // location: 'auto' = based on IP; 'real' = system (GPS) location;
    // object = custom coordinates
    "location": "auto", // or "real" or { latitude: 48.8566, longitude: 2.3522 }

    // window: 'profile' = use profile’s dimensions;
    // 'real' = use system window size;
    // object = custom dimensions
    "window": "profile", // or "real" or { innerWidth: 1280, innerHeight: 720, outerWidth: 1280, outerHeight: 760, screenX: 100, screenY: 50, devicePixelRatio: 1 }

    // screen: 'profile' = use profile’s screen metrics;
    // 'real' = use system screen metrics;
    // object = custom metrics
    "screen": "profile", // or "real" or { width: 1280, height: 720, colorDepth: 24, pixelDepth: 24 }

    // WebRTC: 'profile' = profile’s settings; 'real' = native; 'disabled' = no WebRTC
    "webrtc": "profile",

    // Fonts: 'profile' = profile’s embedded list; 'real' = system-installed fonts
    "fonts": "profile",

    // WebGL: 'profile' = profile’s parameters; 'real' = system implementation; 'disabled' = off
    "webgl": "profile",

    // WebGPU: same semantics as WebGL
    "webgpu": "profile",

    // Media devices: 'profile' = fake camera/mic devices; 'real' = actual system devices
    "mediaDevices": "profile",

    // Speech voices: 'profile' = profile’s synthetic voices; 'real' = system voices
    "speechVoices": "profile",

    // noiseCanvas: Introduce controlled variance to Canvas for academic fingerprint resilience testing
    "noiseCanvas": true,

    // noiseWebglImage: Introduce controlled variance to WebGL for academic fingerprint resilience testing
    "noiseWebglImage": true,

    // noiseAudioContext: Introduce controlled variance to AudioContext for academic fingerprint resilience testing
    "noiseAudioContext": true,

    // noiseClientRects: Introduce controlled variance to client rects for academic fingerprint resilience testing
    "noiseClientRects": false,

    // noiseTextRects: Introduce controlled variance to TextRects for academic fingerprint resilience testing
    "noiseTextRects": true,

    // browserBrand: override for `navigator.userAgentData.brands` and related UA fields. Supports "chromium", "chrome", "edge", "brave"
    "browserBrand": "chrome",

    // injectRandomHistory: Optionally injects synthetic navigation history for academic experiments in browser state testing
    "injectRandomHistory": false,

    // disableDebugger: Prevents unintended interruptions from JavaScript debugger statements during automated academic workflows
    "disableDebugger": true,

    // keyboard: choose keyboard fingerprint source: "profile" (emulated from profile) or "real" (use system keyboard)
    "keyboard": "profile",
  }
}


```

⚠️ Open the `.enc` file and place the `configs` block before the `key` block, keeping the entire .enc file in JSON format:

<img width="758" alt="image" src="https://github.com/user-attachments/assets/e34b1557-d7cd-4257-b709-b76ec1b0409b" />

---

⚠️ Eventually, your modified `.enc` profile should have this structure:

```json5
{
  "configs": {
    // ...
  },
  "key": {
    // ...
  },
  "version": {
    // ...
  },
  "profile": {
    // ...
  }
}
```



---

## 📌 Important Notes

### Configuration Behavior
- Profile data uses synthetic/aggregated configurations; change only if necessary and you understand the impact.
- All string fields support multi-purpose values: string literal (`"auto"`, `"real"`, or custom), or object schema when more parameters are needed.
- If a field is omitted, BotBrowser uses profile defaults where appropriate.
- CLI `--bot-config-*` flags **override** profile `configs` settings with highest priority
- **uaFullVersion Tip**: When JavaScript calls `navigator.userAgentData.fullVersion`, BotBrowser will replace the default value with this field. Ensure that the specified full version corresponds to the Chromium engine’s major version (e.g., Chromium 138 → full version should begin with “138.”). You can look up the latest full version for each major release on https://chromiumdash.appspot.com/releases.

---

## 🔥 Best Practices

### Fingerprint Consistency
- **Screen coordination:** Always adjust **window size** and **screen size** together to avoid suspicious fingerprint gaps
- **Geographic alignment:** Match `timezone` and `location` to your proxy's region to avoid fingerprint inconsistencies
- **Display accuracy:** Set a realistic **devicePixelRatio** based on the system being emulated:
  - `2` for macOS Retina displays
  - `1` for standard monitors
  - `1.5` for some high-DPI Windows displays

### Connection Security
- **Proxy authentication:** Always define proxy credentials if using authenticated proxies to avoid connection leaks
- **Protocol consistency:** Ensure proxy protocol matches your network requirements

### File Management
- **Dynamic generation:** If you're generating a profile in code, **save it as a temporary file** (e.g., `/tmp/myprofile.json`) and pass the file path via `--bot-profile`
- **Avoid piping:** Never pipe large JSON blobs via `echo`, as this is unsupported and unstable
