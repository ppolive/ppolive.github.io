tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Noto Sans SC', 'sans-serif'],
            },
            colors: {
                'main-bg': '#050505',      // 极深黑
                'card-bg': '#0f0f0f',      // 卡片背景
                'accent-blue': '#3b82f6',  // 科技蓝
                'accent-glow': 'rgba(59, 130, 246, 0.15)', // 蓝色光晕
                'text-main': '#ffffff',
                'text-muted': '#a3a3a3',
                'border-light': 'rgba(255, 255, 255, 0.08)',
            },
            letterSpacing: {
                'widest-xl': '.2em',
            },
            backgroundImage: {
                'hero-gradient': 'radial-gradient(circle at 50% 50%, #1a202c 0%, #050505 70%)',
                'blue-glow': 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                // 修复：增强了 stroke 的透明度到 0.1，确保肉眼可见
                'grid-white': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255, 255, 255, 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
            },
            // 新增悬浮动画配置
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite', // 延迟版，制造错落感
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' }, // 上下浮动距离
                }
            }
        }
    }
}
