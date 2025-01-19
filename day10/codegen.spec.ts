import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('playwright dev');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%2Bdev%26sca_esv%3Dea0d4eb3289e42cf%26source%3Dhp%26ei%3DiqqMZ5uzCpDM1e8Piq2K8QU%26iflsig%3DAL9hbdgAAAAAZ4y4mu04tV-B_v9SrQSNY1Z8C5LtHOw5%26ved%3D0ahUKEwiboOupooGLAxUQZvUHHYqWIl4Q4dUDCBA%26uact%3D5%26oq%3Dplaywright%2Bdev%26gs_lp%3DEgdnd3Mtd2l6Ig5wbGF5d3JpZ2h0IGRldjIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI4y9QpgtY0SZwAXgAkAEAmAGCAaAB2AuqAQM2Lji4AQPIAQD4AQGYAg-gAo8MqAIKwgIKEAAYAxjqAhiPAcICChAuGAMY6gIYjwHCAgsQLhiABBixAxjUAsICDhAuGIAEGLEDGIMBGIoFwgILEC4YgAQYsQMYgwHCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIFEC4YgASYAwjxBVA6XMI7LUR2kgcENC4xMaAHxFM%26sclient%3Dgws-wiz%26sei%3DpaqMZ9GJM-uhnesP_KTgoA0&q=EhAkAUkAJi2RR7zJr-r0qFh7GKbVsrwGIjDT7-AbrwCMmAiGDw5GBhbBCDZxo2F_KGBp5Mpt_LcfncA0x2vZ8kRxvFye8zgDDTYyAXJaAUM');
  await page.locator('iframe[name="a-ktcckizgbn0z"]').contentFrame().getByLabel('I\'m not a robot').click();
  await page.locator('iframe[name="c-ktcckizgbn0z"]').contentFrame().locator('td:nth-child(3)').first().click();
  await page.locator('iframe[name="c-ktcckizgbn0z"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-ktcckizgbn0z"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await page.getByLabel('Search (Ctrl+K)').click();
  await page.getByPlaceholder('Search docs').click();
  await page.getByPlaceholder('Search docs').fill('codegen');
  await page.getByPlaceholder('Search docs').press('Enter');
});