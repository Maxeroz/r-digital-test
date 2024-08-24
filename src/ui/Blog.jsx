import styled from "styled-components";
import Heading from "./Heading";
import Pagination from "./Pagination";

const BlogContainer = styled.div`
  position: relative;

  display: flex;
  padding: 60px;
  flex-direction: column;
  gap: 70px;
  align-items: flex-start;

  margin-bottom: 100px;
`;

const NumberSpan = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-primary);
  opacity: 0.6;
`;

const BrandInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const BrandSpan = styled.span`
  font-size: 18px;
  display: flex;
  text-align: right;
  width: 90px;
  white-space: normal;
`;

const TitleSpan = styled.span`
  font-size: 28px;
  width: 200px;
  white-space: normal;
  text-transform: uppercase;
`;

const DateSpan = styled.span`
  font-size: 15px;
  width: 82px;
  margin-top: auto;
`;

const BlogCardSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 31px;
  width: 283px;
  height: 100%;
  position: relative; /* Ensure this is positioned relative */
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 283px;
  height: 100%;
  padding: 13px;
  position: relative; /* Ensure this is positioned relative */
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1; /* Ensure this has a lower z-index than the ellipse */
`;

const BlogCard = styled.div`
  width: 580px;
  height: 342px;
  gap: 14px;
  display: flex;
  align-items: flex-start;

  background-color: var(--color-decoration-bg);
  clip-path: path(
    "M337 0.766602C314.909 0.766602 297 18.6752 297 40.7666L297 76.7666C297 80.6326 293.866 83.7666 290 83.7666C286.134 83.7666 283 80.6326 283 76.7666L283 40.7666C283 18.6752 265.091 0.766602 243 0.766602L40 0.766602C17.9086 0.766602 0 18.6752 0 40.7666L0 302.767C0 324.858 17.9086 342.767 40 342.767L103.183 342.767C110.089 342.767 115.821 337.668 117.975 331.107C126.859 304.051 150.891 284.767 179.5 284.767C207.965 284.767 232.606 303.858 242.59 330.699C245.062 337.347 251.433 342.519 258.007 339.856C272.663 333.92 283 319.551 283 302.767V266.767C283 262.901 286.134 259.767 290 259.767C293.866 259.767 297 262.901 297 266.767V302.767C297 324.858 314.909 342.767 337 342.767L540 342.767C562.091 342.767 580 324.858 580 302.767L580 40.7666C580 18.6752 562.091 0.766602 540 0.766602L337 0.766602Z"
  );
`;

const CardsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
`;

const Box = styled.div`
  position: relative;
`;

const BlogElipse = styled.button`
  position: absolute;
  left: 130px;
  top: 295px;
  width: 96px;
  height: 81px;
  border: 2px solid var(--color-accent-text);
  z-index: 99;

  color: var(--color-text-primary);

  border-radius: 50%;

  transform: rotate(-15deg);

  background-color: var(--color-decoration-bg);
`;

const TimingContainer = styled.div`
  position: absolute;

  top: 10px;
  left: 33px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Time = styled.span`
  font-family: "Floreste", sans-serif;
  font-size: 40px;
`;

const TitlePagination = styled.div`
  display: flex;
  align-items: center;

  gap: 45px;
`;

/* eslint-disable-next-line react/prop-types */
function Blog({ options }) {
  return (
    <BlogContainer>
      <TitlePagination>
        <Pagination />
        <Heading as="h1" align="center">
          Блог
        </Heading>
      </TitlePagination>
      <CardsContainer>
        {/* eslint-disable-next-line react/prop-types  */}
        {options.map((option, i) => (
          <Box key={option.title}>
            <BlogElipse>
              <TimingContainer>
                <Time>{option.time}</Time>
                <span>мин</span>
              </TimingContainer>
            </BlogElipse>
            <BlogCard>
              <BlogCardSection>
                <BrandInfoContainer>
                  <NumberSpan>0{i + 1}</NumberSpan>
                  <BrandSpan>{option.brand}</BrandSpan>
                </BrandInfoContainer>
                <TitleSpan>{option.title}</TitleSpan>
                <DateSpan>{option.date}</DateSpan>
              </BlogCardSection>

              <ImageSection>
                <StyledImage src={option.imageUrl} />
              </ImageSection>
            </BlogCard>
          </Box>
        ))}
      </CardsContainer>
    </BlogContainer>
  );
}

export default Blog;
