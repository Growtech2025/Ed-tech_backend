const Job = require('../modals/JobModel.js');

// Update Job
exports.updateJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const updateData = req.body;

    if (!jobId || jobId.length !== 24) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or missing job ID',
      });
    }

    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedJob) {
      return res.status(404).json({
        success: false,
        message: 'Job not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Job updated successfully',
      data: updatedJob,
    });
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update job',
      error: error.message
    });
  }
};
