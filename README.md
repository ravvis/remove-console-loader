# remove-console-loader

Remove console statements(configurable) from the webpack build


## Getting Started

To begin, you'll need to install `remove-console-loader`:

```console
npm i remove-console-loader --save-dev
```

**app.js**

```js
const someVar = "Hello World";

console.log(someVar);
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
            {
                loader: "remove-console-loader",
                options: {
                    "exclude": [ "error", "warn"]
                }
            }
        ],
    }],
  },
};
```

Finally run `webpack` via your preferred method.