'use strict';

const preset = require('neutrino-preset-react');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const polyfill = require.resolve('babel-polyfill');

const template = path.join(__dirname, 'src', 'template.ejs');

// strip the default HtmlWebpackPlugin
preset.plugins = preset.plugins
  .filter(plugin => {
    if (!plugin.constructor) {
      return true;
    }   

    return plugin.constructor.name !== 'HtmlWebpackPlugin';
  }); 

const pages = [
  { filename: 'index.html', chunk: 'index', src: 'index.js' },
  { filename: 'entry_details.html', chunk: 'entry-details', src: 'entry-details.js' },
  { filename: 'sponsors.html', chunk: 'sponsors', src: 'sponsors.js' },
  { filename: 'judging_details.html', chunk: 'judging-details', src: 'judging-details.js' },
];


pages.forEach(({filename, chunk, src}) => {
  const entry = [ polyfill, `./src/${src}` ];  
  if (process.env.NODE_ENV === 'development') {
    entry.push(`webpack-dev-server/client?http://localhost:${preset.devServer.port}`);
  }

  preset.entry[chunk] = entry;

  preset.plugins.push(new HtmlWebpackPlugin({
    template,
    hash: true,
    xhtml: true,
    chunks: ['commons', chunk],
    filename,
  }));
});

module.exports = preset;
