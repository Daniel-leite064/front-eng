import { useEffect, useState } from "react";
import { Header } from "../components/Header.jsx";

const COLOR_PALETTE = {
  primary: "#10b981",
  secondary: "#ec4899",
  accent: "#8b5cf6",
  lightBg: "#f9fafb",
  darkText: "#1f2937",
  lightText: "#6b7280",
  cardBg: "#ffffff",
  border: "#e5e7eb",
};

export function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const postsPerPage = 10;

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    };
    getPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const handleViewPost = (post) => {
    setSelectedPost(post);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLOR_PALETTE.lightBg }}>
      <Header colorPalette={COLOR_PALETTE} />

      <div className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold mb-5 tracking-tight"
              style={{ color: COLOR_PALETTE.darkText }}
            >
              Blog Moderno
            </h1>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: COLOR_PALETTE.lightText }}
            >
              Conteúdo relevante e atualizado para você se inspirar
            </p>
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <div className="flex justify-center mb-4">
                <div
                  className="w-16 h-16 border-t-4 border-solid rounded-full animate-spin"
                  style={{ borderColor: COLOR_PALETTE.primary }}
                ></div>
              </div>
              <p
                className="text-lg font-medium"
                style={{ color: COLOR_PALETTE.lightText }}
              >
                Carregando conteúdo...
              </p>
            </div>
          )}

          {selectedPost && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{
                background: `linear-gradient(135deg, ${COLOR_PALETTE.primary}20, ${COLOR_PALETTE.secondary}20)`,
                backdropFilter: 'blur(6px)'
              }}
            >
              <div
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                style={{
                  backgroundColor: COLOR_PALETTE.cardBg,
                  border: `1px solid ${COLOR_PALETTE.border}`,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                }}
              >
                <div className="p-7">
                  <div className="flex justify-between items-start mb-5">
                    <div className="flex items-center">
                      <div
                        className="rounded-xl w-14 h-14 flex items-center justify-center"
                        style={{
                          backgroundColor: `${COLOR_PALETTE.primary}20`,
                          color: COLOR_PALETTE.primary
                        }}
                      >
                        <span className="text-xl font-bold">A</span>
                      </div>
                      <div className="ml-4">
                        <h3
                          className="font-semibold"
                          style={{ color: COLOR_PALETTE.darkText }}
                        >
                          Autor
                        </h3>
                        <p
                          className="text-sm"
                          style={{ color: COLOR_PALETTE.lightText }}
                        >
                          Postado em 15 Jun, 2023
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleClosePost}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      style={{ color: COLOR_PALETTE.lightText }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <h2
                    className="text-3xl font-bold mb-6"
                    style={{ color: COLOR_PALETTE.primary }}
                  >
                    {selectedPost.title}
                  </h2>

                  <p
                    className="leading-relaxed mb-8 text-lg"
                    style={{ color: COLOR_PALETTE.darkText }}
                  >
                    {selectedPost.body}
                  </p>

                  <div className="flex space-x-2">
                    <span
                      className="px-3 py-1 text-sm font-medium rounded-full"
                      style={{
                        backgroundColor: `${COLOR_PALETTE.primary}15`,
                        color: COLOR_PALETTE.primary
                      }}
                    >
                      Tecnologia
                    </span>
                    <span
                      className="px-3 py-1 text-sm font-medium rounded-full"
                      style={{
                        backgroundColor: `${COLOR_PALETTE.secondary}15`,
                        color: COLOR_PALETTE.secondary
                      }}
                    >
                      Design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-10">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: COLOR_PALETTE.cardBg,
                  border: `1px solid ${COLOR_PALETTE.border}`,
                  boxShadow: '0 10px 25px -5px rgba(0,0,0,0.03)'
                }}
              >
                <div className="p-7">
                  <div className="flex items-center mb-5">
                    <div
                      className="rounded-xl w-14 h-14 flex items-center justify-center"
                      style={{
                        backgroundColor: `${COLOR_PALETTE.primary}20`,
                        color: COLOR_PALETTE.primary
                      }}
                    >
                      <span className="text-xl font-bold">A</span>
                    </div>
                    <div className="ml-4">
                      <h3
                        className="font-semibold"
                        style={{ color: COLOR_PALETTE.darkText }}
                      >
                        Autor
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: COLOR_PALETTE.lightText }}
                      >
                        Postado em 15 Jun, 2023
                      </p>
                    </div>
                  </div>

                  <h2
                    className="text-2xl font-bold mb-4 transition-colors"
                    style={{ color: COLOR_PALETTE.primary }}
                  >
                    {post.title}
                  </h2>

                  <p
                    className="leading-relaxed mb-7"
                    style={{ color: COLOR_PALETTE.darkText }}
                  >
                    {post.body.length > 100 ? post.body.slice(0, 100) + "..." : post.body}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      onClick={() => handleViewPost(post)}
                      className="px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:opacity-90 text-center"
                      style={{
                        backgroundColor: COLOR_PALETTE.primary,
                        maxWidth: '200px'
                      }}
                    >
                      Ler post completo
                    </button>

                    <div className="flex space-x-2 justify-center sm:justify-end">
                      <span
                        className="px-3 py-1 text-sm font-medium rounded-full"
                        style={{
                          backgroundColor: `${COLOR_PALETTE.primary}15`,
                          color: COLOR_PALETTE.primary
                        }}
                      >
                        Tecnologia
                      </span>
                      <span
                        className="px-3 py-1 text-sm font-medium rounded-full"
                        style={{
                          backgroundColor: `${COLOR_PALETTE.secondary}15`,
                          color: COLOR_PALETTE.secondary
                        }}
                      >
                        Design
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {posts.length > postsPerPage && (
            <div
              className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 py-8"
              style={{ borderTop: `1px solid ${COLOR_PALETTE.border}` }}
            >
              <div style={{ color: COLOR_PALETTE.lightText }}>
                Mostrando {indexOfFirstPost + 1} - {Math.min(indexOfLastPost, posts.length)} de {posts.length} posts
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center w-12 h-12 rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:bg-gray-50"
                  style={{
                    backgroundColor: currentPage === 1 ? 'transparent' : COLOR_PALETTE.cardBg,
                    border: `1px solid ${COLOR_PALETTE.border}`,
                    color: COLOR_PALETTE.darkText
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className="flex space-x-2">
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    const page = currentPage <= 3
                      ? i + 1
                      : currentPage >= totalPages - 2
                        ? totalPages - 4 + i
                        : currentPage - 2 + i;

                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-12 h-12 rounded-full text-sm font-medium transition-all duration-200 ${currentPage === page
                            ? 'shadow-sm'
                            : 'hover:bg-gray-50'
                          }`}
                        style={{
                          backgroundColor: currentPage === page ? COLOR_PALETTE.primary : 'transparent',
                          color: currentPage === page ? '#fff' : COLOR_PALETTE.darkText,
                          border: currentPage !== page ? `1px solid ${COLOR_PALETTE.border}` : 'none'
                        }}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center w-12 h-12 rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:bg-gray-50"
                  style={{
                    backgroundColor: currentPage === totalPages ? 'transparent' : COLOR_PALETTE.cardBg,
                    border: `1px solid ${COLOR_PALETTE.border}`,
                    color: COLOR_PALETTE.darkText
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}