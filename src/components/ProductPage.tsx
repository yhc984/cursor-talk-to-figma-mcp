import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 390px;
  height: 844px;
  background-color: white;
  position: relative;
`;

const TabMenu = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #eee;
`;

const Tab = styled.button<{ isActive: boolean }>`
  border: none;
  background: none;
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? "700" : "400")};
  color: ${(props) => (props.isActive ? "#3366ff" : "#999")};
  margin-right: 30px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 390px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.div`
  width: 200px;
  height: 250px;
  background-color: #cc9966;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductInfo = styled.div`
  padding: 20px;
`;

const ProductTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  color: #ffcc00;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Price = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
`;

const BuyButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #3366ff;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

const ProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("상품정보");

  return (
    <Container>
      <TabMenu>
        <Tab
          isActive={activeTab === "상품정보"}
          onClick={() => setActiveTab("상품정보")}
        >
          상품정보
        </Tab>
        <Tab
          isActive={activeTab === "리뷰"}
          onClick={() => setActiveTab("리뷰")}
        >
          리뷰
        </Tab>
        <Tab isActive={activeTab === "Q&A"} onClick={() => setActiveTab("Q&A")}>
          Q&A
        </Tab>
      </TabMenu>

      <ImageContainer>
        <ProductImage>
          <span style={{ fontSize: "48px" }}>🐕</span>
          <span
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#331100",
              marginTop: "10px",
            }}
          >
            Premium
          </span>
        </ProductImage>
      </ImageContainer>

      <ProductInfo>
        <ProductTitle>프리미엄 강아지 사료</ProductTitle>
        <Rating>★★★★☆ 4.8 (2,384)</Rating>
        <Price>39,900원</Price>
        <Description>
          • 100% 자연 원료로 만든 프리미엄 사료
          <br />
          • 강아지의 건강한 성장을 위한 영양 밸런스
          <br />
          • 소화가 잘되는 특별 가공 공법
          <br />• 모든 연령대의 강아지에게 적합
        </Description>
      </ProductInfo>

      <BuyButton>구매하기</BuyButton>
    </Container>
  );
};

export default ProductPage;
