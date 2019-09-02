// write a function that converts a number to Roman Numeral.
// Try using the following map:

// ```
// var roman = {M:1000,CM:900,D:500,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
// ```

function convertoRoman(number){
    var roman = {M:1000,CM:900,D:500,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
var ans='';
while(number>0){
    for(a in roman){
        if(roman[a]<=number){
            ans+=a;
            number-=roman[a];
            break;
             }
    }
}
return ans;
}

//convertoRoman(1986) = MCMLXXXVI;
//convertoRoman(2019) = MMXIX;

console.log(convertoRoman(1986));
console.log(convertoRoman(3999));
