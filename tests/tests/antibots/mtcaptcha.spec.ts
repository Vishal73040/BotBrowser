/**
 * ACADEMIC RESEARCH USE ONLY
 *
 * This test demonstrates MTCaptcha compatibility in AUTHORIZED TEST ENVIRONMENTS ONLY.
 * - Uses MTCaptcha's official demo page (mtcaptcha.com)
 * - For CAPTCHA accessibility and fingerprint research
 * - Read-only demo interaction
 *
 * See https://github.com/botswin/BotBrowser/blob/main/tests/README.md
 * and https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md
 */

import { test } from '../global-setup';

test('invisiblecaptcha', async ({ page }) => {
    await page.goto('https://www.mtcaptcha.com/');
    await page.locator('#demo-invisible-checkmark1').scrollIntoViewIfNeeded();
    await page.locator('#demo-invisible-checkmark1 + .demo-checkmark').click({ force: true });
    await page.locator('#msg-invisible-verified >> text=verified successfully').waitFor({ state: 'visible' });
});
