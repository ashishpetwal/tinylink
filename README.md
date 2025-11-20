# TinyLink 🔗

A modern, full-stack URL shortener application built with Next.js and Node.js. Create short, memorable links with comprehensive analytics and monitoring.

## ✨ Features

- 🚀 **Fast & Reliable** - Built with Next.js 16 and modern React
- 📊 **Analytics Dashboard** - Track clicks, view statistics, and monitor performance
- 🎯 **Custom Short Codes** - Create branded short links with custom aliases
- 🔍 **Health Monitoring** - Real-time system health and performance metrics
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- ⚡ **Real-time Updates** - Live click tracking and statistics
- 🛡️ **Type Safe** - Built with TypeScript for better development experience

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **State Management**: Zustand
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Database**: PostgreSQL with Prisma ORM
- **API**: RESTful endpoints
- **Monitoring**: Health check endpoints

## 🚀 Quick Start

### Prerequisites

- Node.js 20.9.0 or higher
- npm or yarn package manager
- PostgreSQL database (for backend)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ashishpetwal/tinylink.git
cd tinylink
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp env.example .env
```

Edit `.env` file with your configuration:
```env
NEXT_PUBLIC_CLIENT_URL="http://localhost:3000"
NEXT_PUBLIC_API_BASE_URL="http://localhost:8080/api"
```

4. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Backend Setup

The backend code is located in the `tinylink-backend` directory. Please refer to the backend documentation for setup instructions.

## 📖 Usage

### Creating Short Links

1. **Navigate** to the TinyLink homepage
2. **Enter** your long URL in the input field
3. **Optional**: Add a custom short code
4. **Click** "Shorten URL" to generate your link

### Managing Links

- **View All Links**: Access your dashboard to see all created links
- **Delete Links**: Remove unwanted links from your dashboard
- **Copy Links**: Quick copy functionality for sharing

### Health Monitoring

Access the health dashboard to monitor:
- System uptime
- Memory usage
- CPU performance
- Database connectivity
- Last update timestamp

## 🎯 API Reference

### Base URL
```
http://localhost:8080/api
```

### Endpoints

#### Get All Links
```http
GET /links
```

#### Create Short Link
```http
POST /links
Content-Type: application/json

{
  "originalUrl": "https://example.com",
  "shortcode": "custom-code" // optional
}
```

#### Redirect Short Link
```http
GET /links/r/{shortcode}
```

#### Get Link Statistics
```http
GET /links/{shortcode}
```

#### Delete Link
```http
DELETE /links/{shortcode}
```

#### Health Check
```http
GET /healthz
```

## 🏗️ Project Structure

```
tinylink/
├── app/                    # Next.js app directory
├── components/            # React components
├── lib/                   # Utility libraries
├── services/              # API service functions
├── types/                 # TypeScript type definitions
├── utils/                 # Helper utilities
├── tinylink-backend/      # Backend application
├── public/                # Static assets
├── .env                   # Environment variables
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_CLIENT_URL` | Frontend URL | `http://localhost:3000` |
| `NEXT_PUBLIC_API_BASE_URL` | Backend API URL | `http://localhost:8080/api` |

### Tailwind CSS

The project uses Tailwind CSS v4 with PostCSS for styling. Configuration can be found in `tailwind.config.ts`.

### TypeScript

Strict TypeScript configuration with comprehensive type definitions for better development experience.

## 📝 Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

## 📦 Deployment

### Vercel (Recommended)

1. **Connect** your GitHub repository to Vercel
2. **Configure** environment variables in Vercel dashboard
3. **Deploy** automatically on every push to main branch

### Manual Deployment

1. **Build** the application
```bash
npm run build
```

2. **Start** the production server
```bash
npm run start
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports & Feature Requests

Please use the [GitHub Issues](https://github.com/ashishpetwal/tinylink/issues) page to report bugs or request features.

## 📞 Support

- **Documentation**: [Wiki](https://github.com/ashishpetwal/tinylink/blob/main/README.md)
- **Issues**: [GitHub Issues](https://github.com/ashishpetwal/tinylink/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ashishpetwal/tinylink/discussions)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

**Made with ❤️ by [Ashish Petwal](https://github.com/ashishpetwal)**

⭐ Don't forget to star this repository if you found it helpful!
