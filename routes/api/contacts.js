const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/requests");

const { addSchema } = require("../../models/contact");

const { validBody } = require("../../middleware");

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validBody(addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", validBody(addSchema), ctrl.updateContact);

router.patch("/:contactId/favorite", ctrl.updateContact);

module.exports = router;
