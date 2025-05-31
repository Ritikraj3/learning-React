import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({isOpen, setIsOpen, header, footer, children}) {
  return (
    createPortal(<div onClick={() => setIsOpen(false)} className={`fixed flex items-center px-4 justify-center inset-0 bg-black/40 ${isOpen ? '' : 'hidden'}`}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md rounded-xl bg-white shadow-2xl p-6 space-y-6 animate-fade-in">
        {header}
        <div className="space-y-4">
          {
            children
          }
        </div>

        {footer}
      </div>
    </div>, document.getElementById('modal-root'))
  );
}
