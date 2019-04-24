import React from 'react';

import './css/aboutme.css';

export default () => (
  <div className="animated slideInRight aboutme_container">
    <div className="aboutme_text_container">
      <div className="internal_div">
        <p>
          <span className="aboutme_msg">Hello,</span> I'm{' '}
          <span className="aboutme_name">Avinash Dhillor</span>. Aenean commodo
          ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis
        </p>
      </div>
      <div className="my_name">
        <i>- Avinash Dhillor</i>
      </div>
    </div>
  </div>
);
