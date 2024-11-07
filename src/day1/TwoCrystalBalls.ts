/**
 * Given two crystal balls that will break if dropped from high enough distance. Determine exact distance in which it will break in the most optimized way.
 - EXPECTED STRATEGIC OUTCOME:
 Must use least number of steps to determine breaking point, i.e., 
 one crystal ball is broken at a time and 2nd crystal ball will be passing through same steps.
 */

export default function two_crystal_balls(breaks: boolean[]): number {
    /**
     * PSEUDO 
     * - My approach - O(n) - linear search
     * breaks arary consists of boolen values, i.e., 0s and 1s
     * len(breaks) - sum(breaks) = index of 1st 'true'
     * 
     * - Recommended approach - O(sqrt(n)) - jump search and linear search
        jumpStep = sqrt(breaks.length)
        startPoint1 = jumpStep

        // First ball - jump search
        while(startPoint1 < breaks.length && !breaks[startPoint1]) {
            startPoint1 += jumpStep
        }

        // Back up to last known good point
        startPoint1 -= jumpStep

        // Second ball - linear search
        for(let i = startPoint1; i < Math.min(startPoint1 + jumpStep, breaks.length); i++) {
            if(breaks[i]) return i
        }
        return -1
     */

    // ** My Approach V2.0 **
    let jumpStep = Math.floor(Math.sqrt(breaks.length))
    let startPoint1 = jumpStep
    // 1st crystal ball - jump search for breakpoint 
    while(!breaks[startPoint1] && startPoint1 < breaks.length) {
        startPoint1 += jumpStep
    } // loop breaks at located breakpoint

    // 2nd crystal ball - linear search from safepoint to breakpoint
    startPoint1 -= jumpStep // safepoint
    for(let i = startPoint1; i < Math.min(startPoint1 + jumpStep, breaks.length); i++) {
        if(breaks[i]) { return i }
    }


    // ** FM approach **
    // for(; startPoint1 < breaks.length; startPoint1 += jumpStep) {
    //     if(breaks[startPoint1]) { break; }
    // }
    // startPoint1 -= jumpStep
    // for(let startPoint2 = 0; startPoint2 < jumpStep && startPoint1 < breaks.length; ++startPoint1, ++startPoint2) {
    //     if(breaks[startPoint1]) {return startPoint1 }
    // }

    return -1
}