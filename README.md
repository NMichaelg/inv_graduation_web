# Graduation Invitation

A personal interactive graduation invitation built with React and Vite.

The project presents a digital graduation invitation with animated visuals, background music, personal audio messages, a rotating image slideshow, and a hidden Christmas-themed surprise mode.

## Features

* 🎓 Graduation ceremony invitation
* 🖼️ Automatic image slideshow
* 🎵 Background music with play/pause control
* 🎙️ Personal audio messages
* ⬇️ Downloadable audio messages
* 🎁 Hidden Christmas surprise mode
* ❄️ Animated snowfall effect
* 🎶 Christmas background music
* 📱 Responsive invitation layout
* ✉️ Contact information with a mail link
* ⚡ Fast development and production builds with Vite

The main invitation component manages the slideshow, audio playback, surprise mode, and invitation content using React state and effects.

## Tech Stack

| Technology           | Purpose                                  |
| -------------------- | ---------------------------------------- |
| **React 19**         | UI and application logic                 |
| **Vite 7**           | Development server and build tool        |
| **JavaScript / JSX** | Application code                         |
| **CSS**              | Styling and animations                   |
| **HTML5 Audio**      | Background music and personal recordings |
| **ESLint**           | Code quality and linting                 |

The project uses React 19.2 and Vite 7.2, with the official Vite React plugin and ESLint configuration.

## Project Structure

```text
graduation-invitation/
│
├── frontend/
│   ├── public/
│   │   ├── *.png / *.jfif      # Slideshow and visual assets
│   │   ├── *.m4a              # Audio recordings and music
│   │   ├── xmas.mp3           # Christmas music
│   │   ├── xmas_santa.png     # Christmas surprise image
│   │   └── ...
│   │
│   ├── src/
│   │   ├── assets/             # React assets
│   │   ├── App.jsx             # Main invitation component
│   │   ├── App.jsx.bak         # Backup version of App.jsx
│   │   ├── App.css             # Invitation styling
│   │   ├── index.css           # Global styling
│   │   └── main.jsx            # React entry point
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── eslint.config.js
│
└── README.md
```

The frontend follows a standard Vite + React project structure with the main application located in `src/App.jsx` and static media stored under `public/`.

## How It Works

The application is built around a reusable `Invitation` React component.

The component accepts information such as:

* Name
* Event title
* Location
* Date and time
* Personal note
* Contact information

The default application passes the graduation-specific information into this component.

### Image Slideshow

The invitation includes a collection of images that automatically rotate every three seconds.

```text
Image 1
   ↓
3 seconds
   ↓
Image 2
   ↓
3 seconds
   ↓
Image 3
   ↓
...
```

The slideshow automatically stops when Christmas mode is enabled.

### Background Music

The invitation includes background music that can be controlled using the music button in the top corner.

When another audio recording is played, the background music automatically pauses. When the recording ends, the background music resumes.

### Personal Audio Messages

The invitation contains personal audio recordings that visitors can play directly from the page.

Each recording provides:

* Audio controls
* A download button
* A title
* A short description

The audio files are served directly from the application's `public/` directory.

## Christmas Surprise

The invitation includes a hidden Christmas-themed mode activated through the 🎁 button.

When enabled:

* The normal slideshow is replaced by a Santa image.
* Background music is paused.
* Christmas music starts playing.
* Animated snowflakes appear on the screen.
* The page receives a Christmas-specific styling class.

The snow effect dynamically generates 30 snowflakes with randomized positions, sizes, animation delays, durations, and opacity.

## Running Locally

### Requirements

Make sure you have:

* Node.js
* npm

installed on your machine.

### 1. Clone the project

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Enter the frontend directory

```bash
cd frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will start the local development server and provide a URL that can be opened in your browser.

## Available Scripts

The project provides the following npm scripts:

### Development

```bash
npm run dev
```

Starts the Vite development server with hot module replacement.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview

```bash
npm run preview
```

Runs the production build locally for previewing.

### Lint

```bash
npm run lint
```

Runs ESLint against the project.

These scripts are defined in `frontend/package.json`.

## Customizing the Invitation

The invitation content can be changed directly in `src/App.jsx`.

The main application currently provides values for:

```jsx
<Invitation
    name="Your Name"
    title="Graduation Ceremony"
    place="Event Location"
    place2="Previous / Alternative Location"
    time="Event Date and Time"
    note="Your personal message"
    contact="Contact Information"
/>
```

You can replace these values to create your own invitation.

## Adding Images

Place additional images inside:

```text
frontend/public/
```

Then add their paths to the `images` array in `App.jsx`.

For example:

```js
const images = [
    '/photo1.png',
    '/photo2.png',
    '/photo3.png',
]
```

The slideshow will automatically cycle through the images.

## Adding Audio

Audio files can also be placed in:

```text
frontend/public/
```

They can then be referenced from the React component:

```jsx
<audio
    controls
    src="/my-recording.m4a"
/>
```

The browser handles playback directly through the HTML5 audio element.

## Deployment

The project is a static React application after building.

Create a production build with:

```bash
npm run build
```

The generated files can then be deployed to a static hosting service that supports single-page applications.

The project is suitable for deployment platforms such as Vercel, Netlify, GitHub Pages, or similar static hosting services.

## Design

The application is designed as a personal digital invitation rather than a traditional website.

The main interface focuses on:

* Large typography
* Personal imagery
* Event information
* Audio interaction
* Minimal navigation
* Decorative animations
* Surprise interactions

The styling is implemented primarily in `App.css` and `index.css`.

## Future Improvements

Possible improvements include:

* 🎨 Multiple invitation themes
* ✏️ Editable invitation content
* 🌙 Dark mode
* 📅 Add-to-calendar functionality
* 📍 Interactive event map
* 📱 Improved mobile animations
* 🎵 Custom music selection
* 🖼️ User-uploaded photo galleries
* 💌 RSVP functionality
* 🔗 Shareable invitation links
* 🔐 Private invitations
* 🧩 Separate reusable components for the player, slideshow, and surprise mode

## Notes

This is a personal project created as an interactive digital graduation invitation.

The application intentionally includes playful elements such as the image slideshow, personal recordings, and Christmas surprise mode to make the invitation more memorable.

## License

MIT license is currently specified for the project.
