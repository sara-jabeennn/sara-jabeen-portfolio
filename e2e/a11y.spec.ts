import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Minimal a11y gate from Phase 0 onward. Phase 15 (feature/a11y-tests) expands
// this to assert zero violations on every route once they exist.
test("homepage has zero automatically-detectable accessibility violations", async ({
  page,
}) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
