//Métodos de propiedad
//Mantienen la información en un solo objeto

//Supongamos que tenemos un reproductor
const reproductor = {
    //Una acción del objeto reproductor es reproducir
    reproducir: function (id) {
        console.log(`Reproduciendo canción con el ID: ${id}`);
    },
    //Otra acción es pausar
    pausar: function () {
        console.log("Pausando....");
    },
    crearPlayList: function (nombre) {
        console.log(`Creando la playList: ${nombre}`)
    },
    reproducirPlayList: function (nombre) {
        console.log(`Reproduciendo la playList: ${nombre}`)
    }
}
//Se puede colocar dentro del objeto o por fuera
reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la canción: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList("Para trapear");
reproductor.reproducirPlayList("Para trapear");
