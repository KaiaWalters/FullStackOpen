
var countNegatives = function(grid) {
    // this is where we will store our count of negative numbers. 
    let negCount = 0 
    // we fail fast if there are no rows in our grid to check. no rows, no negative numbers. 
    if(grid.length === 0) return 0 

    grid.forEach(row => {
        // creates the left pointer
        let left = 0  
        // creates the right pointer at the end of the array 
        let right = row.length - 1  
    
        while(left <= right) {
            // recalculates the value of the mid index as the left and right pointers change position
            let mid = Math.floor((left + right) / 2) 

            // here we check if the element at the mid index is negative. If it is, we know that from this point forward in the array, the rest of the numbers will be negative. We have this assurance because the array is sorted in descending order. 
            if(row[mid] < 0 ) {  

                //here we update the count. We know that from the mid index onward, elements will be negative numbers. So from mid index to the right pointer. This count is added to the neg count.
                negCount += right - mid + 1  
                
                //  we move the right pointer over to the left so that we can count the negative numbers within the range of the current mid point and the end of the array.
                right = mid - 1  

            } else {
                // ohter wise, we move the left pointer one point past the mid point since we know that from the begining of the array to the mid point, we only have positive numbers. 
                left = mid + 1
            }
        }
    })
    // we return the neg count once our loop ends. When the loop ends, the right and left pointer together will have traversed the entire array.
    return negCount 
};