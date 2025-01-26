import test from '@playwright/test';
import {  createResource, getResource } from './apiUtility';
import { faker } from '@faker-js/faker';
const lname = faker.person.lastName();
const cname = faker.company.buzzNoun();

test(`Create a resource using access token`, async ({ context }) => {
    const leadId = await createResource(context.request, lname, cname);
    test.expect(leadId).toBeTruthy(); 
    const lastname = await getResource(context.request);
    console.log(lastname);
});


