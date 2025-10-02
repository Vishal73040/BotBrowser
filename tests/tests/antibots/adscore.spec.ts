/**
 * ACADEMIC RESEARCH USE ONLY
 *
 * This test demonstrates AdScore bot detection compatibility in AUTHORIZED TEST ENVIRONMENTS ONLY.
 * - Uses publicly accessible AdScore signature verification
 * - For fingerprint consistency research purposes
 * - Read-only analysis
 *
 * See https://github.com/botswin/BotBrowser/blob/main/tests/README.md
 * and https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md
 */

import { expect, test } from '../global-setup';

test('adscore', async ({ page }) => {
    await page.goto(
        'https://c.adsco.re/r#apikey=Qk9JAwAAAAAAHRNIGwgsoprZU7T52-yq0utL_w&type=3&data=AAIl4FMAOsV08FZ1WZ-jchAo7O_nJGJes_KQ4gykpsfM67g8PevWVrKIg1F7Gi_OXOwRiuTcn5G5jeHKdh096kM2GnPidKm36PYM_Qjb3kntETht9wrO4svi4J8OgDWXYvo'
    );

    expect(await page.waitForRequest('https://thisisgoodtraffic11.com/')).toBeTruthy();
});
