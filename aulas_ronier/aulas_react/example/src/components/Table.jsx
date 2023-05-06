function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Usuário</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {data.map(pessoa =>
          <tr key={pessoa.id}>
            <td>{pessoa.id}</td>
            <td>{pessoa.nome}</td>
            <td>{pessoa.usuario}</td>
            <td>{pessoa.email}</td>
          </tr>
            )}
      </tbody>
    </table>
  );
}

export default Table;