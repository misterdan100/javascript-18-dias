async function crearPost(titulo, contenido) {
    try {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: titulo,
                body: contenido,
                userId: 1,
            })
        });

        //* lo que pasa si hay error
        if(!respuesta.ok) {
            throw new Error("Error en la Solicitud: " + respuesta.statusText);
        };

        let data = await respuesta.json();
        console.log(data);

    } catch (error) {
        console.error('algo salio mal...', error);
    }
}

crearPost('MI titulo', "este es un bello post")