var today = new Date();
var hourNow = today.getHours();

const TrendChartHandler = () => {
    if (hourNow > 18) {
        return (
            "こんばんは！"
        )
    } else if (hourNow > 10) {
        return (
            "こんにちは!"
        )
    } else if (hourNow > 3) {
        return (
            "おはよう！"
        )
    } else if (hourNow > 0) {
        return (
            "こんばんは！"
        )
    } else {
        return (
            "Welcome!"
        )
    } 
  }
  export default TrendChartHandler