# CHANGELOG

**For Academic and Authorized Testing Environments**

⚠️ **ACADEMIC USE DISCLAIMER**

This software and its documented capabilities are provided for **academic study and authorized testing** purposes to demonstrate browser compatibility technologies in controlled environments. They are intended solely for **authorized testing environments** that comply with all applicable laws, regulations, and institutional policies. **Any misuse**—such as violating website terms of service or engaging in unlawful activities—**is strictly prohibited.**

⚠️ **This software is for compatibility validation in controlled, academic test environments only. It must not be used to bypass security controls on production systems.**


## [2025-09-06]

### Major
- **Chromium Core Upgrade → 140**
  Upgraded engine to Chromium **140** to maintain Chrome‑level parity and stealth consistency across APIs and anti‑bot surfaces.

### Improved
- **Slimmer Profiles (≈1.3 MB → ≈100 KB)**
  Refactored profile packaging **without reducing fingerprint coverage**. Results: faster startup, lower I/O, and lighter memory—better for high‑QPS orchestration and containerized runs.

### Fixed
- **WebGL2 `DRAW_BUFFER*`**
  Corrected an override that could set **`DRAW_BUFFER*`** state incorrectly during WebGL2 context creation—an issue certain sites probed for detection. Now adheres to spec/real‑device values, restoring pass rates.

---


## [2025-09-02]

### Major Feature
- **Framework‑less Automation — `--bot-script`**
  - Execute a JavaScript file **right after BotBrowser starts** in a privileged, non‑extension context where **`chrome.debugger`** is available.
  - Build automation **without Playwright/Puppeteer** while still driving CDP via `chrome.debugger` — reducing framework/CDP leak surface and giving **pre‑navigation control**.
  - **Docs:** Chrome `chrome.debugger` — <https://developer.chrome.com/docs/extensions/reference/api/debugger/>
  - **Usage:** `botbrowser --bot-profile=/path/profile.enc --bot-script=/path/boot.js`
  - **Examples:** [Bot Script Automation](examples/bot-script) (includes Cloudflare Turnstile automation)

### Improved
- **Embedded System Fonts (Cross‑OS)**
  - Bundled **more accurate system fonts** into resources so BotBrowser can emulate Windows/macOS/Linux text rendering with higher fidelity (wider glyph coverage, more consistent shaping/kerning).

- **Font Fallback Robustness (incl. Emoji)**
  - Tuned fallback chains so missing glyphs (emoji, CJK, rare symbols) resolve to the **same fonts a real device would use**.
  - Stabilizes **TextMetrics/Canvas** values and line‑breaking; strengthens resistance to **emoji/font‑based checks (e.g., hCaptcha)**.
  - **Workers parity:** Worker/SharedWorker/ServiceWorker now mirror the main thread’s fallback behavior to avoid cross‑thread hash mismatches.

---

## [2025-08-29]

### Major Update
- **Chromium 139.0.7258.156**
  Synced BotBrowser to the latest stable Chrome build for feature parity, current security patches, and minimized fingerprint drift.

### Added
- **Extended Media Types**
  Added broader `mediaTypes` coverage (e.g., `video/mp4;codecs="avc1.42C028"`) so capability checks reflect real browsers.
  *Improves MSE/EME and HTML5 playback compatibility.*

- **CLI: `--bot-config-media-types`**
  New override flag with modes: `profile`, `real`, and `expand` (allow expanding via local decoders). Fixes **#60**.
  *Lets you choose conservative profile-only behavior, native system reporting, or an expanded set when OS codecs are available.*

- **Performance Fingerprint Controls**
  Fine-grained tuning of performance surfaces (e.g., memory allocation timing, IndexedDB access latency, `requestAnimationFrame` delay).
  *Matches target host characteristics to resist high-sensitivity behavioral checks.*

- **Precise FPS Simulation**
  Emulate target refresh rate & input latency (e.g., simulate **120 FPS macOS** on Ubuntu).
  *Aligns rendering cadence and user input timing with the profiled device.*

- **GPUAdapter `textureHashes`**
  Added spoofing for `textureHashes` to strengthen GPU identity simulation.
  *Reduces GPU-surface inconsistencies across contexts.*

- **New Fingerprint APIs**
  Implemented `mediaCapabilities`, `videoDecoderSupport`, `audioDecoderSupport` and other WebCodecs-related capability signals.
  *Prevents easy capability-based bot detection.*

- **Faster Proxy IP Detection (Endpoint Race)**
  Parallel fetch to:
  `https://api64.ipify.org`, `https://ifconfig.me/ip`, `https://ident.me`, `https://icanhazip.com`, `https://checkip.amazonaws.com`, `https://ipecho.net/plain`.
  *Returns the first successful response to speed up network initialization.*

### Changed
- **Caches Off by Default**
  Disabled **GPU program cache** and **disk cache** by default.
  *Reduces persistent artifacts and cross-session correlation risk.*

