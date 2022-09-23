var list1 = document.getElementById('list1');
var list2 = document.getElementById('list2');
var prices = [];

function getDetails() {

    //to enter the product name into table
    var name = document.getElementById('pname').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(name));
    list1.appendChild(entry);

    //to enter the price into table
    var price = document.getElementById('pprice').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(price));
    list2.appendChild(entry);

    //to do total of all prices
    prices.push(price);
    var total = 0;
    for (var x = 0; x < prices.length; x++) {
        total += parseInt(prices[x]);
    }
    document.getElementById("total").innerHTML = total;
}
  