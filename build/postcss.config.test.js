'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const postcssConfig = require('./postcss.config.js')

test('postcssConfig', async (t) => {
  await t.test('returns default configuration', () => {
    const context = {
      file: {
        dirname: 'src'
      },
      env: 'development'
    }
    const config = postcssConfig(context)

    assert.deepEqual(config.map, {
      inline: false,
      annotation: true,
      sourcesContent: true
    })
    assert.equal(config.plugins.autoprefixer.cascade, false)
    assert.equal(config.plugins.rtlcss, false)
  })

  await t.test('disables source maps for examples', () => {
    const context = {
      file: {
        dirname: 'path/to/examples/test'
      },
      env: 'development'
    }
    const config = postcssConfig(context)

    assert.equal(config.map, false)
  })

  await t.test('enables rtlcss when environment is RTL', () => {
    const context = {
      file: {
        dirname: 'src'
      },
      env: 'RTL'
    }
    const config = postcssConfig(context)

    assert.equal(config.plugins.rtlcss, true)
  })
})
