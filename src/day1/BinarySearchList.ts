export default function bs_list(haystack: number[], needle: number): boolean {
    /**
     * PSEUDO CODE
     * assume haystack is sorted
     * assign low(inclusive) and high(exclusive) indices
     * LOOP until low < high
        * mid = low + (high - low) / 2  
        // exceeds maximum limit for integers in some programming languages
        // prevents overflow issues and keeps indices within integer range
        * if midpoint value == needle, return true
        * if midpoint value > needle, update high = mid
        * if midpoint value < needle, update low = mid + 1
        * else return false
        *  
     */

    let low = 0
    let high = haystack.length
    do {
        let mid = Math.floor(low + (high - low) / 2);
        let value = haystack[mid]
        if(value === needle) {
            return true
        }
        else if(value > needle) { 
            high = mid
        }
        else if(value < needle) {
            low = mid + 1
        }
    } while(low < high);

    return false
}
