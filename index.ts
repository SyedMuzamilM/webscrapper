import puppeteer from "puppeteer"; // import the npm package that we installed

(async () => {
    // the rest of the code must be enclose in an "async" function to be able to "await"
    const browser = await puppeteer.launch(); // lanunches an "invisible" chromium browser
    const page = await browser.newPage(); // takes the browser to a new tab (page)
    await page.goto("https://pdfdrive.com"); // takes the page to a specific url

    // Get the "viewport" of the page,
    // as reported by the page.
    // NOTE: Anything inside of the 'evaluvate' function is DOM manipulation.
    // No varaibles outside of the evaluate function can go in, and none can come out withnpm install typescript
    const dimensions = await page.evaluate(() => {
        return {
            // use DOM manipulation to access the width and height of the page
            // if you want to get elements out of the DOM and into the node js code, return theme here
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
        };
    });

    // print out the DOM data
    console.log("Dimensions:", dimensions);

    // remember to close the browser (invisible chromium)
    await browser.close();
})();