import { Box, Image, Flex, Link, Pool } from '@pancakeswap/uikit'
import styled from 'styled-components'


const InfoBox = styled(Box)`
color: #444467;
text-align: left;
margin-left: 15px;
margin-bottom: 15px;
line-height: 32px;
font-size: 15px;

}
`

const FlexInfo = styled(Flex)`
color: #444467;
text-align: left;
margin-left: 5px;
margin-bottom: 15px;
line-height: 32px;
font-size: 15px;
}
`




const ImageBall = styled(Image)`
margin: auto;
margin-top: 10px;
margin-bottom: 10px;

}
`
const WhitePaperButton = styled(Link)`
    background-image: linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%);
    padding: 10px 30px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    font-size: 14px;
    box-shadow: 0 0 20px #eee;
    display: inline;
    border-radius:3px;
    margin-top: 10px;
    &:hover {
        text-decoration: none;
        background-position: right center; /* change the direction of the change here */
       color: #fff;
      }
`

const HomeButton = styled(Link)`
    background-image: linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%);
    padding: 10px 30px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    font-size: 14px;
    box-shadow: 0 0 20px #eee;
    display: inline;
    border-radius:3px;
    margin-left: 20px;
    &:hover {
        text-decoration: none;
        background-position: right center; /* change the direction of the change here */
       color: #fff;
      }
`

interface CakeVaultDetailProps {
  name: string
}

export const BallExchange: React.FC<React.PropsWithChildren<CakeVaultDetailProps>> = ({
   name,
  }) => (
    <Pool.StyledCard className='BallInfo'>
        <Pool.PoolCardHeader>
            <>
                <Pool.PoolCardHeaderTitle
                    title={name}
                    subTitle="The Ball Exchange is AMM Dex built on Shibarium network" />

            </>

        </Pool.PoolCardHeader>
        <Box>
            <ImageBall className='BallToken' src="https://pbs.twimg.com/profile_banners/1470332898423152642/1688917822/1500x500" width={330} height={105} />
            <InfoBox>
                <FlexInfo>
                    <text>
                        <b>Token Name :</b> Ball Exchange Token<br />
                        <b>Token Symbol </b>: BALL <br />
                        <b>Total Supply :</b> 10,000,000 BALL <br />
                        <b>Price For Presale :</b> 0,45 - 0,5 USDT / BALL<br />
                        <b>Tokens For Presale :</b> 340,000 $BALL<br />
                    </text>
                </FlexInfo>
                <WhitePaperButton target='_blank' href='https://docs.ball.exchange/'>
                    WhitePaper
                </WhitePaperButton>
                <HomeButton target='_blank' href='https://linktr.ee/ballexchange'>
                Community
                </HomeButton>
            </InfoBox>
        </Box>
    </Pool.StyledCard>
)

export default BallExchange
