## Card Component Documentation 

**Table of Contents**

* [Introduction](#introduction)
* [Component Usage](#component-usage)
* [Component Props](#component-props)
* [Component Structure](#component-structure)
* [CSS Styling](#css-styling)
* [Functionality](#functionality)


### Introduction 

The `Card` component is a reusable React component that displays information about a specific item. It is designed to be used for displaying items such as images, prompts, and other details.

### Component Usage

The `Card` component is used by importing it into other React components and then rendering it with the necessary props. 

```javascript
import { Card } from './Card';

function MyComponent() {
  return (
    <div>
      <Card _id="123" name="John Doe" prompt="This is a prompt" photo="https://example.com/image.jpg" />
    </div>
  );
}
```

### Component Props

The `Card` component accepts the following props:

| Prop Name | Type | Description |
|---|---|---|
| `_id` | String | Unique identifier of the item |
| `name` | String | Name associated with the item |
| `prompt` | String | Textual prompt or description |
| `photo` | String | URL of the image to be displayed |

### Component Structure

The `Card` component is structured as follows:

* **Outer Container (`div`)**: This container provides the overall structure and styling for the card.
* **Image (`img`)**: This element displays the image associated with the item.
* **Content Container (`div`)**: This container holds the prompt and metadata for the item.
* **Prompt (`p`)**: This element displays the textual prompt or description.
* **Metadata Container (`div`)**: This container holds the item's name and download button.
* **Name Container (`div`)**: This container displays the item's name.
* **Download Button (`button`)**: This button allows the user to download the image.

### CSS Styling

The `Card` component utilizes a combination of inline and external CSS to achieve its visual appearance.

**Inline Styles:**

* `rounded-xl`: Rounds the corners of the card.
* `group`: Applies hover effects to the card.
* `shadow-card`: Applies a base shadow to the card.
* `hover:shadow-cardhover`: Applies a larger shadow on hover.
* `w-full`: Sets the width of the image to 100%.
* `h-auto`: Sets the height of the image to automatically adjust based on the image's aspect ratio.
* `object-cover`: Ensures the image covers the entire container.
* `group-hover:flex`: Displays the content container as a flexbox on hover.
* `flex-col`: Arranges the content within the container vertically.
* `max-h-[94.5%]`: Sets the maximum height of the content container.
* `hidden`: Hides the content container by default.
* `absolute`: Positions the content container absolutely within its parent.
* `bottom-0`: Positions the content container at the bottom of its parent.
* `left-0`: Positions the content container at the left edge of its parent.
* `right-0`: Positions the content container at the right edge of its parent.
* `bg-[#10131f]`: Sets the background color of the content container.
* `m-2`: Adds a margin of 2 units around the content container.
* `p-4`: Adds a padding of 4 units around the content container.
* `rounded-md`: Rounds the corners of the content container.
* `text-white`: Sets the text color to white.
* `text-sm`: Sets the text size to small.
* `overflow-y-auto`: Enables vertical scrolling within the prompt element if the content exceeds the container's height.
* `mt-5`: Adds a margin of 5 units to the top of the metadata container.
* `justify-between`: Distributes the items within the metadata container evenly with space between them.
* `items-center`: Aligns the items within the metadata container vertically.
* `gap-2`: Adds a gap of 2 units between the items within the metadata container.
* `w-7`: Sets the width of the name container to 7 units.
* `h-7`: Sets the height of the name container to 7 units.
* `rounded-full`: Rounds the corners of the name container to form a circle.
* `object-cover`: Ensures the name container covers the entire container.
* `bg-green-700`: Sets the background color of the name container.
* `flex`: Displays the name container as a flexbox.
* `justify-center`: Centers the content within the name container horizontally.
* `items-center`: Centers the content within the name container vertically.
* `text-white`: Sets the text color of the name container to white.
* `text-sm`: Sets the text size of the name container to small.
* `font-bold`: Sets the font weight of the name container to bold.
* `outline-none`: Removes the default outline from the download button.
* `bg-transparent`: Sets the background color of the download button to transparent.
* `border-none`: Removes the default border from the download button.
* `w-6`: Sets the width of the download icon to 6 units.
* `h-6`: Sets the height of the download icon to 6 units.
* `object-contain`: Ensures the download icon fits within its container.
* `invert`: Inverts the colors of the download icon.

### Functionality

The `Card` component has the following functionality:

* **Hover Effect**: When the user hovers over the card, the content container expands, revealing the prompt and metadata.
* **Download Image**: Clicking the download button triggers the `downloadImage` function from the `utils` module, passing the item's ID and image URL as arguments. This function handles the actual download process. 

**Note:** The specific implementation of the `downloadImage` function is not included in this documentation and is assumed to be defined in the `utils` module.