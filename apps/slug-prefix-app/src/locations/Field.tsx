import React, { useState } from 'react';
import { Select } from '@contentful/f36-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import { useSDK } from '@contentful/react-apps-toolkit';
import { SlugEditor } from '@contentful/field-editor-slug';

const Field = () => {
  const sdk = useSDK<FieldExtensionSDK>();
  
  // Since this field is inside of an iframe, call contentful's iframe resizer to fit the contents of the extension to the iframe.
  sdk.window.startAutoResizer();

  /** If you only want to extend Contentful's default editing experience, reuse Contentful's editor components:
   * https://www.contentful.com/developers/docs/extensibility/field-editors/
   */

  /** Grab the Entry Title field, in this case it's the `title`, also know as the displayField. 
   * We'll use this to create the slug.
   */
  const titleField = sdk.entry.fields[sdk.contentType.displayField];

  const initSlug = sdk.field.getValue();

  //get the current value between slashes
  const initPrefix = initSlug ? initSlug.substring(
    initSlug.indexOf("/") + 1, 
    initSlug.lastIndexOf("/")
  ) : '';

  const [slugPrefixValue, setSlugPrefixValue] = useState(initSlug ? initPrefix : 'root');
  const handleOnChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setSlugPrefixValue(event.target.value);

  /** Turn a string into a slug. 
   * Example: "Test page" becomes "test-page"
   * https://www.30secondsofcode.org/js/s/slugify
   */
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

  function updateSlugField(value: any) {
    if (value === undefined) return;
    console.log('slugPrefixValue: ', slugPrefixValue);
    const slugPrefix = slugPrefixValue === `root` ? `` : `/${slugPrefixValue}`;
    const slugWithPrefix = `${slugPrefix}/${slugify(value)}`;    
    sdk.field.setValue(slugWithPrefix);
  }

  titleField.onValueChanged(updateSlugField);

  // Update the iframe height of the field.
  sdk.window.updateHeight();

  return (
    <div>
        <Select
          id="slugPrefix"
          name="slugPrefix"
          value={slugPrefixValue}
          onChange={handleOnChange}
        >
            <Select.Option value="root">Root</Select.Option>
            <Select.Option value="blog">Blog Post</Select.Option>
            <Select.Option value="recipe">Recipe</Select.Option>
            <Select.Option value="event">Event</Select.Option>
        </Select>
        <br />
        <SlugEditor field={sdk.field} baseSdk={sdk} />
    </div>
  );
};

export default Field;
