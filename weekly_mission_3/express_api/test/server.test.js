const server = require('../app/server')
const request = require("supertest");

describe("Unit test for Express", () => {
  test("Get '/v1/Explorers", (done) => {
    request(server)
      .get("/v1/Explorers")
      .expect(200)
      .expect((res) => {
          expect(res.body.length).toBe(4)
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })
  test("Get '/v1/Explorers/id", (done) => {
    request(server)
      .get("/v1/Explorers/1")
      .expect(200)
      .expect((res) => {
        console.log(res.body)
          expect((res.body).id).toBe(1)
          expect((res.body).name).toBe('Gerardo')
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })
  test("POST '/v1/Explorers", (done) => {
    request(server)
      .post("/v1/Explorers")
      .expect(201)
      .expect((res) => {
          expect(JSON.parse(res.text).message).toBe('Created')
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })
  test("Deleted '/v1/Explorers", (done) => {
    request(server)
      .delete("/v1/Explorers/1")
      .expect(200)
      .expect((res) => {
          expect(JSON.parse(res.text).message).toBe('Deleted')
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })
  test("Put '/v1/Explorers", (done) => {
    request(server)
      .put("/v1/Explorers/1")
      .expect(200)
      .expect((res) => {
          expect(JSON.parse(res.text).message).toBe('Updated!')
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })
})
  