const { getCustomBlock, descriptorToHTML, toDescriptor } = require("./utils");
const cheerio = require('cheerio');
const attr_name = 'model'

const loader = async function (source, map) {
    let callback = this.async();
    let result = source;

    try {
        var sourceDesc = toDescriptor(source);
        var pageBlock = getCustomBlock(sourceDesc, 'page')

        if (pageBlock) {

            const $ = cheerio.load(pageBlock.content, {
                xmlMode: true,
                decodeEntities: false,
                selfClosingTags: true,
            });

            let selector = $(`[${attr_name}]`)

            if (selector.length > 0) {
                selector.each(function (index, element) {
                    var old_value = $(this).attr(attr_name);
                    $(this).attr(`v-${attr_name}`, `model.${old_value}`);
                    $(this).attr(attr_name, null);
                });

                pageBlock.content = $.html()
                result = descriptorToHTML(sourceDesc)
            }
        }

        callback(null, result, map);

    } catch (error) {
        callback(error);
    }
};

exports.default = loader;
