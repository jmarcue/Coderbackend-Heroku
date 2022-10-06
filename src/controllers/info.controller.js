import { numCPUs } from '../utils/helper.util.js';

export default class infoClass {
  async getInfo(req, res) {
    res.render('info', {
      argument: process.argv,
      platform: process.platform,
      version: process.version,
      memory: process.memoryUsage.rss(),
      path: process.execPath,
      process: process.pid,
      folder: process.cwd(),
      processQty: numCPUs
    });
  }
}