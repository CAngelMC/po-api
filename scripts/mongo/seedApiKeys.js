const chalk = require('chalk');
const crypto = require('crypto');
const debug = require('debug')('app:scripts:api-keys');
const MongoLib = require('../../lib/mongo');

const adminScopes = [
  'signin:auth',
  'signup:auth',
  'create:feedback',
  'read:feedback',
  'update:feedback',
  'delete:feedback',
  'create:index',
  'read:index',
  'update:index',
  'delete:index',
  'create:orden',
  'read:orden',
  'update:orden',
  'delete:orden',
  'create:orden-admin',
  'read:orden-admin',
  'update:orden-admin',
  'delete:orden-admin',
  'create:proveedor',
  'read:proveedor',
  'update:proveedor',
  'delete:proveedor',
  'create:user',
  'read:user',
  'update:user',
  'delete:user',
];

const publicScopes = [
  'signin:auth',
  'signup:auth',
  'create:feedback',
  'read:feedback',
  'update:feedback',
  'delete:feedback',
  'create:index',
  'read:index',
  'update:index',
  'delete:index',
  'create:orden',
  'read:orden',
  'update:orden',
  'delete:orden',
  'create:orden-admin',
  'read:orden-admin',
  'update:orden-admin',
  'delete:orden-admin',
  'create:proveedor',
  'read:proveedor',
  'update:proveedor',
  'delete:proveedor',
  'read:user',
];

const apiKeys = [
  {
    token: generateRandomToken(),
    scopes: adminScopes,
  },
  {
    token: generateRandomToken(),
    scopes: publicScopes,
  },
];

function generateRandomToken() {
  const buffer = crypto.randomBytes(32);
  return buffer.toString('hex');
}

async function seedApiKeys() {
  try {
    const mongoDB = new MongoLib();

    const promises = apiKeys.map(async (apiKey) => {
      await mongoDB.create('api-keys', apiKey);
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} api keys have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
}

seedApiKeys();
