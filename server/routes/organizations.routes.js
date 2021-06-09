import express from 'express';

import {
  getOrganizations,
  getOrganizationId,
  postOrganization,
  updateOrganization,
  deleteOrganization,
} from '../controller/organizations.controller.js';

const router = express.Router();

router.get('/organizations', getOrganizations);
router.get('/organizations/:organizationId', getOrganizationId);
router.post('/organizations', postOrganization);
router.put('/organizations/:organizationId', updateOrganization);
router.delete('/organizations/:organizationId', deleteOrganization);

export default router;
