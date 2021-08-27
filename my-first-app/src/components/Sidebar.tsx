// @ts-nocheck
import React, { useState, useEffect, useCallback } from 'react';
import { List, ListItem, Note, Paragraph, Table, TableRow, TableCell, TableHead } from '@contentful/forma-36-react-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}

const CONTENT_FIELD_ID_SLUG = 'slug';
const CONTENT_FIELD_ID_STATS_JSON = 'XRrVdhk6oe9sMgIW74VaZ';

const Sidebar = (props: SidebarProps) => {
  const { sdk } = props;

  const contentFieldSlug = sdk.entry.fields[CONTENT_FIELD_ID_SLUG];
  
  const [statText, setStatText] = useState([]);
  
  function getStatsEntry() {
    return new Promise(resolve => {
      sdk.space.getEntry('XRrVdhk6oe9sMgIW74VaZ').then((data) => {
        resolve(data);
      });
    });
  }

// [
//   {
//       "type": [
//           {
//               "title": "GA Stats - 1 month",
//               "data": {
//                   "Pageviews": "93",
//                   "Last update": "Wed, 08/25/2021 - 04:20",
//                   "Unique Pageviews": "42",
//                   "Average Time on Page (sec)": "56"
//               }
//           },
//           {
//               "title": "GA Stats - 5 years",
//               "data": {
//                   "Pageviews": "5000",
//                   "Last update": "Wed, 08/25/2021 - 06:00",
//                   "Unique Pageviews": "2175",
//                   "Average Time on Page (sec)": "57"
//               }
//           }
//       ]
//   }
// ]

  useEffect(() => {
    sdk.window.startAutoResizer();
    (async function() {
      const stats = await getStatsEntry();
      console.log(`dummy stats: `, stats);
      setStatText(stats.fields.stats["en-US"]);
    })();
  }, []);

  const renderTable = (item) => {
    for (const [key, value] of Object.entries(item)) {
      return (
        <TableRow>
          <TableCell>{key}</TableCell>
          <TableCell>{value}</TableCell>
        </TableRow>
      )
    }
  }
  
  
  // Render the metrics with Forma36 components
  return (
    <>
      <Note style={{ marginBottom: '12px' }}>
        <Paragraph>URL Slug:<br />{contentFieldSlug.getValue()}</Paragraph><br />

          {statText.map(stat => (
            <Table>
              <TableHead>{stat.title}</TableHead>
              {stat.data && (
                <>
                  {console.log(`dummy man: `, stat.data)}
                  {console.log(`dummy man 2: `, JSON.stringify(stat.data[0]))}
                  {(stat.data).map(item => (
                    renderTable(item)
                  ))}
                </>
              )}
            </Table>
          ))}
      </Note>
    </>
  );
};

export default Sidebar;