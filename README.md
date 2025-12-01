🔐 Next.js + Clerk Auth Starter Kit

Stop wasting hours configuring Authentication. This is a production-ready boilerplate to get Next.js Authentication running in < 5 minutes using Clerk.

☕ Support the Work

I build these open-source kits to save developers time.
If this repo saved you 30 minutes of headache, consider buying me a chai! 👇

<div align="center">

<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me A Coffee" />

<br />
<br />

<img src="image.png" width="200" alt="UPI QR Code" />

<p><b>UPI:</b> hardikjain2030@okhdfcbank | <b>PayPal:</b> paypal.me/DhoniDevAi</p>
</div>

🚀 Features

⚡ Instant Setup: Clerk Provider & Middleware pre-configured.

🛡️ Protected Routes: Example of how to lock pages (/dashboard) behind login.

🎨 Custom UI: Clean Sign-In / Sign-Up buttons using Tailwind CSS.

📱 Responsive: Mobile-ready Layout & Navbar.

TypeScript: Type-safe user data handling.

🛠️ Getting Started

1. Clone the Repo

git clone [https://github.com/Nexoraedge/Next-Clerk-Starter-Kit.git](https://github.com/Nexoraedge/Next-Clerk-Starter-Kit.git)
cd Next-Clerk-Starter-Kit
npm install


2. Set up Environment Variables

Create a .env.local file in the root directory:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard


Note: Get these keys from your Clerk Dashboard.

3. Run the App

npm run dev


Open http://localhost:3000 to see the app.

📂 Project Structure

├── app/
│   ├── (auth)/          # Auth Routes (Sign-in/Sign-up)
│   ├── dashboard/       # Protected Route (Requires Login)
│   ├── layout.tsx       # Root Layout (ClerkProvider is here)
│   └── page.tsx         # Landing Page
├── components/
│   └── Navbar.tsx       # Smart Navbar (Shows Login/UserButton)
├── middleware.ts        # The Auth Guard Logic
└── .env.local           # API Keys


🤝 Contributing & License

Feel free to fork this repo and submit PRs.
This project is open-source under the MIT License.

Built with ❤️ by Hardik Jain (@Dhonidev-Ai)