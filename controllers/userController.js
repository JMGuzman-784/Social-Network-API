const { User, Thought } = require('../models');
const userController = {
    // get all users 
    getUsers(req,res) {
        User.find()
        .then((students) => res.json(students))
        .catch((err) => res.status(500).json(err));
    },
    // get single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('friends')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    
}

