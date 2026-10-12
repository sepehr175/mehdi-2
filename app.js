const A = window.ARTICLES || [], P = window.PRODUCTS || [];
// Keep the discount badge consistent with the real old/new price.
P.forEach(p=>{if(p.oldPrice&&p.oldPrice>p.price)p.discount=Math.round((1-p.price/p.oldPrice)*100)});
// Per-category, real-photo variant pools. Original product photos remain attached to
// each product's base color; other colors use matching photos from several brands.
const COLOR_VARIANT_PHOTOS={
  'boxer-brief':{
    Black:{
      main:[
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BBR-5295M-OBD-SA-SKIMS-MENS_0012-FR.jpg?auto=format&ixlib=react-9.11.0&q=70&v=1755562412&w=2619',
        'https://img01.ztat.net/article/spp-media-p1/6241e216fb3f4c108b1ab6c54e7112d7/7fcc465f868d4604b5311c62ec534bc1.jpg?imwidth=762',
        'https://pvh-brands.imgix.net/catalog/product/media/NB4124_UB1_MO-ST-D2_016.jpg?auto=compress&auto=format&crop=top&fit=crop&h=950&w=713',
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BBR-6918M-ONX-DA-SKIMS-MENS_0062-FR.jpg?auto=format&ixlib=react-9.11.0&q=70&v=1729135222&w=6380',
        'https://cdlp.com/cdn/shop/files/mobile_boxer-brief.jpg?v=1725632142&width=500'
      ],
      hover:[
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-UNDERWEAR-BB-BBR-6903M-ONX_grande.jpg?auto=format&ixlib=react-9.11.0&v=1729110572',
        'https://img01.ztat.net/article/spp-media-p1/a5d7a16c01f9427d9857925974a6d382/5f050491abcf4b7aa313425bf1f36502.jpg?imwidth=762',
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BBR-5295M-OBD-SA-SKIMS-MENS_0012-FR.jpg?auto=format&ixlib=react-9.11.0&q=70&v=1755562412&w=2619',
        'https://cdlp.com/cdn/shop/files/mobile_boxer-brief.jpg?v=1725632142&width=500',
        'https://img01.ztat.net/article/spp-media-p1/6241e216fb3f4c108b1ab6c54e7112d7/7fcc465f868d4604b5311c62ec534bc1.jpg?imwidth=762'
      ]
    },
    White:{
      main:[
        'https://www.davidjones.com/productimages/magnify/2/2789107_23425283_17324825.jpg',
        'https://cdn.clothbase.com/uploads/dbb6ab4f-05bd-446f-a7fb-ebfd6528a71d/21-05-2024-gh2_bo-bbr-5635m-ch_6.jpg',
        'https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt40090ad038cc072b/68a4709427cd38d5e81838e1/37741-3.jpg?auto=webp&format=pjpg&quality=75%2C90&width=2048',
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BBR-5295M-CHK-SA-SKIMS-MENS_0016-FR.jpg?auto=format&ixlib=react-9.11.0&q=70&v=1755561978',
        'https://calvinargentina.vtexassets.com/arquivos/ids/249225/NB3612_549_alternate1_2000x2632_Hi_Res_JPEG.jpg?v=638984821809400000'
      ],
      hover:[
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-BOXER-BO-BTR-5294M-CHK_grande.jpg?auto=format&ixlib=react-9.11.0&v=1755562766',
        'https://cdn.clothbase.com/uploads/dbb6ab4f-05bd-446f-a7fb-ebfd6528a71d/21-05-2024-gh2_bo-bbr-5635m-ch_6.jpg',
        'https://www.davidjones.com/productimages/magnify/2/2789107_23425283_17324825.jpg',
        'https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt40090ad038cc072b/68a4709427cd38d5e81838e1/37741-3.jpg?auto=webp&format=pjpg&quality=75%2C90&width=2048',
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BBR-5295M-CHK-SA-SKIMS-MENS_0016-FR.jpg?auto=format&ixlib=react-9.11.0&q=70&v=1755561978'
      ]
    },
    Graphite:{
      main:[
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BBR-5295M-GUN-SA-SKIMS-MENS_0003-FR.jpg?auto=format&ixlib=react-9.11.0&q=70&v=1755562430&w=5500',
        'https://www.mottandbow.com/cdn/shop/products/boxerbrief_gray_6801-_full_body_pdp_1.jpg?v=1642601250&width=2400',
        'https://thirdbaseurban.co.za/cdn/shop/files/CKU-LOW-RISE-TRUNK-0NB41272-3_grande.jpg?v=1750251737',
        'https://www.ballantynes.co.nz/dw/image/v2/BLBD_PRD/on/demandware.static/-/Sites-ballantynes-master-catalog/default/dw771a79b3/7100304_shorelinegryteal_1f.jpg?sh=800&sm=fit&sw=800',
        'https://xyxxcrew.com/cdn/shop/files/XYTRNK53-GRAPHITEGREY_01.webp?v=1772110773'
      ],
      hover:[
        'https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-BOXER-BO-BBR-5295M-GUN.jpg?v=1755562430',
        'https://www.mottandbow.com/cdn/shop/products/boxerbrief_gray_6801-_full_body_pdp_1.jpg?v=1642601250&width=2400',
        'https://thirdbaseurban.co.za/cdn/shop/files/CKU-LOW-RISE-TRUNK-0NB41272-3_grande.jpg?v=1750251737',
        'https://www.ballantynes.co.nz/dw/image/v2/BLBD_PRD/on/demandware.static/-/Sites-ballantynes-master-catalog/default/dw771a79b3/7100304_shorelinegryteal_1f.jpg?sh=800&sm=fit&sw=800'
      ]
    }
  },
  brief:{
    Black:{
      main:[
        'https://mycomfort24.be/cdn/shop/files/Calvin_Klein_slip_3_pack_icon_cotton_stretch_hip_briefs_black_heren_LV00NB4388-UB1_Calvin_Klein_slip_lot_de_3_icon_cotton_stretch_hip_briefs_black_hommes_3.jpg?v=1753294266',
        'https://img01.ztat.net/article/spp-media-p1/28ca5975a71b4f55bae82eb12658b881/53c0bd3f8ea2499aaeeeac6f611129c8.jpg?imwidth=762'
      ],
      hover:[
        'https://img01.ztat.net/article/spp-media-p1/28ca5975a71b4f55bae82eb12658b881/53c0bd3f8ea2499aaeeeac6f611129c8.jpg?imwidth=762',
        'https://mycomfort24.be/cdn/shop/files/Calvin_Klein_slip_3_pack_icon_cotton_stretch_hip_briefs_black_heren_LV00NB4388-UB1_Calvin_Klein_slip_lot_de_3_icon_cotton_stretch_hip_briefs_black_hommes_3.jpg?v=1753294266'
      ]
    },
    White:{
      main:[
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BRF-5290M-CHK-SA-SKIMS-MENS_0010-SD.jpg?auto=format&ixlib=react-9.11.0&q=70&v=1755562678',
        'https://calvinargentina.vtexassets.com/arquivos/ids/249129-1712-2256?aspect=true&height=2256&v=638984743733970000&width=1712'
      ],
      hover:[
        'https://calvinargentina.vtexassets.com/arquivos/ids/249129-1712-2256?aspect=true&height=2256&v=638984743733970000&width=1712',
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BRF-5290M-CHK-SA-SKIMS-MENS_0010-SD.jpg?auto=format&ixlib=react-9.11.0&q=70&v=1755562678'
      ]
    },
    Graphite:{
      main:[
        'https://pvh-brands.imgix.net/catalog/product/media/NB4408_0AJ_alternate1.jpg?auto=compress&auto=format&crop=top&fit=crop&h=950&w=713',
        'https://japan.calvinklein.com/img/item/NB3607/NB3607_cMPI_a002_dc.jpg'
      ],
      hover:[
        'https://japan.calvinklein.com/img/item/NB3607/NB3607_cMPI_a002_dc.jpg',
        'https://pvh-brands.imgix.net/catalog/product/media/NB4408_0AJ_alternate1.jpg?auto=compress&auto=format&crop=top&fit=crop&h=950&w=713'
      ]
    }
  },
  trunk:{
    Black:{
      main:[
        'https://www.calvinklein.com.au/media/catalog/category/0070562-000NB2682AUB1-MO-BT-F2_1.jpg',
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BBR-6918M-ONX-DA-SKIMS-MENS_0062-FR.jpg?auto=format&ixlib=react-9.11.0&q=70&v=1729135222&w=6380'
      ],
      hover:[
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BBR-6918M-ONX-DA-SKIMS-MENS_0062-FR.jpg?auto=format&ixlib=react-9.11.0&q=70&v=1729135222&w=6380',
        'https://www.calvinklein.com.au/media/catalog/category/0070562-000NB2682AUB1-MO-BT-F2_1.jpg'
      ]
    },
    White:{
      main:[
        'https://st-calvinkleinecom.mncdn.com/mnresize/1800/1800/Content/media/ProductImg/original/637825237986666373.webp',
        'https://www.calvinklein.com.tw/dw/image/v2/BGLQ_PRD/on/demandware.static/-/Sites-ck-master-catalog/default/dwb4ce948a/NB4434/NB4434_100_main_2000x2632_Hi_Res_JPEG.jpg?q=90&sh=1348&sw=1024',
        'https://www.davidjones.com/productimages/magnify/2/2789107_23425283_17324825.jpg'
      ],
      hover:[
        'https://www.calvinklein.com.tw/dw/image/v2/BGLQ_PRD/on/demandware.static/-/Sites-ck-master-catalog/default/dwb4ce948a/NB4434/NB4434_100_main_2000x2632_Hi_Res_JPEG.jpg?q=90&sh=1348&sw=1024',
        'https://www.davidjones.com/productimages/magnify/2/2789107_23425283_17324825.jpg',
        'https://st-calvinkleinecom.mncdn.com/mnresize/1800/1800/Content/media/ProductImg/original/637825237986666373.webp'
      ]
    },
    Graphite:{
      main:[
        'https://thirdbaseurban.co.za/cdn/shop/files/CKU-LOW-RISE-TRUNK-0NB41272-3_grande.jpg?v=1750251737',
        'https://www.ballantynes.co.nz/dw/image/v2/BLBD_PRD/on/demandware.static/-/Sites-ballantynes-master-catalog/default/dw771a79b3/7100304_shorelinegryteal_1f.jpg?sh=800&sm=fit&sw=800'
      ],
      hover:[
        'https://www.ballantynes.co.nz/dw/image/v2/BLBD_PRD/on/demandware.static/-/Sites-ballantynes-master-catalog/default/dw771a79b3/7100304_shorelinegryteal_1f.jpg?sh=800&sm=fit&sw=800',
        'https://thirdbaseurban.co.za/cdn/shop/files/CKU-LOW-RISE-TRUNK-0NB41272-3_grande.jpg?v=1750251737',
        'https://xyxxcrew.com/cdn/shop/files/XYTRNK53-GRAPHITEGREY_01.webp?v=1772110773'
      ]
    }
  },
  boxer:{
    Black:{
      main:[
        'https://img01.ztat.net/article/spp-media-p1/a5d7a16c01f9427d9857925974a6d382/5f050491abcf4b7aa313425bf1f36502.jpg?imwidth=762',
        'https://img01.ztat.net/article/spp-media-p1/6241e216fb3f4c108b1ab6c54e7112d7/7fcc465f868d4604b5311c62ec534bc1.jpg?imwidth=762'
      ],
      hover:[
        'https://img01.ztat.net/article/spp-media-p1/6241e216fb3f4c108b1ab6c54e7112d7/7fcc465f868d4604b5311c62ec534bc1.jpg?imwidth=762',
        'https://img01.ztat.net/article/spp-media-p1/a5d7a16c01f9427d9857925974a6d382/5f050491abcf4b7aa313425bf1f36502.jpg?imwidth=762'
      ]
    },
    White:{
      main:[
        'https://www.westmarklondon.com/cdn/shop/products/WMU142_0745.jpg?v=1738156084&width=792',
        'https://cdlp.com/cdn/shop/files/cotton-boxer-shorts-classic-4483649.jpg?v=1757425403&width=500',
        'https://media.johnlewiscontent.com/i/JohnLewis/009255728alt1?%24background-off-white%24=&fmt=auto'
      ],
      hover:[
        'https://cdlp.com/cdn/shop/files/cotton-boxer-shorts-classic-4483649.jpg?v=1757425403&width=500',
        'https://www.westmarklondon.com/cdn/shop/products/WMU142_0745.jpg?v=1738156084&width=792',
        'https://media.johnlewiscontent.com/i/JohnLewis/009255728alt1?%24background-off-white%24=&fmt=auto'
      ]
    },
    Graphite:{
      main:['https://www.tchibo.at/img/gAglNVpf/900/image.jpeg'],
      hover:['https://www.tchibo.at/img/gAglNVpf/900/image.jpeg']
    }
  },
  jockstrap:{
    Black:{
      main:['https://images.asos-media.com/products/calvin-klein-icon-cotton-stretch-3-pack-jockstraps-in-black/210085271-3?%24n_640w%24=&fit=constrain&wid=513'],
      hover:['https://images.asos-media.com/products/calvin-klein-icon-cotton-stretch-3-pack-jockstraps-in-black/210085271-3?%24n_640w%24=&fit=constrain&wid=513']
    },
    White:{
      main:[
        'https://bibofashion.nl/14454-large_default/addicted-my-basic-jock-white.jpg',
        'https://www.internationaljock.com/v3/prld.xlg?partno=81514&view=img1&width=498'
      ],
      hover:[
        'https://www.internationaljock.com/v3/prld.xlg?partno=81514&view=img1&width=498',
        'https://bibofashion.nl/14454-large_default/addicted-my-basic-jock-white.jpg'
      ]
    },
    Graphite:{
      main:[
        'https://omtexsports.com/cdn/shop/files/Gym_Grey-4.jpg?v=1765780754',
        'https://jockcentral.shop/images/jockcentral.shop/images/product/nasty-pig-core-jockstrap-3-0-in-charcoal-grey-1.jpg',
        'https://2xist.com/cdn/shop/products/021322_02221_S_4b4516f4-3017-42f6-9a0e-3e270dfcd029_900x.jpg?v=1613152695'
      ],
      hover:[
        'https://jockcentral.shop/images/jockcentral.shop/images/product/nasty-pig-core-jockstrap-3-0-in-charcoal-grey-1.jpg',
        'https://2xist.com/cdn/shop/products/021322_02221_S_4b4516f4-3017-42f6-9a0e-3e270dfcd029_900x.jpg?v=1613152695',
        'https://omtexsports.com/cdn/shop/files/Gym_Grey-4.jpg?v=1765780754'
      ]
    }
  },
  performance:{
    Black:{
      main:[
        'https://img01.ztat.net/article/spp-media-p1/695a5954d4134ae38055bbc379e9d56c/0eb5614f2b2c4e38936c12b804a52524.jpg?imwidth=762',
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BBR-6918M-ONX-DA-SKIMS-MENS_0062-FR.jpg?auto=format&ixlib=react-9.11.0&q=70&v=1729135222&w=6380',
        'https://pvh-brands.imgix.net/catalog/product/media/NB4124_UB1_MO-ST-D2_016.jpg?auto=compress&auto=format&crop=top&fit=crop&h=950&w=713'
      ],
      hover:[
        'https://pvh-brands.imgix.net/catalog/product/media/NB4124_UB1_MO-ST-D2_016.jpg?auto=compress&auto=format&crop=top&fit=crop&h=950&w=713',
        'https://img01.ztat.net/article/spp-media-p1/695a5954d4134ae38055bbc379e9d56c/0eb5614f2b2c4e38936c12b804a52524.jpg?imwidth=762',
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BBR-6918M-ONX-DA-SKIMS-MENS_0062-FR.jpg?auto=format&ixlib=react-9.11.0&q=70&v=1729135222&w=6380'
      ]
    },
    White:{
      main:[
        'https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt40090ad038cc072b/68a4709427cd38d5e81838e1/37741-3.jpg?auto=webp&format=pjpg&quality=75%2C90&width=2048',
        'https://cdn.clothbase.com/uploads/dbb6ab4f-05bd-446f-a7fb-ebfd6528a71d/21-05-2024-gh2_bo-bbr-5635m-ch_6.jpg',
        'https://calvinargentina.vtexassets.com/arquivos/ids/249225/NB3612_549_alternate1_2000x2632_Hi_Res_JPEG.jpg?v=638984821809400000'
      ],
      hover:[
        'https://www.davidjones.com/productimages/magnify/2/2789107_23425283_17324825.jpg',
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BBR-5295M-CHK-SA-SKIMS-MENS_0016-FR.jpg?auto=format&ixlib=react-9.11.0&q=70&v=1755561978',
        'https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt40090ad038cc072b/68a4709427cd38d5e81838e1/37741-3.jpg?auto=webp&format=pjpg&quality=75%2C90&width=2048'
      ]
    },
    Graphite:{
      main:['https://www.mottandbow.com/cdn/shop/products/boxerbrief_gray_6801-_full_body_pdp_1.jpg?v=1642601250&width=2400'],
      hover:['https://www.mottandbow.com/cdn/shop/products/boxerbrief_gray_6801-_full_body_pdp_1.jpg?v=1642601250&width=2400']
    }
  }
};
const productBaseColor=p=>{
  const colors=p?.colors||[];
  // The catalog baseColor is the color tied to the image already shown on the product card.
  // Keep it as the initial selection so the PDP never opens on a different color/photo pair.
  if(p?.baseColor&&colors.includes(p.baseColor))return p.baseColor;
  const name=String(p?.name||'').toLowerCase();
  if(p?.id==='m01')return 'White';
  if(name.includes('white')&&colors.includes('White'))return 'White';
  if(name.includes('graphite')&&colors.includes('Graphite'))return 'Graphite';
  if(name.includes('black')&&colors.includes('Black'))return 'Black';
  return colors.includes('Black')?'Black':colors[0]||'Black';
};
const productPhotoGroup=p=>{
  if(p?.category!=='performance')return p?.category||'boxer-brief';
  const name=String(p?.name||'').toLowerCase();
  if(name.includes('jockstrap'))return 'jockstrap';
  if(name.includes('boxer brief'))return 'boxer-brief';
  if(name.includes('brief'))return 'brief';
  if(name.includes('trunk'))return 'trunk';
  // Performance boxer styles still use a legged boxer silhouette.
  return 'boxer-brief';
};
const colorModelPhotoCandidates=(p,color)=>{
  const group=productPhotoGroup(p);
  // Prefer the curated pool for this exact silhouette and color. This prevents
  // a swatch from borrowing a repeated title image such as Second-Skin Boxer Brief.
  const pool=COLOR_VARIANT_PHOTOS[group]?.[color]||COLOR_VARIANT_PHOTOS[p?.category]?.[color];
  const isModelPhoto=src=>{
    const url=String(src||'');
    if(!url||/(flat.?lay|product.only|packshot|product-shot|accessories_flat)/i.test(url))return false;
    // Do not mix explicitly labelled trunks into the longer boxer-brief silhouette.
    if(group==='boxer-brief'&&/(trunk|trnk|shorelinegryteal)/i.test(url))return false;
    if(group==='brief'&&/(boxer.?brief|BBR-|trunk|jockstrap)/i.test(url))return false;
    if(group==='boxer'&&/(jockstrap|hip.?brief|boxer.?brief|trunk)/i.test(url))return false;
    if(group==='jockstrap'&&/(boxer.?brief|woven.?boxer|trunk)/i.test(url))return false;
    if(group==='trunk'&&/(boxer.?brief|BBR-|jockstrap|woven.?boxer|hip.?brief)/i.test(url))return false;
    return true;
  };
  const unique=arr=>arr.filter((src,i)=>isModelPhoto(src)&&arr.indexOf(src)===i);
  const poolPhotos=unique([...(pool?.main||[]),...(pool?.hover||[])]);
  // For colors without a sufficiently large curated pool, supplement only with
  // catalog photos of the same silhouette whose base image is tagged in that color.
  const sameColorCatalog=P
    .filter(x=>x.id!==p?.id&&productPhotoGroup(x)===group&&productBaseColor(x)===color&&x.image)
    .map(x=>x.image);
  const candidates=poolPhotos.length>=3?poolPhotos:unique([...poolPhotos,...sameColorCatalog]);
  return candidates;
};
const productPhotoRank=(p)=>{
  const group=productPhotoGroup(p);
  const sameGroup=P.filter(x=>productPhotoGroup(x)===group);
  return Math.max(0,sameGroup.findIndex(x=>x.id===p?.id));
};
const colorPhotoSeed=(p,color)=>{
  const colorOrder=['Black','White','Graphite','Sky Blue','Red'].indexOf(color);
  return productPhotoRank(p)+Math.max(0,colorOrder);
};
const pickColorModelPhoto=(p,color,excluded=[],offset=0)=>{
  const candidates=colorModelPhotoCandidates(p,color);
  if(!candidates.length)return '';
  const seed=colorPhotoSeed(p,color)+offset;
  for(let step=0;step<candidates.length;step++){
    const candidate=candidates[(seed+step)%candidates.length];
    if(candidate&&!excluded.includes(candidate))return candidate;
  }
  return '';
};
const modelPhotoForColor=(p,color)=>{
  // A changed swatch gets a model in the requested color, rotating through
  // different source photos by product instead of repeatedly showing one item.
  return pickColorModelPhoto(p,color,[p?.image].filter(Boolean),0)||p?.image||'';
};
const PRODUCT_ONLY_HOVER_PHOTOS={
  Black:[
    '/product-variants/style-1-black.jpg','/product-variants/style-2-black.jpg','/product-variants/style-3-black.jpg','/product-variants/style-4-black.jpg','/product-variants/style-5-black.jpg'
  ],
  White:[
    '/product-variants/style-1-white.jpg','/product-variants/style-2-white.jpg','/product-variants/style-3-white.jpg','/product-variants/style-4-white.jpg','/product-variants/style-5-white.jpg'
  ],
  Graphite:[
    '/product-variants/style-1-graphite.jpg','/product-variants/style-2-graphite.jpg','/product-variants/style-3-graphite.jpg','/product-variants/style-4-graphite.jpg','/product-variants/style-5-graphite.jpg'
  ],
  'Sky Blue':[
    '/product-variants/style-1-sky-blue.jpg','/product-variants/style-2-sky-blue.jpg','/product-variants/style-3-sky-blue.jpg','/product-variants/style-4-sky-blue.jpg','/product-variants/style-5-sky-blue.jpg'
  ],
  Red:[
    '/product-variants/style-1-red.jpg','/product-variants/style-2-red.jpg','/product-variants/style-3-red.jpg','/product-variants/style-4-red.jpg','/product-variants/style-5-red.jpg'
  ]
};
const noModelHover=(p,color)=>{
  const colors=p?.colors||[];
  const chosen=PRODUCT_ONLY_HOVER_PHOTOS[color] ? color : (colors.includes('Black') ? 'Black' : 'White');
  const globalIndex=Math.max(0,P.findIndex(x=>x.id===p.id));
  const styleIndex=Math.floor(globalIndex/5)%5;
  return PRODUCT_ONLY_HOVER_PHOTOS[chosen][styleIndex];
};
const fastImageSources=url=>{
  const u=String(url||'');
  if(!/^https?:\/\//i.test(u))return [u];
  const prox=[`https://wsrv.nl/?url=${encodeURIComponent(u)}&w=900&h=1100&fit=cover&q=88&output=jpg`,`https://images.weserv.nl/?url=${encodeURIComponent(u)}&w=900&q=88&output=jpg`];
  return [...new Set([u,...prox])];
};
const colorPhotoPair=(p,color)=>{
  // The default color must use the exact same source as the product-card image.
  // Other swatches get a color-matched model photo with the same underwear silhouette.
  const baseColor=productBaseColor(p);
  const main=color===baseColor?(p?.image||''):modelPhotoForColor(p,color);
  // Keep the product-card hover behavior unchanged; the product page uses its own model gallery image.
  const hover=noModelHover(p,color);
  return {main,hover};
};
const galleryModelPhotoForColor=(p,color)=>{
  const primary=colorPhotoPair(p,color).main;
  // Keep the initial main image identical to the product tile. The alternate
  // gallery image is a different model/photo of the selected color and silhouette.
  const picked=pickColorModelPhoto(p,color,[primary].filter(Boolean),1)
    || pickColorModelPhoto(p,color,[primary].filter(Boolean),0);
  if(picked)return picked;
  // Some one-off colors (for example red or sky blue) have no curated pool.
  // Reuse that product's original alternate image for its own base color rather
  // than showing the title image twice; other colors never borrow a wrong-color photo.
  const originalAlternate=p?.hoverImage;
  if(color===productBaseColor(p)&&originalAlternate&&originalAlternate!==primary&&!/(flat.?lay|product.only|packshot|product-shot|accessories_flat)/i.test(originalAlternate))return originalAlternate;
  return primary;
};
const colorGalleryPair=(p,color)=>({main:colorPhotoPair(p,color).main,hover:galleryModelPhotoForColor(p,color)});
const colorPhoto=(p,color)=>colorPhotoPair(p,color);
const photoMain=(p,color)=>fastImageSources(colorPhotoPair(p,color).main)[0];
const photoHover=(p,color)=>fastImageSources(colorPhotoPair(p,color).hover)[0];
const colorPhotoStyle=()=>'';
const preloadProductColors=p=>{
  (p.colors||[]).forEach(color=>{
    const pair=colorGalleryPair(p,color);
    [pair.main,pair.hover].forEach(src=>{const u=fastImageSources(src)[0];if(u){const img=new Image();img.decoding='async';img.src=u;}});
  });
};
const CATS = [['all','All products'],['boxer-brief','Boxer briefs'],['brief','Briefs'],['trunk','Trunks'],['boxer','Woven boxers'],['jockstrap','Jockstraps'],['performance','Performance']];
const $ = (q,root=document)=>root.querySelector(q);
const $$ = (q,root=document)=>[...root.querySelectorAll(q)];
const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const money=n=>`$${Number(n).toFixed(2)}`;
const imageProxy=url=>{const u=String(url||'');if(!/^https?:\/\//i.test(u))return u;return `https://wsrv.nl/?url=${encodeURIComponent(u)}&w=900&h=1100&fit=cover&q=88&output=jpg`};
const imageSources=url=>{const u=String(url||'');if(!/^https?:\/\//i.test(u))return [u];const prox=[`https://wsrv.nl/?url=${encodeURIComponent(u)}&w=900&h=1100&fit=cover&q=88&output=jpg`,`https://images.weserv.nl/?url=${encodeURIComponent(u)}&w=900&q=88&output=jpg`,u];return [...new Set(prox)]};
let transientReturnNotice=null;
const productSearchText=p=>[p.name,p.categoryLabel,p.collection,p.description,p.fabric,p.composition,p.idealFor,p.sku,...(p.colors||[]),...(p.sizes||[]),...(p.details||[])].join(' ').toLowerCase();
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const user=()=>load('ub_user',null); const cart=()=>load('ub_cart',[]); const wish=()=>load('ub_wishlist',[]); const orders=()=>load('ub_orders',[]);
const initials=e=>(String(e||'U').split('@')[0].slice(0,2)||'U').toUpperCase();
const digits=v=>String(v||'').replace(/\D/g,'');
const validLuhn=v=>{v=digits(v);if(!/^\d{16}$/.test(v)||v[0]==='0')return false;let s=0,d=false;for(let i=v.length-1;i>=0;i--){let n=+v[i];if(d){n*=2;if(n>9)n-=9}s+=n;d=!d}return s%10===0};
const validPhone=v=>/^(?:\+98|0098|0)?9\d{9}$/.test(String(v).replace(/[\s-]/g,''))||/^\d{10,15}$/.test(digits(v));
const validNational=v=>/^\d{10}$/.test(v)&&!/(\d)\1{9}/.test(v); const validPostal=v=>/^\d{10}$/.test(v);
const showToast=(t,kind='ok')=>{const n=document.createElement('div');n.className='toast '+kind;n.textContent=t;document.body.appendChild(n);setTimeout(()=>n.remove(),2400)};
const go=h=>{location.hash=h.startsWith('#')?h:'#'+h};
const fmtDate=d=>new Date(d).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}); const fmtTime=d=>new Date(d).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
const qParams=()=>new URLSearchParams(location.hash.split('?')[1]||'');
function icon(name){const m={search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.7"/><path d="m16 16 5 5"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M20.8 8.7c0 5.1-8.8 10-8.8 10s-8.8-4.9-8.8-10A4.7 4.7 0 0 1 8 4c1.4 0 2.7.6 4 2 1.3-1.4 2.6-2 4-2a4.7 4.7 0 0 1 4.8 4.7Z"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.2"/><path d="M5.5 19c1.2-4.1 4-5.7 6.5-5.7s5.3 1.6 6.5 5.7"/></svg>',menu:'<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',x:'<svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5 5 19"/></svg>',arrow:'<svg viewBox="0 0 24 24"><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M20 12H5"/><path d="m11 6-6 6 6 6"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 7"/></svg>',truck:'<svg viewBox="0 0 24 24"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.7"/><circle cx="18" cy="18" r="1.7"/></svg>',return:'<svg viewBox="0 0 24 24"><path d="M7 7H3v4"/><path d="M4 11a7 7 0 1 0 2-5"/></svg>',star:'<svg viewBox="0 0 24 24"><path d="m12 3 2.8 5.6 6.2.9-4.5 4.4 1.1 6.1-5.6-2.9-5.6 2.9 1.1-6.1L3 9.5l6.2-.9L12 3Z"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="1.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',minus:'<svg viewBox="0 0 24 24"><path d="M5 12h14"/></svg>',trash:'<svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3m-9 0 1 13h10l1-13"/></svg>',edit:'<svg viewBox="0 0 24 24"><path d="m4 16-.7 4.7L8 20l10-10-4-4L4 16Z"/><path d="m14 6 4 4"/></svg>',package:'<svg viewBox="0 0 24 24"><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="M4 7v10l8 4 8-4V7M12 11v10"/></svg>',help:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.5 2.5 0 1 1 4.7 1.2c-.8 1.1-2.3 1.3-2.3 3"/><path d="M12 17h.01"/></svg>'};return m[name]||''}
function header(){
  const u=user(), c=cart(), w=wish();
  document.querySelector('header')?.remove();
  const h=document.createElement('header');
  h.className='site-header';
  const navLinks=[
    ['Collections','#/collections'],['Shop','#/shop'],['About','#/about'],['Journal','#/journal'],
    ['Orders','#/orders'],['FAQ','#/faq'],['Contact','#/contact'],['Fabric guide','#/fabrics']
  ];
  h.innerHTML=`<div class="promo">FREE SHIPPING ON ORDERS OVER $120 <span>•</span> 30-DAY RETURNS</div>
  <div class="nav">
    <button class="i-btn mobile" id="openMenu" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobileNavDialog">${icon('menu')}</button>
    <a class="brand" href="#/" aria-label="Under Belt home">UNDER BELT<span>.</span></a>
    <nav aria-label="Main navigation">${navLinks.map(([label,path])=>`<a href="${path}" ${location.hash.startsWith(path)?'aria-current="page"':''}>${label}</a>`).join('')}</nav>
    <div class="actions">
      <form id="topSearch" class="top-search" role="search">${icon('search')}<input placeholder="Search" name="q" aria-label="Search products"></form>
      <a class="i-btn" href="#/wishlist" aria-label="Wishlist">${icon('heart')}<b>${w.length}</b></a>
      <a class="i-btn" href="#/account" aria-label="Account">${u?`<span class="avatar">${initials(u.email)}</span>`:icon('user')}</a>
      <a class="i-btn" href="#/cart" aria-label="Shopping bag">${icon('bag')}<b>${c.reduce((s,x)=>s+x.qty,0)}</b></a>
    </div>
  </div>`;
  document.body.prepend(h);
  $('#topSearch').addEventListener('submit',e=>{e.preventDefault();go('/shop?search='+encodeURIComponent(new FormData(e.currentTarget).get('q')||''))});
  $('#openMenu').addEventListener('click',()=>{
    const ov=document.createElement('div');
    ov.className='mobile-overlay';
    ov.id='mobileNavOverlay';
    ov.innerHTML=`<div class="mobile-panel" id="mobileNavDialog" role="dialog" aria-modal="true" aria-label="Site navigation" tabindex="-1">
      <div class="mobile-top"><a class="brand light" href="#/">UNDER BELT<span>.</span></a><button class="i-btn" id="closeMenu" aria-label="Close navigation menu">${icon('x')}</button></div>
      <form id="mobileSearch" class="mobile-search" role="search">${icon('search')}<input placeholder="Search the collection" name="q" aria-label="Search products"></form>
      <div class="mobile-links">${navLinks.map(([label,path])=>`<a href="${path}" ${location.hash.startsWith(path)?'aria-current="page"':''}>${label}${icon('arrow')}</a>`).join('')}<a href="#/fit-guide" ${location.hash.startsWith('#/fit-guide')?'aria-current="page"':''}>Fit guide ${icon('arrow')}</a></div>
      <div class="mobile-bottom">Modern essentials. Thoughtful materials. Built for daily wear.</div>
    </div>`;
    document.body.appendChild(ov);
    const openButton=$('#openMenu');
    const closeMenu=()=>{ov.remove();openButton?.setAttribute('aria-expanded','false');openButton?.focus();document.removeEventListener('keydown',onMenuKey)};
    const onMenuKey=e=>{if(e.key==='Escape')closeMenu()};
    openButton?.setAttribute('aria-expanded','true');
    document.addEventListener('keydown',onMenuKey);
    $('#closeMenu').onclick=closeMenu;
    ov.addEventListener('click',e=>{if(e.target===ov)closeMenu()});
    $('#mobileSearch').onsubmit=e=>{e.preventDefault();go('/shop?search='+encodeURIComponent(new FormData(e.currentTarget).get('q')||''));closeMenu()};
    $$('.mobile-links a',ov).forEach(a=>a.addEventListener('click',()=>{openButton?.setAttribute('aria-expanded','false');document.removeEventListener('keydown',onMenuKey);ov.remove()}));
    $('#mobileNavDialog')?.focus();
  });
}
function footer(){const f=document.createElement('footer');f.className='footer';f.innerHTML=`<div class="footer-main"><div><a class="brand light" href="#/">UNDER BELT<span>.</span></a><p>Premium men's underwear built around comfort, fit and material detail.</p></div><div><h4>Shop</h4><a href="#/shop">All products</a><a href="#/shop/boxer-brief">Boxer briefs</a><a href="#/shop/brief">Briefs</a><a href="#/shop/trunk">Trunks</a><a href="#/shop/boxer">Woven boxers</a><a href="#/shop/jockstrap">Jockstraps</a><a href="#/shop/performance">Performance</a></div><div><h4>Explore</h4><a href="#/fabrics">Fabric guide</a><a href="#/fit-guide">Fit guide</a><a href="#/journal">Journal</a><a href="#/about">About us</a><a href="#/faq">FAQ</a><a href="#/contact">Contact</a></div><div><h4>Account</h4><a href="#/account">My profile</a><a href="#/orders">Orders</a><a href="#/wishlist">Wishlist</a><a href="#/admin">Store admin</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Under belt. Founded by Mehdi Saharkhiz & Alireza Abdollahi.</span><div><a href="#/policies/terms">Terms</a><a href="#/policies/privacy">Privacy</a><a href="#/policies/shipping">Shipping</a><a href="#/policies/returns">Returns</a></div></div>`;document.body.appendChild(f)}
function productCard(p,i=0){
  const w=wish().includes(p.id), baseColor=productBaseColor(p), pair=colorPhotoPair(p,baseColor);
  const primary=imageSources(pair.main)[0], hover=photoHover(p,baseColor);
  const stars=`<span class="rating-stars" aria-label="Rated ${Number(p.rating).toFixed(1)} out of 5">${icon('star')}<b>${Number(p.rating).toFixed(1)}</b></span>`;
  const swatches=(p.colors||[]).slice(0,5).map(c=>`<button type="button" class="mini-swatch ${c.toLowerCase().replace(/\s+/g,'-')}" data-card-color="${esc(p.id)}" data-color-value="${esc(c)}" title="Preview ${esc(c)}" aria-label="Preview ${esc(c)}"></button>`).join('');
  return `<article class="product-card reveal" style="--delay:${Math.min(i,8)*45}ms">
    <div class="product-media" data-product-media="${esc(p.id)}">
      <a class="product-image-link" href="#/product/${esc(p.id)}" aria-label="View ${esc(p.name)}">
        <img class="primary image-guard" src="${esc(primary)}" data-source="${esc(pair.main)}" data-fallback="${esc(pair.main)}" alt="${esc(p.name)} in ${esc(baseColor)}" loading="lazy" decoding="async">
        <img class="hover image-guard hover-ready" src="${esc(hover)}" data-source="${esc(hover)}" data-fallback="${esc(hover)}" alt="Alternate view of ${esc(p.name)} in ${esc(baseColor)}" loading="lazy" decoding="async">
      </a>
      <div class="card-top">${p.discount?`<span class="badge">-${p.discount}%</span>`:(p.id==='m01'?'<span class="badge">Best seller</span>':'')}<button type="button" class="heart-btn ${w?'active':''}" data-wish="${esc(p.id)}" aria-label="${w?'Remove from':'Add to'} wishlist">${icon('heart')}</button></div>
      <button type="button" class="quick-add" data-quick="${esc(p.id)}">Quick view <span>＋</span></button>
    </div>
    <a class="product-details-link" href="#/product/${esc(p.id)}"><div class="product-meta"><div class="card-product-copy"><h3>${esc(p.name)}</h3><span>${esc(p.collection)}</span></div><div class="price">${p.oldPrice?`<del>${money(p.oldPrice)}</del>`:''}<b>${money(p.price)}</b></div></div></a>
    <div class="card-rating">${stars}<span>(${Number(p.reviews)||0})</span></div>
    <div class="card-color-row"><span>${(p.colors||[]).length} colors</span><div class="card-swatches">${swatches}</div></div>
  </article>`;
}
function prepareHoverImages(){ $$('img.hover.image-guard').forEach(img=>{if(img.dataset.preloadBound==='1')return;img.dataset.preloadBound='1';const source=img.dataset.source;const fallback=img.dataset.fallback;const candidates=imageSources(source);const fallbackCandidates=imageSources(fallback);let idx=0,fallbackTried=false;const tryNext=()=>{if(idx<candidates.length){img.src=candidates[idx++];return}const safeFallback=fallbackCandidates.find(url=>!candidates.includes(url));if(!fallbackTried&&safeFallback){fallbackTried=true;img.src=safeFallback;return}img.removeAttribute('src')};img.addEventListener('load',()=>{img.classList.add('loaded');img.closest('.product-media')?.classList.add('hover-available')});img.addEventListener('error',()=>{img.classList.remove('loaded');img.closest('.product-media')?.classList.remove('hover-available');tryNext()});tryNext();});}

function bindWish(){ $$('[data-wish]').forEach(b=>{if(b.dataset.wishBound==='1')return;b.dataset.wishBound='1';b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();let w=wish(),id=b.dataset.wish;w=w.includes(id)?w.filter(x=>x!==id):[...w,id];save('ub_wishlist',w);const active=w.includes(id);$$('[data-wish]').filter(btn=>btn.dataset.wish===id).forEach(btn=>{btn.classList.toggle('active',active);btn.setAttribute('aria-label',active?'Remove from wishlist':'Add to wishlist')});header();showToast(active?'Saved to wishlist':'Removed from wishlist')})})}
function openQuickView(id,initialColor){
  const p=P.find(x=>x.id===id);if(!p)return;
  document.querySelector('.quickview-backdrop')?.remove();
  let color=(p.colors||[]).includes(initialColor)?initialColor:productBaseColor(p);
  let size=null;
  const pair=colorGalleryPair(p,color), main=imageSources(pair.main)[0], alternate=imageSources(pair.hover)[0];
  const ov=document.createElement('div');ov.className='quickview-backdrop';ov.setAttribute('role','presentation');
  ov.innerHTML=`<section class="quickview-dialog" role="dialog" aria-modal="true" aria-labelledby="qvTitle" tabindex="-1">
    <button type="button" class="quickview-close" data-qv-close aria-label="Close quick view">${icon('x')}</button>
    <div class="quickview-layout"><div class="quickview-visual"><div class="quickview-main-photo"><img class="image-guard" id="qvPhoto" src="${esc(main)}" data-fallback="${esc(pair.main)}" alt="${esc(p.name)} in ${esc(color)}"></div><div class="quickview-alt-photo"><img class="image-guard" id="qvAltPhoto" src="${esc(alternate)}" data-fallback="${esc(pair.hover)}" alt="Alternate model view of ${esc(p.name)} in ${esc(color)}"></div></div>
    <div class="quickview-copy"><p class="eyebrow">${esc(p.collection)} / ${esc(p.sku)}</p><h2 id="qvTitle">${esc(p.name)}</h2><div class="quickview-rating">${icon('star')} <b>${Number(p.rating).toFixed(1)}</b><span>(${Number(p.reviews)||0} reviews)</span></div><strong class="quickview-price">${money(p.price)}</strong><p class="quickview-description">${esc(p.description)}</p>
    <div class="option qv-option"><div><b>Color</b><span id="qvColorLabel">${esc(color)}</span></div><div class="swatches">${(p.colors||[]).map(c=>`<button type="button" class="swatch ${c.toLowerCase().replace(/\s+/g,'-')} ${c===color?'selected':''}" data-qv-color="${esc(c)}" title="${esc(c)}" aria-label="${esc(c)}"></button>`).join('')}</div></div>
    <div class="option qv-option"><div><b>Size</b><span class="qv-size-note">Select your size</span></div><div class="sizes">${(p.sizes||[]).map(z=>`<button type="button" class="size" data-qv-size="${esc(z)}">${esc(z)}</button>`).join('')}</div></div>
    <div class="qv-actions"><button type="button" class="btn dark full" data-qv-add disabled aria-disabled="true">Choose a size</button><a class="text-link" href="#/product/${esc(p.id)}" data-qv-full>View full product details ${icon('arrow')}</a></div><p class="qv-stock">${p.stock>0?'In stock':'Currently unavailable'} <span>·</span> ${esc(p.categoryLabel)}</p></div></div></section>`;
  document.body.appendChild(ov);bindImageGuards();ov.querySelector('.quickview-dialog')?.focus();
  const updateColor=next=>{if(!(p.colors||[]).includes(next))return;color=next;const nextPair=colorGalleryPair(p,color);const a=ov.querySelector('#qvPhoto'),b=ov.querySelector('#qvAltPhoto');ov.querySelector('#qvColorLabel').textContent=color;ov.querySelectorAll('[data-qv-color]').forEach(btn=>btn.classList.toggle('selected',btn.dataset.qvColor===color));[[a,nextPair.main],[b,nextPair.hover]].forEach(([img,src])=>{if(!img)return;img.dataset.errorStage='0';img.dataset.fallback=src;img.src=imageSources(src)[0];img.alt=`${p.name} in ${color}`});bindImageGuards()};
  ov.querySelectorAll('[data-qv-color]').forEach(btn=>btn.addEventListener('click',()=>updateColor(btn.dataset.qvColor)));
  const qvAdd=ov.querySelector('[data-qv-add]');if(Number(p.stock)<=0&&qvAdd){qvAdd.textContent='Out of stock';qvAdd.setAttribute('aria-label','Out of stock')}ov.querySelectorAll('[data-qv-size]').forEach(btn=>btn.addEventListener('click',()=>{size=btn.dataset.qvSize;ov.querySelectorAll('[data-qv-size]').forEach(x=>x.classList.toggle('selected',x===btn));if(qvAdd&&Number(p.stock)>0){qvAdd.disabled=false;qvAdd.setAttribute('aria-disabled','false');qvAdd.innerHTML=`Add to bag — ${money(p.price)} ${icon('bag')}`}}));
  const onKey=e=>{if(e.key==='Escape'&&document.body.contains(ov))close()};const close=()=>{ov.remove();document.removeEventListener('keydown',onKey)};ov.querySelectorAll('[data-qv-close]').forEach(btn=>btn.addEventListener('click',close));ov.addEventListener('click',e=>{if(e.target===ov)close()});ov.querySelector('[data-qv-full]')?.addEventListener('click',close);
  ov.querySelector('[data-qv-add]')?.addEventListener('click',()=>{if(Number(p.stock)<=0){showToast('This item is currently unavailable');return}if(!size){showToast('Please select your size first');return}let c=cart();const key=`${p.id}-${size}-${color}`,hit=c.find(x=>x.key===key);if(hit)hit.qty++;else c.push({key,product:p,size,color,qty:1});save('ub_cart',c);close();header();showToast(`${p.name} · ${color} / ${size} added to bag`)});
  document.addEventListener('keydown',onKey);
}
function bindQuickAdd(){ $$('[data-quick]').forEach(b=>{if(b.dataset.quickBound==='1')return;b.dataset.quickBound='1';b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();openQuickView(b.dataset.quick)})});$$('[data-card-color]').forEach(b=>{if(b.dataset.cardColorBound==='1')return;b.dataset.cardColorBound='1';b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();openQuickView(b.dataset.cardColor,b.dataset.colorValue)})})}
function productGrid(items){return `<div class="product-grid">${items.map(productCard).join('')}</div>`}
function home(){return `<section class="hero"><div class="hero-copy reveal"><p class="eyebrow">UNDER BELT / NEW STANDARD</p><h1>Underwear, <em>considered.</em></h1><p class="hero-lead">Modern silhouettes, premium materials and the small details that make everyday wear feel noticeably better.</p><div class="hero-actions"><a class="btn dark" href="#/shop">Shop all 50 ${icon('arrow')}</a><a class="text-link" href="#/fabrics">Explore fabrics ${icon('arrow')}</a></div></div><div class="hero-media"><img src="${P[0].image}" alt="Under belt essential boxer brief"><div class="hero-card"><span>01</span><strong>${esc(P[0].name)}</strong><small>${esc(P[0].collection)} / everyday support</small></div></div></section><section class="statement"><div><p class="eyebrow light-eyebrow">THE BRAND</p><h2>Built for the hours between plans.</h2></div><p>Under belt is a new premium underwear company focused on making men's essentials more refined - from fabric choice and support to the way every product is explained and delivered.</p></section><section class="section"><div class="section-head"><div><p class="eyebrow">CURATED / 01</p><h2>Shop the edit</h2></div><a class="text-link" href="#/shop">Show all 50 ${icon('arrow')}</a></div>${productGrid(P.slice(0,10))}</section><section class="category-band"><div class="section-inner"><p class="eyebrow">SHOP BY FIT</p><h2>Find your everyday fit.</h2><div class="category-grid">${CATS.slice(1).map(([k,l],i)=>{const sample=P.find(p=>p.category===k)||P[i];return `<a class="category-card" href="#/shop/${k}"><img src="${esc(imageSources(sample.image)[0])}" alt="" loading="lazy"><div class="category-card-content"><span>0${i+1} / ${P.filter(p=>p.category===k).length} STYLES</span><strong>${l}</strong><small>Explore the fit</small></div>${icon('arrow')}</a>`}).join('')}</div></div></section><section class="split-feature section"><div class="feature-image"><img src="${P[28].hoverImage}" alt="Under belt fabric detail"></div><div class="feature-copy"><p class="eyebrow">MATERIAL FIRST</p><h2>Know what's next to your skin.</h2><p>Every product page breaks down the fabric, composition, breathability, moisture handling, stretch, fit and care - so you can buy the right pair for the right day.</p><a class="btn dark" href="#/fabrics">Open fabric guide ${icon('arrow')}</a></div></section><section class="section"><div class="section-head"><div><p class="eyebrow">JOURNAL</p><h2>Guides for better basics.</h2></div><a class="text-link" href="#/journal">Read all articles ${icon('arrow')}</a></div><div class="article-grid">${A.slice(0,4).map(articleCard).join('')}</div></section><section class="trust-strip"><div>${icon('check')}<strong>Quality details</strong><span>Material + care transparency</span></div><div>${icon('truck')}<strong>Clear delivery</strong><span>Delivery details shown before checkout</span></div><div>${icon('return')}<strong>30-day returns</strong><span>Simple return request flow</span></div><div>${icon('check')}<strong>Clear checkout</strong><span>Order costs shown before confirmation</span></div></section>`}
function articleCard(a,i=0){return `<a class="article-card reveal" href="#/journal/${a.slug}"><div class="article-image"><img src="${P[i%P.length].hoverImage}" alt="" loading="lazy"></div><div class="article-copy"><span>${esc(a.tag)}</span><h3>${esc(a.title)}</h3><p>${esc(a.summary)}</p><b>Read guide ${icon('arrow')}</b></div></a>`}
function collectionsPage(){
  const names=[...new Set(P.map(p=>p.collection).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
  return `<main class="page collections-page">
    <div class="page-head"><p class="eyebrow">UNDER BELT / COLLECTIONS</p><h1>Find your everyday standard.</h1><p>Explore each edit by fabric, feel and purpose. Open a collection to see the pieces that belong to it.</p></div>
    <div class="collection-directory">${names.map((name,i)=>{
      const items=P.filter(p=>p.collection===name), sample=items[0];
      return `<a class="category-card collection-card" href="#/shop?collection=${encodeURIComponent(name)}" aria-label="Explore ${esc(name)} collection">
        <img src="${esc(imageSources(sample.image)[0])}" alt="${esc(name)} collection" loading="lazy" decoding="async">
        <div class="category-card-content"><span>${String(i+1).padStart(2,'0')} / ${items.length} ${items.length===1?'STYLE':'STYLES'}</span><strong>${esc(name)}</strong><small>Explore collection</small></div>${icon('arrow')}
      </a>`;
    }).join('')}</div>
    <div class="collections-footer-link"><p>Not sure which fabric is right for you?</p><a class="text-link" href="#/fabrics">Read the fabric guide ${icon('arrow')}</a><a class="text-link" href="#/fit-guide">Find your fit ${icon('arrow')}</a></div>
  </main>`;
}

function shop(){
  const parts=location.hash.replace(/^#\/?shop\/?/,'').split('?');
  const cat=parts[0]||'all', q=qParams().get('search')||'';
  let items=(cat==='all'||!CATS.some(c=>c[0]===cat)?P:P.filter(p=>p.category===cat)).slice();
  const fabric=qParams().get('fabric')||'all';
  const collectionParam=qParams().get('collection')||'all';
  if(q)items=items.filter(p=>productSearchText(p).includes(q.toLowerCase()));
  if(fabric!=='all')items=items.filter(p=>{const fb=p.fabric.toLowerCase(),f=fabric.toLowerCase();return fb.includes(f)||(f==='performance'&&fb.includes('moisture'))});
  if(collectionParam!=='all')items=items.filter(p=>p.collection===collectionParam);
  const collections=[...new Set(P.map(p=>p.collection))].sort();
  return `<section class="shop-head"><div><p class="eyebrow">SHOP / ${cat==='all'?'ALL PRODUCTS':esc((CATS.find(c=>c[0]===cat)||['','PRODUCTS'])[1])}</p><h1>${cat==='all'?'All 50 products':esc((CATS.find(c=>c[0]===cat)||['','Products'])[1])}</h1><p>Find your fit by silhouette, material, color and collection. Product details are available before you add anything to your bag.</p></div><div class="shop-tools"><button class="filter-btn" id="filterToggle" aria-controls="filters" aria-expanded="false">☷ Filters</button><select id="sort" aria-label="Sort products"><option value="featured">Sort: Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="rating">Top rated</option><option value="reviews">Most reviewed</option></select></div></section>
  <div class="filter-panel" id="filters"><label>Search<input id="filterSearch" value="${esc(q)}" placeholder="Name, fabric or SKU"></label><label>Fabric<select id="fFabric"><option value="all">All fabrics</option>${[['cotton','Cotton'],['modal','Modal'],['performance','Performance'],['mesh','Mesh'],['woven','Woven']].map(([v,l])=>`<option value="${v}" ${v===fabric.toLowerCase()?'selected':''}>${l}</option>`).join('')}</select></label><label>Collection<select id="fCollection"><option value="all">All collections</option>${collections.map(c=>`<option value="${esc(c)}" ${c===collectionParam?'selected':''}>${esc(c)}</option>`).join('')}</select></label><label>Size<select id="fSize"><option value="all">All sizes</option>${['S','M','L','XL','XXL'].map(z=>`<option>${z}</option>`).join('')}</select></label><label>Color<select id="fColor"><option value="all">All colors</option>${['Black','White','Graphite','Sky Blue','Red'].map(z=>`<option>${z}</option>`).join('')}</select></label><label>Availability<select id="fStock"><option value="all">All items</option><option value="in-stock">In stock</option></select></label><label>Max price <span id="priceValue">$80</span><input id="fPrice" type="range" min="19" max="80" value="80"></label><button type="button" class="filter-reset" id="resetFilters">Reset filters</button></div>
  <div class="shop-sub"><div class="chips">${CATS.map(([k,l])=>`<a class="chip ${k===cat?'active':''}" href="#/shop${k==='all'?'':`/${k}`}" ${k===cat?'aria-current="page"':''}>${l}</a>`).join('')}</div><span id="resultCount">${items.length} styles</span></div><div id="shopGrid">${productGrid(items)}</div>`;
}
function applyShopFilters(){const cat=(location.hash.replace(/^#\/shop\/?/,'').split('?')[0]||'all');let items=cat==='all'||!CATS.some(c=>c[0]===cat)?P.slice():P.filter(p=>p.category===cat);const s=$('#filterSearch')?.value.trim().toLowerCase()||'',f=$('#fFabric')?.value||'all',col=$('#fCollection')?.value||'all',sz=$('#fSize')?.value||'all',co=$('#fColor')?.value||'all',stock=$('#fStock')?.value||'all',mx=Number($('#fPrice')?.value||80);if(s)items=items.filter(p=>productSearchText(p).includes(s));if(f!=='all')items=items.filter(p=>{const fb=p.fabric.toLowerCase();return fb.includes(f)||(f==='performance'&&fb.includes('moisture'))});if(col!=='all')items=items.filter(p=>p.collection===col);if(sz!=='all')items=items.filter(p=>p.sizes.includes(sz));if(co!=='all')items=items.filter(p=>p.colors.includes(co));if(stock==='in-stock')items=items.filter(p=>Number(p.stock)>0);items=items.filter(p=>p.price<=mx);const sort=$('#sort')?.value||'featured';if(sort==='price-low')items.sort((a,b)=>a.price-b.price);if(sort==='price-high')items.sort((a,b)=>b.price-a.price);if(sort==='rating')items.sort((a,b)=>b.rating-a.rating);if(sort==='reviews')items.sort((a,b)=>(b.reviews||0)-(a.reviews||0));const grid=$('#shopGrid');if(!grid)return;grid.innerHTML=items.length?productGrid(items):empty('No products found','Try another search term or reset a filter to see more of the 50-style collection.','#/shop','Reset shop');$('#resultCount').textContent=items.length+' styles';$('#priceValue').textContent=money(mx);bindWish();bindQuickAdd();bindImageGuards();bindReveal()}

function productPage(id){const p=P.find(x=>x.id===id);if(!p)return notFound();let size='M',color=productBaseColor(p);const photo=colorPhoto(p,color),galleryPair=colorGalleryPair(p,color),mainPhoto=fastImageSources(galleryPair.main)[0],hoverPhoto=fastImageSources(galleryPair.hover)[0],style=colorPhotoStyle(p,color);return `<div class="crumbs"><a href="#/shop">Shop</a><span>/</span><span>${esc(p.categoryLabel)}</span><span>/</span><b>${esc(p.name)}</b></div><section class="product-page"><div class="product-gallery"><div class="gallery-main"><img class="image-guard color-variant-photo" src="${esc(mainPhoto)}" style="${style}" data-color-photo="main" loading="eager" fetchpriority="high" data-fallback="${esc(galleryPair.main)}" alt="${esc(p.name)} - ${esc(color)}"></div><div class="gallery-hover"><img class="image-guard color-variant-photo" src="${esc(hoverPhoto)}" style="${style}" data-color-photo="hover" loading="eager" fetchpriority="high" data-fallback="${esc(galleryPair.hover)}" alt="Alternate model view of ${esc(p.name)} in ${esc(color)}"><span>Alternate model / selected color</span></div></div><div class="product-info"><p class="eyebrow">${esc(p.collection)} / ${p.sku}</p><h1>${esc(p.name)}</h1><div class="rating">${icon('star')}<b>${p.rating}</b><span>${p.reviews} reviews</span></div><div class="price-lg">${p.oldPrice?`<del>${money(p.oldPrice)}</del>`:''}<strong>${money(p.price)}</strong></div><p class="product-desc">${esc(p.description)}</p><div class="option"><div><b>Color</b><span id="chosenColor">${esc(color)}</span></div><div class="swatches">${p.colors.map(c=>`<button type="button" class="swatch ${c.toLowerCase().replace(/\s+/g,'-')} ${c===color?'selected':''}" data-color="${esc(c)}" aria-label="Select ${esc(c)} color" title="${esc(c)}"></button>`).join('')}</div><button type="button" class="text-link compare-colors-trigger" id="compareColors">Compare colors ${icon('arrow')}</button></div><div class="option"><div><b>Size</b><a href="#/fit-guide">Size guide</a></div><div class="sizes">${p.sizes.map(s=>`<button class="size ${s===size?'selected':''}" data-size="${s}">${s}</button>`).join('')}</div></div><div class="purchase"><div class="qty"><button id="minus">${icon('minus')}</button><span id="qty">1</span><button id="plus">${icon('plus')}</button></div><button class="btn dark grow" id="addCart">Add to cart - ${money(p.price)} ${icon('bag')}</button></div><div class="micro-trust"><span>${icon('truck')} Estimated delivery: 3–5 business days</span><span>${icon('return')} 30-day returns</span><span>${icon('check')} ${p.stock>0?'In stock':'Availability on request'}</span></div><div class="pdp-promise"><div><b>Fit first</b><span>Check the size guide before you choose.</span></div><div><b>Know your fabric</b><span>Composition, care and material feel are below.</span></div><div><b>Easy comparison</b><span>Switch colors before adding to your bag.</span></div></div><div class="tabs"><button class="active" data-tab="details">Details</button><button data-tab="fabric">Fabric & feel</button><button data-tab="care">Care</button></div><div class="tab-content" id="tabContent"></div></div></section><section class="section related"><div class="section-head"><div><p class="eyebrow">YOU MAY ALSO LIKE</p><h2>More from the edit</h2></div><a class="text-link" href="#/shop/${p.category}">Shop this silhouette ${icon('arrow')}</a></div>${productGrid(P.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,4))}</section>`}

function setupProduct(id){const p=P.find(x=>x.id===id);if(!p)return;let size='M',color=productBaseColor(p),qty=1;preloadProductColors(p);const content=tab=>{if(tab==='details')return `<ul>${p.details.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;if(tab==='care')return `<ul>${p.care.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;return `<div class="metric-list"><div><span>Fabric</span><b>${esc(p.fabric)}</b></div><div><span>Composition</span><b>${esc(p.composition)}</b></div><div><span>Breathability</span><b>${p.breathability}/5</b></div><div><span>Moisture handling</span><b>${p.moisture}/5</b></div><div><span>Stretch</span><b>${p.stretch}/5</b></div><p class="note">Best for: ${esc(p.idealFor)}. Comfort varies by person; change after heavy sweating.</p></div>`};$('#tabContent').innerHTML=content('details');$$('[data-tab]').forEach(b=>b.onclick=()=>{$$('[data-tab]').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('#tabContent').innerHTML=content(b.dataset.tab)});
const compareButton=$('#compareColors');
if(compareButton)compareButton.onclick=()=>{
  document.querySelector('.color-compare-backdrop')?.remove();
  const overlay=document.createElement('div');overlay.className='color-compare-backdrop';overlay.innerHTML=`<section class="color-compare-dialog" role="dialog" aria-modal="true" aria-labelledby="colorCompareTitle" tabindex="-1"><div class="color-compare-head"><div><p class="eyebrow">COLOR OPTIONS</p><h2 id="colorCompareTitle">Compare colors.</h2><p>Choose a color to update this product's gallery.</p></div><button type="button" class="color-compare-close" aria-label="Close color comparison" data-compare-close>×</button></div><div class="color-compare-grid">${p.colors.map(c=>{const pair=colorGalleryPair(p,c),src=fastImageSources(pair.main)[0];return `<article class="color-compare-card ${c===color?'is-selected':''}"><img class="image-guard" src="${esc(src)}" data-fallback="${esc(pair.main)}" alt="${esc(p.name)} in ${esc(c)}" loading="lazy" decoding="async"><div><b>${esc(c)}</b><button type="button" class="btn ${c===color?'dark':'outline'} full" data-compare-select="${esc(c)}">${c===color?'Selected':'Select color'}</button></div></article>`}).join('')}</div></section>`;
  document.body.appendChild(overlay);bindImageGuards();const dialog=overlay.querySelector('.color-compare-dialog');dialog?.focus();
  const closeCompare=()=>{overlay.remove();compareButton.focus();document.removeEventListener('keydown',closeOnEscape)};
  const closeOnEscape=e=>{if(e.key==='Escape')closeCompare()};document.addEventListener('keydown',closeOnEscape);
  overlay.querySelector('[data-compare-close]').onclick=closeCompare;overlay.addEventListener('click',e=>{if(e.target===overlay)closeCompare()});
  overlay.querySelectorAll('[data-compare-select]').forEach(btn=>btn.onclick=()=>{const swatch=[...document.querySelectorAll('[data-color]')].find(x=>x.dataset.color===btn.dataset.compareSelect);swatch?.click();overlay.remove();document.removeEventListener('keydown',closeOnEscape);compareButton.focus()});
};
$$('[data-size]').forEach(b=>b.onclick=()=>{$$('[data-size]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');size=b.dataset.size});$$('[data-color]').forEach(b=>b.onclick=()=>{$$('[data-color]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');color=b.dataset.color;$('#chosenColor').textContent=color;const pair=colorGalleryPair(p,color),srcMain=fastImageSources(pair.main)[0],srcHover=fastImageSources(pair.hover)[0],style=colorPhotoStyle(p,color);$$('[data-color-photo="main"]').forEach(img=>{img.dataset.errorStage='0';img.src=srcMain;img.dataset.fallback=pair.main;img.style.cssText=style;img.alt=`${p.name} - ${color}`});$$('[data-color-photo="hover"]').forEach(img=>{img.dataset.errorStage='0';img.src=srcHover;img.dataset.fallback=pair.hover;img.style.cssText=style;img.alt=`${p.name} - ${color} alternate view`;img.decode?.().catch(()=>{})})});$('#minus').onclick=()=>{qty=Math.max(1,qty-1);$('#qty').textContent=qty;$('#addCart').innerHTML=`Add to cart - ${money(p.price*qty)} ${icon('bag')}`};$('#plus').onclick=()=>{qty++;$('#qty').textContent=qty;$('#addCart').innerHTML=`Add to cart - ${money(p.price*qty)} ${icon('bag')}`};$('#addCart').onclick=()=>{if(Number(p.stock)<=0){showToast('This item is currently unavailable','error');return}let c=cart();const key=`${p.id}-${size}-${color}`;const hit=c.find(x=>x.key===key);if(hit)hit.qty+=qty;else c.push({key,product:p,size,color,qty});save('ub_cart',c);header();showToast('Added to bag')};bindWish();bindQuickAdd();bindImageGuards()}

function cartPage(){const c=cart(),sub=c.reduce((s,x)=>s+x.product.price*x.qty,0);return `<main class="page"><div class="page-head"><p class="eyebrow">CART</p><h1>Your bag</h1></div>${!c.length?empty('Your bag is empty','Start with the 50-style collection and build your everyday rotation.','#/shop','Shop the collection'): `<div class="shipping-progress"><p>${sub>=120?'<b>You unlocked free shipping.</b> Your order is ready for the next step.':`You are <b>${money(120-sub)} away</b> from free shipping.`}</p><div class="shipping-progress-track"><span style="width:${Math.min(100,Math.round(sub/120*100))}%"></span></div></div><div class="cart-layout"><div class="cart-list">${c.map(x=>`<div class="cart-item"><a class="cart-img" href="#/product/${x.product.id}"><img src="${x.product.image}" alt=""></a><div class="cart-copy"><a href="#/product/${x.product.id}"><h3>${esc(x.product.name)}</h3></a><span>${x.color} / ${x.size}</span><small>SKU ${x.product.sku}</small><div class="cart-controls"><div class="qty"><button data-dec="${x.key}">${icon('minus')}</button><span>${x.qty}</span><button data-inc="${x.key}">${icon('plus')}</button></div><button class="remove" data-remove="${x.key}">${icon('trash')}Remove</button></div></div><strong>${money(x.product.price*x.qty)}</strong></div>`).join('')}</div><aside class="summary"><p class="eyebrow">ORDER SUMMARY</p><div><span>Subtotal</span><b>${money(sub)}</b></div><div><span>Shipping</span><b>${sub>=120?'Free':money(9)}</b></div><div class="summary-total"><span>Total</span><strong>${money(sub+(sub>=120?0:9))}</strong></div><a class="btn dark full" href="#/checkout">Continue to checkout ${icon('arrow')}</a><p class="summary-note">Secure demo checkout with browser-side validation.</p></aside></div>`}</main>`}
function setupCart(){const update=(key,d)=>{let c=cart();c=c.map(x=>x.key===key?{...x,qty:Math.max(1,x.qty+d)}:x);save('ub_cart',c);render()};$$('[data-dec]').forEach(b=>b.onclick=()=>update(b.dataset.dec,-1));$$('[data-inc]').forEach(b=>b.onclick=()=>update(b.dataset.inc,1));$$('[data-remove]').forEach(b=>b.onclick=()=>{save('ub_cart',cart().filter(x=>x.key!==b.dataset.remove));render()})}
function field(label,name,value='',opts={}){return `<label class="field ${opts.wide?'wide':''}"><span>${label}</span><input ${opts.type?`type="${opts.type}"`:''} name="${name}" value="${esc(value)}" ${opts.numeric?'inputmode="numeric" data-numeric="'+(opts.max||15)+'"':''} ${opts.required!==false?'required':''}>${opts.error?`<small>${esc(opts.error)}</small>`:''}</label>`}
function checkout(){const u=user()||{};const c=cart();if(!c.length){go('/cart');return ''}const sub=c.reduce((s,x)=>s+x.product.price*x.qty,0);return `<main class="page"><div class="page-head"><p class="eyebrow">CHECKOUT</p><h1>Secure your order.</h1><p>All numeric fields are limited as requested. Invalid formats block the demo order.</p></div><form id="checkoutForm" class="checkout-grid"><section class="checkout-card"><div class="card-head"><span>01</span><div><h2>Contact & delivery</h2><p>These details are saved to your account after a successful review.</p></div></div><div class="form-grid">${field('Full name','name',u.name)}${field('Email','email',u.email,{type:'email'})}${field('Phone','phone',u.phone,{numeric:true,max:15})}${field('City','city',u.city||'Tehran')}${field('National ID','nationalId',u.nationalId,{numeric:true,max:10})}${field('Postal code','postalCode',u.postalCode,{numeric:true,max:10})}${field('Address','address',u.address,{wide:true})}<div class="notice">${icon('check')}<span>Account profile can be edited later from My Account.</span></div></div></section><section class="checkout-card"><div class="card-head"><span>02</span><div><h2>Payment</h2><p>Front-end demo validation. No real transaction is sent.</p></div></div><div class="payment-icon">${icon('bag')}<span>Card payment</span>${icon('lock')}</div><div class="form-grid">${field('Card number','card','',{numeric:true,max:16,wide:true})}${field('Expiry month','month','',{numeric:true,max:2})}${field('Expiry year','year','',{numeric:true,max:2})}${field('CVV2','cvv','',{numeric:true,max:3})}<div class="validation-row"><span>16 digits</span><span>No leading zero</span><span>Luhn check</span><span>CVV2: 3 digits</span></div></div></section><aside class="summary checkout-summary"><p class="eyebrow">REVIEW</p>${c.slice(0,5).map(x=>`<div class="mini-line"><span>${esc(x.product.name)} × ${x.qty}</span><b>${money(x.product.price*x.qty)}</b></div>`).join('')}${c.length>5?`<small>+ ${c.length-5} more line items</small>`:''}<div class="summary-total"><span>Subtotal</span><strong>${money(sub)}</strong></div><div><span>Shipping</span><b>${sub>=120?'Free':money(9)}</b></div><button class="btn dark full" type="submit">Review payment ${icon('arrow')}</button><p class="summary-note">By placing the demo order, you agree to Terms and Returns.</p></aside></form></main>`}
function setupCheckout(){const form=$('#checkoutForm');if(!form)return;$$('[data-numeric]',form).forEach(i=>{i.addEventListener('keydown',e=>{if(e.ctrlKey||e.metaKey||e.altKey||['Backspace','Delete','ArrowLeft','ArrowRight','Tab','Enter','Home','End'].includes(e.key))return;if(!/^\d$/.test(e.key))e.preventDefault()});i.addEventListener('input',()=>i.value=digits(i.value).slice(0,Number(i.dataset.numeric))) });form.onsubmit=e=>{e.preventDefault();const fd=new FormData(form), d=Object.fromEntries(fd.entries()), er=[];if(!d.name.trim())er.push('Full name');if(!d.email.includes('@'))er.push('Email');if(!validPhone(d.phone))er.push('Phone');if(!validNational(d.nationalId))er.push('National ID must be 10 digits');if(!d.address.trim())er.push('Address');if(!validPostal(d.postalCode))er.push('Postal code must be 10 digits');if(!validLuhn(d.card))er.push('Card must be 16 digits, not start with 0, and pass the Luhn check');if(!/^\d{2}$/.test(d.month)||+d.month<1||+d.month>12)er.push('Expiry month');const nowD=new Date(),yy=nowD.getFullYear()%100;if(!/^\d{2}$/.test(d.year)||+d.year<yy||+d.year>yy+15)er.push('Expiry year');else if(/^\d{2}$/.test(d.month)&&+d.year===yy&&+d.month<nowD.getMonth()+1)er.push('Card has expired');if(!/^\d{3}$/.test(d.cvv))er.push('CVV2 must be exactly 3 digits');if(er.length){showToast(er.join(' • '),'error');return}save('ub_user',{name:d.name,email:d.email,phone:d.phone,nationalId:d.nationalId,city:d.city,address:d.address,postalCode:d.postalCode,favoriteNumber:(user()?.favoriteNumber||'')});const sub=cart().reduce((s,x)=>s+x.product.price*x.qty,0),ship=sub>=120?0:9,at=new Date(),eta=new Date(at);eta.setDate(eta.getDate()+5);const o={id:`UB-${at.getFullYear()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`,orderedAt:at.toISOString(),eta:eta.toISOString(),items:cart().map(x=>({productId:x.product.id,name:x.product.name,qty:x.qty,size:x.size,color:x.color,price:x.product.price,image:x.product.image,sku:x.product.sku})),subtotal:sub,shipping:ship,total:sub+ship,status:'Confirmed',profile:{name:d.name,email:d.email,phone:d.phone,nationalId:d.nationalId,city:d.city,address:d.address,postalCode:d.postalCode},paymentLast4:digits(d.card).slice(-4)};const os=orders();os.unshift(o);save('ub_orders',os);save('ub_last_order',o);save('ub_cart',[]);go('/success')};}
function success(){const o=load('ub_last_order',null);if(!o)return empty('No recent order','Start shopping to create an order.','#/shop','Shop now');return `<main class="page success"><div class="success-mark">${icon('check')}</div><p class="eyebrow">PAYMENT REVIEWED</p><h1>Purchase successful.</h1><p class="success-text">Your demo payment was reviewed successfully. The order is now saved in Orders.</p><div class="success-card"><span>Order number</span><strong>${o.id}</strong><div><span>Delivery</span><b>${fmtDate(o.eta)}</b></div><div><span>Total</span><b>${money(o.total)}</b></div></div><div class="success-actions"><a class="btn dark" href="#/orders">Go to dashboard & orders ${icon('arrow')}</a><a class="text-link" href="#/shop">Continue shopping ${icon('arrow')}</a></div></main>`}
function account(){const u=user();if(!u)return `<main class="auth-page"><div class="auth-intro"><p class="eyebrow">UNDER BELT / ACCOUNT</p><h1>Welcome to your account.</h1><p>Sign in to view orders, saved products and your profile. New customers can register in one step.</p><div class="auth-points"><span>${icon('check')} Order history</span><span>${icon('check')} Profile details</span><span>${icon('check')} Wishlist</span></div></div><div class="auth-card"><div class="auth-tabs"><button class="active" data-auth="login">Sign in</button><button data-auth="register">Register</button></div><form id="authForm">${field('Full name','name','',{required:false})}${field('Email','email','',{type:'email'})}${field('Password','password','',{type:'password'})}<div id="favoriteField" class="hidden">${field('Favorite number','favoriteNumber','',{numeric:true,max:4,required:false})}</div><button class="btn dark full" type="submit" id="authSubmit">Sign in ${icon('arrow')}</button><p class="auth-note">Your demo profile lives in this browser only.</p></form></div></main>`;const complete=u.name&&validPhone(u.phone)&&validNational(u.nationalId)&&u.city&&u.address&&validPostal(u.postalCode);return `<main class="page"><div class="account-hero"><div class="big-avatar">${initials(u.email)}</div><div><p class="eyebrow">MY ACCOUNT</p><h1>${esc(u.name||u.email)}</h1><p>${esc(u.email)}</p></div><div class="account-actions"><button class="btn outline" id="editProfile">${icon('edit')} Edit profile</button><a class="btn dark" href="#/orders">View orders ${icon('arrow')}</a></div></div><section class="account-grid"><div class="profile-card"><div class="card-head"><div><p class="eyebrow">PROFILE</p><h2>${complete?'Profile complete':'Complete your profile'}</h2></div><span class="status ${complete?'ok':''}">${complete?'Complete':'Action needed'}</span></div><div class="profile-preview"><div><span>Name</span><b>${esc(u.name||'Not added')}</b></div><div><span>Phone</span><b>${esc(u.phone||'Not added')}</b></div><div><span>National ID</span><b>${esc(u.nationalId||'Not added')}</b></div><div><span>City</span><b>${esc(u.city||'Not added')}</b></div><div><span>Address</span><b>${esc(u.address||'Not added')}</b></div><div><span>Postal code</span><b>${esc(u.postalCode||'Not added')}</b></div><div><span>Favorite number</span><b>${esc(u.favoriteNumber||'Not added')}</b></div><div><span>Email</span><b>${esc(u.email)}</b></div></div><div id="editArea"></div></div><div class="account-side"><a class="side-link" href="#/wishlist">${icon('heart')}<div><b>Wishlist</b><span>${wish().length} saved products</span></div>${icon('arrow')}</a><a class="side-link" href="#/orders">${icon('package')}<div><b>Orders</b><span>${orders().length} orders</span></div>${icon('arrow')}</a><a class="side-link" href="#/journal">${icon('help')}<div><b>Journal</b><span>Practical fabric and fit guides</span></div>${icon('arrow')}</a><button class="logout-btn" id="logout">Log out / register again</button></div></section></main>`}
function setupAccount(){const u=user();if(!u){let mode='login';const form=$('#authForm');const sync=()=>{$('#authSubmit').innerHTML=(mode==='login'?'Sign in':'Create account')+' '+icon('arrow');$('#favoriteField').classList.toggle('hidden',mode==='login');};$$('[data-auth]').forEach(b=>b.onclick=()=>{mode=b.dataset.auth;$$('[data-auth]').forEach(x=>x.classList.toggle('active',x===b));sync()});form.onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(form).entries());if(!d.email.includes('@')||!d.password||(mode==='register'&&!d.name.trim())){showToast('Please complete the required account fields','error');return}const saved=load('ub_profiles',{})[d.email.trim().toLowerCase()];const u={name:d.name||d.email.split('@')[0],email:d.email,phone:'',nationalId:'',city:'Tehran',address:'',postalCode:'',favoriteNumber:d.favoriteNumber||'',...(saved||{}),...(mode==='register'&&d.name.trim()?{name:d.name}:{})};save('ub_user',u);showToast(mode==='login'?'Signed in':'Account created');render()};sync();return}$('#logout').onclick=()=>{const cu=user();if(cu?.email){const pr=load('ub_profiles',{});pr[cu.email.trim().toLowerCase()]=cu;save('ub_profiles',pr)}localStorage.removeItem('ub_user');showToast('Signed out');render()};$('#editProfile').onclick=()=>editProfile(u)}
function editProfile(u){const area=$('#editArea');area.innerHTML=`<form id="profileForm" class="edit-profile">${field('Full name','name',u.name)}${field('Phone','phone',u.phone,{numeric:true,max:15})}${field('National ID','nationalId',u.nationalId,{numeric:true,max:10})}${field('City','city',u.city||'Tehran')}${field('Address','address',u.address,{wide:true})}${field('Postal code','postalCode',u.postalCode,{numeric:true,max:10})}${field('Favorite number','favoriteNumber',u.favoriteNumber||'',{numeric:true,max:4,required:false})}<button class="btn dark full" type="submit">Save profile ${icon('check')}</button></form>`;area.scrollIntoView({behavior:'smooth'});const f=$('#profileForm');$$('[data-numeric]',f).forEach(i=>i.addEventListener('input',()=>i.value=digits(i.value).slice(0,+i.dataset.numeric)));f.onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f).entries());if(!validPhone(d.phone)||!validNational(d.nationalId)||!validPostal(d.postalCode)){showToast('Phone, National ID and postal code must match the required formats','error');return}const nu={...u,...d};save('ub_user',nu);showToast('Your profile is complete');render()}};
function ordersPage(){const u=user();if(!u)return `<main class="page orders-signin-page">${empty('Sign in to view orders','Your dashboard keeps completed purchases, delivery information and return requests together.','#/account','Sign in / Register')}</main>`;const os=orders(),notice=transientReturnNotice;return `<main class="page"><div class="page-head"><p class="eyebrow">ORDER DASHBOARD</p><h1>Your orders.</h1><p>Order date, order time, ETA, delivery location, price, payment reference and returns are saved here.</p></div>${notice?`<div class="return-success-banner" id="returnSuccessBanner"><div>${icon('check')}<div><strong>Return request submitted.</strong><span>${esc(notice.message)}</span></div></div><div class="banner-actions"><button class="banner-close" id="dismissReturnNotice">Dismiss</button><a class="btn dark" href="#/shop">Shop again ${icon('arrow')}</a></div></div>`:''}${os.length?`<div class="orders-list">${os.map(orderCard).join('')}</div>`:`${notice?'':empty('No orders yet','Your completed purchases will appear here after checkout.','#/shop','Shop now')}`}</main>`}

function orderCard(o){const days=Math.max(0,Math.ceil((new Date(o.eta)-new Date())/86400000));return `<article class="order-card"><div class="order-top"><div><p class="eyebrow">${o.id}</p><h2>${fmtDate(o.orderedAt)}</h2><span>Ordered at ${fmtTime(o.orderedAt)}</span></div><div class="order-state"><span class="order-status">${o.status}</span><b>${days===0?'Due today':`ETA in ${days} days`}</b></div></div><div class="order-progress"><div class="progress-step done">${icon('check')}<span>Order placed</span></div><div class="progress-line active"></div><div class="progress-step done">${icon('package')}<span>Processing</span></div><div class="progress-line"></div><div class="progress-step">${icon('truck')}<span>Delivery</span></div></div><div class="order-main"><div class="order-items">${o.items.map(x=>`<div><img src="${x.image}" alt=""><div><b>${esc(x.name)}</b><span>${x.color} / ${x.size} × ${x.qty}</span><small>${x.sku}</small></div><strong>${money(x.price*x.qty)}</strong></div>`).join('')}</div><aside class="order-side"><div><span>Total</span><strong>${money(o.total)}</strong></div><div><span>Shipping</span><b>${o.shipping===0?'Free':money(o.shipping)}</b></div><div><span>Payment</span><b>•••• ${o.paymentLast4}</b></div><div><span>Deliver to</span><b>${esc(o.profile.city)}</b></div><a class="btn outline full return-button" href="#/returns/${o.id}">Return / refund ${icon('return')}</a></aside></div><button class="order-expand" data-expand="${o.id}">View full order information ${icon('arrow')}</button><div class="order-details hidden" id="details-${o.id}"><div><span>Full delivery address</span><b>${esc(o.profile.address)}, ${esc(o.profile.city)}, ${esc(o.profile.postalCode)}</b></div><div><span>Customer phone</span><b>${esc(o.profile.phone)}</b></div><div><span>National ID</span><b>${esc(o.profile.nationalId)}</b></div><div><span>Estimated delivery window</span><b>${fmtDate(o.eta)} / 09:00 - 18:00</b></div><div><span>Order total</span><b>${money(o.total)}</b></div><div><span>Return status</span><b>${o.returnRequest?.status||'No return request'}</b></div></div></article>`}
function setupOrders(){$$('[data-expand]').forEach(b=>b.onclick=()=>{$(`#details-${b.dataset.expand}`).classList.toggle('hidden');b.textContent=$(`#details-${b.dataset.expand}`).classList.contains('hidden')?'View full order information':'Hide full order information'});$('#dismissReturnNotice')?.addEventListener('click',()=>{transientReturnNotice=null;render()})}

function returnPage(id){const o=orders().find(x=>x.id===id);if(!o)return notFound();if(o.returnRequest)return `<main class="page success"><div class="success-mark red">${icon('check')}</div><p class="eyebrow">RETURN REQUEST</p><h1>Return is under review.</h1><p class="success-text">Support will review your request within 24 hours and contact you. If approved, the eligible amount will be refunded to the provided card.</p><div class="return-note">${icon('return')}<div><b>Tracking status</b><span>Under review / support follow-up within 24 hours</span></div></div><a class="btn dark" href="#/orders">Back to orders ${icon('back')}</a></main>`;return `<main class="page"><div class="page-head"><p class="eyebrow">RETURN / REFUND</p><h1>Request a return.</h1><p>Order ${o.id}. Enter your details again so support can match the request.</p></div><div class="return-layout"><form class="checkout-card" id="returnForm"><div class="card-head"><span>01</span><div><h2>Customer verification</h2><p>The refund card is required again for this flow.</p></div></div><div class="form-grid">${field('Full name','name',o.profile.name)}${field('Phone','phone',o.profile.phone,{numeric:true,max:15})}${field('Refund card number','card','',{numeric:true,max:16,wide:true})}<label class="field wide"><span>Reason for return</span><textarea name="reason" required></textarea></label><div class="return-policy-box">${icon('return')}<div><b>What happens next?</b><span>Support follows up within 24 hours. Approved refunds go to the provided card.</span></div></div><button class="btn danger full" type="submit">Submit return request ${icon('arrow')}</button></div></form><aside class="summary"><p class="eyebrow">ORDER TO RETURN</p><div class="return-product"><img src="${o.items[0].image}" alt=""><div><b>${esc(o.items[0].name)}</b><span>${o.items.length} line item${o.items.length===1?'':'s'}</span></div></div><div class="summary-total"><span>Eligible order total</span><strong>${money(o.total)}</strong></div><p class="summary-note">Front-end demo only. The request is saved locally with the order.</p></aside></div></main>`}
function setupReturn(id){const f=$('#returnForm');if(!f)return;$$('[data-numeric]',f).forEach(i=>i.addEventListener('input',()=>i.value=digits(i.value).slice(0,+i.dataset.numeric)));f.onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f).entries());if(!validPhone(d.phone)||!validLuhn(d.card)||!d.reason.trim()){showToast('Enter valid phone, card number and a return reason','error');return}const current=orders().find(o=>o.id===id);if(!current){go('/orders');return}const {card:refundCard,...safeReturn}=d;const returnRecord={...current,returnRequest:{...safeReturn,refundCardLast4:digits(refundCard).slice(-4),requestedAt:new Date().toISOString(),status:'Under review'}};save('ub_returned_orders',[...load('ub_returned_orders',[]),returnRecord]);save('ub_orders',orders().filter(o=>o.id!==id));transientReturnNotice={orderId:id,productNames:current.items.map(x=>x.name),createdAt:new Date().toISOString(),message:'Your return request has been submitted. The order has been removed from your dashboard. Support will review it within 24 hours and, if the return is approved, the eligible amount will be refunded to your provided card.'};go('/orders')}}

