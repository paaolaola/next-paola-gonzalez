import { Button } from '../components/ui/button';
import { useRouter } from 'next/navigation';


const BtnRoterBack = () => {
    const router = useRouter();
  return (
    <>
     <Button onClick={router.back} className='bg-primary-red w-48 h-12 m-6'>
                Volver a la página anterior
            </Button>
    </>
  )
}

export default BtnRoterBack