
//phan1
function check() {

    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
    let question5 = document.quiz.question5.value;
    let question6 = document.quiz.question6.value;
    let correct = 0;

    //neu tra loi dung thi correct se duoc + 1

    if (question1 == "Bridge Pose") {
        correct++;
    }
    if (question2 == "Child Pose") {
        correct++;
    }
    if (question3 == "Cobra Pose") {
        correct++;
    }
    if (question4 == "Dancer Pose") {
        correct++;
    }
    if (question5 == "Doward Facing Dog Pose") {
        correct++;
    }
    if (question6 == "Eagle Yoga Pose") {
        correct++;
    }



    //hinh ket qua va message tuong uong voi diem so 

    let pictures = ["img/question1.3.gif", "img/question1.2.gif", "img/question1.1.gif"];
    let messages = ["Namaste!", "That's just okay", "Try it again"];
    let score;

    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 6) {
        score = 1;
    }

    if (correct == 6) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
}

//phan2
function styleyoga1() {
    let pictureshatha = "img/p2hatha.gif";
    let messageshatha = "Hatha yoga is a standard term that includes most yoga styles that combine breathwork with physical postures. The term is broadly used, but typically involves a gentle introduction to basic yoga postures for beginners or those who prefer a more relaxed style. You probably won’t leave a hatha yoga class sweaty and tired, but you should end up feeling more relaxed and stretched out. Hatha classes may vary so it is best to call and inquire with the gym or studio offering the class.";
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messageshatha;
    document.getElementById("picture").src = pictureshatha;
}

function styleyoga2() {
    let picturevinyasa = "img/p2vinyasa.gif";
    let messagevinyasa = "Vinyasa-style yoga combines rhythmic breathing with a series of flowing postures for a vigorous mind-body workout. Since it links breath to movement, vinyasa yoga is fluid and quickly paced – perfect for those looking for something athletic and dynamic. Vinyasa yoga can also be called power yoga, depending on the gym or studio. Expect to move to upbeat music, sweat, and burn some calories in this type of yoga!";
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messagevinyasa;
    document.getElementById("picture").src = picturevinyasa;
}


function styleyoga3() {
    let pictureyinyoga = "img/p2yinyoga.gif";
    let messageyinyoga = "Yin yoga is a slow-paced style that is meant to be meditatitive and relaxing. It is often interchangeable with “Restorative” yoga as both typically use props to experience yoga in passive poses for several minutes. The focus is to lengthen the connective tissue – the tendons, fascia, and ligaments – in order to improve flexibility and increase circulation in the joints. Expect to hold poses for longer than usual (three to five minutes). This class is great to unwind after a long week or weekend and suitable for everyone looking to feel rejuvenated and relaxed.";
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messageyinyoga;
    document.getElementById("picture").src = pictureyinyoga;
}


function styleyoga4() {
    let pictureashtanga = "img/p2ashtanga.gif";
    let messageashtanga = "Ashtanga is very similar to vinyasa yoga, in rigor and style as both link breath to movement. Sometimes both terms are used interchangeably, but traditional ashtanga is more structured. It follows a specific sequence of poses in the exact same order, ideal for those looking for something predictable.Expect ashtanga to be hot, sweaty, and physically demanding.  This is best explored if you are used to a vigorous workout and is not intended for someone just starting to become more active.";
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messageashtanga;
    document.getElementById("picture").src = pictureashtanga;
}






//phan 3


function answer1() {
    let pictures1 = "img/p3flexible.gif";
    let messages1 = "Noway, you are not a box! yoga will make you flexible";
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages1;
    document.getElementById("picture").src = pictures1;

}

function answer2() {
    let pictures2 = "img/p3old.gif";
    let messages2 = "No comparision in Yoga, you are young from inside";
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages2;
    document.getElementById("picture").src = pictures2;

}
function answer3() {
    let pictures3 = "img/p3drinkyoga.gif";
    let messages3 = "Ofcourse you can, we can make you better focuser, bring some voska with you to the class";
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages3;
    document.getElementById("picture").src = pictures3;

}