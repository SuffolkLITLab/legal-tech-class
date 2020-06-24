const mermaid = require('remark-mermaid')
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
    navbar: {
      title: 'Legal Tech Class',
      logo: {
        alt: 'Gavel with digital waveform',
        src: 'img/icons8-law-96.png',
      },
      links: [
        {to: 'docs/about-legal-tech-class', 
        label: 'Textbook', 
        position: 'left'},
        /*{to: 'blog', label: 'Blog', position: 'left'},*/
        {to: 'docs/classes/class-overview', 
        label: 'Classes', 
        position: 'left'},
        {href: 'https://docassemble.org/docs.html',
         label: 'Official Docassemble Documentation',
         position: 'left'
        },
        {
          href: 'https://github.com/nonprofittechy/docassemble-class',
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
              to: 'docs/introduction',
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
          remarkPlugins: [[mermaid,{ simple: true }]], // Plugin for remark-mermaid to generate UML diagrams
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    // String format.
    'https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.4.4/mermaid.min.js',
    // Object format.
    // {
    //   src:
    //     'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    //   async: true,
    // },
  ],  
};
