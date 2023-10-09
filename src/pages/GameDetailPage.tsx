import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandedText from "../components/ExpandedText";
import GameAttributes from "../components/GameAttributes";

const GameDetails = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpandedText>{data.description_raw}</ExpandedText>
      <GameAttributes game={data} />
    </>
  );
};

export default GameDetails;
