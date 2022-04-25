const server = require('../app/server')
const request = require("supertest");

describe("Unit test for Express", () => {
  test("GET /", (done) => {
    request(server)
    .get("/")
    .expect(200)
    .expect((res) => {
      console.log(res.text)
      expect(res.text).toBe('Hola mundo')
    })
    .end((err, res) => {
      if (err) return done(err);
      return done();
    })
  })

  test("GET /launchX", (done) => {
    request(server)
    .get("/launchX")
    .expect(200)
    .expect((res) => {
      console.log(res.text)
      expect(res.text).toBe('Bienvenidos a launchx')
    })
    .end((err, res) => {
      if (err) return done(err);
      return done();
    })
  })

  test("GET /explorersInNode", (done) => {
    const explorer = { name: "Explorer", msg: "Hello" }
    request(server)
    .get("/explorersInNode")
    .expect(200)
    .expect((res) => {
      console.log(res.body)
      expect(res.body).toEqual(explorer)
    })
    .end((err, res) => {
      if (err) return done(err);
      return done();
    })
  })

  test("GET /explorersInNode/soyElExplorerGerardo", (done) => {
    const explorerName = { explorerName: "soyElExplorerGerardo" }
    request(server)
    .get("/explorersInNode/soyElExplorerGerardo")
    .expect(200)
    .expect((res) => {
      console.log(res.body)
      expect(res.body).toEqual(explorerName)
    })
    .end((err, res) => {
      if (err) return done(err);
      return done();
    })
  })
})
  