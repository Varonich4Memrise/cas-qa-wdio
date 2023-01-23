// these are sample functions, which can be re-used for CAS test automation

import request from "supertest" 
import 'mocha'

let payload = {
    email: "eve.holt@reqres.in",
    password: "pistol"
}

async function POST(baseURL: string, endpoint: string, authToken: string, payload: object) {
        if(!baseURL || !endpoint) {
            throw Error(`One of the given values baseURL: ${baseURL}, endpoint: ${endpoint} is not valid`)
        }
        baseURL = baseURL.trim();
        endpoint = endpoint.trim();
        //reporters.addStep(testid, "info", `Making a POST to ${endpoint}`);
        try {
            return await request("https://reqres.in")
                .post("/api/register")
                .auth(authToken, { type: 'bearer'})
                .set("Content-Type", "application/json")
                .set("Accept", "application/json")
                .send(payload)
        } catch (err) {
            err.message = `Error making a POST call to ${endpoint}, ${err}`
            throw err;
        }
    }

  async function GET(baseURL: string, endpoint: string, authToken: string, queryParam: object) {
    if(!baseURL || !endpoint) {
        throw Error(`One of the given values baseURL: ${baseURL}, endpoint: ${endpoint} is not valid`)
    }
    baseURL = baseURL.trim();
    endpoint = endpoint.trim();
    //reporters.addStep(testid, "info", `Making a GET to ${endpoint}`);
    try {
        return await request(baseURL)
            .get(endpoint)
            .query(queryParam)
            .auth(authToken, { type: 'bearer'})
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
    } catch (err) {
        err.message = `Error making a GET call to ${endpoint}, ${err}`
        throw err;
    }
}







export default { GET, POST }
