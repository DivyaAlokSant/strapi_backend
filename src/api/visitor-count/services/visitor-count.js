'use strict';

/**
 * visitor-count service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::visitor-count.visitor-count');
