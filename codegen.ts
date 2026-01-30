import { appid } from './package.json'

import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      'http://127.0.0.1:9001/graphql': {
        headers: {
          Appid: appid,
          Authorization: `Bearer a`,
        },
      },
    },
  ],
  config: {
    namingConvention: {
      typeNames: 'change-case-all#pascalCase',
      enumValues: 'change-case-all#upperCase',
    },
  },
  ignoreNoDocuments: true,
  pluckConfig: {
    globalGqlIdentifierName: ['gql', 'graphql'],
  },
  overwrite: true,
  debug: true,
  generates: {
    'src/lib/generated/graphql.ts': {
      documents: ['src/lib/graphql/*.graphql'],
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        skipTypename: true, //<https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations#skiptypename>
        withHooks: true,
        federation: true,
        useTypeImports: true, // [verbatimModuleSyntax:true](https://github.com/dotansimha/graphql-code-generator/issues/10028#issuecomment-2206940409)
      },
      hooks: {
        afterOneFileWrite: ['prettier --write'],
      },
    },
    'src/lib/generated/graphql.schema.json': {
      documents: ['src/lib/graphql/*.graphql'],
      plugins: ['introspection'],
    },
  },
}
export default config
