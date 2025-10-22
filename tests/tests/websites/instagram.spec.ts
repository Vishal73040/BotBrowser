/**
 * ACADEMIC RESEARCH USE ONLY
 *
 * This test demonstrates social media platform compatibility in AUTHORIZED TEST ENVIRONMENTS ONLY.
 * - Uses publicly accessible signup pages (does NOT complete registration)
 * - Submits ONLY synthetic/invalid test data
 * - For fingerprint consistency research purposes
 * DEMO USE ONLY: For demonstration and learning purposes. Never use to violate any website Terms of Service.
 *
 * PROHIBITED: Real account creation, ToS violations, or unauthorized automation.
 *
 * See https://github.com/botswin/BotBrowser/blob/main/tests/README.md
 * and https://github.com/botswin/BotBrowser/blob/main/DISCLAIMER.md
 */

import { test } from '../global-setup';
import { generateRandomEmail, generateRandomPassword, generateRandomUsername } from '../utils';

test('signup', async ({ page }) => {
    await page.goto('https://www.instagram.com/accounts/emailsignup/');
    await page.locator('input[name="emailOrPhone"]').pressSequentially(generateRandomEmail(), {
        delay: 100,
    });
    await page.locator('input[name="password"]').pressSequentially(generateRandomPassword(), {
        delay: 100,
    });
    await page
        .locator('input[name="fullName"]')
        .pressSequentially(generateRandomUsername() + ' ' + generateRandomUsername(), {
            delay: 100,
        });
    await page.locator('input[name="username"]').pressSequentially(generateRandomUsername(), {
        delay: 100,
    });
    await page.locator('button >> text=Sign up').click();
    await page.locator('select[title="Month:"]').selectOption('1');
    await page.locator('select[title="Day:"]').selectOption('1');
    await page.locator('select[title="Year:"]').selectOption('1999');
    await page.locator('button >> text=Next').click();
    await page.locator('span >> text=Enter Confirmation Code').waitFor({
        state: 'visible',
    });
    await page.locator('input[name="email_confirmation_code"]').pressSequentially('123456', {
        delay: 100,
    });
    await page.locator('div >> text=Next').click();
    await page.locator('span >> text=You can request a new one').waitFor({
        state: 'visible',
    });
});
