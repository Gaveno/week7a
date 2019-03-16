var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB, { useNewUrlParser: true } );
mongoose.set('useCreateIndex', true);


function genreValid(genre) {
    switch (genre) {
        case "Action":
        case "Adventure":
        case "Comedy":
        case "Drama":
        case "Fantasy":
        case "Horror":
        case "Mystery":
        case "Thriller":
        case "Western":
            return true;
        default:
            return false;
    }
}

// movie schema
var MovieSchema = new Schema({
    title: { type: String, required: true, index: { unique: true } } ,
    year: { type: String, required: true },
    genre: { type: String, required: true },
    actors: [ { actorname: { type: String, required: true }, charactername: { type: String, required: true } },
              { actorname: { type: String, required: true }, charactername: { type: String, required: true } },
              { actorname: { type: String, required: true }, charactername: { type: String, required: true } }
              ]
});

MovieSchema.pre('save', function(next) {
    next();
});

module.exports = mongoose.model('Movie', MovieSchema);