const webpackDev = require('./webpack.dev.js');
const webpackProd = require('./webpack.prod.js');
const path = require('path');
var webpack = require("webpack");
console.log('Running', process.env.NODE_ENV, 'build');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                "plugins": ["transform-react-jsx"] ,
                "presets": ["@babel/preset-env"]
            },
            jsx: {
              files: [{
                expand: true,
                cwd: 'react', // Custom folder
                src: ['**/*.jsx'],
                dest: 'compiled/', // Custom folder
                ext: '.js'
              }]
            }
        },
        webpack: {
            myConfig: webpackDev,

        },
        watch: {
            options: {
                livereload: true,
            },
            js: {
                files: ['react/**/*.js','react/**/*.jsx'],
                tasks: ['babel','webpack'],
                options: {
                    interrupt: true,
                },
            },

        }
    })

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['babel','webpack','watch']);
};