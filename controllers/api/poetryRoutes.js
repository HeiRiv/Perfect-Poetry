const router = require('express').Router();
const { Poetry } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPoetry = await Poetry.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPoetry);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const poetryData = await Poetry.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!poetryData) {
      res.status(404).json({ message: 'No poetry found with this id!' });
      return;
    }

    res.status(200).json(poetryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
