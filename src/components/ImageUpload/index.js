import React, { useState } from 'react';
import { FaRegImage, FaPencilAlt } from 'react-icons/fa';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import { toast } from 'react-toastify';

import { errorMessage } from '../../services/errors';

import {
  Wrapper,
  ImageContainer,
  ImagePreview,
  NoImage,
  ImageEdit
} from './styles';

const ImageUpload = ({
  value,
  alt = 'image',
  setValue,
  fieldName,
  fieldNameFile,
  width = '120px',
  ratioHeight = 100,
  handleChange = null
}) => {
  const intl = useIntl();
  let inputRef = null;

  const [imagePreview, setImagePreview] = useState();

  const onChangeHandler = event => {
    const image = event.target.files[0];
    if (!image) return;
    if (image.size > 2 * 1000 * 1024) {
      toast.error(intl.formatMessage(errorMessage('IMAGE_VERY_LARGE')));
      return;
    }
    if (handleChange) {
      handleChange(event.target.files);
    } else {
      setValue(fieldName, image);
    }
    const reader = new FileReader();
    reader.onload = e => {
      setImagePreview(e.target.result);
    }
    reader.readAsDataURL(image);
  };

  return (
    <Wrapper width={width}>
      <ImageContainer ratioHeight={ratioHeight} title={intl.formatMessage(messages.clickToSelect)}>
        {imagePreview || value ? (
          <ImagePreview
            style={{ backgroundImage: `url('${imagePreview || value}')` }}
            onClick={() => inputRef.click()}
          />
        ) : (
          <NoImage onClick={() => inputRef.click()}>
            <div className="NoImage__icon">
              <FaRegImage />
            </div>
            <p className="NoImage__text">
              <FormattedMessage {...messages.noImage} />
            </p>
          </NoImage>
        )}
        <input
          type="file"
          name="file"
          accept=".png, .jpg, .jpeg"
          ref={input => inputRef = input}
          style={{ display: 'none' }}
          onChange={onChangeHandler}
        />
        <ImageEdit>
          <FaPencilAlt />
          <FormattedMessage {...messages.change} />
        </ImageEdit>
      </ImageContainer>
    </Wrapper>
  );
};

export default ImageUpload;
