/**
 * ACADEMIC RESEARCH USE ONLY
 *
 * This test demonstrates Tencent Cloud Captcha compatibility in AUTHORIZED TEST ENVIRONMENTS ONLY.
 * - Uses Tencent's official CAPTCHA demo page (tencentcloud.com)
 * - For CAPTCHA accessibility and fingerprint research
 * - Read-only demo interaction
 *
 * See https://github.com/botswin/BotBrowser/blob/main/tests/README.md
 * and https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md
 */

import { test } from '../global-setup';

test('oneclick', async ({ page }) => {
    await page.goto('https://www.tencentcloud.com/products/captcha');
    await page.locator('div[report-ext1="type-one-click"]').waitFor({ state: 'visible', timeout: 5000 });

    await page.evaluate(() => {
        const el = document.querySelector('div[report-ext1="type-one-click"]');
        if (el) {
            (el as HTMLElement).scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
    });

    await page.locator('#tencent-captcha-dy__robot_checkBox_id').click({ force: true });
    const doneImg = page.locator('img.tencent-captcha-dy__robot-checkBox-img-done');
    await doneImg.waitFor({ state: 'visible', timeout: 5000 });
});
