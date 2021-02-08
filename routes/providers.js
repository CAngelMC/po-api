const express = require('express');
const { providersMock } = require('../utils/mocks/providers');

function providersApi(app) {
  const router = express.Router();
  app.use('/api/providers', router);

  router.get('/', async function (req, res, next) {
    try {
      const providers = await Promise.resolve(providersMock);

      res.status(200).json({
        data: providers,
        message: 'providers listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:providerId', async function (req, res, next) {
    try {
      const providers = await Promise.resolve(providersMock[0]);

      res.status(200).json({
        data: providers,
        message: 'provider retrieved',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function (req, res, next) {
    try {
      const createdProviderId = await Promise.resolve(providersMock[0].id);
      res.status(201).json({
        data: createdProviderId,
        message: 'provider created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:movieId', async function (req, res, next) {
    try {
      const updatedProviderId = await Promise.resolve(providersMock[0].id);

      res.status(200).json({
        data: updatedProviderId,
        message: 'provider updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:movieId', async function (req, res, next) {
    try {
      const deletedProviderId = await Promise.resolve(providersMock[0].id);

      res.status(200).json({
        data: deletedProviderId,
        message: 'provider deleted',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = providersApi;
