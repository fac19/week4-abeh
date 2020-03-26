const test = require("tape");
const router = require("./router");
const supertest = require("supertest");

test("initialise", t => {
  let num = 2;
  t.equal(num, 2, "Should return 2");
  t.end();
});

test("Check status code is 200 on homepage", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("content-type", /html/)
    .end((error, response) => {
        t.error(error);
        t.equal(response.text.includes('<title>Blog Home</title>'), true);      
        t.end();
    });
});

test("Check status code is 200 on form page", t => {
  supertest(router)
    .get("/displayForm")
    .expect(200)
    .expect("content-type", /html/)
    .end((error, response) => {
        t.error(error);
        t.equal(response.text.includes('<title>Blog Post</title>'), true);      
        t.end();
    });
});

test("Check status code is 404 on incorrect url", t => {
  supertest(router)
    .get("/random")
    .expect(404)
    .expect("Content-type", /html/)
    .end((error, response) => {
      t.error(error);
      t.equal(response.text, "<h1>Not found</h1>")
      t.end()
    });
});

test("Check status code is 302 on post creation", t => {
  supertest(router)
    .post("/create-post")
    .expect(302)
    .expect("location", "/")
    .end((error, response) => {
      t.error(error);
      t.end();
    })
})

test("Does blog post send correct data", t => {
  supertest(router)
    .post("/create-post")
    .send('blogpost=hello')
    .redirects()
    .expect(200)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.text.includes('hello'), true);
      t.end();
    });
});