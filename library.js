var library = (function() {
  return {
	  
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			var date = new Date();
			var unix = date.getTime();
			return String(unix).substr(0,9);
		},
		UnixMillisecond: function(){
			var date = new Date();
			var msec = date.getTime();
			return String(msec);
		}
	  }
	})(),
	
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){},
	   	    WithOutSeconds: function() {}
		  }
		})(),
		
		MDY: (function(){
	  	  return {
		    Numeral: function(){},
			Name: function(){}
		  }
		  })(),
		}
	})(),
	
	Second: (function(){
		return{
			Second: function(){
			var date = new Date();
				var second = date.getSeconds();
				return String(second);	
			},
			DblDigit: function(){
				var date = new Date();
				var second = date.getSeconds();
				if (second < 10) {
					return '0' + second;
				}
				return String(second);
			}
		}
	})(),
	
	Minute: (function(){
		return{
			Minute: function(){
				var date = new Date();
				var minutes = date.getMinutes();
				return String(minutes);
			},
			DblDigit: function(){
				var date = new Date();
				var minutes = date.getMinutes();
				if (minutes < 10) {
					return '0' + minutes;
				}
				return String(minutes);
			}
		}
	})(),
	
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				var date = new Date;
				var hours = date.getHours();
				return String(hours);
			},
			TwelveHour: function() {
        		var date = new Date();
				var hours = date.getHours();
				if (hours > 12) {
					hours -= 12;
				}
				return String(hours);
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						var hours = new Date().getHours();
						var ampm = (hours >= 12) ? 'PM' : 'AM';
						return String(ampm);				
					},
					LowerCase: function(){
						var hours = new Date().getHours();
						var ampm = (hours >= 12) ? 'pm' : 'am';
						return String(ampm);
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				var date = new Date();
				var dowNum = date.getDay();
				var dayName = '';
				if (dowNum === 0) {
					dayName = 'Sunday';
				} else if (dowNum === 1) {
					dayName = 'Monday';
				} else if (dowNum === 2) {
					dayName = 'Tuesday';
				} else if (dowNum === 3) {
					dayName = 'Wednesday';
				} else if (dowNum === 4) {
					dayName = 'Thursday';
				} else if (dowNum === 5) {
					dayName = 'Friday';
				} else if (dowNum === 6) {
					dayName = 'Saturday';
				}
				return dayName;
			},
			AbrDayOfWeek: function(){
				var dayName = this.DayOfWeek();
				return dayName.substr(0,3);
			},
			FirstTwoOfWeek: function(){
				var dayName = this.DayOfWeek();
				return dayName.substr(0,2);
			},
			WeekOfYear: function(){
				var date = new Date();
				var woyNum = date.getDate();
				if (woyNum < 52); {
					woyNum = "38";
				}
				return String(woyNum);
			}
		}
	})(),
	
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						var date = new Date;
						var dateNum = date.getDate();
						return String(dateNum);
					},
					Ordinal: function(){
						var date = new Date;
						var monthNum = date.getDate();
						if (monthNum < 31) {
						switch (date) {
              				case 1:
              				case 21:
               				case 31:
                   			return "" + monthNum + "st";

               				case 2:
              			 	case 22:
                   			return "" + monthNum + "nd";

               				case 3:
               				case 23:
                   			return "" + monthNum + "rd";

               				default:
                   			return "" + monthNum + "th";
                			}
						}
						return String (monthNum);	
					},
					DateDblDigit: function(){
						var date = new Date;
						var dblNum = date.getDate();
						if (dblNum < 10) {
							dblNum = '0' + dblNum;
						}
						return String (dblNum);
					}
				}
			})(),
			MonthNumber: function(){
				var date = new Date();
				var monthNum = date.getMonth() + 1; 
				return String(monthNum);
			},
			MonthNumberDblDigit: function(){
				var date = new Date();
				var currentMonth = date.getMonth() + 1;
				if (currentMonth < 10) {
					currentMonth = '0' + currentMonth;
				}
				return String(currentMonth);
			},
			AbrOfCurrentMonth: function(){
               var date = new Date()
               var currentMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
               return currentMonth[ date.getMonth() ]
           },
			CurrentMonth: function(){
               var date = new Date()
               var currentMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
               return currentMonth[ date.getMonth() ]
           },
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
						var date = new Date();
						var start = new Date(date.getFullYear(), 0, 0);
						var diff = date - start;
						var oneDay = 1000 * 60 * 60 * 24;
						var day = Math.floor(diff / oneDay);
				return String(day);
					},
					Ordinal: function(){
						var date = new Date();
						var start = new Date(date.getFullYear(), 0, 0);
						var diff = date - start;
						var oneDay = 1000 * 60 * 60 * 24;
						var day = Math.floor(diff / oneDay);
						switch (day.toString[day.length -1]) {
							case 1: + day + "st";
							case 2: + day + "nd";
							case 3: + day + "rd";
							default: return + day + "th";
						}
					}
				};
			})(),
			YearFull: function(){
				var date = new Date();
				var year = date.getFullYear();
				return String(year);
			},
			YearAbr: function(){
				var date = new Date();
				var year = date.getFullYear();
				return String(year).substr(-2);
			}
		}
	})(),
	Defaults: function(){}
  }
})();