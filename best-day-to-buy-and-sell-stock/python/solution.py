class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = float('inf')
        max_prof = 0

        for price in prices:
            min_price = min(price, min_price)
            max_prof = max(max_prof, price - min_price)
        return max_prof
        
