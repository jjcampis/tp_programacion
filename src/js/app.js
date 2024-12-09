function sumar(event) {
    event.preventDefault();
    var n1 = parseInt(document.getElementById("a").value);
    var n2 = parseInt(document.getElementById("b").value);
    var imagencita = document.getElementById("imagencita");
    var respuesta = n1+n2; //calculo
    var r = document.getElementById("resultado");
    if (respuesta < 10) {
        imagencita.setAttribute("src","https://i1.sndcdn.com/artworks-n7ECrgQqv4IBSzXi-wMC8vg-t500x500.png")
    }else{
        imagencita.setAttribute("src","https://lareinadelvallenato.co/_next/image?url=https%3A%2F%2Fstrapi-aws-s3-images-lareinadelvallenato-bucket.s3.us-east-1.amazonaws.com%2Fchillguy_12e0974599.webp&w=1920&q=75")

    }
    r.innerText = respuesta;
    //console.log(n1+n2);
    
}
