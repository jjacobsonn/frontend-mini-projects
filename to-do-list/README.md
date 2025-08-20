
# Interactive To-Do List

## Overview

A modern, interactive to-do list web app built with HTML, CSS, and JavaScript. This project demonstrates dynamic DOM manipulation, responsive design, and a clean, user-friendly interface for managing daily tasks.

## Preview

| Add Task | Edit Task | Delete Task |
|----------|-----------|-------------|
| ![Add Task](images/img-1.png) | ![Edit Task](images/img-2.png) | ![Delete Task](images/img-3.png) |

## Purpose

This project demonstrates proficiency in:
- **Dynamic JavaScript**: Real-time task creation, editing, and deletion
- **Responsive Design**: Mobile-friendly layout with modern CSS
- **User Experience**: Intuitive, accessible, and visually appealing interface
- **DOM Manipulation**: Efficient event handling and element updates

## Technical Implementation

### Key Features

- **Add Tasks**: Instantly add new tasks to your list
- **Edit Tasks**: Inline editing with save functionality
- **Delete Tasks**: Remove tasks with a single click
- **Responsive Layout**: Works seamlessly on desktop and mobile
- **Modern Styling**: Custom properties, gradients, and Google Fonts

### HTML Structure

```html
<form id="new-task-form">
	<input type="text" id="new-task-input" placeholder="What do you have planned?" />
	<input type="submit" id="new-task-submit" value="Add task" />
</form>
<div id="tasks"></div>
```

### CSS Highlights

```css
:root {
	--dark: #374151;
	--pink: #EC4899;
	--purple: #8B5CF6;
	--light: #EEE;
}
body {
	background-color: var(--dark);
	color: #FFF;
}
#new-task-input {
	background-color: var(--darker);
	color: var(--light);
}
#new-task-submit {
	background-image: linear-gradient(to right, var(--pink), var(--purple));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
```

### JavaScript Highlights

- **Event Listeners** for form submission, edit, and delete actions
- **Dynamic Element Creation** for each task
- **Inline Editing** with toggle between edit/save states

## Project Structure

```
to-do-list/
├── index.html
├── main.css
├── main.js
├── images/
│   ├── img-1.png
│   ├── img-2.png
│   └── img-3.png
└── README.md
```

## Design Patterns

- **Component-Based UI**: Each task is a self-contained component
- **Separation of Concerns**: HTML for structure, CSS for style, JS for behavior
- **Accessibility**: Keyboard navigation and clear focus states

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Learning Outcomes

This project demonstrates understanding of:
- DOM manipulation and event-driven programming in JavaScript
- Responsive and accessible web design
- Modern CSS techniques and theming
- Clean code organization and documentation

## Setup & Usage

1. Clone the repository
2. Open `index.html` in your web browser
3. Add, edit, and delete tasks to manage your to-do list

---

**Tech Stack**: HTML5, CSS3, JavaScript  
**Methodology**: Mobile-First, Responsive Design, User-Centered UI

---
