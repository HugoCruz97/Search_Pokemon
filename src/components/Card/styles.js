import styled from "styled-components";

const Wrapper = styled.div `
    width: 300px;
    padding: 24px 12px;
    border-radius: 4px;
    margin: 0 auto;
    margin-top: 24px;
    background-color: #f8f8f8;
`

const Title = styled.p `
    font-size: 20px;
    text-align: center;

`

const Description = styled.p `
    font-size: 16px;
    text-align: center;
    color: gray;
`

const Image = styled.img `
    width: 96px;
    height: 96px;
    margin: 0 auto;
    display: block;
`
export { Wrapper, Title, Description, Image }