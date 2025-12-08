# Smartly Goals
Interactive web app to create, refine, and export SMART goals with AI assistance.
https://smartly-goals-app.vercel.app/

<img src="/screenshots/goals-section.png" width="900" />

## 🚀 Description

Smartly Goals guides users through the SMART goal-setting framework:
- Specific
- Measurable
- Achievable
- Relevant
- Time-bound

Each section can be written, refined, and evaluated with AI-powered suggestions, ensuring clarity and actionable goals. Users can preview the final goal and export it as a well-formatted PDF.

## ✨ Features

| Feature                          | Description                                         |
| -------------------------------- | --------------------------------------------------- |
| Step-by-step SMART goal creation | Users can fill out each category interactively.     |
| AI-powered feedback              | Real-time improvement suggestions for each section. |
| Editable sections                | Modify text until the goal is perfect.              |
| PDF Export                       | Export finalized goals as a structured PDF.         |
| Responsive UI                    | Works across devices with intuitive design.         |
| Color options                    | Colored or minimalist PDF layout.                   |

## 🛠 Tech Stack

| Layer          | Technology                                |
| -------------- | ----------------------------------------- |
| Frontend       | React, HTML, CSS                          |
| Backend        | Serverless Functions (Vercel)             |
| AI Integration | Hugging Face Inference API (Meta LLaMA 3) |
| PDF Generation | html2pdf.js                               |
| Deployment     | Vercel                                    |

## ⚙️ Deployment
### Local Development
- Install dependencies: npm install

- Start development server: npm run dev

### Production Deployment (Vercel)
1. Push your repository to GitHub.

2. Create a new project on Vercel and connect the repository.

3. Set the Root Directory if the React app is in a subfolder (e.g., smartly-goals-app).

4. Add the environment variable HF_ACCESS_TOKEN in Vercel.

5. Vercel will automatically install dependencies and build the project.

## 📝 Key Learnings

- Managing React state across multiple dynamic components.

- Integrating AI feedback via Hugging Face Inference API.

- Generating PDFs from dynamic HTML using html2pdf.js.

- Implementing serverless backend functions for API calls.

- Handling deployment issues: Node.js version, optional dependencies, and Vercel configuration.

- Designing a user-friendly UX for goal creation and review.

## 🔮 Future Improvements

- Exclude buttons from pdf

- Save answers to LocalStorage

- Add user authentication and goal history tracking.

- Enable collaborative goal-setting for teams.

- Enhance AI feedback for more personalized suggestions.

- Add additional export formats (Word, Markdown).

## Screenshots

<img src="/screenshots/edit-ai.png" width="400" />
<img src="/screenshots/preview.png" width="400" />

