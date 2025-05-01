function viewProductDetails(name, description, image, price) {
    const url = `view-product.html?name=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}`;
    window.open(url, "_blank");
  }
  
  function buyNow(name, price, image) {
    const url = `buy-now.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}`;
    window.open(url, "_blank");
  }
 