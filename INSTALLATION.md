# 🛠️ BotBrowser Installation Guide

**Complete installation instructions for all supported platforms**

This guide provides detailed installation instructions, troubleshooting steps, and deployment options for BotBrowser across different operating systems.

⚠️ **Usage Policy:** BotBrowser is designed for academic research, security analysis, and authorized testing environments only. Use in compliance with institutional policies and applicable laws.

---

## 📥 Download & Installation

### 1. Download Installer

Get the BotBrowser installer for your OS from the [Releases](https://github.com/botswin/BotBrowser/releases) page.

### 2. Windows Installation

#### Standard Installation
1. Extract the downloaded `.7z` archive
2. Run `chrome.exe` from the extracted folder
3. If you encounter `STATUS_ACCESS_VIOLATION`, launch with [--no-sandbox](https://peter.sh/experiments/chromium-command-line-switches/#no-sandbox)

#### Common Windows Issues & Solutions

| Issue | Solution |
|-------|----------|
| **STATUS_ACCESS_VIOLATION** | Add `--no-sandbox` flag when launching |
| **Profile file permission errors** | Ensure `.enc` file has read permissions |
| **BotBrowser won't start or crashes** | Check that your OS and Chromium version match the build; update BotBrowser to the latest release |
| **Antivirus blocking execution** | Add BotBrowser directory to antivirus exclusions |

#### Windows Command Line Example
```cmd
chrome.exe --no-sandbox --bot-profile="C:\\path\\to\\chrome139_win11_x64.enc" --user-data-dir="%TEMP%\\botprofile_%RANDOM%"
```

### 3. macOS Installation

#### Quick Install (Automated)
For the fastest installation experience, use our automated installation script:

```bash
# One-line install (downloads and runs script directly)
curl -L https://raw.githubusercontent.com/botswin/BotBrowser/main/scripts/install_botbrowser.sh | bash
```

Or download and run locally:
```bash
# Clone repository and run script
git clone https://github.com/botswin/BotBrowser.git
cd BotBrowser
./scripts/install_botbrowser.sh
```

The script will automatically:
- Download the latest BotBrowser DMG
- Mount and copy the application to `/Applications/`
- Remove macOS quarantine attributes
- Clean up temporary files

#### Manual Installation
1. Open the downloaded `.dmg` file
2. Drag `Chromium.app` into your Applications folder or any desired location
3. If you see the error:
   ```
   "Chromium" is damaged and can't be opened
   ```
   Run:
   ```bash
   xattr -rd com.apple.quarantine /Applications/Chromium.app
   ```

#### Common macOS Issues & Solutions

| Issue | Solution |
|-------|----------|
| **"Chromium" is damaged** | Run `xattr -rd com.apple.quarantine /Applications/Chromium.app` |
| **Permission denied** | Ensure you have admin rights and the app is in Applications folder |
| **Gatekeeper blocking** | Go to System Preferences > Security & Privacy and allow the app |

#### macOS Command Line Example
```bash
/Applications/Chromium.app/Contents/MacOS/Chromium \
  --no-sandbox \
  --user-data-dir="$(mktemp -d)" \
  --bot-profile="/path/to/chrome139_win11_x64.enc"
```

### 4. Ubuntu Installation

#### Standard Installation
1. Install via `dpkg`:
   ```bash
   sudo dpkg -i botbrowser_<version>_amd64.deb
   ```
2. If dependencies are missing, run:
   ```bash
   sudo apt-get install -f
   ```

#### Required Dependencies
```bash
# Essential libraries
sudo apt-get update
sudo apt-get install -y \
    libnss3 \
    libatk-bridge2.0-0 \
    libdrm2 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libgbm1 \
    libxkbcommon0 \
    libgtk-3-0
```

#### Ubuntu Command Line Example
```bash
chromium-browser \
  --no-sandbox \
  --user-data-dir="$(mktemp -d)" \
  --bot-profile="/path/to/chrome139_win11_x64.enc"
```

---

## 🐳 Docker Deployment

For containerized deployment with full isolation and scalability:

### Quick Docker Setup

```bash
# Pull the latest BotBrowser Docker image
docker pull botbrowser/botbrowser:latest

# Run with profile mounting
docker run -d \
  --name botbrowser-instance \
  -v /path/to/profiles:/app/profiles \
  -p 9222:9222 \
  botbrowser/botbrowser:latest \
  --bot-profile="/app/profiles/chrome139_win11_x64.enc" \
  --remote-debugging-port=9222
```

### Docker Compose Deployment

For production environments, see the complete [Docker deployment guide](docker/README.md) with:
- Multi-instance orchestration
- Proxy configuration
- Volume management
- Health checks
- Scaling configurations

---

## 🚀 First Launch Verification

### Basic Functionality Test

After installation, verify BotBrowser is working correctly:

```bash
# Test basic launch (replace with your executable path)
./chrome.exe --no-sandbox --bot-profile="/absolute/path/to/demo.enc" --version

# Test with remote debugging
./chrome.exe --no-sandbox --bot-profile="/absolute/path/to/demo.enc" --remote-debugging-port=9222

# Verify remote debugging is active
curl http://localhost:9222/json/version
```

### Profile Validation

Ensure your profiles are working correctly:

```bash
# Check profile file permissions (Linux/macOS)
ls -la ./profiles/*.enc

# Test profile loading
./chrome.exe --no-sandbox --bot-profile="/absolute/path/to/chrome139_win11_x64.enc" --headless --dump-dom https://httpbin.org/user-agent
```

---

## 🔧 Advanced Installation Options

### Custom Build Installation

For advanced users building from source:

#### Requirements
- Linux build environment
- Chromium build tools and dependencies
- 16GB+ RAM for compilation
- 100GB+ disk space

#### Build Process
1. Contact [botbrowser@bk.ru](mailto:botbrowser@bk.ru) for source access
2. Follow the build instructions in [build/README.md](build/)
3. Compile with custom modifications if needed

### System Integration

#### Linux Desktop Integration
```bash
# Create desktop entry
cat > ~/.local/share/applications/botbrowser.desktop << EOF
[Desktop Entry]
Name=BotBrowser
Comment=Cross-Platform Browser for Fingerprint Consistency Testing
Exec=/path/to/botbrowser --bot-profile=/path/to/profile.enc
Icon=/path/to/botbrowser/icon.png
Terminal=false
Type=Application
Categories=Network;WebBrowser;
EOF
```

#### Windows Registry Integration
For Windows power users, BotBrowser can be registered as a browser option through registry modifications. Contact support for enterprise deployment scripts.

---

## 🛡️ Security Considerations

### Firewall Configuration

BotBrowser may need network access for:
- Profile validation and updates
- Remote debugging (if enabled)
- Proxy authentication
- Timezone/locale auto-detection

#### Recommended Firewall Rules
```bash
# Allow outbound HTTPS (profile updates)
ufw allow out 443

# Allow remote debugging port (if used)
ufw allow 9222

# Allow proxy connections (if used)
ufw allow out on <proxy-port>
```

### Profile Security

- Store profile files (.enc) in secure directories with appropriate permissions
- Never commit profiles to version control systems
- Use temporary user data directories (`--user-data-dir`) to avoid persistent data
- Regularly update profiles from trusted sources

---

## 📞 Installation Support

### Getting Help

If you encounter installation issues:

1. **Check the troubleshooting table** above for common solutions
2. **Verify system requirements** match your OS version
3. **Test with demo profiles** from the profiles directory
4. **Contact support** with detailed error messages

### Contact Information

| Contact Method | Link |
|----------------|------|
| 📧 Email | [botbrowser@bk.ru](mailto:botbrowser@bk.ru) |
| 📱 Telegram | [@botbrowser_support](https://t.me/botbrowser_support) |

### Reporting Installation Issues

When reporting installation problems, please include:
- Operating system and version
- BotBrowser version
- Complete error messages
- Steps to reproduce the issue
- System specifications (RAM, disk space, etc.)

---

## 🔗 Related Documentation

- **[Main README](README.md)** - Project overview and quick start
- **[CLI Flags Reference](CLI_FLAGS.md)** - Complete command-line options
- **[Profile Configuration](profiles/PROFILE_CONFIGS.md)** - Advanced profile customization
- **[Docker Guide](docker/README.md)** - Containerized deployment
- **[Advanced Features](ADVANCED_FEATURES.md)** - Detailed feature documentation