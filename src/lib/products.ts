export type Category =
  | "Whisky"
  | "Vodka"
  | "Gin"
  | "Wine"
  | "Tequila"
  | "Champagne"
  | "Beer"
  | "Kenyan";

export interface Product {
  id: string;
  name: string;
  category: Category;
  subtitle: string;
  price: number;
  oldPrice?: number;
  rating: number;
  badge?: string;
  image: string;
  description?: string;
}

// Verified Unsplash photo IDs of actual alcohol bottles, grouped by category.
// Cycled per category so every product card shows a real bottle image.
const BOTTLE_PHOTOS: Record<Category, string[]> = {
  Whisky: [
    "1582819509237-d6c5c4c34a6b",
    "1527281400683-1aae777175f8",
    "1609951651556-5334e2706168",
    "1569529465841-dfecdab7503b",
    "1568213816046-0ee1c42bd559",
    "1582106245687-cbb466a9f07f",
  ],
  Vodka: [
    "1574671928146-5c89a8a18078",
    "1582106245687-cbb466a9f07f",
    "1569529465841-dfecdab7503b",
    "1568213816046-0ee1c42bd559",
  ],
  Gin: [
    "1574671928146-5c89a8a18078",
    "1582106245687-cbb466a9f07f",
    "1568213816046-0ee1c42bd559",
    "1514218953589-2d7d37efd2dc",
  ],
  Wine: [
    "1553361371-9b22f78e8b1d",
    "1510812431401-41d2bd2722f3",
    "1547595628-c61a29f496f0",
    "1474722883778-792e7990302f",
  ],
  Tequila: [
    "1582106245687-cbb466a9f07f",
    "1568213816046-0ee1c42bd559",
    "1574671928146-5c89a8a18078",
  ],
  Champagne: [
    "1514218953589-2d7d37efd2dc",
    "1549479896-09b54aa68b62",
    "1569529465841-dfecdab7503b",
    "1582106245687-cbb466a9f07f",
  ],
  Beer: [
    "1608270586620-248524c67de9",
    "1535958636474-b021ee887b13",
    "1571613914888-8c6e5e9a5b7e",
    "1618885472179-5e474019f2a9",
  ],
  Kenyan: [
    "1608270586620-248524c67de9",
    "1574671928146-5c89a8a18078",
    "1582106245687-cbb466a9f07f",
    "1535958636474-b021ee887b13",
  ],
};

const pic = (cat: Category, i: number) => {
  const pool = BOTTLE_PHOTOS[cat];
  const id = pool[i % pool.length];
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;
};

interface Seed {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  rating: number;
  badge?: string;
}

