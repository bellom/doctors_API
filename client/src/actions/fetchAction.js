export const createUser = user => ({
  type: 'CREATE_USER',
  user,
});

export const fetchDoctor = doctors => ({
  type: 'FETCH_DOCTOR',
  doctors,
});

export const setDoctorId = id => ({
  type: 'SET_DOCTORID',
  id,
});

export const createAppointment = appointment => ({
  type: 'CREATE_APPOINTMENT',
  appointment,
});

export const fetchAppointment = appointment => ({
  type: 'FETCH_APPOINTMENT',
  appointment,
});

export const setDate = date => ({
  type: 'SET_DATE',
  date,
});
