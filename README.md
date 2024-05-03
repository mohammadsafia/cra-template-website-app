## File structure

```
misk-client-extensions
├── public
│    ├── o
│    │   └── spritemap/spritemap.svg
│    ├── global.css
│    ├── global.js
│    ├── index.html
│    └── ... other static files
├── build_config
│    ├── ce.yaml
│    ├── cc.json
│    ├── ccd.json
│    ├── ts.config
│    └── rollup.config
├── package.json
├── tsconfig.json / .prettierrc.json / ...
└── src
    ├── index.tsx
    ├── Template.tsx
    └── routes
        ├── Root.tsx
        ├── NotFound.tsx
        ├── common-components
        │    └── ...
        ├── client-extension-1
        │    ├── index.tsx
        │    └── ...other dirs/files
        └── ...other client extensions
```

-   The `public` directory contains html/css/js that's available out of the box in Liferay. Depending on the project, you can include in it:
    -   Spritemaps. In Liferay, spritemaps have the src URL `/o/{spritemap-name}/spritemap.svg` so having the same files here will make svgs available for local development.
    -   Global css variables/theme/default styles from Clay, Bootstrap, etc.
    -   Global js that's available on all pages
    -   Fonts (as `<link href=.. >` in `index.html`)
-   The directory `build_config` contains files needed for configuring the build.
    -   `ce.yaml` is the template for all `client-extension.yaml` files. `
    -   `cc.json` is the `package.json` for the `common-components` client extension. It's needed for building it.
    -   `ccd.json` is the `package.json` for the built version of the `common-components` client extension.
    -   `ts.config` and `rollup.config` are configuration files for the `common-components` client extension.
    -   **DO NOT EDIT ANY OF THESE FILES**
-   In `package.json`, you can add dependencies for your client extension. Don't worry about having too many dependencies in it, treeshaking happens during build (each client extension is compiled with only the needed dependencies).
-   Config files such as `tsconfig.json`, `.env`, and others can be added as needed.

---

-   TODO document
-   `index.tsx`
-   `Template.tsx`
-   `./src/Root.tsx`
-   `./src/NotFound.tsx`
-   `./src/routes/`

## To add a new client extension:

-   Create a new directory in `src/routes`, e.g. `src/routes/my-client-extension`
-   Add the entry point for your app, e.g. `src/routes/my-client-extension/components/Main.tsx`, which export the `Main` component.
    -   **Important**: this component must NOT take any props.
-   Add a file `index.[j|t]sx` and add

```ts
// src/routes/my-client-extension/index.tsx

import React from "react";
import Main from "./components/Main"; // or any other entry component

export default function MyClientExtension() {
	/**     The first argument you pass to `React.createElement` will be
	 *      the HTML tag name for the client extension:
	 *
	 *      <my-client-extension></my-client-extension>
	 */
	return React.createElement("my-client-extension", {}, <Main />);
}
```

-   In `src/index.tsx > const Route > const pages`, add the component you created earlier (in `src/routes/my-client-extension/index.tsx`)

```ts
│    import MyClientExtension from "./routes/my-client-extension";
│
│    const Route = () => {
│        const pages: { [path: string]: JSX.Element } = {
│            ...
+            myRoute: <MyClientExtension />,
│        };
│
│        ...
│    };
```

-   **DO NOT** edit anything else in these two files.

Now you can navigate to `http://localhost:3000/myRoute` for local development, and have the independent client extension after deployment.
