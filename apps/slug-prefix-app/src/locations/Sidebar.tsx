import React, { useState, useEffect } from 'react';
import { Paragraph, TextLink } from '@contentful/f36-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';
import { useCMA, useSDK } from '@contentful/react-apps-toolkit';

const Sidebar = () => {
  const sdk = useSDK<SidebarExtensionSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  const cma = useCMA();
  

  const [ allEntries, setAllEntries ] = useState([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchProducts() {
    try {
      const response = await cma.entry.getMany({
        query: {
          limit: 100,
          content_type: `blogPost`,
        },
      })
      const json = response;
      console.log('json: ', json);
      // @ts-ignore
      setAllEntries(json.items)

    // Update the iframe height of the is field.
    sdk.window.updateHeight();
      return json;
    }
    catch(error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  

  useEffect(() => {
    let myArr = []
    const theItems = fetchProducts().then(data => console.log(myArr.push(data?.items)));
    console.log('theItems: ', theItems)

    // setAllEntries(test);

}, [fetchProducts])


  return (
    <>
      <Paragraph>All entrys of this type:</Paragraph>
      {allEntries.map(entry => (
        <>
          <TextLink
            // @ts-ignore
            href={`https://app.contentful.com/spaces/${entry.sys.space.sys.id}/entries/${entry.sys.id}`}
            target="_blank"
            // @ts-ignore
            key={entry.sys.id}
            >
            {/* @ts-ignore */}
            {entry.fields.title['en-US']}
          </TextLink>
          <br />
        </>
      ))}
    </>
  );
};

export default Sidebar;
