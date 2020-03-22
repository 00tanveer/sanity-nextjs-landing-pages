export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e77be2f608473ead8cbfa86',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vm1eoay5',
                  apiId: '71cde2a7-4527-4206-a19b-ddfaa3edb3d1'
                },
                {
                  buildHookId: '5e77be2f608473ee38cbfbea',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jda51gv3',
                  apiId: '3371e62a-f6d0-4e78-8f9c-df96c4e99d1a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/00tanveer/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jda51gv3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
