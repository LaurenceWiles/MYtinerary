const apiURL = "http://localhost:4000/users/";

export const loadUser = async () => {
  const response = await fetch(apiURL + "auth-check", {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Not authenticated");
    }
    throw new Error("Failed to load user");
  }
  const data = await response.json();
  return data;
};

export const login = async (formData) => {
  const response = await fetch(apiURL + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    credentials: "include",
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.msg || "Failed to log in");
  }
  const data = await response.json();
  return data;
};

export const logout = async () => {
  const response = await fetch(apiURL + "logout", {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to log out");
  }
  const data = await response.json();
  return data;
};

export const registerUser = async (formData) => {
  const response = await fetch(apiURL + "register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors || "Failed to register");
  }
  const data = await response.json();
  return data;
};
