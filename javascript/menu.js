document.addEventListener('DOMContentLoaded', () => {
    const pizzas = [
        { name: 'Margherita Pizza', price: '$12', image: 'images/margherita.jpeg' },
        { name: 'Pepperoni Pizza', price: '$14', image: 'images/pepperoni.jpg' },
        { name: 'BBQ Chicken Pizza', price: '$16', image: 'images/bbq_chicken.jpg' },
        { name: 'Vegetarian Pizza', price: '$13', image: 'images/vegetarian.jpg' },
        { name: 'Four Cheese Pizza', price: '$15', image: 'images/four_cheese.jpg' }
    ];

    const menuSection = document.querySelector('main section');
    
    pizzas.forEach(pizza => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const image = document.createElement('img');
        image.src = pizza.image;
        image.alt = pizza.name;

        const namePrice = document.createElement('p');
        namePrice.textContent = `${pizza.name} - ${pizza.price}`;

        menuItem.appendChild(image);
        menuItem.appendChild(namePrice);
        menuSection.appendChild(menuItem);
    });
});
