const { getCustomBlock, descriptorToHTML, toDescriptor } = require("./utils");
const cheerio = require('cheerio');

const { config } = require('../config')

const loader = async function (source, map) {
    let callback = this.async();
    let finalSource = source;

    try {
        var sourceDesc = toDescriptor(source);
        var pageBlock = getCustomBlock(sourceDesc, config.htmlTemplateRootTag)

        if (pageBlock) {

            const $ = cheerio.load(pageBlock.content, {
                xmlMode: true,
                decodeEntities: false,
                selfClosingTags: true,
            });

            config.attributeMappings.forEach((map) => {
                let attrSelector = $(`[${map.from}]`)
                if (attrSelector.length > 0) {
                    attrSelector.each(function (index, element) {
                        let old_value = $(this).attr(map.from);
                        let new_value = map.getValue(old_value);
                        $(this).attr(map.to, new_value);
                        $(this).attr(map.from, null);
                    });
                }
            })

            pageBlock.content = $.html()
            finalSource = descriptorToHTML(sourceDesc)
    }

        callback(null, finalSource, map);

} catch (error) {
    callback(error);
}
};

exports.default = loader;
