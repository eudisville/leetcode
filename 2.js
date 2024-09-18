const replaceElements = (arr) => {
    const n = arr.length
    const result = new Array(n)
    let maxRight = -1

    for (let i = n - 1; i >= 0; i--) {
        result[i] = maxRight
        if (arr[i] > maxRight) {
            maxRight = arr[i]
        }
    }

    result[n - 1] = -1

    return result
}

const a = [17, 18, 5, 4, 6, 1]
const result = replaceElements(a)
console.log(result)