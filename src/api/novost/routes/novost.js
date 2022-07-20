'use strict';

/**
 * novost router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::novost.novost');
