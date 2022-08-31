const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const menuCartIcon = document.querySelector ('.navbar-shopping-cart');
const aside = document.querySelector ('.shopping-cart-detail');
const cardsContainer = document.querySelector ('.cards-container');
const productDetail = document.querySelector ('.product-detail');
const closeButton = document.querySelector ('.product-detail-close');
let productDetailImage = document.querySelector ('.product-detail-image');
let productDetailPrice = document.querySelector ('.product-detail-price');
let productDetailName = document.querySelector ('.product-detail-name');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
closeButton.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  aside.classList.add('inactive');
  productDetail.classList.add('inactive');
}

function toggleMobileMenu() {
  aside.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
  productDetail.classList.add('inactive');
}

function toggleCartAside() {
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  aside.classList.toggle('inactive');
  productDetail.classList.add('inactive');
}

function openProductDetail() {
  productDetail.classList.remove('inactive');
  aside.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}

function closeProductDetail() {
  productDetail.classList.add('inactive');
}


const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
  name: 'Camera',
  price: 150,
  image: 'https://images.pexels.com/photos/3335016/pexels-photo-3335016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
})
productList.push({
  name: 'Laptop',
  price: 320,
  image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
  name: 'Sofa',
  price: 550,
  image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
  name: 'Lamp',
  price: 70,
  image: 'https://images.pexels.com/photos/1176516/pexels-photo-1176516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
  name: 'Chair',
  price: 110,
  image: 'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1600',
})
productList.push({
  name: 'Table',
  price: 170,
  image: 'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
  name: 'Coat stand',
  price: 90,
  image: 'https://images.pexels.com/photos/8620310/pexels-photo-8620310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
  name: 'Toy',
  price: 210,
  image: 'https://images.pexels.com/photos/189506/pexels-photo-189506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productDiv = document.createElement('div');
    
    const price = document.createElement('p');
    price.innerText = '$' + product.price;
    const name = document.createElement('p');
    name.innerText = product.name;
  
    productDiv.append(price, name);
  
    const figure = document.createElement('figure');
  
    const cartIcon = document.createElement('img');
    cartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    figure.appendChild(cartIcon);
    productInfo.append(productDiv, figure);
    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);

    // productImg.addEventListener('click', mostrarInfoProduct(product.image, product.price, product.name));
  }
}

// function mostrarInfoProduct(newImage, newPrice, newName) {
//   productDetailImage.setAttribute('src', newImage);
//   productDetailPrice.innerText = '$' + newPrice;
//   productDetailName.innerText = newName;
//   openProductDetail();
// }

renderProducts(productList);
