const createTicket = async () => {
    await fetch('http://localhost:8080/tickets/create', {
        method: 'POST',
    })
    .then(res => res.json())
    .then(res => res)
    .catch(() => {
        return 'Erro ao gerar código!';
    })
}