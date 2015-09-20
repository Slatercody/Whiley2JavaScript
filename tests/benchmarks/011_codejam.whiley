import whiley.lang.*
import whiley.io.File
import nat from whiley.lang.Int
import string from whiley.lang.ASCII

// ===============================================
// Definitions
// ===============================================

type Job is { nat button, bool orange }

// ===============================================
// Parser
// ===============================================

function parseJobs(nat pos, string input) -> ([Job],nat):
    //
    int|null nitems
    nitems,pos = Parser.parseInt(pos,input)
    if nitems != null:
        return parseNumJobs(nitems,pos,input)
    else:
        return ([],pos)

function parseNumJobs(nat nitems, nat pos, string input) -> ([Job],nat):
    //
    if nitems == 0:
        return ([],pos)
    else:
        pos = Parser.skipWhiteSpace(pos,input)
        if pos < |input|:
            int|null target, [Job] jobs
            bool flag = (input[pos] == 'O')
            pos = Parser.skipWhiteSpace(pos+1,input)
            target,pos = Parser.parseInt(pos,input)
            if target != null:
                jobs,pos = parseNumJobs(nitems-1,pos,input)
                jobs = [{button: target, orange: flag}] ++ jobs
                return jobs,pos        
        // default
        return ([],pos)

// ===============================================
// Main Computation
// ===============================================

function processJobs([Job] jobs) -> nat:
    //
    int Opos = 1    // current orange position
    int Bpos = 1    // current blue position 
    int Osaved = 0  // spare time orange has saved
    int Bsaved = 0  // spare time blue has saved
    int time = 0    // total time accumulated thus far
    // now, do the work!
    nat i = 0
    while i < |jobs| where time >= 0:
        Job job = jobs[i]
        if job.orange:
            int diff = Math.abs(job.button - Opos)
            int timediff = Math.max(0, diff - Osaved) + 1
            time = time + timediff
            Bsaved = Bsaved + timediff
            Osaved = 0
            Opos = job.button
        else:
            int diff = Math.abs(job.button - Bpos)
            int timediff = Math.max(0, diff - Bsaved) + 1
            time = time + timediff
            Osaved = Osaved + timediff
            Bsaved = 0
            Bpos = job.button
        i = i + 1
    // finally, return total time accumulated
    return time
            
