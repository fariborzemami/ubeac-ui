const { parse, compileTemplate } = require("@vue/component-compiler-utils");
const htmlparser = require("htmlparser2");
const loaderUtils = require("loader-utils");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const generator = require("@babel/generator");
const { getCustomBlock, descriptorToHTML, toDescriptor } = require("./utils");


const loader = async function (source, map) {
    
    let callback = this.async();
    
    let result = source;
    try {

        var sourceDesc = toDescriptor(source);
        var pageBlock = getCustomBlock(sourceDesc, 'page')

        if (pageBlock) {

            result = `<template>${pageBlock.content}</template>\n`

            if (sourceDesc.script)
                result += `<script>${sourceDesc.script.content}</script>\n`

            result += '<style>'
            if (sourceDesc.styles) {
                sourceDesc.styles.forEach(styleBlock => {
                    result += styleBlock.content
                });
            }
            result += '</style>'
        }

        callback(null, result, map);

    } catch (error) {
        console.log(source)
        callback(error);
    }
};

exports.default = loader;
// exports.resolve = getMergedCode;
