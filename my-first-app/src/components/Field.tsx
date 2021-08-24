import React, {useState, useEffect} from 'react';
import { TextField } from '@contentful/forma-36-react-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const CONTENT_FIELD_ID = 'testFieldForApp';

const Field = (props: FieldProps) => {
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  // const value = window.localStorage.getItem('syncySync') || 'hello world';
  const contentField = props.sdk.entry.fields[CONTENT_FIELD_ID];
  
const content = props.sdk.field.getValue();

  // const [content, setContent] = useState(contentField.getValue());
  // useEffect(() => {
  //   // just for the storage
  //   // window.addEventListener('storage', ()=> {
  //   //   setMessage(window.localStorage.getItem('syncySync') || '');
  //   // });
    
  //   // props.sdk.entry.fields.testFieldForApp.onValueChanged((value) => {
  //   //   console.log('value: ', value);
  //   // })

  //   const detach = contentField.onValueChanged((value) => {
  //     setContent(value);
  //     // contentField.getValue()
  //   });
  //   return () => detach();
  // }, [contentField]);

  return (
    <>
      <TextField
      required
      name="emailInput"
      id="emailInput"
      labelText="Email address"
      value={content}
      helpText="Provide something and sync it to the side bar"
      onChange={(event) => {
        // window.localStorage.setItem('syncySync', event.target.value);
        console.log(event.target.value);
        props.sdk.field.setValue(event.target.value);
        // props.sdk.field.setValue(props.sdk.entry.fields.testFieldForApp);
        // setContent(event.target.value);
      }}
    />
  </>
  );
};

export default Field;
