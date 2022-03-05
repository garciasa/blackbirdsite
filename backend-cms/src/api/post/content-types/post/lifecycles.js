module.exports = {
  beforeCreate(event) {
    const { model, action } = event;
    strapi.log.info(`beforeCreate: ${action}`);
  },
};
