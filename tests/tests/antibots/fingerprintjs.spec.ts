/**
 * ACADEMIC RESEARCH USE ONLY
 *
 * This test demonstrates FingerprintJS Pro bot detection analysis.
 * - Uses publicly accessible demo pages (fingerprint.com demos)
 * - For fingerprint consistency and bot detection research
 * - Read-only analysis, no account creation
 *
 * See https://github.com/botswin/BotBrowser/blob/main/tests/README.md
 * and https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md
 */

import { expect, test } from '../global-setup';
import { sleep } from '../utils';

test('botdetection', async ({ page }) => {
    await page.goto('https://fingerprint.com/products/bot-detection/');

    expect(
        await page.waitForSelector('h2 >> text=You are not a bot', {
            timeout: 20_000,
        })
    ).toBeTruthy();
});

test('playground', async ({ page }) => {
    await page.goto('https://demo.fingerprint.com/playground');

    await sleep(2_000);
    for (let i = 0; i < 20; i++) {
        await page.mouse.wheel(0, 50);
        await sleep(300);
    }
});
