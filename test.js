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
    .expect(("content-type", /html/))
    .end((error, response) => {
        t.error(error);
        console.log('ATTENTION', response.body);
    //   console.log("response.url", response.url)
        t.equal(response.body.includes('<html lang'), '<html lang');      
        t.end();
    });

    // .end((error, response) => {
    // //   console.log("response", response)
    //   t.error(error);
    //   console.log('ATTENTION', response.body);
    // //   console.log("response.url", response.url)
    //   t.equal(response.text, "index.html");      
    //   t.end();
    // });
});

// test("check status code is 200", t => {
//   supertest(router)
//     .get("/")
//     .expect(200)
//     .expect("Content-Type", "text/plain")
//     .end((err, res) => {
//       t.error(err);
//       t.equal(res.text, "Hello");
//       t.end();
//     });
// });
