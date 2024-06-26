# next-template

A Next.js 13 template for building apps with Radix UI and Tailwind CSS.

## Requirements
- node 18.19.1



## Usage

```bash
npx create-next-app -e https://github.com/shadcn/next-template
```

## Install dependencies

```bash
yarn install
```

### Copy .env file
```bash
cp .env.example .env
```

### Set up db
## Create db and change credentials in .env file 


## Run project

```bash
yarn next dev
```

## Run migrations

```bash
yarn prisma migrate dev
```


## Features

- Next.js 13 App Directory
- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Tailwind CSS class sorting, merging and linting.


## Setting Variables

| Setting Variable           | Description |
|--|:--:|
| DATABASE_URL | Path to the sqlite file  |
| GITHUB_CLIENT_ID | Github client id used for auth |
| GITHUB_CLIENT_SECRET | Github client secret used for auth |
| GOOGLE_CLIENT_ID | Google client id used for auth |
| GOOGLE_CLIENT_SECRET | Google client secret used for auth |
| POLYGON_MUMBAI_API_KEY | Alchemy's mumbai chain API KEY |
| POLYGON_MAINNET_API_KEY | Alchemy's mainnet chain API KEY |
| NEXT_PUBLIC_BASE_URL | API server base url, use http://localhost:3000 for local or https://interface-xi-cyan.vercel.app for prod |
| NEXT_PUBLIC_RENT_INSURANCE_ADDRESS | Rent Insurance SmartContract address |
| NEXT_PUBLIC_MY_TOKEN_ADDRESS | Token SmartContract address |
| NEXT_PUBLIC_LOW_RISK_ADDRESS | Low risk pool SmartContract address |
| NEXT_PUBLIC_MEDIUM_RISK_ADDRESS | Medium risk pool SmartContract address |
| NEXT_PUBLIC_HIGH_RISK_ADDRESS | High risk pool SmartContract address |

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
