# Styles Directory README

This directory contains the CSS styles for the React template. It's organized into separate files for better maintainability and scalability.

## Structure

* **`index.css`**: The main entry point for all CSS styles. It imports all other CSS files in the correct order. This is the only file you need to import in your React application.
* **`layers.css`**: Defines the order of CSS layers using `@layer`. **It's crucial to understand this file as it determines the specificity of your styles.**
* **`base.css`**: Base styles for HTML elements, resets, and normalizations.
* **`theme.css`**: Theme-related styles, variables (using `:root`), and keyframe animations. It also imports `fonts.css`.
* **`fonts.css`**: Font definitions, including Google Fonts and locally hosted fonts, using `@font-face`.
* **`icons.css`**: Custom icon font definitions and styles.
* **`layout.css`**: Layout and structural styles for the application.
* **`utilities.css`**: Reusable utility classes for common styling patterns.

## Usage

**Customization**:

* **Theme variables**: Modify the variables in `theme.css` to customize the color palette, typography, and breakpoints.
* **Adding styles**: Add custom styles to the appropriate CSS file.
* **Extending utilities**: Add your own utilities in the `utilities.css` file.
* **Fonts/Icons**: Add new fonts to `fonts.css` and Icons to `icons.css`.

**Layers**: be aware of the layer order defined in `layers.css`. The order of the layers defines the order of priority, with the last layer declared having the most priority.

## Understanding Layers

The `layers.css` file defines the order in which CSS layers are applied. This is important for managing specificity and preventing style conflicts.

* **`@layer base;`**: Defines base styles for HTML elements.
* **`@layer theme;`**: Contains theme-related variables and styles.
* **`@layer layout;`**: Defines the overall layout of the application.
* **`@layer utilities;`**: Reusable utility classes.
* **`@layer routes;`**: Styles for specific pages.
* **`@layer components;`**: Styles for specific UI components.

## Working with Components

When creating new components, it's recommended to encapsulate their styles within the `components` layer. This ensures that component-specific styles have the highest priority and don't conflict with other styles.

1. Create a new CSS file for your component (e.g., `MyComponent.css`).
2. Add your component-specific styles to this file.
3. Add a `@layer components` wrapper around the imported components styles.

**Example `components.css`:**

  ```css
  @layer components {
    .my-component {
      color: #ff0000;
    }
  }
  ```

## Adding new variables

1. Open the `theme.css` file.
2. Inside the `:root` block, add your custom CSS variable:

  ```css
  :root {
    /* ... existing variables ... */
    --my-custom-color: #ff0000;
  }
  ```

3. Use the variable in your CSS:

  ```css
  .my-element {
    color: var(--my-custom-color);
  }
  ```

## Adding new utilities

1. Open the `utilities.css` file.
2. Add your custom utility class:

  ```css
  .my-utility {
    margin-top: 10px;
    padding: 5px;
  }
  ````

3. Use the utility class in your HTML/JSX:

  ```jsx
    <div className="my-utility">
      {/* ... */}
    </div>
  ```
