const puppeteer = require('puppeteer');
const { createObjectCsvWriter } = require('csv-writer');

async function login(page) {
  const searchResultSelector =
    '#layers > div > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1awozwy > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-1867qdf.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1 > div > div > div.css-175oi2r.r-1ny4l3l.r-6koalj.r-16y2uox.r-kemksi.r-1wbh5a2 > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div > div > div > div.css-175oi2r.r-1f1sjgu.r-mk0yit.r-13qz1uu > label > div > div.css-175oi2r.r-18u37iz.r-1pi2tsx.r-1wtj0ep.r-u8s1d.r-13qz1uu';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);
  //Your Email
  await page.type(searchResultSelector, '');

  const nextButton =
    ' #layers > div > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1awozwy > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-1867qdf.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1 > div > div > div.css-175oi2r.r-1ny4l3l.r-6koalj.r-16y2uox.r-kemksi.r-1wbh5a2 > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div > div > div > div:nth-child(6) > div';
  await page.waitForSelector(nextButton);
  await page.click(nextButton);

  const attemptInputSelector =
    ' #layers > div > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1awozwy > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-1867qdf.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1 > div > div > div.css-175oi2r.r-1ny4l3l.r-6koalj.r-16y2uox.r-kemksi.r-1wbh5a2 > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div.css-175oi2r.r-1f1sjgu.r-mk0yit > label > div > div.css-175oi2r.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1wzrnnt.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-ttdzmv > div > input';
  const attemptInput = await page
    .waitForSelector(attemptInputSelector, { timeout: 5000 })
    .catch(() => null);

  if (attemptInput) {
    //Your login
    await page.type(attemptInputSelector, '');
    const nextAttemptButton =
      '#layers > div > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1awozwy > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-1867qdf.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1 > div > div > div.css-175oi2r.r-1ny4l3l.r-6koalj.r-16y2uox.r-kemksi.r-1wbh5a2 > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div.css-175oi2r.r-1isdzm1 > div > div > div > div > div';
    await page.waitForSelector(nextAttemptButton);
    await page.click(nextAttemptButton);
  }

  const passInput =
    '#layers > div > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1awozwy > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-1867qdf.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1 > div > div > div.css-175oi2r.r-1ny4l3l.r-6koalj.r-16y2uox.r-kemksi.r-1wbh5a2 > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div > div.css-175oi2r.r-mk0yit.r-13qz1uu > div > label > div > div.css-175oi2r.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1wzrnnt.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-ttdzmv > div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-135wba7.r-16dba41.r-1awozwy.r-6koalj.r-1inkyih.r-13qz1uu > input';

  await page.waitForSelector(passInput);
  //Your Pass
  await page.type(passInput, '');

  const loginButton =
    ' #layers > div > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1awozwy > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-1867qdf.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1 > div > div > div.css-175oi2r.r-1ny4l3l.r-6koalj.r-16y2uox.r-kemksi.r-1wbh5a2 > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div.css-175oi2r.r-1isdzm1 > div > div.css-175oi2r > div > div > div > div';
  await page.waitForSelector(loginButton);
  await page.click(loginButton);
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    'https://twitter.com/search?q=(%23btc%20OR%20%23eth)%20min_faves%3A500%20lang%3Aen%20since%3A2024-04-24%20until%3A2024-04-25&src=typed_query&f=live'
    // 'https://twitter.com/search?q=(%23btc%20OR%20%23eth)%20min_faves%3A500%20lang%3Aen&src=typed_query&f=live'
  );

  await page.setViewport({ width: 1920, height: 1080 });

  //Логин----------------------------------------------------------------------------------------------
  await login(page);
  //----------------------------------------------------------------------------------------------

  const selectorLatest =
    '#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-13l2t4g.r-1ljd8xs.r-1phboty.r-16y2uox.r-184en5c.r-61z16t.r-11wrixw.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div > div.css-175oi2r.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div.css-175oi2r.r-1e5uvyk.r-5zmot > div:nth-child(2) > nav > div > div.css-175oi2r.r-1adg3ll.r-16y2uox.r-1wbh5a2.r-1pi2tsx > div > div:nth-child(2) > a > div > div > span';
  await page.waitForSelector(selectorLatest);
  await page.click(selectorLatest);

  let iterationCount = 0;
  let previousHeight;
  let currentHeight = 0;
  const csvWriter = createObjectCsvWriter({
    path: 'twitter_data.csv',
    header: [
      { id: 'id', title: 'id' },
      { id: 'user', title: 'user' },
      { id: 'fullname', title: 'fullname' },
      { id: 'url', title: 'url' },
      { id: 'timestamp', title: 'timestamp' },
      { id: 'replies', title: 'replies' },
      { id: 'likes', title: 'likes' },
      { id: 'retweets', title: 'retweets' },
      { id: 'text', title: 'text' },
    ],
    append: true,
  });

  while (previousHeight !== currentHeight && iterationCount < 10) {
    previousHeight = currentHeight;
    currentHeight += 10000;
    await page.evaluate((scrollHeight) => {
      window.scrollBy(0, scrollHeight);
    }, 5000);

    await new Promise((resolve) => setTimeout(resolve, 10000));

    const length = await page.evaluate(async () => {
      const element = document.querySelector(
        '#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-13l2t4g.r-1ljd8xs.r-1phboty.r-16y2uox.r-184en5c.r-61z16t.r-11wrixw.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > section > div > div'
      );
      return element.childElementCount;
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(length);

    for (let i = 1; i <= length; i++) {
      const data = [];

      await new Promise((resolve) => setTimeout(resolve, 1000));
      const textSelector = `#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-13l2t4g.r-1ljd8xs.r-1phboty.r-16y2uox.r-184en5c.r-61z16t.r-11wrixw.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > section > div > div > div:nth-child(${i}) > div > div > article > div > div > div.css-175oi2r.r-18u37iz > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(2)`;
      await page.waitForSelector(textSelector);
      const text = await page.evaluate((selector) => {
        const element = document.querySelector(selector);
        return element ? element.textContent : '';
      }, textSelector);

      const headerSelector = `#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-13l2t4g.r-1ljd8xs.r-1phboty.r-16y2uox.r-184en5c.r-61z16t.r-11wrixw.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > section > div > div > div:nth-child(${i}) > div > div > article > div > div > div.css-175oi2r.r-18u37iz > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div.css-175oi2r.r-zl2h9q > div
      `;

      await page.waitForSelector(headerSelector);

      const textHeader = await page.evaluate((selector) => {
        const element = document.querySelector(selector);
        return element ? element.textContent : '';
      }, headerSelector);
      const [fullname, additional] = textHeader.split('@');
      const [nickname] = additional.split('·');

      const timeElements = await page.$$(headerSelector + ' time');

      const footerSelector1 = `#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-13l2t4g.r-1ljd8xs.r-1phboty.r-16y2uox.r-184en5c.r-61z16t.r-11wrixw.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > section > div > div > div:nth-child(${i}) > div > div > article > div > div > div.css-175oi2r.r-18u37iz > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(4) > div`;
      const footerSelector2 = `#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-13l2t4g.r-1ljd8xs.r-1phboty.r-16y2uox.r-184en5c.r-61z16t.r-11wrixw.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > section > div > div > div:nth-child(${i}) > div > div > article > div > div > div.css-175oi2r.r-18u37iz > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(3) > div`;

      let activeFooterSelector;

      try {
        await page.waitForSelector(footerSelector1, { timeout: 5000 });
        activeFooterSelector = footerSelector1;
      } catch (error) {
        if (error.name === 'TimeoutError') {
          await page.waitForSelector(footerSelector2, { timeout: 5000 });
          activeFooterSelector = footerSelector2;
        } else {
          throw error;
        }
      }

      const footerChildSelector = `${activeFooterSelector} [aria-label]`;
      const ariaLabel = await page.$$eval(
        footerChildSelector,
        (elements) => elements[0]?.getAttribute('aria-label') || null
      );
      console.log(ariaLabel);

      const [replies, retweets, likes] = ariaLabel.split(', ');

      let amountReplies, amountRetweets, amountLikes;

      if (replies) {
        [amountReplies] = replies.split(' ');
      }
      if (retweets) {
        [amountRetweets] = retweets.split(' ');
      }
      console.log(amountRetweets);
      if (likes) {
        [amountLikes] = likes.split(' ');
      }

      const initialData = {
        id: new Date().getTime(),
        user: nickname,
        fullname: fullname,
        url: '',
        timestamp: '',
        replies: amountReplies,
        likes: amountLikes,
        retweets: amountRetweets,
        text: text.replace(/\n/g, ''),
      };

      const records = [initialData];

      timeElements.forEach(async (timeElement, index) => {
        if (records.length < index + 1) records.push(initialData);

        const datetimeValue = await page.evaluate((timeElement) => {
          return timeElement.getAttribute('datetime');
        }, timeElement);

        records[index].timestamp = datetimeValue;

        await csvWriter.writeRecords([records[index]]);
      });
    }
    iterationCount++;
  }

  await browser.close();
})();
