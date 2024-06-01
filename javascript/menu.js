document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.getElementById('main-content');

    const pizzas = [
        {
            pizzaName: "Margherita",
            ingredients: "Tomato, Mozzarella, Basil",
            size: "Medium",
            price: 12.99,
            imageUrl: "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-margarita-1080x671.jpg"
        },
        {
            pizzaName: "Pepperoni",
            ingredients: "Tomato, Mozzarella, Pepperoni",
            size: "Large",
            price: 14.99,
            imageUrl: "https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg"
        },
        {
            pizzaName: "BBQ Chicken",
            ingredients: "BBQ Sauce, Chicken, Red Onions, Cilantro",
            size: "Large",
            price: 16.99,
            imageUrl: "https://www.jennycancook.com/wp-content/uploads/2015/03/BBQ_Chicken_Pizza_600.jpg"
        },
        {
            pizzaName: "Veggie",
            ingredients: "Tomato, Mozzarella, Bell Peppers, Olives, Onions",
            size: "Medium",
            price: 13.99,
            imageUrl: "https://www.thecandidcooks.com/wp-content/uploads/2022/07/california-veggie-pizza-feature.jpg"
        },
        {
            pizzaName: "Hawaiian",
            ingredients: "Tomato, Mozzarella, Ham, Pineapple",
            size: "Medium",
            price: 14.49,
            imageUrl: "https://img.kidspot.com.au/pZnR2nZu/kk/2015/03/hawaiian-pizza-recipe-605894-2.jpg"
        }
    ];

    // Function to create a pizza card
    function createPizzaCard(pizza) {
        const card = document.createElement('div');
        card.className = 'pizza-card';
        
        const img = document.createElement('img');
        img.src = pizza.imageUrl;
        img.alt = pizza.pizzaName;
        img.loading = 'lazy';

        const name = document.createElement('h2');
        name.textContent = pizza.pizzaName;

        const ingredients = document.createElement('p');
        ingredients.textContent = `Ingredients: ${pizza.ingredients}`;

        const size = document.createElement('p');
        size.textContent = `Size: ${pizza.size}`;

        const price = document.createElement('p');
        price.textContent = `Price: $${pizza.price.toFixed(2)}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(ingredients);
        card.appendChild(size);
        card.appendChild(price);

        return card;
    }

    // Render all pizza cards
    pizzas.forEach(pizza => {
        const pizzaCard = createPizzaCard(pizza);
        mainContent.appendChild(pizzaCard);
    });
});
