const mongose = require("mongose");

const mahasiswaSchema = new mongose.Schema({
    nama: {

        type: String,

        required: true,
    },
    nim: {

        type: Number,
        required: true,
    },
    
    jurusan: {

        type: String,
        required: true,
    },

    alamat: {

        type: String,
        required: true,
    },
});

module.exports = mongose.modul("MahasiswaScheme");