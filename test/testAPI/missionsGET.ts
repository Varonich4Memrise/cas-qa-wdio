import supertest from "supertest";
import { expect } from "chai";
import * as dotenv from "dotenv";
dotenv.config();
const request = supertest('https://app.memrise.com/v1.16/');

//TODO
//Step1: Hard code a session cookie into the missions test. Need help.
//Step2: Set up a baseAPITest.ts to authorize CAS test-user,
//find & grab a session cookie,
//pass the cookie/token to the tests.


describe('Users', () => {
  
    it('GET /users/:id', () => {
        const COOKIE = process.env.SESSION_COOKIE;
        
        // browser.addCookie({
        //     name: 'casSessionCookie',
        //     value: COOKIE
        // });

        return request.get('missions/minimal').set('cookie', COOKIE).then((res) => {
            expect(res.body.data).to.not.be.empty;
            console.log(res.body);
        });
    });

    

})




