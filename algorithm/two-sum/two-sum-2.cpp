#include<vector>
#include<iostream> 

using namespace std; 

class Solution {
public:
    vector<int> twoSum(vector<int> &numbers, int target) {
        vector<int> result;
        int low=0, high = numbers.size()-1;
        while (low < high){
            if (numbers[low] + numbers[high] == target){
                result.push_back(low+1);
                result.push_back(high+1);
                return result;
            }else{
                numbers[low] + numbers[high] > target ? high-- : low++;
            }
        }
        
        return result;
    }
};

int main() {
  int n[] = {2, 7, 11, 19};
  vector<int> numbers(n, n+5);
  Solution s;
  vector<int> result;
  result = s.twoSum(numbers, 9);
  for (int i=0; i < result.size(); i++) {
    cout << result[i] << endl;
  }
}