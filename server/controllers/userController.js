const User = require('../models/Users');


exports.getUsers =async (req, res) => {
  try{
  const users=await User.find()
  res.json(users);
  }
  catch(error){
    res.status(500).json({ message: error.message });

  }
};

exports.getUserById= async(req,res)=>{
  try{
    const user=await User.findById(req.params.id)
    console.log("user",user)
      if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user)
  }
  catch(error){
    res.status(500).json({ message: error.message });

  }
}
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    // Save to MongoDB
    const newUser = new User({
      name,
      email,
      age
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ message: error.message });
  }
};


exports.updateUser = async (req, res) => {
  try {
        const { name, email, age } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email,age }, 
      { new: true, runValidators: true }
    );
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};