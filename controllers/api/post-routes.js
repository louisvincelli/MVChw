const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    try {
      const newPost= await Post.create({
        ...body,
        user_id: req.session.user_id,
        // title: req.session.title,
        // body: req.session.body,
      });
  
      res.json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async(req, res) => {
    try {
        const updatedPost = await Post.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        if (affectedRows > 0) {
            res.status(200).end()
        } else {
            res.status(404).end()
        }
    } catch (err){
        res.status(500).json(err)
    }
});

router.delete('/:id', withAuth, async(req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
            id: req.params.id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No item found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router