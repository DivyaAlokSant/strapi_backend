'use strict';

/**
 * visitor-count router
 */

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/visitor/increment',
      handler: 'visitor-count.increment',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/visitor/count',
      handler: 'visitor-count.get',
      config: {
        auth: false,
      },
    },
    // Default core routes
    {
      method: 'GET',
      path: '/visitor-counts',
      handler: 'visitor-count.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/visitor-counts/:id',
      handler: 'visitor-count.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/visitor-counts',
      handler: 'visitor-count.create',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/visitor-counts/:id',
      handler: 'visitor-count.update',
      config: {
        auth: false,
      },
    },
    {
      method: 'DELETE',
      path: '/visitor-counts/:id',
      handler: 'visitor-count.delete',
      config: {
        auth: false,
      },
    },
  ],
};