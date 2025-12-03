import { browser} from "@wdio/globals";


export default class Page { 

async open (path = '') { 

    await browser.url(`https://www.uvu.edu/${path}`);

}

async catelogopen (path) {

    await browser.url(`https://catalog.uvu.edu/${path}`)
}


}


