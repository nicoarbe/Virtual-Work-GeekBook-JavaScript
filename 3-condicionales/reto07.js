let currentYear = 3;
const regularity = 4;
const positionYear = currentYear % regularity;
const nextleapYear = 20;

if (currentYear < 4 ) {
    console.log(`El próximo año bisiesto es el año ${regularity}`);
} else if (positionYear === 1) {
    console.log(`El próximo año bisiesto es el año ${currentYear + 3}`);
} else if (positionYear === 2) {
    console.log(`El próximo año bisiesto es el año ${currentYear + 2}`);
} else if (positionYear === 3) {
    console.log(`El próximo año bisiesto es el año ${currentYear + 1}`);
} else {
    console.log(`El año ${currentYear} es bisiesto el próximo bisiesto sería el año ${currentYear + 4}`);
}