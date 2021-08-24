import React, { useState, useEffect } from 'react';
import { List, ListItem, Note, Paragraph } from '@contentful/forma-36-react-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';
import readingTime from 'reading-time';

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}

const CONTENT_FIELD_ID = 'body';

const Sidebar = (props: SidebarProps) => {
  const { sdk } = props;

  const contentField = sdk.entry.fields[CONTENT_FIELD_ID];

  const [blogText, setBlogText] = useState(contentField.getValue());

  const [message, setMessage] = useState(''); // for the localstorage sync

  // Listen for onChange events and update the value
  useEffect(() => {
    // just for the storage
    window.addEventListener('storage', ()=> {
      setMessage(window.localStorage.getItem('syncySync') || '');
    });

    props.sdk.entry.fields.testFieldForApp.onValueChanged((value) => {
      console.log('value: ', value);
    })

    const detach = contentField.onValueChanged((value) => {
      setBlogText(value);
    });
    return () => detach();
  }, [contentField]);

  // Calculate the metrics based on the new value
  const stats = readingTime(blogText || '');

  // Render the metrics with Forma36 components
  return (
    <>
      <Note style={{ marginBottom: '12px' }}>
        Metrics for your blog post:
        <List style={{ marginTop: '12px' }}>
          <ListItem>Word count: {stats.words}</ListItem>
          <ListItem>Reading time: {stats.text}</ListItem>
        </List>
      </Note>
      <Paragraph>{message}</Paragraph>
    </>
  );
};

export default Sidebar;