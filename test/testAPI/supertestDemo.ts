// This is a demo file. These tests can later be used as templates for CAS testing

import supertest from "supertest";
import { expect } from "chai";
import * as dotenv from "dotenv";
dotenv.config();

const request = supertest('https://gorest.co.in/public-api/');
const TOKEN = process.env.TOKEN;

describe('Users', () => {
    let userId = null;

    describe('POST', () => {
        it('/users', () => {
            const payload = {
                email: `test${Math.floor(Math.random()*9999)}@mail.ca`,
                name: 'Test name2',
                gender: 'male',
                status: 'inactive'
            };
    
            return request
                 .post('users')
                 .set("Authorization", `Bearer ${TOKEN}`)
                 .send(payload)
                 .then((res) => {
                    console.log(res.body);
                    //expect(res.body.data.email).to.eq(data.email);
                    //expect(res.body.data.status).to.eq(data.status);
                    expect(res.body.data).to.deep.include(payload);
                    userId = res.body.data.id;
                    //console.log(userId);
                 });
            });
    });

    describe('Users', () => {
        it('GET /users', () => {
            return request
                 .get(`users?access-token=${TOKEN}`)
                 .then((res) => {
                     //console.log(err);
                    //console.log(res.body);
                     expect(res.body.data).to.not.be.empty;
                 });
            });
    
            it('/users/:id', () => {
                return request
                 .get(`users/${userId}?access-token=${TOKEN}`)
                 .then((res) => {
                 expect(res.body.data.id).to.be.eq(userId);
                 });
             });
        
         it('GET /users with query params', () => {
            const url =`users?access-token=${TOKEN}&page=5&gender=female&status=active`;
    
            return request
                 .get(url)
                    .then((res) => {
                        expect(res.body.data).to.not.be.empty;
                        res.body.data.forEach((data) => {
                            expect(data.gender).to.eq('female');
                            expect(data.status).to.eq('active');
                        });
                    });
             });
        });

describe('PUT', () => {
    it('/users/:id', () => {
        const payload = {
            name: `Kasia - ${Math.floor(Math.random()*9999)}`,
            gender: 'female',
            status: 'active'
        };

        return request
             .put(`users/${userId}`)
             .set("Authorization", `Bearer ${TOKEN}`)
             .send(payload)
             .then((res) => {
                //expect(res.body.data.email).to.eq(data.email);
                expect(res.body.data.status).to.eq(payload.status);
                expect(res.body.data).to.deep.include(payload);
                console.log(payload);
             });
        });
    });
    
    describe('DELETE', () => {
    
        it('/users/:id', () => {
            return request
                 .delete(`users/${userId}`)
                 .set("Authorization", `Bearer ${TOKEN}`)
                 .then((res) => {
                    console.log(res.body);
                    expect(res.body.data).to.be.eq(null);
                 });
            });
        });
    
     




})
