# Asset Management System

A modern, responsive web application built with Next.js for managing and tracking organizational assets, employee assignments, and financial data.

## Features

- 📊 Interactive Dashboard with real-time analytics
- 🏢 Asset Inventory Management
- 👥 Employee Asset Assignment Tracking
- 📈 Department-wise Asset Distribution
- 💰 Financial Summary and Reporting
- 🔍 Advanced Search and Filtering
- 📱 Responsive Design for all devices
- 🌓 Dark/Light Mode Support

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with Framer Motion
- **Icons:** Tabler Icons
- **Charts:** Recharts
- **State Management:** React Context API
- **Authentication:** NextAuth.js (planned)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/asset-management.git
   cd asset-management
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── components/        # Reusable UI components
│   ├── dashboard/         # Dashboard pages
│   ├── reports/          # Report generation pages
│   └── layout.tsx        # Root layout
├── lib/                   # Utility functions and configurations
└── types/                # TypeScript type definitions
```

## Features in Detail

### Dashboard
- Overview of key metrics
- Quick access to important functions
- Real-time data visualization

### Asset Management
- Track asset inventory
- Monitor asset status
- Record maintenance history
- Generate asset reports

### Employee Management
- Track employee assignments
- Monitor asset allocation
- Generate employee reports

### Reporting
- Customizable report generation
- Multiple chart types (Bar, Pie, Line)
- Export functionality
- Department-wise analysis

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tabler Icons](https://tabler-icons.io/)
- [Recharts](https://recharts.org/)
