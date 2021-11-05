
function superbowlWin(yearsPlayed){
    const win = yearsPlayed.find(function(yearsPlayed){
        return yearsPlayed.result == "W";
    });
    if (win) {
        return win.year;
    } else {
        return win;
    }
}