### Improved
- **Ubuntu Cross-Worker Font Consistency**
  Workers (`Worker`/`SharedWorker`/`ServiceWorker`) now mirror the main thread's font defaults so emoji and special glyphs match.
  *Fixes CreepJS workers test (consistent canvas hashes across threads).*
  Test: https://abrahamjuliot.github.io/creepjs/tests/workers.html

### Fixed
- **Profile-Induced Crash (Access Violation)**
  Resolved rare crashes caused by specific profiles.
  *Improves stability when loading edge-case profiles.*

- **Windows `--bot-title` Dock Label**
  The custom title now also applies to the Windows taskbar/dock icon.
  *Parses and displays the label consistently across OSes.*

- **HTTP Proxy with VPN (TUN Mode)**
  Fixed cases where HTTP proxying failed when a VPN in TUN mode was active.
  *Restores connectivity in mixed-network setups.*

---

## [2025-08-22]

### Major Update
- **Chromium 139.0.7258.139**
Synced BotBrowser to the latest stable Chrome build for feature parity, security patches, and minimized fingerprint drift.

### Major Improvement — CLI Configuration Overrides
- **Configure fingerprints via startup flags (no profile edits required)**
New `--bot-config-*` flags override corresponding `configs` fields at runtime, enabling per-instance tuning in CI/CD and scripts.

#### Available Configuration Override Flags
```bash
--bot-config-browser-brand="chrome" # Browser brand: chrome, chromium, edge, brave
--bot-config-color-scheme="light" # Color scheme: light, dark
--bot-config-disable-debugger=true # Disable JavaScript debugger: true, false
--bot-config-disable-device-scale-factor=true # Disable device scale factor: true, false
--bot-config-fonts="profile" # Font settings: profile (use profile fonts), real (system fonts)
--bot-config-inject-random-history=true # Inject random history: true, false
--bot-config-keyboard="profile" # Keyboard settings: profile (emulated), real (system keyboard)
--bot-config-languages="auto" # Languages: "lang1,lang2" or "auto" (IP-based)
--bot-config-locale="auto" # Browser locale: e.g. en-US, fr-FR, de-DE, or "auto" (derived from IP/language)
--bot-config-location="40.7128,-74.0060" # Location: "lat,lon" or "auto" (IP-based)
--bot-config-media-devices="profile" # Media devices: profile (fake), real (system)
--bot-config-noise-audio-context=true # AudioContext noise: true, false
--bot-config-noise-canvas=true # Canvas fingerprint noise: true, false
--bot-config-noise-client-rects=false # Client rects noise: true, false
--bot-config-noise-text-rects=true # Text rects noise: true, false
--bot-config-noise-webgl-image=true # WebGL image noise: true, false
--bot-config-screen="profile" # Screen: profile (use profile), real (system screen)
--bot-config-speech-voices="profile" # Speech voices: profile (synthetic), real (system)
--bot-config-timezone="auto" # Timezone: auto (IP-based), real (system), or TZ name
--bot-config-ua-full-version="139.0.6778.85" # UA full version string matching Chromium major
--bot-config-webgl="profile" # WebGL: profile, real, disabled
--bot-config-webgpu="profile" # WebGPU: profile, real, disabled
--bot-config-webrtc="profile" # WebRTC: profile, real, disabled
--bot-config-window="profile" # Window: profile (use profile), real (system window)
```

**Benefits:** Highest priority (overrides profiles) · No JSON editing · Dynamic per-run configuration · Clean session isolation.
See **`CLI_FLAGS.md`** for details.

### Added
- **Android touch simulation**
Automatically enables `setEmitTouchEventsForMouse` when using an Android profile to better emulate touch input.

### Improved
- **Cross‑platform fidelity**
Refined per‑OS rendering differences (fonts, CSS, anti‑aliasing, text sizing) so profiles behave consistently across Windows/macOS/Android.
- **Locale auto‑adapt**
`locale: "auto"` now lets BotBrowser derive `locale` from proxy IP and language settings for realistic regional behavior.

---

## [2025-08-17]

### Added
- **`configs.disableDebugger` (default: `true`)**
  Prevents JavaScript `debugger` statements from pausing execution, keeping flows non-interactive during automation.

- **New Start Page (New Tab)**
  Replaced new-tab page to display live environment data: Proxy IP, Timezone, Latitude/Longitude, User-Agent, WebGL, etc., giving instant visibility into the BotBrowser context.

- **`configs.keyboard`**
  Choose keyboard fingerprint source: `profile` (emulated from profile) or `real` (use system keyboard).

### Optimized
- **Binary Size Reduction (Windows/macOS)**
  Removed unnecessary font assets; reduced binary size from ~**600 MB** to **< 300 MB**. Faster downloads and smaller disk footprint.

### Improved
- **TextMetrics Noise Stabilization**
  Switched from per-string noise to a unified, stable noise model and preserved floating‑point precision after noise injection—better resilience against **hCaptcha** text-metrics checks.

- **Dynamic Blink Feature Loading**
  Parses and applies Blink features at runtime based on the emulated environment (**Windows / macOS / Android**), improving realism and compatibility.

- **`--bot-title` UI Enhancement**
  Beyond window/icon labels, the custom title now also appears as a label to the right of the toolbar **Refresh** button, improving multi-window recognition.


