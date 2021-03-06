# Recuperação de senha

**REQUISITOS FUNCIONAIS**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**REQUISITOS NÃO FUNCIONAIS**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**REGRAS DE NEGÓCIO**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**REQUISITOS FUNCIONAIS**

- O usuário deve poder atualizar seu nome, email e senha;

**REQUISITOS NÃO FUNCIONAIS**

**REGRAS DE NEGÓCIO**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualiizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**REQUISITOS FUNCIONAIS**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**REQUISITOS NÃO FUNCIONAIS**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**REGRAS DE NEGÓCIO**

- A notificaçãoo deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**REQUISITOS FUNCIONAIS**

- O usuário deve poder listar todos prestadores de serviço cadatrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**REQUISITOS NÃO FUNCIONAIS**

- A listagem de prestadores deve ser armazenada em cache;

**REGRAS DE NEGÓCIO**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
