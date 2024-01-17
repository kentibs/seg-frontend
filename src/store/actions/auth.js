import { authActions } from "../reducers/auth";
import { baseUrl } from "../../utils/utils";
import { notificationActions } from "../reducers/notification";

export const createUser = () => {};

const saveDataToStorage = (user, token) => {
  localStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      user: user,
    })
  );
};

export const authenticate = (user, token) => {
  return async (dispatch) => {
    await dispatch(authActions.authenticate({ token: token, user: user }));
    // saveDataToStorage(user, token);
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/api/v1/users/signin`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      dispatch(
        notificationActions.showCardNotification({
          type: "error",
          message: error.message,
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideCardNotification());
      }, [5000]);
      throw new Error(error.message);
    }

    const data = await response.json();

    await dispatch(
      authActions.authenticate({
        token: data.accessToken,
        user: data.user,
      })
    );
    saveDataToStorage(data.user, data.accessToken);
    dispatch(
      notificationActions.showCardNotification({
        type: "success",
        message: "You have logged in successfully",
      })
    );
    setTimeout(() => {
      dispatch(notificationActions.hideCardNotification());
    }, [5000]);
  };
};

export const logOut = () => {
  localStorage.clear();
  return async (dispatch) => {
    await dispatch(authActions.logout());
  };
};

// "firstName": "Muhumuza",
//     "lastName": "Kennedy",
//     "email": "kennedymuhumuza283@gmail.com",
//     "gender": "male",
//     "phoneNumber": "0780138103",
//     "password": "kennedy",
//     "signupToken": 56986468

export const signupAdmin = (
  firstName,
  lastName,
  email,
  gender,
  phoneNumber,
  password,
  signupToken
) => {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/api/v1/users/signup`, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        gender,
        phoneNumber,
        password,
        signupToken,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      await dispatch(
        notificationActions.showCardNotification({
          type: "error",
          message: error.message,
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideCardNotification());
      }, [5000]);
      throw new Error(error.message);
    }

    await dispatch(
      notificationActions.showCardNotification({
        type: "success",
        message: "Account created successfully",
      })
    );
    setTimeout(() => {
      dispatch(notificationActions.hideCardNotification());
    }, [5000]);
  };
};

export const signup = (
  firstName,
  lastName,
  email,
  gender,
  phoneNumber,
  password
) => {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/api/v1/users/register`, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        gender,
        phoneNumber,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      await dispatch(
        notificationActions.showCardNotification({
          type: "error",
          message: error.message,
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideCardNotification());
      }, [5000]);
      throw new Error(error.message);
    }

    await dispatch(
      notificationActions.showCardNotification({
        type: "success",
        message: "Account created successfully",
      })
    );
    setTimeout(() => {
      dispatch(notificationActions.hideCardNotification());
    }, [5000]);
  };
};

export const forgotPassword = (email) => {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/api/users/forgot-password`, {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      dispatch(
        notificationActions.showCardNotification({
          type: "error",
          message: error.message,
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideCardNotification());
      }, [5000]);
      throw new Error(error.message);
    }

    const data = await response.json();
    dispatch(
      notificationActions.showCardNotification({
        type: "success",
        message: data.message,
      })
    );
    setTimeout(() => {
      dispatch(notificationActions.hideCardNotification());
    }, [5000]);
  };
};

export const resetPassword = (password, passwordResetToken) => {
  return async (dispatch) => {
    const response = await fetch(
      `${baseUrl}/api/users/reset-password/${passwordResetToken}`,
      {
        method: "POST",
        body: JSON.stringify({
          password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      await dispatch(
        notificationActions.showCardNotification({
          type: "error",
          message: error.message,
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideCardNotification());
      }, [5000]);
      throw new Error(error.message);
    }

    const data = await response.json();
    await dispatch(
      authActions.authenticate({
        token: data.token,
        user: data.user,
      })
    );
    saveDataToStorage(data.user, data.token);
  };
};

export const updatePassword = (userId, currentPassword, newPassword, token) => {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/api/users/update-password`, {
      method: "POST",
      body: JSON.stringify({ userId, currentPassword, newPassword }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      await dispatch(
        notificationActions.showCardNotification({
          type: "error",
          message: error.message,
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideCardNotification());
      }, [5000]);
      throw new Error(error.message);
    }

    await dispatch(
      notificationActions.showCardNotification({
        type: "success",
        message: "password update successful",
      })
    );
    setTimeout(() => {
      dispatch(notificationActions.hideCardNotification());
    }, [5000]);
  };
};

export const updateProfile = (userId, userName, email, token) => {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/api/users/update-profile`, {
      method: "POST",
      body: JSON.stringify({ userId, userName, email }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      await dispatch(
        notificationActions.showCardNotification({
          type: "error",
          message: error.message,
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideCardNotification());
      }, [5000]);
      throw new Error(error.message);
    }
    await dispatch(
      notificationActions.showCardNotification({
        type: "success",
        message: "Profile update successful",
      })
    );
    setTimeout(() => {
      dispatch(notificationActions.hideCardNotification());
    }, [5000]);
    const data = await response.json();
    localStorage.removeItem("userData");
    // update user data in the store
    await dispatch(
      authActions.authenticate({
        token: token,
        user: data.user,
      })
    );
    saveDataToStorage(data.user, data.token);
  };
};

export const uploadPhoto = (userId, photo, token) => {
  return async (dispatch) => {
    let formData = new FormData();
    formData.append("photo", photo);

    const response = await fetch(
      `${baseUrl}/api/users/upload-photo/${userId}`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      await dispatch(
        notificationActions.showCardNotification({
          type: "error",
          message: error.message,
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideCardNotification());
      }, [5000]);
      throw new Error(error.message);
    }
    await dispatch(
      notificationActions.showCardNotification({
        type: "success",
        message: "Image upload successful",
      })
    );
    setTimeout(() => {
      dispatch(notificationActions.hideCardNotification());
    }, [5000]);
    const data = await response.json();

    await dispatch(
      authActions.authenticate({
        token: token,
        user: data.user,
      })
    );
    saveDataToStorage(data.user, data.token);
  };
};
