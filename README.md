smart-home-fashion-hub/
├── client/ # React (Vite) + Tailwind + Framer Motion
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── context/ # Cart / Wishlist / Search context
│ ├── hooks/
│ ├── utils/
│ └── assets/
├── server/ # Express REST API
│ ├── routes/
│ ├── controllers/
│ ├── data/ # mock JSON "DB"
│ ├── models/ # Mongoose schemas (optional real DB path)
│ └── middleware/
└── package.json # root, orchestrates both via concurrently
