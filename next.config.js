// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

//const isProd = (process.env.NODE_ENV || "production") === "production";

module.exports = {
  //basePath: isProd ? "/work" : "",
  //basePath: "/work",
  basePath: process.env.BASE_PATH,
};
