// 17. Write a program which tells the number of days in a month.

const daysInMonth = (month) => {
    switch(month) {
      case "January":
      case "March":
      case "May":
      case "July":
      case "August":
      case "October":
      case "December":
        return 31;
      case "April":
      case "June":
      case "September":
      case "November":
        return 30;
      case "February":
        return 28;
      default:
        return "Invalid month";
    }
  }
  
  console.log(daysInMonth("January"));