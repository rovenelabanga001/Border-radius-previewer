# Border-radius Previewer

The **Border-radius Previewer** is a simple and interactive web app that allows users to visually customize the border-radius of a box and instantly see the result. Users can adjust the border-radius values for each corner of the box independently and copy the resulting CSS for use in their own projects.

## Features

- **Real-time Preview**: Users can see a box with a `border-radius` property applied, updated in real-time as they adjust each corner's radius.
- **Individual Corner Control**: Users can set separate `border-radius` values for each corner (top-left, top-right, bottom-left, bottom-right).
- **Copy CSS**: With a single click, users can copy the resulting `border-radius` CSS code to their clipboard for easy use elsewhere.

## How to Use

1. **Adjust Border Radius**:

   - Use the input fields or sliders to change the `border-radius` values for each corner:
     - **Top-left**
     - **Top-right**
     - **Bottom-left**
     - **Bottom-right`**
   - The box preview will update immediately to reflect the changes.

2. **Preview and Fine-tune**:

   - Experiment with different radius values to create the perfect border shape.
   - The app allows you to set any value supported by the CSS `border-radius` property.

3. **Copy the CSS**:
   - Once you’re happy with the border-radius settings, click the **Copy CSS** button.
   - This will copy the generated CSS code to your clipboard, so you can easily paste it into your own stylesheet or project.

## Example Output

Suppose you set the following values:

- Top-left: `20px`
- Top-right: `15px`
- Bottom-left: `30px`
- Bottom-right: `25px`

## Technologies Used

- **HTML/CSS**: For structure and styling.
- **JavaScript**: For real-time interaction and clipboard functionality.

## Example

The copied CSS would look like this:

```css
border-radius: 20px 15px 30px 25px;
```

## License

This project is open-source and available under the [MIT License](LICENSE).
