import Organization from '../models/organization.model.js';

function getOrganizations(req, res) {
  Organization.find().then((organizations) => res.json(organizations));
}

function getOrganizationId(req, res) {
  const { organizationId } = req.params;
  Organization.findById(organizationId)
    .then((organization) => {
      res.json(organization);
    })
    .catch((error) => res.status(404).json('An unintended error occured'));
}

function postOrganization(req, res) {
  const organization = new Organization({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    street: req.body.address,
    zip: req.body.zip,
    city: req.body.city,
  });
  organization
    .save()
    .then((organizationSaved) => res.json(organizationSaved))
    .catch((error) => res.json(error.message));
}

function updateOrganization(req, res) {
  const { organizationId } = req.params;
  const updatedOrganization = req.body;

  Organization.findByIdAndUpdate(
    { _id: organizationId },
    updatedOrganization,
    (error, doc) => {
      if (error) {
        res.json({ message: error });
        return;
      }
      res.json(doc);
    }
  );
}

function deleteOrganization(req, res) {
  const { organizationId } = req.params;
  Organization.findByIdAndRemove({ _id: organizationId }, (error, doc) =>
    res.json({
      success: true,
      message: `The organization ${doc.name} has been deleted.`,
      data: doc,
    })
  );
}

export {
  getOrganizations,
  getOrganizationId,
  postOrganization,
  updateOrganization,
  deleteOrganization,
};
