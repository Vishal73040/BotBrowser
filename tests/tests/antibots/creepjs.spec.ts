/**
 * ACADEMIC RESEARCH USE ONLY
 *
 * This test demonstrates browser fingerprinting detection using CreepJS.
 * - Uses publicly accessible fingerprinting analysis tool (abrahamjuliot.github.io/creepjs)
 * - For fingerprint consistency validation
 * - No data submission, read-only analysis
 *
 * See https://github.com/botswin/BotBrowser/blob/main/tests/README.md
 * and https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md
 */

import { expect, test } from '../global-setup';
import { sleep } from '../utils';

test('creepjs', async ({ page }) => {
    await page.goto('https://abrahamjuliot.github.io/creepjs/');

    await sleep(5_000);
    for (let i = 0; i < 90; i++) {
        await page.mouse.wheel(0, 50);
        await sleep(300);
    }

    expect(await page.waitForSelector('span.scale-down.grade-A >> text=A+')).toBeTruthy();
});
