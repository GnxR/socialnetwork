var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    category_name: {type: String, required: true},
    
  }
);

// Виртуальное свойство для полного имени автора
AuthorSchema
.virtual('name')
.get(function () {
  return this.category_name;
});

// Виртуальное свойство - URL автора
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/';
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);
