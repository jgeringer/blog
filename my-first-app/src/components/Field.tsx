import React from 'react';
import { TextField } from '@contentful/forma-36-react-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = (props: FieldProps) => {
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  const value = window.localStorage.getItem('syncySync') || 'hello world';

  return (<TextField
  required
  name="emailInput"
  id="emailInput"
  labelText="Email address"
  value={value}
  helpText="Provide something and sync it to the side bar"
  onChange={(event) => {
    window.localStorage.setItem('syncySync', event.target.value);
    console.log(event.target.value);
    props.sdk.field.setValue(event.target.value);
  }}
/>);
};

export default Field;
