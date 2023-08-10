https://teachablemachine.withgoogle.com/models/yOKN2IVaV/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camara=document.getElementById("camara")
Webcam.attach("#camara");
function fotos() {
    Webcam.snap(function(data_uri){
        document.getElementById("captura").innerHTML="<img id='resultado2'src='"+data_uri+"'/>"
    })
}
console.log("ml5 version:",ml5.version)
clasificador=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yOKN2IVaV/model.json",modelocargado);
function modelocargado() {
    console.log("modelo listo")
}
function identificar() {
    console.log("identificar")
    img=document.getElementById("resultado2");
    clasificador.classify(img,gotResult)
}
function gotResult(error,results) {
    if(error){
        console.log("error");
    }else{
    console.log(results);
    document.getElementById("resultado_nombre_seña").innerHTML=results[0].label
    document.getElementById("resultado_proba").inner=results[0].confidence.toFixed(2)*100+"%"
    }
}