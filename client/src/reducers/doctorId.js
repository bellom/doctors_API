const doctorId = (state = [], action) => {
  switch (action.type) {
    case 'SET_DOCTORID':
      return action.id;

    default:
      return state;
  }
};

export default doctorId;
