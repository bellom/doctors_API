import store from "../store";

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

export const thunk_action_creator = () => {
  store.dispatch(fetch_post());
  return function(dispatch, getState) {
    return fetch('/api/appointments')
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No such appointment found!!");
        } else dispatch(receive_post(data));
      })
      .catch(err => dispatch(receive_error()));
  };
};