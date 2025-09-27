
# 🔬 BotBrowser Research Test Suite

**Academic Research Framework for Browser Compatibility Analysis**

Demonstrates controlled browser compatibility research using [Playwright](https://playwright.dev/docs/writing-tests) for academic and security research purposes.

## 🌐 Research Environment Setup

All tests utilize **controlled network environments** with appropriate proxy configurations for academic analysis. Testing should be conducted through authorized institutional networks.

---

## ⚠️ Academic Research Disclaimer

**For Educational and Research Institutions Only**

These research test scripts are provided strictly for **academic research, security analysis, and authorized educational purposes**. They are designed for **controlled research environments** within universities, research institutions, and authorized security testing facilities.

**Authorized Research Use Cases:**
- Browser compatibility studies in academic settings
- Security research under institutional oversight
- Educational demonstrations in controlled environments
- Authorized penetration testing with proper approvals

**Strictly Prohibited:**
- **Production system testing without explicit authorization**
- **Violation of website terms of service**
- **Unauthorized access to third-party systems**
- **Commercial exploitation without proper licensing**

⚠️ **Research Ethics Requirement:** All users must obtain proper institutional review board (IRB) approval and follow ethical research guidelines when conducting studies involving web services or user data.

---

## 🔧 Getting Started

### Step 1: Research Environment Setup

Create a `.env` file in the project root with your configuration:

```bash
BOTBROWSER_EXEC_PATH=/absolute/path/to/botbrowser
BOT_PROFILE_PATH=/absolute/path/to/profile.enc
```

**Example configuration:**
```bash
BOTBROWSER_EXEC_PATH=/usr/local/bin/chromium
BOT_PROFILE_PATH=/home/user/profiles/chrome139_win11_x64.enc
```

**Required Configuration:**
- `BOTBROWSER_EXEC_PATH` → BotBrowser executable
- `BOT_PROFILE_PATH` → Profile file (.enc file)

### Step 2: Install & Run Research Suite

```bash
# Install dependencies
npm install

# Run tests
npx playwright test

# Generate analysis report
npx playwright show-report
```

---

## 📝 Research Methodology

**Purpose:** These are controlled compatibility analysis scripts for academic study.

**Framework:** All studies must be conducted within authorized environments that comply with institutional ethics guidelines, applicable laws, and protocols.

**Data Collection:** Research data is collected only from publicly accessible testing interfaces and demonstration sites under controlled, non-production conditions.

⚠️ **Important:** Results from these tests must not be interpreted as instructions for bypassing production systems or circumventing security measures.

### Research Environment Troubleshooting

| Issue | Solution |
|-------|----------|
| 🛑 Network access restrictions | 🔄 Use authorized institutional network infrastructure |
| ❌ Tests failing | ✅ Verify `.env` file paths and profile compatibility |
| 🐛 Browser environment issues | 🔧 Check BotBrowser executable permissions and research environment setup |

## 📚 Academic Resources

- [Playwright Documentation](https://playwright.dev/docs/writing-tests)
- [BotBrowser Profile Configs](https://github.com/botswin/BotBrowser/blob/main/profiles/PROFILE_CONFIGS.md)
- [Test Results & Reports](./test-results/)
- [ACM Code of Ethics](https://www.acm.org/code-of-ethics)

## 🙏 Research Dependencies

This project uses the following open-source libraries:

| Package | Purpose |
|---------|---------|
| [dotenv](https://www.npmjs.com/package/dotenv) | Environment variable management |
| [ghost-cursor](https://www.npmjs.com/package/ghost-cursor) | Natural interaction simulation |
| [ghost-cursor-playwright](https://www.npmjs.com/package/ghost-cursor-playwright) | Playwright integration for realistic interactions |

**Ethics Notice:** All libraries are used solely for academic purposes under controlled conditions with proper institutional oversight.

---

## ⚠️ LEGAL DISCLAIMER

**📋 [Complete Legal Disclaimer & Terms of Use →](../DISCLAIMER.md)**

BotBrowser is designed for academic research and authorized testing environments. By using this software, you acknowledge compliance with all applicable laws and accept full responsibility for any consequences of use.
