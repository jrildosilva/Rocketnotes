 import { Container, Links, Content } from"./style";
 


 import { Tag } from "../../components/Tag";
 import { Button } from "../../components/Button";
 import { Header } from "../../components/Header";
 import { Section } from "../../components/Section";
 import { ButtonText } from "../../components/ButtonText";
 
 
  export  function Details() {
    return(
       <Container>
         <Header />
         <main>
          <Content>
           <ButtonText title="Excluir nota"/>
           <h1>
            Introdução a React
           </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Corrupti ea maiores at totam? Necessitatibus 
              harum accusamus aut totam voluptatum dignissimos 
              maiores quia quas laboriosam, amet sit tenetur rem nam 
              tempora.
              Lorem ipsum dolor sit amet, consectetur adipisicing 
              elit. Eos rem aut asperiores doloremque consequatur. 
              Repellendus similique blanditiis consequuntur at 
              minima? Neque illum veritatis rem, cumque totam 
              repellendus dolorum tempore vero.
            </p>
           <Section title="Links Úteis">
            <Links>
             <li><a href="#">https://www.rocketseat.com.br</a></li>
             <li><a href="#">https://www.rocketseat.com.br</a></li>
             <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
           </Section>
           <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
           </Section>
           <Button title="Voltar"/>
          </Content>
         </main>

       </Container>
    )
  }