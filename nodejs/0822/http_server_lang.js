const http = require("http");
const fs = require("fs");

const sendResponse = (filename, statusCode, response) => {
  fs.readFile(`./html/${filename}`, (error, data) => {
    if (error) {
      response.statusCode = 500;
      response.setHeader("Content-Type", "text/plain");
      response.end("Sorry, internal error");
    } else {
      response.statusCode = statusCode;
      response.setHeader("Content-Type", "text/html");
      response.end(data);
    }
  });
};

const server = http.createServer((request, response) => {
  const method = request.method;
  let url = request.url;

  if (method === "GET") {
    const requestUrl = new URL(url, `http://${ip}:${port}`);
    console.log(requestUrl)
    url = requestUrl.pathname;
    console.log(url)
    const lang = requestUrl.searchParams.get("lang");
    console.log(lang)

    let selector;

    if (lang === null || lang === "en") {
      selector = "";
    } else if (lang === "zh") {
      selector = "-zh";
    } else {
      selector = "";
    }

    if (url === "/") {
      sendResponse(`index${selector}.html`, 200, response);
    } else if (url === "/about.html") {
      sendResponse(`about${selector}.html`, 200, response);
    } else {
      sendResponse(`404${selector}.html`, 404, response);
    }
  } else {

  }
});

const port = 8000;
const ip = "127.0.0.1";

server.listen(port, ip, () => {
  console.log(`Server is running at http://${ip}:${port}`);
});
