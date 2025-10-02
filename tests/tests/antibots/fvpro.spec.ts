/**
 * ACADEMIC RESEARCH USE ONLY
 *
 * This test demonstrates FakeVision Pro browser detection analysis.
 * - Uses publicly accessible fingerprinting tool (fv.pro)
 * - For fingerprint authenticity validation
 * - Read-only analysis, no data submission
 *
 * See https://github.com/botswin/BotBrowser/blob/main/tests/README.md
 * and https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md
 */

import { expect, test } from '../global-setup';
import { sleep } from '../utils';

test('fvpro', async ({ page }) => {
    test.setTimeout(60_000);

    await page.goto('https://fv.pro');
    await sleep(30_000);

    expect(await page.locator('text=It looks like you are using real browser').isVisible()).toBeTruthy();

    await expect(page.locator('text=Your browser environment is not real')).toBeHidden();
});
