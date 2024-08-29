'use client';

import BtnRoterBack from './components/BtnRoterBack';

const NotFound = () => {
  return (
    <>
      <BtnRoterBack />
    <div className="flex flex-col items-center justify-center h-48 space-y-4">
      <h1 className="text-xl font-medium text-slate-600">
        🐕‍🦺 Guau...
      </h1>
      <h2 className='text-lg font-medium text-slate-600'>No se ha encontrado la página!</h2>
    </div>
    </>
  )
}

export default NotFound;