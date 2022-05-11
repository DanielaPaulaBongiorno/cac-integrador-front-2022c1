function resumen() {
    const valor = 200
    if (document.getElementById("categorias").value === "estudiante") {
        document.getElementById("pago").innerText = document.getElementById("pago").innerHTML + document.getElementById("cant").value * valor * 0.2
    } else {
        if (document.getElementById("categorias").value === "trainee") {
            document.getElementById("pago").innerText = document.getElementById("pago").innerHTML + document.getElementById("cant").value * valor * 0.5
        } else {
            if (document.getElementById("categorias").value === "junior") {
                document.getElementById("pago").innerText = document.getElementById("pago").innerHTML + document.getElementById("cant").value * valor * 0.85
            }
        }
    }
}


