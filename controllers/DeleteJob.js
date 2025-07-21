const Job = require('../modals/JobModel.js');

// Delete Job
exports.deleteJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    if (!jobId || jobId.length !== 24) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or missing job ID',
      });
    }

    const deletedJob = await Job.findByIdAndDelete(jobId);

    if (!deletedJob) {
      return res.status(404).json({
        success: false,
        message: 'Job not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Job deleted successfully',
      data: deletedJob
    });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete job',
      error: error.message
    });
  }
};
