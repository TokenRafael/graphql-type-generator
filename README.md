# GFG - Graphql-Type-Generator

### This is a simple extension to create types in a graphql apollo server node project.

## Usage

- Right click the parent folder of your type
- Click on `GTG: Generate Type Folder`
- Give your type name. This will be the name of the folder.
- You're ready!

## Created folder and contents

Let's say you're creating the `user` tipe. The created folder should look like this:
- yourProject
  - src
    - user
      - index.ts `all exports are here`
      - db.ts `connect to db and export functions`
      - model.ts `typescript class for typing`
      - resolver.ts `object with all graphql resolvers`
      - type.ts `gql string for type definition`
  - package.json
