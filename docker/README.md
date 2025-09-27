# Docker Deployment

**For Academic and Authorized Testing Environments**

> 🔥 Deploy BotBrowser with Docker for controlled testing environments.

This guide explains how to deploy BotBrowser using Docker and Docker Compose for authorized testing and academic environments.

⚠️ **Usage Policy:** This Docker deployment is designed for academic study, security analysis, and authorized testing environments only. Use in compliance with institutional policies and applicable laws.

---

## Directory Structure

```
repo-root/
├── docker/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── profiles/
│       └── your-profile.enc
├── user-data-dir/      # Persisted browser data
└── ...
```

* **Dockerfile**: Builds the BotBrowser image
* **docker-compose.yml**: Defines services, ports, and volumes
* **profiles/**: Place your encrypted profiles (`.enc`) here
* **user-data-dir/**: Host folder for cookies, cache, and session data

---

## Prerequisites

* Docker Engine >= 20.10
* Docker Compose >= 1.27
* A BotBrowser `.enc` profile file

> Tip: Run `docker version` and `docker-compose version` to check your setup.

---

## Configuration

1. **Profile**

   * Copy your `.enc` file into `docker/profiles/`
   * Update `PROFILE_NAME` or volume mapping in `docker-compose.yml`

2. **Port**

   * Default: 9222
   * Edit the `ports` section in `docker-compose.yml` to change

3. **Volumes**

   * `./user-data-dir/`: Persists browser data
   * `./docker/profiles/`: Provides profiles to the container

---

## Quick Start

From the project root:

```bash
cd docker
docker-compose up --build -d
```

To view logs:

```bash
docker-compose logs -f botbrowser
```

---

## Connecting to BotBrowser

### Chrome DevTools

1. Open Chrome or Chromium
2. Go to `chrome://inspect`
3. Click **Configure...** and add `localhost:9222`
4. Find your BotBrowser instance under **Remote Target**

### Automation Scripts

⚠️ **Integration examples with Playwright and Puppeteer are for academic automation only. Unauthorized scraping or production misuse is prohibited.**

**Playwright**

```javascript
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.connectOverCDT('ws://localhost:9222');
  const page = await browser.newPage();
  // ...
})();
```

**Puppeteer**

```javascript
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: 'ws://localhost:9222'
  });
  const page = await browser.newPage();
  // ...
})();
```

**These scripts are not intended for bulk data collection and must only be run in test setups where you have explicit authorization.**

---

## Environment Variables

Set in `docker-compose.yml`:

```yaml
services:
  botbrowser:
    environment:
      - PORT=9222
      - PROFILE_NAME=your-profile.enc
```

---

## Troubleshooting

| Issue                  | Solution                                    |
| ---------------------- | ------------------------------------------- |
| Container won't start  | Check profile file exists and permissions   |
| Port conflict          | Change port mapping in `docker-compose.yml` |
| Data persistence issue | Ensure `user-data-dir` is writable          |

For other issues, see the main README or open a GitHub issue.

---

## Examples

> ⚠️ **ACADEMIC USE DISCLAIMER**
>
> These Docker projects are provided for **academic study and authorized testing** purposes to demonstrate BotBrowser capabilities in controlled environments. They are intended solely for **authorized testing environments** that comply with all applicable laws, regulations, and institutional policies. **Any misuse**—such as violating website terms of service or engaging in unlawful activities—**is strictly prohibited.**

⚠️ **These examples are provided for compatibility validation in controlled, academic test environments only. They must not be used to bypass security controls on production systems.**

**These examples are research demonstrations only. The names of third-party services are referenced solely for compatibility benchmarking in controlled environments.**

| Example Directory | Description                        |
| ----------------- | ---------------------------------- |
| **[Cloudflare](cloudflare-docker)** | Reverse proxy test (Cloudflare) with Docker |
| **[Wizzair](wizzair-docker)** | Airline website compatibility demo with Docker |

---

## ⚠️ LEGAL DISCLAIMER

**📋 [Complete Legal Disclaimer & Terms of Use →](../DISCLAIMER.md)**

BotBrowser is designed for academic research and authorized testing environments. By using this software, you acknowledge compliance with all applicable laws and accept full responsibility for any consequences of use.
