// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'categoryId',
});

Product.hasMany(ProductTag, {
  foreignKey:'productId',
  onDelete:'CASCADE',
});

ProductTag.belongsTo(Product, {
  foreignKey:'productId',
});

Tag.hasMany(ProductTag, {
  foreignKey:'tagId',
  onDelete:'CASCADE',
});

ProductTag.belongsTo(Tag,{
  foreignKey:'tagId',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
