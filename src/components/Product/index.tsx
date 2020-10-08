import React from 'react';
import tshirtImage from '../../assets/tshirt.png'
import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
        <Gallery>
          <img src={tshirtImage} alt="T-Shirt"/>
        </Gallery>

        <Info /> 

        </Column>
          <ProductAction/>
        <SellerInfo/> 

          
        <Column>
          <WarrantSection/>
          <WarrantSection/>
          <WarrantSection/> 
        </Column>
      </Panel>

      </Container>
  );

};

  const WarrantSection = () =>(
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantida com o Felipe</p>
          <p className="description">Receba o produto que você esta esperando! Caso contrario, devolvemos o seu dinheiro.</p>
        </span>

        <span>
          <p className="title">Garantia com o vendedor</p>
          <p className="description">Sem garantia.</p>
        </span>
      </div>

      <a href="#">Saiba mais sobre garantia</a>
    </Section>
  
)


  const Info = () =>(
    <Description>
      <h2>Descrição</h2>
        <p>
        Camiseta Lisa 100% Algodão Penteado Fio 30.1 GRAMATURA 160! ( não é fina ou transparente )<br /><br />

        Gola redonda Corte Tradicional<br /><br />

        » Tecido de alta durabilidade<br />
        » Camisetas Lisas confeccionadas com alta tecnologia.<br />
        » Dupla costura - Costuradas em máquinas e linhas de qualidade.<br /><br />

        Tamanhos :<br />
        P - M - G - GG<br /><br />

        Dimensões:<br /><br />

        Altura x Largura<br /><br />

        P - 68cm 49cm<br />
        M - 69cm 50cm<br />
        G - 73cm 53cm<br />
        GG - 74cm 55cm<br /><br />

        Medidas da manga<br /><br />

        P - Comprimento 21cm Largura 16cm<br />
        M - Comprimento 22cm Largara 17cm<br />
        G - Comprimento 23cm Largura 18cm<br />
        GG - Comprimento 24cm Largura 19cm<br /><br />

        * Medidas Aproximadas (podendo variar 1 ou 2 centímetros)<br /><br />


        CORES<br />
        Branco<br />
        Preto<br />
        Mescla Cinza<br />
        Chumbo<br />
        Mescla Cinza Escuro<br />
        Azul Turquesa<br />
        Azul Royal<br />
        Azul Marinho<br />
        Verde Bandeia<br />
        Verde Escuro<br />
        Vermelho<br />
        Violeta<br />
        Amarelo Ouro<br />
        Laranja<br />
        Vinho<br />

  </p>
    </Description>
  )
      

export default Product;