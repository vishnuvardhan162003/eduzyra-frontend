const login = async ({ email, password }) => {
  setLoading(true);

  try {
    const data = await loginRequest({ email, password });

    if (!data?.user) {
      throw new Error(
        "User details are missing from the login response."
      );
    }

    setUser(data.user);
    setPendingEmail(null);

    return data;
  } catch (error) {
    throw error;
  } finally {
    setLoading(false);
  }
};
