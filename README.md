# PostBoy - API Testing & Collaboration Platform

PostBoy is a modern, full-stack web application for API testing, request management, and team collaboration. Built with Next.js, TypeScript, and PostgreSQL, it provides a seamless experience for developers to test, organize, and share API requests across teams.

## 🚀 Features

- **API Request Testing**: Create, manage, and execute HTTP requests with full customization
- **Workspace Management**: Organize projects into workspaces with team collaboration features
- **Collections**: Group related API requests into organized collections
- **Request History & Saving**: Save requests for reuse and track request execution history
- **Real-time Collaboration**: Live updates and synchronization across team members
- **Authentication**: Secure multi-provider authentication (GitHub, Google)
- **AI Integration**: Built-in AI agents for request generation and API documentation assistance
- **Monaco Editor**: Professional code editor for request bodies and responses
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Team Invitations**: Invite team members to workspaces with email invitations
- **Dark Theme**: UI with dark theme

## 📸 Screenshots

### 🔹 Dashboard
![Dashboard](./public/screenshots/dashboard.png)

### 🔹 WebSocket Connection Successful
![WebSocket Connection](./public/screenshots/Small_Node.js_Connection.png)

### 🔹 WebSocket Message Received
![Message Received](./public/screenshots/connection_successul.png)

### 🔹 Node WebSocket Server Output
![Node Server](./public/screenshots/message_recieved_from_client.png)

### 🔹 AI Request Name Suggestions
![AI Name Suggestions](./public/screenshots/AI_Name_Suggestions.png)

### 🔹 AI JSON Body Generator
![AI Body Generator](./public/screenshots/AI_Body_Feature.png)

### 🔹 Generated AI JSON Response
![AI Body Result](./public/screenshots/Result_AI_Body_Feautre.png)

### 🔹 Invite Link Generation
![Invite Link](./public/screenshots/generating_link_to_invite.png)

### 🔹 Joke API Example
![Joke API](./public/screenshots/joke_api.png)

### 🔹 Joke API Output
![Joke API](./public/screenshots/result.png)


## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16.0.3](https://nextjs.org/)
- **Language**: TypeScript 5
- **UI Library**: React 19.2.0 with Radix UI components
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand
- **Form Handling**: React Hook Form with Zod validation
- **Data Fetching**: TanStack React Query
- **Editor**: Monaco Editor for code editing
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Toast Notifications**: Sonner
- **Theme Management**: next-themes

### Backend
- **Runtime**: Node.js with Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: Better Auth v1.3.34
- **AI Integration**: Google Generative AI (Gemini)
- **HTTP Client**: Axios

### Development Tools
- **Linting**: ESLint 9
- **Package Manager**: npm
- **Containerization**: Docker & Docker Compose
- **Version Control**: Git

## 📦 Project Structure
```bash
postboy-project/
├── src/
│   ├── app/                      # Next.js app directory
│   │   ├── (auth)/               # Authentication pages
│   │   ├── (workspace)/          # Workspace dashboard & editors
│   │   ├── api/                  # API routes (Next.js Server Actions)
│   │   │   ├── ai/               # AI endpoints (request naming, JSON generation)
│   │   │   └── auth/             # Authentication endpoints
│   │   └── invite/               # Invitation handling (/invite/[token])
│   │
│   ├── components/               # Global components
│   │   └── ui/                   # Shadcn UI component library
│   │
│   ├── modules/                  # Feature-based architecture
│   │   ├── ai/                   # AI integration (services, types, hooks)
│   │   ├── authentication/       # Auth logic & server helpers
│   │   ├── collections/          # Collection CRUD + UI
│   │   ├── invites/              # Workspace invite logic
│   │   ├── layout/               # Header, sidebar, themes
│   │   ├── realtime/             # WebSocket client & logs system
│   │   ├── request/              # Request editor, tabs, response viewer
│   │   └── workspace/            # Workspaces, members, switching logic
│   │
│   ├── hooks/                    # Shared custom React hooks
│   ├── lib/                      # Core utilities
│   │   ├── ai-agents.ts          # Gemini AI agents (ai-sdk)
│   │   ├── auth.ts               # Better Auth setup
│   │   ├── db.ts                 # Prisma client
│   │   ├── env.ts                # Environment validation
│   │   └── utils.ts              # Utility helpers
│   │
│   └── components/               # Reusable global components
│
├── prisma/
│   ├── schema.prisma             # Prisma schema
│   └── migrations/               # Migration history
│
├── public/                       # Static assets
├── .env                          # Environment variables
├── docker-compose.yml            # Docker services (PostgreSQL)
├── next.config.mjs               # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind config
├── components.json               # Shadcn UI config
├── package.json                  # Dependencies & scripts
└── README.md                     # This file
```

## 🗄️ Database Schema

### Core Models

