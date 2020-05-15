// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getStreams = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: 'Show all streams' });
};
  
// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getStream = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Show stream ${req.params.id}` });
};
  
// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createStream = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: 'Create new stream' });
};
  
// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateStream = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Update stream ${req.params.id}` });
};
  
// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteStream = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Delete stream ${req.params.id}` });
};