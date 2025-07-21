const Jobs = require("../modals/Jobsmodal"); 
exports.createJob = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      country,
      city,
      // location,
      // salaryType,
      // fixedSalary,
      // salaryFrom,
      // salaryTo,
      // expired,
      // postedBy,
      // isExperience,
      // CTC,
      // noticePeriod
    } = req.body;

    const job = await Jobs.create({
      title,
      description,
      category,
      country,
      city,
      // location,
      // salaryType,
      // fixedSalary,
      // salaryFrom,
      // salaryTo,
      // expired,
      // postedBy,
      // isExperience,
      // CTC,
      // noticePeriod
    });


    res.status(201).json({
      success: true,
      message: 'Job posted successfully',
      data: job
    });
  } catch (error) {
    console.error('Error posting job:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to post job',
      error: error.message
    });
  }
};
