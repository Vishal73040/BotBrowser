/**
 * ACADEMIC RESEARCH USE ONLY
 *
 * This test demonstrates IPHey browser authenticity analysis.
 * - Uses publicly accessible fingerprinting tool (iphey.com)
 * - For browser authenticity validation
 * - Read-only analysis, no data submission
 *
 * See https://github.com/botswin/BotBrowser/blob/main/tests/README.md
 * and https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md
 */

import { expect, test } from '../global-setup';
import { sleep } from '../utils';

test('iphey', async ({ page }) => {
    await page.goto('https://iphey.com');
    await sleep(10_000);

    const elements = await Promise.all([
        page.waitForSelector('text=Your browser displayed as real'),
        page.waitForSelector('text=Hardware parameters match each other'),
        page.waitForSelector("text=Software settings don't look suspicious"),
    ]);

    elements.forEach((element) => {
        expect(element).toBeTruthy();
    });

    for (let n = 0; n < 10; ++n) {
        await page.mouse.wheel(0, 200);
        await sleep(500);
    }
});
