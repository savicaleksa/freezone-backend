"use strict";

/**
 *  novost controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::novost.novost", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;
    const entity = await strapi.db.query("api::novost.novost").findOne({
      where: { slug },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);
    return this.transformResponse(sanitizedEntity);
  },
}));
