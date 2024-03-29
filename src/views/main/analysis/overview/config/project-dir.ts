export const projectDir = `
│  .browserslistrc
│  .editorconfig
│  .env.development
│  .env.production
│  .env.test
│  .eslintrc.js
│  .gitignore
│  .prettierignore
│  .prettierrc
│  babel.config.js
│  commitlint.config.js
│  package-lock.json
│  package.json
│  README.md
│  tsconfig.json
│  vue.config.js
│
├─.husky
│  │  commit-msg
│  │  pre-commit
│  │
│  └─_
│          .gitignore
│          husky.sh
│
├─public
│      favicon.ico
│      index.html
│
└─src
    │  App.vue
    │  main.ts
    │  shims-vue.d.ts
    │
    ├─assets
    │  ├─css
    │  │      base.less
    │  │      index.less
    │  │
    │  └─img
    │          login-bg.svg
    │          logo.svg
    │
    ├─base-ui
    │  ├─breadcrunmb
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      breadcrumb.vue
    │  │  │
    │  │  └─types
    │  │          index.ts
    │  │
    │  ├─card
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          card.vue
    │  │
    │  ├─code
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          code.vue
    │  │
    │  ├─descriptions
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      descriptions.vue
    │  │  │
    │  │  └─types
    │  │          types.ts
    │  │
    │  ├─echart
    │  │  │  index.ts
    │  │  │
    │  │  ├─data
    │  │  │      china.json
    │  │  │
    │  │  ├─hooks
    │  │  │      useEchart.ts
    │  │  │
    │  │  └─src
    │  │          base-echart.vue
    │  │
    │  ├─editor
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          index.vue
    │  │
    │  ├─form
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      form.vue
    │  │  │
    │  │  └─types
    │  │          index.ts
    │  │
    │  ├─table
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          table.vue
    │  │
    │  └─text-link
    │      │  index.ts
    │      │
    │      └─src
    │              textlink.vue
    │
    ├─components
    │  ├─nav-header
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          nav-header.vue
    │  │          user-info.vue
    │  │
    │  ├─nav-menu
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          nav-menu.vue
    │  │
    │  ├─page-content
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          page-content.vue
    │  │
    │  ├─page-echarts
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      bar-echart.vue
    │  │  │      line-echart.vue
    │  │  │      map-echart.vue
    │  │  │      pie-echart.vue
    │  │  │      rose-echart.vue
    │  │  │
    │  │  ├─types
    │  │  │      index.ts
    │  │  │
    │  │  └─utils
    │  │          convert-data.ts
    │  │          coordinate-data.ts
    │  │
    │  ├─page-modal
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          page-modal.vue
    │  │
    │  └─page-search
    │      │  index.ts
    │      │
    │      └─src
    │              page-search.vue
    │
    ├─global
    │      index.ts
    │      register-element.ts
    │      register-elementicons.ts
    │      registerProperties.ts
    │
    ├─hooks
    │      use-page-modal.ts
    │      use-page-search.ts
    │      use-permission.ts
    │
    ├─router
    │  │  index.ts
    │  │
    │  └─main
    │      ├─analysis
    │      │  ├─dashboard
    │      │  │      dashboard.ts
    │      │  │
    │      │  └─overview
    │      │          overview.ts
    │      │
    │      ├─product
    │      │  ├─category
    │      │  │      category.ts
    │      │  │
    │      │  └─goods
    │      │          goods.ts
    │      │
    │      ├─story
    │      │  ├─chat
    │      │  │      chat.ts
    │      │  │
    │      │  └─list
    │      │          list.ts
    │      │
    │      └─system
    │          ├─department
    │          │      department.ts
    │          │
    │          ├─menu
    │          │      menu.ts
    │          │
    │          ├─role
    │          │      role.ts
    │          │
    │          └─user
    │                  user.ts
    │
    ├─service
    │  │  axios_demo.ts
    │  │  index.ts
    │  │  type.ts
    │  │
    │  ├─login
    │  │      login.ts
    │  │      type.ts
    │  │
    │  ├─main
    │  │  ├─analysis
    │  │  │      dashboard.ts
    │  │  │
    │  │  └─system
    │  │          system.ts
    │  │
    │  └─request
    │          config.ts
    │          index.ts
    │          type.ts
    │
    ├─store
    │  │  index.ts
    │  │  types.ts
    │  │
    │  ├─login
    │  │      login.ts
    │  │      types.ts
    │  │
    │  └─main
    │      ├─analysis
    │      │      dashboard.ts
    │      │      types.ts
    │      │
    │      ├─product
    │      │      produtc.ts
    │      │
    │      └─system
    │              system.ts
    │              type.ts
    │
    ├─utils
    │      cache.ts
    │      date-format.ts
    │      map-menus.ts
    │
    └─views
        ├─login
        │  │  login.vue
        │  │
        │  ├─config
        │  │      account-config.ts
        │  │
        │  └─cpns
        │          login-panel.vue
        │          login-phone.vue
        │          login.account.vue
        │
        ├─main
        │  │  main.vue
        │  │
        │  ├─analysis
        │  │  ├─dashboard
        │  │  │      dashboard.vue
        │  │  │
        │  │  └─overview
        │  │      │  overview.vue
        │  │      │
        │  │      └─config
        │  │              dependencies.ts
        │  │              dev-dependencies.ts
        │  │              index.ts
        │  │              project-dir.ts
        │  │              technology-stacks.ts
        │  │
        │  ├─product
        │  │  ├─category
        │  │  │  │  category.vue
        │  │  │  │
        │  │  │  └─config
        │  │  │          content.config.ts
        │  │  │          modal.config.ts
        │  │  │          search.config.ts
        │  │  │
        │  │  └─goods
        │  │      │  goods.vue
        │  │      │
        │  │      └─config
        │  │              content.config.ts
        │  │              modal.config.ts
        │  │              search.config.ts
        │  │
        │  ├─story
        │  │  ├─chat
        │  │  │      chat.vue
        │  │  │
        │  │  └─list
        │  │      │  list.vue
        │  │      │
        │  │      └─config
        │  │              content.config.ts
        │  │
        │  └─system
        │      ├─department
        │      │  │  department.vue
        │      │  │
        │      │  └─config
        │      │          content.config.ts
        │      │          index.ts
        │      │          modal.config.ts
        │      │          search.config.ts
        │      │
        │      ├─menu
        │      │  │  menu.vue
        │      │  │
        │      │  └─config
        │      │          content.config.ts
        │      │
        │      ├─role
        │      │  │  role.vue
        │      │  │
        │      │  └─config
        │      │          content.config.ts
        │      │          index.ts
        │      │          modal.config.ts
        │      │          search.config.ts
        │      │
        │      └─user
        │          │  user.vue
        │          │
        │          └─config
        │                  content.config.ts
        │                  index.ts
        │                  modal.config.ts
        │                  search.config.ts
        │
        └─not-found
                not-found.vue
`
