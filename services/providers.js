const Provider = require('../models/Providers');

class ProvidersService {
  async getProviders() {
    // const providers = await Promise.resolve(providersMock);
    const providers = await Provider.find();
    return providers || [];
  }

  async getProvider({ providerId }) {
    const provider = await Provider.findById(providerId);
    return provider || {};
  }

  async createProvider({ provider }) {
    const newProvider = new Provider(provider);
    await newProvider.save();
    return newProvider.id;
  }

  async updateProvider({ providerId, provider }) {
    const updatedProvider = new Provider(provider);
    updatedProvider._id = providerId;
    await Provider.findByIdAndUpdate(providerId, updatedProvider);
    return updatedProvider.id;
  }

  async deleteProvider({ providerId }) {
    await Provider.findByIdAndDelete(providerId);
    return providerId;
  }
}

module.exports = ProvidersService;
