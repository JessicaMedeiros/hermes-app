const OcorrenciaDesfecho = require("../../model/ocorrencia/ocorrencia-desfecho.model");

exports.buscarPeloIDDaOcorrencia = async (req, res) => {
  
  const { id_ocorrencia } = req.params;

  OcorrenciaDesfecho.findOne({
    where: {
      id_ocorrencia: id_ocorrencia,
    },
  })
    .then((item) => {
    //   console.log("item", item);
      res.status(200).send(item.dataValues);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Houve um erro ao tentar executar essa ação.",
      });
    });
};

exports.atribuirProfissionalaOcorrencia = async (req, res) => {
  const { id_ocorrencia, id_profissional } = req.params;

  console.log(req.body);

  OcorrenciaDesfecho.findOne({
    where: {
      id_ocorrencia: id_ocorrencia,
    },
  })
    .then((item) => {
      item.update({
        id_profissional: id_profissional,
      });

      item.save();

      res.status(200).send(item.dataValues);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Houve um erro ao tentar executar essa ação.",
      });
    });
};

exports.salvarDesfechoOcorrencia = async (req, res) => {
  const { finalizar } = req.params;
  const {
    id_ocorrencia,
    id_profissional,
    desfecho,
    data_desfecho,
    utilizou_ambulancia,
  } = req.body;

  console.log("finalizar", typeof finalizar);

  const ativa = finalizar == "false" ? true : false;

  console.log('aaativa', ativa, typeof ativa)
  OcorrenciaDesfecho.findOne({
    where: {
      id_ocorrencia: id_ocorrencia,
    },
  })
    .then((item) => {
      item.update({
        id_profissional: id_profissional,
        desfecho: desfecho,
        data_desfecho: data_desfecho,
        data_finalizada: new Date().toISOString(),
        utilizou_ambulancia: utilizou_ambulancia,
        ativa: ativa,
      });

      item.save();

      res.status(200).send(item.dataValues);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Houve um erro ao tentar executar essa ação.",
      });
    });
};
