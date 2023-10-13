const sequelize = require("../../../config/sequelize");
const Ocorrencia = require("../../model/ocorrencia/ocorrencia.model");
const Op = sequelize.Sequelize.Op;

exports.inserirNovaOcorrencia = async (req, res) => {
  console.log("req", req.body);
  var {object} = req.body;

  object =  JSON.parse(object)

  const [{ data, hora, observacao, medicamentos } ]= object;


  const im1_buffer = req.files[0] ? req.files[0].buffer : null;
  const im1_originalname = req.files[0] ? req.files[0].originalname : null;
  const im1_mimetype = req.files[0] ? req.files[0].mimetype : null;
  const im1_size = req.files[0] ? req.files[0].size : null;
  const im2_buffer = req.files[1] ? req.files[1].buffer : null;
  const im2_originalname = req.files[1] ? req.files[1].originalname : null;
  const im2_mimetype = req.files[1] ? req.files[1].mimetype : null;
  const im2_size = req.files[1] ? req.files[1].size : null;

  Ocorrencia.create({
    data_ocorrencia: data,
    id_paciente: 1,
    hora_ocorrencia: hora,
    sintomas:observacao,
    medicacao_desc: medicamentos,
    updated_at: new Date().toISOString(),
    im1_buffer: im1_buffer,
    im1_originalname: im1_originalname,
    im1_mimetype: im1_mimetype,
    im1_size: im1_size,
    im2_buffer: im2_buffer,
    im2_originalname: im2_originalname,
    im2_mimetype: im2_mimetype,
    im2_size: im2_size,
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
        message: err.message || "Houve um erro ao tentar executar essa ação.",
      });
    });
};


function isFileValid(fileArray) {
    // Check if the array is not empty
    if (fileArray && fileArray.length > 0) {
      // Check if the first element (at index 0) is not null and exists
      if (fileArray[0]) {
        return true; // The file is valid
      }
    }
    return false; // The file is not valid
  }