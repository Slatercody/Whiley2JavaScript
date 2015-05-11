

public function meth([byte] bytes) -> [int]:
    [int] data = []
    for i in 0 .. |bytes|:
        data = data ++ [Byte.toUnsignedInt(bytes[i])]
    return data

public export method test() -> void:
    [byte] bytes = [00000000b, 00000001b, 00000011b, 00000111b]
    assume meth(bytes) == [0,1,3,7]

