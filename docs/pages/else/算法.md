# 算法

LeetCode，算法个人笔记，初级算法，javascript，

js：创建多维数组

```js
// dp[n][2]
const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
```



## 数组

### [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`* 的那 **两个** 整数，并返回它们的数组下标。

> 输入：nums = [2,7,11,15], target = 9
> 输出：[0,1]
> 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

- 创建一个 map ，用于保存哈希表

- 遍历到数字 aa 时，用 target 减去 a，就会得到 b，若 b 存在于哈希表中，我们就可以直接返回结果了。若 b 不存在，那么我们需要将 a 存入哈希表，好让后续遍历的数字使用。

  


```js
var twoSum = function(nums, target) {
    let map = new Map()
    for(let a=0;a<nums.length;a++){
        if(map.has(target - nums[a])){
            return [map.get(target - nums[a]), a]
        }else{
            map.set(nums[a], a)
        }
    }
    return []
};
```





****



###  [26. 删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。



- **数组是有序的，原地删除重复元素，返回删除后数组长度。**
- 定义 fast 和 slow 两个指针，
  - fast指针用于遍历数组。
  - slow指针用于表示**下一个不同元素填入的位置**。
- 如果 `nums[fast]` 与 `nums[fast-1]` 的值不同，就将 `nums[fast]` 的值复制到 `nums[slow]`，然后slow++。



案例流程：`[0,0,1,1,1,2,2,3,3,4]`：一开始索引0和1的值都是0，相同那么就fast++（slow不变，到时候直接覆盖）。索引1和2相比，不相同那么将2 fast覆盖到1 slow。

```js
// 输入：nums = [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = function(nums) {
    let fast=1,slow=1
    while(fast<nums.length){
        if(nums[fast]!==nums[fast-1]){
            nums[slow]=nums[fast]
            slow++
        }
        fast++
    }
    return slow
};
```



****



### [66. 加一](https://leetcode-cn.com/problems/plus-one/)

给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

> 输入：digits = [1,2,3]
> 输出：[1,2,4]
> 解释：输入数组表示数字 123。
>
> 
>
> 输入：digits = [1,9]
> 输出：[2,0]

- **给数组尾部的数，加一，如果是10那么进1。**
- 倒序遍历，给值**加1**，mod 10。判断是否为0，如为0则需要继续循环，**进位**。直到不为0时，返回结果。
- 最后遍历完还需要进位（999），那么数组长度+1，首部为 1。（1000）

```js
var plusOne = function(digits) {
    let len = digits.length
    for(let i=len-1; i>=0; i--){
        digits[i]++
        digits[i] %= 10
        if(digits[i] !== 0){
            return digits
        }
    }
    digits = [...Array(len+1)].map(_=>0)
    digits[0]=1
    return digits
};
```





****



### [122. 买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

给定一个数组 `prices` ，其中 `prices[i]` 是一支给定股票第 `i` 天的价格。

>输入: prices = [7,1,5,3,6,4]
>输出: 7
>解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
>随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

1、动态规划

- 定义状态
  - `dp[i][0]`：第 i 天 手里**没有股票**的利润。
  - `dp[i][1]`：第 i 天 手里**有股票**的利润。
- `dp[i][0]`的转移方程
  - 转移状态1：前一天没有股票。
    - `dp[i-1][0]`
  - 转移状态2：前一天有股票，然后卖了，那么就需要加上 prices[i] 。
    - `dp[i-1][1]+prices[i]`
- `dp[i][1]`的转移方程
  - 转移状态1：前一天没有股票，然后买入了。需要减上 prices[i] 。
    - `dp[i-1][1] - price[i]`
  - 转移状态2：前一天有股票
    - `dp[i-1][1]`
- 根据初始状态，第 0 天时
  - `dp[0][0]=0`、`dp[0][1] -= prices[i]`
- 结果
  - 交易结束，持有股票的收益**一定低于**不持有股票的收益。（`dp[n-1][0] > dp[b-1][1]`）。
  - 因此 `renturn dp[n-1][0]`

```js
var maxProfit = function(prices) {
    const n = prices.length;
    const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
    dp[0][0] = 0, dp[0][1] = -prices[0];
    for (let i = 1; i < n; ++i) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[n - 1][0];
};
```



