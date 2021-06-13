const loaderUtils = require("loader-utils");
const babel = require("@babel/core");

function loader(source){
    const options = loaderUtils.getOptions(this);

    const transformed = babel.transform(source, {
        plugins: [["transform-remove-console", options]]
    });
    return transformed.code;
}

exports.default = loader;