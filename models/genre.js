var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  GenreSchema
.virtual('lifespan')
.get(function() {
  var lifespan = "-";
  if (this.date_of_birth && this.date_of_death) {
    lifespan = this.date_of_birth.getFullYear + "-" + this.date_of_death.getFullYear
  } if (!this.date_of_dath) {
    lifespan = this.date_of_birth.getFullYear + "-"
  }
  return lifespan;
})

);

var AuthorSchema = new Schema(
  AuthorSchema
.virtual('lifespan')
.get(function() {
  var lifespan = "-";
  if (this.date_of_birth && this.date_of_death) {
    lifespan = this.date_of_birth.getFullYear + "-" + this.date_of_death.getFullYear
  } if (!this.date_of_dath) {
    lifespan = this.date_of_birth.getFullYear + "-"
  }
  return lifespan;
})
);



//Export model
module.exports = mongoose.model('Genre', GenreSchema);
