import whiley.lang.*
import * from whiley.lang.System

import nat from whiley.lang.Int

type Pos is (int,int)

function conflict(Pos p, nat row, nat col) -> bool:
    int r, int c = p
    if r == row || c == col:
        return true
    int colDiff = Math.abs(c - col)
    int rowDiff = Math.abs(r - row)
    return colDiff == rowDiff

function run(Pos[] queens, nat n, int dim) -> Pos[][] 
// The number of allocated queens is at most the number of queens
requires n <= |queens|
// Dim matches the size of the array
requires dim == |queens|:
    //
    if dim == n:
        return [queens]
    else:
        Pos[][] solutions = [[(0,0);0];0]
        int col = 0
        while col < dim where n < |queens| && dim == |queens|:
            bool solution = true
            int i = 0
            while i < n where n < |queens| && i >= 0 && dim == |queens|:
                Pos p = queens[i]
                if conflict(p,n,col):
                    solution = false
                    break
                i = i + 1
            if solution:
                queens[n] = (n,col)
                solutions = append(solutions,run(queens,n+1,dim))
            col = col + 1
        return solutions

// This will be deprecated once the Array.append function is generic.
function append(Pos[][] xs, Pos[][] ys) -> Pos[][]:
    Pos[][] zs =  [[(0,0);0]; |xs| + |ys|]
    zs = copy(xs,0,zs,0,|xs|)
    return copy(ys,0,zs,|xs|,|ys|)

function copy(Pos[][] xs, int xsStart, Pos[][] ys, int ysStart, int len) -> Pos[][]:
    int i = xsStart
    int j = ysStart
    int end = xsStart + len
    while i < end:
        ys[j] = xs[i]
        i = i + 1
        j = j + 1
    //
    return ys