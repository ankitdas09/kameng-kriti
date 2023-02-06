import User from "./model.js";

const createUser = async (data) => {
	const newUser = await User.create({ ...data });
	return newUser;
};

export default { createUser };
