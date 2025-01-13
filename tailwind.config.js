
module.exports = {
    content: ["./index.html"],
    theme: {
      extend: {
        container: {
          center: true,
          padding: '1rem',
          screens: {
            sm: '100%',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
            '2xl': '1400px',
          },
        },
        backgroundImage: {
          'hero-pattern':"url('../image/welcome-hero/banner.jpg')",
          'banner':"url('../image/counter/counter-banner.jpg')"
        },
        fontSize:{
          'smallFont':'12px'
        },
        textTransform:{
          'capitalize':"capitalize",
        },
        maxWidth: {
          'custom-max':'1200px',
          'custom-2': '1520px',
          'custom-3':'630px',
        },
        inset:{
          'minus-24':'-24px',
          'border':'1px solid',
          'radius-3':'3px',
        },
        borderRadius: {
          'radius-3': '3px',
        },
        spacing: {
          '-58': '-58px',
          '13':'11rem',
          
        },
        colors:{
          'pink': '#ff545a',
          'skyblue':'#70a9ff',
          'graylight':'#f8fafb',
        }

      },
    },
    plugins: [],
  }