---

## [2025-08-12]

### Added
- **Built-in H.264/H.265 (AVC/HEVC) Decoders**
  Enabled AVC/H.264 and HEVC/H.265 decoding out of the box (no external OS codecs required). Improves HTML5 video, MSE/EME playback compatibility, reduces codec-missing fallbacks, and keeps media behavior aligned with stock Chrome.

### Fixed
- **RFC 6381–Compliant MIME Codec Parsing**
  Reworked `mimeTypes` codec-string parser to follow RFC 6381 (e.g., `avc1.42E01E`, `mp4a.40.2`, `hvc1.1.6.L93.B0`), including case/spacing tolerance and multi-codec lists. Prevents inaccurate results in `canPlayType` and MSE SourceBuffer checks that could trigger antifraud heuristics.

---

## [2025-08-07]

### Major Update
- **Upgraded to Chromium 139**
  Synced BotBrowser to **Chromium 139**, bringing the newest web platform features, performance improvements, and security patches.
  Aligns rendering, networking, and fingerprint surfaces with upstream Chrome 139 to reduce detection risk and maintain site compatibility.

---

## [2025-07-31]

### Added
- **Browser Brand Config**: New `configs.browserBrand` option for `chromium`, `chrome`, `brave`, or `edge`, enabling high-fidelity brand emulation.
- **Brave Simulation**: Full Brave browser emulation including `userAgent`, `userAgentData`, and `navigator.brave.isBrave` properties.
- **Edge Simulation**: Full Microsoft Edge emulation covering `userAgent`, `userAgentData`, and Edge-specific APIs.
- **WebKit Emulation**: Preliminary WebKit engine simulation for basic Safari-like behaviors.
- **Random History Injection**: `configs.injectRandomHistory` injects realistic history entries (URLs, timestamps) on new page loads without an opener.

### Improved
- **CPU Core Count Simulation**: More precise spoofing of logical CPU cores based on profile to evade advanced detection.
- **WebGPU Limits Simulation**: Emulates `maxStorageBuffersInFragmentStage`, `maxStorageTexturesInFragmentStage`, `maxStorageBuffersInVertexStage`, and `maxStorageTexturesInVertexStage` parameters.
- **Android Window Defaults**: Android device simulation now defaults to `"window": "profile"`, using profile-defined screen and window dimensions for pixel-perfect accuracy.
- **Debugger Statement Blocking**: Blocks `debugger` statements by default to prevent DevTools detection by antibot scripts.

### Fixed
- **Android DevTools Window Mode**: Ensures DevTools open in a separate window (not docked) during Android simulation to avoid UI rendering issues.
- **Auto Language/Locale Sync**: Fixed issue where `configs.languages = "auto"` sometimes failed to update the browser’s locale automatically.
- **Iframe WebRTC IP Leak**: Fixed a WebRTC local IP leak when running inside iframes.


---

## [2025-07-21]

### Major Update
- **Upgraded to Chromium 138**: BotBrowser now runs on **Chromium 138**, matching the latest Chrome release for up‑to‑date features and security patches. (Ensures continued compatibility testing accuracy.)

### Fixed
- **System UI Font Simulation Crash**: Resolved an issue where simulating system UI fonts would crash the rendering process. (Improves stability when spoofing UI fonts.)

---


## [2025-07-18]

### Improved
- **macOS Auto-Quit on Last Tab**
  When the final tab closes on macOS, BotBrowser now quits automatically.
  *Ensures native macOS behavior and resource cleanup.*

### Fixed
- **WebRTC SDP IPv6 Compatibility**
  Resolved an issue where IPv6 addresses in SDP prevented compatibility testing. Now successfully supports Kasada and similar service environments.
  *Fixes SDP parsing to correctly simulate IPv6 candidate addresses.*

