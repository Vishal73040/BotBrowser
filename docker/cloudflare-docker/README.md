# Cloudflare Compatibility Testing with Docker

**For Academic and Authorized Testing Environments**

## ⚠️ **ACADEMIC USE DISCLAIMER**

This Docker project is provided for **academic study and authorized testing** purposes to demonstrate BotBrowser compatibility in controlled environments. It is intended solely for **authorized testing environments** that comply with all applicable laws, regulations, and institutional policies. **Any misuse**—such as violating website terms of service or engaging in unlawful activities—**is strictly prohibited.**

⚠️ **This example is for compatibility validation in controlled, academic test environments only. It must not be used to bypass security controls on production systems.**


## Project Overview

This repository contains the Docker setup for Cloudflare compatibility testing using BotBrowser and Playwright, which runs a Python script (`main.py`) inside a Docker container that:

1. Launches BotBrowser in headless mode-**no XDISPLAY or GPU required**, yet fully simulates a desktop environment.
2. Performs compatibility validation on Cloudflare's demo interface.
3. Saves screenshots to `screenshots/` for analysis.

---

## Repo Layout

```
.
├── Dockerfile
├── docker-compose.yml
├── main.py
├── requirements.txt
├── profile/        # Place your .enc profile here
└── screenshots/    # Output screenshots per date
```

> **Tip:** Review `Dockerfile` and `docker-compose.yml` for detailed configuration options.

---

## Getting Started

⚠️ **Before proceeding:** Ensure you have proper authorization to test against any target systems. This setup is for academic environments and controlled testing only.

1. **Add Files**

   * Place `botbrowser_*.deb` in the root directory.
   * Put your profile file (`your-profile.enc`) into `profile/`.

2. **Launch with Docker Compose**

   ```bash
   docker-compose up --build -d
   ```

3. **Monitor Logs**

   ```bash
   docker-compose logs -f cloudflare-botbrowser-service
   ```

4. **View Outputs**

   * Screenshots in `screenshots/`

**This compatibility testing script is not intended for bulk data collection and must only be run in test setups where you have explicit authorization.**

---

## Troubleshooting

| Issue                  | Fix                                                                   |
| ---------------------- | --------------------------------------------------------------------- |
| Missing `.deb`         | Add `botbrowser_*.deb` to the repo root                               |
| Profile not found      | Ensure `profile/your-profile.enc` exists                              |
| Permission errors      | Make sure `profile/` and `screenshots/` are writable |
| Docker startup failure | Run without `-d` to see errors: `docker-compose up`                   |
