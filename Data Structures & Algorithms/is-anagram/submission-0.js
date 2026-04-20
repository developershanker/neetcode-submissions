class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {
       const getSortedStr = (str)=>{
        return str?.split("").sort().join()
    }
        const sortedA = getSortedStr(s)
        const sortedB = getSortedStr(t)
        return sortedA === sortedB
    }
}
