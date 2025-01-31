# University Library Management System 🎓📚

A modern library management system built with Next.js 15, featuring real-time updates, efficient data handling, and a sleek user interface.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Database:** PostgreSQL (Neon)
- **ORM:** Drizzle ORM
- **Caching:** Upstash Redis
- **Queue Management:** Qstash
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Authentication:** NextAuth.js

## ✨ Features

- Real-time book availability tracking
- Advanced search and filtering system
- User authentication and role-based access
- Book reservation and checkout system
- Late return notifications
- Digital resource management
- Admin dashboard for library staff
- Mobile-responsive design

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL
- Redis (Upstash)
- pnpm/npm/yarn

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/BintangDiLangit/university-library.git
cd university-library
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Fill in your environment variables:

```env
# ImageKit Configuration
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_imagekit_url
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key

# API Endpoints
NEXT_PUBLIC_API_ENDPOINT=your_api_endpoint
NEXT_PUBLIC_PROD_API_ENDPOINT=your_prod_api_endpoint

# Database
DATABASE_URL=your_postgresql_url
AUTH_SECRET=your_auth_secret

# Upstash Redis Configuration
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token

# Qstash Configuration
QSTASH_URL=your_qstash_url
QSTASH_TOKEN=your_qstash_token
QSTASH_CURRENT_SIGNING_KEY=your_current_signing_key
QSTASH_NEXT_SIGNING_KEY=your_next_signing_key

# Additional Configuration
RESEND_TOKEN=your_resend_token
```

4. Run database migrations:

```bash
pnpm drizzle-kit push:pg
```

5. Start the development server:

```bash
pnpm dev
```

## 🏗️ Project Structure

```
├── app/
│ ├── (auth)/
│ ├── (root)/
│ ├── admin/
│ ├── api/
│ └── layout.tsx
├── components/
│ ├── ui/
│ └── admin/
├── lib/
│ ├── actions/
│ └── admin/
└── public/
```

## 💾 Database Schema

The project uses Drizzle ORM with the following main tables:

- Users
- Books
- Borrowings

## 🔑 Environment Variables

Required environment variables:

1. ImageKit Configuration:

   - `NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT`
   - `NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY`
   - `IMAGEKIT_PRIVATE_KEY`

2. API Endpoints:

   - `NEXT_PUBLIC_API_ENDPOINT`
   - `NEXT_PUBLIC_PROD_API_ENDPOINT`

3. Database Configuration:

   - `DATABASE_URL`
   - `AUTH_SECRET`

4. Upstash Redis Configuration:

   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

5. Qstash Configuration:

   - `QSTASH_URL`
   - `QSTASH_TOKEN`
   - `QSTASH_CURRENT_SIGNING_KEY`
   - `QSTASH_NEXT_SIGNING_KEY`

6. Email Service:
   - `RESEND_TOKEN`

## 🚀 Deployment

This project can be deployed on Vercel:

1. Push your code to GitHub
2. Create a new project on Vercel
3. Import your repository
4. Configure environment variables as listed above
5. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨‍💻 Author

Bintang Miftaqul Huda

- GitHub: [@BintangDiLangit](https://github.com/BintangDiLangit)
- LinkedIn: [Bintang Miftaqul Huda](https://linkedin.com/in/bintangmfhd)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM](https://orm.drizzle.team)
- [shadcn/ui](https://ui.shadcn.com)
- [Upstash](https://upstash.com)
- [Neon](https://neon.tech)
- [ImageKit](https://imagekit.io)
- [Qstash](https://upstash.com/qstash)
- [Resend](https://resend.com)
