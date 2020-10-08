import React from 'react';

import { Container, Condition, Row, HeartIcon, DispatchTag, PriceCard, PriceRow, InstallmentsInfo, StockStatus, MethodCard, CheckIcon, Actions, Button, Benefits, ShieldIcon } from './styles';

const ProductAction: React.FC = () => {
  return (
      <Container>
          <Condition>Novo</Condition>

          <Row>
              <h1>Camiseta branca</h1>
              <HeartIcon/>
          </Row>
          <DispatchTag>Enviando normalmente</DispatchTag>

          <PriceCard>
              <PriceRow>
                  <span className="symbol">R$</span>
                  <span className="fraction">34</span>
                  <span className="cents">99</span>
              </PriceRow>
              <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
          </PriceCard>

          <StockStatus>Estoque disponivel</StockStatus>

          <MethodCard>
              <CheckIcon/>

              <div>
                  <span className="title">Frete grátis</span>
                  <span className="details">Beneficio Felipe Store</span>
                  <a href="#" className="more">
                      Ver mais opções
                  </a>
              </div>
          </MethodCard>
          <Actions>
              <Button solid>Comprar agora</Button>
              <Button>Adicionar ao carrinho</Button>
          </Actions>

          <Benefits>
              <li>
                  <ShieldIcon/>
                  <p>Compra Garantida, receba o produto que esta esperando ou devolvemos o seu dinheiro!</p>
              </li>
          </Benefits>
      </Container>
  );
}

export default ProductAction;