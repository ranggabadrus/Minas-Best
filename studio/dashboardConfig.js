export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6235f2566a095f320205cba1',
                  title: 'Sanity Studio',
                  name: 'minas-best-studio',
                  apiId: '98fde095-b53a-4a24-beaa-54b558a01ff7'
                },
                {
                  buildHookId: '6235f25626e06321ffb5dd56',
                  title: 'Landing pages Website',
                  name: 'minas-best',
                  apiId: '4f5469bf-f4b5-41fd-8488-763ed48ad7d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ranggabadrus/Minas-Best',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://minas-best.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