const seeds: Record<Category, Seed[]> = {
  Whisky: [
    { id: "jw-black", name: "Johnnie Walker Black Label", subtitle: "12yr Blended Scotch · 750ml", price: 5450, oldPrice: 6200, rating: 4.8, badge: "15% OFF" },
    { id: "jw-double", name: "Johnnie Walker Double Black", subtitle: "Blended Scotch · 750ml", price: 7200, rating: 4.7 },
    { id: "jw-red", name: "Johnnie Walker Red Label", subtitle: "Blended Scotch · 1L", price: 3200, rating: 4.5 },
    { id: "jw-gold", name: "Johnnie Walker Gold Reserve", subtitle: "18yr · 750ml", price: 12500, rating: 4.9, badge: "LUXURY" },
    { id: "jw-blue", name: "Johnnie Walker Blue Label", subtitle: "Premium Blend · 750ml", price: 32000, rating: 5.0, badge: "ICONIC" },
    { id: "glenfiddich-12", name: "Glenfiddich 12 Year Old", subtitle: "Single Malt · 750ml", price: 8200, rating: 4.9, badge: "STAFF PICK" },
    { id: "glenfiddich-15", name: "Glenfiddich 15 Solera", subtitle: "Single Malt · 750ml", price: 12800, rating: 4.9 },
    { id: "glenfiddich-18", name: "Glenfiddich 18 Year Old", subtitle: "Single Malt · 750ml", price: 21500, rating: 4.9 },
    { id: "jameson", name: "Jameson Irish Whiskey", subtitle: "Irish Blend · 1L", price: 3850, rating: 4.6 },
    { id: "jameson-black", name: "Jameson Black Barrel", subtitle: "Irish Blend · 750ml", price: 5400, rating: 4.7 },
    { id: "singleton-12", name: "Singleton 12", subtitle: "Single Malt · 750ml", price: 6900, rating: 4.5 },
    { id: "singleton-15", name: "Singleton 15", subtitle: "Single Malt · 750ml", price: 9500, rating: 4.6 },
    { id: "jack-daniels", name: "Jack Daniel's Old No.7", subtitle: "Tennessee Whiskey · 1L", price: 5100, oldPrice: 5500, rating: 4.7, badge: "7% OFF" },
    { id: "jack-honey", name: "Jack Daniel's Tennessee Honey", subtitle: "Honey Liqueur · 750ml", price: 4900, rating: 4.6 },
    { id: "jack-fire", name: "Jack Daniel's Tennessee Fire", subtitle: "Cinnamon Whiskey · 750ml", price: 4900, rating: 4.5 },
    { id: "chivas-12", name: "Chivas Regal 12", subtitle: "Blended Scotch · 750ml", price: 4800, rating: 4.6 },
    { id: "chivas-18", name: "Chivas Regal 18", subtitle: "Blended Scotch · 750ml", price: 11500, rating: 4.8 },
    { id: "glenlivet-12", name: "Glenlivet 12", subtitle: "Single Malt · 750ml", price: 8900, rating: 4.8 },
    { id: "glenlivet-15", name: "Glenlivet 15 French Oak", subtitle: "Single Malt · 750ml", price: 13200, rating: 4.8 },
    { id: "ballantines", name: "Ballantine's Finest", subtitle: "Blended Scotch · 1L", price: 3400, rating: 4.4 },
    { id: "ballantines-17", name: "Ballantine's 17", subtitle: "Blended Scotch · 750ml", price: 14500, rating: 4.8 },
    { id: "bw", name: "Black & White", subtitle: "Blended Scotch · 750ml", price: 2200, rating: 4.3 },
    { id: "macallan-12", name: "Macallan 12 Double Cask", subtitle: "Single Malt · 750ml", price: 14800, rating: 4.9, badge: "PREMIUM" },
    { id: "macallan-15", name: "Macallan 15 Double Cask", subtitle: "Single Malt · 750ml", price: 26500, rating: 4.9 },
    { id: "highland-park-12", name: "Highland Park 12", subtitle: "Single Malt · 750ml", price: 8400, rating: 4.7 },
    { id: "talisker-10", name: "Talisker 10", subtitle: "Island Single Malt · 750ml", price: 9800, rating: 4.8 },
    { id: "laphroaig-10", name: "Laphroaig 10 Islay", subtitle: "Peated Single Malt · 750ml", price: 9200, rating: 4.7 },
    { id: "monkey-shoulder", name: "Monkey Shoulder", subtitle: "Blended Malt · 700ml", price: 5400, rating: 4.6 },
    { id: "famous-grouse", name: "The Famous Grouse", subtitle: "Blended Scotch · 1L", price: 3100, rating: 4.4 },
    { id: "grants", name: "Grant's Family Reserve", subtitle: "Blended Scotch · 1L", price: 2900, rating: 4.3 },
    { id: "vat-69", name: "VAT 69", subtitle: "Blended Scotch · 750ml", price: 1950, rating: 4.2 },
  ],
  Vodka: [
    { id: "smirnoff", name: "Smirnoff No.21", subtitle: "Triple Distilled · 1L", price: 1900, rating: 4.4 },
    { id: "smirnoff-green", name: "Smirnoff Green Apple", subtitle: "Flavoured · 750ml", price: 1700, rating: 4.3 },
    { id: "ciroc", name: "Cîroc Premium", subtitle: "Snap Frost · 750ml", price: 5800, rating: 4.8, badge: "PREMIUM" },
    { id: "ciroc-red", name: "Cîroc Red Berry", subtitle: "Flavoured Vodka · 750ml", price: 5900, rating: 4.7 },
    { id: "ciroc-pineapple", name: "Cîroc Pineapple", subtitle: "Flavoured Vodka · 750ml", price: 5900, rating: 4.7 },
    { id: "absolut", name: "Absolut Blue", subtitle: "Swedish Vodka · 1L", price: 3200, rating: 4.5 },
    { id: "absolut-citron", name: "Absolut Citron", subtitle: "Lemon Vodka · 750ml", price: 3100, rating: 4.4 },
    { id: "absolut-vanilla", name: "Absolut Vanilia", subtitle: "Vanilla Vodka · 750ml", price: 3100, rating: 4.4 },
    { id: "belvedere", name: "Belvedere", subtitle: "Polish Rye · 750ml", price: 6400, rating: 4.7 },
    { id: "grey-goose", name: "Grey Goose", subtitle: "French Vodka · 750ml", price: 7800, rating: 4.9, badge: "LUXURY" },
    { id: "stoli", name: "Stolichnaya Premium", subtitle: "Russian Vodka · 1L", price: 2800, rating: 4.5 },
    { id: "russian-standard", name: "Russian Standard", subtitle: "Original · 750ml", price: 2400, rating: 4.4 },
  ],
  Gin: [
    { id: "gordons", name: "Gordon's London Dry", subtitle: "Classic Gin · 750ml", price: 1400, rating: 4.4 },
    { id: "gordons-pink", name: "Gordon's Pink Gin", subtitle: "Strawberry & Raspberry · 700ml", price: 2400, rating: 4.6 },
    { id: "bombay", name: "Bombay Sapphire", subtitle: "Premium Gin · 750ml", price: 3800, rating: 4.7 },
    { id: "gilbeys", name: "Gilbey's Special Dry", subtitle: "Dry Gin · 750ml", price: 1450, oldPrice: 1600, badge: "10% OFF", rating: 4.3 },
    { id: "beefeater", name: "Beefeater London Dry", subtitle: "London Dry · 750ml", price: 2800, rating: 4.5 },
    { id: "tanqueray", name: "Tanqueray London Dry", subtitle: "Premium Gin · 750ml", price: 4200, rating: 4.8 },
    { id: "tanqueray-10", name: "Tanqueray No. Ten", subtitle: "Citrus Gin · 750ml", price: 6900, rating: 4.8 },
    { id: "hendricks", name: "Hendrick's Gin", subtitle: "Cucumber & Rose · 700ml", price: 5800, rating: 4.9, badge: "STAFF PICK" },
    { id: "monkey-47", name: "Monkey 47 Schwarzwald", subtitle: "Dry Gin · 500ml", price: 7400, rating: 4.9 },
    { id: "bulldog", name: "Bulldog London Dry", subtitle: "Premium Gin · 750ml", price: 3600, rating: 4.5 },
  ],
  Wine: [
    { id: "four-cousins", name: "Four Cousins Sweet Red", subtitle: "South African · 750ml", price: 1100, rating: 4.5 },
    { id: "four-cousins-rose", name: "Four Cousins Skinny Rosé", subtitle: "Rosé · 750ml", price: 1150, rating: 4.4 },
    { id: "drostdy", name: "Drostdy Hof Cabernet", subtitle: "Red · 750ml", price: 950, rating: 4.3 },
    { id: "nederburg", name: "Nederburg Cabernet Sauvignon", subtitle: "Red · 750ml", price: 1450, rating: 4.6 },
    { id: "fourth-street", name: "4th Street Sweet Red", subtitle: "Sweet Red · 750ml", price: 1050, rating: 4.4 },
    { id: "fourth-street-white", name: "4th Street Natural Sweet White", subtitle: "Sweet White · 750ml", price: 1050, rating: 4.3 },
    { id: "robertson", name: "Robertson Winery Chardonnay", subtitle: "White · 750ml", price: 1200, rating: 4.5 },
    { id: "kwv-cabernet", name: "KWV Classic Cabernet", subtitle: "Red · 750ml", price: 1350, rating: 4.5 },
    { id: "two-oceans", name: "Two Oceans Sauvignon Blanc", subtitle: "White · 750ml", price: 1250, rating: 4.4 },
    { id: "jc-le-roux", name: "JC Le Roux La Chanson", subtitle: "Sparkling Red · 750ml", price: 1850, rating: 4.6 },
    { id: "leopards-leap", name: "Leopard's Leap Merlot", subtitle: "Red · 750ml", price: 1650, rating: 4.6 },
    { id: "yellow-tail", name: "Yellow Tail Shiraz", subtitle: "Australian Red · 750ml", price: 1750, rating: 4.5 },
  ],
  Tequila: [
    { id: "cuervo", name: "Jose Cuervo Especial Gold", subtitle: "Tequila · 750ml", price: 3200, rating: 4.5 },
    { id: "cuervo-silver", name: "Jose Cuervo Silver", subtitle: "Blanco Tequila · 750ml", price: 3100, rating: 4.4 },
    { id: "don-julio", name: "Don Julio Reposado", subtitle: "Premium Tequila · 750ml", price: 9800, rating: 4.9, badge: "LUXURY" },
    { id: "don-julio-blanco", name: "Don Julio Blanco", subtitle: "Premium Tequila · 750ml", price: 8900, rating: 4.8 },
    { id: "olmeca", name: "Olmeca Gold", subtitle: "Tequila · 750ml", price: 2700, rating: 4.3 },
    { id: "olmeca-altos", name: "Olmeca Altos Plata", subtitle: "100% Agave · 750ml", price: 4200, rating: 4.6 },
    { id: "patron-silver", name: "Patrón Silver", subtitle: "Premium Tequila · 750ml", price: 9200, rating: 4.8 },
    { id: "sauza-gold", name: "Sauza Gold", subtitle: "Tequila · 750ml", price: 3400, rating: 4.4 },
  ],
  Champagne: [
    { id: "hennessy-vs", name: "Hennessy VS", subtitle: "Cognac · 700ml", price: 6900, rating: 4.8 },
    { id: "hennessy-vsop", name: "Hennessy VSOP Privilege", subtitle: "Cognac · 700ml", price: 11500, rating: 4.9 },
    { id: "hennessy-xo", name: "Hennessy XO", subtitle: "Cognac · 700ml", price: 32000, rating: 5.0, badge: "ICONIC" },
    { id: "moet", name: "Moët & Chandon Brut", subtitle: "Champagne · 750ml", price: 9500, rating: 4.9, badge: "BESTSELLER" },
    { id: "moet-rose", name: "Moët & Chandon Rosé", subtitle: "Champagne · 750ml", price: 12500, rating: 4.9 },
    { id: "remy-vsop", name: "Rémy Martin VSOP", subtitle: "Cognac · 700ml", price: 8400, rating: 4.7 },
    { id: "remy-xo", name: "Rémy Martin XO", subtitle: "Cognac · 700ml", price: 28500, rating: 4.9 },
    { id: "veuve", name: "Veuve Clicquot Yellow Label", subtitle: "Champagne · 750ml", price: 11800, rating: 4.9 },
    { id: "veuve-rose", name: "Veuve Clicquot Rosé", subtitle: "Champagne · 750ml", price: 14800, rating: 4.9 },
    { id: "martell-vs", name: "Martell VS", subtitle: "Cognac · 700ml", price: 6200, rating: 4.6 },
    { id: "martell-vsop", name: "Martell VSOP", subtitle: "Cognac · 700ml", price: 9800, rating: 4.7 },
    { id: "dom-perignon", name: "Dom Pérignon Vintage", subtitle: "Champagne · 750ml", price: 42000, rating: 5.0, badge: "ULTRA LUXURY" },
  ],
  Beer: [
    { id: "heineken-6", name: "Heineken Lager 6-Pack", subtitle: "Premium Lager · 6 × 330ml", price: 1450, rating: 4.7 },
    { id: "guinness-6", name: "Guinness Foreign Extra 6-Pack", subtitle: "Stout · 6 × 330ml", price: 1850, rating: 4.8, badge: "BOLD" },
    { id: "corona-6", name: "Corona Extra 6-Pack", subtitle: "Mexican Lager · 6 × 355ml", price: 2400, rating: 4.7 },
    { id: "stella-6", name: "Stella Artois 6-Pack", subtitle: "Belgian Lager · 6 × 330ml", price: 1950, rating: 4.6 },
    { id: "budweiser-6", name: "Budweiser 6-Pack", subtitle: "American Lager · 6 × 330ml", price: 1650, rating: 4.4 },
    { id: "desperados-6", name: "Desperados Tequila Beer 6-Pack", subtitle: "Flavoured Lager · 6 × 330ml", price: 2200, rating: 4.6 },
  ],
  Kenyan: [
    { id: "tusker", name: "Tusker Lager 6-Pack", subtitle: "Local Lager · 6 × 500ml", price: 1200, rating: 4.7, badge: "LOCAL FAV" },
    { id: "tusker-malt", name: "Tusker Malt 6-Pack", subtitle: "Premium Lager · 6 × 500ml", price: 1350, rating: 4.7 },
    { id: "tusker-cider", name: "Tusker Cider 6-Pack", subtitle: "Apple Cider · 6 × 500ml", price: 1450, rating: 4.6 },
    { id: "whitecap", name: "White Cap 6-Pack", subtitle: "Local Lager · 6 × 500ml", price: 1200, rating: 4.5 },
    { id: "whitecap-light", name: "White Cap Light 6-Pack", subtitle: "Light Lager · 6 × 500ml", price: 1200, rating: 4.5 },
    { id: "balozi", name: "Balozi 6-Pack", subtitle: "Local Lager · 6 × 500ml", price: 1100, rating: 4.4 },
    { id: "pilsner-6", name: "Pilsner Lager 6-Pack", subtitle: "Local Lager · 6 × 500ml", price: 1100, rating: 4.4 },
    { id: "chrome-vodka", name: "Chrome Vodka", subtitle: "Local Vodka · 750ml", price: 950, rating: 4.2 },
    { id: "chrome-gin", name: "Chrome Gin", subtitle: "Local Gin · 750ml", price: 850, rating: 4.2 },
    { id: "kibao", name: "Kibao Vodka", subtitle: "Local Vodka · 750ml", price: 800, rating: 4.1 },
    { id: "kc-cane", name: "KC Cane Spirit", subtitle: "Cane Spirit · 750ml", price: 750, rating: 4.0 },
    { id: "kenya-cane", name: "Kenya Cane", subtitle: "Sugar Cane Spirit · 750ml", price: 850, rating: 4.1 },
    { id: "viceroy", name: "Viceroy Brandy", subtitle: "Brandy · 750ml", price: 1450, rating: 4.3 },
    { id: "hunters", name: "Hunter's Cider 6-Pack", subtitle: "Cider · 6 × 330ml", price: 1500, rating: 4.6 },
    { id: "savanna", name: "Savanna Dry Cider 6-Pack", subtitle: "Cider · 6 × 330ml", price: 1650, rating: 4.7 },
    { id: "smirnoff-ice", name: "Smirnoff Ice 6-Pack", subtitle: "Premix · 6 × 275ml", price: 1750, rating: 4.5 },
  ],
};

const categoryList: Category[] = [
  "Whisky", "Vodka", "Gin", "Wine", "Tequila", "Champagne", "Beer", "Kenyan",
];

export const products: Product[] = categoryList.flatMap((cat) =>
  seeds[cat].map((s, i) => ({
    ...s,
    category: cat,
    image: pic(cat, i),
    description:
      `${s.name} — ${s.subtitle}. Sourced and stored under ideal conditions at Whisky Hub Rongai. ` +
      `Perfect for gifting, parties, or a quiet evening in. Delivered cold and discreetly across Rongai and Nairobi.`,
  })),
);

export const categories = categoryList;

export const fmtKES = (n: number) => `KES ${n.toLocaleString("en-KE")}`;

export const getProduct = (id: string) => products.find((p) => p.id === id);
