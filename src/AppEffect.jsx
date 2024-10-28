
// Exemplo de Hook UseEffect

import { useState, useEffect } from "react";

export default function AppEffect() {
    // Aqui é JavaScript
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    // const url = 'https://jsonplaceholder.typicode.com/users';
    const url = 'https://marneicardoso.com/api/';

    useEffect(() => {
        async function buscarDados() {
            const response = await fetch(url);
            const data = await response.json();
            setUsuarios(data);
            setLoading(false);
        }

        buscarDados();
    }, []); // Executa apenas uma vez, após a renderização da tela

    if (loading) {
        return (
            <div>Carregando...</div>
        );
    }

    // ... aqui ainda é JS
    return (
        // A partir daqui é HTML e CSS
        <div>
            <h1>Lista de Usuários</h1>

            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id_produto}>
                        Nome: {usuario.nome_produto},
                        Descrição: {usuario.descricao_produto},
                        R$ {(usuario.valor_produto)}
                    </li>
                ))}
            </ul>

            {/* <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li>
                ))}
            </ul> */}
        </div>
    );
}