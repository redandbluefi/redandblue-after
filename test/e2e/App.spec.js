const { visit } = require('./visit');

describe('App', () => {
  it('should have a browsable frontpage for English', async () => {
    let page = visit('/en/');
    let text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('Welcome to redandblue frontend starter');
    expect(text).toContain('Homepage');
  });

  it('should have a browsable frontpage for Finnish', async () => {
    let page = visit('/fi/');
    let text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('Welcome to redandblue frontend starter');
    expect(text).toContain('Kotisivu');
  });
});
