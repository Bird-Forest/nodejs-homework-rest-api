const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/requests");

const { schemas } = require("../../models/contact");

const { validBody, isValidId } = require("../../middleware");

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.removeContact);

router.put(
  "/:contactId",
  isValidId,
  validBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
