# Under Belt — Competitor UX Audit

**Reviewed:** 11 October 2026  
**Reference stores:** Calvin Klein Underwear and SKIMS Men  
**Scope:** navigation, typography, collection discovery, product detail, color/size selection, fabric/fit education, trust signals, accessibility and checkout readiness.

## What the references do well

### Calvin Klein

- Product listing pages combine category and collection navigation with filters/sorting, Quick View, visible variant counts, ratings/reviews and multipack products.
- Product pages present the selected color, size selector, size guide, model sizing, composition, care and fit details. Certain product pages also expose color comparison.
- The underwear guide teaches differences among silhouettes and connects shape, rise, coverage, sizing and fabric to a buying decision.
- The overall interface relies on clear hierarchy, high contrast and concise product facts; the broad lesson is to make comparisons easy, not to copy the brand's exact typography or layouts.

Official references:
- https://www.calvinklein.us/en/underwear/men
- https://www.calvinklein.us/en/underwear/men/boxer-briefs
- https://www.calvinklein.us/en/underwear/men/boxer-briefs/cotton-stretch-3-pack-boxer-brief/NB2616-LWK.html
- https://www.calvinklein.us/en/underwear-guide
- https://www.calvinklein.us/en/men-size-guide.html

### SKIMS

- Product pages put star ratings/review counts, a clear size selector and a size-guide entry near the purchase controls.
- Product detail is separated into focused groups such as Details, Fit & Fabric, and Shipping & Returns.
- Product image sequences include front/side/back model views and product-only/fabric-detail shots, helping customers inspect both fit and finish.
- Dedicated fabric guidance compares material families and helps customers shop by feel, stretch, breathability and purpose.

Official references:
- https://skims.com/products/skims-stretch-mens-3-inch-boxer-brief-oyster
- https://skims.com/products/skims-stretch-mens-3-inch-boxer-brief-3-pack-obsidian
- https://skims.com/products/skims-cotton-mens-3-inch-boxer-brief-onyx/
- https://skims.com/pages/mens-fabric-guide

## What is now reflected in Under Belt

- **Minimal primary navigation:** exactly eight destinations — Collections, Shop, About, Journal, Orders, FAQ, Contact and Fabric guide. Product-type links remain inside Shop and the footer instead of being repeated in the header.
- **Utility access:** product search, wishlist, account and shopping bag remain separate from the main links.
- **Collections directory:** collection cards open a Shop view pre-filtered to that collection.
- **Dedicated Fit Guide:** linked from the mobile menu, footer, collection directory and product size-guide links. It explains waist measurement, silhouette choice and practical fit checks without inventing an unverified brand size chart.
- **Compare Colors:** product detail pages now provide a modal with images for the available colors. Selecting a color applies it to the product's own selector/gallery.
- **Product discovery:** existing filters include fabric, collection, size, color, availability and price; sorting includes featured, price, rating and review count.
- **Quick View:** color and size must be selected before adding to the bag.
- **Fabric guide and product details:** the product detail area keeps composition, care, breathability, moisture handling and stretch details, with a separate Fabric Guide page.
- **Mobile navigation accessibility:** the menu has accessible labels/state, indicates the current destination and can be dismissed with Escape or by clicking the backdrop.

## Visual system: what should and should not match

Under Belt uses a restrained warm-neutral background, dark text, generous spacing, a sans-serif system stack with an editorial serif accent, understated controls and strong product imagery. These are reusable visual principles. Calvin Klein and SKIMS each use their own branded typography, spacing and campaign art; matching those exact brand assets or making all three stores visually identical would weaken Under Belt's identity and is not necessary for an equivalent level of usability.

## Remaining gaps before real commerce

1. **Supplier-confirmed size measurements:** the current catalog exposes letter sizes, but precise waist-to-size measurements need to be supplied and verified for each garment/fabric before publishing a numeric Under Belt size chart.
2. **Verified reviews:** ratings/counts in a demo catalog must not be treated as real customer feedback until connected to an actual review process.
3. **Multipacks and bundles:** add them only after real pack SKUs, contents, quantities and prices are defined.
4. **Real operations:** authentication, inventory, order persistence, returns, shipping rates and payment must be connected to trusted server-side services. The existing browser-based checkout is a prototype and does not process a real payment.
5. **Image rights and brand independence:** review every remote product image before launch; use owned, licensed or supplier-approved images. Do not imply Calvin Klein or SKIMS product imagery belongs to Under Belt.
6. **Business promises:** verify shipping thresholds, return windows, contact details, delivery estimates and all policy wording before publishing.

## Release note

This release preserves the existing 50-product catalog and the eight-item desktop navigation, and adds Fit Guide and Compare Colors. It does not attempt to copy either competitor's exact design, typography or proprietary content.
