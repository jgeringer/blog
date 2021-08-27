import React from 'react';
import { Accordion, AccordionItem, TextField } from '@contentful/forma-36-react-components';
import { EditorExtensionSDK } from '@contentful/app-sdk';

interface EditorProps {
  sdk: EditorExtensionSDK;
}

const Entry = (props: EditorProps) => {
  const content = props.sdk.entry.fields['seoTitle'];

  return (
    <>
    <Accordion>
      <AccordionItem title="What payment methods do you accept?">
        Customers on the Team tier can pay with a credit card (American Express,
        MasterCard or Visa). Enterprise customers have the choice of paying with a
        credit card or wire transfer.
      </AccordionItem>
    </Accordion>
      <TextField
        required
        name="emailInput"
        id="emailInput"
        labelText="Email address"
        // value={content}
        value={props.sdk.entry.fields['seoTitle'].getValue()}
        helpText="Provide something and sync it to the side bar"
        onChange={(event) => {
          props.sdk.entry.fields['seoTitle'].setValue(event.target.value);
        }}
      />
  </>
  )
};

export default Entry;
