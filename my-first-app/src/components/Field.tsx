// @ts-nocheck
import React, {useState, useEffect} from 'react';
import { TextField, List, ListItem, Button } from '@contentful/forma-36-react-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = (props: FieldProps) => {
  const [newIngredient, setNewIngredient] = useState({name: '', amount: ''});
  const [ingredients, setIngredients] = useState(props.sdk.field.getValue().list || []);

  useEffect(() => {
    props.sdk.window.startAutoResizer();
  }, [])


  props.sdk.field.onValueChanged((value) => {
    if (value.list.length !== ingredients.length) {
      setIngredients(value.list);
    }
  });
  
  const updateFieldValue = () => {
    props.sdk.field.setValue({ list: props.sdk.field.getValue().list.concat([newIngredient]) })
    setNewIngredient({name: '', amount: ''})
  }

  const removeIngredient = (i) => {
    props.sdk.field.setValue(
      { list: props.sdk.field.getValue().list.filter(ing => ing.name !== i.name)}
    );
  }

  console.log(`field::: `, ingredients);
  console.log(props.sdk.parameters.instance);

  return (
    <>
      <List>
        {ingredients.map(i => (
          <ListItem key={i.name}>
            {i.name} {i.amount}
            <Button buttonType="negative" onClick={() => removeIngredient(i)}>Remove</Button>
          </ListItem>
        ))}
      </List>
      <TextField value={newIngredient.name} onChange={(e) => setNewIngredient({...newIngredient, name: e.target.value})} labelText={props.sdk.parameters.instance.title}></TextField>
      <TextField value={newIngredient.amount} onChange={(e) => setNewIngredient({...newIngredient, amount: e.target.value})} labelText={props.sdk.parameters.instance.value}></TextField>
      <Button onClick={updateFieldValue}>Add</Button>
    </>
  );
};

export default Field;





// import React, {useState, useEffect} from 'react';
// import { Accordion, AccordionItem, TextField } from '@contentful/forma-36-react-components';
// import { FieldExtensionSDK } from '@contentful/app-sdk';

// interface FieldProps {
//   sdk: FieldExtensionSDK;
// }

// const CONTENT_FIELD_ID = 'testFieldForApp';

// const Field = (props: FieldProps) => {
//   // If you only want to extend Contentful's default editing experience
//   // reuse Contentful's editor components
//   // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  
//   const content = props.sdk.field.getValue();

//   return (
//     <>
//       <TextField
//         required
//         name="emailInput"
//         id="emailInput"
//         labelText="Email address"
//         value={content}
//         helpText="Provide something and sync it to the side bar"
//         onChange={(event) => {
//           props.sdk.field.setValue(event.target.value);
//         }}
//     />
//   </>
//   );
// };

// export default Field;
