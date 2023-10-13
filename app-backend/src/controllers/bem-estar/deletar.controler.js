const BemEstar = require("../../model/bem-estar/bem-estar.model");

exports.deletarPeloID = async (req, res) => {
    const { id_bem_estar } = req.params;
  
    BemEstar.destroy({
      where: {
        id_bem_estar: id_bem_estar,
      }
    })
      .then(() => {
        res.status(200).send({
          message: "Removido com sucesso.",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: err.message || "Houve um erro ao tentar executar essa ação.",
        });
      });
  };
  