function functionClickMe() {
    alert('What do you want from me !?');
}
function functionAboutMe() {
    var name = prompt("Tell me your name, I'll tell you mine: ");
    if (name === "" || name === null) {
        alert("hmm? Should type your name!");
    } else {
       
        document.getElementById('aboutme').innerHTML = "Hello " + name;
        document.getElementById('showAboutme').style.display = "block";
    }
}
function functionGiveUp() {
    alert("Want to give up !? NO! The prize is waiting for you.");
}
function functionDonClickMe() {
    alert("I said DON'T CLICK ME!!\n" + "I'm kidding! You are right when click this!\n" + "This is hint 2: Something just happened!\n" + "Remember: Find the difference!");
    // var head = document.getElementsByTagName('HEAD')[0];
    // document.getElementById('c').style.display="block";
    // // Create new link Element
    // var link = document.createElement('link');
    // var scripTag = document.createElement('script');
    // scripTag.src='js/gravity.js'
    // // set the attributes for link element 
    // link.rel = 'stylesheet';

    // link.type = 'text/css';

    // link.href = 'css/gravity.css';

    // // Append link element to HTML head
    // head.appendChild(scripTag);
    // head.appendChild(link);
    document.getElementById('lantern').style.display="block";
    document.getElementById('dbclickid').style.display="none";
}
function lantern_logo_dever(){
    alert('Congrat!! You are about to win! Just few more step! Something happened again!');
    document.getElementById('lantern').style.display="none";
    document.getElementById('puzzle').style.display="block";
    document.getElementById('light_cursor').disabled="true";
}