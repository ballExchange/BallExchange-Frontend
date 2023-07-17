import { useTranslation } from "@pancakeswap/localization";
import {Image } from '@pancakeswap/uikit'
import { BunnyPlaceholderIcon, Flex, Text } from "../../components";



const IfoNotTokens: React.FC<React.PropsWithChildren<{ participateText: string; showHowDoesItWork?: boolean }>> = ({
  participateText,
  showHowDoesItWork = true,
}) => {
  const { t } = useTranslation();

  return (
    <Flex flexDirection="column">
      <Image className='BallToken' src="https://data.ball.exchange/images/icon/dogIfo.png" width={125} height={99} margin="auto"/>
      <Flex flexDirection="column" alignItems="center" mt="16px" mb="24px">
        <Text bold mb="8px" textAlign="center">
          {t("You have no tokens available for claiming")}
        </Text>
      </Flex>
    </Flex>
  );
};

export default IfoNotTokens;
