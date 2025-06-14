export function Header({ colorPalette = {} }) {
  const palette = {
    cardBg: colorPalette.cardBg || "#ffffff",
    darkText: colorPalette.darkText || "#2d3748",
    primary: colorPalette.primary || "#2b6cb0",
    secondary: colorPalette.secondary || "#38a169",
    ...colorPalette
  };

  return (
    <header 
      className="sticky top-0 z-10 shadow-sm"
      style={{ backgroundColor: palette.cardBg }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div 
              className="rounded-xl w-10 h-10 flex items-center justify-center mr-3"
              style={{ 
                backgroundColor: palette.primary,
                color: 'white'
              }}
            >
              <span className="font-bold">B</span>
            </div>
            <span 
              className="text-xl font-bold"
              style={{ color: palette.darkText }}
            >
              Blog Moderno
            </span>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#" 
                  className="font-medium transition hover:opacity-80"
                  style={{ color: palette.darkText }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition hover:opacity-80"
                  style={{ color: palette.darkText }}
                >
                  Artigos
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition hover:opacity-80"
                  style={{ color: palette.darkText }}
                >
                  Categorias
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition hover:opacity-80"
                  style={{ color: palette.darkText }}
                >
                  Sobre
                </a>
              </li>
            </ul>
          </nav>
          
          <button 
            className="px-5 py-2 font-medium rounded-lg transition hover:opacity-90"
            style={{ 
              backgroundColor: palette.primary,
              color: 'white'
            }}
          >
            Assinar
          </button>
        </div>
      </div>
    </header>
  );
}