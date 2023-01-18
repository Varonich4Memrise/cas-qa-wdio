import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function(){
    await browser.url("https://www.google.com");
    await browser.pause(1000);
})

When(/Search with (.*)/, async function(searchItem){
    console.log(`>> searchItem: ${searchItem}`);
    let element = await $(`[name=q]`);
    await element.setValue(searchItem);
    await browser.keys("Enter");
})

Then(/^Click on the first search result$/, async function(){
    let element = await $(`<h3>`);
    element.click();
})

Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log(`>> expectedURL: ${expectedURL}`);
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedURL);
})