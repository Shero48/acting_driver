import React from 'react'
import moment from 'moment'

const get_time = (time) => {
    const current=moment();
    const find=moment(time);
    let result;
    switch(true){
      case current.year()>find.year():
          result=current.year() - find.year()+" year ago";
          console.log(current.year() ,find.year())
          break;
      case current.month()>find.month():
          result=current.month()-find.month()+" month ago"
          console.log(current.month(),find.month())
          break;
      case current.date() > find.date():
          result = current.date()-find.date()+" day ago";
          console.log(current.date(),find.date())
          break;
      case current.hour()>find.hour():
          result=current.hour()-find.hour()+" hour ago";
          console.log(current.hour(),find.hour())
          break;
      case current.minute()>find.minute():
            result=current.minute()-find.minute()+" minute ago";
            console.log(current.minute(),find.minute())
            break;
      case current.seconds()>find.seconds():
            result=current.seconds()-find.seconds()+" second ago"
            console.log(current.seconds(),find.seconds())
            break;
      default:
         result="just now";
    }
    return result
}

export default get_time
