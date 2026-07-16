import { test, expect } from "@playwright/test";

// Minimal smoke test so CI has a real e2e gate from Phase 0 onward.
// Phase 15 (feature/e2e-tests) builds nav/filter/contact coverage on top of this.
test("homepage responds and renders the document shell", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.ok()).toBeTruthy();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});
