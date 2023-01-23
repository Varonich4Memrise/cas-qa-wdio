import { config as baseConfig } from "../wdio.conf";
export const config = Object.assign(baseConfig, {
    // List test env specific key-val pairs here
    environment: "TEST",
    baseURL: ""
})