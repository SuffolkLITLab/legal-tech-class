//const mermaid = require('remark-mermaid');
const admonitions = require('@lebalz/remark-admonitions');
// var vfile = require('to-vfile');

module.exports = {
  title: 'Legal Tech Class',
  tagline: 'A collaboratively-built class for teaching legal technology',
  url: 'https://suffolklitlab.github.io',
  baseUrl: '/legal-tech-class/',
  favicon: 'img/favicon.ico',
  organizationName: 'suffolklitlab', // Usually your GitHub org/user name.
  projectName: 'legal-tech-class', // Usually your repo name.
  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },    
    navbar: {
      title: 'Legal Tech Class',
      logo: {
        alt: 'LIT Lab',
        src: 'img/blue_logo.png',
      },
      items: [
        {to: 'docs/about-legal-tech-class', 
        label: 'Textbook', 
        position: 'left'},
        /*{to: 'blog', label: 'Blog', position: 'left'},*/
        {to: 'docs/classes/class-overview', 
        label: 'Classes', 
        position: 'left'},
        {
          href: "https://suffolklitlab.org",
          label: "Suffolk Law School LIT Lab",
          position: "right",
        },
        {
          href: 'https://github.com/SuffolkLITLab/legal-tech-class',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview of Docassemble',
              to: 'docs/introduction-to-docassemble',
            },
            {
              label: 'Suffolk LIT Lab How To',
              href: 'https://suffolklitlab.org/howto/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://docassemble.org/docs/support.html#tocAnchor-1-1',
            },
          ],
        },
        {
          title: 'More information',
          items: [
            {
              label: 'About the Editor',
              href: 'https://nonprofittechy.com',
            },
            {
              label: "About the LIT Lab",
              href: "https://suffolklitlab.org",
            },
            {
              label: 'GitHub',
              href: 'https://github.com/suffolklitlab/legal-tech-class',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/suffolklitlab',
            },
          ],
        },
        {
          title: "Image Credits",
          items: [
            {
              label: "Icons made by Freepik",
              href: "https://www.flaticon.com/authors/freepik",
            },
            {
              label: "Icons made by Freepik",
              href: "https://www.flaticon.com/free-icon/excavator_975574",
            },

          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Quinten Steenhuis and open source contributors. Built with Docusaurus. <a target="_blank" href="https://icons8.com/icons/set/law">Law icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/suffolklitlab/legal-tech-class/edit/master/class/',
          remarkPlugins: [
            [admonitions, {
              customTypes: {
                custom: {
                  emoji: '💻',
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>'
                }
              }
            }]
        ], // Plugin for remark-mermaid to generate UML diagrams
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    // String format.
    //'https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.4.4/mermaid.min.js',
    // Object format.
    // {
    //   src:
    //     'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    //   async: true,
    // },
  ],  
};
