'use strict';

/**
 * korisnici service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::korisnici.korisnici');
