const getDaysInMonth = (month, year) => {
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
        if(year % 4 === 0){
          if(year % 100 === 0){
            if(year % 400 === 0){
              return 29;
            }else{
              return 28;
            }
          }else{
            return 29;
          }
        }else{
          return 28;
        }
      default:
        return "Invalid month";
    }
  }
  
  console.log(getDaysInMonth("February",2020)); // Output: 29