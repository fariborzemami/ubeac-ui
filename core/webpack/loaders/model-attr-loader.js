const { parse, compileTemplate } = require("@vue/component-compiler-utils");
const compiler = require("vue-template-compiler");
const htmlparser = require("htmlparser2");
const loaderUtils = require("loader-utils");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const generator = require("@babel/generator");

const loader = async function (source, map) {
    let callback = this.async();
    try {
        console.log('model-attr-loader')
        callback(null, source, map);

    } catch (error) {
        callback(error);
    }
};

exports.default = loader;
