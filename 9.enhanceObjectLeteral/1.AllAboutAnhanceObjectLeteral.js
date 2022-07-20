function createBookShop(inventory) {
  return {
    /* if key and value are same then remove (: + value)
    inventory: inventory,
    
    remember all the key without value have to put infront of the object. Because we can easly see that those property are pass here
    */
    inventory,
    inventoryValue() {
      return inventory.reduce((sum, book) => sum + book.price, 0);
    },
    priceForTitle(title) {
      return inventory.find((book) => book.title === title).price;
    },
  };
}

const inventory = [
  { title: "Al Quran", price: 200 },
  { title: "Dui Boner FeraAsher Golpo", price: 600 },
];

const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("Al Quran"));

// let create a http request to end server to send data by using jquary ajax request

function saveFile(url, data) {
  $.ajax({
    method: "POST",
    url,
    data,
  });
}
// in this object letteral we do a rong things is that only key are below but key:value is the front side. But the right things is the only key is come first and the (key:value) payer is going to the last postion of this object like below
function saveFile(url, data) {
  $.ajax({
    url,
    data,
    method: "POST",
  });
}

const url = "http://fileupload.com";
const data = { color: "red" };
console.log(saveFile(url, data));
