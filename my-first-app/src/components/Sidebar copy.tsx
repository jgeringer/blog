// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { List, ListItem, Note, Paragraph } from '@contentful/forma-36-react-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';
import readingTime from 'reading-time';

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}

// interface statsData {
//   statsData: Array<any>,
// }

const CONTENT_FIELD_ID = 'body';
const CONTENT_FIELD_ID_SLUG = 'slug';
const CONTENT_FIELD_ID_STATS_JSON = 'XRrVdhk6oe9sMgIW74VaZ';

const Sidebar = (props: SidebarProps) => {
  const { sdk } = props;

  

  const contentField = sdk.entry.fields[CONTENT_FIELD_ID];
  const contentFieldSlug = sdk.entry.fields[CONTENT_FIELD_ID_SLUG];
  const contentFieldStatsJson = sdk.space.getEntry(CONTENT_FIELD_ID_STATS_JSON);
  // console.log('dummyJson x', contentFieldSlug);

  // console.log('dummyJson 1', contentFieldStatsJson);

  
  // console.log('sdk: ', sdk.space.getEntry('XRrVdhk6oe9sMgIW74VaZ'));

  const [blogText, setBlogText] = useState(contentField.getValue());
  // const [slug, setSlug] = useState(contentFieldSlug.getValue());
  // const [dummyJson, setDummyJson] = useState(contentFieldStatsJson.then((data: any) => data.fields.stats['en-US'].reporting));
  const [dummyJson, setDummyJson] = useState({});
  
  contentFieldStatsJson.then(function(value) {
    console.log(`dummy success`, value); // "Success"
    setDummyJson(value);    
  });

  console.log('dummyJson 2', dummyJson);

 


  // const [message, setMessage] = useState(''); // for the localstorage sync

  // const [statsText, setStatsText] = useState('');

  // const reportingStats = sdk.space.getEntry('XRrVdhk6oe9sMgIW74VaZ');

  // const renderStats = () => {
  //   reportingStats.then((data) => {
  //     console.log(`data   ::::`, data);
  //     console.log(`data.type   ::::`, data[0].type[0].title);
  //     setStatsText(data[0].type[0]);
  //     // build html
  //     return(
  //       <ListItem>1 - COMING from render stats: statsText.title</ListItem>
  //     )
  //   });    
  // }


  // Listen for onChange events and update the value
  useEffect(() => {
    props.sdk.window.startAutoResizer();
    // console.log('dummy output: ', dummyJson);
    
    // console.log('data: ', data.fields.stats['en-US'].reporting);
    // const stats = sdk.space.getEntry('XRrVdhk6oe9sMgIW74VaZ').then((data: any) => data.fields.stats['en-US'].reporting);
    
    // just for the storage
    // window.addEventListener('storage', ()=> {
    //   setMessage(window.localStorage.getItem('syncySync') || '');
    // });

    // console.log(`dummy: `, dummyJson.resolve);    

    // props.sdk.entry.fields.testFieldForApp.onValueChanged((value) => {
    //   console.log('value: ', value);
    // })

    // const detach = contentField.onValueChanged((value) => {
    //   setBlogText(value);
    // });

    // return () => detach();
  }, [contentField]);

  // Calculate the metrics based on the new value
  const stats = readingTime(blogText || '');

  
  
  

  // Render the metrics with Forma36 components
  return (
    <>
      <Note style={{ marginBottom: '12px' }}>
        <Paragraph>TODO:</Paragraph>
        <List>
          {/* {renderStats} */}
                     
          <div>
            {dummyJson.fields.stats["en-US"].reporting[0].type[0].title}
          </div>
          {/* {dummyJson.map((dummy) => {
            <div>work</div>
          })} */}
          <ListItem>2! - X - Autosize this iframe</ListItem>
          <ListItem>Read slug from current page: <strong>{contentFieldSlug.getValue()}</strong></ListItem>
          <ListItem>Fetch json from a specific content entry</ListItem>
          <ListItem>Render into a template here</ListItem>
          <ListItem>Install app on Edutopia's instance</ListItem>
        </List>
        <br />
        <Paragraph>Metrics for your blog post</Paragraph>
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