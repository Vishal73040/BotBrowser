# 📚 BotBrowser Profile Configuration Guide

This guide unlocks **BotBrowser's advanced fingerprint customization system** - the most sophisticated browser identity control available. Master both authentic user profiles and dynamic CLI overrides for unparalleled stealth automation.

> 💡 **Revolutionary CLI-First Approach:** Use powerful [`--bot-config-*` flags](../cli-flags.md#⚙️-profile-configuration-override-flags) for instant fingerprint changes without touching encrypted profiles. Highest priority configuration system designed for enterprise automation.

> 🌍 **Intelligent Auto-Detection:** BotBrowser's advanced geolocation engine automatically configures timezone, locale, and languages based on your proxy IP. Override only for specialized targeting scenarios.

> 🔒 **Enterprise-Grade Security:** All profile data comes from real users with authentic fingerprints. Dynamic CLI overrides preserve profile integrity while enabling unlimited customization.

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

**✅ Highest Priority:** Always takes precedence over profile settings
**✅ No Profile Editing:** Avoid modifying complex encrypted profile files
**✅ Dynamic Configuration:** Perfect for automation and different environments
**✅ Session Isolation:** Different settings per browser instance without conflicts

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

**Profile data comes from real users; unless you are certain about the impact of a change, do not override any fingerprint property - keeping the defaults ensures the most authentic behavior.**

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
| `injectRandomHistory`           | If `true`, BotBrowser will simulate prior navigation by injecting a random number of history entries when opening a new tab (fake `history.back()`, etc.). | `false`    |
| `disableDebugger`               | If `true`, prevents JavaScript `debugger` statements from pausing execution, keeping flows non-interactive during automation. | `true`     |
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
| `noiseCanvas`       | Add subtle noise to Canvas fingerprint. | `true`  |
| `noiseWebglImage`   | Add noise to WebGL image fingerprint.   | `true`  |
| `noiseAudioContext` | Add noise to AudioContext fingerprint.  | `true`  |
| `noiseClientRects`  | Add noise to client rects fingerprint.  | `false` |
| `noiseTextRects`    | Add noise to TextRects fingerprint.     | `true`  |

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

    // noiseCanvas: true adds subtle noise to Canvas fingerprint; false disables it
    "noiseCanvas": true,

    // noiseWebglImage: true adds noise to WebGL image fingerprint; false disables it
    "noiseWebglImage": true,

    // noiseAudioContext: true adds noise to AudioContext fingerprint; false disables it
    "noiseAudioContext": true,

    // noiseClientRects: true adds noise to clientRects fingerprint; false disables it
    "noiseClientRects": false,

    // noiseTextRects: true adds noise to TextRects fingerprint; false disables it
    "noiseTextRects": true,

    // browserBrand: override for `navigator.userAgentData.brands` and related UA fields. Supports "chromium", "chrome", "edge", "brave"
    "browserBrand": "chrome",

    // injectRandomHistory: true will simulate prior navigation by injecting a random number of history entries when opening a new tab
    "injectRandomHistory": false,

    // disableDebugger: true prevents JavaScript debugger statements from pausing execution, keeping flows non-interactive during automation
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
- Profile data comes from real users; change only if necessary and you understand the impact.
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
