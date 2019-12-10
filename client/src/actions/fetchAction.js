export const createUser = user => {
  return {
    type: "CREATE_USER",
    user,
  };
};

export const fetchDoctor = doctor => {
  return {
    type: "FETCH_DOCTOR",
    doctor,
  };
};

export const createAppointment = appointment => {
  return {
    type: "CREATE_APPOINTMENT",
    appointment,
  };
};

export const fetchAppointment = appointment => {
  return {
    type: "FETCH_APPOINTMENT",
    appointment
  };
};