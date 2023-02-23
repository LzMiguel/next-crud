import Layout from "../components/Layout";
import React, { useState } from "react";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Formulario from "../components/Formulario";
import Botao from "../components/Botao";

export default function Home() {
    const clientes = [
        new Cliente("Ana", 22, "1"),
        new Cliente("Jhonny", 25, "2"),
        new Cliente("Frank", 33, "3"),
        new Cliente("Bean", 41, "4"),
        new Cliente("Tobi", 15, "5"),
        new Cliente("Kakashi", 36, "6"),
    ];
    function clienteSelecionado(cliente: Cliente) {
        console.log(cliente.nome);
    }
    function clienteExcluido(cliente: Cliente) {
        console.log(cliente.nome);
    }
    const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
    return (
        <div
            className={`
                    flex justify-center items-center h-screen 
                    bg-gradient-to-r from-blue-500 to-purple-500
                    text-white`}
        >
            <Layout titulo="Cadastro Simples">
                {visivel === "tabela" ? (
                    <>
                        <div className="flex justify-end">
                            <Botao className="mb-4" cor="green" onClick={()=>setVisivel('form')}>
                                Novo Cliente
                            </Botao>
                        </div>
                        <Tabela
                            clientes={clientes}
                            clienteSelecionado={clienteSelecionado}
                            clienteExcluido={clienteExcluido}
                        />
                    </>
                ) : (
                    <Formulario 
                        cliente={clientes[0]}
                        cancelado={()=>setVisivel('tabela')}
                    />
                )}
            </Layout>
        </div>
    );
}
