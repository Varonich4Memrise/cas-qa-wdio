import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function(){
    //@ts-ignore
    await browser.url("https://www.google.com");
    console.log(`>> BrowserObj: ${JSON.stringify(browser)}`);
})

When(/Search with (.*)/, async function(searchItem){
    console.log(`>> searchItem: ${searchItem}`);
    let element = await $(`[name=q]`);
    await element.setValue(searchItem);
    await browser.keys("Enter");
    console.log(`>> ElementObj: ${JSON.stringify(element)}`);
})

Then(/^Click on the first search result$/, async function(){
    let element = await $(`<h3>`);
    element.click();
})

Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log(`>> expectedURL: ${expectedURL}`);
    await browser.waitUntil(async function(){
        return await browser.getTitle() === "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    }, {timeout: 20000, interval: 500, timeoutMsg: `Failed loading WDIO web page: ${await browser.getTitle()}`});

    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedURL);
})

// Given(/^A web page is opened$/, async function(){
//     await browser.url("https://the-internet.herokuapp.com/dropdown");
//     await browser.setTimeout({implicit: 15000, pageLoad: 10000});
//     await browser.maximizeWindow();
// })

// When(/^Perform web interactions$/, async function(){
    // let num = "12345";
    // let strNum = num.toString();
    // let element = await $(`[type=number]`);
    // await element.scrollIntoView();
    // //await element.setValue(strNum);
    // await element.click();

    // // slow typing
    // for(let i = 0; i< strNum.length; i++){
    //     let charStr = strNum.charAt(i);
    //     await browser.pause(500);
    //     await browser.keys(charStr);
    // }

    // dropdown

    // let ele = await $('//select/option[@selected="selected"]');
    // let val = await ele.getText();
    // chai.expect(val).to.equal("Please select an option");

    // dropdown - get a list of options
//     let eleArr = await $$(`select > option`);
//     let arr = [];
//     for (let i = 0; i < eleArr.length; i++) {
//         let element = eleArr[i];
//         let val = await element.getText();
//         arr.push(val);
//         console.log(val);
//     }

//     console.log(`>>Options Array: ${arr}`);

//     await browser.pause(1000);
// })