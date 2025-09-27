# 🛠️ BotBrowser Patch Examples

**For Academic and Security Analysis Purposes**

> 🚧 These patches are select examples from BotBrowser's internals for academic study and security analysis. The full core remains proprietary for compatibility testing environments.

BotBrowser includes proprietary enhancements built on top of Chromium, developed independently for academic study and compatibility testing.

Only the GUI ([BotBrowserConsole](https://github.com/botswin/BotBrowser/tree/main/console)) is open-sourced.
The patches here are **select examples**, published to illustrate techniques for academic and security analysis purposes without exposing the full engine.

⚠️ **Usage Policy:** These patch examples are designed for academic study, security analysis, and authorized testing environments only. Use in compliance with institutional policies and applicable laws.

---

## 🔍 What’s Inside

- **Proprietary Foundation**
  BotBrowser’s engine is entirely homegrown—no forks, no references to external projects.

- **Selective Academic Disclosure**
  We publish only select patches in this folder for educational purposes. The rest remain proprietary to maintain compatibility testing integrity.

- **Comprehensive Compatibility Coverage**
  Our patches address fingerprinting consistency across various surfaces. Developed through:
  1. Security analysis of browser compatibility mechanisms
  2. V8-level study of fingerprint collection and validation
  3. Compatibility testing experience in controlled environments

## 📬 Contact (Academic Inquiries Only)

For academic collaboration or licensing review, please reach out:

| 📧 Email    | [botbrowser@bk.ru](mailto:botbrowser@bk.ru) |
|-------------|---------------------------------------------|
| 📱 Telegram | [@botbrowser_support](https://t.me/botbrowser_support) |

---

## 📂 Directory Tree

Below is the structure patches-showing which Chromium source files we’ve tweaked:

```
patches_v2/136.0.7103.49/
│
├─ base/
│  ├─ android/java/src/org/chromium/base/process_launcher/
│  └─ version_info/
│
├─ botbrowser/
│
├─ build/
│  └─ linux/sysroot_scripts/
│
├─ chrome/
│  ├─ android/java/
│  ├─ app/
│  ├─ browser/
│  │  ├─ ash/login/
│  │  ├─ devtools/
│  │  └─ ui/startup/
│  ├─ common/
│  ├─ installer/linux/debian/
│  └─ renderer/
│
├─ chromecast/
│  └─ browser/
│
├─ components/
│  ├─ component_updater/
│  ├─ crash/core/app/
│  ├─ embedder_support/
│  ├─ gwp_asan/client/
│  ├─ language/core/browser/
│  ├─ nacl/zygote/
│  ├─ password_manager/core/browser/
│  ├─ payments/core/
│  ├─ policy/core/common/cloud/
│  ├─ prefs/
│  ├─ update_client/net/
│  └─ version_info/
│
├─ content/
│  ├─ app/
│  ├─ browser/
│  │  ├─ bluetooth/
│  │  ├─ client_hints/
│  │  ├─ devtools/protocol/
│  │  ├─ gpu/
│  │  ├─ quota/
│  │  ├─ renderer_host/
│  │  ├─ speech/
│  │  └─ web_contents/
│  ├─ child/
│  ├─ gpu/
│  ├─ public/browser/
│  ├─ shell/browser/
│  └─ zygote/
│
├─ gpu/
│  ├─ command_buffer/client/
│  └─ config/
│
├─ media/
│  └─ capture/video/
│
├─ pdf/
│
├─ services/
│  ├─ network/p2p/
│  └─ passage_embeddings/
│
├─ third_party/
│  ├─ blink/
│  │  ├─ common/
│  │  │  ├─ device_memory/
│  │  │  └─ web_preferences/
│  │  ├─ public/common/web_preferences/
│  │  └─ renderer/
│  │     ├─ core/
│  │     │  ├─ css/, dom/, events/, execution_context/
│  │     │  ├─ exported/, frame/, html/, inspector/
│  │     │  ├─ layout/, loader/, permissions_policy/
│  │     │  └─ timezone/, timing/
│  │     ├─ modules/
│  │     │  ├─ battery/, canvas/, encoding/, encryptedmedia/
│  │     │  ├─ keyboard/, mediarecorder/, mediasource/
│  │     │  ├─ mediastream/, peerconnection/, plugins/
│  │     │  └─ quota/, webaudio/, webgl/, webgpu/
│  │     └─ platform/
│  │        ├─ fonts/
│  │        └─ media/
│  ├─ crashpad/crashpad/client/
│  └─ harfbuzz-ng/src/src/
│
├─ tools/
│  └─ gritsettings/
│
├─ ui/
│  ├─ base/l10n/
│  └─ resources/fonts/
│
└─ v8/
   └─ src/
      ├─ execution/
      ├─ heap/
      ├─ inspector/
      └─ numbers/
```


---

## ⚠️ LEGAL DISCLAIMER

**📋 [Complete Legal Disclaimer & Terms of Use →](../DISCLAIMER.md)**

BotBrowser is designed for academic research and authorized testing environments. By using this software, you acknowledge compliance with all applicable laws and accept full responsibility for any consequences of use.
