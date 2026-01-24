module.exports = {
    siteUrl: "https://hacktheboot.it",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ["/api/*"],
    additionalPaths: async (config) => [await config.transform(config, "/"), await config.transform(config, "/login"), await config.transform(config, "/register")],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
        ],
        additionalSitemaps: ["https://hacktheboot.it/sitemap.xml"],
    },
};
