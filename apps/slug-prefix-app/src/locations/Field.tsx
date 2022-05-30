import React from 'react';
import { Paragraph } from '@contentful/f36-components';
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
  
  // retrieve the current content type id (ex: blogPost)
  var currentContentType = sdk.contentType.sys.id;
  
  // override the slug prefix for ones that I like to be named shorter.
  // TODO: Set these in the ConfigScreen instead.
  switch (currentContentType) {
    case 'blogPost':
      currentContentType = 'blog'
      break;
    case 'recipe':
      currentContentType = 'kitchen'
      break;
    case 'pizzaria':
      currentContentType = 'pizzas'
      break;
  }

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
    const slugWithPrefix = `/${currentContentType}/${slugify(value)}`;    
    sdk.field.setValue(slugWithPrefix);
  }

  titleField.onValueChanged(updateSlugField);

  // Update the iframe height of the is field.
  sdk.window.updateHeight();

  return (
    <div>
      {/* TODO: Add TextInput instead to show the difference. */}
      <SlugEditor field={sdk.field} baseSdk={sdk} />
      <Paragraph>Help text here</Paragraph>
    </div>
  );
};

export default Field;
