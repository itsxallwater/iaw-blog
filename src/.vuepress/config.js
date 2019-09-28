const currentDateUTC = new Date().toUTCString();

module.exports = {
  title: "Mike Writes",
  dest: "./public",
  pages: ["my-first-post"],
  themeConfig: {
    repo: "https://github.com/itsxallwater/iaw-blog",
    repoLabel: "Repo",
    editLinks: true,
    editLinkText: "Found a bug? Help me improve this page!",
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/" },
      { text: "About", link: "/about/" },
      { text: "Archive", link: "/archive/" },
      { text: "RSS Feed", link: "/rss.xml" }
    ],
    logo: "/logo-transparent-compressor.png",
    docsDir: "src",
    pageSize: 5,
    startPage: 0
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-148468999-1"
      }
    ],
    [
      "vuepress-plugin-rss",
      {
        base_url: "/",
        site_url: "https://vuepressblog.org",
        filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
        count: 20
      }
    ],
    "vuepress-plugin-reading-time",
    "vuepress-plugin-janitor"
  ],
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      }
    ],
    ["link", { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["meta", { name: "msapplication-TileColor", content: "#ffffff" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["link", { rel: "mask-icon", href: "/safari-pinned-tab.svg" }]
  ]
};
