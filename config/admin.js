module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eeb0884d170b6b4e616a42274878a2a3'),
  },
});
