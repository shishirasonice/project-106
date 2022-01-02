function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.startClassifier('https://teachablemachine.withgoogle.com/models/RQU0dBuB4/', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log('Got Result')
}