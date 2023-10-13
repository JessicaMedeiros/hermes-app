const BemEstar = require("../../model/bem-estar/bem-estar.model");
const sequelize = require("../../../config/sequelize");
const Op = sequelize.Sequelize.Op;

exports.buscarPeloIDPaciente = async (req, res) => {
  const { id_paciente } = req.params;
  console.log("------------------------", id_paciente);
  checkFeedbackForCurrentDay(id_paciente)
    .then((feedback) => {
      if (feedback) {
        // User has responded to feedback for the current day.
        console.log("Feedback Information:");
        console.log("ID:", feedback);
      } else {
        // User has not responded to feedback for the current day.
        console.log("User has not responded to feedback for the current day.");
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
