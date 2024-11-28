/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // Configuração de imagens para permitir domínios externos
  images: {
    domains: ['th.bing.com', 'imagensladingpage.s3.sa-east-1.amazonaws.com', 'https://main.dg2tmjsaimumx.amplifyapp.com'],
  },

  async headers() {
    return [
      {
        source: '/api/*',  // Pode ser qualquer URL ou wildcard
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',  // Permite acesso de todos os domínios (alterar conforme necessário)
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS', // Permitir métodos necessários
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',  // Permitir cabeçalhos necessários
          },
        ],
      },
    ];
  },

  // ...other config
};

export default nextConfig;
