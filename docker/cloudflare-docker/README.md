# Cloudflare Compatibility Testing with Docker

For Academic and Authorized Testing Environments.

> ⚠️ Research demo in authorized setups. See [DISCLAIMER](../../DISCLAIMER.md).


## Project Overview

This repository contains the Docker setup for Cloudflare compatibility testing using BotBrowser and Playwright, which runs a Python script (`main.py`) inside a Docker container that:

1. Launches BotBrowser in headless mode — **no XDISPLAY or GPU required** — while simulating a full desktop environment.
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

> **Tip:** Review `Dockerfile` and `docker-compose.yml` for configuration options.

---

## Getting Started

⚠️ Before proceeding, ensure you are authorized to test any target systems. This setup is for academic environments and controlled testing only.

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

This compatibility testing script is not intended for bulk data collection and must only be run in explicitly authorized test setups.

---

## Troubleshooting

| Issue                  | Fix                                                                   |
| ---------------------- | --------------------------------------------------------------------- |
| Missing `.deb`         | Add `botbrowser_*.deb` to the repo root                               |
| Profile not found      | Ensure `profile/your-profile.enc` exists                              |
| Permission errors      | Make sure `profile/` and `screenshots/` are writable |
| Docker startup failure | Run without `-d` to see errors: `docker-compose up`                   |

---

**📋 [Legal Disclaimer & Terms of Use](https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md)** — BotBrowser is for authorized fingerprint-consistency testing and research only.
