import Router from "express"

const router = Router()

router.post('/workflow', workflowEdit)
router.get('/workflow', workflowGet)
router.get('/workflow/:id', workflowGet)
router.put('/workflow/:id', workflowEdit)

