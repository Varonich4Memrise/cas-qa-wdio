Feature: Demo Feature
    This is a demo feature
    - Questions/clarification
    - Known issues
    - Todo

    Background: Launch google page
        Given Google page is opened

    @demo @smoke @debug
    Scenario Outline: Running first demo feature
        When Search with <SearchItem>
        Then Click on the first search result
        Then URL should match <ExpectedURL>

        Examples:
            | TestID     | SearchItem | ExpectedURL           |
            | DEMO_TC001 | WDIO       | https://webdriver.io/ |