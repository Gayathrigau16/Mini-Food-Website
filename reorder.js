const menuItems = [
  { name: "Chicken Rice", price: 50 },
  { name: "Chicken Fried Rice", price: 40 },
  { name: "Chicken Biryani", price: 70 }
];

const menuList = document.getElementById("menuList");

menuItems.forEach((item, index) => {
  const li = document.createElement("li");
  li.className = "menu-item";
  li.innerHTML = `
    <input type="checkbox" id="item-${index}" />
    <label for="item-${index}">${item.name} - $${item.price}</label>
    <div class="quantity">
      <button onclick="changeQty(${index}, -1)">−</button>
      <span id="qty-${index}">0</span>
      <button onclick="changeQty(${index}, 1)">+</button>
    </div>
  `;
  menuList.appendChild(li);
});

function changeQty(index, delta) {
  const qtySpan = document.getElementById(`qty-${index}`);
  let currentQty = parseInt(qtySpan.textContent);
  currentQty = Math.max(0, currentQty + delta);
  qtySpan.textContent = currentQty;
}