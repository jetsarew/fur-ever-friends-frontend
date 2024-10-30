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

export function timeUntilActivityBeDeleted(targetDateString: string) {
    const now = new Date();
    const targetDate = new Date(targetDateString);
  
    const diffMs = targetDate.getTime() - now.getTime() - 24 * 60 * 60 * 1000;
  
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
    if (diffDays > 0) {
      return `${diffDays} Day${diffDays > 1 ? "s" : ""}`;    
    } else if (diffHours > 0) {
        return `${diffHours} Hour${diffHours > 1 ? "s" : ""}`; 
    } else {
        return `${Math.max(diffMinutes, 1)} Minute${diffMinutes > 1 ? "s" : ""}`;
    }
}

export function convertUTCToTimeRemaining(utcDateString: string): { day?: number; hour?: number; minute?: number } {
    const now = new Date();
    const targetDate = new Date(utcDateString);

    const diffInMs = targetDate.getTime() - now.getTime();

    const day = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const hour = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.max(Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60)), 1);

    if(day > 0) {
        return {
            day: day,
            hour: hour,
        };
    }
    return { 
        hour: hour,
        minute: minute 
    };
}

export function timeAgo(utcDate: string) {
    const now = new Date();
    const pastDate = new Date(utcDate);
    const difference = now.getTime() - pastDate.getTime();

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
}


export function hasActivityTerminated(utcDate: string): boolean {
    const targetDate = new Date(utcDate);
    const now = new Date();

    return now > targetDate;
}


  

  