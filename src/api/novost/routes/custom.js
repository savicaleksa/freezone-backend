module.exports = {
  routes: [
    {
      method: "GET",
      path: "/novosts/:slug",
      handler: "novost.findOne",
    },
  ],
};
