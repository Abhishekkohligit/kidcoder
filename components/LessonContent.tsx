'use client';
import ReactMarkdown from 'react-markdown';

interface Props {
  content: string;
}

export default function LessonContent({ content }: Props) {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-extrabold text-purple-400 mb-4 mt-2">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-lg font-bold text-purple-300 mb-3 mt-5 border-b border-white/10 pb-1">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-bold text-gray-200 mb-2 mt-4">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-gray-300 leading-relaxed mb-3">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-purple-300">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-400">{children}</em>
          ),
          code: ({ children, className }) => {
            const isBlock = className?.includes('language-');
            return isBlock ? (
              <code className="block bg-[#0d0d1a] text-green-400 border border-white/10 rounded-xl p-4 text-sm font-mono my-3 overflow-x-auto whitespace-pre">
                {children}
              </code>
            ) : (
              <code className="bg-purple-900/50 text-purple-300 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-[#0d0d1a] text-green-400 border border-white/10 rounded-xl p-4 text-sm font-mono my-3 overflow-x-auto">
              {children}
            </pre>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1 mb-3 text-gray-300">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1 mb-3 text-gray-300">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-purple-500 bg-purple-900/20 pl-4 py-2 my-3 italic text-gray-300 rounded-r-lg">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-3">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-white/10 bg-purple-900/40 px-3 py-2 text-left font-bold text-purple-300">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border border-white/10 px-3 py-2 text-gray-300">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
