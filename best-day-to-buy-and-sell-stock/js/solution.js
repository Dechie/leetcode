/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let minPrice = Number.MAX_VALUE;
   let maxProf = 0;

   for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProf = Math.max(maxProf, price - minPrice);

   }
   return maxProf;
};
