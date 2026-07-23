"use strict";

    /*
      Amazon Associates Japan tracking ID.
      Product links use Amazon's ASIN-based tagged URL format.
      Keep the affiliate disclosure visible when editing this page.
    */
    const TRACKING_ID = "digitalecosph-22";
    const INITIAL_VISIBLE = 12;
    const LOAD_STEP = 8;

    const categoryNames = {
      women: {
        en: "Women",
        ja: "女性向け"
      },
      dresses: {
        en: "Branded dresses",
        ja: "ブランドワンピース"
      },
      lingerie: {
        en: "Lingerie & innerwear",
        ja: "ランジェリー・インナー"
      },
      jewelry: {
        en: "Jewellery",
        ja: "ジュエリー"
      },
      camera: {
        en: "Cameras",
        ja: "カメラ"
      },
      apple: {
        en: "Apple",
        ja: "Apple製品"
      },
      lenovo: {
        en: "Lenovo",
        ja: "Lenovo製品"
      },
      men: {
        en: "Men",
        ja: "男性向け"
      },
      boys: {
        en: "Boys & teens",
        ja: "男の子・ティーン"
      },
      creator: {
        en: "Creator technology",
        ja: "制作・配信機材"
      },
      storage: {
        en: "Storage & power",
        ja: "ストレージ・電源"
      },
      office: {
        en: "Office & research",
        ja: "オフィス・研究"
      },
      field: {
        en: "Travel & fieldwork",
        ja: "旅行・フィールドワーク"
      },
      services: {
        en: "Amazon services",
        ja: "Amazonサービス"
      }
    };

    const products = [
      // New headline collections: branded women’s fashion, jewellery, cameras and major technology brands.
      {
        category: "dresses",
        brand: "SNIDEL",
        icon: "👗",
        search: "SNIDEL レディース ワンピース 公式",
        titleEn: "SNIDEL Women's One-Piece Dresses",
        titleJa: "SNIDEL レディースワンピース",
        descEn: "Trend-led Japanese dresses for everyday, seasonal and occasion styling; compare current collections, sizes and official sellers.",
        descJa: "日常、季節、オケージョンに合わせやすいトレンド感のある日本ブランド。最新コレクション、サイズ、正規販売者をご確認ください。",
        featured: true,
        badgeEn: "Fashion hot pick",
        badgeJa: "人気ファッション"
      },
      {
        category: "lingerie",
        brand: "Wacoal",
        icon: "🎀",
        search: "Wacoal ワコール レディース ブラ インナー 公式",
        titleEn: "Wacoal Bras, Bra Tops & Innerwear",
        titleJa: "Wacoal ブラ・ブラトップ・インナー",
        descEn: "A trusted Japanese innerwear brand with bras, bra tops and everyday basics; check the size chart and seller before ordering.",
        descJa: "ブラ、ブラトップ、日常用インナーを展開する日本の定番ブランド。購入前にサイズ表と販売者をご確認ください。",
        featured: true,
        badgeEn: "Trusted brand",
        badgeJa: "定番ブランド"
      },
      {
        category: "jewelry",
        brand: "Swarovski",
        icon: "💎",
        search: "Swarovski レディース ネックレス 公式 Amazon限定",
        titleEn: "Swarovski Crystal Necklaces",
        titleJa: "Swarovski クリスタルネックレス",
        descEn: "Branded crystal jewellery for gifts, celebrations and polished everyday styling; compare official-store designs and materials.",
        descJa: "ギフト、記念日、上品な日常コーデに合わせやすいブランドクリスタルジュエリー。公式ストアのデザインと素材をご確認ください。",
        featured: true,
        badgeEn: "Gift favourite",
        badgeJa: "ギフト人気"
      },
      {
        category: "camera",
        brand: "OM SYSTEM",
        icon: "📷",
        asin: "B0CGLZZ9GC",
        titleEn: "OM SYSTEM Tough TG-7 Waterproof Camera",
        titleJa: "OM SYSTEM Tough TG-7 防水カメラ",
        descEn: "A rugged compact camera for travel, fieldwork, macro and underwater photography; verify colour, bundle and warranty details.",
        descJa: "旅行、フィールドワーク、マクロ、水中撮影に向くタフなコンパクトカメラ。色、セット内容、保証をご確認ください。",
        featured: true,
        badgeEn: "Field camera",
        badgeJa: "フィールド向け"
      },
      {
        category: "apple",
        brand: "Apple",
        icon: "🍎",
        search: "Apple iPhone 17 Pro SIMフリー Amazon.co.jp",
        titleEn: "Apple iPhone 17 Pro",
        titleJa: "Apple iPhone 17 Pro",
        descEn: "A premium current-generation iPhone for photography, video and mobile creation; compare storage, colour and seller information.",
        descJa: "写真、動画、モバイル制作に適した現行プレミアムiPhone。容量、色、販売者情報を比較してください。",
        featured: true,
        badgeEn: "Premium tech",
        badgeJa: "プレミアム"
      },
      {
        category: "lenovo",
        brand: "Lenovo ThinkPad",
        icon: "💻",
        search: "Lenovo ThinkPad X1 Carbon Gen 14 Aura Edition 日本語キーボード",
        titleEn: "ThinkPad X1 Carbon Gen 14 Aura Edition",
        titleJa: "ThinkPad X1 Carbon Gen 14 Aura Edition",
        descEn: "A premium lightweight Lenovo business AI laptop; compare Japanese keyboard, memory, storage, warranty and seller configurations.",
        descJa: "軽量なプレミアムビジネスAIノートPC。日本語キーボード、メモリ、ストレージ、保証、販売構成を比較してください。",
        featured: true,
        badgeEn: "Business flagship",
        badgeJa: "ビジネス旗艦"
      },
      // Featured trend picks: balanced across women, men, boys and teens.
      {
        category: "women",
        brand: "KATE",
        icon: "💄",
        search: "KATE リップモンスター",
        titleEn: "KATE Lip Monster Long-Lasting Lip Colour",
        titleJa: "KATE リップモンスター",
        descEn: "A widely recognised Japanese lip-colour line with multiple shades; compare the current colour range and authorised sellers.",
        descJa: "豊富なカラー展開で知られる日本の人気リップ。最新色と販売者をAmazonで比較できます。",
        featured: true,
        badgeEn: "Hot pick",
        badgeJa: "注目"
      },
      {
        category: "men",
        brand: "CASIO G-SHOCK",
        icon: "⌚",
        search: "G-SHOCK GA-2100",
        titleEn: "CASIO G-SHOCK GA-2100 Watch",
        titleJa: "CASIO G-SHOCK GA-2100 腕時計",
        descEn: "The slim octagonal G-SHOCK series is a strong everyday style choice; compare colours and official Japan models.",
        descJa: "薄型の八角形デザインで人気のG-SHOCK。カラーや国内正規モデルを比較できます。",
        featured: true,
        badgeEn: "Hot pick",
        badgeJa: "注目"
      },
      {
        category: "boys",
        brand: "Nintendo",
        icon: "🎮",
        search: "Nintendo Switch 2 本体 日本語 国内専用",
        titleEn: "Nintendo Switch 2 Console",
        titleJa: "Nintendo Switch 2 本体",
        descEn: "Nintendo's current-generation console for family and teen gaming; check region, language, bundle and seller details carefully.",
        descJa: "家族やティーン向けの現行Nintendoゲーム機。地域、言語、セット内容、販売者を必ず確認してください。",
        featured: true,
        badgeEn: "Hot pick",
        badgeJa: "注目"
      },
      {
        category: "women",
        brand: "ANESSA",
        icon: "☀️",
        search: "ANESSA パーフェクトUV スキンケアミルク",
        titleEn: "ANESSA Perfect UV Skincare Milk",
        titleJa: "ANESSA パーフェクトUV スキンケアミルク",
        descEn: "A well-known Japanese UV-care line for daily use and outdoor seasons; confirm the current formula and size.",
        descJa: "日常使いから屋外シーズンまで人気の日本のUVケア。最新処方と容量をご確認ください。",
        featured: true,
        badgeEn: "Trending",
        badgeJa: "トレンド"
      },
      {
        category: "men",
        brand: "BRAUN",
        icon: "🪒",
        search: "BRAUN Series 9 Pro+ 電気シェーバー",
        titleEn: "BRAUN Series 9 Pro+ Electric Shaver",
        titleJa: "BRAUN Series 9 Pro+ 電気シェーバー",
        descEn: "A premium grooming option with several cleaning-station and accessory bundles; compare the current Japan models.",
        descJa: "洗浄器や付属品の異なるセットがあるプレミアムシェーバー。国内モデルを比較できます。",
        featured: true,
        badgeEn: "Premium",
        badgeJa: "プレミアム"
      },
      {
        category: "boys",
        brand: "Pokémon",
        icon: "⚡",
        search: "Pokémon LEGENDS Z-A Nintendo Switch 2 Edition",
        titleEn: "Pokémon LEGENDS Z-A for Nintendo Switch",
        titleJa: "Pokémon LEGENDS Z-A Nintendo Switch版",
        descEn: "A major Pokémon game choice for boys, teens and family players; select the correct console edition and language.",
        descJa: "男の子、ティーン、家族で楽しめるポケモン作品。対応機種と言語を確認してください。",
        featured: true,
        badgeEn: "Popular",
        badgeJa: "人気"
      },
      {
        category: "women",
        brand: "ReFa",
        icon: "🪮",
        search: "ReFa HEART BRUSH ハートブラシ",
        titleEn: "ReFa HEART BRUSH",
        titleJa: "ReFa HEART BRUSH ハートブラシ",
        descEn: "A compact, gift-friendly hairbrush with distinctive styling; compare colours and official-store options.",
        descJa: "特徴的なデザインでギフトにも選びやすい携帯ヘアブラシ。色と公式販売店を比較できます。",
        featured: true,
        badgeEn: "Gift pick",
        badgeJa: "ギフト"
      },
      {
        category: "men",
        brand: "Levi's",
        icon: "👖",
        search: "Levi's 501 Original メンズ ジーンズ",
        titleEn: "Levi's 501 Original Men's Jeans",
        titleJa: "Levi's 501 Original メンズジーンズ",
        descEn: "An enduring branded denim choice; check waist, inseam, fit, colour and seller before ordering.",
        descJa: "定番ブランドデニム。ウエスト、股下、フィット、色、販売者を確認して選べます。",
        featured: true,
        badgeEn: "Iconic",
        badgeJa: "定番"
      },
      {
        category: "boys",
        brand: "LEGO Minecraft",
        icon: "🧱",
        search: "LEGO Minecraft 男の子 セット",
        titleEn: "LEGO Minecraft Building Sets",
        titleJa: "LEGO Minecraft ブロックセット",
        descEn: "Creative building sets combining Minecraft themes with hands-on play; choose by age guidance and set size.",
        descJa: "Minecraftの世界をブロック遊びで楽しめるセット。対象年齢とセット規模から選べます。",
        featured: true,
        badgeEn: "Creative",
        badgeJa: "創造力"
      },
      {
        category: "women",
        brand: "Panasonic",
        icon: "💨",
        search: "Panasonic nanocare EH-NA0J ヘアドライヤー",
        titleEn: "Panasonic nanocare EH-NA0J Hair Dryer",
        titleJa: "Panasonic nanocare EH-NA0J ヘアドライヤー",
        descEn: "A premium Japanese hair-care appliance available in several colours; verify voltage and exact model.",
        descJa: "複数カラーから選べる日本のプレミアムヘアケア家電。電圧と型番を確認してください。",
        featured: true,
        badgeEn: "Premium",
        badgeJa: "プレミアム"
      },
      {
        category: "men",
        brand: "adidas",
        icon: "👟",
        search: "adidas Stan Smith メンズ スニーカー",
        titleEn: "adidas Stan Smith Men's Sneakers",
        titleJa: "adidas Stan Smith メンズスニーカー",
        descEn: "A clean, recognisable sneaker design for casual wardrobes; compare sizes, colours and seller information.",
        descJa: "カジュアルに合わせやすい定番スニーカー。サイズ、色、販売者を比較してください。",
        featured: true,
        badgeEn: "Style pick",
        badgeJa: "スタイル"
      },
      {
        category: "boys",
        brand: "BEYBLADE X",
        icon: "🌀",
        search: "BEYBLADE X スターター タカラトミー",
        titleEn: "BEYBLADE X Starter Sets",
        titleJa: "BEYBLADE X スターターセット",
        descEn: "Fast-action battling tops from Takara Tomy; check whether the listing includes a launcher and stadium.",
        descJa: "タカラトミーの高速バトル玩具。ランチャーやスタジアムの付属有無を確認してください。",
        featured: true,
        badgeEn: "Action pick",
        badgeJa: "アクション"
      },

      // More branded picks for women.
      {
        category: "women",
        brand: "TIRTIR",
        icon: "🪞",
        search: "TIRTIR MASK FIT RED CUSHION",
        titleEn: "TIRTIR Mask Fit Red Cushion",
        titleJa: "TIRTIR マスクフィット レッドクッション",
        descEn: "A recognisable cushion-foundation line with multiple shades and sizes; compare the current shade chart.",
        descJa: "色展開とサイズが豊富なクッションファンデ。最新の色番号を確認できます。",
        featured: false
      },
      {
        category: "women",
        brand: "L'Oréal Paris",
        icon: "✨",
        search: "ロレアル パリ エルセーヴ エクストラオーディナリー オイル",
        titleEn: "L'Oréal Paris Elseve Extraordinary Oil",
        titleJa: "ロレアル パリ エルセーヴ エクストラオーディナリー オイル",
        descEn: "A popular branded hair-oil family with several finishes and fragrances; choose according to hair type.",
        descJa: "仕上がりや香りの異なる種類がある人気ヘアオイル。髪質に合わせて選べます。",
        featured: false
      },
      {
        category: "women",
        brand: "fino",
        icon: "🧴",
        search: "fino プレミアムタッチ 濃厚美容液ヘアマスク",
        titleEn: "fino Premium Touch Hair Mask",
        titleJa: "fino プレミアムタッチ 濃厚美容液ヘアマスク",
        descEn: "A frequently searched Japanese hair mask for at-home care; check pack size and seller details.",
        descJa: "自宅ヘアケアで注目される日本のヘアマスク。容量と販売者を確認できます。",
        featured: false
      },
      {
        category: "women",
        brand: "YOLU",
        icon: "🌙",
        search: "YOLU カームナイトリペア シャンプー トリートメント セット",
        titleEn: "YOLU Calm Night Repair Hair-Care Set",
        titleJa: "YOLU カームナイトリペア ヘアケアセット",
        descEn: "A night-care themed shampoo and treatment line; compare refill, bottle and gift-set formats.",
        descJa: "夜間美容をテーマにしたシャンプー・トリートメント。ボトル、詰替え、セットを比較できます。",
        featured: false
      },
      {
        category: "women",
        brand: "Wpc.",
        icon: "☂️",
        search: "Wpc. UVO 日傘 レディース 完全遮光",
        titleEn: "Wpc. UVO UV-Protection Parasol",
        titleJa: "Wpc. UVO UVカット日傘",
        descEn: "A stylish sun-protection accessory for Japan's hot season; compare folding size, weight and colour.",
        descJa: "日本の暑い季節に便利なUV対策アイテム。折りたたみサイズ、重量、色を比較できます。",
        featured: false
      },
      {
        category: "women",
        brand: "New Balance",
        icon: "👟",
        search: "New Balance 327 レディース スニーカー",
        titleEn: "New Balance 327 Women's Sneakers",
        titleJa: "New Balance 327 レディーススニーカー",
        descEn: "A retro-inspired branded sneaker with varied colourways; verify the Japan size and seller.",
        descJa: "レトロ調デザインと多彩な配色が特徴。日本サイズと販売者を確認してください。",
        featured: false
      },
      {
        category: "women",
        brand: "adidas",
        icon: "👟",
        search: "adidas Samba OG レディース スニーカー",
        titleEn: "adidas Samba OG Women's Sneakers",
        titleJa: "adidas Samba OG レディーススニーカー",
        descEn: "A globally recognisable low-profile sneaker; compare official colourways, sizes and delivery dates.",
        descJa: "世界的に知られる薄底スニーカー。公式カラー、サイズ、配送日を比較できます。",
        featured: false
      },
      {
        category: "women",
        brand: "CASIO BABY-G",
        icon: "⌚",
        search: "CASIO BABY-G レディース 腕時計",
        titleEn: "CASIO BABY-G Women's Watch",
        titleJa: "CASIO BABY-G レディース腕時計",
        descEn: "Durable fashion watches in sporty and elegant designs; compare dimensions and Japan warranty coverage.",
        descJa: "スポーティーから上品なモデルまで選べる耐久性の高い腕時計。サイズと国内保証をご確認ください。",
        featured: false
      },

      // More branded picks for men.
      {
        category: "men",
        brand: "Philips",
        icon: "🪒",
        search: "Philips OneBlade 360 メンズ シェーバー",
        titleEn: "Philips OneBlade 360 Grooming System",
        titleJa: "Philips OneBlade 360 メンズグルーミング",
        descEn: "A versatile trim, edge and shave system; compare face-only and face-and-body bundles.",
        descJa: "トリミング、輪郭調整、シェービングに対応。顔用と全身用セットを比較できます。",
        featured: false
      },
      {
        category: "men",
        brand: "Panasonic",
        icon: "🪒",
        search: "Panasonic ラムダッシュ パームイン メンズシェーバー",
        titleEn: "Panasonic LAMDASH PALM IN Shaver",
        titleJa: "Panasonic ラムダッシュ パームイン",
        descEn: "A compact premium Japanese shaver designed for palm-held use and travel; verify the exact blade model.",
        descJa: "手のひらサイズで旅行にも便利な日本のプレミアムシェーバー。刃の型番をご確認ください。",
        featured: false
      },
      {
        category: "men",
        brand: "BULK HOMME",
        icon: "🫧",
        search: "BULK HOMME THE FACE WASH",
        titleEn: "BULK HOMME THE FACE WASH",
        titleJa: "BULK HOMME THE FACE WASH",
        descEn: "A Japanese men's skincare cleanser frequently featured in grooming routines; confirm size and seller.",
        descJa: "メンズスキンケアで知られる日本の洗顔料。容量と販売者を確認できます。",
        featured: false
      },
      {
        category: "men",
        brand: "New Balance",
        icon: "👟",
        search: "New Balance 574 メンズ スニーカー",
        titleEn: "New Balance 574 Men's Sneakers",
        titleJa: "New Balance 574 メンズスニーカー",
        descEn: "A classic everyday sneaker with broad colour and size options; verify the width and Japan sizing.",
        descJa: "色とサイズの選択肢が多い定番スニーカー。足幅と日本サイズを確認してください。",
        featured: false
      },
      {
        category: "men",
        brand: "THE NORTH FACE",
        icon: "🎒",
        search: "THE NORTH FACE BC Fuse Box II NM82255",
        titleEn: "THE NORTH FACE BC Fuse Box II Backpack",
        titleJa: "THE NORTH FACE BC Fuse Box II バックパック",
        descEn: "A structured backpack popular for commuting, study and travel; compare colour, capacity and authorised sellers.",
        descJa: "通勤、通学、旅行に使いやすいボックス型バックパック。色、容量、正規販売者を比較できます。",
        featured: false
      },
      {
        category: "men",
        brand: "Champion",
        icon: "🧥",
        search: "Champion Reverse Weave メンズ スウェット パーカー",
        titleEn: "Champion Reverse Weave Sweatshirt or Hoodie",
        titleJa: "Champion Reverse Weave スウェット・パーカー",
        descEn: "A recognisable casualwear line for layered street and lounge styling; check fit and material weight.",
        descJa: "街着や重ね着に使いやすい定番カジュアルウェア。フィットと生地厚を確認できます。",
        featured: false
      },
      {
        category: "men",
        brand: "Soundcore",
        icon: "🎧",
        search: "Soundcore Liberty 4 Pro ワイヤレスイヤホン",
        titleEn: "Soundcore Liberty 4 Pro Wireless Earbuds",
        titleJa: "Soundcore Liberty 4 Pro ワイヤレスイヤホン",
        descEn: "Premium true-wireless earbuds for commuting, calls, exercise and travel; compare colours and bundles.",
        descJa: "通勤、通話、運動、旅行に使える上位ワイヤレスイヤホン。色とセット内容を比較できます。",
        featured: false
      },
      {
        category: "men",
        brand: "Oakley",
        icon: "🕶️",
        search: "Oakley Holbrook サングラス 国内正規品",
        titleEn: "Oakley Holbrook Sunglasses",
        titleJa: "Oakley Holbrook サングラス",
        descEn: "A bold branded eyewear style for outdoor and casual use; prioritise authorised sellers and lens specifications.",
        descJa: "アウトドアやカジュアルに合うブランドサングラス。正規販売者とレンズ仕様を重視してください。",
        featured: false
      },

      // More branded picks for boys and teens.
      {
        category: "boys",
        brand: "Minecraft",
        icon: "⛏️",
        search: "Minecraft Nintendo Switch ソフト",
        titleEn: "Minecraft for Nintendo Switch",
        titleJa: "Minecraft Nintendo Switch ソフト",
        descEn: "Creative sandbox gaming for children, teens and families; confirm the edition, language and online requirements.",
        descJa: "子ども、ティーン、家族で楽しめる創造型ゲーム。版、言語、オンライン条件をご確認ください。",
        featured: false
      },
      {
        category: "boys",
        brand: "TOMICA",
        icon: "🚗",
        search: "TOMICA トミカ 大型 プレイセット タカラトミー",
        titleEn: "TOMICA Vehicle Playsets",
        titleJa: "TOMICA トミカ 大型プレイセット",
        descEn: "Japanese vehicle playsets for imaginative play; check included cars, required batteries and recommended age.",
        descJa: "想像力を育てる日本のミニカー玩具。付属車両、電池、対象年齢をご確認ください。",
        featured: false
      },
      {
        category: "boys",
        brand: "PLARAIL",
        icon: "🚅",
        search: "PLARAIL 新幹線 レールセット タカラトミー",
        titleEn: "PLARAIL Shinkansen Train and Track Sets",
        titleJa: "PLARAIL 新幹線・レールセット",
        descEn: "Expandable Japanese railway toys with multiple train and track combinations; check contents and battery needs.",
        descJa: "列車とレールを拡張できる日本の鉄道玩具。セット内容と電池の要否を確認できます。",
        featured: false
      },
      {
        category: "boys",
        brand: "adidas Kids",
        icon: "👟",
        search: "adidas キッズ Grand Court 2.0 スニーカー ボーイズ",
        titleEn: "adidas Kids Grand Court 2.0 Sneakers",
        titleJa: "adidas キッズ Grand Court 2.0 スニーカー",
        descEn: "A versatile branded shoe for school and casual use; compare closure type, size and colour.",
        descJa: "通学や普段使いに便利なブランドスニーカー。留め具、サイズ、色を比較できます。",
        featured: false
      },
      {
        category: "boys",
        brand: "New Balance Kids",
        icon: "👟",
        search: "New Balance キッズ 373 スニーカー ボーイズ",
        titleEn: "New Balance Kids 373 Sneakers",
        titleJa: "New Balance キッズ 373 スニーカー",
        descEn: "A popular everyday children's sneaker line; verify foot width, closure and Japanese sizing.",
        descJa: "日常使いに選びやすいキッズスニーカー。足幅、留め具、日本サイズを確認してください。",
        featured: false
      },
      {
        category: "boys",
        brand: "THE NORTH FACE Kids",
        icon: "🎒",
        search: "THE NORTH FACE キッズ リュック Roundy 22",
        titleEn: "THE NORTH FACE Kids Roundy Backpack",
        titleJa: "THE NORTH FACE キッズ Roundy バックパック",
        descEn: "A branded backpack for school trips, lessons and day outings; compare capacity, fit and seller credentials.",
        descJa: "遠足、習い事、日帰り外出に便利なブランドリュック。容量、フィット、販売者を比較できます。",
        featured: false
      },
      {
        category: "boys",
        brand: "Crocs",
        icon: "🩴",
        search: "Crocs Kids Classic Clog ボーイズ",
        titleEn: "Crocs Kids Classic Clog",
        titleJa: "Crocs Kids Classic Clog",
        descEn: "Easy-care casual footwear in many colours and sizes; confirm genuine seller, fit and safety for the intended activity.",
        descJa: "多彩な色とサイズから選べる手入れしやすい履物。正規販売者、フィット、使用場面をご確認ください。",
        featured: false
      },
      {
        category: "boys",
        brand: "CASIO",
        icon: "⌚",
        search: "CASIO キッズ デジタル 腕時計 ボーイズ",
        titleEn: "CASIO Digital Watch for Boys and Teens",
        titleJa: "CASIO 男の子・ティーン向けデジタル腕時計",
        descEn: "Simple and durable digital watches for school-age users and teens; compare case size and water resistance.",
        descJa: "学齢期からティーンに使いやすいシンプルなデジタル時計。ケースサイズと防水性能を比較できます。",
        featured: false
      },

      {
        category: "creator",
        brand: "Ulanzi",
        icon: "📱",
        asin: "B09M8B8KNB",
        titleEn: "Ulanzi MT-44 Extendable Smartphone Tripod",
        titleJa: "Ulanzi MT-44 伸縮式スマートフォン三脚",
        descEn: "A compact tripod and selfie-stick combination for mobile video, livestreaming and travel recording.",
        descJa: "スマホ動画、ライブ配信、旅行撮影に使いやすい、三脚と自撮り棒の一体型モデル。",
        featured: true
      },
      {
        category: "creator",
        brand: "DJI",
        icon: "🎙️",
        asin: "B0DDL8WGH5",
        titleEn: "DJI Mic Mini Wireless Microphone Kit",
        titleJa: "DJI Mic Mini ワイヤレスマイクセット",
        descEn: "A compact two-transmitter wireless audio kit suited to interviews, demonstrations, vlogs and short-form video.",
        descJa: "インタビュー、商品紹介、Vlog、ショート動画に使いやすい、送信機2台の小型ワイヤレス音声セット。",
        featured: true
      },
      {
        category: "creator",
        brand: "Anker",
        icon: "📹",
        asin: "B09MHPFV4Q",
        titleEn: "Anker PowerConf C200 2K Webcam",
        titleJa: "Anker PowerConf C200 2Kウェブカメラ",
        descEn: "A practical 2K webcam for remote meetings, online teaching, presentations and desktop recording.",
        descJa: "オンライン会議、授業、プレゼン、デスク撮影に適した実用的な2Kウェブカメラ。",
        featured: false
      },
      {
        category: "creator",
        brand: "Logicool",
        icon: "🖥️",
        asin: "B07QQR6G5N",
        titleEn: "Logicool C920n Full HD Webcam",
        titleJa: "Logicool C920n フルHDウェブカメラ",
        descEn: "A widely used Full HD option for reliable video calls, webinars and home-office communication.",
        descJa: "ビデオ会議、ウェビナー、在宅業務で安定して使いやすい定番のフルHDモデル。",
        featured: false
      },
      {
        category: "creator",
        brand: "Ulanzi",
        icon: "💡",
        asin: "B08MDQ3CJY",
        titleEn: "Ulanzi VL49 RGB Pocket Video Light",
        titleJa: "Ulanzi VL49 RGB ポケットビデオライト",
        descEn: "A portable RGB light for product shots, portraits, creative backgrounds and compact video setups.",
        descJa: "商品撮影、人物撮影、背景演出、小型動画セットに使える携帯型RGBライト。",
        featured: false
      },
      {
        category: "creator",
        brand: "RØDE",
        icon: "🎤",
        asin: "B0BM8HQL6L",
        titleEn: "RØDE VideoMicro II On-Camera Microphone",
        titleJa: "RØDE VideoMicro II オンカメラマイク",
        descEn: "A compact directional microphone for cameras and compatible mobile content-production setups.",
        descJa: "カメラや対応するモバイル撮影環境で使える、小型の指向性オンカメラマイク。",
        featured: false
      },

      {
        category: "storage",
        brand: "Samsung",
        icon: "💾",
        asin: "B0BQBQG3N6",
        titleEn: "Samsung T7 Shield Portable SSD 1TB",
        titleJa: "Samsung T7 Shield ポータブルSSD 1TB",
        descEn: "Portable solid-state storage for research data, photographs, website backups and high-resolution video files.",
        descJa: "研究データ、写真、ウェブサイトのバックアップ、高解像度動画の保存に便利なポータブルSSD。",
        featured: true
      },
      {
        category: "storage",
        brand: "SanDisk",
        icon: "🗄️",
        asin: "B08P4CN4YC",
        titleEn: "SanDisk Extreme Portable SSD 1TB",
        titleJa: "SanDisk Extreme ポータブルSSD 1TB",
        descEn: "A compact external SSD for mobile workflows, field data transfer and everyday backup tasks.",
        descJa: "モバイル作業、フィールドデータの移動、日常的なバックアップに使いやすい小型外付けSSD。",
        featured: false
      },
      {
        category: "storage",
        brand: "Anker",
        icon: "🔌",
        asin: "B0BQMSXFP7",
        titleEn: "Anker 332 USB-C Hub (5-in-1)",
        titleJa: "Anker 332 USB-Cハブ（5-in-1）",
        descEn: "Adds commonly needed ports to compatible laptops and tablets for displays, accessories and data transfer.",
        descJa: "対応するノートPCやタブレットに、映像出力、周辺機器、データ転送用の端子を追加できます。",
        featured: false
      },
      {
        category: "storage",
        brand: "UGREEN",
        icon: "🧩",
        asin: "B093FKT9BF",
        titleEn: "UGREEN Revodok 107 USB-C Hub (7-in-1)",
        titleJa: "UGREEN Revodok 107 USB-Cハブ（7-in-1）",
        descEn: "A multiport hub designed for presentations, card reading, wired networking and expanded desktop connectivity.",
        descJa: "プレゼン、カード読み取り、有線ネットワーク、デスク環境の拡張に対応する多機能ハブ。",
        featured: false
      },
      {
        category: "storage",
        brand: "Anker",
        icon: "🔋",
        asin: "B0CDBX2DY3",
        titleEn: "Anker Nano Power Bank 10,000mAh, 30W",
        titleJa: "Anker Nano Power Bank 10,000mAh・30W",
        descEn: "A portable battery with an integrated USB-C cable for commuting, travel, fieldwork and emergency charging.",
        descJa: "通勤、旅行、フィールドワーク、緊急充電に便利なUSB-Cケーブル一体型モバイルバッテリー。",
        featured: true
      },
      {
        category: "storage",
        brand: "Apple",
        icon: "⚡",
        asin: "B08L6JYFYX",
        titleEn: "Apple 20W USB-C Power Adapter",
        titleJa: "Apple 20W USB-C電源アダプタ",
        descEn: "A compact charging adapter for compatible Apple devices; check cable and device compatibility before ordering.",
        descJa: "対応するApple製品向けの小型充電アダプタ。購入前にケーブルと機器の互換性をご確認ください。",
        featured: false
      },

      {
        category: "office",
        brand: "Logicool",
        icon: "🖱️",
        asin: "B0B1Q6VB16",
        titleEn: "Logicool MX Master 3S Productivity Mouse",
        titleJa: "Logicool MX Master 3S 高機能マウス",
        descEn: "A quiet, multi-device productivity mouse for document work, data analysis, editing and long desktop sessions.",
        descJa: "文書作成、データ分析、編集、長時間のデスク作業に適した静音・マルチデバイス対応マウス。",
        featured: true
      },
      {
        category: "office",
        brand: "Logicool",
        icon: "⌨️",
        asin: "B0CJR8Y56J",
        titleEn: "Logicool Pebble Keys 2 K380s Keyboard",
        titleJa: "Logicool Pebble Keys 2 K380s キーボード",
        descEn: "A compact multi-device keyboard suited to a tidy desk, mobile work and switching between computers and tablets.",
        descJa: "省スペースの机、モバイル作業、PCとタブレットの切り替えに便利な小型マルチデバイスキーボード。",
        featured: false
      },
      {
        category: "office",
        brand: "BoYata",
        icon: "💻",
        asin: "B07H774Q42",
        titleEn: "BoYata Adjustable Aluminium Laptop Stand",
        titleJa: "BoYata 高さ・角度調整式アルミ製ノートPCスタンド",
        descEn: "Raises a laptop for a more organised workstation and adjustable viewing position.",
        descJa: "ノートPCの高さと角度を調整し、より整理された作業環境をつくるスタンド。",
        featured: false
      },
      {
        category: "office",
        brand: "BenQ",
        icon: "🪔",
        asin: "B08WT889V3",
        titleEn: "BenQ ScreenBar Halo Monitor Light",
        titleJa: "BenQ ScreenBar Halo モニターライト",
        descEn: "A monitor-mounted desk light intended to illuminate the workspace without occupying desk space.",
        descJa: "机上スペースを使わず、作業面を照らすモニター取付型デスクライト。",
        featured: false
      },
      {
        category: "office",
        brand: "CASIO",
        icon: "🧮",
        asin: "B0CGTR9F4S",
        titleEn: "CASIO fx-JP900CW Scientific Calculator",
        titleJa: "CASIO fx-JP900CW 関数電卓",
        descEn: "A scientific calculator for education, technical work and calculations that do not require a computer.",
        descJa: "教育、技術業務、PCを使わない計算作業に適した関数電卓。",
        featured: false
      },
      {
        category: "office",
        brand: "ScanSnap",
        icon: "📄",
        asin: "B09R7GK5Z9",
        titleEn: "ScanSnap iX1300 Compact Document Scanner",
        titleJa: "ScanSnap iX1300 コンパクトドキュメントスキャナー",
        descEn: "A compact scanner for digitising research papers, receipts, forms and office documents.",
        descJa: "論文、領収書、申請書、オフィス文書のデジタル化に便利なコンパクトスキャナー。",
        featured: true
      },

      {
        category: "field",
        brand: "Apple",
        icon: "📍",
        asin: "B0GJTXZHDX",
        titleEn: "Apple AirTag 4-Pack",
        titleJa: "Apple AirTag 4個入り",
        descEn: "Item trackers for compatible Apple devices, useful for luggage, keys and frequently carried equipment.",
        descJa: "対応するApple製品で使用できる紛失防止タグ。荷物、鍵、持ち運ぶ機材の管理に便利です。",
        featured: false
      },
      {
        category: "field",
        brand: "Soundcore",
        icon: "🎧",
        asin: "B0C6MK4LXR",
        titleEn: "Soundcore Space One Noise-Cancelling Headphones",
        titleJa: "Soundcore Space One ノイズキャンセリングヘッドホン",
        descEn: "Over-ear headphones for focused work, commuting, travel and listening in noisy environments.",
        descJa: "集中作業、通勤、旅行、騒がしい環境でのリスニングに使いやすいオーバーイヤー型ヘッドホン。",
        featured: false
      },
      {
        category: "field",
        brand: "Black Diamond",
        icon: "🔦",
        asin: "B09NQK87MN",
        titleEn: "Black Diamond Spot 400-R Headlamp",
        titleJa: "Black Diamond Spot 400-R ヘッドランプ",
        descEn: "A rechargeable headlamp for field observations, camping, emergencies and low-light outdoor work.",
        descJa: "フィールド観察、キャンプ、防災、暗所での屋外作業に適した充電式ヘッドランプ。",
        featured: true
      },
      {
        category: "field",
        brand: "THERMOS",
        icon: "🥤",
        asin: "B0D9XSWXGW",
        titleEn: "THERMOS JNL-S600 Vacuum-Insulated Bottle",
        titleJa: "THERMOS JNL-S600 真空断熱ケータイマグ",
        descEn: "A reusable insulated bottle for commuting, field visits, office work and day trips.",
        descJa: "通勤、現地調査、オフィス、日帰り旅行に便利な再利用可能な真空断熱ボトル。",
        featured: false
      },
      {
        category: "field",
        brand: "Nikon",
        icon: "🔭",
        asin: "B00B7FP3G8",
        titleEn: "Nikon ACULON A211 8×42 Binoculars",
        titleJa: "Nikon ACULON A211 8×42 双眼鏡",
        descEn: "General-purpose binoculars for birdwatching, landscape observation, events and outdoor field activities.",
        descJa: "野鳥観察、景観観察、イベント、屋外フィールド活動に使える汎用双眼鏡。",
        featured: false
      },
      {
        category: "field",
        brand: "Anker",
        icon: "🧊",
        asin: "B09TT8GZK9",
        titleEn: "Anker 3-in-1 Cube with MagSafe",
        titleJa: "Anker 3-in-1 Cube with MagSafe",
        descEn: "A compact charging station for compatible Apple devices; confirm MagSafe and device compatibility first.",
        descJa: "対応するApple製品向けの小型充電ステーション。MagSafeと機器の互換性を事前にご確認ください。",
        featured: false
      },

      {
        category: "services",
        brand: "Amazon",
        icon: "📚",
        url: "https://www.amazon.co.jp/kindle-dbs/hz/signup?tag=digitalecosph-22",
        titleEn: "Kindle Unlimited",
        titleJa: "Kindle Unlimited",
        descEn: "A digital-reading subscription. Check the current catalogue, eligibility, trial terms and monthly fee on Amazon.",
        descJa: "電子書籍の読み放題サービス。対象作品、利用条件、無料体験、月額料金はAmazonでご確認ください。",
        featured: true
      },
      {
        category: "services",
        brand: "Amazon",
        icon: "🎧",
        url: "https://www.amazon.co.jp/b/?node=5816607051&tag=digitalecosph-22",
        titleEn: "Audible",
        titleJa: "Audible",
        descEn: "An audiobook and spoken-content service. Available titles, plans and trial conditions may change.",
        descJa: "オーディオブック・音声コンテンツのサービス。対象作品、プラン、無料体験条件は変更される場合があります。",
        featured: false
      },
      {
        category: "services",
        brand: "Amazon",
        icon: "📦",
        url: "https://www.amazon.co.jp/amazonprime?tag=digitalecosph-22",
        titleEn: "Amazon Prime",
        titleJa: "Amazon Prime",
        descEn: "A membership programme combining eligible delivery and digital benefits; review current terms before joining.",
        descJa: "対象配送やデジタル特典を含む会員プログラム。登録前に最新の条件をご確認ください。",
        featured: true
      },
      {
        category: "services",
        brand: "Amazon",
        icon: "🎵",
        url: "https://www.amazon.co.jp/music/unlimited/?tag=digitalecosph-22",
        titleEn: "Amazon Music Unlimited",
        titleJa: "Amazon Music Unlimited",
        descEn: "A music-streaming subscription with plan and trial details controlled by Amazon.",
        descJa: "Amazonが提供する音楽ストリーミング定額サービス。プランや無料体験の詳細をご確認ください。",
        featured: false
      },
      {
        category: "services",
        brand: "Amazon",
        icon: "🎓",
        url: "https://www.amazon.co.jp/b?ie=UTF8&node=2410972051&tag=digitalecosph-22",
        titleEn: "Prime Student",
        titleJa: "Prime Student",
        descEn: "A Prime membership option for eligible students. Eligibility verification and current terms apply.",
        descJa: "対象学生向けのPrime会員プラン。学生資格の確認と最新の利用条件が適用されます。",
        featured: false
      },
      {
        category: "services",
        brand: "Amazon",
        icon: "🏢",
        url: "https://www.amazon.co.jp/tryAB?tag=digitalecosph-22",
        titleEn: "Amazon Business",
        titleJa: "Amazon Business",
        descEn: "A purchasing account for eligible organisations and professionals; check registration requirements and features.",
        descJa: "対象となる法人・個人事業者向けの購買アカウント。登録条件と機能をご確認ください。",
        featured: false
      },

      // More branded one-piece dresses and women's fashion.
      {
        category: "dresses",
        brand: "FRAY I.D",
        icon: "👗",
        search: "FRAY I.D レディース ワンピース ドレス",
        titleEn: "FRAY I.D Occasion & Lace Dresses",
        titleJa: "FRAY I.D オケージョン・レースワンピース",
        descEn: "Refined dresses for dinners, parties and formal occasions; compare season, fit, colour and seller authenticity.",
        descJa: "食事会、パーティー、フォーマル場面に合う上品なワンピース。季節、サイズ感、色、販売者をご確認ください。",
        featured: false
      },
      {
        category: "dresses",
        brand: "CELFORD",
        icon: "✨",
        search: "CELFORD レディース ワンピース ドレス",
        titleEn: "CELFORD Elegant Women's Dresses",
        titleJa: "CELFORD エレガントワンピース",
        descEn: "Elegant, feminine dresses suited to work events and special occasions; check the current collection and sizing.",
        descJa: "仕事の行事や特別な日に合わせやすいエレガントなワンピース。最新コレクションとサイズをご確認ください。",
        featured: false
      },
      {
        category: "dresses",
        brand: "LILY BROWN",
        icon: "🌸",
        search: "LILY BROWN レディース ワンピース",
        titleEn: "LILY BROWN Vintage-Inspired Dresses",
        titleJa: "LILY BROWN ヴィンテージ風ワンピース",
        descEn: "Distinctive prints and retro-inspired silhouettes for expressive styling; compare colours, fabrics and sizes.",
        descJa: "印象的な柄とレトロ調シルエットが特徴。色、素材、サイズを比較してください。",
        featured: false
      },
      {
        category: "dresses",
        brand: "Mila Owen",
        icon: "🧶",
        search: "Mila Owen レディース ニット ワンピース",
        titleEn: "Mila Owen Knit & Shirt Dresses",
        titleJa: "Mila Owen ニット・シャツワンピース",
        descEn: "Modern minimalist dresses for office and casual wardrobes; verify fabric, length and fit notes.",
        descJa: "オフィスにもカジュアルにも取り入れやすいモダンでミニマルなワンピース。素材、丈、サイズ感をご確認ください。",
        featured: false
      },
      {
        category: "dresses",
        brand: "Calvin Klein",
        icon: "🖤",
        search: "Calvin Klein レディース ワンピース ドレス",
        titleEn: "Calvin Klein Women's Dresses",
        titleJa: "Calvin Klein レディースドレス",
        descEn: "Clean branded dresses ranging from casual silhouettes to polished occasion styles; confirm Japanese sizing and seller.",
        descJa: "カジュアルから上品なオケージョンまで選べる洗練されたブランドドレス。日本サイズと販売者をご確認ください。",
        featured: false
      },
      {
        category: "dresses",
        brand: "Tommy Hilfiger",
        icon: "🔵",
        search: "Tommy Hilfiger レディース ワンピース",
        titleEn: "Tommy Hilfiger Women's Dresses",
        titleJa: "Tommy Hilfiger レディースワンピース",
        descEn: "Preppy branded dresses for casual and smart-casual outfits; compare colourways, sizes and official-store availability.",
        descJa: "カジュアルやスマートカジュアルに合うプレッピーなブランドワンピース。色、サイズ、公式ストア在庫を比較してください。",
        featured: false
      },
      {
        category: "dresses",
        brand: "adidas",
        icon: "🏃‍♀️",
        search: "adidas レディース ワンピース ドレス Originals",
        titleEn: "adidas Women's Sport Dresses",
        titleJa: "adidas レディーススポーツワンピース",
        descEn: "Sport-inspired branded dresses for relaxed streetwear and warm-weather styling; check current cuts and sizes.",
        descJa: "リラックスしたストリートスタイルや暖かい季節に合うスポーツ系ワンピース。最新の形とサイズをご確認ください。",
        featured: false
      },

      // Women's lingerie and everyday innerwear.
      {
        category: "lingerie",
        brand: "Triumph",
        icon: "🌹",
        search: "Triumph トリンプ レディース ブラ ショーツ セット 公式",
        titleEn: "Triumph Bra & Shorts Sets",
        titleJa: "Triumph ブラ＆ショーツセット",
        descEn: "Coordinated lingerie sets in multiple support styles; use the brand size guide and confirm return conditions.",
        descJa: "さまざまなサポートタイプから選べるコーディネートセット。ブランドのサイズ表と返品条件をご確認ください。",
        featured: true,
        badgeEn: "Popular lingerie",
        badgeJa: "人気ランジェリー"
      },
      {
        category: "lingerie",
        brand: "Wing / Wacoal",
        icon: "🌿",
        search: "Wing Wacoal レディース オーガニックコットン インナー",
        titleEn: "Wing / Wacoal Cotton Innerwear",
        titleJa: "Wing / Wacoal コットンインナー",
        descEn: "Comfort-focused everyday innerwear, including breathable and cotton-rich options; check material composition and sizing.",
        descJa: "通気性やコットン混素材など、快適性を重視した日常用インナー。素材構成とサイズをご確認ください。",
        featured: false
      },
      {
        category: "lingerie",
        brand: "Calvin Klein",
        icon: "◻️",
        search: "Calvin Klein レディース Modern Cotton ブラ ショーツ",
        titleEn: "Calvin Klein Modern Cotton Underwear",
        titleJa: "Calvin Klein Modern Cotton アンダーウェア",
        descEn: "Recognisable logo-band underwear and bralettes for casual everyday wear; verify genuine seller and size chart.",
        descJa: "ロゴバンドで知られる日常向けアンダーウェアとブラレット。正規販売者とサイズ表をご確認ください。",
        featured: true,
        badgeEn: "Iconic basic",
        badgeJa: "定番人気"
      },
      {
        category: "lingerie",
        brand: "GUNZE KIREILABO",
        icon: "☁️",
        search: "GUNZE KIREILABO レディース 縫い目 なし インナー",
        titleEn: "GUNZE KIREILABO Seamless Innerwear",
        titleJa: "GUNZE KIREILABO シームレスインナー",
        descEn: "Low-seam and comfort-oriented basics designed to sit smoothly under clothing; compare fabric and coverage.",
        descJa: "衣服の下で響きにくい、縫い目の少ない快適志向のインナー。素材とカバー範囲をご確認ください。",
        featured: false
      },
      {
        category: "lingerie",
        brand: "PEACH JOHN",
        icon: "🍑",
        search: "PEACH JOHN レディース ブラ ショーツ セット",
        titleEn: "PEACH JOHN Bra & Panty Sets",
        titleJa: "PEACH JOHN ブラ＆ショーツセット",
        descEn: "Fashion-forward lingerie in varied colours and silhouettes; check seller, size guide and return eligibility.",
        descJa: "多彩な色とシルエットを展開するファッション性の高いランジェリー。販売者、サイズ表、返品可否をご確認ください。",
        featured: false
      },
      {
        category: "lingerie",
        brand: "ATSUGI",
        icon: "🧦",
        search: "ATSUGI アツギ レディース インナー タイツ",
        titleEn: "ATSUGI Innerwear, Stockings & Tights",
        titleJa: "ATSUGI インナー・ストッキング・タイツ",
        descEn: "Practical Japanese hosiery and innerwear for work, daily outfits and seasonal layering; verify denier and size.",
        descJa: "仕事、日常、季節の重ね着に使いやすい日本ブランドのレッグウェアとインナー。デニールとサイズをご確認ください。",
        featured: false
      },
      {
        category: "lingerie",
        brand: "Tuche / GUNZE",
        icon: "🫧",
        search: "Tuche GUNZE レディース ショーツ インナー",
        titleEn: "Tuche / GUNZE Women's Underwear",
        titleJa: "Tuche / GUNZE レディースアンダーウェア",
        descEn: "Everyday underwear balancing comfort, smooth fits and modern styling; compare pack quantity, fabric and size.",
        descJa: "快適性、すっきりしたフィット、現代的なデザインを両立した日常用アンダーウェア。枚数、素材、サイズをご確認ください。",
        featured: false
      },

      // Jewellery from recognisable official or established brand stores.
      {
        category: "jewelry",
        brand: "Swarovski",
        icon: "✨",
        search: "Swarovski Una Angelic ピアス 公式",
        titleEn: "Swarovski Una Angelic Earrings",
        titleJa: "Swarovski Una Angelic イヤリング・ピアス",
        descEn: "A popular crystal earring line for gifting and formal styling; confirm fastening type, colour and official seller.",
        descJa: "ギフトやフォーマルコーデに人気のクリスタルイヤリングシリーズ。留め具、色、正規販売者をご確認ください。",
        featured: false
      },
      {
        category: "jewelry",
        brand: "Pandora",
        icon: "🔗",
        search: "PANDORA Jewelry Japan チャーム ブレスレット 公式",
        titleEn: "Pandora Charm Bracelets",
        titleJa: "Pandora チャームブレスレット",
        descEn: "Customisable bracelets and charms for personal gifts and collections; verify bracelet size, metal and official seller.",
        descJa: "チャームを組み合わせて楽しめるブレスレット。サイズ、金属素材、正規販売者をご確認ください。",
        featured: true,
        badgeEn: "Personal gift",
        badgeJa: "パーソナルギフト"
      },
      {
        category: "jewelry",
        brand: "4℃",
        icon: "❄️",
        search: "4℃ ヨンドシー レディース ネックレス 公式",
        titleEn: "4℃ Women's Necklaces",
        titleJa: "4℃ レディースネックレス",
        descEn: "Delicate Japanese jewellery suited to birthdays, anniversaries and understated daily wear; confirm material and chain length.",
        descJa: "誕生日、記念日、控えめな日常使いに合う繊細な日本ブランドジュエリー。素材とチェーン長をご確認ください。",
        featured: false
      },
      {
        category: "jewelry",
        brand: "Vivienne Westwood",
        icon: "🪐",
        search: "Vivienne Westwood レディース オーブ ネックレス",
        titleEn: "Vivienne Westwood Orb Necklaces",
        titleJa: "Vivienne Westwood オーブネックレス",
        descEn: "Statement jewellery featuring the brand's recognisable orb motif; verify authenticity, materials and seller reputation.",
        descJa: "象徴的なオーブモチーフの存在感あるジュエリー。正規性、素材、販売者評価をご確認ください。",
        featured: true,
        badgeEn: "Statement style",
        badgeJa: "個性派"
      },
      {
        category: "jewelry",
        brand: "Kate Spade",
        icon: "♠️",
        search: "Kate Spade レディース ピアス ネックレス",
        titleEn: "Kate Spade Earrings & Necklaces",
        titleJa: "Kate Spade ピアス・ネックレス",
        descEn: "Playful branded jewellery for colourful gifts and everyday styling; confirm dimensions and seller authenticity.",
        descJa: "カラフルなギフトや日常コーデに合う遊び心のあるブランドジュエリー。サイズと正規性をご確認ください。",
        featured: false
      },
      {
        category: "jewelry",
        brand: "Daniel Wellington",
        icon: "⭕",
        search: "Daniel Wellington レディース ブレスレット ジュエリー",
        titleEn: "Daniel Wellington Women's Bracelets",
        titleJa: "Daniel Wellington レディースブレスレット",
        descEn: "Minimal bracelets designed to coordinate with watches and simple outfits; check finish, size and official seller.",
        descJa: "腕時計やシンプルな服装と合わせやすいミニマルなブレスレット。仕上げ、サイズ、正規販売者をご確認ください。",
        featured: false
      },
      {
        category: "jewelry",
        brand: "LARA Christie",
        icon: "💍",
        search: "LARA Christie レディース ダイヤモンド ネックレス",
        titleEn: "LARA Christie Diamond Necklaces",
        titleJa: "LARA Christie ダイヤモンドネックレス",
        descEn: "Gift-oriented fine-jewellery designs in precious-metal options; verify stone, certification, material and seller details.",
        descJa: "貴金属素材を選べるギフト向けジュエリー。石、鑑別・証明、素材、販売者情報をご確認ください。",
        featured: false
      },

      // OM SYSTEM / Olympus camera collection.
      {
        category: "camera",
        brand: "Olympus",
        icon: "📸",
        search: "Olympus Tough TG-6 防水カメラ 中古 新品",
        titleEn: "Olympus Tough TG-6 — Legacy Listings",
        titleJa: "Olympus Tough TG-6 旧モデル在庫",
        descEn: "The earlier Tough model may appear as remaining or used stock; check condition, warranty, seller and included accessories carefully.",
        descJa: "旧型Toughモデルは在庫品または中古品として表示される場合があります。状態、保証、販売者、付属品を慎重にご確認ください。",
        featured: false
      },
      {
        category: "camera",
        brand: "OM SYSTEM",
        icon: "🌊",
        search: "OM SYSTEM TG-7 防水プロテクター 水中ハウジング",
        titleEn: "TG-7 Underwater Housing & Protectors",
        titleJa: "TG-7 水中ハウジング・防水プロテクター",
        descEn: "Underwater accessories for deeper-diving and protected shooting; confirm exact compatibility with the camera model before purchase.",
        descJa: "より深い水中撮影や保護撮影向けアクセサリー。購入前にカメラ機種との正確な互換性をご確認ください。",
        featured: false
      },
      {
        category: "camera",
        brand: "OM SYSTEM",
        icon: "🔬",
        search: "OM SYSTEM LG-1 LED ライトガイド TG-7 TG-6",
        titleEn: "OM SYSTEM LG-1 LED Light Guide",
        titleJa: "OM SYSTEM LG-1 LEDライトガイド",
        descEn: "A close-up lighting accessory for compatible Tough cameras; verify model compatibility and shooting-distance requirements.",
        descJa: "対応するToughカメラの接写用ライティングアクセサリー。機種互換性と撮影距離をご確認ください。",
        featured: false
      },
      {
        category: "camera",
        brand: "OM SYSTEM",
        icon: "💡",
        search: "OM SYSTEM FD-1 フラッシュディフューザー TG-7 TG-6",
        titleEn: "OM SYSTEM FD-1 Flash Diffuser",
        titleJa: "OM SYSTEM FD-1 フラッシュディフューザー",
        descEn: "A diffuser for close-up illumination with compatible Tough cameras; check supported models and usage notes.",
        descJa: "対応するToughカメラで接写光を拡散するアクセサリー。対応機種と使用条件をご確認ください。",
        featured: false
      },
      {
        category: "camera",
        brand: "OM SYSTEM",
        icon: "🏔️",
        search: "OM SYSTEM OM-5 Mark II ボディ レンズキット",
        titleEn: "OM SYSTEM OM-5 Mark II Mirrorless Camera",
        titleJa: "OM SYSTEM OM-5 Mark II ミラーレスカメラ",
        descEn: "A compact interchangeable-lens option for travel, outdoor and creative photography; compare body-only and lens-kit packages.",
        descJa: "旅行、アウトドア、創作撮影に向く小型レンズ交換式カメラ。ボディ単体とレンズキットを比較してください。",
        featured: true,
        badgeEn: "Creator camera",
        badgeJa: "撮影向け"
      },

      // Current Apple product families; availability on Amazon Japan can vary.
      {
        category: "apple",
        brand: "Apple",
        icon: "📱",
        search: "Apple iPhone Air SIMフリー Amazon.co.jp",
        titleEn: "Apple iPhone Air",
        titleJa: "Apple iPhone Air",
        descEn: "A thin current-generation iPhone option; compare storage, colour, SIM-free status and seller information.",
        descJa: "薄型の現行iPhone。容量、色、SIMフリー表示、販売者情報を比較してください。",
        featured: true,
        badgeEn: "New design",
        badgeJa: "新デザイン"
      },
      {
        category: "apple",
        brand: "Apple",
        icon: "📱",
        search: "Apple iPhone 17 SIMフリー Amazon.co.jp",
        titleEn: "Apple iPhone 17",
        titleJa: "Apple iPhone 17",
        descEn: "A mainstream current iPhone for everyday photography, communication and content creation; check capacity and seller.",
        descJa: "日常の写真、連絡、コンテンツ制作に使いやすい現行iPhone。容量と販売者をご確認ください。",
        featured: false
      },
      {
        category: "apple",
        brand: "Apple",
        icon: "📱",
        search: "Apple iPhone 17e SIMフリー Amazon.co.jp",
        titleEn: "Apple iPhone 17e",
        titleJa: "Apple iPhone 17e",
        descEn: "A value-focused current iPhone; compare storage, colour and whether the listing is sold by a reliable seller.",
        descJa: "価格とのバランスを重視した現行iPhone。容量、色、信頼できる販売者かをご確認ください。",
        featured: true,
        badgeEn: "Value Apple",
        badgeJa: "コスパApple"
      },
      {
        category: "apple",
        brand: "Apple",
        icon: "📱",
        search: "Apple iPhone 16e SIMフリー Amazon.co.jp",
        titleEn: "Apple iPhone 16e",
        titleJa: "Apple iPhone 16e",
        descEn: "A previous-generation e-series iPhone that may offer attractive pricing; compare condition, storage, colour and warranty.",
        descJa: "価格面で魅力が出る場合のある前世代eシリーズ。状態、容量、色、保証をご確認ください。",
        featured: false
      },
      {
        category: "apple",
        brand: "Apple",
        icon: "💻",
        search: "Apple MacBook Air M5 13インチ 日本語キーボード",
        titleEn: "Apple MacBook Air with M5",
        titleJa: "Apple M5搭載 MacBook Air",
        descEn: "A thin laptop for writing, research, media and mobile work; compare 13-inch and 15-inch sizes, memory and storage.",
        descJa: "執筆、研究、メディア、モバイル作業に向く薄型ノートPC。13インチと15インチ、メモリ、ストレージを比較してください。",
        featured: true,
        badgeEn: "Creator laptop",
        badgeJa: "制作ノート"
      },
      {
        category: "apple",
        brand: "Apple",
        icon: "🖥️",
        search: "Apple MacBook Pro M5 14インチ 日本語キーボード",
        titleEn: "Apple MacBook Pro with M5",
        titleJa: "Apple M5搭載 MacBook Pro",
        descEn: "A higher-performance Mac notebook for demanding video, coding and professional workflows; compare chip, memory and storage.",
        descJa: "高度な動画、開発、専門業務に向く高性能Macノート。チップ、メモリ、ストレージを比較してください。",
        featured: false
      },
      {
        category: "apple",
        brand: "Apple",
        icon: "📲",
        search: "Apple iPad Air M4 11インチ Wi-Fi",
        titleEn: "Apple iPad Air with M4",
        titleJa: "Apple M4搭載 iPad Air",
        descEn: "A versatile tablet for editing, study, illustration and media; compare 11-inch and 13-inch versions and storage.",
        descJa: "編集、学習、イラスト、メディアに使いやすいタブレット。11インチと13インチ、容量を比較してください。",
        featured: true,
        badgeEn: "Creative tablet",
        badgeJa: "制作タブレット"
      },
      {
        category: "apple",
        brand: "Apple",
        icon: "📗",
        search: "Apple iPad mini A17 Pro Wi-Fi",
        titleEn: "Apple iPad mini with A17 Pro",
        titleJa: "Apple A17 Pro搭載 iPad mini",
        descEn: "A compact tablet for reading, travel, notes and portable media; compare storage and connectivity options.",
        descJa: "読書、旅行、メモ、携帯メディアに便利な小型タブレット。容量と通信モデルを比較してください。",
        featured: false
      },
      {
        category: "apple",
        brand: "Apple",
        icon: "🎧",
        search: "Apple AirPods Pro 3 MagSafe USB-C",
        titleEn: "Apple AirPods Pro 3",
        titleJa: "Apple AirPods Pro 3",
        descEn: "Premium wireless earbuds for calls, commuting and focused listening; compare official bundles and seller information.",
        descJa: "通話、通勤、集中リスニングに向くプレミアムワイヤレスイヤホン。正規セットと販売者情報を比較してください。",
        featured: true,
        badgeEn: "Audio hot pick",
        badgeJa: "音響人気"
      },
      {
        category: "apple",
        brand: "Apple",
        icon: "⌚",
        search: "Apple Watch Series 11 GPS 日本",
        titleEn: "Apple Watch Series 11",
        titleJa: "Apple Watch Series 11",
        descEn: "A current Apple smartwatch for notifications, activity and daily health tracking; compare case size, material and connectivity.",
        descJa: "通知、運動、日常の健康記録に使える現行Apple Watch。ケースサイズ、素材、通信方式を比較してください。",
        featured: false
      },

      // Current Lenovo lines for business, creative, everyday and gaming users.
      {
        category: "lenovo",
        brand: "Lenovo Yoga",
        icon: "🪶",
        search: "Lenovo Yoga Slim 7i Ultra Gen 11 Aura Edition 日本語キーボード",
        titleEn: "Yoga Slim 7i Ultra Gen 11 Aura Edition",
        titleJa: "Yoga Slim 7i Ultra Gen 11 Aura Edition",
        descEn: "An ultra-light premium Copilot+ laptop for mobile productivity and creative work; compare configuration and warranty.",
        descJa: "モバイル生産性と創作作業に向く超軽量プレミアムCopilot+ PC。構成と保証を比較してください。",
        featured: true,
        badgeEn: "Ultra-light AI PC",
        badgeJa: "超軽量AI PC"
      },
      {
        category: "lenovo",
        brand: "Lenovo ThinkPad",
        icon: "🔄",
        search: "Lenovo ThinkPad X1 2-in-1 Gen 11 Aura Edition 日本語キーボード",
        titleEn: "ThinkPad X1 2-in-1 Gen 11 Aura Edition",
        titleJa: "ThinkPad X1 2-in-1 Gen 11 Aura Edition",
        descEn: "A premium convertible business laptop for typing, presenting and pen-based workflows; compare configuration and included pen.",
        descJa: "入力、プレゼン、ペン作業に対応するプレミアム2-in-1ビジネスPC。構成とペン付属の有無をご確認ください。",
        featured: false
      },
      {
        category: "lenovo",
        brand: "Lenovo IdeaPad",
        icon: "💻",
        search: "Lenovo IdeaPad Slim 5a Gen 11 14 AMD 日本語キーボード",
        titleEn: "IdeaPad Slim 5a Gen 11",
        titleJa: "IdeaPad Slim 5a Gen 11",
        descEn: "A practical 14-inch AI laptop for study, home and everyday work; compare display, memory, storage and office-software bundles.",
        descJa: "学習、家庭、日常業務に使いやすい14型AIノートPC。画面、メモリ、ストレージ、Office付属を比較してください。",
        featured: true,
        badgeEn: "Everyday value",
        badgeJa: "日常コスパ"
      },
      {
        category: "lenovo",
        brand: "Lenovo IdeaPad",
        icon: "⚡",
        search: "Lenovo IdeaPad Slim 5x Gen 11 Snapdragon 13.3 日本語キーボード",
        titleEn: "IdeaPad Slim 5x Gen 11",
        titleJa: "IdeaPad Slim 5x Gen 11",
        descEn: "A compact Snapdragon-based laptop for mobility and connected work; verify app compatibility, memory and storage.",
        descJa: "携帯性と常時接続作業を重視したSnapdragon搭載小型PC。アプリ互換性、メモリ、ストレージをご確認ください。",
        featured: false
      },
      {
        category: "lenovo",
        brand: "Lenovo Yoga",
        icon: "🖊️",
        search: "Lenovo Yoga 7i 2-in-1 Aura Edition Gen 11 14 日本語キーボード",
        titleEn: "Yoga 7i 2-in-1 Aura Edition Gen 11",
        titleJa: "Yoga 7i 2-in-1 Aura Edition Gen 11",
        descEn: "A flexible 360-degree convertible for study, drawing, presenting and entertainment; compare pen and keyboard bundle details.",
        descJa: "学習、描画、プレゼン、エンタメに対応する360度回転式PC。ペンとキーボードのセット内容をご確認ください。",
        featured: false
      },
      {
        category: "lenovo",
        brand: "Lenovo Legion",
        icon: "🎮",
        search: "Lenovo Legion Go Gen 2 83N0 日本",
        titleEn: "Lenovo Legion Go Gen 2",
        titleJa: "Lenovo Legion Go Gen 2",
        descEn: "A high-performance handheld gaming PC; compare processor, storage, warranty and seller before purchase.",
        descJa: "高性能な携帯型ゲーミングPC。プロセッサー、容量、保証、販売者をご確認ください。",
        featured: true,
        badgeEn: "Gaming hot pick",
        badgeJa: "ゲーム人気"
      },
      {
        category: "lenovo",
        brand: "Lenovo Legion",
        icon: "🕹️",
        search: "Lenovo Legion Go S Gen 1 8.0 日本",
        titleEn: "Lenovo Legion Go S Gen 1",
        titleJa: "Lenovo Legion Go S Gen 1",
        descEn: "A compact handheld Windows gaming option; compare processor version, storage and operating-system configuration.",
        descJa: "小型のWindows携帯ゲーミングPC。プロセッサー、容量、OS構成を比較してください。",
        featured: false
      },
      {
        category: "lenovo",
        brand: "Lenovo ThinkVision",
        icon: "🖥️",
        search: "Lenovo ThinkVision M14 ポータブルモニター",
        titleEn: "Lenovo ThinkVision M14 Portable Monitor",
        titleJa: "Lenovo ThinkVision M14 モバイルモニター",
        descEn: "A portable second display for travel, presentations and dual-screen work; confirm USB-C video compatibility.",
        descJa: "旅行、プレゼン、2画面作業に便利なモバイルディスプレイ。USB-C映像出力の互換性をご確認ください。",
        featured: false
      }

    ];

    const state = {
      language: "en",
      category: "all",
      query: "",
      sort: "recommended",
      visible: INITIAL_VISIBLE
    };
    let deDictionary = {};
    let deCategories = {};

    const productGrid = document.getElementById("productGrid");
    const emptyState = document.getElementById("emptyState");
    const loadMoreButton = document.getElementById("loadMore");
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");
    const resultCount = document.getElementById("resultCount");
    const countLabel = document.getElementById("countLabel");
    const langEn = document.getElementById("langEn");
    const langJa = document.getElementById("langJa");

    function productUrl(product) {
      if (product.url) {
        return product.url;
      }

      if (product.search) {
        return `https://www.amazon.co.jp/s?k=${encodeURIComponent(product.search)}&tag=${TRACKING_ID}`;
      }

      return `https://www.amazon.co.jp/dp/${product.asin}/ref=nosim?tag=${TRACKING_ID}`;
    }

    function searchableText(product) {
      return [
        product.brand,
        product.titleEn,
        product.titleJa,
        product.descEn,
        product.descJa,
        product.search || "",
        categoryNames[product.category].en,
        categoryNames[product.category].ja
      ].join(" ").toLowerCase();
    }

    function getFilteredProducts() {
      const query = state.query.trim().toLowerCase();

      const filtered = products.filter((product) => {
        const categoryMatches =
          state.category === "all" || product.category === state.category;
        const searchMatches =
          !query || searchableText(product).includes(query);

        return categoryMatches && searchMatches;
      });

      if (state.sort === "az") {
        return [...filtered].sort((a, b) => {
          const aTitle = state.language === "ja" ? a.titleJa : a.titleEn;
          const bTitle = state.language === "ja" ? b.titleJa : b.titleEn;
          return aTitle.localeCompare(bTitle, state.language === "ja" ? "ja" : "en");
        });
      }

      if (state.sort === "category") {
        const order = ["women", "dresses", "lingerie", "jewelry", "men", "boys", "camera", "apple", "lenovo", "creator", "storage", "office", "field", "services"];
        return [...filtered].sort((a, b) => {
          const categoryDifference =
            order.indexOf(a.category) - order.indexOf(b.category);

          if (categoryDifference !== 0) {
            return categoryDifference;
          }

          const aTitle = state.language === "ja" ? a.titleJa : a.titleEn;
          const bTitle = state.language === "ja" ? b.titleJa : b.titleEn;
          return aTitle.localeCompare(bTitle, state.language === "ja" ? "ja" : "en");
        });
      }

      return filtered;
    }

    function cardMarkup(product) {
      const title = state.language === "ja" && product.titleJa ? product.titleJa : product.titleEn;
      const description = deDictionary.amazon_card_help || product.descEn || "";
      const category = deCategories[product.category] || categoryNames[product.category]?.en || product.category;
      const badge = deDictionary.amazon_curated || "Curated";
      const viewLabel = product.search ? (deDictionary.amazon_view_current || "See current Amazon listings") : (deDictionary.amazon_view_product || "View on Amazon.co.jp");
      const affiliateLabel = deDictionary.amazon_affiliate_link || "Affiliate link";

      return `
        <article class="card">
          <div class="visual ${product.category}" aria-hidden="true">
            <span class="brand-chip">${escapeHtml(product.brand)}</span>
            <span class="product-icon">${product.icon}</span>
            ${product.featured ? `<span class="pick-badge">${badge}</span>` : ""}
          </div>

          <div class="card-body">
            <p class="category-label">${escapeHtml(category)}</p>
            <h3 class="title">${escapeHtml(title)}</h3>
            <p class="description">${escapeHtml(description)}</p>

            <div class="card-meta">
              <span class="amazon-label">Amazon.co.jp</span>
              <span class="affiliate-label">${affiliateLabel}</span>
            </div>

            <a
              class="buy"
              href="${escapeAttribute(productUrl(product))}"
              rel="nofollow sponsored noopener noreferrer"
              aria-label="${escapeAttribute(viewLabel + ": " + title)}"
            >
              <span>${viewLabel}</span>
              <span class="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      `;
    }

    function escapeHtml(value) {
      return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function escapeAttribute(value) {
      return escapeHtml(value);
    }
    function updateStaticTranslations() {
      if (countLabel) countLabel.textContent = " " + (deDictionary.amazon_recommendations_shown || "recommendations shown");
    }

    function render() {
      const filtered = getFilteredProducts();
      const visibleProducts = filtered.slice(0, state.visible);

      productGrid.innerHTML = visibleProducts.map(cardMarkup).join("");
      resultCount.textContent = String(visibleProducts.length);

      emptyState.style.display = filtered.length === 0 ? "block" : "none";
      loadMoreButton.hidden = state.visible >= filtered.length || filtered.length === 0;
    }
    function setLanguage(language) { state.language = language || "en"; updateStaticTranslations(); render(); }

    document.querySelectorAll(".filter-btn").forEach((button) => {
      button.addEventListener("click", () => {
        state.category = button.dataset.filter;
        state.visible = INITIAL_VISIBLE;

        document.querySelectorAll(".filter-btn").forEach((item) => {
          const active = item === button;
          item.classList.toggle("active", active);
          item.setAttribute("aria-pressed", String(active));
        });

        render();
      });
    });

    searchInput.addEventListener("input", (event) => {
      state.query = event.target.value;
      state.visible = INITIAL_VISIBLE;
      render();
    });

    sortSelect.addEventListener("change", (event) => {
      state.sort = event.target.value;
      state.visible = INITIAL_VISIBLE;
      render();
    });

    loadMoreButton.addEventListener("click", () => {
      state.visible += LOAD_STEP;
      render();
    });

    document.querySelectorAll(".filter-btn").forEach((button, index) => {
      button.setAttribute("aria-pressed", String(index === 0));
    });

    document.getElementById("heroCount").textContent = String(products.length);

    document.addEventListener("shop:language-applied", event => {
      state.language = event.detail?.language || "en";
      deDictionary = event.detail?.dictionary || {};
      deCategories = event.detail?.categories || {};
      updateStaticTranslations();
      render();
    });
    updateStaticTranslations();
    render();

