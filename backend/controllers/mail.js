import asyncHandler from "express-async-handler";

export const sendMail = asyncHandler(async (req, res) => {
  res.json("hey!!!!!!!");
});
