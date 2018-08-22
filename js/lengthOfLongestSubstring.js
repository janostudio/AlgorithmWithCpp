var lengthOfLongestSubstring = function(s) {
  var length = 0;
  var arr = [];
  var result = 0;
  for (var i = 0; i < s.length; i++) {
      var index = arr.indexOf(s[i]);
      if (index > -1) {
          length= length-index;
          arr.splice(0, index+1);
          arr.push(s[i]);
      }else{
          length++;
          arr.push(s[i]);
      }
      if(result < length) result = length;
  }
  return result;
};

// dvdf   abcabcbb aab pwwkew 
console.log(lengthOfLongestSubstring("pwwkew"));