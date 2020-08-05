import React from 'react';
import { Controller } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { InputError } from '../../components/styles';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Select from '../../components/Select';
import FormButton from '../../components/FormButton';
import ImageUpload from '../../components/ImageUpload';

import { states as dataStates } from '../../util/data';

const Form = ({ formControl, handleSubmit, loading = false, edit = false }) => {
  const intl = useIntl();

  const states = dataStates.map(state => ({ value: state.uf, text: state.name }));

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Input
          label={`${intl.formatMessage(messages.form.nameLabel)} *`}
          type="text"
          name="name"
          className="form-control"
          placeholder={intl.formatMessage(messages.form.nameDescription)}
          ref={formControl.register({ required: true })}
          error={formControl.errors.name}
        />
        {formControl.errors.name && (
          <InputError>
            <FormattedMessage {...messages.form.nameIsRequired} />
          </InputError>
        )}
      </div>

      <div className="form-group">
        <Label
          value={`${intl.formatMessage(messages.form.avatarLabel)} *`}
          error={formControl.errors.avatar || formControl.errors.avatarUpload}
        />
        <Controller
          control={formControl.control}
          name="avatar"
          render={({ onChange }) => (
            <ImageUpload
              fieldName="avatar"
              fieldNameFile="avatarUpload"
              value={formControl.watch('avatar')}
              setValue={formControl.setValue}
              handleChange={(value) => {
                onChange(URL.createObjectURL(value[0]));
                formControl.setValue('avatarUpload', value);
              }}
              width="100px"
            />
          )}
        />
        <input
          type="file"
          name="avatarUpload"
          ref={formControl.register({ required: !edit })}
          accept=".png, .jpg, .jpeg"
          style={{ display: 'none' }}
        />
        {(formControl.errors.avatar || formControl.errors.avatarUpload) && (
          <InputError>
            <FormattedMessage {...messages.form.avatarIsRequired} />
          </InputError>
        )}
      </div>

      <div className="form-group">
        <Input
          label={intl.formatMessage(messages.form.titleLabel)}
          type="text"
          name="title"
          className="form-control"
          placeholder={intl.formatMessage(messages.form.titleDescription)}
          ref={formControl.register()}
          error={formControl.errors.title}
        />
      </div>

      <div className="form-group">
        <Input
          label={intl.formatMessage(messages.form.resumeLabel)}
          type="textarea"
          rows={3}
          name="description"
          className="form-control"
          placeholder={intl.formatMessage(messages.form.resumeDescription)}
          ref={formControl.register()}
          error={formControl.errors.resume}
        />
      </div>

      <div className="form-group">
        <Label
          value={`${intl.formatMessage(messages.form.imageLabel)} *`}
          error={formControl.errors.image || formControl.errors.imageUpload}
        />
        <Controller
          control={formControl.control}
          name="image"
          render={({ onChange }) => (
            <ImageUpload
              fieldName="image"
              fieldNameFile="imageUpload"
              value={formControl.watch('image')}
              setValue={formControl.setValue}
              handleChange={(value) => {
                onChange(URL.createObjectURL(value[0]));
                formControl.setValue('imageUpload', value);
              }}
              width="200px"
              ratioHeight={57.53}
            />
          )}
        />
        <input
          type="file"
          name="imageUpload"
          ref={formControl.register({ required: !edit })}
          accept=".png, .jpg, .jpeg"
          style={{ display: 'none' }}
        />
        {(formControl.errors.image || formControl.errors.imageUpload) && (
          <InputError>
            <FormattedMessage {...messages.form.imageIsRequired} />
          </InputError>
        )}
      </div>

      <div className="row">
        <div className="col-sm-5">
          <div className="form-group">
            <Select
              label={`${intl.formatMessage(messages.form.stateLabel)} *`}
              name="state"
              className="form-control"
              placeholderValue={intl.formatMessage(messages.form.stateDescription)}
              options={states}
              ref={formControl.register({ required: true })}
              error={formControl.errors.state}
            />
            {formControl.errors.city && (
              <InputError>
                <FormattedMessage {...messages.form.cityIsRequired} />
              </InputError>
            )}
          </div>
        </div>
        <div className="col-sm-7">
          <div className="form-group">
            <Input
              label={`${intl.formatMessage(messages.form.cityLabel)} *`}
              type="text"
              name="city"
              className="form-control"
              placeholder={intl.formatMessage(messages.form.cityDescription)}
              ref={formControl.register({ required: true })}
              error={formControl.errors.city}
            />
            {formControl.errors.city && (
              <InputError>
                <FormattedMessage {...messages.form.cityIsRequired} />
              </InputError>
            )}
          </div>
        </div>
      </div>

      <div className="form-group">
        <Input
          label={`${intl.formatMessage(messages.form.paymentUrlLabel)} *`}
          type="text"
          name="paymentUrl"
          className="form-control"
          placeholder={intl.formatMessage(messages.form.paymentUrlDescription)}
          ref={formControl.register({ required: true })}
          error={formControl.errors.paymentUrl}
        />
        {formControl.errors.paymentUrl && (
          <InputError>
            <FormattedMessage {...messages.form.paymentUrlIsRequired} />
          </InputError>
        )}
      </div>

      <FormButton
        type="submit"
        theme="primary"
        value={intl.formatMessage(messages.form.buttonSubmit)}
        loading={loading}
      />
    </form>
  );
};

export default Form;