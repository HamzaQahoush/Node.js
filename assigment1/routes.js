const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<head><title>Hello</title><head>");
    res.write("<body><h1> Hello There </h1></body>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Send</button></form>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<head><title>Hello</title><head>");
    res.write("<body><ul> <li> Hamza</li>  <li> samer</li> </ul></body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      console.log(user);
      res.statusCode = 302;
      res.setHeader("userpage", "/create-user");
      return res.end();
    });
  }
};
module.exports = requestHandler;
