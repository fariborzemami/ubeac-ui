const fs = require('fs')
const path = require('path')
const fg = require('fast-glob')
const prettier = require('prettier')
const cheerio = require('cheerio')

const { config } = require('../config')
const PLUGIN_NAME = 'VuePagePlugin'
const patterns = ['**/*.vue']
class VuePagePlugin {
    constructor() {
    }

    apply(compiler) {
        compiler.hooks.done.tap(config.pageFolder, (
            stats /* stats is passed as an argument when done hook is tapped.  */
        ) => {
        });

        compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
            try {

                // getting all *.vue pages
                const pagePaths = fg.sync(patterns, {
                    cwd: config.pageFolder,
                    onlyFiles: true,
                })

                var pages = [];
                pagePaths.forEach((pagePath) => {

                    // reading file content
                    var source = fs.readFileSync(path.join(config.pageFolder, pagePath), 'utf8');

                    // extracting root block's attributes
                    const $ = cheerio.load(source, {
                        xmlMode: true,
                        decodeEntities: false,
                        selfClosingTags: true,
                    });
                    let rootnode = $(config.htmlTemplateRootTag)

                    if (rootnode && rootnode.attr()) {
                        pages.push({ ...rootnode.attr(), name: pagePath });
                    }
                });

                var to = path.resolve(__dirname, config.generatePageFile)

                var code = `export default ${JSON.stringify(pages)}`

                var code = prettier.format(code, {
                    parser: 'babel',
                    semi: false,
                    singleQuote: true,
                })

                // these lines should be used to avoid recursive dependency 
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
