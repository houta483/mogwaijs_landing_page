module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`, 
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
        fonts: [
          'material icons'
        ]
      },
    },
    `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, 
  ],
}