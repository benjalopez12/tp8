const album = {
    artista: 'The Beatles',
    titulo: 'Abbey Road',
    año: 1969,
    canciones: ['Come Together', 'Something', 'Maxwell\'s Silver Hammer'],

    get info() {
        return `Álbum: ${this.titulo} - Artista: ${this.artista} - Año: ${this.año}`;
    },

    set actualizarDatos(nuevosDatos) {
        if (nuevosDatos.artista) this.artista = nuevosDatos.artista;
        if (nuevosDatos.titulo) this.titulo = nuevosDatos.titulo;
        if (nuevosDatos.año) this.año = nuevosDatos.año;
    }
};

console.log(album.info);

album.actualizarDatos = { artista: 'Queen', titulo: 'A Night at the Opera', año: 1975 };

console.log(album.info);
