const production_boo = process.env.NODE_ENV == 'production';

const TerserPlugin = require('terser-webpack-plugin');



module.exports = {
    css: {
        loaderOptions: {
            css: {},

            sass: {
                // data: require('fs').readFileSync('src/scss/var.scss', 'utf-8')
            }
        }
    },




};



