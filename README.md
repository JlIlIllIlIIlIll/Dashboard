# Next13 E-commerce Dashboard

## Demo

https://next13-dashboard-e-commerce.vercel.app/

_You can use : https://stripe.com/docs/testing for demo cards_

## Description

This project is an e-commerce dashboard developed with Next.js, React, Tailwind, Prisma, and MySQL. It offers a comprehensive solution for managing an online store, complete with an integrated CMS and admin dashboard.

## Key Features

- **Admin Interface with Shadcn UI**: A modern and intuitive user interface to manage your store.
- **Integrated CMS and API**: Manage multiple vendors or stores from a single CMS.
- **Product Management**: Create, update, and delete products with ease.
- **Category Management**: Organize your products into various categories.
- **Image Upload**: Add multiple images for each product.
- **Filters**: Create and manage filters such as color and size.
- **Billboards**: Add large-format texts at the top of the page, linked to a category or standalone.
- **Advanced Search**: Search among categories, products, sizes, colors, and more.
- **Featured Products**: Highlight certain products on the homepage.
- **Sales Analysis**: View your orders, sales, and other key statistics.
- **Charts**: Track the evolution of your revenue and other key metrics.

## Prerequisites

- Node version 14.x

## Installation

### Clone this repository: 
```git clone https://github.com/JlIlIllIlIIlIll/Next13-Dashboard-E-commerce.git```

### Install the necessary packages: 
```npm i```

### Set up your `.env` file with the necessary keys and configurations.

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/


DATABASE_URL=''

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""

FRONTEND_STORE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
```

### Connect to PlanetScale and Push Prisma
```
npx prisma generate
npx prisma db push
```
## Available Commands

- `npm run dev`: Launches a development instance of the application.
