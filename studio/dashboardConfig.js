export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e52fdd2148742507be0b2fb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-m82qsr31',
                  apiId: '1662d0c4-9053-4f1a-8da5-071b0d4b4084'
                },
                {
                  buildHookId: '5e52fdd2051f081a02abe4f2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ouai4vf4',
                  apiId: 'f08ea06e-dc4d-470c-8552-67d2bee94cf2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/milostathis/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ouai4vf4.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
