// @ts-nocheck
import React, { useEffect } from 'react';
import { Icon, Paragraph, Table, TableRow, TableCell, TableHead } from '@contentful/forma-36-react-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}

const CONTENT_FIELD_ID_SLUG = 'urlSlug';
const CONTENT_FIELD_ID_STATS_JSON = 'stats';

const Sidebar = (props: SidebarProps) => {
  const { sdk } = props;

  const contentFieldSlug = sdk.entry.fields[CONTENT_FIELD_ID_SLUG];
  const contentFieldJSON = sdk.entry.fields[CONTENT_FIELD_ID_STATS_JSON];

  const statText = contentFieldJSON.getValue() || [];

  useEffect(() => {
    sdk.window.startAutoResizer();    
  }, []); 

  const renderTable = (object) => {
    const elements = [];
    for (const property in object) {
      elements.push(
        <TableRow>
          <TableCell>{property}</TableCell>
          <TableCell>{object[property]}</TableCell>
        </TableRow>
      )
    }
    return (elements)
  }

  return (
    <>
      <div>
        <Icon              
          icon="InfoCircle"
          color="primary"
          size="medium"
          style={{float: 'left'}}
        />
        <Paragraph style={{paddingTop: '2px'}}>
          URL Slug: <em>{contentFieldSlug.getValue()}</em>
        </Paragraph>

          {statText.map(stat => (
            <div style={{ padding: '0 2px', marginTop: '12px' }}>
              <Table style={{background: '#ffffff'}}>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ padding: '10px'}} colSpan="2">
                    {stat.title}
                    </TableCell>
                  </TableRow>
                </TableHead>
                {stat.data && (
                  <>
                    {renderTable(stat.data[0])}
                  </>
                )}
              </Table>
            </div>
          ))}
      </div>
    </>
  );
};

export default Sidebar;