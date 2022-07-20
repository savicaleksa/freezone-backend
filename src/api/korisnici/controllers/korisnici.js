'use strict';

/**
 *  korisnici controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::korisnici.korisnici');
