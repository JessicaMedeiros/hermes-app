const BemEstar = require("../../model/bem-estar/bem-estar.model");
const sequelize = require("../../../config/sequelize");

exports.buscarPeloIDPaciente = async (req, res) => {
  const { id_paciente } = req.params;

  BemEstar.findAll({
    where: {
      id_paciente: id_paciente,
     
    },
    order: [['id_bem_estar', "DESC"]],
  })
    .then((item) => {
      console.log("item", item);
      res.status(200).send(item);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Houve um erro ao tentar executar essa ação.",
      });
    });
};
