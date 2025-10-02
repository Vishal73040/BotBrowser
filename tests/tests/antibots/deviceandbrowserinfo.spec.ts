/**
 * ACADEMIC RESEARCH USE ONLY
 *
 * This test demonstrates device and browser info bot detection analysis.
 * - Uses publicly accessible bot detection tool (deviceandbrowserinfo.com)
 * - For fingerprint authenticity validation
 * - Read-only analysis, no data submission
 *
 * See https://github.com/botswin/BotBrowser/blob/main/tests/README.md
 * and https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md
 */

import { expect, test } from '../global-setup';

test('deviceandbrowserinfo', async ({ page }) => {
    await page.goto(`https://deviceandbrowserinfo.com/are_you_a_bot`);
    expect(page.locator('text=You are human').isVisible()).toBeTruthy();
});
