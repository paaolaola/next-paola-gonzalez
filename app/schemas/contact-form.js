import { z } from 'zod';

export const contactFormSchema = z.object({
    username: z.string().min(1, { message: 'El nombre es obligatorio.' }).min(5, { message: 'El nombre debe tener al menos 5 caracteres.' }),
    email: z.string().min(1, { message: 'El correo electrónico es obligatorio.' }).email({ message: 'Por favor ingresa un correo electrónico válido.' }),
    text: z.string().min(1, { message: 'El mensaje es obligatorio.' }).min(7, { message: 'El mensaje debe tener al menos 7 caracteres.' }),
});
