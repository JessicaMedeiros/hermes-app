const inserirController = require('../../controllers/ocorrencia/inserir.controller');
const historicoController = require('../../controllers/ocorrencia/historico.controller');
const desfechoController = require('../../controllers/ocorrencia/desfecho.controller');

const multer = require("multer");

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const router = require('express').Router(); 


router.post('/ocorrencia/adicionar/novo',  upload.array("files"), inserirController.inserirNovaOcorrencia);

router.get('/ocorrencia/historico/:id_paciente',  historicoController.buscarPeloIDPaciente);
router.get('/ocorrencia/buscar/:id_ocorrencia',  historicoController.buscarPeloIDDaOcorrencia);
router.get('/ocorrencia/geral/buscar/:status',  historicoController.buscarTodasOcorrencias);


router.patch('/ocorrencia/atribuir/profissional/:id_ocorrencia/:id_profissional',  desfechoController.atribuirProfissionalaOcorrencia);
router.get('/ocorrencia/buscar/desfecho/:id_ocorrencia',  desfechoController.buscarPeloIDDaOcorrencia);
router.patch('/ocorrencia/desfecho/salvar/:finalizar',  desfechoController.salvarDesfechoOcorrencia);



module.exports = router;

