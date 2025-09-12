#!/usr/bin/env bash
set -euo pipefail

# Configuration
DMG_URL="https://github.com/botswin/BotBrowser/releases/download/v140-20250906/botbrowser_20250906_140.0.7339.81_mac_arm64.dmg"
DMG_FILE="/tmp/BotBrowser.dmg"
MOUNT_POINT="$(mktemp -d /tmp/botbrowser_mnt.XXXX)"
APP_NAME="Chromium.app"
DEST_DIR="/Applications"

echo "1. Downloading the DMG..."
curl -L "$DMG_URL" -o "$DMG_FILE"

echo "2. Attaching the DMG to ${MOUNT_POINT}..."
hdiutil attach "$DMG_FILE" -mountpoint "$MOUNT_POINT" -nobrowse -quiet

echo "3. Copying ${APP_NAME} to ${DEST_DIR}..."
if [ -d "${MOUNT_POINT}/${APP_NAME}" ]; then
  # Copy the application bundle to /Applications
  cp -R "${MOUNT_POINT}/${APP_NAME}" "${DEST_DIR}/"
else
  echo "Error: ${APP_NAME} not found in the mounted volume"
  # Attempt to detach before exiting on error
  hdiutil detach "$(hdiutil info | grep "${MOUNT_POINT}" -B1 | head -n1 | awk '{print $1}')" -quiet || true
  exit 1
fi

echo "4. Removing quarantine attribute from the app..."
# Remove the com.apple.quarantine attribute so macOS won't block on first launch
xattr -rd com.apple.quarantine "${DEST_DIR}/${APP_NAME}"

echo "5. Detaching the DMG..."
# Find and detach the device associated with our mount point
hdiutil detach "$(hdiutil info | grep "${MOUNT_POINT}" -B1 | head -n1 | awk '{print $1}')" -quiet

echo "6. Cleaning up temporary files..."
rm -rf "$MOUNT_POINT" "$DMG_FILE"

echo "Installation complete: ${APP_NAME} is now in ${DEST_DIR}"
