import whiley.lang.*

// the British interpretation of traffic lights!
type TrafficLights is {
    bool red,
    bool amber,
    bool green    
} where (!red && !amber && green) ||
        (!red && amber && !green) || // ignoring flashing
        (red && !amber && !green) ||
        (red && amber && !green)

function TrafficLights() -> TrafficLights:
    return {
        red: true,
        amber: false,
        green: false
    }

function change(TrafficLights ls) -> TrafficLights:
    if ls.green:
        // -> !red && !amber && green
        return { red: false, amber: true, green: false }
    else if ls.red:
        // -> red && ~amber && !green
        if ls.amber:
            // -> red && amber && !green
            return { red: false, amber: false, green: true }
        else:
            return { red: true, amber: true, green: false }
    else:
        // -> !red && amber && !green
        return { red: true, amber: false, green: false }

function toString(TrafficLights ls) -> ASCII.string:
    ASCII.string r
    //
    if ls.red:
        r = "RED "
    else:
        r = "    "
    if ls.amber:
        r = Array.append(r,"AMBER ")
    else:
        r = Array.append(r,"       ")
    if ls.green:
        r = Array.append(r,"GREEN ")
    else:
        r = Array.append(r,"      ")
    return r
