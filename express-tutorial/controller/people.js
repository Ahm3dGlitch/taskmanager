const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const creatPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(401)
      .json({ success: false, msg: "Please Provide Name Value" });
  }
  res.status(201).json({ name });
  //res.status(201).send({ success: true, person: name });
};

creatPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(401)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ ...people, name });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(40)
      .json({ success: false, msg: `no person exist with id:${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `no person exist with id:${req.params.id}`,
    });
  }

  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  creatPerson,
  creatPersonPostman,
  updatePerson,
  deletePerson,
};
