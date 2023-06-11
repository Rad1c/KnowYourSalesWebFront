import jwt from "jwt-decode";

const extractUserDataFromToken = (token) => {
  try {
    const decodedToken = jwt(token);
    const { nameid, role, type, accountId } = decodedToken;

    return { id: nameid, role, type, accountId };
  } catch (error) {
    console.log("Error decoding jwt token...", error);
    return null;
  }
};

export default extractUserDataFromToken;
