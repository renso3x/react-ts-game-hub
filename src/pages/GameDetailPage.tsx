import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandedText from "../components/ExpandedText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetails = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{data.name}</Heading>
        <ExpandedText>{data.description_raw}</ExpandedText>
        <GameAttributes game={data} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={data.id} />
        <GameScreenshots gameId={data.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetails;
