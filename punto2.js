const jugador = {
    nombre: 'Lionel Messi',
    edad: 36,
    posicion: 'Delantero',

    get datos() {
        return `Jugador: ${this.nombre} - Edad: ${this.edad} - Posición: ${this.posicion}`;
    },

    calcularEdadEn2027() {
        const edadEn2027 = 2027 - (2023 - this.edad);
        console.log(`En 2027, ${this.nombre} tendrá ${edadEn2027} años.`);
    }
};

console.log(jugador.datos);

jugador.calcularEdadEn2027(); 
