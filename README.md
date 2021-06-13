# amazon-spreadsheet-bookmarklet
A bookmarklet to scrape basic info from Amazon product pages for use in a spreadsheet.

## Installation
1. Clone the repository `git clone https://github.com/JoeeBritton/amazon-spreadsheet-bookmarklet.git`
2. Install package dependencies `npm install`
3. (optional) change native Amazon domain within `index.js`
4. Generate bookmarklet `npm run format`
5. Add bookmark with contents of `out/bookmarklet.txt`

## Usage
On a Amazon product page, activate the bookmarklet to recieve a dialog containing product details separated via tab characters.

You may customize the string template used to display the product details inside of `index.js`.

Licensed under [GNU General Public License v3.0](https://www.gnu.org/licenses/)
