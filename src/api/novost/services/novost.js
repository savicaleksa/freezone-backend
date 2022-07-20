'use strict';

/**
 * novost service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::novost.novost');
