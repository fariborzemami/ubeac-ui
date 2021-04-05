const cheerio = require('cheerio');
const { config } = require('../config')

const loader = async function (source, map) {
    let callback = this.async();
    let finalSource = source;

    try {
        const $ = cheerio.load(source, {
            xmlMode: true,
            decodeEntities: false,
            selfClosingTags: true,
        });

        let rootBlock = $(config.htmlTemplateRootTag)
let isok = 0
        if (rootBlock.length === 1) {
            config.attributeMappings.forEach((map) => {
                let attrSelector = rootBlock.find(`[${map.from}]`)
                if (attrSelector.length > 0) {
                    isok=1
                    attrSelector.each(function (index, element) {
                        let old_value = $(this).attr(map.from);
                        let new_value = map.getValue(old_value);
                        $(this).attr(map.to, new_value);
                        $(this).attr(map.from, null);
                    });
                }
            })

            finalSource = $.html()
            if (isok===1)
            console.log( $.html())
        }

        callback(null, finalSource, map);

    } catch (error) {
        callback(error);
    }
};

exports.default = loader;
