var path = require('path');
var config = {
   entry: './main.js',
	
   output: {
      path: path.join(__dirname, "dist/js"),
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         {  
            test: /\.scss$/, 
            loader: "style-loader!css-loader!sass-loader" 
        },
      ]

   }  
}
module.exports = config;