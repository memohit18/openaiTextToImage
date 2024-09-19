## FormField Component Documentation 

**Table of Contents**

* [Description](#description)
* [Props](#props)
* [Usage](#usage)
* [Example](#example)

### Description 

The `FormField` component is a reusable React component designed to render a form field with various configurations. It allows for customization of the input type, label, placeholder, and other attributes. 

### Props

| Prop Name | Type | Description | Required | Default |
|---|---|---|---|---|
| `labelName` | `string` | The label text for the form field. | **Required** |  |
| `type` | `string` | The type of the input field (e.g., `text`, `email`, `password`). | **Required** |  |
| `name` | `string` | The name attribute for the input field. | **Required** |  |
| `placeholder` | `string` | The placeholder text for the input field. | Optional |  |
| `value` | `string` | The current value of the input field. | **Required** |  |
| `handleChange` | `function` | A function that handles changes to the input field value. | **Required** |  |
| `isSupriseMe` | `boolean` | Indicates whether to show the "Suprise Me" button. | Optional | `false` |
| `handleSupriseMe` | `function` | A function that is triggered when the "Suprise Me" button is clicked. | Optional |  |

### Usage 

The `FormField` component is used to create a form field with various options. It can be customized to meet specific requirements.

```javascript
import { FormField } from './FormField';

const MyForm = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSurpriseMe = () => {
    // Implement surprise me functionality 
  };

  return (
    <form>
      <FormField
        labelName="Name"
        type="text"
        name="name"
        placeholder="Enter your name"
        value={name}
        handleChange={handleChange}
        isSupriseMe={true}
        handleSupriseMe={handleSurpriseMe}
      />
      {/* Other form fields */}
    </form>
  );
};
```

### Example

```javascript
<FormField 
  labelName="Email Address" 
  type="email" 
  name="email" 
  placeholder="Enter your email" 
  value={email} 
  handleChange={handleChange}
/>
```

This example renders a form field for an email address with a label, placeholder, and the ability to handle changes to the input value.
