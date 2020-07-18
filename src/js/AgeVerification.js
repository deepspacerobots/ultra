const AgeVerification = (start, end) => {

    // Copy date objects so don't modify originals
    var s = new Date(+start);
    var e = new Date(+end);
    var timeDiff, years, months, days, hours, minutes, seconds;
  
    // Get estimate of year difference
    years = e.getFullYear() - s.getFullYear();
  
    // Add difference to start, if greater than end, remove one year
    // Note start from restored start date as adding and subtracting years
    // may not be symetric
    s.setFullYear(s.getFullYear() + years);
    if (s > e) {
      --years;
      s = new Date(+start);
      s.setFullYear(s.getFullYear() + years);
    }
    // Get estimate of months
    months = e.getMonth() - s.getMonth();
    months += months < 0? 12 : 0;
  
    // Add difference to start, adjust if greater
    s.setMonth(s.getMonth() + months);
    if (s > e) {
      --months;
      s = new Date(+start);
      s.setFullYear(s.getFullYear() + years);
      s.setMonth(s.getMonth() + months);
    }
  
  
    // Get remaining time difference, round to next full second
    timeDiff = (e - s + 999) / 1e3 | 0;
    days     =  timeDiff / 8.64e4 | 0;
    hours    = (timeDiff % 8.64e4) / 3.6e3 | 0;
    minutes  = (timeDiff % 3.6e3) / 6e1 | 0;
    seconds  =  timeDiff % 6e1;
  
    return [years, months, days, hours, minutes, seconds];
  }

export default AgeVerification;