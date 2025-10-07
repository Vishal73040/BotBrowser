# WizzAir Compatibility Testing with Docker

For Academic and Authorized Testing Environments.

> ⚠️ Research demo in authorized setups. See [DISCLAIMER](../../DISCLAIMER.md).


## Project Overview

This repository contains a Docker setup for WizzAir website compatibility testing using BotBrowser and Playwright, which runs a Python script (`main.py`) inside a Docker container that:

1. Launches BotBrowser in headless mode — **no XDISPLAY or GPU required** — while simulating a full desktop environment.
2. Performs compatibility validation on WizzAir's interface over a date range.
3. Analyzes API responses for compatibility assessment.
4. Saves analysis data to `flight_data/` and screenshots to `screenshots/` for academic review.

---

## Repo Layout

```
.
├── Dockerfile
├── docker-compose.yml
├── main.py
├── requirements.txt
├── profile/        # Place your .enc profile here
├── flight_data/    # Analysis data output per date
└── screenshots/    # Screenshots for academic review
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
   docker-compose logs -f wizzair-botbrowser-service
   ```

4. **View Analysis Results**

   * Analysis data in `flight_data/`
   * Screenshots in `screenshots/`

**This compatibility testing script is not intended for bulk data collection and must only be run in test setups where you have explicit authorization.**

---

## main.py at a Glance

* Reads `BOTBROWSER_EXEC_PATH` and `BOT_PROFILE_PATH` from the environment.
* Iterates test dates for compatibility analysis.
* Saves API analysis data and screenshot per date.

Modify the date range or test parameters directly in `main.py` for your study.

---

## Troubleshooting

| Issue                  | Fix                                                                   |
| ---------------------- | --------------------------------------------------------------------- |
| Missing `.deb`         | Add `botbrowser_*.deb` to the repo root                               |
| Profile not found      | Ensure `profile/your-profile.enc` exists                              |
| Permission errors      | Make sure `profile/`, `flight_data/`, and `screenshots/` are writable |
| Docker startup failure | Run without `-d` to see errors: `docker-compose up`                   |

---

**📋 [Legal Disclaimer & Terms of Use](https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md)** — BotBrowser is for authorized fingerprint-consistency testing and research only.
