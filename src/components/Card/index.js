import { Wrapper, Title, Description, Image } from "./styles";

function Card(props) {
  return (
    <Wrapper>
      <Image src={props.image} />
      <Title>{props.name}</Title>
      <Description>Altura: {props.height}</Description>
      <Description>Peso: {props.weight}</Description>
    </Wrapper>
  );
}

export default Card;
