const user = require("../models/user");

// method : GET
// @localhost:8000/user/allusers
module.exports.getAllusers = async (req, res) => {
  const allusers = await user.find();
  return res.status(200).json(allusers);
};

// method : POST
// @ localhost:8000/user/add
module.exports.adduser = async (req, res) => {
  try {
    // req.body
    const { name, email, password, isActive } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const addeduser = new user({
      name,
      // field email : email miniscule
      email: email.toLowerCase(),
      password: hashedPassword,
      isActive,
    });

    await addeduser.save();
    return res.status(200).json(addeduser);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

// PUT
// @ localhost:8000/user/active/:idselected
// function => active user
module.exports.activeuser = async (req, res) => {
  const { idselected } = req.params;
  await user.findByIdAndUpdate(idselected, { $set: { isActive: true } });
  return res.status(200).json("activated!");
};

//delete
// @localhost:8000/user/delete/:iddelete
module.exports.deleteuser = async (req, res) => {
  const { iddelete } = req.params;
  await user.findByIdAndDelete(iddelete);
  return res.status(200).json("deleted!");
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginUser = await user.findOne({ email: email });
    if (!loginUser) {
      return res.status(401).send("no user with this email");
    }
    const isMatch = await bcrypt.compare(password, loginUser.password);
    if (!isMatch) {
      return res.status(400).send("invalid credentials");
    }
    const token = jwt.sign(
      //payload
      {
        id: loginUser._id,
      },
      "XXXXXXXXX", //jwt_secret
      { expiresIn: "1h" }
    );
    return res.status(200).json({ token });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};
