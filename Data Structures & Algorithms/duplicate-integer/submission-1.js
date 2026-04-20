class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueArray = [...new Set(nums)]
        return nums?.length !== uniqueArray?.length
    }
}
