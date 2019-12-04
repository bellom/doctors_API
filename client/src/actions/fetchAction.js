import store from "../store";

export const createUser = () => {
  return {
    type: "CREATE_USER"
  };
};

export const fetchDcotor = doctor => {
  return {
    type: "FETCH_DOCTOR",
    data: doctor,
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
    type: "FETCH_DOCTOR",
    data: appointment
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