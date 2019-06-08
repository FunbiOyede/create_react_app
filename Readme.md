## Step by Step process for create react app
 ### Step 1
 - mkdir project_folder
 - cd project_folder
 - npm init for creating package.json file
 
 ### Step 2 Installing Dependecies
 - npm i -S react react dom
 - npm i -D webpack webpack-cli webpack-dev-server
 - npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
 -  add
  `  "build": "\"webpack --mode production\"",
             "start": "\"webpack-dev-server --mode development\""` 
             to scripts in readme
 - create src dir and create index.html
 -  add 
 `<!DOCTYPE html>
             <html>
                 <head>
                     <title>My React Configuration Setup</title> 
                 </head> 
             <body>
                 <div id="root"></div>
                 <script src="./dist/bundle.js"></script> 
             </body>
             </html>`
              to html file
 - create an index.js file in src dir and write 
 ```
   import ReactDOM from 'react-dom';
                                                   
    class Welcome extends Component {
       render(){
         return <h2>Hello world </h2>;
           }
       }
                                                   
 ReactDOM.render(<Welcome />, document.getElementById("root")); ```
 
 
 ```
 
 - create webpack.config.js file in the root folder
 Then write
 ```
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
    },  module: {
        rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                }
                ]
    },
};
```

- create .babelrc file in the root folder
```$xslt
{  "presets": [    "@babel/preset-env",    "@babel/preset-react"  ]}
```
- Then do 
```$xslt
npm install html-webpack-plugin -D
```

- Add this to the webpack.config.js file
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

plugins: [    new HtmlWebpackPlugin({      template: path.resolve('./index.html'),    }),  ]
```

- remove script tag in your index.html file

- Create .gitignore file add the following
`
node_modules
dist
`

### Step 3 create App.js in the src folder
