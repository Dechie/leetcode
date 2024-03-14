class Solution {
  bool isPalindrome(int x) {
      int holder = x, rev = 0;

      
      if (x < 0){
        holder *= -1;
      }
      while(holder != 0) {
        rev = (rev * 10) + (holder % 10);
        holder = holder ~/ 10;
      }

      return x == rev;
  }
}
