let homeScore = 0
let guestScore = 0
let homeFoul = 0
let guestFoul = 0

function score(team, point) {
    if (team == 1){
        homeScore += point
        document.getElementById("home").textContent = homeScore
    }
    else{
        guestScore += point
        document.getElementById("guest").textContent = guestScore
    }
    
    if (homeScore > guestScore){
        document.getElementById("home-title").style.textShadow = "0px 0px 5px #E4EC9C"
        document.getElementById("guest-title").style.textShadow = "none"
    }
    else if (homeScore < guestScore){
        document.getElementById("guest-title").style.textShadow = "0px 0px 5px #E4EC9C"
        document.getElementById("home-title").style.textShadow = "none"
    }
    else{
        document.getElementById("home-title").style.textShadow = "none"
        document.getElementById("guest-title").style.textShadow = "none"
    }
}

function foul(team) {
    if (team == 1){
        if (homeFoul< 5){
            homeFoul += 1
            document.getElementById("home-foul").textContent = homeFoul
        }
        if(homeFoul == 5) {
            document.getElementById("home-foul").style.color = 'red'
        }
    }
    else{
        if (guestFoul< 5){
            guestFoul += 1
            document.getElementById("guest-foul").textContent = guestFoul
        }
        if(guestFoul == 5) {
            document.getElementById("guest-foul").style.color = 'red'
        }
    }
}

function reset() {
    homeScore = 0;
    document.getElementById("home").textContent = homeScore
    guestScore = 0;
    document.getElementById("guest").textContent = guestScore
    homeFoul = 0
    document.getElementById("home-foul").textContent = homeFoul
    guestFoul = 0
    document.getElementById("guest-foul").textContent = guestFoul
    document.getElementById("home-foul").style.color = '#FFFF06'
    document.getElementById("guest-foul").style.color = '#FFFF06'
}