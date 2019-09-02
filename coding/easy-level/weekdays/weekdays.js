// Input: 1
// Output: 'Monday'

// Input: 5
// Output: 'Friday'

// Input: 8
// Output: undefined

function weekdays(count) {
    weekobj = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    }

    return weekobj[count];
}

console.log(weekdays(1)); //Monday
console.log(weekdays(5)); //Friday
console.log(weekdays(8)); //Undefined