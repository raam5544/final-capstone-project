require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function () {

  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Fruit Plants', sortOrder: 10 },
    { name: 'Roses', sortOrder: 20 },
    { name: 'Flowering-Trees', sortOrder: 30 },
    { name: 'Perennials', sortOrder: 40 },
    { name: 'Lavenders', sortOrder: 50 }
    // { name: 'Mexican', sortOrder: 60 },
    // { name: 'Sandwiches', sortOrder: 70 },
    // { name: 'Seafood', sortOrder: 80 },
    // { name: 'Sides', sortOrder: 90 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    { name: 'Cherry Tree', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/c/h/cherry-600x600.webp', category: categories[0], price: 5.95 },
    { name: 'Raspberry Bush', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/b/r/bristol-black-raspberry-1-600x600.webp', category: categories[0], price: 11.95 },
    { name: 'Mandarin Tree', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/o/w/owari_satsuma_mandarin_600x600.webp', category: categories[0], price: 11.95 },
    { name: 'CrabApple Tree', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/c/h/chestnut-crabapple-tree-1-600x600.webp', category: categories[0], price: 11.95 },
    { name: 'PopCorn Rose', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/p/o/popcorn_drift_rose_1_600x600.webp', category: categories[1], price: 11.95 },
    { name: 'Red Rose', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/s/h/showbiz-rose-1-600x600.webp', category: categories[1], price: 11.95 },
    { name: 'Ruby Vodoo Rose', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/r/u/ruby_voodoo_rose_600x600.webp', category: categories[1], price: 11.95 },
    { name: 'Tiffany Rose', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/t/i/tiffany-rose-600x600.webp', category: categories[1], price: 11.95 },
    { name: 'Tulip Poplar', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/t/u/tulip_poplar_2_600x600.webp', category: categories[2], price: 11.95 },
    { name: 'Mimosa Tree', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/d/r/dreamstime_xxl_97814927-600x600.webp', category: categories[2], price: 11.95 },
    { name: 'Okame Cherry Tree', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/o/k/okame-cherry-tree-600x600.webp', category: categories[2], price: 11.95 },
    { name: 'Ivary Silk', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/2/0/20180615_160809-_1_-600x600.webps', category: categories[2], price: 11.95 },
    { name: 'Summer Blooming', img_url: 'https://www.naturehills.com/pub/media/wysiwyg/category_pages/perennials/category_perennials_summerblooming.webp', category: categories[3], price: 11.95 },
    { name: 'Samll Perennials', img_url: 'https://www.naturehills.com/pub/media/wysiwyg/category_pages/perennials/category_perennials_small.webp', category: categories[3], price: 11.95 },
    { name: 'Fast Growing Peren', img_url: 'https://www.naturehills.com/pub/media/wysiwyg/category_pages/perennials/category_perennials_fastgrowing.webp', category: categories[3], price: 11.95 },
    { name: 'Deer Resistant Peren', img_url: 'https://www.naturehills.com/pub/media/wysiwyg/category_pages/perennials/category_perennials_deer.webp', category: categories[3], price: 11.95 },
    { name: 'Primaver Lavender', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/p/r/primavera-lavender-1-600x600.webp', category: categories[4], price: 11.95 },
    { name: 'Sensational Lavender', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/s/e/sensational_-lavender-1-600x600.webp', category: categories[4], price: 11.95 },
    { name: 'Hidcote Lavender', img_url: 'https://assets.americanmeadows.com/media/catalog/product/l/a/lavendula-hidcote-lavender_1.jpg?quality=85&fit=bounds&height=&width=3840&auto=webp&format=pjpg', category: categories[4], price: 11.95 },
    { name: 'Spanish Lavender', img_url: 'https://www.naturehills.com/media/catalog/product/cache/5645ff797ae51e791a199cf4f9b2d709/o/t/otoo_quast_spanish_lavender_600x600.webp', category: categories[4], price: 11.95 }
    // {name: 'Pizza Slice', emoji: '🍕', category: categories[4], price: 3.95},
    // {name: 'Spaghetti', emoji: '🍝', category: categories[4], price: 7.95},
    // {name: 'Garlic Bread', emoji: '🍞', category: categories[4], price: 1.95},
    // {name: 'French Fries', emoji: '🍟', category: categories[8], price: 2.95},
    // {name: 'Popcorn', emoji: '🍿', category: categories[8], price: 2.95},
    // {name: 'French Fries', emoji: '🥨', category: categories[2], price: 2.95},
    // {name: 'Sweet Potato', emoji: '🍠', category: categories[8], price: 2.95},
    // {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95},
    // {name: 'Ice Cream', emoji: '🍨', category: categories[1], price: 1.95},
    // {name: 'Cup Cake', emoji: '🧁', category: categories[1], price: 0.95},
    // {name: 'Custard', emoji: '🍮', category: categories[1], price: 2.95},
    // {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[1], price: 3.95},
    // {name: 'Stuffed Flatbread', emoji: '🥙', category: categories[5], price: 9.95},
    // {name: 'Milk', emoji: '🥛', category: categories[3], price: 0.95},
    // {name: 'Coffee', emoji: '☕', category: categories[3], price: 0.95},
    // {name: 'Mai Tai', emoji: '🍹', category: categories[3], price: 8.95},
    // {name: 'Beer', emoji: '🍺', category: categories[3], price: 3.95},
    // {name: 'Wine', emoji: '🍷', category: categories[3], price: 7.95},
    // {name: 'Fried Chicken', emoji: '🍗', category: categories[2], price: 9.95},
    // {name: 'Pancakes', emoji: '🥞', category: categories[0], price: 7.95},
    // {name: 'Bacon', emoji: '🥓', category: categories[0], price: 3.95},
    // {name: 'Tea', emoji: '🍵', category: categories[3], price: 2.95},
  ]);

  console.log(items)

  process.exit();

})();