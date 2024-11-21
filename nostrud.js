for (var day = 1; day <= lastDate; day++) {
    if (day === today) {
        // Do something special for today's date
        console.log('Today is the ' + day + 'th day of the month.');
    } else if (day <= lastDate) {
        // Do something for other days of the month
        console.log('Day ' + day + ' of the month.');
    }
}
