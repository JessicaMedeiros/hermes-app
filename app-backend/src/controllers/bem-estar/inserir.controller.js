const sequelize = require("../../../config/sequelize");
const BemEstar = require("../../model/bem-estar/bem-estar.model");
const Op = sequelize.Sequelize.Op;

exports.inserirNovoBemEstar = async (req, res) => {
  console.log("req", req.body);
  const { id_paciente, nota, observacao } = req.body;

  
  checkFeedbackForCurrentDay(id_paciente)
    .then((feedback) => {
      if (feedback) {
        // User has responded to feedback for the current day.
        console.log("Feedback Information:");
        console.log("ID:", feedback);

        res.status(501).send({
          message:
            "User has  responded to feedback for the current day.",
        });
      } else {
        // User has not responded to feedback for the current day.
        console.log("User has not responded to feedback for the current day.");

        // res.status(200).send({
        //   message:
        //     "User has not responded to feedback for the current day.",
        // });
        
        BemEstar.create({
          id_paciente: id_paciente,
          nota: nota,
          updated_at: new Date().toISOString(),
          observacao: observacao,
        })
          .then((item) => {
            res.json({
              message: "Nível de bem estar registrado com sucesso.",
              Item: item,
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send({
              message:
                err.message || "Houve um erro ao tentar executar essa ação.",
            });
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
