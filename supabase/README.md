## Scripts

NOTE: Scripts starting with underscore (`_`) are not meant to be used directly.

#### Link Project

Links your remote Supabase project. Set `NEXT_PUBLIC_SUPABASE_PROJECT_ID` in your `.env` to your Supabaes instance before running.

```shell
yarn link-project
```

#### Generate

Generates types from your local Docker Supabase instance.

```shell
yarn generate
yarn g #alias
```

- [Reference](https://supabase.com/docs/guides/api/rest/generating-types)

#### Generate Remote

Generates types from your remote Supabase instance using your project ID specifid in the root env files.

```shell
yarn generate:remote
yarn gr #alias
```

#### New Migration

Generates a new migration by diffing against the db.

```shell
yarn migration:new <MIGRATION_NAME>
yarn mn <MIGRATION_NAME> #alias
```

- [Reference](https://supabase.com/docs/reference/cli/supabase-db-diff)

#### Start

Start local Supabase instance.

```shell
yarn start
yarn s #alias
```

#### Reset

Reset local Supabase DB.

```shell
yarn reset
yarn r #alias
```

#### Lint

```shell
yarn lint
yarn l #alias
```
