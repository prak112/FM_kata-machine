export default function bubble_sort(arr: number[]): number[] {
    /**
     * PSEUDO CODE
     * -- My Approach v1.0 -- -> O(n^2)
     * Sorting condition, Xi <= Xi+1
         
    startIndex = 0 // InnerLoop - increment after verifying sorting condition
    subsetLimiter = 0 // OuterLoop - increment after complete array iteration

    for(subsetLimiter = 0; subsetLimiter !== arr.length; subsetLimiter++)
        endIndex = arr.length - subsetLimiter

        for(startIndex = 0, startIndex !== endIndex; startIndex++ )
            // sorting condition
            if arr[startIndex] > arr[startIndex + 1]
                temp = arr[startIndex]
                arr[startIndex] = arr[startIndex + 1]
                arr[startIndex + 1] = temp

     * In subsequent iterations, sorting condition applied to sub-array, i.e., startIndex remains constant, endIndex keeps reducing after every iteration.
     */
    console.log('Unsorted array : ', arr)

    for(let subsetLimiter = 0; subsetLimiter < arr.length; subsetLimiter++){
        let endIndex = arr.length - subsetLimiter

        for(let startIndex = 0; startIndex !== endIndex; startIndex++){
            if(arr[startIndex] > arr[startIndex + 1]){
                let temp = arr[startIndex]
                arr[startIndex] = arr[startIndex + 1]
                arr[startIndex + 1] = temp
            }
        }
    }

    console.log('Sorted array: ', arr)
    return arr
}