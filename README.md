# TypeScript Monorepo with Eslint and Prettier

This is a TypeScript Monorepo with shared workspaces in the `packages` directory. The `eslint-config` workspace defines a base eslint confg file that is extended by the other eslint configs in other workspaces. Similarly, the `prettier-config` workspace defines a base prettier config file that is extended by other prettier configs in other workspaces. Finally, the `tsconfig` workspace defined a base tsconfig file that is extended by other tsconfigs in other workspaces.
