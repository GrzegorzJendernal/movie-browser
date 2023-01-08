import { useSelector } from "react-redux";
import DetailsTile from "../../../../common/DetailsTile";
import MovieTiles from "../../../../common/MovieTiles";
import Title from "../../../../common/Title";
import { Wrapper } from "../../../../common/Wrapper";
import { selectCredits, selectPersonDetails } from "../../personDetailsSlice";
import { DetailsWrapper } from "./styled";

const Person = () => {
  const personDetails = useSelector(selectPersonDetails);
  const personCredits = useSelector(selectCredits);

  return (
    <Wrapper>
      <DetailsWrapper>
        <DetailsTile
          poster={personDetails.profile_path}
          title={personDetails.name}
          dateBirth={personDetails.birthday}
          placeBirth={personDetails.place_of_birth}
          description={personDetails.biography}
        />
        <Title title={`Movies - cast (${personCredits.cast.length})`} />
        <MovieTiles
          movies={personCredits.cast}
          genres={personCredits.cast.genres_ids}
        />
        <Title title={`Movies - crew (${personCredits.crew.length})`} />
        <MovieTiles
          movies={personCredits.crew}
          genres={personCredits.crew.genres_ids}
        />
      </DetailsWrapper>
    </Wrapper>
  );
};

export default Person;