function wishlistPage(){const items=P.filter(p=>wish().includes(p.id));return `<main class="page"><div class="page-head"><p class="eyebrow">WISHLIST</p><h1>Saved for later.</h1><p>Keep favorites close while you compare cuts, fabrics and prices.</p></div>${items.length?productGrid(items):empty('Nothing saved yet','Tap the heart on any product card to add it here.','#/shop','Browse 50 products')}</main>`}
function fitGuide(){
  const styles=[
    ['boxer-brief','Boxer briefs','Longer leg coverage with close support. A practical everyday choice under trousers and for movement.'],
    ['trunk','Trunks','A shorter leg with a close fit when you want support with less fabric on the thigh.'],
    ['brief','Briefs','A streamlined cut with minimal leg coverage and a supportive shape.'],
    ['boxer','Woven boxers','A looser silhouette with more room and airflow for relaxed days.'],
    ['jockstrap','Jockstraps','A more minimal, movement-focused silhouette with an open back.'],
    ['performance','Performance','Look for stretch, stable support and moisture handling for active sessions.']
  ];
  const sizes=[...new Set(P.flatMap(p=>p.sizes||[]))];
  return `<main class="page fit-guide-page">
    <div class="page-head"><p class="eyebrow">UNDER BELT / FIT GUIDE</p><h1>Start with the fit.</h1><p>Choose the silhouette first, then check the specific product's available sizes, fabric and construction. The right pair should stay in place without pinching, bunching or restricting movement.</p></div>
    <section class="fit-measure-grid"><article><span>01 / MEASURE</span><h2>Measure where the waistband sits.</h2><p>Stand naturally and keep a soft tape level around your waist at the position the underwear waistband will rest. Keep it comfortably snug; do not pull it tight.</p></article><article><span>02 / COMPARE</span><h2>Use the product's own fit details.</h2><p>Rise, leg length, fabric stretch and pouch construction can change how the same letter size feels. Check the product page and compare it with underwear you already find comfortable.</p></article><article><span>03 / CHECK</span><h2>Look for comfort, not compression.</h2><p>The waistband should lie flat, the pouch should feel unrestrictive, and the legs should not continuously roll or ride up. Excess fabric or pinching can signal the wrong size or silhouette.</p></article></section>
    <section class="section fit-silhouettes"><div class="section-head"><div><p class="eyebrow">SHOP BY FIT</p><h2>Choose your silhouette.</h2></div><a class="text-link" href="#/shop">Shop all styles ${icon('arrow')}</a></div><div class="fit-silhouette-grid">${styles.map(([cat,title,copy])=>{const p=P.find(x=>x.category===cat);if(!p)return '';return `<a class="fit-silhouette-card" href="#/shop/${cat}"><img src="${esc(imageSources(p.image)[0])}" alt="${esc(title)} underwear" loading="lazy" decoding="async"><div><span>${P.filter(x=>x.category===cat).length} styles</span><h3>${title}</h3><p>${copy}</p><b>Explore ${title} ${icon('arrow')}</b></div></a>`}).join('')}</div></section>
    <section class="fit-size-note"><div><p class="eyebrow">SIZES IN THE CURRENT COLLECTION</p><h2>${sizes.join(' · ')}</h2><p>Available sizes vary by product. Always use the size options and fit details shown on the product page; do not assume every silhouette fits the same way.</p></div><a class="btn dark" href="#/shop">Find your product ${icon('arrow')}</a></section>
    <section class="fit-help"><p class="eyebrow">STILL UNSURE?</p><h2>Start with the pair you wear most.</h2><p>Compare its waistband position, leg length and how much stretch you prefer. Then choose the closest Under Belt silhouette and check its fabric and fit notes before adding it to your bag.</p><a class="text-link" href="#/contact">Ask us about fit ${icon('arrow')}</a></section>
  </main>`;
}

