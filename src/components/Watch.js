import React from "react";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { Button } from "./Button";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./styles/Watch.css";

export default function Watch({ watch }) {
  const { title, slug, img, price } = watch; // we get all those props from roomm which is passed from featured room

  {
    return (
      <article className="room">
        <div className="img-container">
          <img src={img} alt="single room" />
          <Link to={`/watches/${slug}`} className="btn-primary room-link">
            Features
          </Link>
        </div>
        <p className="room-info">{title}</p>
      </article>
    );
  }

  Watch.propTypes = {
    // we check Room component and prop which is passed to it and which is object thats why we say .shape after
    // and go through all properties inside room object and specify rules
    watch: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      img: PropTypes.arrayOf(PropTypes.string).isRequired, // images prop should be array of strings
      price: PropTypes.number.isRequired,
    }),
  };

  {
    /* return (
    <ProductsContainer>
      <ProductWrapper>
        <ProductCard>
          <ProductImg src={img} />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{title}</ProductTitle>
            </TextWrap>
            <Button
              to={`/watches/${id}`}
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {price + "$"}
            </Button>
          </ProductInfo>
        </ProductCard>
      </ProductWrapper>
    </ProductsContainer>
  );
}

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`;
const ProductImg = styled.div`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`;

const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`;
*/
  }
}
