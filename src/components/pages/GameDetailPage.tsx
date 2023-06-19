import { useParams } from "react-router-dom";
import useGame from "../../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../../ExpandableText";
import DefinitionItem from "../DefinitionItem";
import CriticScore from "../CriticScore";
import GameAttributes from "../GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;