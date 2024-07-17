import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../lib/lib'; // Ajusta la ruta según sea necesario

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {
            titulo,
            autor,
            publicacion,
            numcopia,
            genero,
            editorial,
            fechaadquisicion,
            comentarios
        } = req.body;

        // Verificación de campos obligatorios
        if (!titulo || !autor || !publicacion || !numcopia || !genero || !editorial || !fechaadquisicion) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        try {
            const libro = await db.libro.create({
                data: {
                    titulo,
                    autor,
                    publicacion: new Date(publicacion),
                    numcopia,
                    genero,
                    editorial,
                    fechaadquisicion: new Date(fechaadquisicion),
                    comentarios,
                },
            });
            return res.status(201).json(libro);
        } catch (error) {
            console.error('Error al crear el libro:', error);
            return res.status(500).json({ error: 'Hubo un problema al registrar el libro. Por favor, intenta de nuevo más tarde.' });
        }
    } else {
        return res.status(405).json({ error: 'Método no permitido' });
    }
}