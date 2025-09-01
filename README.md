DApp de Búsqueda de Tokens con React y Wagmi
Este proyecto es una aplicación descentralizada (DApp) construida con React y la librería Wagmi. El objetivo es crear una interfaz web que permita a los usuarios conectar su wallet, ver sus balances e interactuar con contratos inteligentes de tokens ERC-20 en la red de prueba Sepolia.



Este desarrollo se realizó como parte de la Diplomatura en Blockchain de la UTN.


✨ Características
✅ 
Conexión de Wallet: Integración con MetaMask para conectar a la red de prueba Sepolia.


📊 

Visualización de Cuenta: Muestra la dirección y el balance de ETH de la cuenta conectada.

🔍 

Buscador de Tokens ERC-20: Permite al usuario introducir la dirección de un contrato de token para ver su información.

📄 

Lectura de Contrato: Utiliza el hook useContractReads de Wagmi para leer de forma eficiente el nombre, símbolo, decimales y el balance del usuario para un token específico.


🔄 

Manejo de Estados: Gestiona correctamente los estados de carga y error durante la consulta de datos en la blockchain.

🔃 

Botón de Refresco: Incluye una función para actualizar los datos del token manualmente.


🛠️ Tecnologías Utilizadas
React: Biblioteca para construir la interfaz de usuario.

Vite: Herramienta de desarrollo para un entorno rápido y moderno.


Wagmi: Colección de hooks de React para interactuar con la blockchain de Ethereum.

Viem: Librería de bajo nivel utilizada por Wagmi para la comunicación con Ethereum.

TypeScript/JavaScript (JSX): Lenguaje de programación utilizado.

🚀 Empezando
Sigue estos pasos para ejecutar el proyecto en tu máquina local.

Prerrequisitos
Node.js (versión 18 o superior)

Un navegador web con la extensión MetaMask instalada.

Instalación
Clona el repositorio en tu máquina local:

Bash

git clone https://github.com/tu-usuario/tu-repositorio.git
Navega a la carpeta del proyecto:

Bash

cd tu-repositorio
Instala las dependencias necesarias:

Bash

npm install
Ejecución
Inicia el servidor de desarrollo de Vite:

Bash

npm run dev
Abre tu navegador y ve a la dirección http://localhost:5173 (o la que indique la terminal).

🎓 Conceptos Clave de Wagmi Aplicados
Este proyecto utiliza varios hooks fundamentales de Wagmi para su funcionamiento:


useAccount: Para obtener información de la cuenta conectada, como la dirección y el estado de la conexión.


useConnect: Para manejar la lógica de conexión con diferentes wallets.


useDisconnect: Para permitir al usuario desconectar su wallet de la DApp.


useBalance: Para consultar el balance de la moneda nativa (ETH) de una cuenta.


useContractReads: Para leer múltiples datos de un contrato inteligente en una sola llamada, mejorando la eficiencia.
