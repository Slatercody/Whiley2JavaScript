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

function run([Pos] queens, nat n, int dim) -> [[Pos]] 
// The number of allocated queens is at most the number of queens
requires n <= |queens|
// Dim matches the size of the array
requires dim == |queens|:
    //
    if dim == n:
        return [queens]
    else:
        [[Pos]] solutions = []
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
                solutions = solutions ++ run(queens,n+1,dim)                    
            col = col + 1
        return solutions

public export method test() -> void:
    int dim = 10
    [(int,int)] init = []
    //
    int i = 0
    while i < dim:
        init = init ++ [(0,0)]
        i = i + 1
    //
    assume |init| == dim
    [[Pos]] solutions = run(init,0,dim)