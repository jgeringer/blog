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

  async function fetchProducts() {
    try {
      const response = await cma.entry.getMany({
        query: {
          limit: 100,
          content_type: `mealType`,
        },
      })
      const json = await response;
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
    // fetchProducts().then(data => setAllEntries([data?.items] || []));
    let myArr = []
    const theItems = fetchProducts().then(data => console.log(myArr.push(data?.items)));
    console.log('theItems: ', theItems)

    // setAllEntries(test);

}, [])

  // jsonPromise.then((json) => console.log(json?.items));
  
  console.log('sdk: ', sdk);
  console.log('cma: ', cma);
  // console.log(jsonPromise)

  return (
    <>
      <Paragraph>All entrys of this type:</Paragraph>
      {allEntries.map(entry => (
        <>
          <TextLink
            // @ts-ignore
            href={entry.fields.mySlug['en-US']}
            target="_blank"
            rel="noopener noreferrer"
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
