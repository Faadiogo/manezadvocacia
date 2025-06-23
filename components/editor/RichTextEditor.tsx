'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'script',
    'indent',
    'direction',
    'color', 'background',
    'align',
    'link', 'image', 'video'
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        style={{ minHeight: '400px' }}
        className="rich-text-editor"
      />
      <style jsx global>{`
        .rich-text-editor .ql-container {
          min-height: 400px;
          font-size: 16px;
          line-height: 1.6;
        }
        .rich-text-editor .ql-editor {
          min-height: 400px;
          padding: 20px;
        }
        .rich-text-editor .ql-toolbar {
          border-bottom: 1px solid #e5e7eb;
          padding: 12px;
        }
        .rich-text-editor .ql-toolbar .ql-formats {
          margin-right: 15px;
        }
        .rich-text-editor .ql-editor p {
          margin-bottom: 1em;
        }
        .rich-text-editor .ql-editor h1,
        .rich-text-editor .ql-editor h2,
        .rich-text-editor .ql-editor h3,
        .rich-text-editor .ql-editor h4,
        .rich-text-editor .ql-editor h5,
        .rich-text-editor .ql-editor h6 {
          margin-bottom: 0.5em;
          margin-top: 1em;
          font-weight: 600;
        }
        .rich-text-editor .ql-editor ul,
        .rich-text-editor .ql-editor ol {
          margin-bottom: 1em;
        }
        .rich-text-editor .ql-editor blockquote {
          border-left: 4px solid #204c48;
          padding-left: 16px;
          margin: 1em 0;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}