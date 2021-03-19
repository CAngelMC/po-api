const Apikey = require('../models/Apikey');

class ApikeyService {
  async getApiKey({ token }) {
    const apiKey = await Apikey.find({ token: token });
    return apiKey[0];
  }
}

module.exports = ApikeyService;
