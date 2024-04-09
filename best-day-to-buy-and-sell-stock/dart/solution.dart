import 'dart:math';
class Solution {
  int maxProfit(List<int> prices) {
    int minPrice = 200000; // dart doesn't have max value for int type
    int maxProf = 0;

    for (var price in prices) {
        minPrice = min(minPrice, price);
        maxProf = max(maxProf, price - minPrice);
    }
    return maxProf;
  }
}
