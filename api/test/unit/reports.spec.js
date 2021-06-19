"use strict";

const User = use("App/Models/User");

const { test, trait, before } = use("Test/Suite")("Reports");

trait("Test/ApiClient");
trait("Auth/Client");

before(async () => {
  await User.create({
    username: "test.report",
    email: "test.report@test.com",
    password: "test123",
  });
});

test("Movements Report", async ({ client }) => {
  const user = await User.first();

  const response = await client
    .get("api/report/movements")
    .loginVia(user, "jwt")
    .end();

  response.assertStatus(200);
});

test("History Report", async ({ client }) => {
  const user = await User.first();

  const response = await client
    .get("api/report/history")
    .loginVia(user, "jwt")
    .end();

  response.assertStatus(200);
});

test("Balance Report", async ({ client }) => {
  const user = await User.first();

  const response = await client
    .get("api/report/balance")
    .loginVia(user, "jwt")
    .end();

  response.assertStatus(200);
});

test("Cash Flow Report", async ({ client }) => {
  const user = await User.first();

  const response = await client
    .get("api/report/cash-flow")
    .loginVia(user, "jwt")
    .end();

  response.assertStatus(200);
});

test("Users Report", async ({ client }) => {
  const user = await User.first();

  const response = await client
    .get("api/report/users")
    .loginVia(user, "jwt")
    .end();

  response.assertStatus(200);
});
