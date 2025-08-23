import com.microsoft.playwright.*;
import java.nio.file.Paths;
import java.util.Arrays;

public class PlaywrightExample {
    public static void main(String[] args) {
        String botBrowserExecPath = System.getenv("BOTBROWSER_EXEC_PATH");
        String botProfilePath = System.getenv("BOT_PROFILE_PATH");
        
        if (botBrowserExecPath == null || botBrowserExecPath.isEmpty() || 
            botProfilePath == null || botProfilePath.isEmpty()) {
            throw new RuntimeException("Both BOTBROWSER_EXEC_PATH and BOT_PROFILE_PATH environment variables must be set.");
        }

        try (Playwright playwright = Playwright.create()) {
            BrowserType.LaunchPersistentContextOptions options = new BrowserType.LaunchPersistentContextOptions()
                .setExecutablePath(Paths.get(botBrowserExecPath))
                .setHeadless(false) // Set to true for production
                .setIgnoreDefaultArgs(Arrays.asList(
                    "--disable-crash-reporter",
                    "--disable-crashpad-for-testing", 
                    "--disable-gpu-watchdog"
                ))
                .setArgs(Arrays.asList(
                    "--no-sandbox",
                    "--disable-blink-features=AutomationControlled",
                    "--disable-audio-output",
                    "--bot-profile=" + botProfilePath
                ));

            BrowserContext browser = playwright.chromium().launchPersistentContext(
                Paths.get("./user_data"), options);

            Page page = browser.newPage();

            // Remove Playwright's bindings to avoid detection.
            page.addInitScript("" +
                "delete window.__playwright__binding__;\n" +
                "delete window.__pwInitScripts;"
            );

            page.navigate("https://abrahamjuliot.github.io/creepjs/");
            
            // Keep the browser open
            try {
                Thread.sleep(Long.MAX_VALUE);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}