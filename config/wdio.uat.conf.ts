import { config as baseConfig } from "../wdio.conf";
export const config = Object.assign(baseConfig, {
    // List UAT env specific key-val pairs here
    environment: "UAT",
    basesURL: ""
})