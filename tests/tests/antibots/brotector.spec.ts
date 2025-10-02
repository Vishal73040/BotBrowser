/**
 * ACADEMIC RESEARCH USE ONLY
 *
 * This test demonstrates Brotector browser detection analysis.
 * - Uses publicly accessible fingerprinting tool (Brotector demo)
 * - For fingerprint authenticity validation
 * - Read-only analysis, no data submission
 *
 * See https://github.com/botswin/BotBrowser/blob/main/tests/README.md
 * and https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md
 */

import { expect, test } from '../global-setup';
import { sleep } from '../utils';

test('Brotector', async ({ page }) => {
    await page.goto('https://kaliiiiiiiiii.github.io/brotector/?crash=false');

    // Move the mouse on the page and Brotector will detect something
    await page.mouse.move(0, 0);

    for (let i = 0; i < 10; i++) {
        await sleep(Math.random() * 2000 + 500);
        await page.mouse.move(Math.random() * 1000, Math.random() * 1000, {
            steps: Math.floor(Math.random() * 100) + 1,
        });
    }

    const tableRowsCount = await page.locator('table').locator('tr').count();
    expect(tableRowsCount).toBe(2);
});
