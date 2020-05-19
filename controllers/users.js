const asyncHandler = require('../middleware/async')
const User = require('../models/User')
const uuid = require('uuid')


// @desc      Update user
// @route     PUT /api/v1/users/:id
// @access    Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
    req.user.streamKey = uuid.v1()
    const user = await User.findByIdAndUpdate(req.user.id, req.user, {
      new: true,
      runValidators: true
    });
  
    res.status(200).json({
      success: true,
      streamKey: user.streamKey
    });
});

exports.getStreamKey = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if(!user) {
    res.status(404).json({
      error: 'User not found!!'
    })
  }
  res.status(200).json({
    success: true,
    streamKey: user.streamKey
  });

})