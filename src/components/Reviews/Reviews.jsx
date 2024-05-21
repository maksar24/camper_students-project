import {
  Avatar,
  List,
  Name,
  ReviewWrapper,
  StarsWrapper,
  StyledIcon,
} from './Reviews.styled';

const Reviews = ({ data }) => {
  const { reviews } = data;

  return (
    <List>
      {reviews.length ? (
        reviews.map((review, index) => (
          <div key={index}>
            <ReviewWrapper>
              <Avatar>{review.reviewer_name.charAt(0)}</Avatar>
              <div>
                <Name>{review.reviewer_name}</Name>
                <StarsWrapper>
                  {Array.from({ length: review.reviewer_rating }, (_, i) => (
                    <StyledIcon key={i} name="filled-star" />
                  ))}
                </StarsWrapper>
              </div>
            </ReviewWrapper>
            <div>{review.comment}</div>
          </div>
        ))
      ) : (
        <p>There are no reviews yet</p>
      )}
    </List>
  );
};

export default Reviews;
