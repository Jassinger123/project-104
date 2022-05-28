Webcam.set({
    width:300,
    height:350,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#cam');

function take_pic(){
    Webcam.snap(function(data_uri) {
        document.getElementById("captured_image").innerHTML='<img id="img" src="'+data_uri+'"/>';
    });
}

console.log("ml5",ml5.version);
classifier=classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KsEYt44bJ/model.json',model_loaded);

function model_loaded(){
    console.log("model_loaded");
}