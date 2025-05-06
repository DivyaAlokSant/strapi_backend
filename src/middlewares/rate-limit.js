const ratelimit = require('koa-ratelimit');

const db = new Map();

module.exports = (config, { strapi }) => {
  return ratelimit({
    driver: 'memory',
    db,
    duration: 60000, // 1 minute
    errorMessage: 'Too many requests, please try again later.',
    id: (ctx) => ctx.ip,
    max: 100, // limit each IP to 100 requests per minute
    disableHeader: false,
  });
};