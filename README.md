# Under Belt — storefront upgrade

A standalone, responsive Under Belt storefront prototype for the current 50-product men's underwear catalog. The visual direction takes broad inspiration from premium underwear ecommerce (large product imagery, quiet typography, clear variant selection, and concise product facts) without copying any competitor's branded page layout or assets.

## Run locally

Install dependencies once, then start Vite:

```bash
npm install
npm run dev
```

To create a production bundle for Vercel:

```bash
npm run build
```

Vite outputs the site to `dist/` as configured in `vercel.json`.

## Storefront improvements in this version

- Product cards show rating data, color choices and a proper **Quick view** dialog.
- Quick view requires the shopper to choose a size and color before adding the item to the bag.
- Shop filters include fabric, collection, size, color, availability and maximum price; sorting includes price, rating and review count.
- Category tiles use product imagery, navigation focuses on shopping categories, and product pages highlight fit/material information.
- The cart includes progress toward the configured free-shipping threshold.
- Basic search/social sharing metadata has been added.
- The primary header is intentionally minimal: Collections, Shop, About, Journal, Orders, FAQ, Contact and Fabric Guide. Product-type navigation remains inside the shop, not duplicated in the header.
- Collections has its own directory page and each collection opens a pre-filtered shop view.
- Fit Guide is a dedicated destination linked from mobile navigation, the footer and product size selectors. It explains how to measure, choose a silhouette and check comfort without inventing unverified size measurements.
- Product pages include Compare Colors, an accessible dialog that lets shoppers preview the current product in its available colors and applies the selected variant to the product gallery.

## Before real-world launch

This is still a **front-end prototype**, not a production commerce backend. Cart, account, wishlist and order data are stored in the browser; payment is not processed and order tracking is not connected to a fulfillment system. Do not enter real payment-card information in the demo checkout. Connect a secure payment provider and server-side order/inventory/authentication system before taking orders. Verify the seeded product ratings/review counts, stock, shipping threshold, return wording, contact details and any promotional claims before publishing. The current catalog is men's-only; a women's collection needs its own verified product data, imagery and size/fit information rather than reusing men's variants.
