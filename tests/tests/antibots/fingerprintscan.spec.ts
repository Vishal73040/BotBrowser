/**
 * ACADEMIC RESEARCH USE ONLY
 *
 * This test demonstrates fingerprint-scan bot risk analysis.
 * - Uses publicly accessible fingerprinting tool (fingerprint-scan.com)
 * - For bot risk score validation
 * - Read-only analysis, no data submission
 *
 * See https://github.com/botswin/BotBrowser/blob/main/tests/README.md
 * and https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md
 */

import { test } from '../global-setup';

test('fingerprintscan', async ({ page }) => {
    await page.goto('https://fingerprint-scan.com');
    await page.locator('div#fingerprintScore >> text=Bot Risk Score: 20/100').waitFor({ state: 'visible' });
});
