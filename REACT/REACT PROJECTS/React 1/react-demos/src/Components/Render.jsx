// Render.jsx
import React from 'react';

const ValidPassword = () => {
  return (
    <div>Valid Password</div>
  );
};

const InValidPassword = () => {
  return (
    <div>InValid Password</div>
  );
};

const Password = ({ isValid }) => {
  // if (isValid) {
  //   return <ValidPassword />;
  // } else {
  //   return <InValidPassword />;
  // }
  return isValid? <ValidPassword/>:<InValidPassword/>
};

const Check = () => {
  return (
    <section>
      <Password isValid={true} />  {/* You can change the value of 'isValid' to test */}
    </section>
  );
};

export { Check, ValidPassword };  // Exporting Check component for use in other files
