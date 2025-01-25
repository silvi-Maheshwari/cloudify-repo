# Dynamic Table with Dropdowns

## Project Overview
This React-based project implements a dynamic table that allows users to interact with dropdowns in each row. The table includes two primary features:
1. A **single-select dropdown** in the first column where selected options cannot be reused across rows.
2. A **multi-select dropdown** in the second column that supports adding new items dynamically.

Additional features include adding new rows dynamically and a clean, responsive UI design.

---

## Features

1. **Single-Select Dropdown (Column 1):**
   - Each row includes a dropdown to select an option.
   - Selected options are disabled for other rows.

2. **Multi-Select Dropdown with Add Option (Column 2):**
   - Users can select multiple options.
   - Includes an "+ Add New Item" option that allows users to add custom items directly inside the dropdown.

3. **Add New Row Button:**
   - Adds a new row to the table, allowing further interaction.

4. **Responsive Design:**
   - The UI is styled to be clean and user-friendly.

---

## Technologies Used

- **React**: For building the UI.
- **react-select**: For implementing dropdowns with advanced features.
- **CSS**: For styling the components.
- **react-icons**: For adding icons (e.g., the plus button).

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd table-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## File Structure
```
.
├── src
│   ├── components
│   │   ├── Table.jsx       # Main table component
│   │   └── App.css       # Styles for the table
│   ├── App.js              # Root component
│   └── index.js            # Entry point
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation


---



