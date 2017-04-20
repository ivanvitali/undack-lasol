# undack-lasol
  * Proyecto de la aplicaion web para administrar el contenido de alumnos de la UNDAV
  En pocas palabras Undack es un administrador de contenidos de una plataforma Web para estudiantes de la Carrera Ingeniería en Informática de la Undav. El portal UNDAV  tendrá un acceso público y un acceso para los estudiantes donde se pueda intercambiar material diverso relacionado con la carrera. 

## Tecnologias utilizadas
  + Angular 1
  + Amgular Material
  + Firebase

### Preparar el ambiente del desarrollo local
  + Instalar GIT (es un cliente de control de versiones)
    + link de descarga: https://git-scm.com/downloads
  + Instalar el Node.js
    + link de descarga: https://nodejs.org
  + Instalar los siguientes paquetes de manera global
    + gulp y bower
    
            npm install -g gulp bower
    
## Instalacion local del proyecto 
  1. Clonar el proyecto
  
    git clone https://github.com/iVanVitali/undack-lasol.git
    
  2. Instalar las dependencias
  
    npm install

  3. Resolver las dependencias de las librerias usadas
  
    gulp init-dev
    
  4. Ejecutar el servidor del ambiente de trabajo
  
    gulp connect-dev
    