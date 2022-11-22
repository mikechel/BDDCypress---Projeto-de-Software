describe("Teste do site",()=>{
  it ("Deveria ser possivel acessar o site",()=>{
    cy.visit("https://phpauloreis.github.io/todo-list-alpine-js/")
    cy.get('h1').should("include.text","O que fazer hoje?")
  })

  it("Deveria ser possivel cadastrar uma tarefa",()=>{
    cy.get('#todo_title').type("comer")
    cy.get('.bg-white > .col-auto > .btn').click()
    cy.get('.table-responsive').should("include.text","comer")
  })

  it("Deveria ser possivel concluir uma tarefa",()=>{
    cy.get('.form-check-input').click()
    cy.get('.form-check-input').should('be.checked')
  })

  it("Deveria ser possivel apagar uma tarefa",()=>{
    cy.get('.text-end > .btn').click()
    cy.on('window:confirm', () => true);
    cy.get('.table-responsive').contains("comer").should('not.exist')
  })

  it("Não deveria ser possivel cadastrar uma tarefa em branco",()=>{    
    cy.get('.bg-white > .col-auto > .btn').click()
    cy.on('window:alert', (str)=> {
      expect(str).to.equal('Digite um título para a tarefa!')
    })
  })

  it("Deveria ser possivel cadastrar uma tarefa",()=>{
    cy.get('#todo_title').type("andar")
    cy.get('.bg-white > .col-auto > .btn').click()
    cy.get('.table-responsive').contains("andar")
  })

  it("Deveria ser possivel concluir uma tarefa",()=>{
    cy.get('.form-check-input').click()
    cy.get('.form-check-input').should('be.checked')
  })

  it("Deveria ser possivel cadastrar uma tarefa",()=>{
    cy.get('#todo_title').type("Comer")
    cy.get('.bg-white > .col-auto > .btn').click()
    cy.get('.table-responsive').contains("Comer")
  })

  it("Deveria ser possivel selecionar todos as tarefas em aberto",()=>{
    cy.get('.pt-3 > .col-auto > .btn').select("Em aberto")
    cy.get('.mb-3').should("include.text","1")
    
  })

  it("Deveria ser possivel selecionar todos as tarefas concluidas",()=>{
    cy.get('.pt-3 > .col-auto > .btn').select("Concluídos")
    cy.get('.mb-3').should("include.text","1")
    
  })

  it("Deveria ser possivel selecionar todos as tarefas",()=>{
    cy.get('.pt-3 > .col-auto > .btn').select("Todos")
    cy.get('.mb-3').should("include.text","2")
    
  })



})
