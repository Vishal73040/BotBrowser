/**
 * ACADEMIC RESEARCH USE ONLY
 *
 * This test demonstrates Pixelscan fingerprint analysis.
 * - Uses publicly accessible fingerprinting tool (pixelscan.net)
 * - For fingerprint consistency validation
 * - Read-only analysis, no data submission
 *
 * See https://github.com/botswin/BotBrowser/blob/main/tests/README.md
 * and https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md
 */

import { expect, test } from '../global-setup';

test('pixelscan', async ({ page }) => {
    await page.goto('https://pixelscan.net/');
    await page.locator('button >> text=START').click();

    await page.waitForTimeout(5000);
    expect(await page.waitForSelector('img[src="assets/icons/check-success.svg"]', { timeout: 60_000 })).toBeTruthy();

    await page.mouse.wheel(0, 600);
});
