const pantalla = document.querySelector(" .pantalla");
const botones = document.querySelectorAll(" .boton");

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        const botonOn = boton.textContent;

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!") {
                pantalla.textContent = ">";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                console.log(evalRegex(pantalla.textContent));
                if (!evalRegex(pantalla.textContent)) {
                    pantalla.textContent = "¡Error!";
                } else {
                    pantalla.textContent = eval(pantalla.textContent);
                }
            } catch {
                pantalla.textContent = "¡Error!";
            }
            return;
        }

        if (pantalla.textContent === ">" || pantalla.textContent === "¡Error!") {
            pantalla.textContent = botonOn;
        } else {
            pantalla.textContent += botonOn;
        }

        if (boton.id === "limpiar") {
            pantalla.textContent = ">";
            return;
        }


    })
});

function evalRegex(param) {
    if (param != "" && typeof param != undefined) {
        const regu = /^\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*$/;
        return regu.test(param);
    } else {
        return false;
    }
}
