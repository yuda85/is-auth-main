exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      token:
        "IS_AUTH_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxldXNlciJ9.v2sMXu-AZMMcJ27rIvjYwotjTgWh6FIQuNtLnB4MLf8",
    }),
  };
};
