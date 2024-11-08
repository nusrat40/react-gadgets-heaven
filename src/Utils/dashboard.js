function showSection(section) {
    const cartSection = document.getElementById('cartSection');
    const wishlistSection = document.getElementById('wishlistSection');
  
    if (section === 'cart') {
      cartSection.style.display = 'block';
      wishlistSection.style.display = 'none';
    } else if (section === 'wishlist') {
      wishlistSection.style.display = 'block';
      cartSection.style.display = 'none';
    }
  }

  export {showSection}