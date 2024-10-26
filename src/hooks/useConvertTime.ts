export function convertToUTC(localDateTime: string) {

    const localDate = new Date(localDateTime + 'Z');
  
    const utcDate = new Date(localDate.getTime() + localDate.getTimezoneOffset() * 60000);
    const utcString = utcDate.toISOString();
  
    return utcString;
}

export function formatUTCDate(utcDateString: string) {
    const date = new Date(utcDateString);
  
    const options:Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate
}

export function timeUntil(targetDateString: string): {diffTime: number, unit: string} {
    const now = new Date();
    const targetDate = new Date(targetDateString);
  
    const diffMs = targetDate.getTime() - now.getTime();
  
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
    if (diffDays > 0) {
      return {
            diffTime: diffDays,
            unit: "d"
        }    
    } else if (diffHours > 0) {
        return {
            diffTime: diffHours,
            unit: "h"
        }
    } else {
        return {
            diffTime: Math.max(diffMinutes, 1),
            unit: "m"
        }
    }
}
  


  

  