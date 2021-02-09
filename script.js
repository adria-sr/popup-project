var winQuestionFeatures = "resizable=no, left=15px, top=15px, location=no, width=400px, height=400px, menubar=no, status=no, scrollbars=no, menubar=no";



function debut() {
  window.open("debut-01.html", '', winQuestionFeatures);
}

function question1() {
  window.open("question1.html", '', winQuestionFeatures);

  window.close();
}

function question201() {
  window.open("question2-01.html", '', winQuestionFeatures);
  window.close();
}

function question202() {
  window.open("question2-02.html", '', winQuestionFeatures);
  window.close();
}

function question301() {
  window.open("question3-01.html", '', winQuestionFeatures);
  window.close();
}

function question302() {
  window.open("question3-02.html", '', winQuestionFeatures);
  window.close();
}

function question303() {
  window.open("question3-03.html", '', winQuestionFeatures);
  window.close();
}

function question401() {
  window.open("question4-01.html", '', winQuestionFeatures);
  window.close();
}

function question402() {
  window.open("question4-02.html", '', winQuestionFeatures);
  window.close();
}

function question403() {
  window.open("question4-03.html", '', winQuestionFeatures);
  window.close();
}

function question404() {
  window.open("question4-04.html", '', winQuestionFeatures);
  window.close();
}

function badResult() {
  for (var i = 0; i < 900; i + 300) {
    for (var j = 0; j < 1200; j + 300) {
      window.open("popup-01.html", '', "left=" + i + ", top=" + j + ", width=300, height=300, menubar=no, scrollbars=no");

    }
  }
}

function mediumResult() {}

function goodResult() {

}