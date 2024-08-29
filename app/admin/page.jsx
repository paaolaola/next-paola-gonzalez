import React from 'react'
import ProductTable from './components/product-table'

const AdminPage = () => {
  return (
    <div className='container m-auto mt-8'>
      <h1 className='text-3xl font-bold text-center'>Panel de Administración</h1>
      <p className='text-center mt-4'>
        Bienvenido al panel de administración de De Gatos y Perros. Desde aquí, podrás gestionar los productos, categorías y subcategorías de la tienda online.
      </p>
      <ProductTable />
    </div>
  )
}

export default AdminPage