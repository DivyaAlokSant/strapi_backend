'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::visitor-count.visitor-count', ({ strapi }) => ({
  async increment(ctx) {
    // Get the first visitor-count record or create one if not exists
    let visitor = await strapi.db.query('api::visitor-count.visitor-count').findOne();
    if (!visitor) {
      visitor = await strapi.db.query('api::visitor-count.visitor-count').create({ data: { count: 1 } });
    } else {
      visitor = await strapi.db.query('api::visitor-count.visitor-count').update({
        where: { id: visitor.id },
        data: { count: visitor.count + 1 },
      });
    }
    ctx.send({ count: visitor.count });
  },
  async get(ctx) {
    let visitor = await strapi.db.query('api::visitor-count.visitor-count').findOne();
    ctx.send({ count: visitor ? visitor.count : 0 });
  }
}));