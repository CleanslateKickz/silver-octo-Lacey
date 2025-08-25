import asyncio
from playwright.async_api import async_playwright, expect
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Get the absolute path to the HTML files
        base_path = os.path.abspath(os.path.dirname(__file__) + '/../../')

        # CSS to disable animations and fix visibility
        disable_animations_style = """
        *, *::before, *::after {
            transition-duration: 0s !important;
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            scroll-behavior: auto !important;
        }
        .reveal, .reveal-fade, .reveal-scale, .fade-in-up {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
        }
        """

        # 1. Verify Tenants Page Table
        await page.goto(f'file://{base_path}/tenants.html')
        await page.add_style_tag(content=disable_animations_style)
        await expect(page.locator('.rent-table')).to_be_visible(timeout=10000)
        await page.wait_for_timeout(500)
        await page.screenshot(path="jules-scratch/verification/rent_roll_table_verification.png")

        # 2. Verify T-Mobile Sidebar
        # Find the T-Mobile link specifically
        await page.locator('a.tenant-name-link:has-text("T-Mobile Tower")').click()
        await expect(page.locator('#tenant-sidebar.visible')).to_be_visible(timeout=5000)
        await page.wait_for_timeout(500)
        await page.screenshot(path="jules-scratch/verification/t_mobile_sidebar_verification.png")

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
