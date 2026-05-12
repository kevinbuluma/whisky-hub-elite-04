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
  image: string; // unsplash or generated
}

// Curated product images via Unsplash (free, no API key needed)
const img = (q: string, seed: number) =>
  `https://images.unsplash.com/photo-${q}?auto=format&fit=crop&w=800&q=80`;

export const products: Product[] = [
  // Whisky
  { id: "jw-black", name: "Johnnie Walker Black Label", category: "Whisky", subtitle: "12yr Blended Scotch · 750ml", price: 5450, oldPrice: 6200, rating: 4.8, badge: "15% OFF", image: img("1582819509237-d6c5c4c34a6b", 1) },
  { id: "jw-double", name: "Johnnie Walker Double Black", category: "Whisky", subtitle: "Blended Scotch · 750ml", price: 7200, rating: 4.7, image: img("1569529465841-dfecdab7503b", 2) },
  { id: "glenfiddich-12", name: "Glenfiddich 12 Year Old", category: "Whisky", subtitle: "Single Malt · 750ml", price: 8200, rating: 4.9, badge: "STAFF PICK", image: img("1527281400683-1aae777175f8", 3) },
  { id: "jameson", name: "Jameson Irish Whiskey", category: "Whisky", subtitle: "Irish Blend · 1L", price: 3850, rating: 4.6, image: img("1514218953589-2d7d37efd2dc", 4) },
  { id: "singleton", name: "Singleton 12", category: "Whisky", subtitle: "Single Malt · 750ml", price: 6900, rating: 4.5, image: img("1568213816046-0ee1c42bd559", 5) },
  { id: "jack-daniels", name: "Jack Daniel's Old No.7", category: "Whisky", subtitle: "Tennessee Whiskey · 1L", price: 5100, oldPrice: 5500, rating: 4.7, badge: "7% OFF", image: img("1609951651556-5334e2706168", 6) },
  { id: "chivas-12", name: "Chivas Regal 12", category: "Whisky", subtitle: "Blended Scotch · 750ml", price: 4800, rating: 4.6, image: img("1582106245687-cbb466a9f07f", 7) },
  { id: "glenlivet-12", name: "Glenlivet 12", category: "Whisky", subtitle: "Single Malt · 750ml", price: 8900, rating: 4.8, image: img("1568213816046-0ee1c42bd559", 8) },
  { id: "ballantines", name: "Ballantine's Finest", category: "Whisky", subtitle: "Blended Scotch · 1L", price: 3400, rating: 4.4, image: img("1574671928146-5c89a8a18078", 9) },
  { id: "bw", name: "Black & White", category: "Whisky", subtitle: "Blended Scotch · 750ml", price: 2200, rating: 4.3, image: img("1582819509237-d6c5c4c34a6b", 10) },

  // Vodka
  { id: "smirnoff", name: "Smirnoff No.21", category: "Vodka", subtitle: "Triple Distilled · 1L", price: 1900, rating: 4.4, image: img("1569529465841-dfecdab7503b", 11) },
  { id: "ciroc", name: "Cîroc Premium", category: "Vodka", subtitle: "Snap Frost · 750ml", price: 5800, badge: "PREMIUM", rating: 4.8, image: img("1514218953589-2d7d37efd2dc", 12) },
  { id: "absolut", name: "Absolut Blue", category: "Vodka", subtitle: "Swedish Vodka · 1L", price: 3200, rating: 4.5, image: img("1569529465841-dfecdab7503b", 13) },
  { id: "chrome", name: "Chrome Vodka", category: "Vodka", subtitle: "Local Premium · 750ml", price: 950, rating: 4.2, image: img("1582106245687-cbb466a9f07f", 14) },
  { id: "belvedere", name: "Belvedere", category: "Vodka", subtitle: "Polish Rye · 750ml", price: 6400, rating: 4.7, image: img("1568213816046-0ee1c42bd559", 15) },

  // Gin
  { id: "gordons", name: "Gordon's London Dry", category: "Gin", subtitle: "Classic Gin · 750ml", price: 1400, rating: 4.4, image: img("1574671928146-5c89a8a18078", 16) },
  { id: "bombay", name: "Bombay Sapphire", category: "Gin", subtitle: "Premium Gin · 750ml", price: 3800, rating: 4.7, image: img("1582106245687-cbb466a9f07f", 17) },
  { id: "gilbeys", name: "Gilbey's Special Dry", category: "Gin", subtitle: "Dry Gin · 750ml", price: 1450, oldPrice: 1600, badge: "10% OFF", rating: 4.3, image: img("1514218953589-2d7d37efd2dc", 18) },
  { id: "beefeater", name: "Beefeater London Dry", category: "Gin", subtitle: "London Dry · 750ml", price: 2800, rating: 4.5, image: img("1568213816046-0ee1c42bd559", 19) },
  { id: "tanqueray", name: "Tanqueray London Dry", category: "Gin", subtitle: "Premium Gin · 750ml", price: 4200, rating: 4.8, image: img("1574671928146-5c89a8a18078", 20) },

  // Wine
  { id: "four-cousins", name: "Four Cousins Sweet Red", category: "Wine", subtitle: "South African · 750ml", price: 1100, rating: 4.5, image: img("1553361371-9b22f78e8b1d", 21) },
  { id: "drostdy", name: "Drostdy Hof Cabernet", category: "Wine", subtitle: "Red · 750ml", price: 950, rating: 4.3, image: img("1510812431401-41d2bd2722f3", 22) },
  { id: "nederburg", name: "Nederburg Cabernet Sauvignon", category: "Wine", subtitle: "Red · 750ml", price: 1450, rating: 4.6, image: img("1553361371-9b22f78e8b1d", 23) },
  { id: "fourth-street", name: "4th Street Sweet Red", category: "Wine", subtitle: "Sweet Red · 750ml", price: 1050, rating: 4.4, image: img("1510812431401-41d2bd2722f3", 24) },
  { id: "robertson", name: "Robertson Winery Chardonnay", category: "Wine", subtitle: "White · 750ml", price: 1200, rating: 4.5, image: img("1553361371-9b22f78e8b1d", 25) },

  // Tequila
  { id: "cuervo", name: "Jose Cuervo Especial Gold", category: "Tequila", subtitle: "Tequila · 750ml", price: 3200, rating: 4.5, image: img("1582106245687-cbb466a9f07f", 26) },
  { id: "don-julio", name: "Don Julio Reposado", category: "Tequila", subtitle: "Premium Tequila · 750ml", price: 9800, badge: "LUXURY", rating: 4.9, image: img("1514218953589-2d7d37efd2dc", 27) },
  { id: "olmeca", name: "Olmeca Gold", category: "Tequila", subtitle: "Tequila · 750ml", price: 2700, rating: 4.3, image: img("1568213816046-0ee1c42bd559", 28) },

  // Champagne / Cognac
  { id: "hennessy", name: "Hennessy VS", category: "Champagne", subtitle: "Cognac · 700ml", price: 6900, rating: 4.8, image: img("1574671928146-5c89a8a18078", 29) },
  { id: "moet", name: "Moët & Chandon Brut", category: "Champagne", subtitle: "Champagne · 750ml", price: 9500, badge: "BESTSELLER", rating: 4.9, image: img("1582106245687-cbb466a9f07f", 30) },
  { id: "remy", name: "Rémy Martin VSOP", category: "Champagne", subtitle: "Cognac · 700ml", price: 8400, rating: 4.7, image: img("1569529465841-dfecdab7503b", 31) },
  { id: "veuve", name: "Veuve Clicquot Yellow Label", category: "Champagne", subtitle: "Champagne · 750ml", price: 11800, rating: 4.9, image: img("1514218953589-2d7d37efd2dc", 32) },
  { id: "martell", name: "Martell VS", category: "Champagne", subtitle: "Cognac · 700ml", price: 6200, rating: 4.6, image: img("1568213816046-0ee1c42bd559", 33) },

  // Kenyan
  { id: "tusker", name: "Tusker Lager 6-Pack", category: "Kenyan", subtitle: "Local Lager · 6 × 500ml", price: 1200, rating: 4.7, badge: "LOCAL FAV", image: img("1608270586620-248524c67de9", 34) },
  { id: "whitecap", name: "White Cap 6-Pack", category: "Kenyan", subtitle: "Local Lager · 6 × 500ml", price: 1200, rating: 4.5, image: img("1608270586620-248524c67de9", 35) },
  { id: "balozi", name: "Balozi 6-Pack", category: "Kenyan", subtitle: "Local Lager · 6 × 500ml", price: 1100, rating: 4.4, image: img("1608270586620-248524c67de9", 36) },
  { id: "chrome-gin", name: "Chrome Gin", category: "Kenyan", subtitle: "Local Gin · 750ml", price: 850, rating: 4.2, image: img("1574671928146-5c89a8a18078", 37) },
  { id: "kibao", name: "Kibao Vodka", category: "Kenyan", subtitle: "Local Vodka · 750ml", price: 800, rating: 4.1, image: img("1582106245687-cbb466a9f07f", 38) },
  { id: "kc-cane", name: "KC Cane Spirit", category: "Kenyan", subtitle: "Cane Spirit · 750ml", price: 750, rating: 4.0, image: img("1568213816046-0ee1c42bd559", 39) },
  { id: "hunters", name: "Hunter's Cider 6-Pack", category: "Kenyan", subtitle: "Cider · 6 × 330ml", price: 1500, rating: 4.6, image: img("1608270586620-248524c67de9", 40) },
  { id: "savanna", name: "Savanna Dry Cider 6-Pack", category: "Kenyan", subtitle: "Cider · 6 × 330ml", price: 1650, rating: 4.7, image: img("1608270586620-248524c67de9", 41) },
];

export const categories: Category[] = ["Whisky", "Vodka", "Gin", "Wine", "Tequila", "Champagne", "Beer", "Kenyan"];

export const fmtKES = (n: number) => `KES ${n.toLocaleString("en-KE")}`;
