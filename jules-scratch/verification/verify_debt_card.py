import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Get the absolute path to the HTML file
        html_file_path = os.path.abspath('about.html')

        # Go to the local HTML file
        await page.goto(f'file://{html_file_path}')

        # Wait for the section to be visible
        debt_section = page.locator('#debt-financing')
        await debt_section.wait_for(state='visible')

        # Take a screenshot of the section
        await debt_section.screenshot(path='jules-scratch/verification/debt-card-verification.png')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
