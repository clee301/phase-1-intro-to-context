function createEmployeeRecord(arr){

    const record = {   
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
    }
    return record
    }
    
function createEmployeeRecords(arr){

        const mapThis = arr.map(function(x, y){
        const record = {
            firstName: arr[y][0],
            familyName: arr[y][1],
            title: arr[y][2],
            payPerHour: arr[y][3],
            timeInEvents: [],
            timeOutEvents: []
          }
                return record
        })
            return mapThis
        }
    
function createTimeInEvent(emp, period){
    
    const dateExtract = period.substr(0, 10)
    const hourExtract = Number(period.substring(11))
    
    const timeInData = {
    type: 'TimeIn',
    date: dateExtract,
    hour: hourExtract
    } 
    const timeIn = emp.timeInEvents
    timeIn.push(timeInData)
    
    return emp
}
    
function createTimeOutEvent(emp, period){
    
    const dateExtract = period.substr(0, 10)
    const hourExtract = Number(period.substring(11))
    
    const timeOutData = { 
     type: 'TimeOut',
     date: dateExtract,
     hour: hourExtract 
    } 
    const timeOut = emp.timeOutEvents
    timeOut.push(timeOutData)
    
    return emp
    }   
    
function hoursWorkedOnDate(emp, date){
    const timeEventDate = emp.timeInEvents[0]['date']
    const timeEventIn = emp.timeInEvents[0]['hour']
    const timeEventOut = emp.timeOutEvents[0]['hour']
    
if(timeEventDate == date){
    let hours = timeEventOut - timeEventIn
    return hours/100
    }
}    
    
function wagesEarnedOnDate(emp, date){
    const timeEventDate = emp.timeInEvents[0]['date']
    const timeEventIn = emp.timeInEvents[0]['hour']
    const timeEventOut = emp.timeOutEvents[0]['hour']
    const wageRate = emp.payPerHour
        
    if(timeEventDate == date){

    let hours = timeEventOut - timeEventIn
    let hoursCount = hours/100
    let amount = wageRate * hoursCount
    return amount
    }
}

function allWagesFor(emp){
 	
    const timeEventIn = emp.timeInEvents
    const timeEventOut = emp.timeOutEvents
      const wageRate = emp.payPerHour
    
   const x = timeEventOut.map(function(item, index) {
    return item.hour - timeEventIn[index]['hour'];
  })
  const y = x.map(function(x){
      return x/100
  })
  
  const aggregate = y.reduce((partialSum, a) => partialSum + a, 0);
    
   return aggregate * wageRate
  }

  function calculatePayroll(emp){
	
    const allEmp = emp.map(function(x){        
      return allWagesFor(x)
    })
    
    const totalMoney = allEmp.reduce(function(x, y){
        return x + y
    })
    
    return totalMoney   
    
  }