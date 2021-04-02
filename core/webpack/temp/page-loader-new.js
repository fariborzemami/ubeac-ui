const { parse, compileTemplate } = require("@vue/component-compiler-utils");
const compiler = require("vue-template-compiler");
const htmlparser = require("htmlparser2");
const loaderUtils = require("loader-utils");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const generator = require("@babel/generator");



const loader = async function (source, map) {

  let callback = this.async();

  if (source.indexOf('xxxxx') < 0) {
    callback(null, source, map);
    return
  }

  try {

    let sourceDesc = toDescriptor(source);

    if (sourceDesc.script) {
      sourceDesc.script.content = sourceDesc.script.content.replace(/^(\/\/\n)+/, "");
      // generating AST
      // console.log(sourceDesc.script.content)
      const ast = parser.parse(sourceDesc.script.content, { sourceType: 'module' },)
      console.log('-----------------------------------------')
      console.log(JSON.stringify(ast,4))
      // if (ast.program.body)
      //   ast.program.body.forEach((node) => {
      //     if (node.type == 'ExportDefaultDeclaration'){
      //       console.log('-----------------------------------------')
      //       console.log(node.declaration)
      //       console.log('-----------------------------------------')
      //     }
          
      //   })

      traverse.default(ast, {
        enter(path) {
          // console.log(path)
          // console.log('-----------------------------------------')
          if (path.isIdentifier({ name: "data" })) {

            // throw('hihihihi');
            // console.log(path.node)
            // console.log('-----------------------------------------')
            // console.log(path)
            // path.node.name = "x";
          }
          // if (path.type == 'ReturnStatement')
          // console.log('-----------------------------------------')
          //   console.log(path)
          //   console.log('-----------------------------------------')
        }
      });

    }



    sourceDesc.customBlocks.forEach((customBlock) => {
      if (customBlock.type === 'page')
        customBlock.content = customBlock.content.replace(/^(\n)+/, "");
    })

    let result = descriptorToHTML(sourceDesc)

    callback(null, result, map);

  } catch (error) {
    callback(error);
  }
};

/**
 * Returns the SFC descriptor for a given SFC sourcecode
 * @param source
 */
const toDescriptor = source =>
  parse({
    source: source,
    compiler,
    needMap: false
  });

function blockToHTML(block) {
  if (block) {
    let attrToHtmlAttr = ([key, value]) => ` ${key}="${value}" `;
    let attrs = Object.entries(block.attrs).reduce((accum, curr) => accum + attrToHtmlAttr(curr), "");
    return `<${block.type} ${attrs}>${block.content}</${block.type}>`;
  }
}

/**
 * Given a SFC's descriptor, returns the SFC's source **without** the template part
 * @param descriptor - SFC descriptor
 * @returns {string} - SFC source code
 */
const descriptorToHTML = descriptor =>
  // descriptor.customBlocks
  //   .map(cb => blockToHTML(cb))
  //   .join("\n") +
  `<template>${descriptor.template.content}</template>` +
  blockToHTML(descriptor.script) +
  descriptor.styles.map(cb => blockToHTML(cb)).join("\n");

exports.default = loader;
// exports.resolve = getMergedCode;
