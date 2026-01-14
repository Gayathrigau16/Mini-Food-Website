function addToCart() {
  const confirm = document.getElementById('confirmation');
  confirm.style.display = 'block';
  setTimeout(() => {
    confirm.style.display = 'none';
  }, 2000);
}