function fabrics(){const gs=[['Cotton','Soft, familiar and breathable for everyday rotation.'],['Modal','Smooth, light and soft for long wear.'],['Performance','Made for movement with moisture handling and stretch.'],['Mesh','Light, airy constructions for active movement and heat.'],['Woven','Relaxed cotton silhouettes with an easy hand feel.']];return `<section class="fabric-hero"><p class="eyebrow light-eyebrow">FABRIC GUIDE</p><h1>Choose the feel, not just the look.</h1><p>Material changes the way underwear wears across a whole day. This guide turns product-page details into an easier decision.</p></section><section class="section fabric-grid">${gs.map(([t,d],i)=>`<div class="fabric-card"><span>0${i+1}</span><h2>${t}</h2><p>${d}</p><div><span>${t}</span><span>Daily comfort</span></div><a class="text-link" href="#/shop?fabric=${t}">Shop ${t} ${icon('arrow')}</a></div>`).join('')}</section><section class="section"><div class="section-head"><div><p class="eyebrow">COMPARISON</p><h2>At a glance.</h2></div></div><div class="table-wrap"><table><thead><tr><th>Fabric</th><th>Feel</th><th>Breathability</th><th>Moisture</th><th>Best for</th></tr></thead><tbody>${[['Cotton','Familiar / soft','4/5','3/5','Everyday'],['Modal','Silky / light','4/5','4/5','Long wear'],['Performance','Smooth / technical','4/5','5/5','Training'],['Mesh','Airy / light','5/5','5/5','Heat + movement'],['Woven','Dry / relaxed','4/5','3/5','Lounge']].map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>`}
function journal(){return `<main class="page"><div class="page-head"><p class="eyebrow">JOURNAL</p><h1>Better basics, explained.</h1><p>Ten practical guides covering age, fit, fabric, activity, care and everyday underwear choices.</p></div><div class="article-grid big">${A.map(articleCard).join('')}</div></main>`}
function articlePage(slug){const a=A.find(x=>x.slug===slug);if(!a)return notFound();return `<main class="page"><div class="article-single-head"><p class="eyebrow">${esc(a.tag)}</p><h1>${esc(a.title)}</h1><p>${esc(a.summary)}</p></div><div class="article-single-grid"><article class="article-body">${a.body.map(x=>`<p>${esc(x)}</p>`).join('')}<div class="article-products"><h3>Products mentioned</h3>${productGrid(P.filter(p=>a.products.includes(p.id)))}</div></article><aside class="article-aside"><div class="aside-card"><span>Under belt / Journal</span><b>Use the guide with the related products to compare fabric and fit.</b><a class="btn outline full" href="#/shop">Shop all 50 ${icon('arrow')}</a></div><div class="aside-card"><span>Next reads</span>${A.filter(x=>x.slug!==a.slug).slice(0,3).map(n=>`<a href="#/journal/${n.slug}">${esc(n.title)} ${icon('arrow')}</a>`).join('')}</div></aside></div></main>`}
function about(){return `<main class="page about"><section class="about-hero"><p class="eyebrow">ABOUT UNDER BELT</p><h1>A new company for a very old essential.</h1><p>Under belt was opened by Mehdi Saharkhiz and Alireza Abdollahi with a straightforward ambition: develop a more thoughtful approach to men's underwear in Iran, starting with fit, fabric and the details customers actually need to know.</p></section><section class="story-grid"><div><span>01</span><h2>Quality first.</h2><p>Product pages explain the material, fit, performance and care instead of hiding important details behind marketing language.</p></div><div><span>02</span><h2>Clean by design.</h2><p>A neutral, modern visual system keeps the product and information in focus.</p></div><div><span>03</span><h2>Built to expand.</h2><p>The catalog, content and order systems are structured around the first 50 products and can grow from there.</p></div></section><section class="founders"><p class="eyebrow">FOUNDERS</p><div><div><strong>Mehdi Saharkhiz</strong><span>Co-founder</span></div><div><strong>Alireza Abdollahi</strong><span>Co-founder</span></div></div></section></main>`}
function faq(){const rows=[['How many products are in the collection?','The first collection contains 50 products across boxer briefs, briefs, trunks, woven boxers, jockstraps and performance styles.'],['Can I filter by fabric, size and color?','Yes. Shop includes product search, category, fabric, size, color, price and sort controls.'],['Can I save products?','Yes. Use the heart on a product card. Saved products stay in this browser until removed.'],['How does order tracking work?','After checkout, Orders stores order date, time, ETA, delivery location, payment reference and status.'],['How do returns work?','Open an order, press the red Return / refund button, then enter your name, phone, refund card and reason.'],['Is the payment real?','No. The site performs front-end validation only. No real card transaction is sent.'],['What profile information can I save?','Name, email, phone, national ID, city, address, postal code and favorite number.'],['Is mobile supported?','Yes. The layout switches to a full-screen mobile menu and responsive grids.']];return `<main class="page"><div class="page-head"><p class="eyebrow">FAQ</p><h1>Questions, answered.</h1></div><div class="faq-list">${rows.map((r,i)=>`<div class="faq-item"><button data-faq="${i}"><span>${r[0]}</span>${icon('arrow')}</button><p class="hidden" id="faq-${i}">${r[1]}</p></div>`).join('')}</div></main>`}
function setupFAQ(){$$('[data-faq]').forEach(b=>b.onclick=()=>{const p=$(`#faq-${b.dataset.faq}`);p.classList.toggle('hidden')})}
function contact(){return `<main class="page"><div class="contact-layout"><div><p class="eyebrow">CONTACT US</p><h1>Need help with fit, an order or a return?</h1><p>Use the contact form for the front-end demo, or use Orders for delivery and return tracking.</p><div class="contact-links"><a href="mailto:support@underbelt.example">✉ support@underbelt.example</a><a href="tel:+982100000000">☎ +98 21 0000 0000</a><span>⌖ Tehran, Iran</span><span>◷ Mon-Fri / 09:00-18:00</span></div></div><form id="contactForm" class="contact-form">${field('Name','name')}${field('Email','email','',{type:'email'})}<label class="field wide"><span>Message</span><textarea name="message" required placeholder="How can we help?"></textarea></label><button class="btn dark full">Send message ${icon('arrow')}</button></form></div></main>`}
function setupContact(){$('#contactForm').onsubmit=e=>{e.preventDefault();e.currentTarget.reset();showToast('Your message was recorded for this demo')}}
function policies(type){const d={terms:['Terms & Conditions',['Use of site','Product information','Orders & payment','Accounts','Changes to service']],privacy:['Privacy Policy',['What we store','Why we store it','Local browser demo storage','Data requests']],shipping:['Shipping Policy',['Delivery methods','Estimated delivery','Tracking','Shipping fees']],returns:['Return Policy',['Eligibility','Return request','24-hour review','Refund handling']]}[type]||['Terms & Conditions',['Use of site','Product information','Orders & payment','Accounts']];return `<main class="page policy"><div class="page-head"><p class="eyebrow">LEGAL / ${String(type).toUpperCase()}</p><h1>${d[0]}</h1><p>Final legal wording should be supplied or approved by the business before production. The layout and navigation are ready.</p></div><div class="policy-grid">${d[1].map((s,i)=>`<section><span>0${i+1}</span><h2>${s}</h2><p>Final approved wording for this section goes here. The page structure, hierarchy and navigation are already prepared.</p></section>`).join('')}</div></main>`}
function admin(){const os=orders(),u=user(),w=wish();return `<main class="page"><div class="page-head"><p class="eyebrow">STORE ADMIN / DEMO</p><h1>Management panel.</h1><p>Prepared around the project brief: products, prices, inventory, images, orders, users, discounts, categories and site content.</p></div><div class="admin-stats"><div class="stat-card"><span>Products</span><strong>50</strong><small>Catalog</small></div><div class="stat-card"><span>Orders</span><strong>${os.length}</strong><small>Local demo</small></div><div class="stat-card"><span>Active user</span><strong>${u?'1':'0'}</strong><small>Local profile</small></div><div class="stat-card"><span>Wishlist</span><strong>${w.length}</strong><small>Saved styles</small></div></div><div class="admin-table-wrap"><table><thead><tr><th>SKU</th><th>Product</th><th>Category</th><th>Price</th><th>Stock</th></tr></thead><tbody>${P.map(p=>`<tr><td>${p.sku}</td><td>${esc(p.name)}</td><td>${esc(p.categoryLabel)}</td><td>${money(p.price)}</td><td>${p.stock}</td></tr>`).join('')}</tbody></table></div></main>`}
function empty(t,txt,to,label){return `<div class="empty"><div class="empty-icon">${icon('package')}</div><h2>${esc(t)}</h2><p>${esc(txt)}</p><a class="btn dark" href="${to}">${esc(label)} ${icon('arrow')}</a></div>`}
function notFound(){return `<main class="page empty"><div class="empty-icon">${icon('help')}</div><h1>Page not found.</h1><p>The page you requested doesn't exist.</p><a class="btn dark" href="#/">Back home ${icon('back')}</a></main>`}
function render(){document.querySelector('.quickview-backdrop')?.remove();document.querySelector('.color-compare-backdrop')?.remove();const r=location.hash.replace(/^#/,'')||'/';if(r!=='/orders')transientReturnNotice=null;let view='';if(r==='/')view=home();else if(r==='/collections')view=collectionsPage();else if(r.startsWith('/shop'))view=shop();else if(r.startsWith('/product/'))view=productPage(r.split('/')[2]);else if(r==='/cart')view=cartPage();else if(r==='/checkout')view=checkout();else if(r==='/success')view=success();else if(r==='/account')view=account();else if(r==='/orders')view=ordersPage();else if(r.startsWith('/returns/'))view=returnPage(r.split('/')[2]);else if(r==='/wishlist')view=wishlistPage();else if(r==='/fabrics')view=fabrics();else if(r==='/fit-guide')view=fitGuide();else if(r==='/journal')view=journal();else if(r.startsWith('/journal/'))view=articlePage(r.split('/')[2]);else if(r==='/about')view=about();else if(r==='/faq')view=faq();else if(r==='/contact')view=contact();else if(r.startsWith('/policies/'))view=policies(r.split('/')[2]);else if(r==='/admin')view=admin();else view=notFound();document.querySelectorAll('header,footer').forEach(x=>x.remove());$('#app').innerHTML=view;header();footer();window.scrollTo({top:0,left:0,behavior:'auto'});if(r.startsWith('/product/')){requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:'auto'}));setTimeout(()=>window.scrollTo({top:0,left:0,behavior:'auto'}),0);}if(r.startsWith('/shop')){$('#filterToggle')?.addEventListener('click',()=>{const open=$('#filters').classList.toggle('open');$('#filterToggle').setAttribute('aria-expanded',String(open))});$$('#filters input,#filters select').forEach(el=>el.addEventListener('input',applyShopFilters));$('#sort')?.addEventListener('change',applyShopFilters);$('#resetFilters')?.addEventListener('click',()=>{if($('#filterSearch'))$('#filterSearch').value='';['fFabric','fCollection','fSize','fColor','fStock'].forEach(id=>{if($('#'+id))$('#'+id).value='all'});if($('#fPrice'))$('#fPrice').value='80';if($('#sort'))$('#sort').value='featured';applyShopFilters()});bindWish();bindImageGuards();prepareHoverImages();}if(r.startsWith('/product/'))setupProduct(r.split('/')[2].split('?')[0]);bindWish();bindQuickAdd();bindImageGuards();prepareHoverImages();if(r==='/cart')setupCart();if(r==='/checkout')setupCheckout();if(r==='/account')setupAccount();if(r==='/orders')setupOrders();if(r.startsWith('/returns/'))setupReturn(r.split('/')[2]);if(r==='/faq')setupFAQ();if(r==='/contact')setupContact();bindReveal();}
function bindImageGuards(){ $$('img.image-guard').forEach(img=>{if(img.dataset.guardBound==='1')return;img.dataset.guardBound='1';img.addEventListener('error',()=>{const stage=Number(img.dataset.errorStage||0);if(stage===0&&img.dataset.fallback){img.dataset.errorStage='1';img.src=img.dataset.fallback;return}if(stage<=1&&img.dataset.final){img.dataset.errorStage='2';img.src=img.dataset.final;return}img.style.background='#eee';img.removeAttribute('src');});});}
function bindReveal(){const els=$$('.reveal');if(!('IntersectionObserver' in window)){els.forEach(x=>x.classList.add('is-visible'));return}const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.06});els.forEach(x=>io.observe(x));}
window.addEventListener('hashchange',render); window.addEventListener('storage',render); render();
