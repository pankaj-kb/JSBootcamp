// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer


let currentWeather = "March";

switch (currentWeather) {
    case "September":
    case "October":
    case "November":
        console.log("Autumn")
        break;
    case "December":
    case "January":
    case "February":
        console.log("Winter")
        break;
    case "March":
    case "April":
    case "May":
        console.log("Spring")
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer")
        break;
}