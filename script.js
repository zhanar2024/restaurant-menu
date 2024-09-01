const data = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: "shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, ",
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up ",
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: "portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird ",
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  ",
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
  {
    id: 11,
    title: "fried egg sandwich",
    category: "breakfast",
    price: 10.99,
    img: "./images/item-11.jpeg",
    desc: "two pasture eggs, aged cheddar, arugula, on a toasted challah bun 6",
  },
  {
    id: 12,
    title: "yogurt & granola ",
    category: "breakfast",
    price: 9.99,
    img: "./images/item-12.jpeg",
    desc: "greek yogurt, granola, fresh fruit, bee pollen, hemp hearts, wildflower honey",
  },
  {
    id: 13,
    title: "home run",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-13.jpeg",
    desc: "two pasture eggs your way, buttermilk waffle & crispy butterball potatoes, with your choice of applewood smoked bacon or homemade pork sausage or chicken apple sausage",
  },
  {
    id: 14,
    title: "country delight",
    category: "breakfast",
    price: 12.99,
    img: "./images/item-14.jpeg",
    desc: "scrambled egg whites, bacon, avocado, kale, romesco sauce, in a gluten free wrap",
  },
  {
    id: 15,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-15.jpeg",
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 16,
    title: "oreo dream",
    category: "drinks",
    price: 18.99,
    img: "./images/item-16.jpeg",
    desc: "portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },
  {
    id: 17,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-17.jpeg",
    desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    id: 18,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-18.jpeg",
    desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    id: 19,
    title: "quarantine buddy",
    category: "drinks",
    price: 16.99,
    img: "./images/item-19.jpeg",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
  {
    id: 20,
    title: "steak dinner",
    category: "lunch",
    price: 39.99,
    img: "./images/item-20.jpeg",
    desc: "shredded lettuce, herb mayo, on a toasted, lyft af, edison bulb yuccie crucifix microdosing.",
  },
  {
    id: 21,
    title: "kids crispy chicken",
    category: "kids",
    price: 6.99,
    img: "./images/item-21.jpeg",
    desc: "kids crispy chicken, house pickles, shredded lettuce, herb mayo, on a toasted challah bun.",
  },
  {
    id: 22,
    title: "kids mac n cheese ",
    category: "kids",
    price: 6.99,
    img: "./images/item-22.jpeg",
    desc: "skateboard pulled chicken is smothered in a tasty, edison bulb yuccie crucifix microdosing.",
  },
  {
    id: 23,
    title: "kids roasted chicken",
    category: "kids",
    price: 6.99,
    img: "./images/item-23.jpeg",
    desc: "delicious, succulent pulled chicken is smothered in a tasty homemade barbecue sauce",
  },
  {
    id: 24,
    title: "veggie burger",
    category: "lunch",
    price: 6.99,
    img: "./images/item-24.jpeg",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
];

const menuButtons = document.querySelector(".menu-buttons");
const menuList = document.getElementById("list");
const searchInput = document.querySelector("#search-input");

const categories = ["all"];
for (let item of data) {
  categories.push(item.category);
}

// finding unique categories
const uniqueCategories = []; //['all', 'breakfast', 'lunch', 'dinner'...]
for (let item of data) {
  const isExist = uniqueCategories.includes(item.category);
  if (!isExist) {
    uniqueCategories.push(item.category);
  }
}

function createMenuButtons() {
  let buttonsHTML = "";
  buttonsHTML += `<button onclick="menuBtnClickFn('all')" class= "menu-btn active">All</button>`;
  for (let category of uniqueCategories) {
    buttonsHTML += `<button onclick="menuBtnClickFn('${category}')" class="menu-btn">${category}</button>`;
  }

  buttonsHTML += `<button onclick="cartBtnClickFn('cart')" class="menu-btn cart" >Cart <span id="cart-count">0</span></button>`;
  menuButtons.innerHTML = buttonsHTML;
}
createMenuButtons();

//-------------------------------------------------------------------------------------------------------------------------------------
function cartBtnClickFn() {
  console.log("cart button clicked");
}

function menuBtnClickFn(category) {
  console.log("category", category);

  let activeButton = document.querySelector("button.menu-btn.active");
  if (activeButton) {
    activeButton.classList.remove("active");
  }

  activeButton = document.querySelector(
    `button.menu-btn[data-category="${category}"]`
  );

  // Special handling for "all" button
  if (category === "all") {
    activeButton = document.querySelector("button.menu-btn.active");
  }

  if (activeButton) {
    activeButton.classList.add("active");
  }

  //filtering data based on selected category

  const filteredData = [];
  for (let item of data) {
    if (item.category === category || category === "all") {
      filteredData.push(item);
    }
  }
  filteredMenuItems = filteredData;
  createMenuItems(filteredMenuItems);
}

//----------------------------------------------------------------------------------------------------------------------------------------

function createMenuItems(menuItems) {
  menuList.innerHTML = "";
  for (let item of menuItems) {
    const itemTag = `<li class="item">
                                    <div class="left">
                                      <img src="${item.img}" alt="" width="80px" />
                                    </div>
                                    <div class="right">
                                      <div class="right-top">
                                        <p>${item.title}</p>
                                        <span>${item.price}</span>
                                      </div>
                                      <p>
                                      ${item.desc}
                                      </p>
                                      <button class="common" onclick="addToCart()">Add to cart</button>
                                    </div>
                                    <span class="category">${item.category}</span>
                                    </li>`;

    menuList.innerHTML += itemTag;
  }
}

//--------------------------------------------------------------------------------------------------------------------------------------
let filteredMenuItems = data;

createMenuItems(filteredMenuItems);
searchInput.addEventListener("keyup", function (event) {
  let filteredSearchMenuItems = [];

  const value = event.target.value;

  if (value.trim() !== "") {
    for (let item of filteredMenuItems) {
      if (
        item.title.includes(value.toLowerCase()) ||
        item.desc.includes(value.toLowerCase())
      ) {
        filteredSearchMenuItems.push(item);
      }
    }
    createMenuItems(filteredSearchMenuItems);
  } else {
    alert("Enter a text to search");
  }
});

//red button

let cartCount = 0;

function addToCart() {
  cartCount += 1;
  updateCartCount();
}

function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}
