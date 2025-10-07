# BotBrowser

## How to compile Chromium step-by-step (Ubuntu)

1. Prepare a clean Ubuntu 22 host.
2. Install some dependencies:
   ```bash
   apt install -y fonts-liberation devscripts equivs software-properties-common libmpfr-dev libgmp3-dev libmpc-dev libstdc++-12-dev clang avahi-daemon libavahi-client-dev libnss-mdns qtbase5-dev libqt5widgets5 libx11-xcb-dev
   ```
3. Check the compilation steps provided by Google [here](https://chromium.googlesource.com/chromium/src/+/main/docs/linux/build_instructions.md). Skip a few steps, you just need to follow these:

- [System requirements](https://chromium.googlesource.com/chromium/src/+/main/docs/linux/build_instructions.md#system-requirements)
- [Install depot_tools](https://chromium.googlesource.com/chromium/src/+/main/docs/linux/build_instructions.md#install)

   **Tip:** If you want to cross-compile the ARM binary, in this step you need to execute:

   ```bash
   ./build/linux/sysroot_scripts/install-sysroot.py --arch=arm
   ```

   Reference Link: [Linux Chromium Arm Recipes](https://chromium.googlesource.com/chromium/src/+/main/docs/linux/chromium_arm.md#installing-the-toolchain)

- [Get the code](https://chromium.googlesource.com/chromium/src/+/main/docs/linux/build_instructions.md#get-the-code)
- [Run the hooks](https://chromium.googlesource.com/chromium/src/+/main/docs/linux/build_instructions.md#run-the-hooks)
- [Setting up the build](https://chromium.googlesource.com/chromium/src/+/main/docs/linux/build_instructions.md#setting-up-the-build)

4. It's important at this point: please open your `src/out/Default/args.gn` and use [here](debian/args.gn) to replace this file. As you can see, I have set some switches to make the compilation process smoother. You can make your own changes to these switches if you need to. Refer [GN build configuration](https://www.chromium.org/developers/gn-build-configuration/).
5. The whole compilation process is very long, so please prepare a high-performance computer. If you want to speed up the build, please refer to: https://chromium.googlesource.com/chromium/src/+/main/docs/linux/build_instructions.md#faster-builds
6. At this point it's all set up and ready to compile: [Build Chromium](https://chromium.googlesource.com/chromium/src/+/main/docs/linux/build_instructions.md#build-chromium).
7. Go to `src/out/Default` and you can see that the `chrome` executable is already lying there quietly.

---

**📋 [Legal Disclaimer & Terms of Use](https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md)** — BotBrowser is for authorized fingerprint-consistency testing and research only.
