# user-agent.js

A tiny user agent parser.

## Usage

Link script file or copy code to your page, then run:

    var ua = agent.parse(navigator.userAgent)

iPod:

    // "Mozilla/5.0 (iPod; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B176 Safari/7534.48.3"
    console.log(ua)
    /*
    {
      browser: "safari",
      core: "webkit",
      deveice: "mobile",
      platform: "ipod",
      safari: 5.1,
      toString: function () {...}, // ipod webkit safari mobile 5.1
      version: "5.1"
    }
    */

Safari on Mac:

    // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/536.26.17 (KHTML, like Gecko) Version/6.0.2 Safari/536.26.17"
    console.log(ua)
    /*
    {
      browser: "safari",
      core: "webkit",
      deveice: "desktop",
      platform: "mac",
      safari: 6,
      toString: function () {...}, // mac webkit safari desktop 6.0.2
      version: "6.0.2"
    }
    */

IE on Windows (pretended by Safari):

    // "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)"
    console.log(ua)
    /*
    {
      browser: "msie",
      core: "trident",
      deveice: "desktop",
      msie: 9,
      platform: "windows",
      toString: function () {...}, // windows trident msie desktop 9.0
      version: "9.0"
    }
    */

Chrome on Mac:

    // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.56 Safari/537.17"
    console.log(ua)
    /*
    {
      browser: "chrome",
      chrome: 24,
      core: "webkit",
      deveice: "desktop",
      platform: "mac",
      toString: function () {...}, // mac webkit chrome desktop 24.0.1312.56
      version: "24.0.1312.56"
    }
    */

BlackBerry PlayBook (pretended by Chrome):

    // "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+"
    console.log(ua)
    /*
    {
      browser: "safari",
      core: "webkit",
      deveice: "mobile",
      platform: "playbook",
      safari: 7.2
      toString: function () {...}, // playbook webkit safari mobile 7.2.1.0
      version: "7.2.1.0"
    }
    */

Firefox on Mac

    // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:18.0) Gecko/20100101 Firefox/18.0"
    console.log(ua)
    /*
    {
      browser: "firefox",
      core: "gecko",
      deveice: "desktop",
      firefox: 18,
      platform: "mac",
      toString: function () {...}, // playbook webkit safari mobile 7.2.1.0
      version: "18.0"
    }
    */

Windows Phone (pretended by Chrome)

    // "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; SAMSUNG; SGH-i917)"
    console.log(ua)
    /*
    {
      browser: "iemobile",
      core: "trident",
      deveice: "mobile",
      iemobile: 9,
      platform: "windows_phone",
      toString: function () {...}, // "windows_phone trident iemobile mobile 9.0"
      version: "9.0"
    }
    */

## License

[MIT license](https://raw.github.com/ChrisYip/user-agent/master/LICENSE.txt).
