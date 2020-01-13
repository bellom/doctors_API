const appointment = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_APPOINTMENT":
      return action.appointment;

    case "FETCH_APPOINTMENT":
      return action.appointment;

    default:
      return state;
  }
};

export default appointment;
