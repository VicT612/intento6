-- CreateTable
CREATE TABLE "libro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "publicacion" TIMESTAMP(3) NOT NULL,
    "numcopia" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "editorial" TEXT NOT NULL,
    "fechaadquisicion" TIMESTAMP(3) NOT NULL,
    "comentarios" TEXT NOT NULL,

    CONSTRAINT "libro_pkey" PRIMARY KEY ("id")
);
