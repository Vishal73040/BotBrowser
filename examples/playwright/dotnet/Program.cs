using Microsoft.Playwright;
using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        string botBrowserExecPath = Environment.GetEnvironmentVariable("BOTBROWSER_EXEC_PATH") ?? "";
        string botProfilePath = Environment.GetEnvironmentVariable("BOT_PROFILE_PATH") ?? "";

        if (string.IsNullOrEmpty(botBrowserExecPath) || string.IsNullOrEmpty(botProfilePath))
        {
            throw new InvalidOperationException("Both BOTBROWSER_EXEC_PATH and BOT_PROFILE_PATH environment variables must be set.");
        }

        using var playwright = await Playwright.CreateAsync();
        await using var browser = await playwright.Chromium.LaunchPersistentContextAsync(
            userDataDir: "./user_data",
            options: new BrowserTypeLaunchPersistentContextOptions
            {
                ExecutablePath = botBrowserExecPath,
                Headless = false, // Set to true for production
                IgnoreDefaultArgs = new[]
                {
                    "--disable-crash-reporter",
                    "--disable-crashpad-for-testing",
                    "--disable-gpu-watchdog"
                },
                Args = new[]
                {
                    "--no-sandbox",
                    "--disable-blink-features=AutomationControlled",
                    "--disable-audio-output",
                    $"--bot-profile={botProfilePath}"
                }
            });

        var page = await browser.NewPageAsync();

        // Remove Playwright's bindings to avoid detection.
        await page.AddInitScriptAsync(@"
            delete window.__playwright__binding__;
            delete window.__pwInitScripts;
        ");

        await page.GotoAsync("https://abrahamjuliot.github.io/creepjs/");
        
        // Keep the browser open
        await Task.Delay(-1);
    }
}