// import { MetadataRoute } from 'next'

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url:          'https://growthnext.in',
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority:     1,
//     },
//     {
//       url:          'https://growthnext.in/#services',
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority:     0.9,
//     },
//     {
//       url:          'https://growthnext.in/#about',
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority:     0.8,
//     },
//     {
//       url:          'https://growthnext.in/#portfolio',
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority:     0.8,
//     },
//     {
//       url:          'https://growthnext.in/#contact',
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority:     0.9,
//     },
//   ]
// }

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://growthnext.in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}