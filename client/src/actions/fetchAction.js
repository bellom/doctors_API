export const createUser = user => {
  return {
    type: 'CREATE_USER',
    user
  };
};

export const fetchDoctor = doctors => {
  return {
    type: 'FETCH_DOCTOR',
    doctors
  };
};

export const setDoctorId = id => {
  return {
    type: 'SET_DOCTORID',
    id
  };
};

export const createAppointment = appointment => {
  return {
    type: 'CREATE_APPOINTMENT',
    appointment
  };
};

export const fetchAppointment = appointment => {
  return {
    type: 'FETCH_APPOINTMENT',
    appointment
  };
};

export const setDate = date => {
  return {
    type: 'SET_DATE',
    date
  };
};
