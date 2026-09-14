import mongoose from "mongoose";

const RegisterSnapperSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  emailSent: {
    type: Boolean,
    default: false,
  },
});

const RegisterSnapper =
  mongoose.models.registerSnapper ||
  mongoose.model("registerSnapper", RegisterSnapperSchema);

export default RegisterSnapper;
