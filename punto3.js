const libro = {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    añoPublicacion: 1967,
    genero: 'Realismo mágico',
    disponible: true,

    get info() {
        return `Título: ${this.titulo}\nAutor: ${this.autor}\nAño de Publicación: ${this.añoPublicacion}\nGénero: ${this.genero}\nDisponible: ${this.disponible ? 'Sí' : 'No'}`;
    },

    prestar: function() {
        if (this.disponible) {
            this.disponible = false;
            console.log(`El libro "${this.titulo}" ha sido prestado.`);
        } else {
            console.log(`El libro "${this.titulo}" no está disponible para préstamo.`);
        }
    },

    devolver: function() {
        if (!this.disponible) {
            this.disponible = true;
            console.log(`El libro "${this.titulo}" ha sido devuelto.`);
        } else {
            console.log(`El libro "${this.titulo}" ya está disponible.`);
        }
    }
};
console.log(libro.info); 
libro.prestar();         
console.log(libro.info); 
libro.devolver();        
console.log(libro.info); 
