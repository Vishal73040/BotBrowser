/**
 * ACADEMIC RESEARCH USE ONLY
 *
 * This test demonstrates BrowserScan fingerprint authenticity analysis.
 * - Uses publicly accessible fingerprinting tool (browserscan.net)
 * - For fingerprint authenticity validation
 * - Read-only analysis, no data submission
 *
 * See https://github.com/botswin/BotBrowser/blob/main/tests/README.md
 * and https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md
 */

import { expect, test } from '../global-setup';
import { sleep } from '../utils';

test('browserscan', async ({ page }) => {
    await page.goto('https://www.browserscan.net/');
    await sleep(20_000);

    expect(await page.locator('text=Browser fingerprint authenticity: 95%')).toBeTruthy();
});
