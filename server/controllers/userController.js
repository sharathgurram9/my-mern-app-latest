let users =[{
    id:1,
    name:"John Doe"
},
{
    id:2,
    name:"Jane Doe"
}
]

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.getUserById=(req,res)=>{
    const user=users.filter(user=>user.id === req.params.id)
      if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user)
}

exports.createUser= (req,res)=>{
const newUser= {
    id:users.length+1,
    name:req.params.name
};
users=users.push(newUser)
  res.status(201).json(newUser);

}


exports.updateUser= (req,res)=>{
    const user=users.filter(user=>user.id === req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
user.name = req.body.name;
  res.json(user);
}

exports.deleteUser=(req,res)=>{
     users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
}