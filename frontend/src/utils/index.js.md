##  Image Generation Helper Functions 🖼️ 

### Table of Contents 📑

| Section | Description |
|---|---|
| **getRandomPrompt(promt)** |  Generates a random prompt from the `surpriseMePrompts` array, ensuring it's different from the provided prompt. |
| **downloadImage(_id, photo)** |  Saves an image to the user's device with a filename based on the provided `_id`. |


### getRandomPrompt(promt)

This function generates a random prompt from the `surpriseMePrompts` array. It ensures that the generated prompt is different from the provided `promt` argument.

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `promt` | `string` | The prompt to avoid generating. |

**Return value:**

| Return value | Type | Description |
|---|---|---|
| `string` |  A random prompt from the `surpriseMePrompts` array, different from the provided `promt`. |

**Example Usage:**

```javascript
const currentPrompt = "A portrait of a cat";
const newPrompt = getRandomPrompt(currentPrompt);
console.log(newPrompt); // Output: A random prompt from the surpriseMePrompts array, different from "A portrait of a cat". 
```

### downloadImage(_id, photo)

This function uses the `FileSaver` library to download an image to the user's device. The filename is generated using the provided `_id` and `.jpg` extension.

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `_id` | `string` |  The unique identifier for the image. |
| `photo` | `Blob` | The image data as a Blob object. |

**Example Usage:**

```javascript
const imageId = "12345";
const imageData = new Blob([imageBytes], { type: 'image/jpeg' });
downloadImage(imageId, imageData);
```

This will trigger a download dialog in the browser, allowing the user to save the image to their device as `download-12345.jpg`. 
