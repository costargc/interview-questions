// create a function check_sum(array,sum) that checks if there is a pair in the string given 
// where the sum matchs the value given.

// input: [1,2,3,9], sum = 8
// output: false

// input: [1,2,4,4], sum = 8
// output: True


function check_sum(list, value) {
    for (i = 0; i < list.length; i++) {
        for (j = 0; j < list.length; j++) {
            if (i != j) {
                sum_check = list[i] + list[j];
                if (sum_check == value) {
                    return true;
                }
            }
        }
    }
    return false;
}


console.log(check_sum([1, 2, 3, 9], 8)); //false
console.log(check_sum([1, 2, 4, 4], 8)); //true