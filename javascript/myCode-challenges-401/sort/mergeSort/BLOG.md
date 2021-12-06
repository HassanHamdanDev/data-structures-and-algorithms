# Merge Sort

**It takes an array and divides it in half continuously until each sub-array has a length of 1. Then each of the sub-arrays is summed in (ascending) order at the top of the call stack until the entire array is sorted.**

### Pseudocode

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

### Trace

Sample Array: [8,4,23,42,16,15]
Correct Output: [4,8,15,16,23,42]

![pass1](./img/merge-sort.png)




### Efficiency

  - O(n log n) time 
 - O(n) space



