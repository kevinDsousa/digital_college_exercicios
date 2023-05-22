import { useForm } from "react-hook-form";

export const Contato = () => {

    const { register, handleSubmit } = useForm();

    const createSala = (dados) => {
        event.preventDefault();
        console.log(JSON.stringify(dados));
        fetch('http://localhost:8000/sala', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit(createSala)}>
                <h3>Cadastro de sala</h3>

                <label htmlFor="sala_nome">nome da sala</label>
                <input type="text" id="sala_nome" {...register("nome")} required/>

                <label htmlFor="sala_status">Status</label>
                <select id="sala_status" {...register("status")}>
                    <option value={1}>Livre</option>
                    <option value={2}>Ocupada</option>
                </select>

                <button type="submit">Enviar</button>
            </form>
        </>
    )
}