- **Locale Crash Fix**
  (https://github.com/botswin/BotBrowser/issues/52) Fixed a crash that occurred when `configs.locale` was set to `en-CA`.
  *Ensures valid locale strings load without causing rendering errors.*

### Added
- **Credentials in Proxy URLs**
  (https://github.com/botswin/BotBrowser/issues/50) `--proxy-server` and `configs.proxy.server` now accept URLs with embedded credentials (e.g., `http://user:pass@ip:port`, `socks5://user:pass@ip:port`).
  *Simplifies secure proxy configuration with standard URI formats, using embedded credentials in the proxy URL.*

- **Auto Language Detection**
  `configs.languages` now supports `auto` to set browser languages based on proxy IP's country and timezone.
  *Automatically syncs Accept-Language and navigator.languages with location.*

- **Google Header Simulation**
  Automatically injects [X-Browser-Validation](https://news.ycombinator.com/item?id=44527739) and related headers for google domains, emulating Chrome's behavior for Google compatibility testing.
  *Mimics Chrome's network validation for seamless compatibility analysis.*

- **Bookmarks Loader**
  Introduced `--bot-bookmarks` flag to load bookmarks from a specified JSON file at startup.
  *Allows pre-populating bookmarks for testing and automation.*

- **Custom Browser Title**
  Added `--bot-title` flag to set the browser window title and display it on the dock/taskbar icon.
  *Enhances session identification and UI branding.*

---

## [2025-07-09]

### Added
1. **SOCKS5 Proxy Authentication**
   Support for SOCKS5 proxies with username/password to secure authentication.

2. **Enhanced Proxy Authentication**
   Enhanced `--proxy-server` flag now supports embedded credentials in the URL format, eliminating the need for separate credential parameters.

3. **Bot Cookies Flag**
   Added `--bot-cookies` startup parameter to load cookies from a file or inline specification at launch.

4. **Real/Noise Config Toggles**
   (https://github.com/botswin/BotBrowser/issues/44) Completed support for toggling fingerprint vectors between `real` and `noise` modes via profile configs.

### Improved
5. **Proxy IP & WebRTC Refactor**
   Overhauled the logic for retrieving and spoofing proxy exit IPs in automation contexts, ensuring reliable public-IP simulation in WebRTC and preventing leaks.

6. **autoTimezone Consistency**
   Fixed cases where automatic timezone detection (`configs.autoTimezone`) did not apply, ensuring accurate time and locale behavior.

7. **WebGL Version Forgery**
   Now forges both `shadingLanguageVersion` and `version` in WebGL and WebGL2 contexts to avoid fingerprint signature checks.

8. **Imperva Strict Mode Compatibility**
   Adjusted noise injection to satisfy Imperva’s strict fingerprint detection without false positives.

9. **configs.languages Fix**
   Ensured `configs.languages` array applies correctly to HTTP `Accept-Language` headers and `navigator.languages`.

10. **Relative Path Support for --bot-profile**
    Fixed issue preventing relative file paths from working with `--bot-profile`, improving CLI flexibility.

11. **User-Data-Dir Mount Stability**
    Resolved intermittent failures mounting the specified `--user-data-dir` directory for profile persistence.

12. **WebGL Extension Parameter Refactor**
    Reorganized extraction and configuration logic for WebGL/WebGL2 extension parameters to improve compatibility with FingerprintJS Pro environments.

13. **Cross-Platform Feature Toggles**
    Added granular OS-specific toggles for features like audio latency on Windows, macOS, and Android, avoiding "browser tampering" flags in FPJS Pro.

14. **System Default Fonts Optimization**
    Updated default font families per OS (Windows: Times New Roman; macOS: Times; Android: Times New Roman), improving resilience against advanced font-based validation in Default Fonts, Emoji, and MathML tests.

### Fixed
15. **Screenshot Clip Respect**
    Fixed a bug where `Page.captureScreenshot` clip parameters were ignored when using profile-defined window and screen sizes.

---

### Example `configs` Snippet

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
    "location": "auto", // or "real" or { latitude: 8.8566, longitude: 2.3522 }

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
    "noiseTextRects": true
  }
}


```

---


## [2025-06-15]

### Improved
- **On-Demand Proxy Geo & Timezone Fetch**
  - Shifted proxy geolocation, timezone, and public IP retrieval from browser startup to page load via a request interceptor.
  - Eliminates startup delays while proxy is initializing and enables each `BrowserContext` to use a different proxy seamlessly for automated testing tasks.


---

## [2025-06-10]

### Major Update
- **Upgraded to Chromium 137**
  - Synced BotBrowser with the latest **Chromium 137** core, ensuring compatibility with new browser features, performance improvements, and security patches.

### Major Improvement
- **GPU Simulation Without Hardware or XDISPLAY**
  - Linux builds can now simulate GPU capabilities purely in software, without any physical GPU or X server.
  - Fully functional in headless mode with no `XDISPLAY` required, delivering accurate GPU fingerprints and hardware-accelerated rendering in CLI environments.

---

## [2025-05-25]

### Major Update
- **WebRTC Fingerprinting Refactor & Media Simulation**
  - Fully rewrote internal WebRTC logic to eliminate local IP leaks.
  - Now simulates `candidate` IPs using public IPv4 and IPv6 from proxy.
  - Reads all simulation data from profile and mimics realistic `audio/video` media capabilities.
  - Result: BotBrowser now scores **A+ / 100%** on CreepJS! 🎉
    ▶️ [View Demo](https://botswin.github.io/BotBrowser/video_player/index.html?video=antibots-creepjs-creepjs)

### Added
- **IP GEO Auto Geolocation**
  - Automatically simulates geolocation using proxy IP's geo data — no need for manual location overrides.

- **Incognito Extension Support**
  - Extensions are now enabled by default even in incognito mode and inside Playwright/Puppeteer contexts.

- **Build Metadata in chrome://version**
  - Added "BotBrowser Build Date" display in internal `chrome://version` for easy version tracking.

### Fixed
- **Kasada Fingerprint Leak Patch**
  - Fixed a critical fingerprint that was detectable by the latest Kasada release.

- **Permissions Simulation Overhaul**
  - Refactored permission handling for more accurate simulation (e.g., notifications, geolocation, mic).

- **WebRTC Consistency on New Tabs**
  - WebRTC + IP GEO now re-sync when opening new tabs, ensuring consistent fingerprints.

### Improved
- **Google API Request Blocking**
  - Blocked several Google internal endpoints to prevent metadata or activity leakage.

---

## [Unreleased]
- Chromium Extension fingerprint spoofing. [#3](https://github.com/botswin/BotBrowser/issues/3)

---

## [2025-05-13]

### Added
- **Auto Timezone via IP Lookup**
  - Introduced built-in IP geolocation detection based on proxy exit IP, allowing automatic adjustment of timezone and location.
  - Controlled via the `configs.autoTimezone` flag (enabled by default). See [PROFILE_CONFIGS.md](https://github.com/botswin/BotBrowser/blob/main/profiles/PROFILE_CONFIGS.md) for details.

- **Theme Control via `configs.colorScheme`**
  - Users can now specify browser color scheme (`dark` or `light`) through profile configuration. If omitted, the profile's native scheme is used.

### Improved
- **Bot-Profile Validation**
  - Improved error handling when launching with a missing or invalid `--bot-profile` path. The browser will now exit with a clear message.

- **Relative Path Support**
  - `--bot-profile` now supports relative paths in addition to absolute paths, simplifying multi-environment usage.

- **Default Font Simulation**
  - Embedded Windows, macOS, and Android system font libraries.
  - Allows simulating native font environments across platforms (e.g. load macOS fonts on Ubuntu), preventing rendering mismatches and fingerprint leaks.

- **matchMedia Hardened in WebPreferences**
  - Improved injection of matchMedia parameters directly into WebPreferences for greater reliability and fingerprint consistency.
  - Fixes occasional race conditions where matchMedia simulation failed to load.

- **System UI Font Emulation**
  - Enhanced simulation of OS-specific UI fonts like `kSmallCaption`, `kMenu`, and `kStatusBar` across Windows, macOS, and Linux for stronger OS fingerprint fidelity.

### Fixed
- **Stack Overflow Crash in Renderer**
  Fixed an issue where certain websites caused rendering process crashes due to JavaScript stack overflows.


---

## [2025-05-01]

### Improved
- **Upgraded to Chromium 136**
  - Synced BotBrowser to the latest **Chromium 136**, ensuring full compatibility with the most recent Chrome features, rendering behavior, and security updates.
  - Improves stealth and reduces fingerprint mismatches by staying aligned with upstream Chromium.

---

## [2025-04-26]

### Improved
- **Audio Fingerprint Noise Simulation**
  - Further optimized audio noise generation to better simulate realistic audio fingerprints, successfully supporting compatibility testing with **FunCaptcha** environments.

### Fixed
- **mimeTypes Fingerprint Handling**
  - Fixed an issue in MIME type processing to improve compatibility with systems relying on precise mimeTypes validation.

### Added
- **Custom Remote Debugging Address Support**
  - Enhanced the `--remote-debugging-address` flag to allow binding to custom IP addresses like `0.0.0.0`, making BotBrowser better suited for building compatibility testing APIs.

- **Profile-Based Window and Screen Size Control**
  - Added support for fully configuring **window size**, **screen size**, **device pixel ratio**, and related properties directly in the **Profile**, without needing to rely on CDP.
  - This new config overrides `--window-size`, `--window-position`, and similar flags.

Example:
```json
{
    "configs": {
        "locale": "auto",
        "timezone": "America/New_York",
        "proxy": {
            "server": "proxy.example.com:8080",
            "username": "user",
            "password": "pass"
        },
        "languages": "auto",
        "skipWindowAndScreenSizes": false, // =true, ignore this setting and you can use CDP to control the window size
        "window": {
            "innerWidth": 1203,
            "innerHeight": 743,
            "outerWidth": 1203,
            "outerHeight": 830,
            "screenX": 43,
            "screenY": 79,
            "devicePixelRatio": 2
        },
        "screen": {
            "availWidth": 1512,
            "availHeight": 944,
            "availLeft": 0,
            "availTop": 38,
            "width": 1512,
            "height": 982,
            "colorDepth": 30,
            "pixelDepth": 30
        }
    }
}
```


---

## [2025-04-15]

### Added
- **Android Fingerprint Emulation**
  - Introduced high-fidelity **Android fingerprint simulation** that successfully supports compatibility testing with advanced security systems.
  - Includes a fully prepared **Android profile** for testing and demonstration.

### Fixed
- **CSS vs Client Hint Inconsistency**
  - Resolved discrepancies between **sec-ch headers** (like `viewport`, `device-memory`) and JavaScript-detected CSS features (e.g., `inverted-colors`, `prefers-reduced-motion`, `prefers-reduced-transparency`) when using `matchMedia()`.

- **Web Share API Support for Android**
  - Fixed Web Share API availability to correctly reflect **Android device behavior** in supported environments.

- **navigator.plugins OS-Specific Simulation**
  - Refined plugin emulation logic to more precisely match different OS fingerprint behaviors via `navigator.plugins`.

---

## [2025-04-13]

### Added
- **Proxy, Timezone, Locale Support via Profile**
  - You can now configure `proxy` (with embedded credentials), `timezone`, and `locale` directly through the **profile**, removing the need for CDP-based injection.

- **JavaScript Stack Limit Control**
  - Fine-tuned the JS stack depth to closely match official Chrome's behavior.
  - Helps improve compatibility testing with systems that rely on deep recursive call stack validation.

### Improved
- **Advanced matchMedia CSS Fingerprint Handling**
  - Upgraded CSS-related matchMedia control to better simulate complex media conditions under real environments.
  - Enhances stealth against modern anti-scraping and antifraud strategies.

### Fixed
- **GPU Limits Mismatch on Ubuntu**
  - Resolved an inconsistency where GPUAdapter and GPUDevice limits didn’t align with the profile values on Ubuntu.

- **WebGL Extension and Parameter Bugs**
  - Fixed a bug where `getSupportedExtensions()` could fail or return incorrect parameters in edge cases, improving WebGL fingerprint integrity.


---

## [2025-04-06]

### Improved
- **Upgraded to Chromium 135**
  - Synchronized BotBrowser with the latest **Chromium 135**, ensuring full compatibility with the most recent Chrome version.
  - This upgrade improves compatibility testing accuracy, fingerprint consistency, and long-term maintenance as Chrome evolves.


---

## [2025-03-31]

### Improved
- **Faster Profile Loading**
  - Optimized the profile loading logic to significantly reduce load time and improve overall performance.

- **JavaScript Stack Limit Alignment**
  - Adjusted JavaScript stack limit to match official Chrome behavior exactly, improving parity and reducing detection risk.

- **Unified NaN Conversion Logic Across Architectures**
  - Ensured consistent `NaN` bit-level structure across both **x86** and **ARM**, avoiding architecture-specific fingerprint inconsistencies.
  - Prevents compatibility issues when testing x86-based emulation of ARM devices.

### Added
- **Notification API Normalization Across Platforms**
  - Standardized the behavior of the `Notification` API on different operating systems, closing a detection vector used by **DataDome**.

- **Chromium 134: `CustomizableSelect` Runtime Feature Support**
  - Added OS-specific behavior simulation for the experimental `CustomizableSelect` runtime feature, collected from profiles.

- **Advanced matchMedia Fingerprint Control (hCaptcha / DataDome Compatibility)**
  - Introduced fine-grained, profile-based control of `matchMedia()` output.
  - Successfully supports compatibility testing with **hCaptcha** and **DataDome** systems that rely on subtle media query validation.

- **New GPU Fingerprint Fields**
  - Added support for new `GPUAdapter` and `GPUDevice` fingerprint fields to enhance hardware-level spoofing accuracy.

### Removed
- **Scrollbar Width Spoofing**
  - Removed static 17px scrollbar width simulation, which proved unnecessary after extensive testing.
  - Thanks to community feedback for identifying its low fingerprinting value.

### Fixed
- **mimeTypes Fingerprint Handling**
  - Fixed a long-standing issue where important `mimeTypes` were missed during processing, improving detection resistance.


---


## [2025-03-20]

### Improved
- **Upgraded to Chromium 134.0.6998.95**
  - Synced to the latest **Chromium 134.0.6998.95**, improving compatibility testing accuracy with modern web environments.
  - Enhances testing reliability by aligning with the newest Chrome updates.

### Fixed
- **Stability Improvements & Bug Fixes**
  - Resolved several critical bugs to prevent unexpected browser crashes.
  - Improved overall performance and reliability.

---

## [2025-03-10]

### Improved
- **Kasada Compatibility Enhancement**
  - Updated core logic to successfully support the latest **Kasada** compatibility testing, ensuring uninterrupted testing workflows.

---

## [2025-03-04]

### Improved
- **GPU Emulation Performance Optimization**
  - Improved GPU simulation to run smoother in headless mode, reducing stutters and ensuring more stable performance.

- **Large Window Simulation on Small Screens**
  - Enabled simulation of larger browser windows on smaller screens, allowing mouse actions to interact with elements beyond the physical screen boundaries.

- **Removed CrashReporter**
  - Disabled Chromium's **CrashReporter** to prevent potential data leakage and improve performance.

### Fixed
- **Enhanced device_scale_factor Handling**
  - Fixed issues with incorrect `device_scale_factor` handling, preventing antifraud systems from detecting Retina screen anomalies through ultra-thin (0.5px) line rendering.


---

## [2025-02-23]

### Added
- **GPU Simulation Toggle for Headless Devices**
  - Introduced a new **toggle** that determines whether to simulate **GPU** based on the presence of a graphical interface, preventing failures on devices without GPU support.

- **CSS Fingerprint Enhancement**
  - Added fingerprint support for `CSSValueID::kSelecteditem` and `CSSValueID::kSelecteditemtext` to improve compatibility testing accuracy.

- **Blocked Local Port Scanning via WebSocket & Image Requests**
  - Prevented websites from scanning **local ports** using **WebSocket** or **Image requests** to detect automation-related services.
  - Blocked common ports associated with debugging and remote access:
    - `7070, 7071` (Remote debugging)
    - `3389` (RDP)
    - `5938, 5939` (TeamViewer)
    - `9222` (Chrome DevTools)
    - `6139, 6239, 6339` (Remote access)
    - `9839, 9939` (Remote debugging)
    - `5900, 5901` (VNC)

### Fixed
- **Prevent Local Video File Leaks**
  - Modified **FileVideoCaptureDevice** to ensure that opening local video files does not expose detectable traces to websites.

- **Improved Accept-Language Header Compatibility in Automation Frameworks**
  - Addressed a compatibility issue where automation frameworks like **Playwright** set a default **Accept-Language** header, which could cause inconsistencies with **Adscore** testing.
  - **CDP-based fingerprint modification is now restricted** to ensure stable compatibility testing when using **BotBrowser** with **CDP**.

### Improved
- **Enhanced 2D Canvas Fingerprint Compatibility**
  - Implemented a **new Skia-based anti-aliasing technique**, modifying the rendering algorithm at the lowest level to improve compatibility testing accuracy.

- **Advanced Audio Fingerprinting Enhancement**
  - Redesigned **audio processing** for **RealtimeAnalyser** and **ChannelData**, using an improved approach for **browserscan** compatibility testing.


---

## [2025-02-04]

### Improved
- **Enhanced Fingerprint Protection in AnalyserNode**
  - Added **noise injection** to **AnalyserNode**, making it significantly harder for detection systems to identify synthetic audio processing behavior.
  - This improvement further strengthens **Web Audio API** fingerprint obfuscation against targeted detection techniques.


---

## [2025-02-02]

### Major Upgrade
- **Canvas Noise Algorithm Overhaul:**
  Completely reworked the **Canvas noise algorithm** by integrating noise injection into **Skia's anti-aliasing process**, significantly reducing the likelihood of detection by advanced antibot systems.

### Fixed
- **WebGL Context readPixels Bug Fix:**
  Optimized **readPixels** in **WebGL Context** to prevent incorrect noise injection on solid-color images, ensuring accurate rendering.

### Added
- **Chrome 132 Test Profiles for Windows & macOS:**
  Released **test profiles** for **Chrome 132** on **Windows** and **macOS**, improving compatibility with the latest browser updates.


---

## [2025-01-24]

### Major Update
- **GPU Emulation on Headless Servers:** Introduced full emulation of GPU-related fingerprints on devices without dedicated GPUs. This allows **VPS servers (Linux, Windows)** without GPUs to accurately simulate GPU information, including `navigator.gpu`, `GPUAdapter`, `GPUAdapterInfo`, `GPUDevice`, `WebGLRenderingContext`, and `WebGL2RenderingContext`. This significantly reduces GPU rental costs while supporting GPU-sensitive testing systems, such as the latest **hCaptcha** environments, which validate `navigator.gpu`.

*These GPU emulation capabilities are for authorized academic benchmarking only, not intended for use against production services.*

### Added
- **GPUAdapterInfo and WGSLLanguageFeatures Fingerprinting:** Added support for fingerprinting **GPUAdapterInfo** and **WGSLLanguageFeatures**, ensuring comprehensive GPU-related data coverage.


---

## [2025-01-22]

### Improved
- **MimeTypes Fingerprinting:** Optimized **mimeTypes** fingerprinting by converting them to **ContentType**, followed by parsing `type` and `codecs` separately. This enhancement strengthens mimeTypes matching and reduces detection risks from antifraud techniques, such as those used by **Incapsula**.
- **Font Matching Accuracy:** Improved font matching logic to avoid unnecessary matches, significantly enhancing font accuracy and reducing false positives.

### Major Update
- **Windows Binary Release:** Reintroduced public release of **Windows binaries** with support for **Windows 11** and **Windows 10**. Future updates will include support for **Windows 7** and **Windows 8**.


---

## [2025-01-17]

### Improved
- **System Colors Configuration:** Added support for configuring system colors with **RGBA**, enabling more flexible and realistic color rendering.

### Fixed
- **Stability Bug Fix:** Resolved a crash issue by enabling **MDNS** (`enable_mdns`), ensuring improved stability on certain websites.

### Major Update
- **Version Release - 132.0.6834.84:** Updated to align with the latest **Chrome version**, ensuring compatibility with the most recent features and security updates.


---

## [2025-01-12]

### Fixed
- **Mimetypes, MediaRecorder, and MediaSource Fingerprints:** Fixed issues where fingerprints were not correctly recognized under certain conditions. Optimized handling to ignore spaces after `;` in mimetypes, addressing antifraud tricks that exploit this discrepancy.
  [Issue Reference: #8](https://github.com/botswin/BotBrowser/issues/8)

### Improved
- **Removed RLZ Support:** RLZ support has been removed as it is unnecessary for our product and caused issues in some scenarios.
- **AdInterest Group Support:** Enhanced support for **AdInterest**, specifically `getInterestGroupAdAuctionData` in Chrome, which now functions seamlessly in **BotBrowser**, improving resistance to antibot detection.
- **Fingerprint Caching:** Introduced caching for specific fingerprints to improve overall performance.

### Added
- **Bluetooth Support:** Added support for **Bluetooth emulation**, enabling realistic behavior even on Linux data center servers.
- **HarfBuzz Modification:** Made significant modifications to Chromium's **HarfBuzz** text shaping library, introducing factors that make fingerprint measurements more challenging to detect. This enhancement ensures diversity and undetectability for **canvas text fingerprints**, **DOM rects**, **SVG rects**, **emojis**, and **text metrics** through a single configuration.
  [Issue Reference: #6](https://github.com/botswin/BotBrowser/issues/6)
  [Reference Documentation](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/ui/text_rendering/render_text_overview.md#text-shaping)


---

## [2025-01-03]

### Improved
- **SwiftShader Parameter Adjustment:** Enhanced **SwiftShader** parameters on **Linux**, providing broader support and improved **EGL compatibility**.
- **Background Networking Control:** Replaced the `disable-background-networking` flag with a custom `botbrowser-disable-background-networking` flag to prevent **CDP** from interfering with **CDM downloads**.
- **PDF Embedding Behavior:** Disabled **PdfOopif** to ensure PDF embedding behaves similarly to standard browsers, reducing detection risks.

### Fixed
- **Document Client Rects Noise:** Resolved an issue where unnecessary noise was added to **Document client rects**, preventing detection by certain antibot systems.

### Added
- **TextMetrics Algorithm Enhancement:** Introduced a new **TextMetrics** algorithm that hashes text and the provided **factor** instead of relying on simple cumulative factors. This improvement reduces detection risks from advanced antibot systems like **F5 Shape**.


---

## [2024-12-29]

### Fixed
- **Pixelscan PDF Viewer Compatibility Fix:** Successfully resolved PDF viewer compatibility issues during **Pixelscan** testing. This issue was categorized as **P0 severity**.  [#11](https://github.com/botswin/BotBrowser/issues/11)

### Changed
- **WebPreferences Update:** Updated **WebPreferences** based on the `ostype` specified in the profile, replacing the previous `BUILDFLAG()` logic for improved flexibility and accuracy.

### Added
- **SelectionDirection Simulation:** Implemented **SelectionDirection** simulation to prevent detection by antibot systems.
 [#9](https://github.com/botswin/BotBrowser/issues/9)
- **GPU Optimization:** Updated compilation parameters for better **GPU** performance and enhanced compatibility.
- **BarcodeDetector Simulation:** Simulated **BarcodeDetector** behavior to mimic macOS characteristics, even when running on **Windows** or **Ubuntu**, as long as the profile specifies `macOS` as the `ostype`.  [#10](https://github.com/botswin/BotBrowser/issues/10)
- **Runtime Feature Simulation:** Added simulation support for the following **Runtime Features**, allowing their activation via profile configuration:
   - `CookieDeprecationFacilitatedTesting`
   - `AdInterestGroupAPI`
   - `FetchLaterAPI`


---

## [2024-12-26]

### Added
- **Enhanced GPU Fingerprinting:** Further improved support for **GPUSupportedLimits**, ensuring clear differentiation between **GPUDevice** and **GPUAdapter** data.

### Fixed
- **CDM Component Download:** Ensured CDM components are downloaded **independently of proxy settings**, guaranteeing successful downloads regardless of network configuration.
- **CDM Key System Handling:** Ensured **CDM Key system requests** complete loading before returning results to JavaScript, effectively preventing leakage detection.


---

## [2024-12-25]

### Added
- **GPU Fingerprinting Simulation:** Implemented support for simulating **GPUAdapter**, **GPUSupportedFeatures**, and **GPULimits** fingerprints.
- **WebGL Extension Support:** Added fingerprint support for the **MaxDrawBuffers** WebGL extension.

### Changed
- **args.gn Adjustments:** Modified `args.gn` to allow access to `navigator.getInterestGroupAdAuctionData` and `navigator.cookieDeprecationLabel`, aligning behavior with standard browser environments.
  [Commit Reference](https://github.com/botswin/BotBrowser/commit/e17e1746439d6ddc3d07e621d90aaf78ea847a2d)

### Fixed
- **WebGL2 Renderer and Vendor Bug:** Fixed an issue where `renderer` and `vendor` could not be retrieved under **WebGL2** environments.

### Improved
- **WebGL Parameters Simulation:** Inspired by **FakeVision**, refined WebGL parameters simulation to minimize detection risks through more cautious handling.
  [FakeVision Decompiled Source Code](https://github.com/botswin/FakeVision-Reverse)


---

## [2024-12-24]
### Fixed
- Resolved **CDM issue**, enhancing browser environment security.

### Added
- Successfully resolved **[Fake Vision](https://fv.pro)** compatibility issues, enhancing academic testing environment capabilities. [Test Code](tests/tests/antibots/fvpro.spec.ts), [▶️ Test Result (fv.pro)](https://botswin.github.io/BotBrowser/video_player/index.html?video=https://raw.githubusercontent.com/botswin/BotBrowser/main/tests/test-results/fvpro-test-fv-pro-BotBrowser-antibots/video.webm)
