'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"/api"'
  // API_ROOT: '"https://api.dev.xiepinhui.com.cn"'
  // API_ROOT: '"http://www.xiepinhui.com.cn"'
})