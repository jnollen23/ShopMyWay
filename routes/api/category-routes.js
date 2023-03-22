const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product,
    },
  }).then((items) => {
    res.status(200).json(items);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
      },
    ],
  }).then((item) => {
    res.status(200).json(item);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch(err => {
      res.status(400).json(err)
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where:{
      id:req.params.id
    }
  }).then((item)=>{
    res.status(200).json(item);
  }).catch((err)=>{
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    }
  }).then((count) => {
    res.status(200).json(JSON.parse(count));
  }).catch((err) => {
    res.status(400).json(err);
  })
});

module.exports = router;
