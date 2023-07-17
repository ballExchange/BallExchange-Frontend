import styled from 'styled-components'

interface AvatarImageProps {
  src: string
  borderColor?: string
  alt?: string
}

const AvatarImage = styled.div.attrs<AvatarImageProps>(({ alt }) => ({
  alt,
}))<AvatarImageProps>`
  background: url('${({ src }) => src}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10%;
  position: relative;
  width: 96px;
  height: 96px;
  border: 4px ${({ borderColor }) => borderColor || '#f2ecf2'} solid;

  & > img {
    border-radius: 10%;
  }
`

export default AvatarImage
