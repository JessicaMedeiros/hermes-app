const sequelize = require("../../../config/sequelize");
const BemEstar = require("../../model/bem-estar/bem-estar.model");
const Op = sequelize.Sequelize.Op;

exports.chegaSeUsuarioJaRespondeuFeedbackDoDia = async (req, res) => {
  console.log("req", req.body);
  const { id_paciente } = req.params;

  checkFeedbackForCurrentDay(id_paciente)
    .then((bemestar) => {
      if (bemestar) {
        res.status(200).send({
          message: true,
          item: bemestar,
        });
      } else {
        res.status(200).send({
          message: false,
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

async function checkFeedbackForCurrentDay(id_paciente) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to the beginning of the day.

  const bemEstar = await BemEstar.findOne({
    where: {
      id_paciente: id_paciente,
      updated_at: {
        [Op.gte]: today,
      },
    },
  });

  return bemEstar;
}
