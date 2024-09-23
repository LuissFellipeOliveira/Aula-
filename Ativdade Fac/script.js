const contacts = [
    { name: "João Silva", email: "joao.silva@email.com", phone: "(11) 91234-5678" },
    { name: "Maria Oliveira", email: "maria.oliveira@email.com", phone: "(21) 92345-6789" },
    { name: "Pedro Santos", email: "pedro.santos@email.com", phone: "(31) 93456-7890" },
    { name: "Ana Costa", email: "ana.costa@email.com", phone: "(41) 94567-8901" },
    { name: "Carlos Pereira", email: "carlos.pereira@email.com", phone: "(51) 95678-9012" },
    { name: "Fernanda Souza", email: "fernanda.souza@email.com", phone: "(61) 96789-0123" },
    { name: "Rafael Lima", email: "rafael.lima@email.com", phone: "(71) 97890-1234" },
    { name: "Beatriz Fonseca", email: "beatriz.fonseca@email.com", phone: "(81) 98901-2345" }
];

document.getElementById('showContactsBtn').addEventListener('click', () => {
    const contactsDiv = document.getElementById('contacts');
    const contactsList = document.getElementById('contactsList');

    if (contactsDiv.classList.contains('hidden')) {
        // Organiza a lista de contatos por nome
        const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));

        // Limpa a tabela antes de adicionar contatos
        contactsList.innerHTML = '';

        // Adiciona os contatos à tabela de forma organizada
        sortedContacts.forEach(contact => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = contact.name;

            const emailCell = document.createElement('td');
            emailCell.textContent = contact.email;

            const phoneCell = document.createElement('td');
            phoneCell.textContent = contact.phone;

            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(phoneCell);

            contactsList.appendChild(row);
        });

        // Mostra os contatos
        contactsDiv.classList.remove('hidden');
    } else {
        // Esconde os contatos
        contactsDiv.classList.add('hidden');
    }
});
