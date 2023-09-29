// The HTTP request object in Node allows us to send HTTP requests to servers and retrieve data.
// We can use it to make GET and POST requests. We can handle the response using callbacks or promises.

const http = require("http");
http
  .get("http://google.ca", (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(data);
    });
  })
  .on("error", (err) => {
    console.error(err);
  });
