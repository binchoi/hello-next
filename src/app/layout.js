import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Hello this is Bin's modification</footer>
      </body>
    </html>
  );
}

export default RootLayout;
