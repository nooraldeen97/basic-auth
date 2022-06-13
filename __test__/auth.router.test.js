"use strict";

const supertest=require("supertest");

const server=require("../src/server");

const request=supertest(server.app);

const { db } = require('../src/models/index');

// before any of the test create a connection
beforeAll(async () => {
    await db.sync();
});

describe("test the authentication",()=>{
    test("test signup route",async()=>{
        const response=await request.post("/signup").send({
            username:"nooraldeen",
            password:"12345"
        })
        expect(response.status).toEqual(201);
    })
})