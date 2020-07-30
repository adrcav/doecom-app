import React from 'react';

import Button from '../Button';

const HeaderNotification = ({
  type = 'alert',
  title,
  description,
  buttonText = null,
  buttonIcon = null,
  buttonTheme = 'primary',
  buttonOnClick = null,
  buttonLoading = false
}) => {
  return (
    <div className="alert alert-warning fade show" role="alert">
      <strong>{title}</strong>
      <div
        dangerouslySetInnerHTML={{
          __html: description
        }}
        style={{
          marginTop: '5px'
        }}
      ></div>
      {buttonText && (
        <div style={{ marginTop: '5px' }}>
          <Button
            theme={buttonTheme}
            value={buttonText}
            icon={buttonIcon}
            loading={buttonLoading}
            onClick={buttonOnClick}
          />
        </div>
      )}
    </div>
  );
};

export default HeaderNotification;
