// script file

let backPackQuantityValue = 0;
let waterBottleQuantityValue = 0;
let keyChainQuantityValue = 0;
let coffeeCupQuantityValue = 0;
let noteBookQuantityValue = 0;
let penQuantityValue = 0;
let giftBoxQuantityValue = 0;
let giftCardQuantityValue = 0;
let shipping = 0;
let gst = 0;
let rate = 0;
let total = 0;
let checkoutName = null;

function backPackQuantity()
{
  backPack = document.getElementById("backPack");
  backPackQuantityValue = getQuantity();
  if (validateNumeric(backPackQuantityValue))
  {
    backPack.innerHTML = backPackQuantityValue;
  }
}

function waterBottleQuantity()
{
  waterBottle = document.getElementById("waterBottle");
  waterBottleQuantityValue = getQuantity();
  if (validateNumeric(waterBottleQuantityValue))
  {
    waterBottle.innerHTML = waterBottleQuantityValue;
  }
}

function keyChainQuantity()
{
  keyChain = document.getElementById("keyChain");
  keyChainQuantityValue = getQuantity();
  if (validateNumeric(keyChainQuantityValue))
  {
    keyChain.innerHTML = keyChainQuantityValue;
  }
}

function coffeeCupQuantity()
{
  coffeeCup = document.getElementById("coffeeCup");
  coffeeCupQuantityValue = getQuantity();
  if (validateNumeric(coffeeCupQuantityValue))
  {
    coffeeCup.innerHTML = coffeeCupQuantityValue;
  }
}

function noteBookQuantity()
{
  noteBook = document.getElementById("noteBook");
  noteBookQuantityValue = getQuantity();
  if (validateNumeric(noteBookQuantityValue))
  {
    noteBook.innerHTML = noteBookQuantityValue;
  }
}

function penQuantity()
{
  pen = document.getElementById("pen");
  penQuantityValue = getQuantity();
  if (validateNumeric(penQuantityValue))
  {
    pen.innerHTML = penQuantityValue;
  }
}

function giftBoxQuantity()
{
  giftBox = document.getElementById("giftBox");
  giftBoxQuantityValue = getQuantity();
  if (validateNumeric(giftBoxQuantityValue))
  {
    giftBox.innerHTML = giftBoxQuantityValue;
  }
}

function giftCardQuantity()
{
  giftCard = document.getElementById("giftCard");
  giftCardQuantityValue = getQuantity();
  if (validateNumeric(giftCardQuantityValue))
  {
    giftCard.innerHTML = giftCardQuantityValue;
  }
}

function doCheckout()
{
  rate = (backPackQuantityValue * 25) + (waterBottleQuantityValue * 15) + (keyChainQuantityValue * 5)
    + (coffeeCupQuantityValue * 10) + (noteBookQuantityValue * 15) + (penQuantityValue * 10)
    + (giftBoxQuantityValue * 25) + (giftCardQuantityValue * 20);
    
  if (rate > 0)
  {
    checkoutName = prompt("Please provide the name for the gift order","");
    if (validateString(checkoutName))
    {
      if (rate < 50) 
      {
        shipping = 10; // Shipping Calculation
      }
      gst = 13/100 * rate; // GST Calculation
      total = rate + gst + shipping; // Overall Total 
      receiptDisplay();
    } 
  }
}

function validateNumeric(value)
{
  if ((isNaN(value)) || (value % 1 !== 0))
  {
    alert("Please enter a number");
    return false;
  }
  return true;
}

function validateString(value)
{
  let letters = /^[a-zA-Z\s]+$/;
  if (checkoutName === "" || !(checkoutName.match(letters)))
  {
    alert("Please enter a name");
    return false;
  }
  return true;
}

function getQuantity()
{
  return prompt("Enter the quantity","");
}

function receiptDisplay()
{
  checkout = document.getElementById("checkout");
  let invoice = "<strong class='checkout'>The gift for " + checkoutName + " on checkout</strong>";
  invoice = invoice + "<table id='invoice'><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th></tr>";

  if (backPackQuantityValue > 0)
  {
    invoice = invoice + "<tr><td>Backpack</td><td>$25</td><td>" + backPackQuantityValue + "</td><td>$" + backPackQuantityValue*25 + "</td></tr>";
  }

  if (waterBottleQuantityValue > 0)
  {
    invoice = invoice + "<tr><td>Water Bottle</td><td>$15</td><td>" + waterBottleQuantityValue + "</td><td>$" + waterBottleQuantityValue*15 + "</td></tr>";
  }

  if (keyChainQuantityValue > 0)
  {
    invoice = invoice + "<tr><td>Key Chain</td><td>$5</td><td>" + keyChainQuantityValue + "</td><td>$" + keyChainQuantityValue*5 + "</td></tr>";
  }

  if (coffeeCupQuantityValue > 0)
  {
    invoice = invoice + "<tr><td>Coffee Cup</td><td>$10</td><td>" + coffeeCupQuantityValue + "</td><td>$" + coffeeCupQuantityValue*10 + "</td></tr>";
  }

  if (noteBookQuantityValue > 0)
  {
    invoice = invoice + "<tr><td>Notebook</td><td>$15</td><td>" + noteBookQuantityValue + "</td><td>$" + noteBookQuantityValue*15 + "</td></tr>";
  }

  if (penQuantityValue > 0)
  {
    invoice = invoice + "<tr><td>Pen</td><td>$10</td><td>" + penQuantityValue + "</td><td>$" + penQuantityValue*10 + "</td></tr>";
  }

  if (giftBoxQuantityValue > 0)
  {
    invoice = invoice + "<tr><td>Gift Box</td><td>$25</td><td>" + giftBoxQuantityValue + "</td><td>$" + giftBoxQuantityValue*25 + "</td></tr>";
  }

  if (giftCardQuantityValue > 0)
  {
    invoice = invoice + "<tr><td>Gift Card</td><td>$20</td><td>" + giftCardQuantityValue + "</td><td>$" + giftCardQuantityValue*20 + "</td></tr>";
  }
    
  invoice = invoice + "<tr><td colspan='3'>Total</td><td>$" + rate + "</td></tr>";
  invoice = invoice + "<tr><td colspan='3'>GST</td><td>$" + gst + "</td></tr>";

  if (shipping > 0)
  {
    invoice = invoice + "<tr><td colspan='3'>Shipping</td><td>$" + shipping + "</td></tr>";
  }
  else
  {
    invoice = invoice + "<tr><td colspan='3'>Shipping</td><td>Free Shipping</td></tr>";
  }

  if (total > 0)
  {
    invoice = invoice + "<tr><td colspan='3'>Overall Total</td><td>$" + total + "</td></tr>";
  }

  invoice = invoice + "</table>";
  checkout.innerHTML = invoice;
}
