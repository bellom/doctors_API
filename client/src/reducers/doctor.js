const doctor = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DOCTOR':
      return action.doctors;

    default:
      return state;
  }
};

export default doctor;