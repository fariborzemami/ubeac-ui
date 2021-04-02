const fs = require('fs')
const path = require('path')
const fg = require('fast-glob')
const { parse } = require('@vue/component-compiler-utils');
const compiler = require('vue-template-compiler');
const prettier = require('prettier')

const PLUGIN_NAME = 'VuePagePlugin'
const PAGES_FOLDER = './src/pages/'
const GENERATED_FILE = '../../../src/runtime/pages.js'
const patterns = ['**/*.vue']

const toDescriptor = source =>
    parse({
        source: source,
        compiler,
        needMap: false
    });

class VuePagePlugin {
    constructor() {
    }

    apply(compiler) {
        compiler.hooks.done.tap(PLUGIN_NAME, (
            stats /* stats is passed as an argument when done hook is tapped.  */
        ) => {
        });

        compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
            try {
                // getting all pages
                const pagePaths = fg.sync(patterns, {
                    cwd: PAGES_FOLDER,
                    onlyFiles: true,
                })

                var pages = [];
                pagePaths.forEach((pagePath) => {

                    // reading file content
                    var source = fs.readFileSync(path.join(PAGES_FOLDER, pagePath), 'utf8');

                    // extracting root blocks
                    var sourceDesc = toDescriptor(source);
                    var pageBlockIndex = sourceDesc.customBlocks.findIndex(customBlock => customBlock.type === 'page');
                    if (pageBlockIndex >= 0) {
                        var pageAttrs = sourceDesc.customBlocks[pageBlockIndex].attrs
                        pages.push({ ...pageAttrs, name: pagePath });
                    }
                });

                var to = path.resolve(__dirname, GENERATED_FILE)

                var code = `
                import Vue from 'vue'
                const pages = ${JSON.stringify(pages)}
                Vue.mixin({
                    data: function() {
                      return {
                        get pages() {
                          return pages
                        }
                      }
                    }
                  })
                  
                export default pages `
                
                var code = prettier.format(code, {
                    parser: 'babel',
                    semi: false,
                    singleQuote: true,
                })

                if (
                    fs.existsSync(to) &&
                    fs.readFileSync(to, 'utf8').trim() === code.trim()
                ) {
                    return
                }

                fs.writeFile(to, code, function (err) {
                    if (err) return console.log(err);
                });

            } catch (error) {
                compilation.errors.push(error)
            }
        })
    }
}

module.exports = VuePagePlugin
