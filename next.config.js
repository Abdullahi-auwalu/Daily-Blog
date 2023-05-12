/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
            domains: ["global-uploads.webflow.com"
            ]
        }
   
}

module.exports = nextConfig



// "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63d3b65287589367f19fc287_Screen%20Shot%202023-01-27%20at%201.25.19%20AM.png"

// images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'assets.link.global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63d3b65287589367f19fc287_Screen%20Shot%202023-01-27%20at%201.25.19%20AM.png',
//         port: '',
//         pathname: '//global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63d3b65287589367f19fc287_Screen%20Shot%202023-01-27%20at%201.25.19%20AM.png',
//       },
//     ],
//   }