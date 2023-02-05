import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 2rem;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: auto;
  justify-content: space-between;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;
const SocialIcons = styled.div`
  display: flex;
`;
const SIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 70%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOPPING ARENA</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          recusandae ipsam tempore error accusantium. Eveniet soluta vel quos
          dolores velit quae fugiat perspiciatis, numquam, quo molestias neque
          obcaecati est veritatis dicta quas maxime harum. Eveniet est nulla
          magni nihil beatae sunt perferendis perspiciatis atque provident
          harum. Vitae dignissimos enim atque.
        </Desc>

        <SocialIcons>
          <SIcon color="3B5999">
            <Facebook />
          </SIcon>
          <SIcon color="E4405f">
            <Instagram />
          </SIcon>
          <SIcon color="55ACEE">
            <Twitter />
          </SIcon>
          <SIcon color="E60023">
            <Pinterest />
          </SIcon>
          <SIcon color="3B5999">
            <LinkedIn />
          </SIcon>
        </SocialIcons>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Electronics</ListItem>
          <ListItem>Jewellery</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '20px' }} />
          Marvel Albero, Pune
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '20px' }} />
          +918605020249
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '20px' }} />
          aft4b.akhand@gmail.com
        </ContactItem>

        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
