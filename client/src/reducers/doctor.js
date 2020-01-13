const doctors = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DOCTOR":
      return action.doctors;

    default:
      return state;
  }
};

export default doctors;
