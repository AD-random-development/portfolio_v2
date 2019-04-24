import React from 'react';
import resume from '../utils/AvinashDhillor-resume.pdf';

import './css/resume.css';

export default () => (
  <div className="right_item_container animated slideInRight resume_container">
    <embed className="resume" src={resume} />
  </div>
);
