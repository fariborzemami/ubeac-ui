const config =
{
    htmlTemplateRootTag: 'page',
    pageFolder: './src/pages/',
    generatePageFile: '../../../src/runtime/pages.js',
    attributeMappings: [
        {
            from: 'model',
            to: 'v-model',
            getValue: (value) => `model.${value}`
        },
        {
            from: 'on-click',
            to: '@click',
            getValue: (value) => value
        }
    ]
}

exports.config = config