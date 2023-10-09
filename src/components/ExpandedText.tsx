import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
}
const ExpandedText = ({ children }: Props) => {
  const LIMIT = 300;
  const [expaneded, setExpanded] = useState(false);

  if (!children) return null;
  if (children.length <= LIMIT) return <Text>{children}</Text>;

  const summary = expaneded ? children : `${children.substring(0, LIMIT)}...`;

  return (
    <>
      <Text>
        {summary}
        <Button
          marginLeft={1}
          size="xs"
          fontWeight={"bold"}
          colorScheme="yellow"
          onClick={() => setExpanded(!expaneded)}
        >
          {expaneded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandedText;
