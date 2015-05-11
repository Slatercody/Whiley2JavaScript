

type nat is (int x) where x >= 0

function abs([int] items) -> [nat]
requires |items| > 0:
    return abs(items, 0)

function abs([int] items, nat index) -> [nat]
requires (index <= |items|) && all { i in 0 .. index | items[i] >= 0 }:
    if index == |items|:
        return items
    else:
        items[index] = Math.abs(items[index])
        return abs(items, index + 1)

public export method test() -> void:
    [nat] xs = [1, -3, -5, 7, -9, 11]
    xs = abs(xs)
    assume xs == [1,3,5,7,9,11]
