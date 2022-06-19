import React, { useState } from 'react';
import { Select } from '@contentful/f36-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import { useSDK } from '@contentful/react-apps-toolkit';
import { SlugEditor } from '@contentful/field-editor-slug';

const Field = () => {
  const sdk = useSDK<FieldExtensionSDK>();
  
  // since this field is inside of an iframe, call contentful's iframe resizer.
  sdk.window.startAutoResizer();

  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/

  // grab the Entry Title field, in this case it's the `title`.
  const titleField = sdk.entry.fields[sdk.contentType.displayField];

  const initSlug = sdk.field.getValue();

  //get the current value between slashes
  const initPrefix = initSlug ? initSlug.substring(
    initSlug.indexOf("/") + 1, 
    initSlug.lastIndexOf("/")
  ) : '';

  const [slugPrefixValue, setSlugPrefixValue] = useState(initSlug ? initPrefix : 'page');
  const handleOnChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setSlugPrefixValue(event.target.value);

  // https://www.30secondsofcode.org/js/s/slugify
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

  function updateSlugField(value: any) {
    if (value === undefined) return;    
    const slugWithPrefix = `/${slugPrefixValue}/${slugify(value)}`;    
    sdk.field.setValue(slugWithPrefix);
  }

  titleField.onValueChanged(updateSlugField);

  // Update the iframe height of the is field.
  sdk.window.updateHeight();

  return (
    <div>
        <Select
          id="slugPrefix"
          name="slugPrefix"
          value={slugPrefixValue}
          onChange={handleOnChange}
        >
          <Select.Option value="blog">Blog Post</Select.Option>
          <Select.Option value="recipe">Recipe</Select.Option>
          <Select.Option value="event">Event</Select.Option>
          <Select.Option value="page">Root</Select.Option>
      </Select>
      <br />
      <SlugEditor field={sdk.field} baseSdk={sdk} />
    </div>
  );
};

export default Field;
