const OcorrenciaSemFile = require("../../model/ocorrencia/ocorrencia-sem-files.model");
const sequelize = require("../../../config/sequelize");

exports.buscarPeloIDPaciente = async (req, res) => {
  const { id_paciente } = req.params;

  OcorrenciaSemFile.findAll({
    where: {
      id_paciente: id_paciente,
     
    },
    order: [['id_ocorrencia', "DESC"]],
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

exports.buscarPeloIDDaOcorrencia = async (req, res) => {
  const { id_ocorrencia } = req.params;

  OcorrenciaSemFile.findOne({
    where: {
      id_ocorrencia: id_ocorrencia,
     
    }
  })
    .then((item) => {
      console.log("item", item);
      res.status(200).send(item.dataValues);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Houve um erro ao tentar executar essa ação.",
      });
    });
};

exports.buscarTodasOcorrencias = async (req, res) => {

  const {status} = req.params;
   console.log('statyus', status)

  var ativa = status == 'ativa'? true : false;
  console.log('ayiva', ativa)
  OcorrenciaSemFile.findAll({  
    where: {
      ativa: ativa
    },
    order: [['id_ocorrencia', "DESC"]],
  })
    .then((item) => {
      // console.log("item", item);
      res.status(200).send(item);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Houve um erro ao tentar executar essa ação.",
      });
    });
};