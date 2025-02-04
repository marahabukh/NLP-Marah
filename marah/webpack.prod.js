import path from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";
import WorkboxPlugin from "workbox-webpack-plugin";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    entry: "./src/client/index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true, 
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\.html$/, use: ["html-loader"] },
            {
                test: /\.css$/, 
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({ template: "./src/client/views/index.html", filename: "index.html" }),
        new WorkboxPlugin.GenerateSW()
    ],
};
