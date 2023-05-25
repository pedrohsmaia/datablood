# Tamagui Universal Starter

Tamagui Premium Universal Starter

## 📦 Included packages

- [Tamagui](https://tamagui.dev) 🪄
- [solito](https://solito.dev) for cross-platform navigation
- Expo SDK
- Next.js
- Expo Router
- Supabase

# 🗂 Folder layout

The main apps are:

- `apps`
  - `expo` (native)
  - `next` (web)
- `packages` shared packages across apps
  - `ui` includes your custom UI kit that will be optimized by Tamagui
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for native or web.)
- `supabase` supabase files, migrations, types, etc. + (scripts)[/supabase/README.md]

## Environment Convention

Follows [how Next.js handles env variables](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables) - In general only one .env.local file is needed. However, sometimes you might want to add some defaults for the development or production environment.

- Put the secrets inside `.env.local` - env files ending with .local will NOT be committed to git.
- Do NOT put your secrets inside `.env` as it will get committed to git

## Development

1. Read [Supabase's README](/supabase/README.md) and set it up
2. Run the dev script
   - Web: `yarn web`
   - iOS: `yarn ios`
   - Android: `yarn android`

## UI Kit

Note we're following the [design systems guide](https://tamagui.dev/docs/guides/design-systems) and creating our own package for components.

See `packages/ui` named `@my/ui` for how this works.

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `expo`:

```sh
cd apps/expo
yarn add react-native-reanimated
cd ..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

You may potentially want to have the native module transpiled for the next app. If you get error messages with `Cannot use import statement outside a module`, you may need to use `transpilePackages` in your `next.config.js` and add the module to the array there.

### Deploying to Vercel

- Root: `./apps/next`
- Install command to be `yarn set version berry && yarn install`
- Build command: leave default setting
- Output dir: leave default setting
