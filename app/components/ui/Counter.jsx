import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

const Counter  = () => {
  return (
    

        <div className='flex flex-col items-center'>
                <div className='flex flex-row my-10'>
                    <Button onClick={decrementQuantity} disabled={singleProduct.status !== true}>
                        -
                    </Button>
                    <Input value={quantity} onChange={handleInputChange} className='w-20 text-center mx-2' disabled={singleProduct.status !== true} />
                    <Button onClick={incrementQuantity} disabled={singleProduct.status !== true}>
                        +
                    </Button>
                </div>
      
        </div>

    
  )
}

export default Counter