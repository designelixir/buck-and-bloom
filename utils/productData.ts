import { Product } from "./Types";
// Each product uses either shopifyProductId (shows the Shopify buy button)
// or buttonLink + buttonText (shows a regular link button) instead.
// Only products with showProduct: true appear in the shop.
export const productsData = [
  {
    id: 'thanksgiving-cheese-board-bundle',
    showProduct: true,
    shopifyProductId: '16229246075183',
    title: 'Thanksgiving Cheese Board Bundle',
    description1: `Gather with your family this holiday season and enjoy a selection of our delicious Colorado-made artisanal cheeses! We've chosen a wonderful variety of spreadable, soft and creamy, and hard cheeses to make any charcuterie board complete.`,
    description2: `Gourmet Colorado-made crackers and salami are included to pair perfectly with our cheeses. The bundle will be ready to cut and assemble and will be enough to feed 8-12 people.<br>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeI9CDQvj6d7pLFkRlBRP13ch5-eVjwQK-K60TcBuJJDuhJaw/viewform?usp=header" target="_blank" class="red-text no-link-styling"><strong>Locals - you can purchase this bundle in person after November 16th! Click here to reserve your bundle.</strong></a>`,
    fullDescription: `
    <p><strong>All orders will ship on November 16th to arrive with ample time before Thanksgiving.</strong> 
        Please select a shipping options with 2 business days or less estimate to ensure the cheese stays cold. For most Colorado orders, UPS Ground will be sufficient. <br><br>
        <strong>Locals can come to our General Store to pick up bundles starting November 16th. No online pre-order necessary.
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeI9CDQvj6d7pLFkRlBRP13ch5-eVjwQK-K60TcBuJJDuhJaw/viewform?usp=header" target="_blank" class="red-text no-link-styling">Click here to reserve your bundle.</a>
        </strong>
        If you are unable to make that pickup window please contact us to make separate accommodations at <a href="mailto:buckandbloomcheese@gmail.com">buckandbloomcheese@gmail.com</a>.
    </p>
    <br>
    <h4>Bundle includes:</h4>
    <ul>
        <li><strong>Mont Creme Camembert</strong>- 8-10 oz. - Similar to Brie. A2 Cow's Milk cheese with a white rind and a decadent, creamy texture. </li>
        <li><strong>Seasonal Special! Cranberry Orange Fromage Blanc</strong>- 8 oz. - A soft, bright, spreadable A2 cow's milk cheese mixed with fresh orange zest and Colorado honey. Topped with cranberries. </li>
        <li><strong>Garlic Nettle Chevre</strong>- 6oz - A soft, mild spreadable goat cheese made with nettle and garlic. Similar to a Boursin. </li>
        <li><strong>Highland</strong>- 5-6oz - A hard A2 cow's milk cheese, Alpine-style, cave aged for 4 months. Creamy and mild with a natural rind. </li>
        <li><strong>Red Rock</strong>- 5-6oz - A hard goat's milk cheese, cave aged for 60+ days. Similar to Manchego or Ibores. The rind is finished with olive oil and paprika and then is bloomed naturally in the cave. </li>
        <li><strong><a class="no-link-styling red-text" href="https://fullstopbakery.com/" target="_blank" rel="noopener noreferrer">Full Stop</a> Olive Oil & Sea Salt Crackers</strong>- 4.2oz. - Sourdough Crackers made in small batches in Boulder, CO. </li>
        <li><strong><a class="no-link-styling red-text" href="https://www.riverbearmeats.com/" target="_blank" rel="noopener noreferrer">River Bear Beef</a> Calabrese Salami</strong>- 4.5oz. - The bold flavors of Angus beef are complemented by the aromatic sweetness of fennel, the spicy warmth of Calabrian chiles, and are perfectly balanced with red wine and a hint of garlic. </li>
    </ul>`, 
    price: '$89.99',
    mainImage: '/products/ThanksgivingCheeseBoard/thanksgiving-cheese-bundle-1.jpg',
    images: [
    '/products/ThanksgivingCheeseBoard/thanksgiving-cheese-bundle-1.jpg',
    '/products/ThanksgivingCheeseBoard/thanksgiving-cheese-bundle-4.mp4',
    '/products/ThanksgivingCheeseBoard/thanksgiving-cheese-bundle-2.jpg',
    '/products/ThanksgivingCheeseBoard/thanksgiving-cheese-bundle-3.jpg',
    ]
    },

    {
    id: 'holiday-cheese-board-bundle',
    showProduct: false,
    shopifyProductId: '10783666012463',
    title: 'Holiday Cheese Board Bundle',
    description1: `Gather with your family this holiday season and enjoy a selection of our delicious artisanal cheeses! We've chosen a wonderful variety of spreadable, soft and creamy, and hard cheeses to make any charcuterie board complete.` ,
    description2: `Gourmet Colorado-made crackers and salami are included to pair perfectly with our cheeses. The bundle will be ready to cut and assemble and will be enough to feed 8-12 people.`,
    fullDescription: `
        <p><strong>All orders will ship on November 17th to arrive with ample time before Thanksgiving.</strong> 
            Please select a shipping options with 2 business days or less estimate. For most Colorado orders, UPS Ground will be sufficient. 
            If you are able to select 2 Day Air Shipping, please select it as the cheese will need to stay cold. 
            Local pickup is also available at Buck and Bloom Cheese Co. on Tuesday, November 18th from 9-4pm. 
            If you are unable to make that pickup window please contact us to make separate accommodations at <a href="mailto:buckandbloomcheese@gmail.com">buckandbloomcheese@gmail.com</a>.
        </p>
        <p>Bundle includes:</p>
        <ul>
        <li><strong>Mont Creme Camembert</strong>- 8-10 oz. - Similar to Brie. Cow's Milk cheese with a white rind a decadent, creamy texture. </li>
        <li><strong>Hibiscus Honey Fromage Blanc</strong>- 8 oz. - A soft, bright, spreadable cow's milk cheese with a hint of sweetness and a beautiful pink color. </li>
        <li><strong>Garlic Herb Fromage Blanc</strong>- 8 oz. - A soft, spreadable cow's milk cheese with a savory, garlicy flavor. </li>
        <li><strong>Hatch Chili Pepperjack</strong>- 5-6oz - A hard cow's milk cheese with Hatch Chiles. Cave aged for 5 weeks. </li>
        <li><strong>Goat Manchego</strong>- 5-6oz - A hard goat's milk cheese with a tangy, salty flavor. Cave aged for 90 days. </li>
        <li><strong><a class="no-link-styling red-text" href="https://fullstopbakery.com/" target="_blank" rel="noopener noreferrer">Full Stop</a> Olive Oil & Sea Salt Crackers</strong>- 4.2oz. - Sourdough Crackers made in small batches in Boulder, CO. </li>
        <li><strong><a class="no-link-styling red-text" href="https://www.ilporcellinodenver.com/" target="_blank" rel="noopener noreferrer">Il Porcellino</a> Calabrese Salami</strong>- 4.5oz. - Dry aged Salami made in Basalt, CO. Italian Inspired Salami Seasoned with Sweet and Dry Vermouth and Calabrian Chiles. A classic Italian Salami indigenous to the Calabrian region of Southern Italy. </li>
        </ul> 
    `, 
        price: '$85.00',
        mainImage: '/products/HolidayCheeseboard-Spread.jpg',
        images: [
        '/products/HolidayCheeseboard-Details.jpg',
        '/products/HolidayCheeseboard-Vid1.mp4',
        '/products/HolidayCheeseboard-Vid2.mp4'
        ]
    },
    {
        id: 'local-cheese-share',
        showProduct: false,
        shopifyProductId: '10783691800879',
        title: 'Local Cheese Share',
        subtitle: '10 Week On-Farm Pickup',
        description1: 'Join our local Cheese Share! Our members sign up for a 10 week period to pick up cheese directly from our creamery in Buena Vista. This is a great deal for our members, who receive at least $225 of cheese and get the first peek at our new flavors and cheeses.',
        description2: `
        <span>This is a great deal for our members, who receive at least $225 of cheese and get the first peek at our new flavors and cheeses. This Cheese Share supports our small business throughout the year, especially when our farmer's market season is over.</span>
        <br><br><strong>Our Cheese Share membership also makes a great gift for someone local!</strong>
        ` ,
        fullDescription: `
        <p>Cheese varieties that you will receive in the share vary based on time of year, but include goat's milk chevre, cow's milk fromage blanc, Mont Creme camembert, aged soft cheeses, and aged hard cheeses including Hatch Chili Pepperjack, and our Highland Alpine. We are always trying new flavors and types of cheese, and our share members will be the first to taste those!</p>
        <p><strong>Program details:</strong></p>
        <ul>
        <li>Each week, beginning the week after purchase, you get a different spreadable cheese (chevre or fromage blanc) and an aged cheese, either a soft ripened cheese or hard cheese from our cheese cave</li>
        <li>$175 for cheese pick up over 10 weeks, retail value of at least $225</li>
        <li>Pickup weekly on Saturday or Sunday from 11am - 3pm</li>
        <li>After signing up, you will receive a welcome email from us with more instructions</li>
        </ul>
        <p>We appreciate your support! While our young herd of goats mature, we are sourcing milk from several farms across Colorado. Your Cheese Share will help us continue to care for our goats, and soon we will be making some hyper-local cheeses!</p>
        `,
        price: '$175',
        mainImage: '/products/CheeseShare2.jpg',
        images: [
        '/products/CheeseShare1.jpg',
        '/products/Greg.mp4',
        '/Team.jpg',
        '/GregTeam.jpg',
        '/BabyGoats.jpg',
        '/products/Goats.mp4',

        ]
    },
];
