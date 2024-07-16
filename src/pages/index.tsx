
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({
    titulo: '',
    autor: '',
    publicacion: '',
    numcopia: 1,
    genero: '',
    editorial: '',
    fechaadquisicion: '',
    comentarios: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/libro/librito', formData);
      setFormData({
        titulo: '',
        autor: '',
        publicacion: '',
        numcopia: 1,
        genero: '',
        editorial: '',
        fechaadquisicion: '',
        comentarios: '',
      });
      setError('');
      setSuccess('Libro registrado con éxito.');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setError('No se enviaron los datos. Intente de nuevo más tarde.');
      setSuccess('');
    }
  };
  return (
    <main className="bg-white min-h-screen flex items-center justify-center">
    <div className="">
      <h3 className="text-2xl font-bold mb-2 text-center">Registro de Biblioteca Escolar</h3>
      <div className="p-4 w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            className="w-full p-1 border border-gray-300 rounded-md text-black" 
            type="text" 
            placeholder="Título del libro" 
            name="titulo" 
            value={formData.titulo} 
            onChange={handleChange} 
            required 
          />
          <input 
            className="w-full p-1 border border-gray-300 rounded-md text-black" 
            type="text" 
            placeholder="Nombre del autor" 
            name="autor" 
            value={formData.autor} 
            onChange={handleChange} 
            required 
          />
          <input 
            className="w-full p-1 border border-gray-300 rounded-md text-black" 
            type="date" 
            placeholder="Fecha de publicación" 
            name="publicacion" 
            value={formData.publicacion} 
            onChange={handleChange} 
            required 
          />
          <input 
            className="w-full p-1 border border-gray-300 rounded-md text-black" 
            type="number" 
            placeholder="Cantidad de copias" 
            name="numcopia" 
            value={formData.numcopia} 
            onChange={handleChange} 
            required 
          />
          <input 
            className="w-full p-1 border border-gray-300 rounded-md text-black" 
            type="text" 
            placeholder="Género" 
            name="genero" 
            value={formData.genero} 
            onChange={handleChange} 
            required 
          />
          <input 
            className="w-full p-1 border border-gray-300 rounded-md text-black" 
            type="text" 
            placeholder="Editorial" 
            name="editorial" 
            value={formData.editorial} 
            onChange={handleChange} 
            required 
          />
          <input 
            className="w-full p-1 border border-gray-300 rounded-md text-black" 
            type="date" 
            placeholder="Fecha de adquisición" 
            name="fechaadquisicion" 
            value={formData.fechaadquisicion} 
            onChange={handleChange} 
            required 
          />
          <input 
            className="w-full p-1 border border-gray-300 rounded-md text-black" 
            type="text" 
            placeholder="Comentarios" 
            name="comentarios" 
            value={formData.comentarios} 
            onChange={handleChange} 
          />
          <button className="w-full p-2 bg-blue-500 text-white rounded-md" type="submit">
            Registrar
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </div>
    </div>
    </main>
  );
}
