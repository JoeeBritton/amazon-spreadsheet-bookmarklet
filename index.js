/*
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

/* NOTE: this script does NOT convert currency. Specify a domain that best matches the currency of
  your spreadsheet from the list of supported domains. */

// WARNING: must be present in "supportedDomains".
var nativeDomain = "www.amazon.ca";

function getMessageTemplate () {
  /*
    ==================
    Message template:
    ==================
    - productName = name of product
    - url = url of the product page
    - priceRaw = price listed of the product (w/ currency)
    - price = price of the product (w/o currency)
    - shippingCostRaw = shipping cost of the product (w/ currency)
    - shippingCost = shipping cost of the product (w/o currency)
    - \t = tab character (used in spreadsheets to separate cells when copy/pasting)
  */

  // Message displayed on your native Amazon site.
  nativeMessageTemplate = `${productName}\t \t${url}\t${price}\t${shippingCost}`;

  // Message displayed on all other supported sites.
  otherMessageTemplate = `${productName}\t \t${url}\t \t \t \t \t \t${priceRaw}\t${shippingCost}`;
}

/*
  =================
  END OF USER AREA
  =================
*/

var supportedDomains = [
  "www.amazon.ca",
  "www.amazon.co.jp",
  "www.amazon.co.uk",
  "www.amazon.com"
];

if (!supportedDomains.includes(nativeDomain)) {
  throw new Error(`Unsupported native domain: ${nativeDomain}`);
}
if (!supportedDomains.includes(location.hostname)) {
  throw new Error(`Unsupported domain: ${location.hostname}`);
}

var productName = "";
var url = "";
var shippingCostRaw = "";
var priceRaw = "";

productName = document.getElementById("productTitle");
url = location.href;
shippingCostRaw = document.querySelector("#priceBadging_feature_div > span.a-size-base");
priceRaw = document.getElementById("priceblock_ourprice");
if (priceRaw === null) {
  priceRaw = document.getElementById("priceblock_saleprice");
}
if (priceRaw === null) {
  priceRaw = document.getElementById("price_inside_buybox");
}
if (priceRaw === null) {
  priceRaw = document.getElementById("kindle-price");
}
if (priceRaw === null) {
  priceRaw = document.querySelector("span#price");
}
if (priceRaw === null) {
  [priceRaw] = document.getElementsByClassName("offer-price a-size-medium");
}

if (productName === null) {
  productName = "";
} else {
  console.log("Found product name.");
  productName = productName.innerText;
}

if (shippingCostRaw === null) {
  shippingCostRaw = "";
} else {
  console.log("Found shipping cost.");
  shippingCostRaw = shippingCostRaw.innerText;
}

if (priceRaw === null) {
  priceRaw = "";
} else {
  console.log("Found price.");
  priceRaw = priceRaw.innerText;
}

// Extracts price value (e.g., £45.10 => 45.10)
var priceRe = /(?:[0-9]+,)*[0-9]+\.[0-9]{2}/g;

var shippingCost = "";
var price = "";
if (priceRaw.match(priceRe) !== null) {
  [price] = priceRaw.match(priceRe);
}
if (shippingCostRaw.match(priceRe) !== null) {
  [shippingCost] = shippingCostRaw.match(priceRe);
}

var message = "";
var nativeMessageTemplate = "";
var otherMessageTemplate = "";
getMessageTemplate();

if (location.hostname === nativeDomain) {
  message = nativeMessageTemplate;
} else {
  message = otherMessageTemplate;
}

// Show messagebox
void prompt(
  "Amazon Product Details",
  message
);
