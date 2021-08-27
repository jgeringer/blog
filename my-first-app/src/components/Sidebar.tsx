// @ts-nocheck
import React, { useState, useEffect, useCallback } from 'react';
import { List, ListItem, Note, Paragraph } from '@contentful/forma-36-react-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}

const CONTENT_FIELD_ID_SLUG = 'slug';
const CONTENT_FIELD_ID_STATS_JSON = 'XRrVdhk6oe9sMgIW74VaZ';

const Sidebar = (props: SidebarProps) => {
  const { sdk } = props;

  const contentFieldSlug = sdk.entry.fields[CONTENT_FIELD_ID_SLUG];
  
  const [statText, setStatText] = useState(null);
  
  function getStatsEntry() {
    return new Promise(resolve => {
      sdk.space.getEntry('XRrVdhk6oe9sMgIW74VaZ').then((data) => {
        resolve(data);
      });
    });
  }

  useEffect(() => {
    (async function() {
      const stats = await getStatsEntry();
      console.log(`stats: `, stats);
      console.log(`stats title: `, stats.fields.stats["en-US"].reporting[0].type[0].title);
      setStatText(stats.fields.stats["en-US"].reporting[0].type[0].title);
    })();
  }, []);


  // Render the metrics with Forma36 components
  return (
    <>
      <Note style={{ marginBottom: '12px' }}>
        <Paragraph>TODO:</Paragraph>
        <List>
                     
          <div>
            data: {statText}
          </div>

          <ListItem>2! - X - Autosize this iframe</ListItem>
          <ListItem>Read slug from current page: <strong>{contentFieldSlug.getValue()}</strong></ListItem>
        </List>
      </Note>
    </>
  );
};

export default Sidebar;