usuarios = {
    "Juliao": "1234",
    "Yan": "abcd",
    "admin": "admin123"
}

login = True
tentativas = 0
max_tentativas = 3
usuario_logado = 0
 
while tentativas < max_tentativas:
    usuario = input("Usuário: ")
    senha = input("Senha: ")
 
    if usuario in usuarios:
        if usuarios[usuario] == senha:
            print("Login realizado com sucesso!")
            usuario_logado = usuario
            break
        else:
            print("Senha inválida.")
    else:
        print("Usuário não encontrado.")
   
    tentativas += 1
    if tentativas == max_tentativas:
        print("Número máximo de tentativas excedido. Acesso bloqueado.")
        login == False
        break
 
while login == True:
    print("\nMenu:")
    print("1 - Ver Perfil")
    print("2 - Criar usuário")
    print("3 - Sair")
   
    opcao = input("Escolha uma opção: ")
   
    if opcao == "1":
        print(f"Usuário logado: {usuario_logado}")
    elif opcao == "2":
        novo_usuario = input("Digite o novo nome de usuário: ")
        if novo_usuario in usuarios:
            print("Usuário já existe!")
        else:
            nova_senha = input("Digite a senha para o novo usuário: ")
            usuarios[novo_usuario] = nova_senha
            print(f"Usuário '{novo_usuario}' criado com sucesso!")
            print(usuarios)
    elif opcao == "3":
        print("Saindo... Até logo!")
        break
    else:
        print("Opção inválida, tente novamente.")