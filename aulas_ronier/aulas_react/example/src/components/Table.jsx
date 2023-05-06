function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>

      <tbody>
        {data.map(pessoa =>
          <tr key={pessoa.id}>
            <td>{pessoa.id}</td>
            <td>{pessoa.nome}</td>
          </tr>
            )}
      </tbody>
    </table>
  );
}

export default Table;