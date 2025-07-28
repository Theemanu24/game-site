module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#4F46E5", // indigo-600
          50: "#EEF2FF", // indigo-50
          100: "#E0E7FF", // indigo-100
          500: "#6366F1", // indigo-500
          600: "#4F46E5", // indigo-600
          700: "#4338CA", // indigo-700
          900: "#312E81", // indigo-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#14B8A6", // teal-500
          50: "#F0FDFA", // teal-50
          100: "#CCFBF1", // teal-100
          400: "#2DD4BF", // teal-400
          500: "#14B8A6", // teal-500
          600: "#0D9488", // teal-600
          700: "#0F766E", // teal-700
        },
        // Accent Colors
        accent: {
          DEFAULT: "#A855F7", // purple-500
          50: "#FAF5FF", // purple-50
          100: "#F3E8FF", // purple-100
          400: "#C084FC", // purple-400
          500: "#A855F7", // purple-500
          600: "#9333EA", // purple-600
          700: "#7C3AED", // purple-700
        },
        // Background Colors
        background: "#0F0F23", // custom-dark
        surface: {
          DEFAULT: "#1E1B4B", // indigo-900
          light: "#312E81", // indigo-800
        },
        // Text Colors
        text: {
          primary: "#F8FAFC", // slate-50
          secondary: "#CBD5E1", // slate-300
          muted: "#94A3B8", // slate-400
        },
        // Status Colors
        success: {
          DEFAULT: "#10B981", // emerald-500
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          600: "#DC2626", // red-600
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      fontWeight: {
        'poppins-semibold': '600',
        'poppins-bold': '700',
        'poppins-extrabold': '800',
        'dm-sans-normal': '400',
        'dm-sans-medium': '500',
        'space-grotesk-medium': '500',
      },
      backgroundImage: {
        'gaming-gradient': 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
        'gaming-gradient-hover': 'linear-gradient(135deg, #4338CA 0%, #0D9488 100%)',
        'accent-gradient': 'linear-gradient(135deg, #A855F7 0%, #4F46E5 100%)',
      },
      boxShadow: {
        'primary-cta': '0 10px 25px rgba(79, 70, 229, 0.3)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(168, 85, 247, 0.4)',
        'glow-pulse': '0 0 25px rgba(168, 85, 247, 0.6)',
      },
      borderColor: {
        'focus': 'rgba(168, 85, 247, 0.5)',
        'card': 'rgba(203, 213, 225, 0.2)',
      },
      animation: {
        'pulse-gaming': 'pulse-gaming 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
      keyframes: {
        'pulse-gaming': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)',
          },
          '50%': {
            transform: 'scale(1.02)',
            boxShadow: '0 15px 35px rgba(79, 70, 229, 0.4)',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(168, 85, 247, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(168, 85, 247, 0.6)',
          },
        },
        'fade-in-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}