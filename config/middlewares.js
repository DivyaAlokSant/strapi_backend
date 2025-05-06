module.exports = [
  'strapi::logger',
  'strapi::errors',
  { resolve: './src/middlewares/rate-limit' },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];