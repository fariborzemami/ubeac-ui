const { config } = require('../config')
const cheerio = require('cheerio')

const loader = async function (source, map) {

    let callback = this.async();
    let finalSource = source;

    try {
        const $ = cheerio.load(source, {
            xmlMode: true,
            decodeEntities: false,
            selfClosingTags: true,
        });

        // finding root html templte block
        $(config.htmlTemplateRootTag).each((i, item) => item.tagName = 'template')

        callback(null, $.html(), map);

    } catch (error) {
        callback(error);
    }
};

exports.default = loader;
