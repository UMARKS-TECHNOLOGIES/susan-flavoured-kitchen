import React from 'react'
import Image2 from '../../assets/afangsoup.jpeg'
import Image3 from '../../assets/amalaEwedu.jpeg'
import Image4 from '../../assets/okrosoup.jpeg'
import Image5 from '../../assets/jollof-rice.jpg'
import Image6 from '../../assets/friedRice.jpeg'
import Image7 from '../../assets/riceStew2.jpeg'
import Image8 from '../../assets/chickenChps.jpeg'
import Image9 from '../../assets/doughnut.jpeg'
import Image10 from '../../assets/sharwarma.jpeg'
import Image11 from '../../assets/cake.jpeg'

export const MenuData = {

    soup: [
        {
            id: 1,
            name: 'Egusi soup',
            price: 24.00,
            image: Image2,
            description: 'Fragrant rice cooked in coconut milk with vegetables.'
        },
        {
            id: 2,
            name: 'Okoro soup',
            price: 26.00,
            image: Image3,
            description: 'Local rice served with special ofada sauce.'
        },
        {
            id: 3,
            name: 'Amala Ewedu',
            price: 20.00,
            image: Image4,
            description: 'Classic West African rice dish in tomato sauce.'
        },
        {
            id: 4,
            name: 'Afang soup',
            price: 22.00,
            image: Image5,
            description: 'Colorful fried rice with mixed vegetables.'
        }
    ],
    rice: [
        {
            id: 5,
            name: 'Coconut Rice',
            price: 24.00,
            image: Image2,
            description: 'Fragrant rice cooked in coconut milk with vegetables.'
        },
        {
            id: 6,
            name: 'Ofada Rice',
            price: 26.00,
            image: Image3,
            description: 'Local rice served with special ofada sauce.'
        },
        {
            id: 7,
            name: 'Jollof Rice',
            price: 20.00,
            image: Image4,
            description: 'Classic West African rice dish in tomato sauce.'
        },
        {
            id: 8,
            name: 'Fried Rice',
            price: 22.00,
            image: Image5,
            description: 'Colorful fried rice with mixed vegetables.'
        }
    ],
    snacks: [
        {
            id: 9,
            name: 'Meat Pie',
            price: 8.00,
            image: Image6,
            description: 'Golden pastry filled with minced beef and vegetables.'
        },
        {
            id: 10,
            name: 'Puff Puff',
            price: 6.00,
            image: Image7,
            description: 'Sweet fried dough balls, perfect for snacking.'
        },
        {
            id: 11,
            name: 'Spring Roll',
            price: 7.00,
            image: Image8,
            description: 'Crispy spring rolls filled with vegetables.'
        },
        {
            id: 12,
            name: 'Chin Chin',
            price: 5.00,
            image: Image9,
            description: 'Crunchy fried snack, lightly sweetened.'
        }
    ],
    drinks: [
        {
            id: 13,
            name: 'Milk Shake',
            price: 8.00,
            image: Image10,
            description: 'Golden pastry filled with minced beef and vegetables.'
        },
        {
            id: 14,
            name: 'Smoothie',
            price: 6.00,
            image: Image11,
            description: 'Sweet fried dough balls, perfect for snacking.'
        },
        {
            id: 15,
            name: 'Zobo Drink',
            price: 7.00,
            image: Image8,
            description: 'Crispy spring rolls filled with vegetables.'
        },
    ]

}

const convertMenuData = (items) => {
    return items.map((item, index) => {
        // Extract numeric price from string like '£2,400'
        let numericPrice = 0;
        if (typeof item.price === 'string') {
            // Remove £ symbol and commas, then parse
            const priceString = item.price.replace(/[£,]/g, '');
            numericPrice = parseFloat(priceString) / 100; // Convert pence to pounds
        } else {
            numericPrice = item.price;
        }

        return {
            id: item.id || index + 1, // Generate ID if missing
            name: item.name,
            price: numericPrice,
            image: item.image,
            description: item.description || item.desc || '' // Handle both 'description' and 'desc'
        };
    });
}
