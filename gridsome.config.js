// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Run Away Next',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        route: 'blog/:title',
      },
    },
      { use: 'gridsome-plugin-netlify-cms' },
      // fix paths
      { use: 'gridsome-plugin-netlify-cms-paths',
     
    }
  ],
  transformers: {
    remark: {}
  },
}
