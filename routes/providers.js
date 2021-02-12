const express = require('express');
const ProvidersService = require('../services/providers');

function providersApi(app) {
  const router = express.Router();
  app.use('/api/providers', router);

  const providersService = new ProvidersService();

  router.get('/', async function (req, res, next) {
    const { tags } = req.query;
    try {
      const providers = await providersService.getProviders({ tags });

      res.status(200).json({
        data: providers,
        message: 'providers listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:providerId', async function (req, res, next) {
    const { providerId } = req.params;
    try {
      const providers = await providersService.getProvider({ providerId });

      res.status(200).json({
        data: providers,
        message: 'provider retrieved',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function (req, res, next) {
    const { body: provider } = req;
    try {
      const createdProviderId = await providersService.createProvider({
        provider,
      });
      res.status(201).json({
        data: createdProviderId,
        message: 'provider created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:providerId', async function (req, res, next) {
    const { providerId } = req.params;
    const { body: provider } = req;
    try {
      const updatedProviderId = await providersService.updateProvider({
        providerId,
        provider,
      });

      res.status(200).json({
        data: updatedProviderId,
        message: 'provider updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:providerId', async function (req, res, next) {
    const { providerId } = req.params;
    try {
      const deletedProviderId = await providersService.deleteProvider({
        providerId,
      });

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
