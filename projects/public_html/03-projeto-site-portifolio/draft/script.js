var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "knife";
var solved = false;

if (room === "gallery") {
    if (suspect === "Mrs. Van Cleve") {
        weapon = "trophy";
        solved = true;
    }
} else if (room === "ballroom") {
    if (suspect === "Mr. Kalehoff") {
        weapon = "posion";
        solved = true;
    }
} else if (room === "billiard room") {
    if (suspect === "Mrs. Sparr") {
        weapon = "cue";
        solved = true;
    }
} else(room === "dining room") {
    if (suspect === "Mr. Parkes") {
        weapon = "knife";
        solved = true;
    }
}



if (solved) {
    console.log("ok");
} else {
    console.log("erro");
}