2、贪心

贪心算法只能用于计算最大利润，**计算的过程并不是实际的交易过程**。

```js
var maxProfit = function(prices) {
    let sum=0
    for(let i=1; i<prices.length; i++) {
        sum += Math.max(0, prices[i]-prices[i-1])
    }
    return sum
};
```



****



### 136.只出现一次的数字

给定一个**非空**整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

> 输入: [2,2,1] 
>
> 输出: 1

用 异或 ，只有相同时才是0。（`1^1=0。1^0=1。`）

```js
var singleNumber = function(nums) {
    let result=0;
    for(let i of nums){
        result ^= i
    }
    return result
};
```



****



### [189. 轮转数组](https://leetcode-cn.com/problems/rotate-array/)

给你一个数组，将数组中的元素向右轮转 `k` 个位置，其中 `k` 是非负数。

> 输入: nums = [1,2,3,4,5,6,7], k = 3
> 输出: [5,6,7,1,2,3,4]
> 解释:
> 向右轮转 1 步: [7,1,2,3,4,5,6]
> 向右轮转 2 步: [6,7,1,2,3,4,5]
> 向右轮转 3 步: [5,6,7,1,2,3,4]



1、数组翻转

| 操作                                          | 结果            |
| --------------------------------------------- | --------------- |
| 原始数组                                      | 1 2 3 4 5 6 7   |
| 翻转所有元素                                  | `7 6 5 4 3 2 1` |
| 翻转` [0, k mod n-1][0,k mod n−1] `区间的元素 | `5 6 7` 4 3 2 1 |
| 翻转` [k mod n, n-1][k mod n,n−1] `区间的元素 | 5 6 7 `1 2 3 4` |

需要注意的是，第 13 行，翻转的是 k-1，因为 start 是从 0 开始的。（如果k=3那么翻转的是 7 6 5，翻转 0到2的索引）

```js
let reverse = function(nums, start, end){
    while(start<end){
        let temp = nums[end]
        nums[end] = nums[start]
        nums[start] = temp
        start++
        end--
    }
}
var rotate = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length-1)
    reverse(nums, 0, k-1)
    reverse(nums, k, nums.length-1)
    return nums
};
```



****



### [217. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)

给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 `true` 。如果数组中每个元素都不相同，则返回 `false` 。

> 输入: [1,2,3,1]
> 输出: true

- 对于数组中每个元素，我们将它插入到哈希表中。如果插入一个元素时发现该元素已经存在于哈希表中，则说明存在重复的元素。

```js
var containsDuplicate = function(nums) {
    let set = new Set()
    for(let i =0; i<nums.length; i++){
        if(set.has(nums[i])){
            return true
        }
        set.add(nums[i])
    }
    return false
};
```



****



### [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

> 输入: [0,1,0,3,12]
> 输出: [1,3,12,0,0]

- 设置指针 left 和 right，**left指针永远指向 0**。
- right 当遍历到不是 0 时，交换 `nums[left]` 和 `nums[right]`。因为left一直都是指向0。
- 每执行一次循环 right 自加 1。

```js
var moveZeroes = function(nums) {
    let left=0,right=0
    while(right<nums.length){
        if(nums[right]!==0){
            swap(nums,left,right)
            left++
        }
        right++
    }
  return nums
};
function swap(nums,l,r){
    let temp=nums[r]
    nums[r]=nums[l]
    nums[l]=temp
}
```



****



### [350. 两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)

> 输入：nums1 = [1,2,2,1], nums2 = [2,2]
> 输出：[2,2]

- 先给两个数组进行升序排序，定义一个 arr 数组
- 定义 i 和 j 指针，对应nums1和nums2
- 判断两数组值是否相同，如果相同则 入栈
- 如果值不同，那么判断 `nums1[i]` 和 `nums2[i]`，哪个值更小，小的那个则**自加1**，因为数组是按照升序

```js
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let arr=[]
    let i=0,j=0
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]===nums2[j]){
            arr.push(nums1[i])
            i++
            j++
        }else nums1[i]>nums2[j] ? j++:i++
    }
    return arr
};
```