- **User**: User accounts with authentication profiles
- **Session**: Active user sessions
- **Account**: OAuth account credentials (GitHub, Google)
- **Verification**: Email verification tokens

### Workspace & Collaboration

- **Workspace**: Team workspaces for organizing projects
- **WorkspaceMember**: User membership in workspaces with roles
- **WorkspaceInvite**: Pending invitations to join workspaces
- **Collection**: Grouped API requests within workspaces
- **Request**: Individual API test requests
- **RequestRun**: Execution history of requests

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- PostgreSQL 12+
- Docker & Docker Compose (optional)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd postboy-project
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables**
   ```bash
   Create a .env file in the root directory with the following variables:
   # Database
   DATABASE_URL="postgresql://postgres:postgres@localhost:5431/postgres"

    # Authentication
    BETTER_AUTH_SECRET=your_secret_key_here
    BETTER_AUTH_URL=http://localhost:3000

    # OAuth Providers
    GITHUB_CLIENT_ID=your_github_client_id
    GITHUB_CLIENT_SECRET=your_github_client_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret

    # Application
    NEXT_PUBLIC_APP_URL=http://localhost:3000

    # AI Integration
    GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key
    ```
4. **Start PostgreSQL with Docker Compose**
   ```bash
   docker-compose up -d
   ```
5. **Run Prisma migrations**
   ```
   npx prisma migrate dev
   ```
6. **Start the development server**
   ```
   npm run dev
   ```
7. **Open in browser**
   ```
   Navigate to http://localhost:3000
   ```
### 📝 Available Scripts
```bash
# Development
npm run dev          # Start dev server with Docker services

# Production
npm run build        # Build the project for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```
### 🔐 Authentication
**PostBoy supports multiple authentication methods:**

- **GitHub OAuth: Sign in with GitHub account**
- **Google OAuth: Sign in with Google account**
- **Email/Password: Traditional email-based authentication (if configured)**
- **Authentication is managed by Better Auth, a secure authentication library for Next.js applications.**

### 🤖 AI Integration
**The application includes AI-powered features using Google's Generative AI (Gemini):**
- **AI Agent Assistants: AI-powered helpers for request generation and API exploration**
- **Smart Documentation: Automatic API documentation suggestions**
- **Request Generation: AI-assisted request creation based on descriptions**
- **Configure your API key in the .env file:**
```bash
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key
```
### 🌍 Real-time Features
**Real-time collaboration features enable:**
- **Live workspace updates**
- **Synchronized request modifications**
- **Real-time member presence**
- **Instant notification system**

### 🎨 UI Components
**The project uses a comprehensive component library built on Radix UI and Tailwind CSS:**
- **Forms & Inputs**
- **Dialogs & Modals**
- **Navigation components**
- **Data display components**
- **Feedback components**
- **Layout components**

**All components are located in src/components/ui/ and are fully customizable.**

### 🔒 Security
- **Authentication: Secure OAuth integration with Better Auth**
- **Environment Variables: Sensitive data stored in .env**
- **HTTPS Ready: Production-ready configuration**
- **Input Validation: Zod-based schema validation**
- **CORS: Configured for safe cross-origin requests**

### 📱 Responsive Design
**The application is fully responsive and works on:**
- **Desktop browsers**
- **Tablets**
- **Mobile devices**

### 🐳 Docker Support
**For containerized deployment:**
```bash
# Start all services
docker-compose up

# Services included:
# - PostgreSQL database
# - Redis (if configured)
```

## 📚 Key Libraries & Their Uses
```bash
## Key Libraries & Their Uses

| Library                   | Purpose                           |
|---------------------------|-----------------------------------|
| next                      | React framework & routing         |
| react-hook-form           | Form state management             |
| zod                       | Schema validation                 |
| @tanstack/react-query     | Server state management           |
| zustand                   | Client state management           |
| @radix-ui                 | Accessible UI components          |
| tailwindcss               | Utility-first CSS                 |
| prisma                    | Database ORM                      |
| better-auth               | Authentication framework          |
| @ai-sdk/google            | Google AI integration (Gemini)    |
| @monaco-editor/react      | Code editor                       |
| axios                     | HTTP client                       |
| recharts                  | Data visualization                |
| sonner                    | Toast notifications               |

```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch  
   ```bash
   git checkout -b feature/amazing-feature
   
1. Commit your changes
   ```bash
   git commit -m 'Add amazing feature'

1. Push to the branch  
   ```bash
   git push origin feature/amazing-feature

4. Open a Pull Request


## 📄 License
This project is private and proprietary.

## 🆘 Support
For issues, questions, or suggestions, please open an issue in the repository or contact the development team.

### 🔒 Security
- **Prisma - Database ORM**
- **Next.js - React framework**
- **Radix UI - Component library**
- **Tailwind CSS - Styling**
- **Better Auth - Authentication**


  


   
