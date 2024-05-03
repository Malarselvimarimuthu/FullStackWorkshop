
const favname = prompt("Enter who is Your Favourite Person (May be Name or Relationship)");
const personality = prompt("Enter how his personality is Good/Inspiring/Excellent/");
const teach =prompt("Enter what that person teaches you");
const goodmanner = prompt("Enter the Good manners followed by him");

document.getElementById('favPerson').innerHTML = favname ;
document.getElementById('favPersonality').innerHTML = personality;
document.getElementById('favteach').innerHTML = teach;
document.getElementById('favmanner').innerHTML = goodmanner;