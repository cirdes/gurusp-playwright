import { test, expect } from "@playwright/test";
import { create, clear } from "./factory";

test.describe("/beers", () => {
  test.beforeAll(async ({ request }) => {
    await create({
      request,
      factory: "beer",
      attrs: {
        brand: "durvel",
        style: "strong ale",
        quantity: 20,
        country: "Brazil",
      },
    });
    console.log("before all");
  });

  test.afterAll(async ({ request }) => {
    await clear({ request });
  });

  test("test", async ({ page }) => {
    await page.goto("http://localhost:3001/");
    await page.getByRole("button", { name: "Create New +" }).click();
    await page.getByPlaceholder("Input your beer brand").fill("skoll");
    await page.getByPlaceholder("Input your beer style").fill("pilsen");
    await page.getByPlaceholder("How many beers you desire?").fill("2");
    await page.getByRole("button", { name: "Submit" }).click();

    await expect(page.locator("text=skoll")).toBeVisible();
  });
});
