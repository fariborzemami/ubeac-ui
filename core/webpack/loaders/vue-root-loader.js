const { config } = require('../config')
const { getCustomBlock, descriptorToHTML, toDescriptor } = require("./utils");

const loader = async function (source, map) {

    let callback = this.async();
    let finalSource = source;

    try {
        // parsing source to SFCDescriptor
        let sourceDesc = toDescriptor(source);

        // finding root html templte block
        let rootBlock = getCustomBlock(sourceDesc, config.htmlTemplateRootTag);

        if (rootBlock) {

            let finalDesc = {
                template: {
                    type: 'template',
                    content: rootBlock.content,
                    attrs: rootBlock.attrs
                },
                customBlocks: sourceDesc.customBlocks.filter((x) => x.type !== config.htmlTemplateRootTag),
                styles: sourceDesc.styles,
                script: sourceDesc.script
            };

            finalSource = descriptorToHTML(finalDesc)

        }

        callback(null, finalSource, map);

    } catch (error) {
        callback(error);
    }
};

exports.default = loader;
