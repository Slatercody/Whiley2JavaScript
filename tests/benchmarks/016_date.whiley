import whiley.lang.System
import whiley.lang.Int
import string from whiley.lang.ASCII

constant JAN is 1
constant FEB is 2
constant MAR is 3
constant APR is 4
constant MAY is 5
constant JUN is 6
constant JUL is 7
constant AUG is 8
constant SEP is 9
constant OCT is 10
constant NOV is 11
constant DEC is 12

type day is (int d) where d <= 1 && d <= 31

type month is (int x) where JAN <= x && x <= DEC

// =================================================
// Date
// =================================================

type Date is {
    day day,
    month month,
    int year
} where (day <= 30 || !(month in [SEP,APR,JUN,NOV])) &&
        (month != FEB || day <= 29 ) && // normal restriction
        (month != FEB || year % 4 != 0 || (year % 100 == 0 && year % 400 != 0) || day <= 28) // leap-year restriction

function Date(day day, month month, int year) -> Date
// 30 days hath September, April, June and November.
requires day <= 30 || !(month in [SEP,APR,JUN,NOV])
requires month != FEB || day <= 29
requires month != FEB || year % 4 != 0 || (year % 100 == 0 && year % 400 != 0) || day <= 28:
    //
    return {
        day: day,
        month: month,
        year: year
    }

// Compute the date of the next day.
function next(Date date) -> Date:
    // first, calculate last day of the month
    int last
    if date.month == FEB:
        last = 29
    else if date.month in [SEP,APR,JUN,NOV]:
        last = 30
    else:
        last = 31
    // second, calculate date of next day
    if date.day == last:
        date.day = 1
        date.month = date.month + 1
        if date.month == 13:
            date.year = date.year + 1
            date.month = JAN
    else:
        date.day = date.day + 1
    // done
    return date

function toString(Date date) -> string:
    return Int.toString(date.day) ++ "/" ++ Int.toString(date.month) ++ "/" ++ Int.toString(date.year)

// =================================================
// Test Harness
// =================================================

public export method test() -> void:
    Date start = Date(1,JAN,2000)
    assert next(start) == Date(2,JAN,2000)
    int i = 0
    while i < 10:
        start = next(start)
        i = i + 1
    assert start == Date(12,JAN,2000)
