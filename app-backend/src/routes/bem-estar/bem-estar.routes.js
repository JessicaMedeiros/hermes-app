const buscarController = require('../../controllers/bem-estar/buscar.controller');
const inserirController = require('../../controllers/bem-estar/inserir.controller');
const checagemRespostaController = require('../../controllers/bem-estar/checagem-respondida.controller');
const historicoPacienteController = require('../../controllers/bem-estar/historico.controller');
const deletarController = require('../../controllers/bem-estar/deletar.controler');

const router = require('express').Router(); 


router.get('/bem-estar/:id_paciente', buscarController.buscarPeloIDPaciente);
router.get('/bem-estar/checa-se-respondida/:id_paciente', checagemRespostaController.chegaSeUsuarioJaRespondeuFeedbackDoDia);
router.get('/bem-estar/historico/:id_paciente', historicoPacienteController.buscarPeloIDPaciente);

router.post('/bem-estar/adicionar/novo', inserirController.inserirNovoBemEstar);

router.patch('/bem-estar/excluir/:id_bem_estar', deletarController.deletarPeloID);


module.exports = router;